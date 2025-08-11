import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  const defaultProps = {
    onChange: jest.fn(),
    onFocus: jest.fn(),
    onBlur: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<Checkbox {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(checkbox).not.toBeDisabled();
    expect(checkbox).not.toBeRequired();
  });

  it('renders with label', () => {
    render(<Checkbox {...defaultProps} label="Test label" />);
    
    expect(screen.getByText('Test label')).toBeInTheDocument();
    expect(screen.getByLabelText('Test label')).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(<Checkbox {...defaultProps} error="Test error" />);
    
    expect(screen.getByText('Test error')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('handles controlled checked state', () => {
    render(<Checkbox {...defaultProps} checked={true} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('handles uncontrolled defaultChecked state', () => {
    render(<Checkbox {...defaultProps} defaultChecked={true} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('calls onChange when clicked', () => {
    render(<Checkbox {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });

  it('calls onFocus when focused', () => {
    render(<Checkbox {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.focus(checkbox);
    
    expect(defaultProps.onFocus).toHaveBeenCalled();
  });

  it('calls onBlur when blurred', () => {
    render(<Checkbox {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.blur(checkbox);
    
    expect(defaultProps.onBlur).toHaveBeenCalled();
  });

  it('handles disabled state', () => {
    render(<Checkbox {...defaultProps} disabled />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    
    fireEvent.click(checkbox);
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it('handles required state', () => {
    render(<Checkbox {...defaultProps} required />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeRequired();
  });

  it('renders required indicator', () => {
    render(<Checkbox {...defaultProps} label="Test label" required />);
    
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Checkbox {...defaultProps} size="sm" />);
    
    let checkbox = screen.getByRole('checkbox');
    let container = checkbox.closest('div');
    expect(container).toHaveClass('size-sm');
    
    rerender(<Checkbox {...defaultProps} size="lg" />);
    checkbox = screen.getByRole('checkbox');
    container = checkbox.closest('div');
    expect(container).toHaveClass('size-lg');
  });

  it('generates unique id when not provided', () => {
    const { rerender } = render(<Checkbox {...defaultProps} label="Test 1" />);
    
    const checkbox1 = screen.getByRole('checkbox');
    const id1 = checkbox1.id;
    
    rerender(<Checkbox {...defaultProps} label="Test 2" />);
    const checkbox2 = screen.getByRole('checkbox');
    const id2 = checkbox2.id;
    
    expect(id1).not.toBe(id2);
  });

  it('uses provided id when available', () => {
    render(<Checkbox {...defaultProps} id="custom-id" label="Test label" />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'custom-id');
    
    const label = screen.getByText('Test label');
    expect(label).toHaveAttribute('for', 'custom-id');
  });

  it('sets aria-describedby when error is present', () => {
    render(<Checkbox {...defaultProps} error="Test error" />);
    
    const checkbox = screen.getByRole('checkbox');
    const describedBy = checkbox.getAttribute('aria-describedby');
    
    expect(describedBy).toContain('Test error');
  });

  it('sets aria-invalid when error is present', () => {
    render(<Checkbox {...defaultProps} error="Test error" />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });
});
