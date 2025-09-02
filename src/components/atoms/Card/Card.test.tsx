import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card", () => {
  const defaultProps = {
    title: "Test Card",
    description: "Test description",
    buttonText: "Test Button",
  };

  it("renders with basic content", () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("renders with image when imageSrc is provided", () => {
    render(
      <Card {...defaultProps} imageSrc="test-image.jpg" imageAlt="Test image" />
    );

    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });

  it("does not render image when showImage is false", () => {
    render(
      <Card
        {...defaultProps}
        imageSrc="test-image.jpg"
        imageAlt="Test image"
        showImage={false}
      />
    );

    expect(screen.queryByAltText("Test image")).not.toBeInTheDocument();
  });

  it("does not render image when showImage is false", () => {
    render(
      <Card
        {...defaultProps}
        imageSrc="test-image.jpg"
        imageAlt="Test image"
        showImage={false}
      />
    );

    expect(screen.queryByAltText("Test image")).not.toBeInTheDocument();
  });

  it("renders badge when badge prop is provided", () => {
    render(<Card {...defaultProps} badge="NEW" />);

    expect(screen.getByText("NEW")).toBeInTheDocument();
  });

  it("renders title and badge in header", () => {
    render(<Card {...defaultProps} badge="NEW" />);

    const header = screen.getByText("Test Card").closest("div");
    expect(header).toContainElement(screen.getByText("NEW"));
  });

  it("calls onButtonClick when button is clicked", () => {
    const handleButtonClick = jest.fn();
    render(<Card {...defaultProps} onButtonClick={handleButtonClick} />);

    fireEvent.click(screen.getByText("Test Button"));
    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });

  it("calls onClick when card is clicked and clickable is true", () => {
    const handleClick = jest.fn();
    render(<Card {...defaultProps} clickable={true} onClick={handleClick} />);

    const cardButtons = screen.getAllByRole("button");
    const cardElement = cardButtons.find(button => button.classList.contains("card"));
    expect(cardElement).toBeDefined();
    fireEvent.click(cardElement!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when card is disabled", () => {
    const handleClick = jest.fn();
    render(
      <Card
        {...defaultProps}
        clickable={true}
        onClick={handleClick}
        disabled={true}
      />
    );

    const cardButtons = screen.getAllByRole("button");
    const cardElement = cardButtons.find(button => button.classList.contains("card"));
    expect(cardElement).toBeDefined();
    fireEvent.click(cardElement!);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies disabled styles when disabled is true", () => {
    render(<Card {...defaultProps} disabled={true} />);

    const card = screen.getByText("Test Card").closest(".card");
    expect(card).toHaveClass("disabled");
  });

  it("applies clickable styles when clickable is true", () => {
    render(<Card {...defaultProps} clickable={true} />);

    const cardButtons = screen.getAllByRole("button");
    const cardElement = cardButtons.find(button => button.classList.contains("card"));
    expect(cardElement).toBeDefined();
    expect(cardElement).toHaveClass("clickable");
  });

  it("renders without button when buttonText is not provided", () => {
    const { ...propsWithoutButton } = defaultProps;
    render(<Card {...propsWithoutButton} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders without description when description is not provided", () => {
    const { ...propsWithoutDescription } = defaultProps;
    render(<Card {...propsWithoutDescription} />);

    expect(screen.queryByText("Test description")).not.toBeInTheDocument();
  });

  it("renders without title when title is not provided", () => {
    const { ...propsWithoutTitle } = defaultProps;
    render(<Card {...propsWithoutTitle} />);

    expect(screen.queryByText("Test Card")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Card {...defaultProps} className="custom-class" />);

    const card = screen.getByText("Test Card").closest(".card");
    expect(card).toHaveClass("custom-class");
  });

  it("passes image props to Image component", () => {
    render(
      <Card
        {...defaultProps}
        imageSrc="test-image.jpg"
        imageAlt="Test image"
        imageFit="contain"
        imageRadius={8}
      />
    );

    const image = screen.getByAltText("Test image");
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });

  it("does not render title when showTitle is false", () => {
    render(<Card {...defaultProps} showTitle={false} />);
    expect(screen.queryByText("Test Card")).not.toBeInTheDocument();
  });

  it("does not render badge when showBadge is false", () => {
    render(<Card {...defaultProps} badge="NEW" showBadge={false} />);
    expect(screen.queryByText("NEW")).not.toBeInTheDocument();
  });

  it("does not render description when showDescription is false", () => {
    render(<Card {...defaultProps} showDescription={false} />);
    expect(screen.queryByText("Test description")).not.toBeInTheDocument();
  });

  it("does not render button when showButton is false", () => {
    render(<Card {...defaultProps} showButton={false} />);
    expect(screen.queryByText("Test Button")).not.toBeInTheDocument();
  });
});
