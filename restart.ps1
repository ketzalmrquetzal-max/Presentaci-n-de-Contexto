# Script para REINICIAR Backend + Frontend
# Uso: .\restart.ps1

Write-Host "================================" -ForegroundColor Cyan
Write-Host "🔄 REINICIANDO SERVIDORES" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Ejecutar stop
Write-Host "1️⃣  Deteniendo servidores actuales..." -ForegroundColor Yellow
& .\stop.ps1

# Esperar un poco
Write-Host ""
Write-Host "⏳ Esperando 2 segundos..." -ForegroundColor Yellow
Start-Sleep -Seconds 2

# Ejecutar start
Write-Host ""
Write-Host "2️⃣  Iniciando servidores frescos..." -ForegroundColor Yellow
& .\start.ps1
