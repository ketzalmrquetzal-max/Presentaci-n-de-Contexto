#!/bin/bash
# Script para DETENER Backend + Frontend
# Uso: ./stop.sh

echo "================================"
echo "🛑 DETENIENDO SERVIDORES"
echo "================================"
echo ""

# Detener Backend
BACKEND_PIDS=$(pgrep -f "uvicorn main:app")
if [ ! -z "$BACKEND_PIDS" ]; then
    echo "🔴 Deteniendo Backend..."
    echo "$BACKEND_PIDS" | while read pid; do
        kill -9 $pid
        echo "   ✅ Proceso $pid detenido"
    done
else
    echo "⚠️  Backend no está corriendo"
fi

# Detener Frontend
FRONTEND_PIDS=$(pgrep -f "vite")
if [ ! -z "$FRONTEND_PIDS" ]; then
    echo "🔴 Deteniendo Frontend..."
    echo "$FRONTEND_PIDS" | while read pid; do
        kill -9 $pid
        echo "   ✅ Proceso $pid detenido"
    done
else
    echo "⚠️  Frontend no está corriendo"
fi

# Limpiar procesos Node huérfanos
NODE_PIDS=$(pgrep -f "node")
if [ ! -z "$NODE_PIDS" ]; then
    echo "🧹 Limpiando procesos Node huérfanos..."
    echo "$NODE_PIDS" | while read pid; do
        kill -9 $pid 2>/dev/null
    done
fi

echo ""
echo "================================"
echo "✅ SERVIDORES DETENIDOS"
echo "================================"
echo ""
echo "Para iniciar nuevamente: ./start.sh"
