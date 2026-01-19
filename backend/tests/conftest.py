"""
Configuración de pytest
"""

import pytest
import sys
import os

# Agregar path del backend
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
