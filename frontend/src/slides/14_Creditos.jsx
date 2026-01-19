export default function Creditos({ isAdmin, wsState }) {
    const totalVotes =
        (wsState.rationality?.segura || 0) +
        (wsState.rationality?.riesgo || 0) +
        (wsState.ethics?.vida || 0) +
        (wsState.ethics?.dinero || 0);

    return (
        <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center px-20">
            <h1 className="text-8xl font-black text-ink mb-12 text-center">
                ¡Gracias!
            </h1>

            {/* Estadísticas en vivo */}
            <div className="bg-success-green bg-opacity-20 border-8 border-success-green p-8 mb-8 max-w-5xl">
                <h2 className="text-5xl font-black text-ink text-center mb-6">
                    📊 Esta Sesión en Números
                </h2>
                <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                        <p className="text-7xl font-black text-ipn-guinda">
                            {wsState.participants || 0}
                        </p>
                        <p className="text-2xl font-bold text-ink mt-2">
                            Participantes
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-7xl font-black text-data-blue">
                            {totalVotes}
                        </p>
                        <p className="text-2xl font-bold text-ink mt-2">
                            Votos Totales
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-7xl font-black text-success-green">
                            5
                        </p>
                        <p className="text-2xl font-bold text-ink mt-2">
                            Dinámicas
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl space-y-8">
                <div className="text-center border-8 border-ipn-guinda bg-ipn-guinda p-10">
                    <h2 className="text-6xl font-black text-canvas mb-4">
                        Contexto Social de la Ingeniería
                    </h2>
                    <p className="text-4xl font-bold text-canvas">
                        IPN - ESIME Culhuacán
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-3xl font-bold text-ink mb-4">
                        Presentación Interactiva
                    </p>
                    <p className="text-5xl font-black text-data-blue">
                        "La Razón No Basta"
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-12">
                    <div className="bg-success-green bg-opacity-20 border-4 border-success-green p-6">
                        <p className="text-3xl font-black text-ink text-center">
                            💻 Tecnología
                        </p>
                        <p className="text-xl font-bold text-ink text-center mt-2">
                            React + FastAPI + WebSockets
                        </p>
                    </div>

                    <div className="bg-data-blue bg-opacity-20 border-4 border-data-blue p-6">
                        <p className="text-3xl font-black text-ink text-center">
                            🎨 Diseño
                        </p>
                        <p className="text-xl font-bold text-ink text-center mt-2">
                            Anti-Glare Brutalism
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-2xl font-bold text-ink opacity-70">
                        {new Date().getFullYear()} | Primer Semestre
                    </p>
                </div>
            </div>

            {!isAdmin && (
                <div className="mt-12 text-center">
                    <p className="text-4xl font-black text-success-green mb-4">
                        ✅ Fin de la presentación
                    </p>
                    <p className="text-2xl text-ink opacity-70">
                        Puedes cerrar esta ventana
                    </p>
                </div>
            )}
        </div>
    );
}
