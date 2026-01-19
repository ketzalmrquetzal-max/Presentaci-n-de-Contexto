export default function ExplicacionLimitaciones({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center px-20">
            <h1 className="text-8xl font-black text-ink mb-16 text-center">
                2. Limitaciones de la Razón
            </h1>

            <div className="max-w-6xl space-y-12 text-left">
                <div className="border-l-8 border-alert-red pl-8">
                    <h2 className="text-5xl font-black text-alert-red mb-4">
                        No Todo es Calculable
                    </h2>
                    <p className="text-3xl font-bold text-ink leading-relaxed">
                        Problemas complejos NO tienen solución única. Múltiples variables,
                        contextos cambiantes, incertidumbre constante.
                    </p>
                </div>

                <div className="border-l-8 border-ipn-guinda pl-8">
                    <h2 className="text-5xl font-black text-ipn-guinda mb-4">
                        Sesgos Personales
                    </h2>
                    <p className="text-3xl font-bold text-ink leading-relaxed">
                        Nuestra "objetividad" está condicionada por{' '}
                        <span className="underline decoration-4">experiencias previas</span>,{' '}
                        <span className="underline decoration-4">cultura</span> y{' '}
                        <span className="underline decoration-4">valores personales</span>
                    </p>
                </div>

                <div className="border-l-8 border-success-green pl-8">
                    <h2 className="text-5xl font-black text-success-green mb-4">
                        El Dilema del Análisis Infinito
                    </h2>
                    <p className="text-3xl font-bold text-ink leading-relaxed">
                        Siempre se puede analizar{' '}
                        <span className="text-alert-red font-black">MÁS</span>.
                        ¿Cuándo es suficiente? La parálisis por análisis es real.
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
