import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExclusionRadar from '../src/components/charts/ExclusionRadar';

describe('ExclusionRadar Component', () => {
    const mockData = {
        adultos_mayores: 5,
        sin_datos: 3,
        disc_visual: 2,
        turistas: 1
    };

    it('renders radar chart with data', () => {
        render(<ExclusionRadar data={mockData} />);

        // Verificar que muestra los números
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('displays correct empathy level based on total votes', () => {
        const highVotes = {
            adultos_mayores: 10,
            sin_datos: 8,
            disc_visual: 7,
            turistas: 5
        };

        render(<ExclusionRadar data={highVotes} />);
        expect(screen.getByText(/Alta conciencia social/i)).toBeInTheDocument();
    });

    it('shows zero state when no votes', () => {
        const emptyData = {
            adultos_mayores: 0,
            sin_datos: 0,
            disc_visual: 0,
            turistas: 0
        };

        render(<ExclusionRadar data={emptyData} />);
        expect(screen.getByText(/Sin conciencia social/i)).toBeInTheDocument();
    });

    it('calculates total votes correctly', () => {
        render(<ExclusionRadar data={mockData} />);
        // Total: 5 + 3 + 2 + 1 = 11
        expect(screen.getByText(/Total votos: 11/i)).toBeInTheDocument();
    });
});
