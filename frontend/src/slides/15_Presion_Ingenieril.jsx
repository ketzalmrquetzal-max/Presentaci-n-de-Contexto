import { useState, useEffect } from 'react';
import PressureGame from '../components/charts/PressureGame';

export default function PresionIngenieril({ isAdmin, wsState }) {
    const [showPopup, setShowPopup] = useState(false);
    const [popupType, setPopupType] = useState('');

    const isActive = wsState.pressure?.active || false;
    const totalTaps = wsState.pressure?.total_taps || 0;

    const handleStart = () => {
        if (window.sendStartPressure) {
            window.sendStartPressure();
        }
    };

    const handleTap = () => {
        if (window.sendTapBuild) {
            window.sendTapBuild();
        }
    };

    const handleReset = () => {
        if (window.sendResetPressure) {
            window.sendResetPressure();
        }
    };

    // Generar popups aleatorios en mobile
    useEffect(() => {
        if (!isAdmin && isActive) {
            const interval = setInterval(() => {
                const random = Math.random();
                if (random < 0.3) {  // 30% probabilidad
                    const popups = ['huelga', 'recorte', 'lluvia'];
                    const randomPopup = popups[Math.floor(Math.random() * popups.length)];
                    setPopupType(randomPopup);
                    setShowPopup(true);
                }
            }, 4000); // Cada 4 segundos chequea

            return () => clearInterval(interval);
        }
    }, [isAdmin, isActive]);

    const closePopup = () => {
        setShowPopup(false);
    };

    if (isAdmin) {
        // Vista Admin
        return (
            <div className="w-full h-screen bg-canvas">
                <div className="p-8">
                    <h1 className="text-7xl font-black text-ink text-center mb-4">
                        ⚡ PRESIÓN INGENIERIL
                    </h1>
                    <p className="text-3xl font-bold text-center text-ipn-guinda mb-8">
                        Construir un puente en 15 segundos (Meta: 100 taps)
                    </p>
                </div>

                <PressureGame data={wsState.pressure || {}} />

                <div className="flex justify-center gap-4 p-8">
                    {!isActive && (
                        <button
                            onClick={handleStart}
                            className="bg-success-green text-canvas px-16 py-8 text-4xl font-black border-4 border-ink hover:scale-105 transition-all"
                        >
                            🚀 INICIAR JUEGO
                        </button>
                    )}
                    <button
                        onClick={handleReset}
                        className="bg-alert-red text-canvas px-12 py-8 text-3xl font-black border-4 border-ink hover:scale-105 transition-all"
                    >
                        🔄 RESET
                    </button>
                </div>
            </div>
        );
    } else {
        // Vista Mobile: Tap button + popups
        return (
            <div className={`w-full h-screen flex flex-col items-center justify-center p-8 transition-all ${showPopup && popupType === 'lluvia' ? 'animate-pulse' : ''
                } ${popupType === 'lluvia' ? 'bg-data-blue' : 'bg-canvas'
                }`}>
                <h2 className="text-4xl font-black text-ink text-center mb-4">
                    {isActive ? '🔨 ¡CONSTRUYE EL PUENTE!' : '⏳ Esperando inicio...'}
                </h2>
                <p className="text-2xl font-bold text-ink text-center mb-8">
                    Tus taps: {totalTaps}
                </p>

                <button
                    onClick={handleTap}
                    disabled={!isActive || showPopup}
                    className={`w-full max-w-2xl h-64 text-6xl font-black border-8 ${!isActive
                            ? 'bg-ink bg-opacity-20 text-ink border-ink cursor-not-allowed'
                            : showPopup
                                ? 'bg-alert-red text-canvas border-alert-red opacity-50 cursor-not-allowed'
                                : popupType === 'recorte'
                                    ? 'h-32 bg-success-green text-canvas border-success-green'
                                    : 'bg-success-green text-canvas border-success-green hover:scale-105'
                        } transition-all`}
                >
                    {showPopup ? '⚠️ BLOQUEADO' : '🔨 CONSTRUIR'}
                </button>

                {/* Popups */}
                {showPopup && (
                    <div className="fixed inset-0 bg-ink bg-opacity-90 flex items-center justify-center z-50 p-8">
                        <div className="bg-alert-red text-canvas p-12 border-8 border-canvas max-w-2xl">
                            {popupType === 'huelga' && (
                                <>
                                    <h3 className="text-6xl font-black text-center mb-6">
                                        ⚠️ ¡HUELGA DE SINDICATO!
                                    </h3>
                                    <p className="text-3xl text-center mb-8">
                                        Los trabajadores pararon la obra
                                    </p>
                                </>
                            )}
                            {popupType === 'recorte' && (
                                <>
                                    <h3 className="text-6xl font-black text-center mb-6">
                                        💰 ¡RECORTE DE PRESUPUESTO!
                                    </h3>
                                    <p className="text-3xl text-center mb-8">
                                        El botón se achicó por falta de fondos
                                    </p>
                                </>
                            )}
                            {popupType === 'lluvia' && (
                                <>
                                    <h3 className="text-6xl font-black text-center mb-6">
                                        🌧️ ¡LLUVIA TORRENCIAL!
                                    </h3>
                                    <p className="text-3xl text-center mb-8">
                                        No se puede trabajar con este clima
                                    </p>
                                </>
                            )}
                            <button
                                onClick={closePopup}
                                className="w-full bg-canvas text-alert-red py-6 text-3xl font-black border-4 border-canvas hover:bg-alert-red hover:text-canvas"
                            >
                                ✅ RESOLVER Y CONTINUAR
                            </button>
                        </div>
                    </div>
                )}

                {!isActive && (
                    <p className="text-xl text-ink opacity-70 text-center mt-8">
                        El presentador debe iniciar el juego
                    </p>
                )}
            </div>
        );
    }
}
