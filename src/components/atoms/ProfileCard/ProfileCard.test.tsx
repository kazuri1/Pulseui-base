import React from "react";
import { render, screen } from "@testing-library/react";
import { ProfileCard } from "./ProfileCard";

const defaultProps = {
  name: "Vignesh Vishnumoorthy",
  email: "vignesh@example.com",
  bio: "Crafting beautiful and consistent design systems that empower teams to build amazing products ✨ 🎨",
  hashtag: "#DesignSystem",
  posts: 32,
  followers: 8396,
  following: 720,
};

describe("ProfileCard", () => {
  it("renders without crashing", () => {
    render(<ProfileCard {...defaultProps} />);

    expect(screen.getByText("Vignesh Vishnumoorthy")).toBeInTheDocument();
    expect(screen.getByText("vignesh@example.com")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Crafting beautiful and consistent design systems that empower teams to build amazing products ✨ 🎨"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("#DesignSystem")).toBeInTheDocument();
    expect(screen.getByText("32")).toBeInTheDocument();
    expect(screen.getByText("8.4k")).toBeInTheDocument();
    expect(screen.getByText("720")).toBeInTheDocument();
  });

  it("displays avatar when avatarUrl is provided", () => {
    render(
      <ProfileCard
        {...defaultProps}
        avatarUrl="https://example.com/avatar.jpg"
      />
    );

    const avatar = screen.getByAltText("Vignesh Vishnumoorthy's profile");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("displays custom avatar alt text when provided", () => {
    render(
      <ProfileCard
        {...defaultProps}
        avatarUrl="https://example.com/avatar.jpg"
        avatarAlt="Custom alt text"
      />
    );

    const avatar = screen.getByAltText("Custom alt text");
    expect(avatar).toBeInTheDocument();
  });

  it("formats large numbers correctly", () => {
    render(
      <ProfileCard
        {...defaultProps}
        posts={1500}
        followers={125000}
        following={890}
      />
    );

    expect(screen.getByText("1.5k")).toBeInTheDocument();
    expect(screen.getByText("125k")).toBeInTheDocument();
    expect(screen.getByText("890")).toBeInTheDocument();
  });

  it("displays all stat labels correctly", () => {
    render(<ProfileCard {...defaultProps} />);

    expect(screen.getByText("posts")).toBeInTheDocument();
    expect(screen.getByText("followers")).toBeInTheDocument();
    expect(screen.getByText("following")).toBeInTheDocument();
  });

  it("applies custom className when provided", () => {
    render(<ProfileCard {...defaultProps} className="custom-class" />);

    const profileCard = screen
      .getByText("Vignesh Vishnumoorthy")
      .closest(".profileCard");
    expect(profileCard).toHaveClass("custom-class");
  });

  it("renders without avatar when avatarUrl is not provided", () => {
    render(<ProfileCard {...defaultProps} />);

    // Should still render the component without crashing
    expect(screen.getByText("Vignesh Vishnumoorthy")).toBeInTheDocument();
    expect(screen.getByText("vignesh@example.com")).toBeInTheDocument();
  });

  it("handles zero values correctly", () => {
    render(
      <ProfileCard {...defaultProps} posts={0} followers={0} following={0} />
    );

    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("handles single digit numbers correctly", () => {
    render(
      <ProfileCard {...defaultProps} posts={5} followers={3} following={7} />
    );

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
  });

  it("handles numbers just below 1000 correctly", () => {
    render(
      <ProfileCard
        {...defaultProps}
        posts={999}
        followers={999}
        following={999}
      />
    );

    expect(screen.getByText("999")).toBeInTheDocument();
    expect(screen.getByText("999")).toBeInTheDocument();
    expect(screen.getByText("999")).toBeInTheDocument();
  });

  it("handles numbers exactly at 1000 correctly", () => {
    render(
      <ProfileCard
        {...defaultProps}
        posts={1000}
        followers={1000}
        following={1000}
      />
    );

    expect(screen.getByText("1k")).toBeInTheDocument();
    expect(screen.getByText("1k")).toBeInTheDocument();
    expect(screen.getByText("1k")).toBeInTheDocument();
  });
});
