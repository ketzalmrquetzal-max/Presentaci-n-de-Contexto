export default function TugOfWar({ data, title }) {
    // data = { vida: number, dinero: number }
    const total = (data.vida || 0) + (data.dinero || 0);
    const vidaPercent = total > 0 ? (data.vida / total) * 100 : 50;
    const dineroPercent = total > 0 ? (data.dinero / total) * 100 : 50;

    // Determinar quién va ganando
    const vidaWinning = data.vida > data.dinero;
    const tied = data.vida === data.dinero;
    const dineroWinning = data.dinero > data.vida;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-12">
            {title && (
                <h3 className="text-6xl font-black text-ink mb-12 text-center">
                    {title}
                </h3>
            )}

            {/* Barra de tira y afloja */}
            <div className="w-full max-w-4xl mb-8">
                <div className="relative h-32 bg-ink border-8 border-ink flex overflow-hidden">
                    {/* Lado VIDA (verde) */}
                    <div
                        className="bg-success-green flex items-center justify-center transition-all duration-500 ease-out"
                        style={{ width: `${vidaPercent}%` }}
                    >
                        {data.vida > 0 && (
                            <span className="text-6xl font-black text-ink">
                                {data.vida}
                            </span>
                        )}
                    </div>

                    {/* Lado DINERO (rojo) */}
                    <div
                        className="bg-alert-red flex items-center justify-center transition-all duration-500 ease-out"
                        style={{ width: `${dineroPercent}%` }}
                    >
                        {data.dinero > 0 && (
                            <span className="text-6xl font-black text-canvas">
                                {data.dinero}
                            </span>
                        )}
                    </div>
                </div>

                {/* Indicadores */}
                <div className="flex justify-between mt-4">
                    <div className="text-left">
                        <p className="text-4xl font-black text-success-green">
                            💚 VIDA HUMANA
                        </p>
                        <p className="text-2xl font-bold text-ink">
                            {vidaPercent.toFixed(1)}%
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-4xl font-black text-alert-red">
                            💰 DINERO
                        </p>
                        <p className="text-2xl font-bold text-ink">
                            {dineroPercent.toFixed(1)}%
                        </p>
                    </div>
                </div>
            </div>

            {/* Mensaje dinámico */}
            <div className="text-center mt-8">
                <p className="text-5xl font-black text-ink">
                    {tied && total > 0 && "⚖️ EMPATE"}
                    {vidaWinning && !tied && "💚 LA VIDA GANA"}
                    {dineroWinning && !tied && "⚠️ EL DINERO GANA"}
                    {total === 0 && "Esperando votos..."}
                </p>
                <p className="text-3xl font-bold text-ink mt-4">
                    Total: {total} votos
                </p>
            </div>
        </div>
    );
}
