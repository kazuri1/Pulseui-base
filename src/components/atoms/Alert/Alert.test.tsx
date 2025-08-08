import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders with default props", () => {
    render(<Alert>Test message</Alert>);

    expect(screen.getByText("Test message")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders with title", () => {
    render(<Alert title="Alert title">Test message</Alert>);

    expect(screen.getByText("Alert title")).toBeInTheDocument();
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("renders different variants", () => {
    const { rerender } = render(
      <Alert variant="info" title="Info Alert">
        Info message
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveClass("variant-info");

    rerender(
      <Alert variant="success" title="Success Alert">
        Success message
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveClass("variant-success");

    rerender(
      <Alert variant="warning" title="Warning Alert">
        Warning message
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveClass("variant-warning");

    rerender(
      <Alert variant="error" title="Error Alert">
        Error message
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveClass("variant-error");
  });

  it("renders different styles", () => {
    const { rerender } = render(
      <Alert variant="info" styleVariant="default" title="Default Alert">
        Default style alert
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveClass("style-default");

    rerender(
      <Alert variant="info" styleVariant="filled" title="Filled Alert">
        Filled style alert
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveClass("style-filled");

    rerender(
      <Alert variant="info" styleVariant="light" title="Light Alert">
        Light style alert
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveClass("style-light");

    rerender(
      <Alert variant="info" styleVariant="outline" title="Outline Alert">
        Outline style alert
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveClass("style-outline");

    rerender(
      <Alert variant="info" styleVariant="transparent" title="Transparent Alert">
        Transparent style alert
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveClass("style-transparent");

    rerender(
      <Alert variant="info" styleVariant="white" title="White Alert">
        White style alert
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveClass("style-white");
  });

  it("renders different sizes", () => {
    const { rerender } = render(<Alert size="xs">Extra small alert</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("size-xs");

    rerender(<Alert size="sm">Small alert</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("size-sm");

    rerender(<Alert size="md">Medium alert</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("size-md");

    rerender(<Alert size="lg">Large alert</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("size-lg");

    rerender(<Alert size="xl">Extra large alert</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("size-xl");
  });

  it("shows close button when closeable is true", () => {
    render(<Alert closeable>Test message</Alert>);

    expect(
      screen.getByRole("button", { name: "Close alert" })
    ).toBeInTheDocument();
  });

  it("does not show close button when closeable is false", () => {
    render(<Alert closeable={false}>Test message</Alert>);

    expect(
      screen.queryByRole("button", { name: "Close alert" })
    ).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = jest.fn();
    render(
      <Alert closeable onClose={handleClose}>
        Test message
      </Alert>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close alert" }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when disabled", () => {
    const handleClose = jest.fn();
    render(
      <Alert closeable onClose={handleClose} disabled>
        Test message
      </Alert>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close alert" }));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it("does not render when visible is false", () => {
    render(<Alert visible={false}>Test message</Alert>);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("applies disabled styles when disabled", () => {
    render(<Alert disabled>Test message</Alert>);

    expect(screen.getByRole("alert")).toHaveClass("disabled");
  });

  it("applies custom className", () => {
    render(<Alert className="custom-class">Test message</Alert>);

    expect(screen.getByRole("alert")).toHaveClass("custom-class");
  });

  it("applies custom id", () => {
    render(<Alert id="custom-id">Test message</Alert>);

    expect(screen.getByRole("alert")).toHaveAttribute("id", "custom-id");
  });

  it("renders with custom style", () => {
    render(<Alert style={{ backgroundColor: "red" }}>Test message</Alert>);

    expect(screen.getByRole("alert")).toHaveStyle({ backgroundColor: "red" });
  });

  it("renders with sx props", () => {
    render(<Alert sx={{ fontSize: "16px" }}>Test message</Alert>);

    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
    // Check that sx styles are applied via style attribute  
    expect(alertElement).toHaveStyle({ fontSize: "16px" });
  });
});
