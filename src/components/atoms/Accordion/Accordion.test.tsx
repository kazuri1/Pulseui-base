import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionList,
} from './Accordion';

describe('Accordion', () => {
  it('renders without crashing', () => {
    render(
      <Accordion>
        <AccordionItem id="test">
          <AccordionHeader itemId="test">Test Header</AccordionHeader>
          <AccordionContent itemId="test">Test Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    
    expect(screen.getByText('Test Header')).toBeInTheDocument();
  });

  it('expands and collapses content when header is clicked', () => {
    render(
      <Accordion>
        <AccordionItem id="test">
          <AccordionHeader itemId="test">Test Header</AccordionHeader>
          <AccordionContent itemId="test">Test Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const header = screen.getByText('Test Header');
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();

    fireEvent.click(header);
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    fireEvent.click(header);
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('supports multiple expanded items when allowMultiple is true', () => {
    render(
      <Accordion allowMultiple={true}>
        <AccordionItem id="item1">
          <AccordionHeader itemId="item1">Header 1</AccordionHeader>
          <AccordionContent itemId="item1">Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem id="item2">
          <AccordionHeader itemId="item2">Header 2</AccordionHeader>
          <AccordionContent itemId="item2">Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');

    fireEvent.click(header1);
    fireEvent.click(header2);

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('expands default items on mount', () => {
    render(
      <Accordion defaultExpanded={['item1']}>
        <AccordionItem id="item1">
          <AccordionHeader itemId="item1">Header 1</AccordionHeader>
          <AccordionContent itemId="item1">Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('applies size variants correctly', () => {
    const { rerender } = render(
      <Accordion size="sm">
        <AccordionItem id="test">
          <AccordionHeader itemId="test">Test Header</AccordionHeader>
          <AccordionContent itemId="test">Test Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const accordion = screen.getByText('Test Header').closest('.accordion');
    expect(accordion).toHaveClass('size-sm');

    rerender(
      <Accordion size="lg">
        <AccordionItem id="test">
          <AccordionHeader itemId="test">Test Header</AccordionHeader>
          <AccordionContent itemId="test">Test Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const accordionLg = screen.getByText('Test Header').closest('.accordion');
    expect(accordionLg).toHaveClass('size-lg');
  });

  it('disables accordion items when disabled prop is true', () => {
    render(
      <Accordion>
        <AccordionItem id="disabled" disabled={true}>
          <AccordionHeader itemId="disabled">Disabled Header</AccordionHeader>
          <AccordionContent itemId="disabled">Disabled Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const header = screen.getByText('Disabled Header');
    expect(header).toBeDisabled();
  });

  it('renders AccordionList convenience component correctly', () => {
    const items = [
      { id: '1', title: 'Title 1', content: 'Content 1' },
      { id: '2', title: 'Title 2', content: 'Content 2' },
    ];

    render(
      <Accordion>
        <AccordionList items={items} />
      </Accordion>
    );

    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
  });

  it('applies custom className props', () => {
    render(
      <Accordion className="custom-accordion">
        <AccordionItem id="test" className="custom-item">
          <AccordionHeader itemId="test" className="custom-header">Test Header</AccordionHeader>
          <AccordionContent itemId="test" className="custom-content">Test Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const accordion = screen.getByText('Test Header').closest('.accordion');
    const item = screen.getByText('Test Header').closest('.accordionItem');
    const header = screen.getByText('Test Header');
    const content = screen.getByText('Test Content').closest('.accordionContent');

    expect(accordion).toHaveClass('custom-accordion');
    expect(item).toHaveClass('custom-item');
    expect(header).toHaveClass('custom-header');
    expect(content).toHaveClass('custom-content');
  });

  it('rotates chevron icon when expanded', () => {
    render(
      <Accordion>
        <AccordionItem id="test">
          <AccordionHeader itemId="test">Test Header</AccordionHeader>
          <AccordionContent itemId="test">Test Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const header = screen.getByText('Test Header');
    const chevron = header.querySelector('.chevron');
    
    expect(chevron).not.toHaveClass('expanded');
    
    fireEvent.click(header);
    expect(chevron).toHaveClass('expanded');
  });

  it('throws error when used outside Accordion context', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      render(<AccordionHeader itemId="test">Test</AccordionHeader>);
    }).toThrow('Accordion components must be used within an Accordion');
    
    consoleSpy.mockRestore();
  });
});
