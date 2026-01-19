Write-Host "INICIANDO SERVIDORES"
Write-Host ""
Write-Host "Iniciando Backend..."
Start-Process powershell -ArgumentList "-NoExit","-Command","cd backend; uvicorn main:app --host 0.0.0.0 --port 8000 --reload"
Start-Sleep -Seconds 2
Write-Host "Iniciando Frontend..."
Start-Process powershell -ArgumentList "-NoExit","-Command","cd frontend; npm run dev -- --host"
Start-Sleep -Seconds 2
Write-Host ""
Write-Host "LISTO!"
Write-Host "Admin:  http://localhost:5173/?modo=admin"
Write-Host "Mobile: http://localhost:5173/"
Write-Host "API:    http://localhost:8000/docs"
