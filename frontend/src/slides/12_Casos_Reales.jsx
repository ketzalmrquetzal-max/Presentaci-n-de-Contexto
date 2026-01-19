export default function CasosReales({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-canvas overflow-hidden">
            {/* Header */}
            <div className="bg-alert-red p-6 border-b-8 border-ink">
                <h1 className="text-6xl font-black text-canvas text-center">
                    ⚠️ CUANDO LA INGENIERÍA FALLA
                </h1>
                <p className="text-3xl font-bold text-canvas text-center mt-2">
                    Casos reales donde la razón, la ética o ambas fallaron
                </p>
            </div>

            <div className="grid grid-cols-3 gap-8 p-8 h-[calc(100vh-140px)]">
                {/* Caso 1: Challenger */}
                <div className="flex flex-col border-8 border-alert-red bg-alert-red bg-opacity-10">
                    <div className="bg-alert-red p-4 border-b-4 border-ink">
                        <h2 className="text-4xl font-black text-canvas text-center">
                            🚀 CHALLENGER
                        </h2>
                        <p className="text-2xl font-bold text-canvas text-center">
                            28 enero 1986
                        </p>
                    </div>

                    <div className="p-6 space-y-4 flex-1">
                        <div className="bg-ink text-canvas p-4">
                            <p className="text-xl font-black mb-2">❌ El Problema</p>
                            <p className="text-lg font-bold">
                                Los O-rings fallan a bajas temperaturas
                            </p>
                        </div>

                        <div className="bg-canvas border-4 border-ink p-4">
                            <p className="text-xl font-black mb-2 text-alert-red">
                                🧠 Ingenieros SABÍAN
                            </p>
                            <p className="text-lg font-bold text-ink">
                                Datos técnicos claros mostraban el riesgo
                            </p>
                        </div>

                        <div className="bg-canvas border-4 border-ink p-4">
                            <p className="text-xl font-black mb-2 text-ink">
                                💼 Presión Corporativa
                            </p>
                            <p className="text-lg font-bold text-ink">
                                Gerencia sobre Razón técnica
                            </p>
                        </div>

                        <div className="bg-alert-red text-canvas p-4 border-4 border-ink">
                            <p className="text-3xl font-black text-center">
                                💀 7 MUERTOS
                            </p>
                            <p className="text-sm font-bold text-center mt-1">
                                73 segundos después del despegue
                            </p>
                        </div>
                    </div>
                </div>

                {/* Caso 2: Boeing 737 MAX */}
                <div className="flex flex-col border-8 border-alert-red bg-alert-red bg-opacity-10">
                    <div className="bg-alert-red p-4 border-b-4 border-ink">
                        <h2 className="text-4xl font-black text-canvas text-center">
                            ✈️ BOEING 737 MAX
                        </h2>
                        <p className="text-2xl font-bold text-canvas text-center">
                            2018-2019
                        </p>
                    </div>

                    <div className="p-6 space-y-4 flex-1">
                        <div className="bg-ink text-canvas p-4">
                            <p className="text-xl font-black mb-2">❌ El Problema</p>
                            <p className="text-lg font-bold">
                                Sistema MCAS defectuoso + falta de capacitación
                            </p>
                        </div>

                        <div className="bg-canvas border-4 border-ink p-4">
                            <p className="text-xl font-black mb-2 text-alert-red">
                                💰 Prioridad: COSTO
                            </p>
                            <p className="text-lg font-bold text-ink">
                                Evitar simuladores = ahorrar US$1M por cliente
                            </p>
                        </div>

                        <div className="bg-canvas border-4 border-ink p-4">
                            <p className="text-xl font-black mb-2 text-ink">
                                🔇 Silencio Interno
                            </p>
                            <p className="text-lg font-bold text-ink">
                                Ingenieros reportaron, gerencia ignoró
                            </p>
                        </div>

                        <div className="bg-alert-red text-canvas p-4 border-4 border-ink">
                            <p className="text-3xl font-black text-center">
                                💀 346 MUERTOS
                            </p>
                            <p className="text-sm font-bold text-center mt-1">
                                Lion Air 610 + Ethiopian 302
                            </p>
                        </div>
                    </div>
                </div>

                {/* Lección */}
                <div className="flex flex-col border-8 border-success-green bg-success-green bg-opacity-10">
                    <div className="bg-success-green p-4 border-b-4 border-ink">
                        <h2 className="text-4xl font-black text-ink text-center">
                            💡 LA LECCIÓN
                        </h2>
                        <p className="text-2xl font-bold text-ink text-center">
                            ¿Qué tienen en común?
                        </p>
                    </div>

                    <div className="p-6 space-y-6 flex-1 flex flex-col justify-center">
                        <div className="bg-ink text-canvas p-6">
                            <p className="text-2xl font-black mb-3">
                                1. La razón EXISTÍA
                            </p>
                            <p className="text-xl font-bold">
                                Los datos técnicos eran claros
                            </p>
                        </div>

                        <div className="bg-ink text-canvas p-6">
                            <p className="text-2xl font-black mb-3">
                                2. La ética PERDIÓ
                            </p>
                            <p className="text-xl font-bold">
                                Dinero/cronograma &gt; Vidas humanas
                            </p>
                        </div>

                        <div className="bg-success-green text-ink p-6 border-4 border-ink">
                            <p className="text-3xl font-black text-center mb-3">
                                ⚖️ EL MENSAJE
                            </p>
                            <p className="text-2xl font-bold text-center leading-tight">
                                La ingeniería sin ética es LETAL
                            </p>
                        </div>
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
