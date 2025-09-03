import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";
import { BreadcrumbsProps } from "./types";

export default {
  title: "Components/atoms/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    separator: {
      control: "text",
    },
  },
} as Meta;

const Template: StoryFn<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumbs", href: "/components/breadcrumbs" },
  ],
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  ...Default.args,
  separator: ">",
};
