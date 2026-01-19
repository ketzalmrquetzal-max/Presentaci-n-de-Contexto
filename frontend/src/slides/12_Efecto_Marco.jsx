import { useState, useEffect } from 'react';
import FramingEffect from '../components/charts/FramingEffect';
import BigButton from '../components/ui/BigButton';

export default function EfectoMarco({ isAdmin, wsState }) {
    const fase = wsState.framing?.fase || 1;

    const handleVote = (decision) => {
        if (window.sendFramingVote) {
            const proyecto = fase === 1 ? 'a' : 'b';
            window.sendFramingVote(proyecto, decision);
        }
    };

    const handleChangeFase = (nuevaFase) => {
        if (window.sendChangeFase) {
            window.sendChangeFase(nuevaFase);
        }
    };

    const handleReset = () => {
        if (window.sendResetFraming) {
            window.sendResetFraming();
        }
    };

    if (isAdmin) {
        // Vista Admin: Control de fases + resultados
        return (
            <div className="w-full h-screen bg-canvas overflow-auto">
                <div className="p-8">
                    <h1 className="text-7xl font-black text-ink text-center mb-4">
                        🎭 EFECTO MARCO
                    </h1>
                    <p className="text-3xl font-bold text-center mb-8 text-ipn-guinda">
                        El contexto manipula la decisión "racional"
                    </p>
                </div>

                {/* Controles de fase */}
                <div className="flex justify-center gap-4 mb-8 px-8">
                    <button
                        onClick={() => handleChangeFase(1)}
                        className={`px-8 py-4 text-2xl font-black border-4 ${fase === 1
                                ? 'bg-success-green text-canvas border-success-green'
                                : 'bg-canvas text-ink border-ink'
                            }`}
                    >
                        FASE 1: Proyecto A
                    </button>
                    <button
                        onClick={() => handleChangeFase(2)}
                        className={`px-8 py-4 text-2xl font-black border-4 ${fase === 2
                                ? 'bg-success-green text-canvas border-success-green'
                                : 'bg-canvas text-ink border-ink'
                            }`}
                    >
                        FASE 2: Proyecto B
                    </button>
                    <button
                        onClick={() => handleChangeFase(3)}
                        className={`px-8 py-4 text-2xl font-black border-4 ${fase === 3
                                ? 'bg-success-green text-canvas border-success-green'
                                : 'bg-canvas text-ink border-ink'
                            }`}
                    >
                        FASE 3: Comparación
                    </button>
                    <button
                        onClick={handleReset}
                        className="px-8 py-4 text-2xl font-black bg-alert-red text-canvas border-4 border-alert-red"
                    >
                        🔄 RESET
                    </button>
                </div>

                {/* Mostrar según fase */}
                {fase === 1 && (
                    <div className="bg-success-green bg-opacity-20 border-8 border-success-green p-12 mx-8">
                        <h2 className="text-6xl font-black text-center text-ink mb-4">
                            PROYECTO A
                        </h2>
                        <p className="text-4xl font-bold text-center text-ink">
                            Se salvan <span className="text-success-green">200 personas</span> de 600
                        </p>
                        <p className="text-2xl text-center text-ink mt-8">
                            Pidiendo votos en fase 1...
                        </p>
                    </div>
                )}

                {fase === 2 && (
                    <div className="bg-alert-red bg-opacity-20 border-8 border-alert-red p-12 mx-8">
                        <h2 className="text-6xl font-black text-center text-ink mb-4">
                            PROYECTO B
                        </h2>
                        <p className="text-4xl font-bold text-center text-ink">
                            Mueren <span className="text-alert-red">400 personas</span> de 600
                        </p>
                        <p className="text-2xl text-center text-ink mt-8">
                            Pidiendo votos en fase 2...
                        </p>
                    </div>
                )}

                {fase === 3 && <FramingEffect data={wsState.framing || {}} />}
            </div>
        );
    } else {
        // Vista Mobile: Botones según fase
        return (
            <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center p-8">
                {fase === 1 && (
                    <>
                        <h2 className="text-5xl font-black text-center text-success-green mb-8">
                            PROYECTO A
                        </h2>
                        <p className="text-3xl font-bold text-center text-ink mb-12">
                            Se salvan <span className="text-success-green">200 personas</span> de 600
                        </p>
                        <div className="w-full max-w-2xl space-y-6">
                            <BigButton
                                color="success"
                                onClick={() => handleVote('acepta')}
                            >
                                ✅ ACEPTO EL PROYECTO
                            </BigButton>
                            <BigButton
                                color="danger"
                                onClick={() => handleVote('rechaza')}
                            >
                                ❌ RECHAZO EL PROYECTO
                            </BigButton>
                        </div>
                    </>
                )}

                {fase === 2 && (
                    <>
                        <h2 className="text-5xl font-black text-center text-alert-red mb-8">
                            PROYECTO B
                        </h2>
                        <p className="text-3xl font-bold text-center text-ink mb-12">
                            Mueren <span className="text-alert-red">400 personas</span> de 600
                        </p>
                        <div className="w-full max-w-2xl space-y-6">
                            <BigButton
                                color="success"
                                onClick={() => handleVote('acepta')}
                            >
                                ✅ ACEPTO EL PROYECTO
                            </BigButton>
                            <BigButton
                                color="danger"
                                onClick={() => handleVote('rechaza')}
                            >
                                ❌ RECHAZO EL PROYECTO
                            </BigButton>
                        </div>
                    </>
                )}

                {fase === 3 && (
                    <div className="text-center">
                        <h2 className="text-5xl font-black text-ink mb-4">
                            📊 Resultados en pantalla
                        </h2>
                        <p className="text-3xl text-ink">
                            El presentador está mostrando la comparación
                        </p>
                    </div>
                )}
            </div>
        );
    }
}
