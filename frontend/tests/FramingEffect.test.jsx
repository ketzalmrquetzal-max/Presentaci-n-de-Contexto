import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FramingEffect from '../src/components/charts/FramingEffect';

describe('FramingEffect Component', () => {
    const mockData = {
        proyecto_a_acepta: 80,
        proyecto_a_rechaza: 20,
        proyecto_b_acepta: 30,
        proyecto_b_rechaza: 70,
        fase: 3
    };

    it('renders comparison bars correctly', () => {
        render(<FramingEffect data={mockData} />);

        // Verificar que muestra proyecto A y B
        expect(screen.getByText(/Proyecto A \(POSITIVO\)/i)).toBeInTheDocument();
        expect(screen.getByText(/Proyecto B \(NEGATIVO\)/i)).toBeInTheDocument();
    });

    it('calculates acceptance percentages correctly', () => {
        render(<FramingEffect data={mockData} />);

        // Proyecto A: 80 de 100 = 80%
        expect(screen.getByText(/80% aceptan/i)).toBeInTheDocument();

        // Proyecto B: 30 de 100 = 30%
        expect(screen.getByText(/30% aceptan/i)).toBeInTheDocument();
    });

    it('displays conclusion message', () => {
        render(<FramingEffect data={mockData} />);

        expect(screen.getByText(/Misma matemática, decisión opuesta/i)).toBeInTheDocument();
        expect(screen.getByText(/CONTEXTO/i)).toBeInTheDocument();
    });

    it('handles zero votes gracefully', () => {
        const emptyData = {
            proyecto_a_acepta: 0,
            proyecto_a_rechaza: 0,
            proyecto_b_acepta: 0,
            proyecto_b_rechaza: 0,
            fase: 3
        };

        render(<FramingEffect data={emptyData} />);

        // Debe mostrar 0% sin errores
        const percentages = screen.getAllByText(/0% aceptan/i);
        expect(percentages).toHaveLength(2);
    });
});
