import QrCodeComponent from '../components/ui/QrCode';

export default function Bienvenida({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center px-16">
            <h1 className="text-9xl font-black text-ink mb-12 text-center tracking-tighter">
                LA RAZÓN NO BASTA
            </h1>

            <h2 className="text-6xl font-bold text-ipn-guinda mb-20 text-center">
                Otras Capacidades del Ingeniero
            </h2>

            {isAdmin ? (
                <>
                    <QrCodeComponent />
                    <p className="mt-16 text-4xl font-black text-ink animate-pulse">
                        👆 ESCANEA PARA UNIRTE
                    </p>
                </>
            ) : (
                <div className="text-center">
                    <p className="text-5xl font-black text-success-green mb-8">
                        ✅ CONECTADO
                    </p>
                    <p className="text-3xl text-ink">
                        Esperando que comience la presentación...
                    </p>
                </div>
            )}
        </div>
    );
}
