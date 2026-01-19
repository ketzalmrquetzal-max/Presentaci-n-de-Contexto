# Frontend Tests

Tests de componentes React usando Vitest + React Testing Library.

## Instalación

```bash
cd frontend
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event vitest @vitest/ui jsdom
```

## Ejecutar tests

```bash
# Todos los tests
npm test

# Tests con UI interactiva
npm run test:ui

# Tests con coverage
npm run test:coverage

# Test específico
npm test ExclusionRadar.test.jsx
```

## Tests incluidos

### Componentes Fase 6

#### ExclusionRadar.test.jsx
- ✅ Renderiza radar chart con datos
- ✅ Muestra nivel de empatía correcto
- ✅ Maneja estado vacío (sin votos)
- ✅ Calcula total de votos correctamente

#### FramingEffect.test.jsx
- ✅ Renderiza barras comparativas
- ✅ Calcula porcentajes de aceptación
- ✅ Muestra mensaje de conclusión
- ✅ Maneja votos cero sin errores

#### PressureGame.test.jsx
- ✅ Muestra estado de espera
- ✅ Displays progreso cuando activo  
- ✅ Muestra mensaje de éxito al completar
- ✅ Muestra mensaje de fallo al agotar tiempo
- ✅ Aplica estilo urgente cuando tiempo bajo

#### BigCheckbox.test.jsx
- ✅ Renderiza con label y estado desmarcado
- ✅ Muestra checkmark cuando marcado
- ✅ Llama onChange con valor correcto
- ✅ Aplica estilos correctos

## Estructura

```
frontend/
├── tests/
│   ├── ExclusionRadar.test.jsx
│   ├── FramingEffect.test.jsx
│   ├── PressureGame.test.jsx
│   ├── BigCheckbox.test.jsx
│   └── setup.js
├── vitest.config.js
└── package.json (updated)
```

## Cobertura esperada

Los tests cubren:
- Renderizado básico
- Lógica de cálculos (porcentajes, totales)
- Estados vacíos / edge cases
- Interacciones de usuario (clicks)
- Estilos condicionales
- Mensajes dinámicos
