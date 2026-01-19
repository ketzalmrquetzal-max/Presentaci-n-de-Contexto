export default function BigCheckbox({ label, value, checked, onChange }) {
    return (
        <button
            onClick={() => onChange(value)}
            className={`w-full p-8 border-8 font-black text-3xl transition-all ${checked
                    ? 'bg-success-green border-success-green text-canvas'
                    : 'bg-canvas border-ink text-ink hover:border-success-green'
                }`}
        >
            <span className="mr-4 text-5xl">
                {checked ? '✅' : '⬜'}
            </span>
            {label}
        </button>
    );
}
