export default function Laboriosidad({ isAdmin }) {
    return (
        <div className="w-full h-screen bg-canvas flex flex-col items-center justify-center px-20">
            <h1 className="text-7xl font-black text-ink mb-12 text-center">
                4. La Laboriosidad: El Ancla a la Realidad (La Validación)
            </h1>

            <div className="bg-ipn-guinda bg-opacity-10 border-4 border-ipn-guinda p-6 mb-8 max-w-5xl">
                <p className="text-3xl font-bold text-ink text-center leading-tight">
                    Si la imaginación nos eleva, la laboriosidad nos aterriza.{' '}
                    <span className="text-ipn-guinda">No se trata solo de "trabajar duro"</span>, sino de una{' '}
                    <span className="underline decoration-4">actitud industriosa y metódica</span>.
                </p>
            </div>

            <div className="max-w-6xl space-y-8 text-left">
                <div className="border-l-8 border-success-green pl-8">
                    <h2 className="text-4xl font-black text-success-green mb-3">
                        Su función: El Filtro de la Verdad
                    </h2>
                    <p className="text-2xl font-bold text-ink leading-relaxed">
                        La laboriosidad es la disciplina de someter esas{' '}
                        <span className="text-data-blue">imágenes mentales brillantes</span> a{' '}
                        <span className="underline decoration-4">pruebas rigurosas</span>, cálculos tediosos,
                        experimentación y validación deductiva.
                    </p>
                </div>

                <div className="border-l-8 border-ipn-guinda pl-8">
                    <h2 className="text-4xl font-black text-ipn-guinda mb-3">
                        Su valor ético: De la Valentía Salvaje a la Dignidad
                    </h2>
                    <p className="text-2xl font-bold text-ink leading-relaxed">
                        Siguiendo a <span className="font-black">Hegel</span>, vimos que la laboriosidad es lo que saca
                        al ser humano de la{' '}
                        <span className="text-alert-red">"valentía salvaje"</span> (depender de la naturaleza) y le da la{' '}
                        <span className="text-success-green font-black">dignidad</span> de transformar su entorno mediante
                        el ingenio y el esfuerzo sostenido.
                    </p>
                </div>

                <div className="bg-alert-red bg-opacity-10 border-4 border-alert-red p-6 mt-6">
                    <p className="text-2xl font-black text-ink text-center">
                        ⚒️ Sin laboriosidad, la imaginación se convierte en fantasía sin consecuencias
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
