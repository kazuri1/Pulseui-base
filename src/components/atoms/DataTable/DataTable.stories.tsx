import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  fullName: string;
};

const rows: Person[] = [
  { id: 1, firstName: "Jon", lastName: "Snow", age: 35, fullName: "Jon Snow" },
  {
    id: 2,
    firstName: "Cersei",
    lastName: "Lannister",
    age: 42,
    fullName: "Cersei Lannister",
  },
  {
    id: 3,
    firstName: "Jaime",
    lastName: "Lannister",
    age: 45,
    fullName: "Jaime Lannister",
  },
  {
    id: 4,
    firstName: "Arya",
    lastName: "Stark",
    age: 16,
    fullName: "Arya Stark",
  },
  {
    id: 5,
    firstName: "Daenerys",
    lastName: "Targaryen",
    age: 25,
    fullName: "Daenerys Targaryen",
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Smith",
    age: 28,
    fullName: "John Smith",
  },
  {
    id: 7,
    firstName: "Sansa",
    lastName: "Stark",
    age: 18,
    fullName: "Sansa Stark",
  },
  {
    id: 8,
    firstName: "Tyrion",
    lastName: "Lannister",
    age: 39,
    fullName: "Tyrion Lannister",
  },
  {
    id: 9,
    firstName: "Bran",
    lastName: "Stark",
    age: 14,
    fullName: "Bran Stark",
  },
];

const meta: Meta<typeof DataTable<Person>> = {
  title: "Atoms/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "DataTable built on top of Table with selection and pagination.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DataTable<Person>
      caption="People"
      columns={[
        { key: "id", header: "ID", width: 60, align: "center" },
        { key: "firstName", header: "First name" },
        { key: "lastName", header: "Last name" },
        { key: "age", header: "Age", align: "right" },
        { key: "fullName", header: "Full name" },
      ]}
      data={rows}
      getRowId={(row) => row.id}
    />
  ),
};
