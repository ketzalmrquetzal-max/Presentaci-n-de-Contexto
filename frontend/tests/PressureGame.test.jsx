import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PressureGame from '../src/components/charts/PressureGame';

describe('PressureGame Component', () => {
    it('shows waiting state when game is not active', () => {
        const inactiveData = {
            total_taps: 0,
            target: 100,
            time_left: 15,
            active: false
        };

        render(<PressureGame data={inactiveData} />);
        expect(screen.getByText(/Esperando inicio/i)).toBeInTheDocument();
    });

    it('displays progress correctly when active', () => {
        const activeData = {
            total_taps: 50,
            target: 100,
            time_left: 10,
            active: true
        };

        render(<PressureGame data={activeData} />);

        // Verificar progreso
        expect(screen.getByText(/50 \/ 100/i)).toBeInTheDocument();
        expect(screen.getByText(/50% completado/i)).toBeInTheDocument();
        expect(screen.getByText(/¡CONSTRUYENDO!/i)).toBeInTheDocument();
    });

    it('shows success message when target reached', () => {
        const successData = {
            total_taps: 100,
            target: 100,
            time_left: 5,
            active: false
        };

        render(<PressureGame data={successData} />);
        expect(screen.getByText(/¡PUENTE COMPLETADO!/i)).toBeInTheDocument();
    });

    it('shows failure message when time runs out', () => {
        const failedData = {
            total_taps: 60,
            target: 100,
            time_left: 0,
            active: false
        };

        render(<PressureGame data={failedData} />);
        expect(screen.getByText(/¡PUENTE COLAPSÓ!/i)).toBeInTheDocument();
        expect(screen.getByText(/60%/i)).toBeInTheDocument();
    });

    it('applies urgent styling when time is low', () => {
        const urgentData = {
            total_taps: 70,
            target: 100,
            time_left: 3,
            active: true
        };

        const { container } = render(<PressureGame data={urgentData} />);

        // Verificar que el timer tiene clase de alerta (rojo)
        const timer = screen.getByText(/3s/i);
        expect(timer.className).toContain('text-alert-red');
    });
});
