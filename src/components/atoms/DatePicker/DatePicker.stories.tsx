import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatePicker } from "./DatePicker";
import type { DatePickerProps } from "./types";

const meta: Meta<typeof DatePicker> = {
  title: "Atoms/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A modern, accessible date picker component with an input field labeled 'Date picker' and placeholder 'Pick a date'. When clicked, it opens a calendar popup below the input with weekend highlighting in red, month navigation, and a clean design that matches the reference image exactly.",
      },
    },
  },
  argTypes: {
    label: {
      description: "Label for the date picker",
      control: { type: "text" },
    },
    required: {
      description: "Whether the field is required",
      control: { type: "boolean" },
    },
    placeholder: {
      description: "Placeholder text for the input",
      control: { type: "text" },
    },
    value: {
      description: "Current selected date",
      control: { type: "date" },
    },
    defaultValue: {
      description: "Default selected date",
      control: { type: "date" },
    },
    minDate: {
      description: "Minimum selectable date",
      control: { type: "date" },
    },
    maxDate: {
      description: "Maximum selectable date",
      control: { type: "date" },
    },
    disabled: {
      description: "Whether the date picker is disabled",
      control: { type: "boolean" },
    },
    open: {
      description: "Whether the calendar is open",
      control: { type: "boolean" },
    },
    highlightWeekends: {
      description: "Whether to show weekends in a different color",
      control: { type: "boolean" },
    },
    dateFormat: {
      description: "Custom format for displaying the date",
      control: { type: "text" },
    },
    showOnFocus: {
      description: "Whether to show the calendar on input focus",
      control: { type: "boolean" },
    },
    closeOnSelect: {
      description: "Whether to close calendar when date is selected",
      control: { type: "boolean" },
    },
    showToday: {
      description: "Whether to show today's date highlighted",
      control: { type: "boolean" },
    },
    className: {
      description: "Custom CSS class name",
      control: { type: "text" },
    },
    name: {
      description: "Input field name",
      control: { type: "text" },
    },
    error: {
      description: "Error state",
      control: { type: "boolean" },
    },
    errorMessage: {
      description: "Error message",
      control: { type: "text" },
    },
    onChange: {
      description: "Change handler",
      action: "changed",
    },
    onOpenChange: {
      description: "Calendar open/close handler",
      action: "open changed",
    },
    onInputChange: {
      description: "Input change handler",
      action: "input changed",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Reference Design DatePicker (Exact Match)
export const ReferenceDesign: Story = {
  args: {
    label: "Date picker",
    required: true,
    placeholder: "Pick a date",
    highlightWeekends: true,
    showToday: true,
    closeOnSelect: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This date picker exactly matches the reference design with the label 'Date picker' (with required asterisk), placeholder 'Pick a date', and a calendar that opens below the input with weekend highlighting in red.",
      },
    },
  },
};

// Basic DatePicker
export const Default: Story = {
  args: {
    label: "Date picker",
    placeholder: "Pick a date",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Basic date picker with default styling - clean input field, calendar popup, and smooth interactions.",
      },
    },
  },
};

// Required Field
export const Required: Story = {
  args: {
    label: "Date picker",
    required: true,
    placeholder: "Pick a date",
  },
};

// With Custom Label
export const CustomLabel: Story = {
  args: {
    label: "Select your birthday",
    placeholder: "Choose a date",
  },
};

// With Default Value
export const WithDefaultValue: Story = {
  args: {
    label: "Date picker",
    placeholder: "Pick a date",
    defaultValue: new Date("2025-08-15"),
  },
};

// With Min/Max Dates
export const WithDateRange: Story = {
  args: {
    label: "Date picker",
    placeholder: "Pick a date",
    minDate: new Date("2025-01-01"),
    maxDate: new Date("2025-12-31"),
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    label: "Date picker",
    placeholder: "Pick a date",
    disabled: true,
    defaultValue: new Date("2025-08-15"),
  },
};

// Error State
export const WithError: Story = {
  args: {
    label: "Date picker",
    placeholder: "Pick a date",
    error: true,
    errorMessage: "Please select a valid date",
  },
};

// Without Weekend Highlighting
export const NoWeekendHighlight: Story = {
  args: {
    label: "Date picker",
    placeholder: "Pick a date",
    highlightWeekends: false,
  },
};

// Without Today Highlight
export const NoTodayHighlight: Story = {
  args: {
    label: "Date picker",
    placeholder: "Pick a date",
    showToday: false,
  },
};

// Controlled DatePicker
export const Controlled: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <strong>
            Selected Date:{" "}
            {selectedDate ? selectedDate.toLocaleDateString() : "None"}
          </strong>
        </div>
        <DatePicker
          label="Date picker"
          placeholder="Pick a date"
          value={selectedDate}
          open={isOpen}
          onChange={setSelectedDate}
          onOpenChange={setIsOpen}
        />
        <div style={{ marginTop: "16px" }}>
          <button onClick={() => setSelectedDate(new Date())}>
            Set to Today
          </button>
          <button
            onClick={() => setSelectedDate(null)}
            style={{ marginLeft: "8px" }}
          >
            Clear
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ marginLeft: "8px" }}
          >
            {isOpen ? "Close" : "Open"} Calendar
          </button>
        </div>
      </div>
    );
  },
};

// Multiple DatePickers
export const Multiple: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        minWidth: "300px",
      }}
    >
      <DatePicker
        label="Start Date"
        placeholder="Pick start date"
        required={true}
      />
      <DatePicker
        label="End Date"
        placeholder="Pick end date"
        required={true}
      />
      <DatePicker
        label="Optional Date"
        placeholder="Pick optional date"
        required={false}
      />
    </div>
  ),
};

// Custom Date Format
export const CustomFormat: Story = {
  args: {
    label: "Date picker",
    placeholder: "Pick a date",
    dateFormat: "dd/MM/yyyy",
  },
};

// Without Focus Auto-Open
export const NoAutoOpen: Story = {
  args: {
    label: "Date picker",
    placeholder: "Pick a date",
    showOnFocus: false,
  },
};

// Without Auto-Close on Select
export const NoAutoClose: Story = {
  args: {
    label: "Date picker",
    placeholder: "Pick a date",
    closeOnSelect: false,
  },
};
