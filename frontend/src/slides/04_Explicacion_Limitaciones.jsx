export default function ExplicacionLimitaciones({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center px-20">
            <h1 className="text-8xl font-black text-ink mb-16 text-center">
                2. El Territorio de la Razón
            </h1>

            <div className="max-w-6xl space-y-10 text-left">
                {/* Dominios de la Razón */}
                <div className="border-l-8 border-ipn-guinda pl-8">
                    <h2 className="text-5xl font-black text-ipn-guinda mb-4">
                        Dominios de la Razón
                    </h2>
                    <p className="text-3xl font-bold text-ink leading-relaxed">
                        <span className="text-data-blue">Mundo físico:</span> Ciencia, práctica y lógica
                    </p>
                    <p className="text-3xl font-bold text-ink leading-relaxed mt-2">
                        <span className="text-data-blue">Coherencia:</span> Garantizar que las decisiones sean consistentes
                    </p>
                </div>

                {/* Pilares del Razonamiento */}
                <div className="border-l-8 border-alert-red pl-8">
                    <h2 className="text-5xl font-black text-alert-red mb-4">
                        Pilares del Razonamiento
                    </h2>
                    <p className="text-3xl font-bold text-ink leading-relaxed">
                        • <span className="underline decoration-4">Principio de no contradicción:</span> Dos ideas opuestas no pueden ser ciertas a la vez
                    </p>
                    <p className="text-3xl font-bold text-ink leading-relaxed mt-3">
                        • <span className="underline decoration-4">Principio de razón suficiente:</span> Todo hecho debe tener una explicación lógica
                    </p>
                </div>

                {/* Los 3 Lenguajes del Ingeniero */}
                <div className="border-l-8 border-success-green pl-8">
                    <h2 className="text-5xl font-black text-success-green mb-4">
                        Los 3 Lenguajes del Ingeniero
                    </h2>
                    <div className="space-y-3">
                        <p className="text-3xl font-bold text-ink leading-relaxed">
                            1. <span className="text-data-blue">Geométrico:</span> Para el espacio
                        </p>
                        <p className="text-3xl font-bold text-ink leading-relaxed">
                            2. <span className="text-data-blue">Matemático:</span> Para lo cuantitativo
                        </p>
                        <p className="text-3xl font-bold text-ink leading-relaxed">
                            3. <span className="text-data-blue">Lenguaje ordinario:</span> La herramienta más potente para pensar
                        </p>
                        <p className="text-2xl font-black text-alert-red mt-4 italic">
                            "Saber hablar es saber pensar"
                        </p>
                    </div>
                </div>
            </div>

            {!isAdmin && (
                <p className="mt-16 text-4xl text-ink opacity-50">
                    Esperando siguiente slide...
                </p>
            )}
        </div>
    );
}
