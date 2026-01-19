import { useState, useEffect, useRef, useCallback } from 'react';

export function useWebSocket() {
    const [wsState, setWsState] = useState({
        connected: false,
        slide: 0,
        rationality: { segura: 0, riesgo: 0 },
        ethics: { vida: 0, dinero: 0 },
        participants: 0,
        // Fase 6: Nuevas dinámicas
        exclusion: { adultos_mayores: 0, sin_datos: 0, disc_visual: 0, turistas: 0 },
        framing: { proyecto_a_acepta: 0, proyecto_a_rechaza: 0, proyecto_b_acepta: 0, proyecto_b_rechaza: 0, fase: 1 },
        pressure: { total_taps: 0, target: 100, time_left: 15, active: false }
    });

    const ws = useRef(null);

    // Función de conexión con useCallback
    const connect = useCallback(() => {
        // Detectar entorno (IDX vs Local)
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const host = window.location.hostname;

        let wsUrl;
        if (host.includes('idx.dev')) {
            const projectId = host.split('.')[0];
            wsUrl = `wss://${projectId}-8000.idx.dev/ws`;
        } else {
            wsUrl = 'ws://localhost:8000/ws';
        }

        console.log('🔌 Conectando WebSocket:', wsUrl);
        ws.current = new WebSocket(wsUrl);

        ws.current.onopen = () => {
            console.log('✅ WebSocket conectado');
            setWsState(prev => ({ ...prev, connected: true }));
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.type === 'SYNC_STATE') {
                setWsState(prev => ({
                    ...prev,
                    slide: data.payload.slide,
                    rationality: data.payload.rationality || { segura: 0, riesgo: 0 },
                    ethics: data.payload.ethics || { vida: 0, dinero: 0 },
                    participants: data.payload.participants || 0,
                    connected: data.payload.connected || 0,
                    // Fase 6: Nuevas dinámicas
                    exclusion: data.payload.exclusion || { adultos_mayores: 0, sin_datos: 0, disc_visual: 0, turistas: 0 },
                    framing: data.payload.framing || { proyecto_a_acepta: 0, proyecto_a_rechaza: 0, proyecto_b_acepta: 0, proyecto_b_rechaza: 0, fase: 1 },
                    pressure: data.payload.pressure || { total_taps: 0, target: 100, time_left: 15, active: false }
                }));
            }
        };

        ws.current.onerror = (error) => {
            console.error('❌ Error en WebSocket:', error);
        };

        ws.current.onclose = () => {
            console.log('⚠️ WebSocket desconectado');
            setWsState(prev => ({ ...prev, connected: false }));
            // Auto-reconnect después de 3 segundos
            setTimeout(() => {
                console.log('🔄 Intentando reconectar...');
                connect();
            }, 3000);
        };
    }, []);

    // Conectar al montar el componente
    useEffect(() => {
        connect();

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, [connect]);

    // Función para cambiar de slide
    const changeSlide = (slideIndex) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'CHANGE_SLIDE',
                payload: { slide_index: slideIndex }
            }));
            console.log(`📊 Cambiando a slide ${slideIndex}`);
        } else {
            console.error('❌ WebSocket no está conectado');
        }
    };

    // Funciones globales para votar
    window.sendVote = (option) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'VOTE_RATIONALITY',
                payload: { option }
            }));
            console.log('🗳️ Voto enviado:', option);
        } else {
            console.error('❌ WebSocket no está conectado');
        }
    };

    window.sendReset = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'RESET_ACTIVITY',
                payload: { activity: 'rationality' }
            }));
            console.log('🔄 Reset enviado');
        }
    };

    window.sendEthicsVote = (option) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'VOTE_ETHICS',
                payload: { option }
            }));
            console.log('⚖️ Voto ético enviado:', option);
        } else {
            console.error('❌ WebSocket no está conectado');
        }
    };

    window.sendEthicsReset = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'RESET_ACTIVITY',
                payload: { activity: 'ethics' }
            }));
            console.log('🔄 Reset ético enviado');
        }
    };

    // Fase 6: Nuevas dinámicas
    window.sendExclusionVote = (category) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'VOTE_EXCLUSION',
                payload: { category }
            }));
            console.log('📡 Voto exclusión enviado:', category);
        }
    };

    window.sendResetExclusion = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'RESET_ACTIVITY',
                payload: { activity: 'exclusion' }
            }));
            console.log('🔄 Reset exclusión enviado');
        }
    };

    window.sendFramingVote = (proyecto, decision) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'VOTE_FRAMING',
                payload: { proyecto, decision }
            }));
            console.log('🎭 Voto framing enviado:', proyecto, decision);
        }
    };

    window.sendChangeFase = (fase) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'CHANGE_FRAMING_PHASE',
                payload: { fase }
            }));
            console.log('📋 Cambio de fase:', fase);
        }
    };

    window.sendResetFraming = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'RESET_ACTIVITY',
                payload: { activity: 'framing' }
            }));
            console.log('🔄 Reset framing enviado');
        }
    };

    window.sendStartPressure = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'START_PRESSURE_GAME'
            }));
            console.log('🚀 Juego de presión iniciado');
        }
    };

    window.sendTapBuild = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'TAP_BUILD'
            }));
        }
    };

    window.sendResetPressure = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                action: 'RESET_ACTIVITY',
                payload: { activity: 'pressure' }
            }));
            console.log('🔄 Reset pressure enviado');
        }
    };

    return { wsState, changeSlide };
}
