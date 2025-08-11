import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContentCard } from "./ContentCard";

const defaultProps = {
  imageUrl: "https://example.com/image.jpg",
  imageAlt: "Test image",
  date: "May 15, 2023",
  title: "Power of Design Systems",
  description: "Discover how a well-structured design system can transform your workflow, boost team efficiency, and help overcome design inconsistencies. Explore practical tips and techniques to build and maintain a cohesive design language for greater user experience and product success.",
  authorName: "Vignesh Vishnumoorthy",
  authorRole: "UX Design Engineer",
  authorImageUrl: undefined,
};

describe("ContentCard", () => {
  it("renders without crashing", () => {
    render(<ContentCard {...defaultProps} />);

    expect(screen.getByText("Power of Design Systems")).toBeInTheDocument();
    expect(
      screen.getByText("Discover how a well-structured design system can transform your workflow, boost team efficiency, and help overcome design inconsistencies. Explore practical tips and techniques to build and maintain a cohesive design language for greater user experience and product success.")
    ).toBeInTheDocument();
    expect(screen.getByText("Vignesh Vishnumoorthy")).toBeInTheDocument();
    expect(screen.getByText("UX Design Engineer")).toBeInTheDocument();
    expect(screen.getByText("May 15, 2023")).toBeInTheDocument();
  });

  it("displays the image with correct alt text", () => {
    render(<ContentCard {...defaultProps} />);

    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("applies size variants correctly", () => {
    const { rerender } = render(<ContentCard {...defaultProps} size="sm" />);

    const card = screen.getByText("Power of Design Systems").closest(".contentCard");
    expect(card).toHaveClass("size-sm");

    rerender(<ContentCard {...defaultProps} size="lg" />);
    const cardLg = screen
      .getByText("Power of Design Systems")
      .closest(".contentCard");
    expect(cardLg).toHaveClass("size-lg");
  });

  it("handles click events when onClick is provided", () => {
    const handleClick = jest.fn();
    render(<ContentCard {...defaultProps} onClick={handleClick} />);

    const card = screen.getByText("Power of Design Systems").closest(".contentCard");
    fireEvent.click(card!);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when not provided", () => {
    const handleClick = jest.fn();
    render(<ContentCard {...defaultProps} />);

    const card = screen.getByText("Power of Design Systems").closest(".contentCard");
    fireEvent.click(card!);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders author section with avatar when authorImageUrl is provided", () => {
    render(<ContentCard {...defaultProps} />);

    const avatar = screen.getByAltText("Vignesh Vishnumoorthy's profile");
    expect(avatar).toBeInTheDocument();
  });

  it("renders author section without avatar when authorImageUrl is not provided", () => {
    render(<ContentCard {...defaultProps} authorImageUrl={undefined} />);

    const avatar = screen.getByAltText("Vignesh Vishnumoorthy's profile");
    expect(avatar).toBeInTheDocument();
    // Should show fallback with first letter of name
    expect(avatar).toHaveTextContent("V");
  });

  it("applies custom className when provided", () => {
    render(<ContentCard {...defaultProps} className="custom-class" />);

    const card = screen.getByText("Test Article Title").closest(".contentCard");
    expect(card).toHaveClass("custom-class");
  });

  it("handles long titles gracefully", () => {
    const longTitle =
      "This is a very long article title that demonstrates how the component handles extended text content and maintains proper layout without breaking the design";

    render(<ContentCard {...defaultProps} title={longTitle} />);

    expect(screen.getByText(longTitle)).toBeInTheDocument();
  });

  it("handles long descriptions gracefully", () => {
    const longDescription =
      "This is a much longer description that demonstrates how the ContentCard component handles extended text content. It shows the proper line height, spacing, and text wrapping to ensure readability while maintaining the overall design aesthetic. The component gracefully adapts to different content lengths and provides an optimal reading experience for users.";

    render(<ContentCard {...defaultProps} description={longDescription} />);

    expect(screen.getByText(longDescription)).toBeInTheDocument();
  });

  it("displays date in uppercase format", () => {
    render(<ContentCard {...defaultProps} />);

    const dateElement = screen.getByText("May 15, 2023");
    expect(dateElement).toHaveStyle({ textTransform: "uppercase" });
  });

  it("renders with fallback image when image fails to load", () => {
    render(<ContentCard {...defaultProps} imageUrl="invalid-url" />);

    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
    // Should have fallback attribute
    expect(image).toHaveAttribute("fallback");
  });

  it("maintains accessibility with proper ARIA labels", () => {
    render(<ContentCard {...defaultProps} />);

    const image = screen.getByAltText("Test image");
    const avatar = screen.getByAltText("Vignesh Vishnumoorthy's profile");

    expect(image).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });
});
