import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionList,
} from "./Accordion";
import { Text } from "../Text";

const meta: Meta<typeof Accordion> = {
  title: "Atoms/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible accordion component built with PulseUI design system. Supports both compound component pattern and convenience components for common use cases.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size variant of the accordion",
    },
    allowMultiple: {
      control: { type: "boolean" },
      description: "Allow multiple items to be expanded simultaneously",
    },
    defaultExpanded: {
      control: { type: "object" },
      description: "Array of item IDs that should be expanded by default",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for convenience component
const sampleItems = [
  {
    id: "faq-1",
    title: "How do I place an order?",
    content: (
      <Text variant="sm">
        To place an order, simply browse our products, add items to your cart, and proceed to checkout. 
        You'll need to provide your shipping and payment information to complete your purchase.
      </Text>
    ),
  },
  {
    id: "faq-2",
    title: "What payment methods do you accept?",
    content: (
      <Text variant="sm">
        We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. 
        All payments are processed securely through our payment partners.
      </Text>
    ),
  },
  {
    id: "faq-3",
    title: "How long does shipping take?",
    content: (
      <Text variant="sm">
        Standard shipping typically takes 3-5 business days within the continental US. 
        Express shipping (1-2 business days) and overnight shipping are also available for an additional fee.
      </Text>
    ),
  },
  {
    id: "faq-4",
    title: "What is your return policy?",
    content: (
      <Text variant="sm">
        We offer a 30-day return policy for most items. Products must be in their original condition with all packaging intact. 
        Please contact our customer service team to initiate a return.
      </Text>
    ),
  },
];

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem id="item-1">
        <AccordionHeader itemId="item-1">
          How do I place an order?
        </AccordionHeader>
        <AccordionContent itemId="item-1">
          <Text variant="sm">
            To place an order, simply browse our products, add items to your cart, and proceed to checkout. 
            You'll need to provide your shipping and payment information to complete your purchase.
          </Text>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem id="item-2">
        <AccordionHeader itemId="item-2">
          What payment methods do you accept?
        </AccordionHeader>
        <AccordionContent itemId="item-2">
          <Text variant="sm">
            We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. 
            All payments are processed securely through our payment partners.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithConvenienceComponent: Story = {
  render: () => (
    <Accordion>
      <AccordionList items={sampleItems} />
    </Accordion>
  ),
};

export const MultipleExpanded: Story = {
  render: () => (
    <Accordion allowMultiple={true} defaultExpanded={["faq-1", "faq-3"]}>
      <AccordionList items={sampleItems} />
    </Accordion>
  ),
};

export const Small: Story = {
  render: () => (
    <Accordion size="sm">
      <AccordionList items={sampleItems} />
    </Accordion>
  ),
};

export const Large: Story = {
  render: () => (
    <Accordion size="lg">
      <AccordionList items={sampleItems} />
    </Accordion>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Accordion>
      <AccordionItem id="enabled" disabled={false}>
        <AccordionHeader itemId="enabled">
          Enabled Item
        </AccordionHeader>
        <AccordionContent itemId="enabled">
          <Text variant="sm">This item is enabled and can be clicked.</Text>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem id="disabled" disabled={true}>
        <AccordionHeader itemId="disabled">
          Disabled Item
        </AccordionHeader>
        <AccordionContent itemId="disabled">
          <Text variant="sm">This content cannot be accessed.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem id="custom-1">
        <AccordionHeader itemId="custom-1">
          Product Features
        </AccordionHeader>
        <AccordionContent itemId="custom-1">
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Text variant="sm" style={{ fontWeight: "bold" }}>Key Features:</Text>
            <ul style={{ margin: 0, paddingLeft: "16px" }}>
              <li><Text variant="sm">Responsive design</Text></li>
              <li><Text variant="sm">Accessibility compliant</Text></li>
              <li><Text variant="sm">Customizable themes</Text></li>
              <li><Text variant="sm">Performance optimized</Text></li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem id="custom-2">
        <AccordionHeader itemId="custom-2">
          Technical Specifications
        </AccordionHeader>
        <AccordionContent itemId="custom-2">
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Text variant="sm"><strong>Framework:</strong> React 18+</Text>
            <Text variant="sm"><strong>Styling:</strong> SCSS Modules</Text>
            <Text variant="sm"><strong>Icons:</strong> Material-UI Icons</Text>
            <Text variant="sm"><strong>TypeScript:</strong> Full support</Text>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
