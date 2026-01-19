import { useEffect, useState } from 'react';

export default function AperturaCinematica({ isAdmin }) {
    const [fadeIn, setFadeIn] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);

    useEffect(() => {
        // Fade in del título después de 300ms
        const timer1 = setTimeout(() => setFadeIn(true), 300);
        // Mostrar subtítulo después de 2 segundos
        const timer2 = setTimeout(() => setShowSubtitle(true), 2000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="w-full h-screen bg-ink flex flex-col items-center justify-center">
            {/* Título principal con fade in */}
            <h1
                className={`text-9xl font-black text-canvas transition-all duration-1000 ${fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                style={{ textShadow: '8px 8px 0px rgba(255,255,255,0.3)' }}
            >
                LA RAZÓN
            </h1>

            <h1
                className={`text-9xl font-black text-alert-red mt-4 transition-all duration-1000 delay-300 ${fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                style={{ textShadow: '8px 8px 0px rgba(255,0,0,0.3)' }}
            >
                NO BASTA
            </h1>

            {/* Subtítulo con fade in retrasado */}
            {showSubtitle && (
                <div className="mt-16 animate-pulse">
                    <p className="text-4xl font-bold text-canvas text-center opacity-80">
                        Otras Capacidades del Ingeniero
                    </p>

                    {isAdmin && (
                        <p className="text-2xl text-success-green text-center mt-8 font-black">
                            → Presiona flecha derecha para continuar
                        </p>
                    )}

                    {!isAdmin && (
                        <p className="text-2xl text-canvas text-center mt-8 opacity-60">
                            Esperando al presentador...
                        </p>
                    )}
                </div>
            )}

            {/* Detalle decorativo */}
            <div
                className={`absolute bottom-12 w-full flex justify-center transition-all duration-1000 delay-500 ${showSubtitle ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <div className="w-32 h-2 bg-ipn-guinda"></div>
            </div>
        </div>
    );
}
