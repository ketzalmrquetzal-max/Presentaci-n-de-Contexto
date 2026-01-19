export default function ConclusionCapacidades({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-ink text-canvas flex flex-col items-center justify-center px-20">
            <h1 className="text-9xl font-black mb-20 text-center text-canvas">
                La Ingeniería Integral
            </h1>

            <div className="grid grid-cols-3 gap-12 max-w-7xl mb-16">
                {/* Razón */}
                <div className="bg-canvas text-ink p-8 border-8 border-canvas">
                    <div className="text-7xl mb-6 text-center">🧠</div>
                    <h2 className="text-4xl font-black mb-4 text-center">
                        RAZÓN
                    </h2>
                    <p className="text-2xl font-bold text-center">
                        Necesaria, pero NO suficiente
                    </p>
                </div>

                {/* Imaginación */}
                <div className="bg-data-blue text-canvas p-8 border-8 border-data-blue">
                    <div className="text-7xl mb-6 text-center">💡</div>
                    <h2 className="text-4xl font-black mb-4 text-center">
                        IMAGINACIÓN
                    </h2>
                    <p className="text-2xl font-bold text-center">
                        Crea posibilidades + requiere validación
                    </p>
                </div>

                {/* Ética */}
                <div className="bg-success-green text-ink p-8 border-8 border-success-green">
                    <div className="text-7xl mb-6 text-center">⚖️</div>
                    <h2 className="text-4xl font-black mb-4 text-center">
                        ÉTICA
                    </h2>
                    <p className="text-2xl font-bold text-center">
                        Guía las decisiones técnicas
                    </p>
                </div>
            </div>

            <div className="bg-ipn-guinda border-8 border-ipn-guinda p-12 max-w-6xl">
                <p className="text-5xl font-black text-canvas text-center leading-tight">
                    El ingeniero completo domina{' '}
                    <span className="text-canvas underline decoration-8">cálculo Y contexto social</span>,{' '}
                    <span className="text-canvas underline decoration-8">lógica Y valores</span>,{' '}
                    <span className="text-canvas underline decoration-8">datos Y dignidad humana</span>
                </p>
            </div>

            {!isAdmin && (
                <p className="mt-16 text-3xl text-canvas opacity-50">
                    Esperando siguiente slide...
                </p>
            )}
        </div>
    );
}
