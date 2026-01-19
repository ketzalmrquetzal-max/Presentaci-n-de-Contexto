import { useEffect } from 'react';

export function useKeyboardNav(isAdmin, changeSlide, currentSlide, totalSlides) {
    useEffect(() => {
        if (!isAdmin) return; // Solo en modo admin

        const handleKeyPress = (e) => {
            switch (e.key) {
                case 'ArrowRight':
                case ' ': // Spacebar también avanza
                    if (currentSlide < totalSlides - 1) {
                        changeSlide(currentSlide + 1);
                    }
                    e.preventDefault();
                    break;

                case 'ArrowLeft':
                    if (currentSlide > 0) {
                        changeSlide(currentSlide - 1);
                    }
                    e.preventDefault();
                    break;

                case 'h':
                case 'H':
                    // Home - ir al slide 0
                    changeSlide(0);
                    break;

                case 'r':
                case 'R':
                    // Reset - resetear actividades
                    if (window.sendReset) window.sendReset();
                    if (window.sendEthicsReset) window.sendEthicsReset();
                    console.log('🔄 Reset all activities');
                    break;

                case 'f':
                case 'F':
                    // Fullscreen toggle
                    if (!document.fullscreenElement) {
                        document.documentElement.requestFullscreen();
                    } else {
                        document.exitFullscreen();
                    }
                    break;

                case 'Escape':
                    // Exit fullscreen
                    if (document.fullscreenElement) {
                        document.exitFullscreen();
                    }
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isAdmin, currentSlide, totalSlides, changeSlide]);
}
