export default function BigButton({ children, onClick, color = "ink" }) {
    const colorClasses = {
        ink: "bg-ink text-canvas hover:bg-canvas hover:text-ink",
        green: "bg-success-green text-ink hover:bg-ink hover:text-success-green",
        red: "bg-alert-red text-canvas hover:bg-canvas hover:text-alert-red",
        blue: "bg-data-blue text-canvas hover:bg-canvas hover:text-data-blue",
    };

    return (
        <button
            onClick={onClick}
            className={`
        w-full min-h-[140px] px-8 py-6
        text-5xl font-black
        border-8 border-ink
        transition-all duration-200
        active:scale-95
        ${colorClasses[color]}
      `}
            style={{
                boxShadow: '10px 10px 0px 0px rgba(0,0,0,1)'
            }}
        >
            {children}
        </button>
    );
}
