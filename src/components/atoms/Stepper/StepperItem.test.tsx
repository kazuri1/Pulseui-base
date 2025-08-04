import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StepperItem } from './StepperItem';

describe('StepperItem', () => {
  it('renders with default props', () => {
    render(<StepperItem label="Test Label">1</StepperItem>);
    
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders without label when showLabel is false', () => {
    render(<StepperItem label="Test Label" showLabel={false}>1</StepperItem>);
    
    expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('shows asterisk when showAsterisk is true', () => {
    render(<StepperItem label="Required Field" showAsterisk>1</StepperItem>);
    
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('does not show asterisk when showAsterisk is false', () => {
    render(<StepperItem label="Optional Field" showAsterisk={false}>1</StepperItem>);
    
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<StepperItem size="xs" label="Test">1</StepperItem>);
    expect(screen.getByText('Test').closest('div')).toHaveClass('size-xs');
    
    rerender(<StepperItem size="lg" label="Test">1</StepperItem>);
    expect(screen.getByText('Test').closest('div')).toHaveClass('size-lg');
  });

  it('passes status and radius to StepperIcon', () => {
    render(
      <StepperItem 
        status="active" 
        radius="lg" 
        label="Test"
      >
        1
      </StepperItem>
    );
    
    // The StepperIcon should receive the props
    const stepperIcon = screen.getByText('1').closest('span');
    expect(stepperIcon).toHaveClass('status-active');
  });

  it('renders children content', () => {
    render(<StepperItem label="Test">Custom Content</StepperItem>);
    
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<StepperItem label="Test" className="custom-class">1</StepperItem>);
    
    expect(screen.getByText('Test').closest('div')).toHaveClass('custom-class');
  });

  it('applies custom id', () => {
    render(<StepperItem label="Test" id="test-id">1</StepperItem>);
    
    expect(screen.getByText('Test').closest('div')).toHaveAttribute('id', 'test-id');
  });

  it('applies custom style', () => {
    render(
      <StepperItem 
        label="Test" 
        style={{ backgroundColor: 'red' }}
      >
        1
      </StepperItem>
    );
    
    expect(screen.getByText('Test').closest('div')).toHaveStyle({ backgroundColor: 'red' });
  });

  it('combines label and asterisk correctly', () => {
    render(<StepperItem label="Required" showAsterisk>1</StepperItem>);
    
    const labelElement = screen.getByText('Required');
    const asteriskElement = screen.getByText('*');
    
    expect(labelElement).toBeInTheDocument();
    expect(asteriskElement).toBeInTheDocument();
    expect(asteriskElement).toHaveClass('asterisk');
  });
}); 