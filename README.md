# 🎓 Presentación Interactiva - "La Razón No Basta"

> Presentación web interactiva sobre Contexto Social de la Ingeniería  
> **IPN - ESIME Culhuacán | Primer Semestre 2026**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://react.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![WebSocket](https://img.shields.io/badge/WebSocket-Real--time-orange)](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

---

## 📖 Descripción

Sistema de presentación interactiva full-stack que demuestra **las limitaciones de la razón humana** en la toma de decisiones de ingeniería. Incluye 5 dinámicas en tiempo real donde la audiencia participa desde sus celulares.

**Tema central:** *"La Razón No Basta"* - La ingeniería requiere más que lógica: necesita **imaginación**, **ética** y **empatía**.

### ✨ Características Principales

- 🎨 **Diseño Anti-Glare Brutalism** - Máxima legibilidad bajo luz solar
- 📱 **Interactividad Mobile** - Audiencia vota desde celular via WebSocket
- 📊 **5 Dinámicas en Tiempo Real**:
  1. Racionalidad Acotada (Votación de riesgo)
  2. Ética Profesional (Tug of War: Vida vs Dinero)
  3. Radar de Exclusión (Empatía en diseño)
  4. Efecto Marco (Sesgo cognitivo)
  5. Presión Ingenieril (Tap game con obstáculos)
- 🔄 **Auto-reconnect** - Conexión WebSocket resiliente
- ⌨️ **Atajos de Teclado** - Control admin profesional
- 🎬 **14 Slides** con transiciones suaves

---

## 🏗️ Tech Stack

### Backend
- **FastAPI** - Framework web asíncrono
- **WebSockets** - Comunicación en tiempo real
- **Uvicorn** - ASGI server
- **Python 3.11+**

### Frontend
- **React 18** + **Vite** - UI moderna y rápida
- **Tailwind CSS** - Diseño utility-first
- **Recharts** - Gráficas interactivas
- **React QR Code** - QR dinámico para mobile
- **WebSocket API** - Sincronización en vivo

### Testing
- **Pytest** - Backend unit tests (22 tests)
- **Vitest + React Testing Library** - Frontend tests (17 tests)

---

## 📂 Estructura del Proyecto

```
presentacion-interactiva/
├── backend/                # FastAPI + WebSocket server
│   ├── main.py            # Servidor principal
│   ├── tests/             # Tests automatizados
│   └── requirements.txt
│
├── frontend/              # React + Vite app
│   ├── src/
│   │   ├── slides/        # 14 slides (00-13)
│   │   ├── components/    # UI + Charts
│   │   ├── hooks/         # useWebSocket, useKeyboardNav
│   │   └── App.jsx
│   ├── tests/             # Component tests
│   └── package.json
│
├── start.ps1 / start.sh   # Scripts de inicio
├── stop.ps1 / stop.sh     # Scripts de detención
└── README.md
```

---

## 🚀 Instalación

### Requisitos
- **Python 3.11+**
- **Node.js 18+**
- **npm** o **yarn**

### Instalación Rápida

```bash
# 1. Clonar repositorio
git clone https://github.com/tu-usuario/presentacion-interactiva.git
cd presentacion-interactiva

# 2. Backend
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# 3. Frontend
cd ../frontend
npm install

# 4. Volver a raíz
cd ..
```

---

## ▶️ Uso

### Opción 1: Scripts Automáticos (Recomendado)

**Windows:**
```powershell
.\start.ps1   # Iniciar todo
.\stop.ps1    # Detener todo
```

**Linux/Mac:**
```bash
chmod +x *.sh
./start.sh    # Iniciar todo
./stop.sh     # Detener todo
```

### Opción 2: Manual

**Terminal 1 - Backend:**
```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev -- --host
```

### Acceso

- **👨‍💼 Admin (Proyector):** http://localhost:5173/?modo=admin
- **📱 Mobile (Audiencia):** http://localhost:5173/
- **🔌 API Docs:** http://localhost:8000/docs

---

## 🎮 Controles Admin

### Teclado
| Tecla | Acción |
|-------|--------|
| `→` o `Space` | Siguiente slide |
| `←` | Slide anterior |
| `H` | Ir al inicio (Home) |
| `R` | Reset todas las dinámicas |
| `F` | Toggle fullscreen |
| `Esc` | Salir fullscreen |

---

## 📊 Slides

1. **00 - Apertura Cinematográfica**
2. **01 - Bienvenida** (QR Code)
3. **02 - La Razón y la Acción**
4. **03 - Experimento Racionalidad** ⚡ *Interactivo*
5. **04 - Limitaciones**
6. **05 - Historia Tacoma Narrows** 📸
7. **06 - Historia Torre Eiffel** 📸
8. **07 - Dilema Ético** ⚡ *Interactivo (Tug of War)*
9. **08 - Conclusión**
10. **09 - Casos Reales** (Challenger, Boeing 737 MAX)
11. **10 - Radar de Exclusión** ⚡ *Interactivo*
12. **11 - Efecto Marco** ⚡ *Interactivo*
13. **12 - Presión Ingenieril** ⚡ *Interactivo (Tap Game)*
14. **13 - Créditos** (Estadísticas en vivo)

---

## 🧪 Testing

### Backend
```bash
cd backend

# Tests manuales (servidor debe estar corriendo)
python tests/test_manual.py

# Tests automatizados (servidor apagado)
pytest tests/test_backend.py -v
```

### Frontend
```bash
cd frontend

# Todos los tests
npm test

# Con UI
npm run test:ui

# Con coverage
npm run test:coverage
```

**Total:** 39+ tests cubriendo backend, frontend y dinámicas.

---

## 🎨 Paleta de Colores

```css
canvas:      #FFFEF2  /* Fondo marfil suave */
ink:         #1A1A1A  /* Negro intenso */
ipn-guinda:  #7D1D3F  /* Guinda IPN */
alert-red:   #DC0000  /* Rojo alerta */
success-green: #00C851 /* Verde éxito */
data-blue:   #0066CC  /* Azul datos */
```

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Proyecto académico para **IPN - ESIME Culhuacán**.  
Código disponible bajo [MIT License](LICENSE).

---

## 👨‍💻 Autor

**Hugo Díaz**  
Ingeniería en Sistemas Computacionales  
IPN - ESIME Culhuacán  
Primer Semestre 2026

---

## 🙏 Agradecimientos

- Profesor de Contexto Social de la Ingeniería
- Compañeros que participaron en testing
- Comunidad de FastAPI y React

---

## 📞 Soporte

¿Problemas? Abre un [issue](https://github.com/tu-usuario/presentacion-interactiva/issues)

---

**⭐ Si te gustó este proyecto, dale una estrella!**
