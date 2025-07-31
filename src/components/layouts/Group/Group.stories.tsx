import type { Meta, StoryObj } from "@storybook/react";
import { Group } from "./Group";

const meta: Meta<typeof Group> = {
  title: "Components/layouts/Group",
  component: Group,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Group content",
    },
    align: {
      control: { type: "select" },
      options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
      description: "Sets the `align-items` CSS property",
    },
    gap: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Controls the spacing between elements",
    },
    justify: {
      control: { type: "select" },
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      description: "Sets the `justify-content` CSS property",
    },
    wrap: {
      control: "boolean",
      description: "Whether to wrap items to the next line",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    children: "Group content goes here",
    align: "center",
    gap: "md",
    justify: "flex-start",
    wrap: true,
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <div
        key="1"
        style={{
          padding: "10px 20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "10px 20px",
          backgroundColor: "#e0e0e0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "10px 20px",
          backgroundColor: "#d0d0d0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Item 3
      </div>,
    ],
  },
};

export const SpaceBetween: Story = {
  args: {
    justify: "space-between",
    children: [
      <div
        key="1"
        style={{
          padding: "10px 20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Left Item
      </div>,
      <div
        key="2"
        style={{
          padding: "10px 20px",
          backgroundColor: "#e0e0e0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Right Item
      </div>,
    ],
  },
};

export const Centered: Story = {
  args: {
    justify: "center",
    children: [
      <div
        key="1"
        style={{
          padding: "10px 20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Centered Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "10px 20px",
          backgroundColor: "#e0e0e0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Centered Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "10px 20px",
          backgroundColor: "#d0d0d0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Centered Item 3
      </div>,
    ],
  },
};

export const LargeGap: Story = {
  args: {
    gap: "xl",
    children: [
      <div
        key="1"
        style={{
          padding: "10px 20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Large Gap Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "10px 20px",
          backgroundColor: "#e0e0e0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Large Gap Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "10px 20px",
          backgroundColor: "#d0d0d0",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        Large Gap Item 3
      </div>,
    ],
  },
};

export const NoWrap: Story = {
  args: {
    wrap: false,
    children: [
      <div
        key="1"
        style={{
          padding: "10px 20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "6px",
          border: "1px solid #ddd",
          whiteSpace: "nowrap",
        }}
      >
        This is a very long item that won't wrap
      </div>,
      <div
        key="2"
        style={{
          padding: "10px 20px",
          backgroundColor: "#e0e0e0",
          borderRadius: "6px",
          border: "1px solid #ddd",
          whiteSpace: "nowrap",
        }}
      >
        Another long item
      </div>,
      <div
        key="3"
        style={{
          padding: "10px 20px",
          backgroundColor: "#d0d0d0",
          borderRadius: "6px",
          border: "1px solid #ddd",
          whiteSpace: "nowrap",
        }}
      >
        Third long item
      </div>,
    ],
  },
};

export const FormLayout: Story = {
  args: {
    justify: "space-between",
    align: "center",
    children: [
      <div
        key="label"
        style={{
          padding: "10px 0",
          fontWeight: "bold",
        }}
      >
        Email Address:
      </div>,
      <div
        key="input"
        style={{
          flex: 1,
          maxWidth: "300px",
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
      </div>,
      <div
        key="button"
        style={{
          padding: "10px 0",
        }}
      >
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>,
    ],
  },
};

export const ButtonGroup: Story = {
  args: {
    gap: "sm",
    children: [
      <button
        key="cancel"
        style={{
          padding: "8px 16px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Cancel
      </button>,
      <button
        key="save"
        style={{
          padding: "8px 16px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Save
      </button>,
      <button
        key="delete"
        style={{
          padding: "8px 16px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>,
    ],
  },
};
