import { useState } from 'react';
import ExclusionRadar from '../components/charts/ExclusionRadar';
import BigCheckbox from '../components/ui/BigCheckbox';

export default function RadarExclusion({ isAdmin, wsState }) {
    const [selected, setSelected] = useState({
        adultos_mayores: false,
        sin_datos: false,
        disc_visual: false,
        turistas: false
    });

    const handleToggle = (category) => {
        const newSelected = {
            ...selected,
            [category]: !selected[category]
        };
        setSelected(newSelected);

        // Enviar al backend
        if (window.sendExclusionVote) {
            window.sendExclusionVote(category);
        }
    };

    const handleReset = () => {
        if (window.sendResetExclusion) {
            window.sendResetExclusion();
        }
        setSelected({
            adultos_mayores: false,
            sin_datos: false,
            disc_visual: false,
            turistas: false
        });
    };

    if (isAdmin) {
        // Vista Admin: Radar Chart
        return (
            <div className="w-full h-screen bg-ink">
                <div className="p-8">
                    <h1 className="text-7xl font-black text-success-green text-center mb-4">
                        📡 RADAR DE EXCLUSIÓN
                    </h1>
                    <p className="text-3xl font-bold text-canvas text-center mb-8">
                        Escenario: "Todo el transporte público usará solo App + QR"
                    </p>
                </div>

                <ExclusionRadar data={wsState.exclusion || {}} />

                <div className="flex justify-center p-8">
                    <button
                        onClick={handleReset}
                        className="bg-alert-red text-canvas px-12 py-6 text-3xl font-black border-4 border-canvas hover:bg-canvas hover:text-alert-red hover:border-alert-red transition-all"
                    >
                        🔄 RESET
                    </button>
                </div>
            </div>
        );
    } else {
        // Vista Mobile: Checkboxes múltiples
        return (
            <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center p-8">
                <h2 className="text-4xl font-black text-ink text-center mb-6">
                    ¿A quién estamos excluyendo?
                </h2>
                <p className="text-2xl font-bold text-ink text-center mb-8">
                    (Puedes seleccionar varios)
                </p>

                <div className="w-full max-w-2xl space-y-4">
                    <BigCheckbox
                        label="👵 Adultos mayores"
                        value="adultos_mayores"
                        checked={selected.adultos_mayores}
                        onChange={handleToggle}
                    />
                    <BigCheckbox
                        label="📱 Sin datos móviles"
                        value="sin_datos"
                        checked={selected.sin_datos}
                        onChange={handleToggle}
                    />
                    <BigCheckbox
                        label="👁️ Discapacidad visual"
                        value="disc_visual"
                        checked={selected.disc_visual}
                        onChange={handleToggle}
                    />
                    <BigCheckbox
                        label="🌍 Turistas"
                        value="turistas"
                        checked={selected.turistas}
                        onChange={handleToggle}
                    />
                </div>

                <p className="text-xl text-ink opacity-70 text-center mt-8">
                    Tus respuestas se verán en tiempo real
                </p>
            </div>
        );
    }
}
