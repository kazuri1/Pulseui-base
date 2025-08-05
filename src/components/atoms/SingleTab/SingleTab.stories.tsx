import type { Meta, StoryObj } from "@storybook/react";
import { SingleTab } from "./SingleTab";
import {
  InfoOutlined,
  Settings,
  Home,
  Person,
  Search,
  NotificationsNone,
  MailOutline,
  HelpOutline,
  ErrorOutline,
  Warning,
  CheckCircle,
  FavoriteBorder,
  BookmarkBorder,
  FlagOutlined,
  LockOutline,
} from "../Icon/IconSet";

const meta: Meta<typeof SingleTab> = {
  title: "Atoms/SingleTab",
  component: SingleTab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "pill"],
    },
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    state: {
      control: { type: "select" },
      options: ["default", "selected", "hover", "disabled"],
    },
    leftIcon: {
      control: { type: "boolean" },
    },
    rightIcon: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Tab title",
    variant: "default",
    position: "top",
    state: "default",
    leftIcon: false,
    rightIcon: false,
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: "Tab title",
    variant: "default",
    position: "top",
    state: "default",
    leftIcon: true,
    rightIcon: false,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: "Tab title",
    variant: "default",
    position: "top",
    state: "default",
    leftIcon: true,
    rightIcon: true,
  },
};

export const SelectedDefault: Story = {
  args: {
    placeholder: "Tab title",
    variant: "default",
    position: "top",
    state: "selected",
    leftIcon: true,
    rightIcon: false,
  },
};

export const PillDefault: Story = {
  args: {
    placeholder: "Tab title",
    variant: "pill",
    position: "top",
    state: "default",
    leftIcon: true,
    rightIcon: false,
  },
};

export const PillSelected: Story = {
  args: {
    placeholder: "Tab title",
    variant: "pill",
    position: "top",
    state: "selected",
    leftIcon: true,
    rightIcon: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Tab title",
    variant: "default",
    position: "top",
    state: "disabled",
    leftIcon: true,
    rightIcon: false,
  },
};

export const LeftPosition: Story = {
  args: {
    placeholder: "Tab title",
    variant: "default",
    position: "left",
    state: "default",
    leftIcon: true,
    rightIcon: false,
  },
};

export const RightPosition: Story = {
  args: {
    placeholder: "Tab title",
    variant: "default",
    position: "right",
    state: "default",
    leftIcon: true,
    rightIcon: false,
  },
};

export const DefaultVariantPositions: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <SingleTab
        placeholder="Top"
        variant="default"
        position="top"
        state="selected"
        leftIcon={true}
      />
      <SingleTab
        placeholder="Bottom"
        variant="default"
        position="bottom"
        state="selected"
        leftIcon={true}
      />
    </div>
  ),
};

export const VerticalDefaultPositions: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <SingleTab
          placeholder="Left"
          variant="default"
          position="left"
          state="selected"
          leftIcon={true}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <SingleTab
          placeholder="Right"
          variant="default"
          position="right"
          state="selected"
          leftIcon={true}
        />
      </div>
    </div>
  ),
};

export const AllVariantsSelected: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <SingleTab
        placeholder="Tab title"
        variant="default"
        state="selected"
        leftIcon={true}
      />
      <SingleTab
        placeholder="Tab title"
        variant="pill"
        state="selected"
        leftIcon={true}
      />
    </div>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <SingleTab
        placeholder="Home"
        variant="default"
        state="selected"
        leftIcon={Home}
      />
      <SingleTab
        placeholder="Settings"
        variant="pill"
        state="default"
        leftIcon={Settings}
      />
      <SingleTab
        placeholder="Info"
        variant="pill"
        state="selected"
        leftIcon={InfoOutlined}
      />
    </div>
  ),
};

export const OutlineIcons: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <SingleTab
        placeholder="Person"
        variant="default"
        state="default"
        leftIcon={Person}
      />
      <SingleTab
        placeholder="Search"
        variant="default"
        state="default"
        leftIcon={Search}
      />
      <SingleTab
        placeholder="Notifications"
        variant="pill"
        state="default"
        leftIcon={NotificationsNone}
      />
      <SingleTab
        placeholder="Mail"
        variant="default"
        state="selected"
        leftIcon={MailOutline}
      />
      <SingleTab
        placeholder="Help"
        variant="default"
        state="selected"
        leftIcon={HelpOutline}
      />
      <SingleTab
        placeholder="Error"
        variant="pill"
        state="default"
        leftIcon={ErrorOutline}
      />
      <SingleTab
        placeholder="Warning"
        variant="default"
        state="default"
        leftIcon={Warning}
      />
      <SingleTab
        placeholder="Check"
        variant="default"
        state="selected"
        leftIcon={CheckCircle}
      />
      <SingleTab
        placeholder="Favorite"
        variant="pill"
        state="default"
        leftIcon={FavoriteBorder}
      />
      <SingleTab
        placeholder="Bookmark"
        variant="default"
        state="selected"
        leftIcon={BookmarkBorder}
      />
      <SingleTab
        placeholder="Flag"
        variant="default"
        state="default"
        leftIcon={FlagOutlined}
      />
      <SingleTab
        placeholder="Lock"
        variant="pill"
        state="selected"
        leftIcon={LockOutline}
      />
    </div>
  ),
};
