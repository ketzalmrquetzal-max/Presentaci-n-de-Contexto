from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from typing import List
from pathlib import Path
import json
import os

app = FastAPI()

# Permitir conexiones desde cualquier origen (necesario para IDX)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- ESTADO GLOBAL ---
class GlobalState:
    def __init__(self):
        self.current_slide = 0  # Slide actual (0-indexed)
        self.rationality_votes = {"segura": 0, "riesgo": 0}  # Dinámica 1
        self.ethics_votes = {"vida": 0, "dinero": 0}  # Dinámica 3
        self.total_participants = 0  # Contador de participantes únicos

        # Fase 6: Nuevas dinámicas
        self.exclusion_radar = {
            "adultos_mayores": 0,
            "sin_datos": 0,
            "disc_visual": 0,
            "turistas": 0,
        }

        self.framing_effect = {
            "proyecto_a_acepta": 0,
            "proyecto_a_rechaza": 0,
            "proyecto_b_acepta": 0,
            "proyecto_b_rechaza": 0,
            "fase": 1,  # 1, 2, o 3
        }

        self.pressure_game = {
            "total_taps": 0,
            "target": 100,
            "time_left": 15,
            "active": False,
        }


state = GlobalState()


# --- GESTOR DE CONEXIONES ---
class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        # Actualizar contador de participantes (máximo histórico)
        if len(self.active_connections) > state.total_participants:
            state.total_participants = len(self.active_connections)
        print(
            f"✅ Cliente conectado. Total: {len(self.active_connections)} | Max: {state.total_participants}"
        )
        # Enviar estado actual al conectarse
        await self.send_state(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
        print(f"❌ Cliente desconectado. Total: {len(self.active_connections)}")

    async def send_state(self, websocket: WebSocket):
        """Enviar estado actual a un cliente específico"""
        try:
            data = {
                "type": "SYNC_STATE",
                "payload": {
                    "slide": state.current_slide,
                    "rationality": state.rationality_votes,
                    "ethics": state.ethics_votes,
                    "participants": state.total_participants,
                    "connected": len(self.active_connections),
                },
            }
            await websocket.send_json(data)
        except Exception as e:
            print(f"⚠️ Error enviando estado a cliente: {e}")
            # No desconectar aquí, dejar que el loop principal lo maneje

    async def broadcast_state(self):
        """Enviar estado a TODOS los clientes conectados"""
        data = {
            "type": "SYNC_STATE",
            "payload": {
                "slide": state.current_slide,
                "rationality": state.rationality_votes,
                "ethics": state.ethics_votes,
                "participants": state.total_participants,
                "connected": len(self.active_connections),
                # Fase 6: Nuevas dinámicas
                "exclusion": state.exclusion_radar,
                "framing": state.framing_effect,
                "pressure": state.pressure_game,
            },
        }
        # Broadcast a todos (con manejo de errores individual)
        disconnected = []
        for connection in self.active_connections:
            try:
                await connection.send_json(data)
            except Exception as e:
                print(f"⚠️ Error broadcasting: {e}")
                disconnected.append(connection)

        # Limpiar conexiones muertas sin bloquear
        for conn in disconnected:
            try:
                self.active_connections.remove(conn)
            except ValueError:
                pass


manager = ConnectionManager()

# --- SERVIR ARCHIVOS ESTÁTICOS DEL FRONTEND ---
static_path = Path(__file__).parent / "static"
if static_path.exists():
    # Montar assets (CSS, JS)
    assets_path = static_path / "assets"
    if assets_path.exists():
        app.mount("/assets", StaticFiles(directory=assets_path), name="assets")


# --- ENDPOINTS ---
@app.get("/api")
def read_root():
    """API status endpoint"""
    return {
        "status": "Sistema Operativo 🚀",
        "fase": 1,
        "current_slide": state.current_slide,
        "connected_clients": len(manager.active_connections),
    }


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)

    try:
        while True:
            # Recibir mensaje del cliente
            data = await websocket.receive_json()
            action = data.get("action")
            payload = data.get("payload", {})

            print(f"📨 Action: {action}, Payload: {payload}")

            # --- CAMBIAR DE SLIDE ---
            if action == "CHANGE_SLIDE":
                slide_index = payload.get("slide_index", 0)
                state.current_slide = slide_index
                print(f"📊 Slide cambiado a: {slide_index}")
                # Notificar a TODOS los clientes
                await manager.broadcast_state()

            # --- VOTAR RACIONALIDAD ---
            elif action == "VOTE_RATIONALITY":
                option = payload.get("option")  # "segura" o "riesgo"
                if option in state.rationality_votes:
                    state.rationality_votes[option] += 1
                    print(f"🗳️ Voto: {option} | Total: {state.rationality_votes}")
                    await manager.broadcast_state()

            # --- VOTAR ÉTICA ---
            elif action == "VOTE_ETHICS":
                option = payload.get("option")  # "vida" o "dinero"
                if option in state.ethics_votes:
                    state.ethics_votes[option] += 1
                    print(f"⚖️ Voto ético: {option} | Total: {state.ethics_votes}")
                    await manager.broadcast_state()

            # --- RESETEAR ACTIVIDAD ---
            elif action == "RESET_ACTIVITY":
                activity = payload.get("activity")
                if activity == "rationality":
                    state.rationality_votes = {"segura": 0, "riesgo": 0}
                    print(f"🔄 Reset: {activity}")
                    await manager.broadcast_state()
                elif activity == "ethics":
                    state.ethics_votes = {"vida": 0, "dinero": 0}
                    print(f"🔄 Reset: {activity}")
                    await manager.broadcast_state()
                elif activity == "exclusion":
                    state.exclusion_radar = {
                        "adultos_mayores": 0,
                        "sin_datos": 0,
                        "disc_visual": 0,
                        "turistas": 0,
                    }
                    print(f"🔄 Reset: exclusion radar")
                    await manager.broadcast_state()
                elif activity == "framing":
                    state.framing_effect = {
                        "proyecto_a_acepta": 0,
                        "proyecto_a_rechaza": 0,
                        "proyecto_b_acepta": 0,
                        "proyecto_b_rechaza": 0,
                        "fase": 1,
                    }
                    print(f"🔄 Reset: framing effect")
                    await manager.broadcast_state()
                elif activity == "pressure":
                    state.pressure_game = {
                        "total_taps": 0,
                        "target": 100,
                        "time_left": 15,
                        "active": False,
                    }
                    print(f"🔄 Reset: pressure game")
                    await manager.broadcast_state()

            # --- FASE 6: RADAR DE EXCLUSIÓN ---
            elif action == "VOTE_EXCLUSION":
                category = payload.get("category")
                if category in state.exclusion_radar:
                    state.exclusion_radar[category] += 1
                    print(
                        f"📡 Radar exclusión: {category} | Total: {state.exclusion_radar}"
                    )
                    await manager.broadcast_state()

            # --- FASE 6: EFECTO MARCO ---
            elif action == "VOTE_FRAMING":
                proyecto = payload.get("proyecto")  # "a" o "b"
                decision = payload.get("decision")  # "acepta" o "rechaza"
                key = f"proyecto_{proyecto}_{decision}"
                if key in state.framing_effect:
                    state.framing_effect[key] += 1
                    print(f"🎭 Framing: {key} | Fase: {state.framing_effect['fase']}")
                    await manager.broadcast_state()

            elif action == "CHANGE_FRAMING_PHASE":
                fase = payload.get("fase", 1)
                state.framing_effect["fase"] = fase
                print(f"📋 Cambio de fase framing: {fase}")
                await manager.broadcast_state()

            # --- FASE 6: PRESIÓN INGENIERIL ---
            elif action == "START_PRESSURE_GAME":
                state.pressure_game["active"] = True
                state.pressure_game["time_left"] = 15
                state.pressure_game["total_taps"] = 0
                print(f"🚀 Juego de presión iniciado!")
                await manager.broadcast_state()

            elif action == "TAP_BUILD":
                if state.pressure_game["active"]:
                    state.pressure_game["total_taps"] += 1
                    print(f"🔨 Tap! Total: {state.pressure_game['total_taps']}")
                    await manager.broadcast_state()

            # --- ECHO (para testing) ---
            elif action == "TEST":
                await websocket.send_json({"type": "ECHO", "data": data})

    except WebSocketDisconnect:
        manager.disconnect(websocket)
    except Exception as e:
        print(f"❌ Error en WebSocket: {e}")
        manager.disconnect(websocket)


# --- CATCH-ALL ROUTE PARA SPA ---
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    """Serve React SPA for all routes, but serve static files first"""
    static_path = Path(__file__).parent / "static"

    # Si el path es un archivo estático (PNG, JPG, etc), servirlo directamente
    file_path = static_path / full_path
    if file_path.exists() and file_path.is_file():
        return FileResponse(file_path)

    # Si no es un archivo estático, servir index.html (SPA)
    index_file = static_path / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    else:
        return {"error": "Frontend not built. Run 'npm run build' in frontend/"}
