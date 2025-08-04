import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Atoms/Pagination/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    showFirstLast: {
      control: { type: "boolean" },
    },
    showPrevNext: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    siblingCount: {
      control: { type: "number", min: 0, max: 5 },
    },
    boundaryCount: {
      control: { type: "number", min: 0, max: 5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    size: "md",
    showFirstLast: true,
    showPrevNext: true,
    disabled: false,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Extra Small (xs)</h4>
        <Pagination currentPage={3} totalPages={10} size="xs" />
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Small (sm)</h4>
        <Pagination currentPage={3} totalPages={10} size="sm" />
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Medium (md)</h4>
        <Pagination currentPage={3} totalPages={10} size="md" />
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Large (lg)</h4>
        <Pagination currentPage={3} totalPages={10} size="lg" />
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Extra Large (xl)</h4>
        <Pagination currentPage={3} totalPages={10} size="xl" />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <p>Current Page: {currentPage}</p>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={20}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const WithEllipsis: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 1,
    boundaryCount: 1,
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 50,
    totalPages: 100,
    siblingCount: 2,
    boundaryCount: 2,
  },
};

export const WithoutFirstLast: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false,
  },
};

export const WithoutPrevNext: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showPrevNext: false,
  },
};

export const Minimal: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false,
    showPrevNext: false,
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    disabled: true,
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};

export const LargeNumbers: Story = {
  args: {
    currentPage: 100,
    totalPages: 1000,
    siblingCount: 1,
    boundaryCount: 1,
  },
};

export const CustomSiblingCount: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Sibling Count: 0</h4>
        <Pagination currentPage={10} totalPages={20} siblingCount={0} />
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Sibling Count: 1</h4>
        <Pagination currentPage={10} totalPages={20} siblingCount={1} />
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Sibling Count: 2</h4>
        <Pagination currentPage={10} totalPages={20} siblingCount={2} />
      </div>
    </div>
  ),
};

export const CustomBoundaryCount: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Boundary Count: 0</h4>
        <Pagination currentPage={10} totalPages={20} boundaryCount={0} />
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Boundary Count: 1</h4>
        <Pagination currentPage={10} totalPages={20} boundaryCount={1} />
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Boundary Count: 2</h4>
        <Pagination currentPage={10} totalPages={20} boundaryCount={2} />
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    style: {
      backgroundColor: "var(--color-purple-0)",
      padding: "var(--spacing-lg)",
      borderRadius: "var(--radius-lg)",
    },
  },
}; 