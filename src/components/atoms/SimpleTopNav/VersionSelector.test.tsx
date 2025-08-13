import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { VersionSelector } from "./VersionSelector";

describe("VersionSelector", () => {
  const defaultProps = {
    version: "v8.2.4",
    versions: ["v8.2.4", "v8.2.3", "v8.2.2", "v8.1.0"],
    onVersionChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with default version", () => {
    render(<VersionSelector {...defaultProps} />);
    expect(screen.getByText("v8.2.4")).toBeInTheDocument();
  });

  it("opens dropdown when clicked", () => {
    render(<VersionSelector {...defaultProps} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    
    expect(screen.getByText("v8.2.3")).toBeInTheDocument();
    expect(screen.getByText("v8.2.2")).toBeInTheDocument();
    expect(screen.getByText("v8.1.0")).toBeInTheDocument();
  });

  it("calls onVersionChange when version is selected", () => {
    render(<VersionSelector {...defaultProps} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    
    const versionOption = screen.getByText("v8.2.3");
    fireEvent.click(versionOption);
    
    expect(defaultProps.onVersionChange).toHaveBeenCalledWith("v8.2.3");
  });

  it("closes dropdown after version selection", () => {
    render(<VersionSelector {...defaultProps} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    
    const versionOption = screen.getByText("v8.2.3");
    fireEvent.click(versionOption);
    
    expect(screen.queryByText("v8.2.3")).not.toBeInTheDocument();
  });

  it("handles keyboard navigation", () => {
    render(<VersionSelector {...defaultProps} />);
    const button = screen.getByRole("button");
    
    fireEvent.keyDown(button, { key: "Enter" });
    expect(screen.getByText("v8.2.3")).toBeInTheDocument();
    
    fireEvent.keyDown(button, { key: "Escape" });
    expect(screen.queryByText("v8.2.3")).not.toBeInTheDocument();
  });

  it("disables when disabled prop is true", () => {
    render(<VersionSelector {...defaultProps} disabled={true} />);
    const button = screen.getByRole("button");
    
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(screen.queryByText("v8.2.3")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <VersionSelector {...defaultProps} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
