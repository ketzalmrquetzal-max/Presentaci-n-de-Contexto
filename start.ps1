# Script para INICIAR Backend + Frontend
# Uso: .\start.ps1

Write-Host "================================" -ForegroundColor Cyan
Write-Host "🚀 INICIANDO SERVIDORES" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si ya hay procesos corriendo
$backendProcess = Get-Process | Where-Object { $_.ProcessName -like "*python*" -and $_.CommandLine -like "*uvicorn*" }
$frontendProcess = Get-Process | Where-Object { $_.ProcessName -like "*node*" -and $_.CommandLine -like "*vite*" }

if ($backendProcess) {
    Write-Host "⚠️  Backend ya está corriendo (PID: $($backendProcess.Id))" -ForegroundColor Yellow
} else {
    Write-Host "📡 Iniciando Backend (FastAPI)..." -ForegroundColor Green
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; uvicorn main:app --host 0.0.0.0 --port 8000 --reload" -WindowStyle Normal
    Start-Sleep -Seconds 2
    Write-Host "✅ Backend iniciado en http://localhost:8000" -ForegroundColor Green
}

if ($frontendProcess) {
    Write-Host "⚠️  Frontend ya está corriendo (PID: $($frontendProcess.Id))" -ForegroundColor Yellow
} else {
    Write-Host "🎨 Iniciando Frontend (Vite)..." -ForegroundColor Green
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev -- --host" -WindowStyle Normal
    Start-Sleep -Seconds 3
    Write-Host "✅ Frontend iniciado en http://localhost:5173" -ForegroundColor Green
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "✅ SERVIDORES ACTIVOS" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📊 Admin:  http://localhost:5173/?modo=admin" -ForegroundColor Cyan
Write-Host "📱 Mobile: http://localhost:5173/" -ForegroundColor Cyan
Write-Host "🔌 API:    http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para detener: .\stop.ps1" -ForegroundColor Yellow
