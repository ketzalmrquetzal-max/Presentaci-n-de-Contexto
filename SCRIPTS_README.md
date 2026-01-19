# Scripts de Control de Servidores

Scripts para iniciar/detener backend y frontend automáticamente.

## 🪟 Windows (PowerShell)

### Iniciar
```powershell
.\start.ps1
```

### Detener
```powershell
.\stop.ps1
```

### Reiniciar
```powershell
.\restart.ps1
```

## 🐧 Linux/Mac (Bash)

### Dar permisos de ejecución (solo primera vez)
```bash
chmod +x start.sh stop.sh restart.sh
```

### Iniciar
```bash
./start.sh
```

### Detener
```bash
./stop.sh
```

### Reiniciar
```bash
./restart.sh
```

---

## 📝 Detalles

**Scripts Windows (.ps1):**
- Abren ventanas separadas para cada servidor
- Verifican si ya hay procesos corriendo
- Limpian procesos huérfanos al detener

**Scripts Bash (.sh):**
- Ejecutan en background (nohup)
- Logs guardados en `backend.log` y `frontend.log`
- Detectan y limpian procesos zombies

---

## ⚠️ Resolución de Problemas

### Windows: "No se puede ejecutar scripts"

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Bash: "Permission denied"

```bash
chmod +x *.sh
```

### Procesos no se detienen

**Windows:**
```powershell
# Manual
Get-Process | Where-Object {$_.ProcessName -like "*python*" -or $_.ProcessName -like "*node*"} | Stop-Process -Force
```

**Bash:**
```bash
# Manual
pkill -9 -f uvicorn
pkill -9 -f vite
```

---

## 🎯 URLs Resultantes

Una vez iniciados, accede a:

- **Admin:** http://localhost:5173/?modo=admin
- **Mobile:** http://localhost:5173/
- **API Docs:** http://localhost:8000/docs
- **API Status:** http://localhost:8000/

---

## 🚀 Uso Rápido

```powershell
# Presentación del día
.\start.ps1

# ... usar presentación ...

# Al terminar
.\stop.ps1
```
