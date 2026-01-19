import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

export default function ExclusionRadar({ data }) {
    // Transformar data para recharts
    const chartData = [
        { category: "Adultos\nmayores", value: data.adultos_mayores || 0, fullMark: 20 },
        { category: "Sin datos\nmóviles", value: data.sin_datos || 0, fullMark: 20 },
        { category: "Disc.\nvisual", value: data.disc_visual || 0, fullMark: 20 },
        { category: "Turistas", value: data.turistas || 0, fullMark: 20 }
    ];

    const total = chartData.reduce((sum, item) => sum + item.value, 0);
    const empatiaLevel = total === 0 ?
        "❌ Sin conciencia social" :
        total < 10 ? "⚠️ Baja empatía" :
            total < 20 ? "👍 Empatía moderada" :
                "✅ Alta conciencia social";

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-ink p-8">
            <h2 className="text-4xl font-black text-success-green mb-4 text-center">
                {empatiaLevel}
            </h2>

            <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={chartData}>
                    <PolarGrid stroke="#00ff00" strokeWidth={2} />
                    <PolarAngleAxis
                        dataKey="category"
                        tick={{ fill: '#00ff00', fontSize: 18, fontWeight: 'bold' }}
                    />
                    <PolarRadiusAxis
                        angle={90}
                        domain={[0, 20]}
                        tick={{ fill: '#00ff00' }}
                    />
                    <Radar
                        name="Exclusión detectada"
                        dataKey="value"
                        stroke="#00ff00"
                        fill="#00ff00"
                        fillOpacity={0.6}
                        strokeWidth={3}
                    />
                </RadarChart>
            </ResponsiveContainer>

            <div className="mt-6 grid grid-cols-2 gap-4 text-canvas">
                <div className="text-center">
                    <p className="text-5xl font-black text-alert-red">
                        {data.adultos_mayores || 0}
                    </p>
                    <p className="text-lg font-bold">Adultos mayores</p>
                </div>
                <div className="text-center">
                    <p className="text-5xl font-black text-alert-red">
                        {data.sin_datos || 0}
                    </p>
                    <p className="text-lg font-bold">Sin datos</p>
                </div>
                <div className="text-center">
                    <p className="text-5xl font-black text-alert-red">
                        {data.disc_visual || 0}
                    </p>
                    <p className="text-lg font-bold">Disc. visual</p>
                </div>
                <div className="text-center">
                    <p className="text-5xl font-black text-alert-red">
                        {data.turistas || 0}
                    </p>
                    <p className="text-lg font-bold">Turistas</p>
                </div>
            </div>

            <p className="text-canvas text-2xl font-bold mt-6 text-center">
                Total votos: {total}
            </p>
        </div>
    );
}
