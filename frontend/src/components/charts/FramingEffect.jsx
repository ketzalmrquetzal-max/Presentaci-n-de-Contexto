import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

export default function FramingEffect({ data }) {
    const proyectoA = [
        { name: 'Aceptan', value: data.proyecto_a_acepta || 0, color: '#00C851' },
        { name: 'Rechazan', value: data.proyecto_a_rechaza || 0, color: '#DC0000' }
    ];

    const proyectoB = [
        { name: 'Aceptan', value: data.proyecto_b_acepta || 0, color: '#00C851' },
        { name: 'Rechazan', value: data.proyecto_b_rechaza || 0, color: '#DC0000' }
    ];

    const totalA = proyectoA.reduce((sum, item) => sum + item.value, 0);
    const totalB = proyectoB.reduce((sum, item) => sum + item.value, 0);

    const pctAceptaA = totalA > 0 ? Math.round((proyectoA[0].value / totalA) * 100) : 0;
    const pctAceptaB = totalB > 0 ? Math.round((proyectoB[0].value / totalB) * 100) : 0;

    return (
        <div className="w-full h-full bg-canvas p-8">
            <h2 className="text-5xl font-black text-center text-ink mb-8">
                📊 Resultados: Misma matemática, decisión opuesta
            </h2>

            <div className="grid grid-cols-2 gap-8 h-[500px]">
                {/* Proyecto A */}
                <div className="border-8 border-success-green p-6 flex flex-col">
                    <h3 className="text-4xl font-black text-success-green text-center mb-4">
                        Proyecto A (POSITIVO)
                    </h3>
                    <p className="text-2xl font-bold text-center mb-4 text-ink">
                        "Se salvan 200 de 600"
                    </p>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={proyectoA}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" tick={{ fontSize: 16, fontWeight: 'bold' }} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" label={{ position: 'top', fontSize: 20, fontWeight: 'bold' }}>
                                {proyectoA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>

                    <p className="text-6xl font-black text-center mt-4 text-success-green">
                        {pctAceptaA}% aceptan
                    </p>
                </div>

                {/* Proyecto B */}
                <div className="border-8 border-alert-red p-6 flex flex-col">
                    <h3 className="text-4xl font-black text-alert-red text-center mb-4">
                        Proyecto B (NEGATIVO)
                    </h3>
                    <p className="text-2xl font-bold text-center mb-4 text-ink">
                        "Mueren 400 de 600"
                    </p>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={proyectoB}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" tick={{ fontSize: 16, fontWeight: 'bold' }} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" label={{ position: 'top', fontSize: 20, fontWeight: 'bold' }}>
                                {proyectoB.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>

                    <p className="text-6xl font-black text-center mt-4 text-alert-red">
                        {pctAceptaB}% aceptan
                    </p>
                </div>
            </div>

            <div className="bg-ipn-guinda text-canvas p-8 mt-8 text-center">
                <p className="text-4xl font-black">
                    💡 CONCLUSIÓN: La matemática es idéntica (200 vivos = 400 muertos)
                </p>
                <p className="text-3xl font-bold mt-4">
                    Pero el CONTEXTO (palabras) manipuló la decisión "racional"
                </p>
            </div>
        </div>
    );
}
