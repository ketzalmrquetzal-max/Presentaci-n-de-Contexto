# Script para DETENER Backend + Frontend
# Uso: .\stop.ps1

Write-Host "================================" -ForegroundColor Cyan
Write-Host "🛑 DETENIENDO SERVIDORES" -ForegroundColor Red
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Detener procesos Python (Backend)
$pythonProcesses = Get-Process | Where-Object { $_.ProcessName -like "*python*" -and $_.CommandLine -like "*uvicorn*" }
if ($pythonProcesses) {
    Write-Host "🔴 Deteniendo Backend..." -ForegroundColor Yellow
    $pythonProcesses | ForEach-Object {
        Stop-Process -Id $_.Id -Force
        Write-Host "   ✅ Proceso $($_.Id) detenido" -ForegroundColor Green
    }
} else {
    Write-Host "⚠️  Backend no está corriendo" -ForegroundColor Yellow
}

# Detener procesos Node (Frontend)
$nodeProcesses = Get-Process | Where-Object { $_.ProcessName -like "*node*" -and $_.CommandLine -like "*vite*" }
if ($nodeProcesses) {
    Write-Host "🔴 Deteniendo Frontend..." -ForegroundColor Yellow
    $nodeProcesses | ForEach-Object {
        Stop-Process -Id $_.Id -Force
        Write-Host "   ✅ Proceso $($_.Id) detenido" -ForegroundColor Green
    }
} else {
    Write-Host "⚠️  Frontend no está corriendo" -ForegroundColor Yellow
}

# Limpiar procesos huérfanos de PowerShell
$orphanedPowershell = Get-Process powershell | Where-Object { $_.MainWindowTitle -like "*uvicorn*" -or $_.MainWindowTitle -like "*vite*" }
if ($orphanedPowershell) {
    Write-Host "🧹 Limpiando ventanas de PowerShell..." -ForegroundColor Yellow
    $orphanedPowershell | Stop-Process -Force
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "✅ SERVIDORES DETENIDOS" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para iniciar nuevamente: .\start.ps1" -ForegroundColor Cyan
