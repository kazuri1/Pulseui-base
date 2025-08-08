import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { Avatar } from "./Avatar";
import { Person } from "../Icon/IconSet";

describe("Avatar", () => {
  it("renders initial type correctly", () => {
    render(<Avatar type="initial" initials="JD" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders icon type correctly", () => {
    render(<Avatar type="icon" icon={Person} />);
    expect(screen.getByTestId("PersonIcon")).toBeInTheDocument();
  });

  it("renders image type correctly", () => {
    render(
      <Avatar
        type="image"
        src="test-image.jpg"
        alt="Test Avatar"
        initials="JD"
      />
    );
    const image = screen.getByAltText("Test Avatar");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });

  it("applies correct size classes", () => {
    const { container } = render(<Avatar size="lg" />);
    expect(container.firstChild).toHaveClass("size-lg");
  });

  it("applies correct variant classes", () => {
    const { container } = render(<Avatar variant="success" />);
    expect(container.firstChild).toHaveClass("variant-success");
  });

  it("handles click events when interactive", () => {
    const handleClick = jest.fn();
    render(
      <Avatar type="initial" initials="JD" interactive onClick={handleClick} />
    );

    fireEvent.click(screen.getByText("JD"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not handle click events when not interactive", () => {
    const handleClick = jest.fn();
    render(
      <Avatar
        type="initial"
        initials="JD"
        interactive={false}
        onClick={handleClick}
      />
    );

    fireEvent.click(screen.getByText("JD"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("limits initials to 2 characters", () => {
    render(<Avatar type="initial" initials="John Doe" />);
    expect(screen.getByText("JO")).toBeInTheDocument();
  });

  it("converts initials to uppercase", () => {
    render(<Avatar type="initial" initials="jd" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("has correct accessibility attributes when interactive", () => {
    render(
      <Avatar type="initial" initials="JD" interactive onClick={() => {}} />
    );

    const avatar = screen.getByText("JD").parentElement;
    expect(avatar).toHaveAttribute("role", "button");
    expect(avatar).toHaveAttribute("tabIndex", "0");
  });

  it("does not have accessibility attributes when not interactive", () => {
    render(<Avatar type="initial" initials="JD" interactive={false} />);

    const avatar = screen.getByText("JD").parentElement;
    expect(avatar).not.toHaveAttribute("role");
    expect(avatar).not.toHaveAttribute("tabIndex");
  });
});
