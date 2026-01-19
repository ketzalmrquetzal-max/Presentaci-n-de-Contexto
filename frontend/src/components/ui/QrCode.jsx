import QRCode from 'react-qr-code';

export default function QrCodeComponent() {
    const currentUrl = window.location.origin;

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="p-8 bg-white border-8 border-ink" style={{
                boxShadow: '15px 15px 0px 0px rgba(0,0,0,1)'
            }}>
                <QRCode
                    value={currentUrl}
                    size={350}
                    fgColor="#000000"
                    bgColor="#FFFFFF"
                />
            </div>

            <p className="text-3xl font-mono font-black text-data-blue tracking-tight">
                {currentUrl}
            </p>
        </div>
    );
}
