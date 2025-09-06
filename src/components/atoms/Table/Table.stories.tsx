import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

type Dessert = {
  dessert: string;
  calories: number | string;
  fat: number | string;
  carbs: number | string;
  protein: number | string;
};

const columns = [
  { key: "dessert", header: "Dessert (100g serving)" },
  { key: "calories", header: "Calories", align: "right" as const },
  { key: "fat", header: "Fat (g)", align: "right" as const },
  { key: "carbs", header: "Carbs (g)", align: "right" as const },
  { key: "protein", header: "Protein (g)", align: "right" as const },
];

const data: Dessert[] = [
  { dessert: "Frozen yoghurt", calories: 159, fat: 6, carbs: 24, protein: 4 },
  {
    dessert: "Ice cream sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  { dessert: "Eclair", calories: 262, fat: 16, carbs: 24, protein: 6 },
  { dessert: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { dessert: "Gingerbread", calories: 356, fat: 16, carbs: 49, protein: 3.9 },
];

const meta: Meta<typeof Table<Dessert>> = {
  title: "Atoms/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible data table built with PulseUI tokens. Supports basic, striped, bordered, and compact variants.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["basic", "striped", "bordered"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    compact: { control: "boolean" },
    stickyHeader: { control: "boolean" },
    cellAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    columns,
    data,
    caption: "Nutritional values per 100g serving",
    variant: "basic",
    size: "md",
  },
};

export const Striped: Story = {
  args: {
    columns,
    data,
    caption: "Striped rows",
    variant: "striped",
  },
};

export const Bordered: Story = {
  args: {
    columns,
    data,
    caption: "Bordered table",
    variant: "bordered",
  },
};

export const Compact: Story = {
  args: {
    columns,
    data,
    caption: "Compact density",
    compact: true,
    size: "sm",
  },
};

export const StickyHeader: Story = {
  args: {
    columns,
    data: [...data, ...data, ...data],
    caption: "Sticky header with overflow",
    stickyHeader: true,
    variant: "striped",
  },
  render: (args) => (
    <div style={{ maxHeight: 240 }}>
      <Table {...args} />
    </div>
  ),
};
