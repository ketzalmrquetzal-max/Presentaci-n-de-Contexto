#!/bin/bash
# Script para INICIAR Backend + Frontend
# Uso: ./start.sh

echo "================================"
echo "🚀 INICIANDO SERVIDORES"
echo "================================"
echo ""

# Verificar si ya hay procesos corriendo
BACKEND_PID=$(pgrep -f "uvicorn main:app")
FRONTEND_PID=$(pgrep -f "vite")

if [ ! -z "$BACKEND_PID" ]; then
    echo "⚠️  Backend ya está corriendo (PID: $BACKEND_PID)"
else
    echo "📡 Iniciando Backend (FastAPI)..."
    cd backend
    nohup uvicorn main:app --host 0.0.0.0 --port 8000 --reload > ../backend.log 2>&1 &
    BACKEND_PID=$!
    cd ..
    sleep 2
    echo "✅ Backend iniciado en http://localhost:8000 (PID: $BACKEND_PID)"
fi

if [ ! -z "$FRONTEND_PID" ]; then
    echo "⚠️  Frontend ya está corriendo (PID: $FRONTEND_PID)"
else
    echo "🎨 Iniciando Frontend (Vite)..."
    cd frontend
    nohup npm run dev -- --host > ../frontend.log 2>&1 &
    FRONTEND_PID=$!
    cd ..
    sleep 3
    echo "✅ Frontend iniciado en http://localhost:5173 (PID: $FRONTEND_PID)"
fi

echo ""
echo "================================"
echo "✅ SERVIDORES ACTIVOS"
echo "================================"
echo ""
echo "📊 Admin:  http://localhost:5173/?modo=admin"
echo "📱 Mobile: http://localhost:5173/"
echo "🔌 API:    http://localhost:8000"
echo ""
echo "Logs: backend.log, frontend.log"
echo "Para detener: ./stop.sh"
