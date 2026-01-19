import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BigCheckbox from '../src/components/ui/BigCheckbox';

describe('BigCheckbox Component', () => {
    it('renders with label and unchecked state', () => {
        const mockOnChange = vi.fn();

        render(
            <BigCheckbox
                label="Test Label"
                value="test_value"
                checked={false}
                onChange={mockOnChange}
            />
        );

        expect(screen.getByText('Test Label')).toBeInTheDocument();
        expect(screen.getByText('⬜')).toBeInTheDocument();
    });

    it('shows checkmark when checked', () => {
        const mockOnChange = vi.fn();

        render(
            <BigCheckbox
                label="Checked Item"
                value="checked"
                checked={true}
                onChange={mockOnChange}
            />
        );

        expect(screen.getByText('✅')).toBeInTheDocument();
    });

    it('calls onChange with correct value when clicked', () => {
        const mockOnChange = vi.fn();

        render(
            <BigCheckbox
                label="Clickable"
                value="my_value"
                checked={false}
                onChange={mockOnChange}
            />
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockOnChange).toHaveBeenCalledWith('my_value');
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('applies correct styling when checked', () => {
        const mockOnChange = vi.fn();

        const { container } = render(
            <BigCheckbox
                label="Styled"
                value="styled"
                checked={true}
                onChange={mockOnChange}
            />
        );

        const button = container.querySelector('button');
        expect(button.className).toContain('bg-success-green');
    });
});
