import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, within, expect } from "@storybook/test";
import { Tabs, TabsList, TabsTab, TabsPanel } from "./index";

const meta: Meta<typeof Tabs> = {
  title: "Atoms/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    placement: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    borderPosition: {
      control: { type: "select" },
      options: ["top", "bottom"],
    },
    activateTabWithKeyboard: {
      control: { type: "boolean" },
    },
    allowTabDeactivation: {
      control: { type: "boolean" },
    },
    loop: {
      control: { type: "boolean" },
    },
    keepMounted: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab value="tab1" placeholder="First Tab" />
        <TabsTab value="tab2" placeholder="Second Tab" />
        <TabsTab value="tab3" placeholder="Third Tab" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>First Tab Content</h3>
        <p>
          This is the content of the first tab. You can put any content here.
        </p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Second Tab Content</h3>
        <p>
          This is the content of the second tab. You can put any content here.
        </p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Third Tab Content</h3>
        <p>
          This is the content of the third tab. You can put any content here.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const Vertical: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "vertical",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab value="tab1" placeholder="First Tab" />
        <TabsTab value="tab2" placeholder="Second Tab" />
        <TabsTab value="tab3" placeholder="Third Tab" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>First Tab Content</h3>
        <p>
          This is the content of the first tab. You can put any content here.
        </p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Second Tab Content</h3>
        <p>
          This is the content of the second tab. You can put any content here.
        </p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Third Tab Content</h3>
        <p>
          This is the content of the third tab. You can put any content here.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const VerticalRight: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "vertical",
    placement: "right",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab value="tab1" placeholder="First Tab" />
        <TabsTab value="tab2" placeholder="Second Tab" />
        <TabsTab value="tab3" placeholder="Third Tab" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>First Tab Content</h3>
        <p>
          This is the content of the first tab. You can put any content here.
        </p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Second Tab Content</h3>
        <p>
          This is the content of the second tab. You can put any content here.
        </p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Third Tab Content</h3>
        <p>
          This is the content of the third tab. You can put any content here.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const HorizontalLeft: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab value="tab1" placeholder="First Tab" />
        <TabsTab value="tab2" placeholder="Second Tab" />
        <TabsTab value="tab3" placeholder="Third Tab" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>First Tab Content</h3>
        <p>
          This is the content of the first tab. Tabs are positioned at the top
          (left placement).
        </p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Second Tab Content</h3>
        <p>
          This is the content of the second tab. Tabs are positioned at the top
          (left placement).
        </p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Third Tab Content</h3>
        <p>
          This is the content of the third tab. Tabs are positioned at the top
          (left placement).
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const HorizontalRight: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "right",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab value="tab1" placeholder="First Tab" />
        <TabsTab value="tab2" placeholder="Second Tab" />
        <TabsTab value="tab3" placeholder="Third Tab" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>First Tab Content</h3>
        <p>
          This is the content of the first tab. Tabs are positioned at the
          bottom (right placement).
        </p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Second Tab Content</h3>
        <p>
          This is the content of the second tab. Tabs are positioned at the
          bottom (right placement).
        </p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Third Tab Content</h3>
        <p>
          This is the content of the third tab. Tabs are positioned at the
          bottom (right placement).
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const BorderTop: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "top",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab value="tab1" placeholder="First Tab" />
        <TabsTab value="tab2" placeholder="Second Tab" />
        <TabsTab value="tab3" placeholder="Third Tab" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>First Tab Content</h3>
        <p>
          This is the content of the first tab. Border is positioned at the top.
        </p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Second Tab Content</h3>
        <p>
          This is the content of the second tab. Border is positioned at the
          top.
        </p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Third Tab Content</h3>
        <p>
          This is the content of the third tab. Border is positioned at the top.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const BorderBottom: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab value="tab1" placeholder="First Tab" />
        <TabsTab value="tab2" placeholder="Second Tab" />
        <TabsTab value="tab3" placeholder="Third Tab" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>First Tab Content</h3>
        <p>
          This is the content of the first tab. Border is positioned at the
          bottom.
        </p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Second Tab Content</h3>
        <p>
          This is the content of the second tab. Border is positioned at the
          bottom.
        </p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Third Tab Content</h3>
        <p>
          This is the content of the third tab. Border is positioned at the
          bottom.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab value="tab1" placeholder="Home" leftIcon={true} />
        <TabsTab value="tab2" placeholder="Settings" leftIcon={true} />
        <TabsTab value="tab3" placeholder="Profile" leftIcon={true} />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>Home</h3>
        <p>Welcome to the home page.</p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Settings</h3>
        <p>Configure your preferences here.</p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Profile</h3>
        <p>View and edit your profile information.</p>
      </TabsPanel>
    </Tabs>
  ),
};

