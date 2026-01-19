export default function PressureGame({ data }) {
    const progress = data.total_taps || 0;
    const target = data.target || 100;
    const timeLeft = data.time_left || 15;
    const isActive = data.active || false;

    const percentage = Math.min(Math.round((progress / target) * 100), 100);
    const success = progress >= target;
    const failed = !isActive && !success && progress > 0;

    return (
        <div className="w-full h-full bg-canvas flex flex-col items-center justify-center p-12">
            <h2 className="text-6xl font-black text-ink mb-8">
                🏗️ CONSTRUCCIÓN DEL PUENTE
            </h2>

            {/* Timer */}
            <div className={`text-9xl font-black mb-8 ${timeLeft <= 5 ? 'text-alert-red animate-pulse' : 'text-ink'
                }`}>
                ⏱️ {timeLeft}s
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-4xl mb-8">
                <div className="w-full h-24 bg-ink bg-opacity-20 border-8 border-ink">
                    <div
                        className={`h-full transition-all duration-300 ${success ? 'bg-success-green' :
                                failed ? 'bg-alert-red' :
                                    'bg-data-blue'
                            }`}
                        style={{ width: `${percentage}%` }}
                    >
                        <p className="text-4xl font-black text-canvas text-center leading-[88px]">
                            {progress} / {target}
                        </p>
                    </div>
                </div>
                <p className="text-4xl font-black text-center mt-4 text-ink">
                    {percentage}% completado
                </p>
            </div>

            {/* Estado */}
            {!isActive && progress === 0 && (
                <div className="text-center">
                    <p className="text-5xl font-black text-ink">
                        Esperando inicio...
                    </p>
                    <p className="text-2xl text-ink opacity-70 mt-4">
                        El admin debe presionar INICIAR
                    </p>
                </div>
            )}

            {isActive && !success && (
                <div className="text-center">
                    <p className="text-5xl font-black text-data-blue animate-pulse">
                        🔨 ¡CONSTRUYENDO!
                    </p>
                    <p className="text-3xl text-ink mt-4">
                        Tapea desde tu celular...
                    </p>
                </div>
            )}

            {success && (
                <div className="text-center animate-pulse">
                    <p className="text-7xl font-black text-success-green">
                        ✅ ¡PUENTE COMPLETADO!
                    </p>
                    <p className="text-4xl text-ink mt-4">
                        Lo lograron en {15 - timeLeft} segundos
                    </p>
                </div>
            )}

            {failed && (
                <div className="text-center">
                    <p className="text-7xl font-black text-alert-red mb-4">
                        💥 ¡PUENTE COLAPSÓ!
                    </p>
                    <p className="text-4xl text-ink">
                        Solo llegaron a {percentage}%
                    </p>
                    <p className="text-2xl text-ink opacity-70 mt-4">
                        La presión y los obstáculos ganaron...
                    </p>
                </div>
            )}

            {/* Mensaje educativo */}
            {!isActive && (
                <div className="bg-ipn-guinda text-canvas p-8 mt-8 max-w-4xl">
                    <p className="text-3xl font-black text-center">
                        En la realidad: huelgas, recortes, clima... frenan la laboriosidad
                    </p>
                </div>
            )}
        </div>
    );
}
