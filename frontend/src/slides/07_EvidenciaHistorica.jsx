export default function EvidenciaHistorica({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center px-20">
            <h1 className="text-7xl font-black text-ink mb-12 text-center">
                5. La Evidencia Histórica: El Equilibrio Vital
            </h1>

            <div className="bg-ink text-canvas p-6 mb-8 max-w-5xl border-8 border-ink">
                <p className="text-3xl font-bold text-center leading-tight">
                    Analizamos cómo el éxito o el fracaso dependen exclusivamente del{' '}
                    <span className="text-success-green">equilibrio</span> entre estas dos fuerzas
                </p>
            </div>

            <div className="max-w-6xl space-y-10 text-left">
                {/* Cuando falla la Laboriosidad */}
                <div className="border-l-8 border-alert-red pl-8">
                    <h2 className="text-4xl font-black text-alert-red mb-4">
                        ❌ Cuando falla la Laboriosidad (validación)
                    </h2>
                    <p className="text-2xl font-bold text-ink leading-relaxed">
                        Ocurre el desastre del <span className="font-black">Puente Tacoma Narrows</span>. Hubo mucha{' '}
                        <span className="text-data-blue">imaginación</span> en el diseño, pero faltó la{' '}
                        <span className="text-alert-red underline decoration-4">laboriosidad de investigar a fondo</span>{' '}
                        la interacción real con el viento.
                    </p>
                    <p className="text-xl font-black text-alert-red mt-3 italic">
                        La fantasía chocó con la física.
                    </p>
                </div>

                {/* Cuando ambas triunfan */}
                <div className="border-l-8 border-success-green pl-8">
                    <h2 className="text-4xl font-black text-success-green mb-4">
                        ✅ Cuando ambas triunfan
                    </h2>
                    <p className="text-2xl font-bold text-ink leading-relaxed">
                        Nace la <span className="font-black">Torre Eiffel</span>. Una{' '}
                        <span className="text-data-blue">imaginación audaz</span> (una torre de 300 metros) respaldada por una{' '}
                        <span className="text-success-green underline decoration-4">laboriosidad obsesiva</span>{' '}
                        (cálculos milimétricos, prefabricación exacta).
                    </p>
                    <p className="text-xl font-black text-success-green mt-3 italic">
                        La "loca de la casa" fue domada por la razón.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="bg-alert-red bg-opacity-10 border-4 border-alert-red p-6 text-center">
                        <p className="text-5xl mb-2">🌉</p>
                        <p className="text-2xl font-black text-ink">Tacoma Narrows</p>
                        <p className="text-lg font-bold text-ink mt-2">Imaginación sin validación</p>
                    </div>
                    <div className="bg-success-green bg-opacity-10 border-4 border-success-green p-6 text-center">
                        <p className="text-5xl mb-2">🗼</p>
                        <p className="text-2xl font-black text-ink">Torre Eiffel</p>
                        <p className="text-lg font-bold text-ink mt-2">Imaginación + Laboriosidad</p>
                    </div>
                </div>
            </div>

            {!isAdmin && (
                <p className="mt-12 text-4xl text-ink opacity-50">
                    Esperando siguiente slide...
                </p>
            )}
        </div>
    );
}
