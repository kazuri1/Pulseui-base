import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { UpdateNotification } from './UpdateNotification';

const defaultProps = {
  title: "Updates Available",
  message: "A new version is available. Please upgrade for the best experience.",
  skipText: "Skip",
  downloadText: "Download",
};

describe('UpdateNotification', () => {
  it('renders without crashing', () => {
    render(<UpdateNotification {...defaultProps} />);
    
    expect(screen.getByText('Updates Available')).toBeInTheDocument();
    expect(screen.getByText('A new version is available. Please upgrade for the best experience.')).toBeInTheDocument();
    expect(screen.getByText('Skip')).toBeInTheDocument();
    expect(screen.getByText('Download')).toBeInTheDocument();
  });

  it('displays custom title when provided', () => {
    render(<UpdateNotification {...defaultProps} title="Custom Title" />);
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('displays custom message when provided', () => {
    render(<UpdateNotification {...defaultProps} message="Custom message" />);
    
    expect(screen.getByText('Custom message')).toBeInTheDocument();
  });

  it('displays custom button text when provided', () => {
    render(<UpdateNotification {...defaultProps} skipText="Not Now" downloadText="Get Update" />);
    
    expect(screen.getByText('Not Now')).toBeInTheDocument();
    expect(screen.getByText('Get Update')).toBeInTheDocument();
  });

  it('calls onSkip when skip button is clicked', () => {
    const onSkip = jest.fn();
    render(<UpdateNotification {...defaultProps} onSkip={onSkip} />);
    
    const skipButton = screen.getByText('Skip');
    fireEvent.click(skipButton);
    
    expect(onSkip).toHaveBeenCalledTimes(1);
  });

  it('calls onDownload when download button is clicked', () => {
    const onDownload = jest.fn();
    render(<UpdateNotification {...defaultProps} onDownload={onDownload} />);
    
    const downloadButton = screen.getByText('Download');
    fireEvent.click(downloadButton);
    
    expect(onDownload).toHaveBeenCalledTimes(1);
  });

  it('applies custom className when provided', () => {
    render(<UpdateNotification {...defaultProps} className="custom-class" />);
    
    const notification = screen.getByText('Updates Available').closest('.updateNotification');
    expect(notification).toHaveClass('custom-class');
  });

  it('renders with default values when no props are provided', () => {
    render(<UpdateNotification />);
    
    expect(screen.getByText('Updates Available')).toBeInTheDocument();
    expect(screen.getByText('A new version is available. Please upgrade for the best experience.')).toBeInTheDocument();
    expect(screen.getByText('Skip')).toBeInTheDocument();
    expect(screen.getByText('Download')).toBeInTheDocument();
  });

  it('handles long messages correctly', () => {
    const longMessage = "This is a very long message that should wrap properly and not break the layout of the component. It should handle text overflow gracefully.";
    render(<UpdateNotification {...defaultProps} message={longMessage} />);
    
    expect(screen.getByText(longMessage)).toBeInTheDocument();
  });

  it('renders buttons with correct variants', () => {
    render(<UpdateNotification {...defaultProps} />);
    
    const skipButton = screen.getByText('Skip');
    const downloadButton = screen.getByText('Download');
    
    expect(skipButton).toBeInTheDocument();
    expect(downloadButton).toBeInTheDocument();
  });
});
