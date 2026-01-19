import './index.css';
import { useEffect, useState } from 'react';
import { useWebSocket } from './hooks/useWebSocket';
import { useKeyboardNav } from './hooks/useKeyboardNav';

// Importar slides
import AperturaCinematica from './slides/00_Apertura_Cinematica';
import Bienvenida from './slides/01_Bienvenida';
import IntroRazonEmocion from './slides/02_Intro_Razon_Emocion';
import DemoRacionalidad from './slides/03_Demo_Racionalidad';
import ExplicacionLimitaciones from './slides/04_Explicacion_Limitaciones';
import HistoriaTacoma from './slides/05_Historia_Tacoma';
import HistoriaEiffel from './slides/06_Historia_Eiffel';
import EticaProfesional from './slides/07_Etica_Profesional';
import ConclusionCapacidades from './slides/08_Conclusion_Capacidades';
import CasosReales from './slides/09_Casos_Reales';
// Fase 6: Nuevas dinámicas
import RadarExclusion from './slides/11_Radar_Exclusion';
import EfectoMarco from './slides/12_Efecto_Marco';
import PresionIngenieril from './slides/13_Presion_Ingenieril';
// Créditos al final
import Creditos from './slides/14_Creditos';

function App() {
    // Detectar modo Admin mediante URL parameter
    const searchParams = new URLSearchParams(window.location.search);
    const isAdmin = searchParams.get('modo') === 'admin';

    // WebSocket
    const { wsState, changeSlide } = useWebSocket();

    // Array de slides
    const slides = [
        AperturaCinematica,      // 0
        Bienvenida,              // 1
        IntroRazonEmocion,       // 2
        DemoRacionalidad,        // 3
        ExplicacionLimitaciones, // 4
        HistoriaTacoma,          // 5
        HistoriaEiffel,          // 6
        EticaProfesional,        // 7
        ConclusionCapacidades,   // 8
        CasosReales,             // 9
        // Fase 6: Nuevas dinámicas
        RadarExclusion,          // 10
        EfectoMarco,             // 11
        PresionIngenieril,       // 12
        // Créditos al final
        Creditos,                // 13
    ];

    const totalSlides = slides.length;
    const currentSlide = wsState.slide || 0;
    const CurrentSlideComponent = slides[currentSlide];

    // Estado para transiciones
    const [transitioning, setTransitioning] = useState(false);
    const [displaySlide, setDisplaySlide] = useState(currentSlide);

    // Manejar transición fade cuando cambia el slide
    useEffect(() => {
        if (currentSlide !== displaySlide) {
            setTransitioning(true);
            setTimeout(() => {
                setDisplaySlide(currentSlide);
                setTransitioning(false);
            }, 150); // 150ms fade out, luego cambia
        }
    }, [currentSlide, displaySlide]);

    // Navegación con teclado
    useKeyboardNav(isAdmin, changeSlide, currentSlide, totalSlides);

    // Usar displaySlide en lugar de currentSlide para el componente
    const DisplayedSlideComponent = slides[displaySlide];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Slide con fade transition */}
            <div className={`w-full h-full transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                <DisplayedSlideComponent
                    isAdmin={isAdmin}
                    wsState={wsState}
                    changeSlide={changeSlide}
                />
            </div>
            {/* Indicador de conexión */}
            <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-full font-black text-xl ${wsState.connected ? 'bg-success-green' : 'bg-alert-red'
                } text-white`}>
                {wsState.connected ? '● ONLINE' : '● OFFLINE'}
            </div>

            {/* Indicador de Admin y slide actual */}
            {isAdmin && (
                <div className="fixed top-4 left-4 z-50 bg-ink text-canvas px-6 py-3 font-black text-xl border-4 border-success-green">
                    🎯 MODO ADMIN | Slide {currentSlide + 1} / {totalSlides}
                </div>
            )}
        </div>
    );
}

export default App;
