export default function HistoriaTacoma({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-canvas overflow-hidden">
            {/* Header */}
            <div className="bg-alert-red p-6 border-b-8 border-ink">
                <h1 className="text-6xl font-black text-canvas text-center">
                    ❌ EL FRACASO: Puente Tacoma Narrows (1940)
                </h1>
                <p className="text-3xl font-bold text-canvas text-center mt-2">
                    "Galloping Gertie" - Cuando la imaginación se desconecta de la validación
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8 p-8 h-[calc(100vh-140px)]">
                {/* Columna Izquierda: Imagen */}
                <div className="flex flex-col justify-center">
                    <div className="border-8 border-ink bg-ink p-4">
                        <img
                            src="/tacoma_narrows_collapse.png"
                            alt="Colapso del Puente Tacoma Narrows"
                            className="w-full h-auto"
                        />
                        <p className="text-xl font-black text-canvas mt-4 text-center">
                            7 de noviembre de 1940 - Viento de 64 km/h
                        </p>
                    </div>
                </div>

                {/* Columna Derecha: Información */}
                <div className="flex flex-col justify-center space-y-6">
                    <div className="bg-alert-red bg-opacity-20 border-4 border-alert-red p-6">
                        <h2 className="text-4xl font-black text-ink mb-3">
                            📍 El Contexto
                        </h2>
                        <p className="text-2xl font-bold text-ink leading-tight">
                            • Tercer puente colgante más largo del mundo<br />
                            • Diseñado por Leon Moisseiff, ingeniero brillante<br />
                            • El puente más esbelto y elegante de su época<br />
                            • Inaugurado: 1 julio 1940 - Colapsó: 7 nov 1940
                        </p>
                    </div>

                    <div className="bg-ink text-canvas p-6 border-4 border-ink">
                        <h2 className="text-4xl font-black mb-3">
                            ⚠️ Las Señales Ignoradas
                        </h2>
                        <p className="text-2xl font-bold leading-tight">
                            • Desde el inicio, el tablero se movía verticalmente<br />
                            • Los trabajadores lo apodaron "Galloping Gertie"<br />
                            • Movimiento visible incluso tras la apertura<br />
                            • <span className="text-alert-red">Medidas correctivas: INEFICACES</span>
                        </p>
                    </div>

                    <div className="bg-alert-red text-canvas p-6 border-8 border-ink">
                        <h2 className="text-5xl font-black mb-3">
                            💥 EL ERROR FATAL
                        </h2>
                        <p className="text-3xl font-black leading-tight">
                            Imaginación sin validación aerodinámica<br />
                            <span className="text-sm font-bold">
                                (Resonancia aeroelástica no prevista)
                            </span>
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
