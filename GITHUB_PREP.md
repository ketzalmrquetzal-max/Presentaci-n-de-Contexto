# Preparación para GitHub - Checklist

## ✅ Archivos Creados

- [x] `.gitignore` - Completo (Python + Node.js + IDX)
- [x] `README.md` - Documentación principal con badges
- [x] `LICENSE` - MIT License
- [x] `CONTRIBUTING.md` - Guía de contribución
- [x] `SCRIPTS_README.md` - Documentación de scripts

## 📋 Pre-Commit Checklist

Antes de hacer tu primer `git push`, verifica:

### 1. Archivos Sensibles
- [ ] No hay claves API en el código
- [ ] No hay `.env` files comiteados
- [ ] No hay credenciales hardcodeadas
- [ ] No hay IPs privadas en comentarios

### 2. Limpieza
- [ ] No hay `console.log()` innecesarios
- [ ] No hay archivos temporales
- [ ] No hay `__pycache__/` o `node_modules/`
- [ ] No hay logs grandes

### 3. Documentación
- [ ] README.md tiene instrucciones claras
- [ ] Screenshots agregados (si aplica)
- [ ] Badges actualizados
- [ ] URLs de ejemplo funcionan

### 4. Tests
- [ ] Backend tests pasan (22/22)
- [ ] Frontend tests pasan (17/17)
- [ ] No hay warnings críticos

### 5. Funcionalidad
- [ ] Servidores inician correctamente
- [ ] WebSocket conecta
- [ ] Todas las dinámicas funcionan
- [ ] Mobile responsive

## 🚀 Comandos Git

### Inicializar Repositorio

```bash
cd presentacion-interactiva
git init
git add .
git commit -m "feat: initial commit - presentación interactiva completa"
```

### Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `presentacion-interactiva`
3. Descripción: "Presentación web interactiva sobre Contexto Social de la Ingeniería - IPN ESIME"
4. Público/Privado según preferencia
5. **NO** inicializar con README (ya tenemos uno)

### Conectar y Subir

```bash
# Agregar remote
git remote add origin https://github.com/TU_USUARIO/presentacion-interactiva.git

# Cambiar a main
git branch -M main

# Primer push
git push -u origin main
```

## 📸 Screenshots Recomendados

Toma screenshots de:

1. **Slide de Bienvenida con QR**
2. **Dinámica de Racionalidad** (gráfica en vivo)
3. **Tug of War Ético** (con efecto rojo)
4. **Radar de Exclusión** (vista admin)
5. **Vista Mobile** (celular votando)

Guárdalos en `docs/screenshots/` para el README.

## 🔒 Seguridad

### Verificar antes de subir:

```bash
# Buscar posibles secretos
git grep -i "password"
git grep -i "secret"
git grep -i "api_key"
git grep -i "token"

# Verificar .gitignore funciona
git status --ignored
```

## 📝 Descripción Sugerida del Repo

```
🎓 Presentación web interactiva full-stack sobre Contexto Social de la Ingeniería

✨ Features:
• 5 dinámicas en tiempo real con WebSocket
• 14 slides con diseño Anti-Glare Brutalism  
• Control admin con atajos de teclado
• Mobile-first para audiencia
• 39+ tests automatizados

🛠️ Stack: React + FastAPI + Tailwind + WebSocket
```

## 🏷️ Topics Sugeridos

Agrega estos topics al repositorio GitHub:

- `react`
- `fastapi`
- `websocket`
- `tailwindcss`
- `education`
- `interactive-presentation`
- `real-time`
- `python`
- `javascript`

## 🎯 Próximos Pasos (Opcional)

### GitHub Actions (CI/CD)
- [ ] Crear `.github/workflows/test.yml`
- [ ] Auto-run tests en cada PR
- [ ] Deploy automático a Railway/Vercel

### Deployment
- [ ] Subir a Google Project IDX
- [ ] Deploy backend a Railway
- [ ] Deploy frontend a Vercel/Netlify

### Mejoras Futuras
- [ ] Agregar Docker Compose
- [ ] Internacionalización (i18n)
- [ ] Más dinámicas interactivas
- [ ] Analytics de uso

## ✅ Listo para GitHub

Si todos los checkboxes están marcados:

```bash
git add .
git commit -m "chore: preparar para GitHub - docs y configuración"
git push origin main
```

¡Tu proyecto está listo para compartir! 🎉

---

**Creado:** 2026-01-19  
**Última actualización:** 2026-01-19
