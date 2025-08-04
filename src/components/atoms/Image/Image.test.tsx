import { render, screen, fireEvent } from "@testing-library/react";
import { Image } from "./Image";

describe("Image", () => {
  it("renders with default props", () => {
    render(<Image src="/test-image.jpg" alt="Test image" />);
    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test-image.jpg");
  });

  it("applies custom width and height", () => {
    render(
      <Image src="/test-image.jpg" alt="Test image" width={300} height={200} />
    );
    const image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("width: 300px");
    expect(image).toHaveStyle("height: 200px");
  });

  it("applies string width and height", () => {
    render(
      <Image
        src="/test-image.jpg"
        alt="Test image"
        width="100%"
        height="auto"
      />
    );
    const image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("width: 100%");
    expect(image).toHaveStyle("height: auto");
  });

  it("applies object-fit styles", () => {
    const { rerender } = render(
      <Image src="/test-image.jpg" alt="Test image" fit="cover" />
    );
    let image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("object-fit: cover");

    rerender(<Image src="/test-image.jpg" alt="Test image" fit="contain" />);
    image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("object-fit: contain");

    rerender(<Image src="/test-image.jpg" alt="Test image" fit="fill" />);
    image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("object-fit: fill");

    rerender(<Image src="/test-image.jpg" alt="Test image" fit="none" />);
    image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("object-fit: none");

    rerender(<Image src="/test-image.jpg" alt="Test image" fit="scale-down" />);
    image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("object-fit: scale-down");
  });

  it("applies border radius", () => {
    const { rerender } = render(
      <Image src="/test-image.jpg" alt="Test image" radius={8} />
    );
    let image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("border-radius: 8px");

    rerender(<Image src="/test-image.jpg" alt="Test image" radius="50%" />);
    image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("border-radius: 50%");
  });

  it("sets loading attribute", () => {
    const { rerender } = render(
      <Image src="/test-image.jpg" alt="Test image" loading="lazy" />
    );
    let image = screen.getByAltText("Test image");
    expect(image).toHaveAttribute("loading", "lazy");

    rerender(<Image src="/test-image.jpg" alt="Test image" loading="eager" />);
    image = screen.getByAltText("Test image");
    expect(image).toHaveAttribute("loading", "eager");
  });

  it("calls onError when image fails to load", () => {
    const handleError = jest.fn();
    render(
      <Image src="/invalid-image.jpg" alt="Test image" onError={handleError} />
    );
    const image = screen.getByAltText("Test image");
    fireEvent.error(image);
    expect(handleError).toHaveBeenCalledTimes(1);
  });

  it("switches to fallback src when main src fails", () => {
    const handleError = jest.fn();
    render(
      <Image
        src="/invalid-image.jpg"
        fallbackSrc="/fallback-image.jpg"
        alt="Test image"
        onError={handleError}
      />
    );
    const image = screen.getByAltText("Test image");

    // First error should switch to fallback
    fireEvent.error(image);
    expect(image).toHaveAttribute("src", "/fallback-image.jpg");

    // Second error should not change src again
    fireEvent.error(image);
    expect(image).toHaveAttribute("src", "/fallback-image.jpg");
  });

  it("applies custom className", () => {
    render(
      <Image src="/test-image.jpg" alt="Test image" className="custom-class" />
    );
    const image = screen.getByAltText("Test image");
    expect(image).toHaveClass("custom-class");
  });

  it("applies custom style", () => {
    const customStyle = { backgroundColor: "red" };
    render(
      <Image src="/test-image.jpg" alt="Test image" style={customStyle} />
    );
    const image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("background-color: red");
  });

  it("uses default values", () => {
    render(<Image src="/test-image.jpg" alt="Test image" />);
    const image = screen.getByAltText("Test image");
    expect(image).toHaveStyle("object-fit: cover");
    expect(image).toHaveStyle("border-radius: 0px");
    expect(image).toHaveAttribute("loading", "eager");
  });

  it("handles empty alt text", () => {
    render(<Image src="/test-image.jpg" alt="" />);
    const image = screen.getByAltText("");
    expect(image).toBeInTheDocument();
  });

  it("handles missing alt text", () => {
    render(<Image src="/test-image.jpg" />);
    const image = screen.getByAltText("");
    expect(image).toBeInTheDocument();
  });
});
