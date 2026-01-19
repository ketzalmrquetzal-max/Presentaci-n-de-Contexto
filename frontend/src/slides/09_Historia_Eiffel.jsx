export default function HistoriaEiffel({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-canvas overflow-hidden">
            {/* Header */}
            <div className="bg-success-green p-6 border-b-8 border-ink">
                <h1 className="text-6xl font-black text-ink text-center">
                    ✅ EL ÉXITO: Torre Eiffel (1889)
                </h1>
                <p className="text-3xl font-bold text-ink text-center mt-2">
                    Cuando imaginación y laboriosidad se sincronizan perfectamente
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8 p-8 h-[calc(100vh-140px)]">
                {/* Columna Izquierda: Imagen */}
                <div className="flex flex-col justify-center">
                    <div className="border-8 border-ink bg-ink p-4">
                        <img
                            src="/eiffel_tower_construction.png"
                            alt="Construcción de la Torre Eiffel"
                            className="w-full h-auto"
                        />
                        <p className="text-xl font-black text-canvas mt-4 text-center">
                            1887-1889 - 300 metros de precisión
                        </p>
                    </div>
                </div>

                {/* Columna Derecha: Información */}
                <div className="flex flex-col justify-center space-y-5">
                    <div className="bg-data-blue bg-opacity-20 border-4 border-data-blue p-5">
                        <h2 className="text-4xl font-black text-ink mb-3">
                            💡 Imaginación Precisa
                        </h2>
                        <p className="text-2xl font-bold text-ink leading-tight">
                            • Gustave Eiffel + ingenieros Koechlin y Nouguier<br />
                            • <span className="text-data-blue font-black">Hipótesis correcta:</span> El viento, no el peso<br />
                            • Forma exponencial = eficiencia aerodinámica<br />
                            • Previsión de condiciones futuras
                        </p>
                    </div>

                    <div className="bg-ipn-guinda text-canvas p-5 border-4 border-ipn-guinda">
                        <h2 className="text-4xl font-black mb-3">
                            🔧 Laboriosidad Extrema
                        </h2>
                        <p className="text-2xl font-bold leading-tight">
                            • <span className="font-black">5,300</span> dibujos detallados<br />
                            • <span className="font-black">18,038</span> piezas de hierro distintas<br />
                            • <span className="font-black">2.5 millones</span> de remaches<br />
                            • Precisión: <span className="font-black">décimas de milímetro</span>
                        </p>
                    </div>

                    <div className="bg-success-green text-ink p-5 border-8 border-ink">
                        <h2 className="text-5xl font-black mb-2">
                            ✨ RESULTADO
                        </h2>
                        <p className="text-3xl font-black leading-tight">
                            135 años en pie<br />
                            <span className="text-2xl font-bold">
                                Imaginación + Validación + Ejecución rigurosa
                            </span>
                        </p>
                    </div>

                    <div className="bg-ink text-canvas p-4 border-4 border-ink">
                        <p className="text-xl font-black text-center">
                            "La dignidad del trabajo materializa la imaginación"
                        </p>
                    </div>
                </div>
            </div>

            {!isAdmin && (
                <p className="absolute bottom-4 left-0 right-0 text-2xl text-ink opacity-50 text-center">
                    Esperando siguiente slide...
                </p>
            )}
        </div>
    );
}
