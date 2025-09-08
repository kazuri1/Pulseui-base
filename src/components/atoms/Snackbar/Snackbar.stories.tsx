import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar } from "./Snackbar";
import { Button } from "../Button";

const meta: Meta<typeof Snackbar> = {
  title: "Atoms/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Transient message bar with variants, positions, and auto-hide.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SnackbarStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Saved successfully"
        variant="success"
        position="bottom-center"
        autoHideMs={2500}
      />
    </div>
  );
};

export const Playground: Story = {
  render: () => <SnackbarStory />,
};
