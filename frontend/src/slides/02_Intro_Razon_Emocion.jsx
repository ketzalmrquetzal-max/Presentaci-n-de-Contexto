export default function IntroRazonEmocion({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center px-20">
            <h1 className="text-8xl font-black text-ink mb-16 text-center">
                1. La Razón y la Acción
            </h1>

            <div className="max-w-6xl space-y-12 text-left">
                <div className="border-l-8 border-ipn-guinda pl-8">
                    <h2 className="text-5xl font-black text-ipn-guinda mb-4">
                        Razón vs. Voluntad
                    </h2>
                    <p className="text-3xl font-bold text-ink leading-relaxed">
                        La lógica no basta; la <span className="text-data-blue">voluntad</span> y el{' '}
                        <span className="text-data-blue">deseo</span> impulsan la acción
                    </p>
                </div>

                <div className="border-l-8 border-alert-red pl-8">
                    <h2 className="text-5xl font-black text-alert-red mb-4">
                        Influencia Emocional
                    </h2>
                    <p className="text-3xl font-bold text-ink leading-relaxed">
                        Las emociones intervienen en <span className="underline decoration-4">toda decisión técnica</span>
                    </p>
                </div>

                <div className="border-l-8 border-success-green pl-8">
                    <h2 className="text-5xl font-black text-success-green mb-4">
                        Racionalidad Acotada
                    </h2>
                    <p className="text-3xl font-bold text-ink leading-relaxed">
                        No somos seres de lógica absoluta; factores psicológicos{' '}
                        <span className="text-alert-red font-black">(como la aversión al riesgo)</span>{' '}
                        alteran nuestras elecciones
                    </p>
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
