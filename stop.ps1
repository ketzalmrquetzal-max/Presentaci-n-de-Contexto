Write-Host "DETENIENDO SERVIDORES"
Get-Process python -ErrorAction SilentlyContinue | Stop-Process -Force
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force  
Write-Host "Servidores detenidos"
