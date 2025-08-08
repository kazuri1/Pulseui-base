import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button";

const meta: Meta<typeof Modal> = {
  title: "Atoms/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A modal component with title, description, content slots, and footer integration.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    show: {
      control: { type: "boolean" },
      description: "Whether to show the modal",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Modal size",
    },
    showTitle: {
      control: { type: "boolean" },
      description: "Whether to show the title",
    },
    showDescription: {
      control: { type: "boolean" },
      description: "Whether to show the description",
    },
    showClose: {
      control: { type: "boolean" },
      description: "Whether to show the close button",
    },
    showFooter: {
      control: { type: "boolean" },
      description: "Whether to show the footer",
    },
    footerVariant: {
      control: { type: "select" },
      options: ["button-only", "primary", "destructive"],
      description: "Footer variant",
    },
    closeOnBackdropClick: {
      control: { type: "boolean" },
      description: "Whether to close on backdrop click",
    },
    closeOnEscape: {
      control: { type: "boolean" },
      description: "Whether to close on escape key",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Stories section
export const BasicModal: Story = {
  args: {
    show: true,
    title: "Basic Modal",
    children: (
      <div>
        <p>This is the modal content. You can put any content here.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Basic modal with title, description, and content.",
      },
    },
  },
};

export const ModalWithFooter: Story = {
  args: {
    show: true,
    title: "Modal with Footer",
    showFooter: true,
    footerVariant: "primary",
    primaryText: "Save",
    secondaryText: "Cancel",
    children: (
      <div>
        <p>This modal has a footer with primary and secondary buttons.</p>
        <p>You can customize the button text and actions.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with footer showing primary and secondary buttons.",
      },
    },
  },
};

export const DestructiveModal: Story = {
  args: {
    show: true,
    title: "Delete Confirmation",
    showFooter: true,
    footerVariant: "destructive",
    primaryText: "Delete",
    secondaryText: "Cancel",
    children: (
      <div>
        <p>This action cannot be undone. Please confirm your decision.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with destructive footer variant for dangerous actions.",
      },
    },
  },
};

export const ModalSizes: Story = {
  render: () => {
    const [currentSize, setCurrentSize] = useState<
      "xs" | "sm" | "md" | "lg" | "xl"
    >("md");
    const [showModal, setShowModal] = useState(false);

    return (
      <div style={{ padding: "24px" }}>
        <h3>Select Modal Size:</h3>
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <Button
              key={size}
              variant={currentSize === size ? "filled" : "outline"}
              onClick={() => setCurrentSize(size)}
            >
              {size.toUpperCase()}
            </Button>
          ))}
        </div>

        <Button variant="filled" onClick={() => setShowModal(true)}>
          Open {currentSize.toUpperCase()} Modal
        </Button>

        <Modal
          show={showModal}
          size={currentSize}
          title={`${currentSize.toUpperCase()} Modal`}
          showFooter={true}
          onClose={() => setShowModal(false)}
          onPrimaryClick={() => setShowModal(false)}
          onSecondaryClick={() => setShowModal(false)}
        >
          <div>
            <p>This modal demonstrates the {currentSize} size variant.</p>
            <p>Modal sizes affect the maximum width of the modal.</p>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates all modal sizes: xs, sm, md, lg, xl.",
      },
    },
  },
};

export const ModalWithoutTitle: Story = {
  args: {
    show: true,
    showTitle: false,
    showFooter: true,
    children: (
      <div>
        <p>Sometimes you might want a modal without a title.</p>
        <p>
          This can be useful for simple confirmations or content-focused modals.
        </p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal without a title, useful for simple confirmations.",
      },
    },
  },
};

export const ModalWithoutClose: Story = {
  args: {
    show: true,
    title: "Modal Without Close Button",
    showClose: false,
    showFooter: true,
    children: (
      <div>
        <p>This modal requires user interaction to close.</p>
        <p>Use this when you want to force users to make a decision.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal without close button, forcing user interaction.",
      },
    },
  },
};

export const CustomContentModal: Story = {
  args: {
    show: true,
    title: "Custom Content Modal",
    showFooter: true,
    children: (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "4px" }}
          >
            Name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "4px" }}
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with custom content including form elements.",
      },
    },
  },
};
