import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, within, expect } from "@storybook/test";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fit: {
      control: { type: "select" },
      options: ["fill", "contain", "cover", "none", "scale-down"],
    },
    loading: {
      control: { type: "select" },
      options: ["lazy", "eager"],
    },
    radius: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/src/assets/Image/Image.jpg",
    alt: "Sample Image",
    width: 300,
    height: 200,
  },
};

export const WithFallback: Story = {
  args: {
    src: "https://invalid-url-that-will-fail.jpg",
    fallbackSrc: "/src/assets/Image/Image.jpg",
    alt: "Image with fallback",
    width: 300,
    height: 200,
  },
};

export const DifferentFits: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <div>
        <h4>Cover (default)</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="Cover fit"
          width={200}
          height={150}
          fit="cover"
        />
      </div>
      <div>
        <h4>Contain</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="Contain fit"
          width={200}
          height={150}
          fit="contain"
        />
      </div>
      <div>
        <h4>Fill</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="Fill fit"
          width={200}
          height={150}
          fit="fill"
        />
      </div>
      <div>
        <h4>None</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="None fit"
          width={200}
          height={150}
          fit="none"
        />
      </div>
      <div>
        <h4>Scale-down</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="Scale-down fit"
          width={200}
          height={150}
          fit="scale-down"
        />
      </div>
    </div>
  ),
};

export const WithRadius: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <div>
        <h4>No radius</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="No radius"
          width={200}
          height={150}
        />
      </div>
      <div>
        <h4>Small radius</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="Small radius"
          width={200}
          height={150}
          radius={8}
        />
      </div>
      <div>
        <h4>Large radius</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="Large radius"
          width={200}
          height={150}
          radius={16}
        />
      </div>
      <div>
        <h4>Full radius</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="Full radius"
          width={200}
          height={150}
          radius="50%"
        />
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      <div>
        <h4>Small</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="Small image"
          width={100}
          height={75}
        />
      </div>
      <div>
        <h4>Medium</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="Medium image"
          width={200}
          height={150}
        />
      </div>
      <div>
        <h4>Large</h4>
        <Image
          src="/src/assets/Image/Image.jpg"
          alt="Large image"
          width={300}
          height={225}
        />
      </div>
    </div>
  ),
};

export const WithErrorHandling: Story = {
  args: {
    src: "https://invalid-url-that-will-fail.jpg",
    alt: "Image that will fail to load",
    width: 300,
    height: 200,
    onError: () => {
      // console.log("Image failed to load:", event);
    },
  },
};

export const LazyLoading: Story = {
  args: {
    src: "/src/assets/Image/Image.jpg",
    alt: "Lazy loaded image",
    width: 300,
    height: 200,
    loading: "lazy",
  },
};

export const Responsive: Story = {
  args: {
    src: "/src/assets/Image/Image.jpg",
    alt: "Responsive image",
    width: "100%",
    height: "auto",
    fit: "cover",
  },
};

