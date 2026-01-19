#!/bin/bash
# Script para REINICIAR Backend + Frontend
# Uso: ./restart.sh

echo "================================"
echo "🔄 REINICIANDO SERVIDORES"
echo "================================"
echo ""

# Ejecutar stop
echo "1️⃣  Deteniendo servidores actuales..."
./stop.sh

# Esperar un poco
echo ""
echo "⏳ Esperando 2 segundos..."
sleep 2

# Ejecutar start
echo ""
echo "2️⃣  Iniciando servidores frescos..."
./start.sh