export const PillVariant: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab value="tab1" placeholder="Tab 1" variant="pill" />
        <TabsTab value="tab2" placeholder="Tab 2" variant="pill" />
        <TabsTab value="tab3" placeholder="Tab 3" variant="pill" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>Pill Tab 1</h3>
        <p>This tab uses the pill variant.</p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Pill Tab 2</h3>
        <p>This tab uses the pill variant.</p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Pill Tab 3</h3>
        <p>This tab uses the pill variant.</p>
      </TabsPanel>
    </Tabs>
  ),
};

export const GrowTabs: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList grow>
        <TabsTab value="tab1" placeholder="First" />
        <TabsTab value="tab2" placeholder="Second" />
        <TabsTab value="tab3" placeholder="Third" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>First Tab</h3>
        <p>This tab list uses the grow prop to distribute space evenly.</p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Second Tab</h3>
        <p>This tab list uses the grow prop to distribute space evenly.</p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Third Tab</h3>
        <p>This tab list uses the grow prop to distribute space evenly.</p>
      </TabsPanel>
    </Tabs>
  ),
};

export const CenteredTabs: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList justify="center">
        <TabsTab value="tab1" placeholder="First" />
        <TabsTab value="tab2" placeholder="Second" />
        <TabsTab value="tab3" placeholder="Third" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>Centered Tab 1</h3>
        <p>This tab list is centered.</p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Centered Tab 2</h3>
        <p>This tab list is centered.</p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Centered Tab 3</h3>
        <p>This tab list is centered.</p>
      </TabsPanel>
    </Tabs>
  ),
};

export const AllowDeactivation: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
    allowTabDeactivation: true,
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab value="tab1" placeholder="First Tab" />
        <TabsTab value="tab2" placeholder="Second Tab" />
        <TabsTab value="tab3" placeholder="Third Tab" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>First Tab Content</h3>
        <p>Click the active tab to deactivate it.</p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Second Tab Content</h3>
        <p>Click the active tab to deactivate it.</p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Third Tab Content</h3>
        <p>Click the active tab to deactivate it.</p>
      </TabsPanel>
    </Tabs>
  ),
};

