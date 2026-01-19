export default function Imaginacion({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center px-20">
            <h1 className="text-7xl font-black text-ink mb-12 text-center">
                3. La Imaginación: El Origen de Todo (La Hipótesis)
            </h1>

            <div className="max-w-6xl space-y-8 text-left">
                <div className="border-l-8 border-data-blue pl-8">
                    <h2 className="text-4xl font-black text-data-blue mb-3">
                        Su función
                    </h2>
                    <p className="text-2xl font-bold text-ink leading-relaxed">
                        Es la herramienta <span className="italic">"sine qua non"</span> (indispensable) que nos permite{' '}
                        <span className="underline decoration-4">visualizar lo que no existe</span>: un puente donde hay vacío,
                        o una solución a un problema invisible. Es la base de toda hipótesis científica y de todo diseño conceptual.
                    </p>
                </div>

                <div className="border-l-8 border-ipn-guinda pl-8">
                    <h2 className="text-4xl font-black text-ipn-guinda mb-3">
                        Su naturaleza
                    </h2>
                    <p className="text-2xl font-bold text-ink leading-relaxed">
                        Trabajamos con <span className="text-data-blue font-black">"imágenes-sin-objeto"</span>. El ingeniero
                        debe ser capaz de ver en su mente no solo la estructura física, sino también{' '}
                        <span className="underline decoration-4">las fuerzas invisibles</span> (viento, cargas, desgaste) que
                        actuarán sobre ella en el futuro.
                    </p>
                </div>

                <div className="border-l-8 border-alert-red pl-8">
                    <h2 className="text-4xl font-black text-alert-red mb-3">
                        Su peligro: "La Loca de la Casa"
                    </h2>
                    <p className="text-2xl font-bold text-ink leading-relaxed">
                        El texto (y Pascal) nos advirtió que la imaginación es{' '}
                        <span className="text-alert-red font-black">"la loca de la casa"</span>. Si no se controla, nos seduce
                        con soluciones estéticas o teóricas que ignoran la realidad física.
                    </p>
                    <p className="text-xl font-bold text-ink leading-relaxed mt-3 italic">
                        Es una guía engañosa porque a veces acierta, pero cuando falla, lo hace{' '}
                        <span className="text-alert-red font-black">catastróficamente</span>.
                    </p>
                </div>

                <div className="bg-success-green bg-opacity-10 border-4 border-success-green p-6 mt-8">
                    <p className="text-2xl font-black text-ink text-center">
                        ✨ La ingeniería no empieza con un cálculo, sino con una imagen mental
                    </p>
                </div>
            </div>

            {!isAdmin && (
                <p className="mt-12 text-4xl text-ink opacity-50">
                    Esperando siguiente slide...
                </p>
            )}
        </div>
    );
}
