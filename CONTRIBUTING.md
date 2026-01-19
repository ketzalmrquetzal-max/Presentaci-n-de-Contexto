# Contributing to Presentación Interactiva

¡Gracias por tu interés en contribuir! 🎉

## 🐛 Reportar Bugs

Si encuentras un bug, por favor abre un [issue](https://github.com/tu-usuario/presentacion-interactiva/issues) con:

- **Descripción clara** del problema
- **Pasos para reproducir** el error
- **Comportamiento esperado** vs comportamiento actual
- **Screenshots** si es visual
- **Versiones** (Python, Node, navegador)

## ✨ Proponer Features

Para nuevas funcionalidades:

1. Verifica que no exista ya un issue similar
2. Describe el **problema** que resuelve
3. Propón una **solución concreta**
4. Considera **alternativas**

## 🔧 Pull Requests

### Proceso

1. Fork el repositorio
2. Crea una rama desde `main`:
   ```bash
   git checkout -b feature/mi-feature
   # o
   git checkout -b fix/mi-bugfix
   ```
3. Realiza tus cambios
4. Ejecuta los tests:
   ```bash
   # Backend
   cd backend
   python tests/test_manual.py
   pytest tests/test_backend.py -v
   
   # Frontend
   cd frontend
   npm test
   ```
5. Commit siguiendo [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: agregar nueva dinámica de votación"
   git commit -m "fix: corregir reconexión WebSocket"
   git commit -m "docs: actualizar README con ejemplos"
   ```
6. Push a tu fork:
   ```bash
   git push origin feature/mi-feature
   ```
7. Abre un Pull Request

### Criterios de Aceptación

- ✅ **Tests pasan** - Todos los tests deben estar en verde
- ✅ **Código limpio** - Sin console.logs innecesarios
- ✅ **Documentación** - Actualiza README si es necesario
- ✅ **Anti-Glare** - Sigue la paleta de colores establecida
- ✅ **Responsive** - Funciona en mobile y desktop

## 📝 Estilo de Código

### Python (Backend)
- Sigue [PEP 8](https://pep8.org/)
- Usa type hints cuando sea posible
- Documenta funciones complejas

```python
async def broadcast_state(self) -> None:
    """Enviar estado a TODOS los clientes conectados"""
    # Implementación...
```

### JavaScript (Frontend)
- Usa ESLint + Prettier
- Componentes funcionales con hooks
- PropTypes o TypeScript (si aplica)

```javascript
export default function MyComponent({ data, onChange }) {
    // Implementación...
}
```

### CSS (Tailwind)
- Usa clases de utilidad
- Sigue la paleta de colores custom
- Documenta clases custom si las agregas

## 🧪 Testing

**Obligatorio** agregar tests para:
- Nuevas dinámicas interactivas
- Nuevos endpoints del backend
- Componentes React nuevos

```bash
# Estructura de test
frontend/tests/MyComponent.test.jsx
backend/tests/test_my_feature.py
```

## 🎨 Nuevas Dinámicas

Si agregas una dinámica interactiva:

1. **Backend:** Agregar estado en `GlobalState`
2. **Backend:** Crear acción WebSocket
3. **Frontend:** Crear componente de visualización
4. **Frontend:** Crear slide (admin + mobile)
5. **Tests:** Cubrir ambos lados
6. **Docs:** Actualizar README

## 📜 Convenciones

### Naming
- **Slides:** `XX_Nombre_Descripcion.jsx` (ej: `03_Demo_Racionalidad.jsx`)
- **Components:** PascalCase (ej: `BigButton.jsx`)
- **Hooks:** camelCase con `use` prefix (ej: `useWebSocket.js`)
- **Tests:** `*.test.jsx` o `test_*.py`

### Commits
Formato: `<type>(<scope>): <description>`

**Types:**
- `feat` - Nueva funcionalidad
- `fix` - Corrección de bug
- `docs` - Documentación
- `style` - Formato, missing semi colons, etc
- `refactor` - Refactorización de código
- `test` - Agregar tests
- `chore` - Mantenimiento

**Ejemplos:**
```bash
feat(backend): agregar dinámica de votación múltiple
fix(frontend): corregir auto-reconnect en WiFi débil
docs(readme): agregar sección de deployment
test(frontend): agregar tests para TugOfWar
```

## 🚀 Deployment

Si contribuyes con features de deployment:
- Google Project IDX
- Railway/Render
- Docker/Docker Compose

Documenta en `docs/DEPLOYMENT.md`

## ❓ Preguntas

¿Dudas? Abre un [Discussion](https://github.com/tu-usuario/presentacion-interactiva/discussions) o contacta al mantenedor.

---

**¡Gracias por contribuir a hacer la educación en ingeniería más interactiva!** 🎓
