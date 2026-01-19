import { BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer, LabelList } from 'recharts';

export default function LiveBarChart({ data, title }) {
    // Preparar datos para recharts
    const chartData = Object.entries(data).map(([key, value]) => ({
        name: key === 'segura' ? '100 SEGURO' : '300 RIESGO',
        votos: value,
        color: key === 'segura' ? '#00FF00' : '#FF0000'
    }));

    const maxVotes = Math.max(...chartData.map(d => d.votos), 5);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {title && (
                <h3 className="text-5xl font-black text-ink mb-12 text-center">
                    {title}
                </h3>
            )}

            <ResponsiveContainer width="90%" height={500}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
                    <XAxis
                        dataKey="name"
                        tick={{ fill: '#000000', fontSize: 32, fontWeight: 900 }}
                        axisLine={{ stroke: '#000000', strokeWidth: 4 }}
                    />
                    <YAxis
                        domain={[0, maxVotes]}
                        tick={{ fill: '#000000', fontSize: 28, fontWeight: 900 }}
                        axisLine={{ stroke: '#000000', strokeWidth: 4 }}
                        label={{
                            value: 'VOTOS',
                            angle: -90,
                            position: 'insideLeft',
                            style: { fontSize: 32, fontWeight: 900, fill: '#000000' }
                        }}
                    />
                    <Bar dataKey="votos" radius={[8, 8, 0, 0]}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="#000000" strokeWidth={4} />
                        ))}
                        <LabelList
                            dataKey="votos"
                            position="top"
                            style={{ fontSize: 48, fontWeight: 900, fill: '#000000' }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

            <div className="mt-8 text-3xl font-black text-ink">
                TOTAL: {chartData.reduce((sum, d) => sum + d.votos, 0)} votos
            </div>
        </div>
    );
}