export const Controlled: Story = {
  args: {
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => {
    const TabsExample = () => {
      const [value, setValue] = React.useState<string | null>("tab1");

      return (
        <Tabs {...args} value={value} onChange={setValue}>
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
          <TabsTab value="tab2" placeholder="Second Tab" />
          <TabsTab value="tab3" placeholder="Third Tab" />
        </TabsList>
        <TabsPanel value="tab1">
          <h3>Controlled Tab 1</h3>
          <p>Current value: {value}</p>
        </TabsPanel>
        <TabsPanel value="tab2">
          <h3>Controlled Tab 2</h3>
          <p>Current value: {value}</p>
        </TabsPanel>
        <TabsPanel value="tab3">
          <h3>Controlled Tab 3</h3>
          <p>Current value: {value}</p>
        </TabsPanel>
      </Tabs>
    );
    };
    return <TabsExample />;
  },
};

export const AllVariants: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
      <div>
        <h3>Default Variant</h3>
        <Tabs {...args}>
          <TabsList>
            <TabsTab value="tab1" placeholder="Tab 1" />
            <TabsTab value="tab2" placeholder="Tab 2" />
          </TabsList>
          <TabsPanel value="tab1">Content 1</TabsPanel>
          <TabsPanel value="tab2">Content 2</TabsPanel>
        </Tabs>
      </div>

      <div>
        <h3>Pill Variant</h3>
        <Tabs {...args}>
          <TabsList>
            <TabsTab value="tab1" placeholder="Tab 1" variant="pill" />
            <TabsTab value="tab2" placeholder="Tab 2" variant="pill" />
          </TabsList>
          <TabsPanel value="tab1">Content 1</TabsPanel>
          <TabsPanel value="tab2">Content 2</TabsPanel>
        </Tabs>
      </div>
    </div>
  ),
};

export const AllOrientations: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "40px", flexDirection: "column" }}>
      <div>
        <h3>Horizontal</h3>
        <Tabs {...args}>
          <TabsList>
            <TabsTab value="tab1" placeholder="Tab 1" />
            <TabsTab value="tab2" placeholder="Tab 2" />
          </TabsList>
          <TabsPanel value="tab1">Content 1</TabsPanel>
          <TabsPanel value="tab2">Content 2</TabsPanel>
        </Tabs>
      </div>

      <div>
        <h3>Vertical Left</h3>
        <Tabs {...args} orientation="vertical">
          <TabsList>
            <TabsTab value="tab1" placeholder="Tab 1" />
            <TabsTab value="tab2" placeholder="Tab 2" />
          </TabsList>
          <TabsPanel value="tab1">Content 1</TabsPanel>
          <TabsPanel value="tab2">Content 2</TabsPanel>
        </Tabs>
      </div>

      <div>
        <h3>Vertical Right</h3>
        <Tabs {...args} orientation="vertical" placement="right">
          <TabsList>
            <TabsTab value="tab1" placeholder="Tab 1" />
            <TabsTab value="tab2" placeholder="Tab 2" />
          </TabsList>
          <TabsPanel value="tab1">Content 1</TabsPanel>
          <TabsPanel value="tab2">Content 2</TabsPanel>
        </Tabs>
      </div>
    </div>
  ),
};

export const AllSingleTabProps: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    placement: "left",
    borderPosition: "bottom",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTab
          value="tab1"
          variant="default"
          position="top"
          leftIcon="home"
          rightIcon="settings"
          placeholder="Home"
        />
        <TabsTab
          value="tab2"
          variant="pill"
          position="bottom"
          leftIcon="person"
          placeholder="Profile"
        />
        <TabsTab
          value="tab3"
          variant="default"
          position="left"
          rightIcon="notifications"
          placeholder="Notifications"
        />
        <TabsTab
          value="tab4"
          variant="pill"
          position="right"
          leftIcon="mail"
          rightIcon="flag"
          placeholder="Messages"
        />
        <TabsTab
          value="tab5"
          variant="default"
          position="top"
          placeholder="Disabled Tab"
          disabled={true}
        />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>Home</h3>
        <p>
          This tab demonstrates all SingleTab props: variant, position,
          leftIcon, rightIcon.
        </p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Profile</h3>
        <p>This tab shows pill variant with bottom position and left icon.</p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Notifications</h3>
        <p>This tab shows default variant with left position and right icon.</p>
      </TabsPanel>
      <TabsPanel value="tab4">
        <h3>Messages</h3>
        <p>This tab shows pill variant with right position and both icons.</p>
      </TabsPanel>
      <TabsPanel value="tab5">
        <h3>Disabled Tab</h3>
        <p>This tab is disabled and cannot be selected.</p>
      </TabsPanel>
    </Tabs>
  ),
};

