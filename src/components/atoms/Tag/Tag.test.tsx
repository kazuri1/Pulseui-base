import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tag } from './Tag';
import { Favorite } from '@mui/icons-material';

describe('Tag', () => {
  it('renders without crashing', () => {
    render(<Tag>Test Tag</Tag>);
    
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('renders with default icon when no icon is provided', () => {
    render(<Tag>Diagnosis</Tag>);
    
    // The LocalHospital icon should be present (default)
    expect(screen.getByText('Diagnosis')).toBeInTheDocument();
  });

  it('renders with custom icon when provided', () => {
    render(<Tag icon={Favorite}>Favorites</Tag>);
    
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });

  it('renders with default size (md)', () => {
    render(<Tag>Test</Tag>);
    
    const tagElement = screen.getByText('Test').closest('.tag');
    expect(tagElement).toHaveClass('md');
  });

  it('renders with small size', () => {
    render(<Tag size="sm">Small</Tag>);
    
    const tagElement = screen.getByText('Small').closest('.tag');
    expect(tagElement).toHaveClass('sm');
  });

  it('renders with large size', () => {
    render(<Tag size="lg">Large</Tag>);
    
    const tagElement = screen.getByText('Large').closest('.tag');
    expect(tagElement).toHaveClass('lg');
  });

  it('renders with extra large size', () => {
    render(<Tag size="xl">Extra Large</Tag>);
    
    const tagElement = screen.getByText('Extra Large').closest('.tag');
    expect(tagElement).toHaveClass('xl');
  });

  it('renders with default variant', () => {
    render(<Tag>Test</Tag>);
    
    const tagElement = screen.getByText('Test').closest('.tag');
    expect(tagElement).toHaveClass('default');
  });

  it('renders with selected variant', () => {
    render(<Tag variant="selected">Selected</Tag>);
    
    const tagElement = screen.getByText('Selected').closest('.tag');
    expect(tagElement).toHaveClass('selected');
  });

  it('renders with mint variant', () => {
    render(<Tag variant="mint">Mint</Tag>);
    
    const tagElement = screen.getByText('Mint').closest('.tag');
    expect(tagElement).toHaveClass('mint');
  });

  it('renders with teal variant', () => {
    render(<Tag variant="teal">Teal</Tag>);
    
    const tagElement = screen.getByText('Teal').closest('.tag');
    expect(tagElement).toHaveClass('teal');
  });

  it('shows close button when closable is true', () => {
    render(<Tag closable>Closable</Tag>);
    
    expect(screen.getByLabelText('Remove tag')).toBeInTheDocument();
  });

  it('does not show close button when closable is false', () => {
    render(<Tag closable={false}>Not Closable</Tag>);
    
    expect(screen.queryByLabelText('Remove tag')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Tag closable onClose={onClose}>Closable</Tag>);
    
    const closeButton = screen.getByLabelText('Remove tag');
    fireEvent.click(closeButton);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('applies custom className when provided', () => {
    render(<Tag className="custom-class">Test</Tag>);
    
    const tagElement = screen.getByText('Test').closest('.tag');
    expect(tagElement).toHaveClass('custom-class');
  });

  it('renders with different text content', () => {
    const { rerender } = render(<Tag>First</Tag>);
    expect(screen.getByText('First')).toBeInTheDocument();
    
    rerender(<Tag>Second</Tag>);
    expect(screen.getByText('Second')).toBeInTheDocument();
  });

  it('handles long text content', () => {
    const longText = "This is a very long tag text that should wrap properly";
    render(<Tag>{longText}</Tag>);
    
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  it('renders with all props combined', () => {
    render(
      <Tag
        size="lg"
        variant="teal"
        closable
        icon={Favorite}
        className="custom-class"
      >
        Complete Tag
      </Tag>
    );
    
    const tagElement = screen.getByText('Complete Tag').closest('.tag');
    expect(tagElement).toHaveClass('lg', 'teal', 'custom-class');
    expect(screen.getByLabelText('Remove tag')).toBeInTheDocument();
  });
});
