import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TagCard } from './TagCard';
import { LocalHospital } from '@mui/icons-material';

const sampleTags = [
  { id: 1, text: "Tag 1", variant: "default" as const },
  { id: 2, text: "Tag 2", variant: "mint" as const },
  { id: 3, text: "Tag 3", variant: "teal" as const },
];

describe('TagCard', () => {
  it('renders without crashing', () => {
    render(<TagCard tags={sampleTags} />);
    
    expect(screen.getByText('Tag 1')).toBeInTheDocument();
    expect(screen.getByText('Tag 2')).toBeInTheDocument();
    expect(screen.getByText('Tag 3')).toBeInTheDocument();
  });

  it('renders with default title when provided', () => {
    render(<TagCard title="Test Title" tags={sampleTags} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders without title when not provided', () => {
    render(<TagCard tags={sampleTags} />);
    
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders tags with default props when not specified', () => {
    render(<TagCard tags={sampleTags} />);
    
    // Should render all tags with default size and variant
    expect(screen.getByText('Tag 1')).toBeInTheDocument();
    expect(screen.getByText('Tag 2')).toBeInTheDocument();
    expect(screen.getByText('Tag 3')).toBeInTheDocument();
  });

  it('renders tags with custom props when specified', () => {
    const customTags = [
      { id: 1, text: "Custom Tag", size: "lg" as const, variant: "selected" as const },
      { id: 2, text: "Another Tag", size: "sm" as const, variant: "mint" as const },
    ];
    
    render(<TagCard tags={customTags} />);
    
    expect(screen.getByText('Custom Tag')).toBeInTheDocument();
    expect(screen.getByText('Another Tag')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    render(<TagCard tags={sampleTags} className="custom-class" />);
    
    const cardElement = screen.getByText('Tag 1').closest('.tagCard');
    expect(cardElement).toHaveClass('custom-class');
  });

  it('shows close buttons when closable is true', () => {
    render(<TagCard tags={sampleTags} closable={true} />);
    
    expect(screen.getAllByLabelText('Remove tag')).toHaveLength(3);
  });

  it('does not show close buttons when closable is false', () => {
    render(<TagCard tags={sampleTags} closable={false} />);
    
    expect(screen.queryByLabelText('Remove tag')).not.toBeInTheDocument();
  });

  it('calls onTagClose when a tag close button is clicked', () => {
    const onTagClose = jest.fn();
    render(<TagCard tags={sampleTags} closable={true} onTagClose={onTagClose} />);
    
    const closeButtons = screen.getAllByLabelText('Remove tag');
    fireEvent.click(closeButtons[0]);
    
    expect(onTagClose).toHaveBeenCalledWith(1);
  });

  it('renders with different column counts', () => {
    const { rerender } = render(<TagCard tags={sampleTags} columns={2} />);
    
    // Test 2 columns
    let gridElement = screen.getByText('Tag 1').closest('.tagGrid');
    expect(gridElement).toHaveStyle({ gridTemplateColumns: 'repeat(2, 1fr)' });
    
    // Test 3 columns
    rerender(<TagCard tags={sampleTags} columns={3} />);
    gridElement = screen.getByText('Tag 1').closest('.tagGrid');
    expect(gridElement).toHaveStyle({ gridTemplateColumns: 'repeat(3, 1fr)' });
    
    // Test 4 columns (default)
    rerender(<TagCard tags={sampleTags} />);
    gridElement = screen.getByText('Tag 1').closest('.tagGrid');
    expect(gridElement).toHaveStyle({ gridTemplateColumns: 'repeat(4, 1fr)' });
  });

  it('handles empty tags array', () => {
    render(<TagCard tags={[]} />);
    
    expect(screen.queryByText('Tag 1')).not.toBeInTheDocument();
  });

  it('renders tags with custom icons when provided', () => {
    const tagsWithIcons = [
      { id: 1, text: "Icon Tag", icon: LocalHospital },
    ];
    
    render(<TagCard tags={tagsWithIcons} />);
    
    expect(screen.getByText('Icon Tag')).toBeInTheDocument();
  });

  it('handles mixed tag configurations', () => {
    const mixedTags = [
      { id: 1, text: "Default Tag" },
      { id: 2, text: "Custom Tag", size: "lg" as const, variant: "teal" as const, closable: true },
      { id: 3, text: "Another Tag", variant: "mint" as const },
    ];
    
    render(<TagCard tags={mixedTags} closable={false} />);
    
    expect(screen.getByText('Default Tag')).toBeInTheDocument();
    expect(screen.getByText('Custom Tag')).toBeInTheDocument();
    expect(screen.getByText('Another Tag')).toBeInTheDocument();
    
    // Only the tag with closable: true should show close button
    expect(screen.getAllByLabelText('Remove tag')).toHaveLength(1);
  });
});
