"""
Script de testing manual del backend
Ejecutar con el servidor corriendo
"""

import websockets
import asyncio
import json

WS_URL = "ws://localhost:8000/ws"


async def test_connection():
    """Test 1: Conexión WebSocket"""
    print("\n🧪 TEST 1: Conexión WebSocket")
    async with websockets.connect(WS_URL) as ws:
        # Recibir sync inicial
        response = await ws.recv()
        data = json.loads(response)
        print(f"✅ Conectado - Tipo: {data['type']}")
        print(f"   Slide actual: {data['payload']['slide']}")
        return True


async def test_change_slide():
    """Test 2: Cambiar slide"""
    print("\n🧪 TEST 2: Cambiar slide")
    async with websockets.connect(WS_URL) as ws:
        await ws.recv()  # Sync inicial

        # Cambiar a slide 5
        await ws.send(
            json.dumps({"action": "CHANGE_SLIDE", "payload": {"slide_index": 5}})
        )

        response = await ws.recv()
        data = json.loads(response)
        assert data["payload"]["slide"] == 5
        print("✅ Slide cambiado a 5")
        return True


async def test_vote_rationality():
    """Test 3: Votar racionalidad"""
    print("\n🧪 TEST 3: Votar racionalidad")
    async with websockets.connect(WS_URL) as ws:
        await ws.recv()

        await ws.send(
            json.dumps({"action": "VOTE_RATIONALITY", "payload": {"option": "segura"}})
        )

        response = await ws.recv()
        data = json.loads(response)
        print(
            f"✅ Voto registrado - Segura: {data['payload']['rationality']['segura']}"
        )
        return True


async def test_vote_exclusion():
    """Test 4: Radar de Exclusión"""
    print("\n🧪 TEST 4: Radar de Exclusión (Fase 6)")
    async with websockets.connect(WS_URL) as ws:
        await ws.recv()

        await ws.send(
            json.dumps(
                {"action": "VOTE_EXCLUSION", "payload": {"category": "adultos_mayores"}}
            )
        )

        response = await ws.recv()
        data = json.loads(response)
        print(
            f"✅ Exclusión registrada - Adultos mayores: {data['payload']['exclusion']['adultos_mayores']}"
        )
        return True


async def test_framing_effect():
    """Test 5: Efecto Marco"""
    print("\n🧪 TEST 5: Efecto Marco (Fase 6)")
    async with websockets.connect(WS_URL) as ws:
        await ws.recv()

        # Votar proyecto A
        await ws.send(
            json.dumps(
                {
                    "action": "VOTE_FRAMING",
                    "payload": {"proyecto": "a", "decision": "acepta"},
                }
            )
        )

        response = await ws.recv()
        data = json.loads(response)
        print(
            f"✅ Voto framing - Proyecto A acepta: {data['payload']['framing']['proyecto_a_acepta']}"
        )

        # Cambiar fase
        await ws.send(
            json.dumps({"action": "CHANGE_FRAMING_PHASE", "payload": {"fase": 2}})
        )

        response = await ws.recv()
        data = json.loads(response)
        print(f"✅ Fase cambiada a: {data['payload']['framing']['fase']}")
        return True


async def test_pressure_game():
    """Test 6: Juego de Presión"""
    print("\n🧪 TEST 6: Juego de Presión (Fase 6)")
    async with websockets.connect(WS_URL) as ws:
        await ws.recv()

        # Iniciar juego
        await ws.send(json.dumps({"action": "START_PRESSURE_GAME"}))

        response = await ws.recv()
        data = json.loads(response)
        print(f"✅ Juego iniciado - Active: {data['payload']['pressure']['active']}")

        # Simular 5 taps
        for i in range(5):
            await ws.send(json.dumps({"action": "TAP_BUILD"}))
            response = await ws.recv()

        data = json.loads(response)
        print(f"✅ Taps registrados: {data['payload']['pressure']['total_taps']}")
        return True


async def test_reset_all():
    """Test 7: Reset de actividades"""
    print("\n🧪 TEST 7: Reset de todas las actividades")
    async with websockets.connect(WS_URL) as ws:
        await ws.recv()

        activities = ["rationality", "ethics", "exclusion", "framing", "pressure"]
        for activity in activities:
            await ws.send(
                json.dumps(
                    {"action": "RESET_ACTIVITY", "payload": {"activity": activity}}
                )
            )
            response = await ws.recv()

        print(f"✅ {len(activities)} actividades reseteadas")
        return True


async def run_all_tests():
    """Ejecutar todos los tests"""
    print("=" * 60)
    print("🚀 TESTS MANUALES DEL BACKEND")
    print(" IMPORTANTE: El servidor debe estar corriendo en :8000")
    print("=" * 60)

    tests = [
        test_connection,
        test_change_slide,
        test_vote_rationality,
        test_vote_exclusion,
        test_framing_effect,
        test_pressure_game,
        test_reset_all,
    ]

    passed = 0
    failed = 0

    for test in tests:
        try:
            await test()
            passed += 1
        except Exception as e:
            print(f"❌ FALLÓ: {e}")
            failed += 1

    print("\n" + "=" * 60)
    print(f"📊 RESULTADOS: {passed} pasados, {failed} fallidos")
    print("=" * 60 + "\n")


if __name__ == "__main__":
    try:
        asyncio.run(run_all_tests())
    except KeyboardInterrupt:
        print("\n⚠️ Tests interrumpidos por el usuario")
    except Exception as e:
        print(f"\n❌ Error: {e}")
        print("   ¿El servidor está corriendo en localhost:8000?")
