import React from "react";
import { Card } from "../atoms/Card";

export const CardExample: React.FC = () => {
  const handleCardClick = () => {
    // console.log(`${cardName} card clicked!`);
  };

  const handleButtonClick = () => {
    // console.log(`${buttonName} button clicked!`);
  };

  return (
    <div>
      <h2>Card Component Examples</h2>

      <div style={{ marginBottom: "32px" }}>
        <h3>Basic Cards</h3>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Card
            title="Basic Card"
            description="A simple card with title, description, and button."
            buttonText="Learn More"
            onButtonClick={() => handleButtonClick("Basic")}
          />

          <Card
            title="Card with Image"
            description="This card includes an image at the top."
            buttonText="View Details"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
            onButtonClick={() => handleButtonClick("Image")}
          />

          <Card
            title="Card with Badge"
            badge="NEW"
            badgeVariant="filled"
            description="This card has a badge to highlight important information."
            buttonText="Explore"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
            onButtonClick={() => handleButtonClick("Badge")}
          />
        </div>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h3>Interactive Cards</h3>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Card
            title="Clickable Card"
            description="This entire card is clickable, not just the button."
            buttonText="Primary Action"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
            clickable={true}
            onClick={() => handleCardClick("Clickable")}
          />

          <Card
            title="Disabled Card"
            description="This card is disabled and cannot be interacted with."
            buttonText="Disabled Button"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
            disabled={true}
          />
        </div>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h3>Badge Variants</h3>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Card
            title="Dot Badge"
            badge="DOT"
            badgeVariant="dot"
            description="Card with dot badge variant."
            buttonText="Action"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
          />

          <Card
            title="Subtle Badge"
            badge="SUBTLE"
            badgeVariant="subtle"
            description="Card with subtle badge variant."
            buttonText="Action"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
          />

          <Card
            title="Outline Badge"
            badge="OUTLINE"
            badgeVariant="outline"
            description="Card with outline badge variant."
            buttonText="Action"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
          />
        </div>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h3>Button Variants</h3>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Card
            title="Filled Button"
            description="Card with filled button variant."
            buttonText="Filled"
            buttonVariant="filled"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
          />

          <Card
            title="Subtle Button"
            description="Card with subtle button variant."
            buttonText="Subtle"
            buttonVariant="subtle"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
          />

          <Card
            title="Outline Button"
            description="Card with outline button variant."
            buttonText="Outline"
            buttonVariant="outline"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
          />
        </div>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h3>Image Options</h3>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Card
            title="Cover Fit"
            description="Image with cover fit mode (default)."
            buttonText="View"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
            imageFit="cover"
          />

          <Card
            title="Contain Fit"
            description="Image with contain fit mode."
            buttonText="View"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
            imageFit="contain"
          />

          <Card
            title="Rounded Image"
            description="Image with border radius applied."
            buttonText="View"
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
            imageRadius={16}
          />
        </div>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h3>Text Only Cards</h3>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Card
            title="No Image Card"
            description="This card doesn't have an image but still looks great."
            buttonText="Get Started"
            showImage={false}
          />

          <Card
            title="Simple Card"
            description="A minimal card with just text content."
            buttonText="Learn More"
            showImage={false}
          />
        </div>
      </div>
    </div>
  );
};
