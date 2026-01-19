import LiveBarChart from '../components/charts/LiveBarChart';
import BigButton from '../components/ui/BigButton';
import { useWebSocket } from '../hooks/useWebSocket';

export default function DemoRacionalidad({ isAdmin, wsState, changeSlide }) {
    // Obtener el WebSocket hook para enviar mensajes
    const { wsState: _, changeSlide: __ } = useWebSocket();

    const handleVote = (option) => {
        // Usar la función global sendVote (la crearemos en el hook)
        if (window.sendVote) {
            window.sendVote(option);
        }
    };

    const handleReset = () => {
        if (window.sendReset) {
            window.sendReset();
        }
    };

    if (isAdmin) {
        return (
            <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center px-12">
                <h1 className="text-7xl font-black text-ink mb-8 text-center">
                    Experimento: Racionalidad Acotada
                </h1>

                <div className="bg-data-blue bg-opacity-10 border-4 border-data-blue p-8 mb-8 max-w-5xl">
                    <p className="text-4xl font-black text-ink text-center leading-tight">
                        ¿Ganar <span className="text-success-green">100 puntos YA</span> (100% seguro)
                        <br />o<br />
                        <span className="text-alert-red">300 puntos</span> (33% probabilidad)?
                    </p>
                </div>

                <div className="w-full flex-1 flex items-center justify-center">
                    <LiveBarChart
                        data={wsState.rationality || { segura: 0, riesgo: 0 }}
                        title=""
                    />
                </div>

                <button
                    onClick={handleReset}
                    className="mt-8 px-12 py-4 bg-alert-red text-canvas text-3xl font-black border-4 border-ink hover:bg-ink hover:text-alert-red transition-all"
                    style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
                >
                    🔄 RESET
                </button>
            </div>
        );
    }

    // Vista Mobile
    return (
        <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center px-8 gap-8">
            <h2 className="text-5xl font-black text-ink text-center mb-4">
                ¿Qué prefieres?
            </h2>

            <div className="w-full max-w-2xl space-y-6">
                <BigButton onClick={() => handleVote('segura')} color="green">
                    100 SEGURO 🎯
                </BigButton>

                <BigButton onClick={() => handleVote('riesgo')} color="red">
                    300 RIESGO 🎲
                </BigButton>
            </div>

            <p className="text-2xl text-ink opacity-70 text-center mt-8">
                Tu voto se reflejará en tiempo real
            </p>
        </div>
    );
}
