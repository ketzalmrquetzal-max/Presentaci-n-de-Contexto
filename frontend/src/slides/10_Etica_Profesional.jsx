import TugOfWar from '../components/charts/TugOfWar';
import BigButton from '../components/ui/BigButton';

export default function EticaProfesional({ isAdmin, wsState, changeSlide }) {
    const handleVote = (option) => {
        if (window.sendEthicsVote) {
            window.sendEthicsVote(option);
        }
    };

    const handleReset = () => {
        if (window.sendEthicsReset) {
            window.sendEthicsReset();
        }
    };

    // Detectar si "dinero" está ganando para pantalla roja
    const ethicsData = wsState.ethics || { vida: 0, dinero: 0 };
    const dineroWinning = ethicsData.dinero > ethicsData.vida;
    const total = ethicsData.vida + ethicsData.dinero;

    if (isAdmin) {
        return (
            <div
                className={`w-full h-screen flex flex-col items-center justify-center px-12 transition-colors duration-1000 ${dineroWinning && total > 0 ? 'bg-alert-red' : 'bg-canvas'
                    }`}
            >
                <h1
                    className={`text-7xl font-black mb-8 text-center ${dineroWinning && total > 0 ? 'text-canvas' : 'text-ink'
                        }`}
                >
                    3. Dilema Ético Profesional
                </h1>

                <div
                    className={`bg-opacity-10 border-4 p-8 mb-8 max-w-5xl ${dineroWinning && total > 0
                            ? 'bg-canvas border-canvas'
                            : 'bg-ipn-guinda border-ipn-guinda'
                        }`}
                >
                    <p
                        className={`text-4xl font-black text-center leading-tight ${dineroWinning && total > 0 ? 'text-canvas' : 'text-ink'
                            }`}
                    >
                        Un proyecto puede <span className="text-success-green">salvar vidas</span>,
                        <br />
                        pero <span className="text-alert-red">reduce ganancias</span>.
                        <br />
                        ¿Qué priorizas?
                    </p>
                </div>

                <div className="w-full flex-1 flex items-center justify-center">
                    <TugOfWar data={ethicsData} title="" />
                </div>

                {dineroWinning && total > 0 && (
                    <div className="mb-8 text-center animate-pulse">
                        <p className="text-6xl font-black text-canvas">
                            ⚠️ ALERTA ÉTICA ⚠️
                        </p>
                        <p className="text-3xl font-bold text-canvas mt-2">
                            El dinero está ganando sobre la vida humana
                        </p>
                    </div>
                )}

                <button
                    onClick={handleReset}
                    className={`mt-8 px-12 py-4 text-3xl font-black border-4 transition-all ${dineroWinning && total > 0
                            ? 'bg-canvas text-alert-red border-canvas hover:bg-alert-red hover:text-canvas'
                            : 'bg-alert-red text-canvas border-ink hover:bg-ink hover:text-alert-red'
                        }`}
                    style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
                >
                    🔄 RESET
                </button>
            </div>
        );
    }

    // Vista Mobile
    return (
        <div
            className={`w-full h-screen flex flex-col items-center justify-center px-8 gap-8 transition-colors duration-1000 ${dineroWinning && total > 0 ? 'bg-alert-red' : 'bg-canvas'
                }`}
        >
            <h2
                className={`text-5xl font-black text-center mb-4 ${dineroWinning && total > 0 ? 'text-canvas' : 'text-ink'
                    }`}
            >
                ¿Qué priorizas?
            </h2>

            <div className="w-full max-w-2xl space-y-6">
                <BigButton onClick={() => handleVote('vida')} color="green">
                    💚 VIDA HUMANA
                </BigButton>

                <BigButton onClick={() => handleVote('dinero')} color="red">
                    💰 DINERO
                </BigButton>
            </div>

            <p
                className={`text-2xl text-center mt-8 ${dineroWinning && total > 0 ? 'text-canvas font-black' : 'text-ink opacity-70'
                    }`}
            >
                {dineroWinning && total > 0
                    ? '⚠️ El dinero está ganando...'
                    : 'Tu voto se reflejará en tiempo real'}
            </p>
        </div>
    );
}
