# Test Backend

Este directorio contiene tests automatizados para el backend.

## Instalación

```bash
pip install -r requirements-test.txt
```

## Ejecutar tests

```bash
# Todos los tests
pytest test_backend.py -v

# Test específico
pytest test_backend.py::TestHTTPEndpoints::test_root_endpoint -v

# Con coverage
pytest test_backend.py --cov=../main --cov-report=html
```

## Tests incluidos

### HTTP Endpoints
- ✅ Root endpoint (`/`)
- ✅ State endpoint (`/state`)

### WebSocket Basic
- ✅ Conexión WebSocket
- ✅ CHANGE_SLIDE
- ✅ VOTE_RATIONALITY
- ✅ VOTE_ETHICS
- ✅ RESET_ACTIVITY

### Fase 6 Dynamics
- ✅ VOTE_EXCLUSION (Radar de Exclusión)
- ✅ VOTE_FRAMING + CHANGE_FRAMING_PHASE (Efecto Marco)
- ✅ START_PRESSURE_GAME + TAP_BUILD (Presión Ingenieril)
- ✅ RESET para todas las dinámicas

### Stress Tests
- ✅ Múltiples clientes simultáneos
- ✅ Consistencia de estado
- ✅ Contador de participantes

## Estructura de test

```python
class TestHTTPEndpoints:
    """Tests de endpoints HTTP"""
    
class TestWebSocketActions:
    """Tests de acciones WebSocket básicas"""
    
class TestPhase6Dynamics:
    """Tests de nuevas dinámicas Fase 6"""
    
class TestMultipleConnections:
    """Tests de concurrencia"""
    
class TestStateConsistency:
    """Tests de consistencia de estado"""
```
