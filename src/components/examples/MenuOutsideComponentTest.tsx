import React, { useState, useRef } from "react";
import { Menu } from "../atoms/Menu";
import { Button } from "../atoms/Button";
import {
  Settings,
  Message,
  Photo,
  Search,
  Sync,
  Delete,
  MoreVert,
} from "../atoms/Icon/IconSet";

export const MenuOutsideComponentTest: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const menuSections = [
    {
      title: "Application",
      items: [
        {
          label: "Settings",
          icon: Settings,
          onClick: () => {
            setIsMenuOpen(false);
          },
        },
        {
          label: "Messages",
          icon: Message,
          onClick: () => {
            setIsMenuOpen(false);
          },
        },
        {
          label: "Gallery",
          icon: Photo,
          onClick: () => {
            setIsMenuOpen(false);
          },
        },
        {
          label: "Search",
          icon: Search,
          shortcut: "⌘K",
          onClick: () => {
            setIsMenuOpen(false);
          },
        },
      ],
    },
    {
      title: "Danger zone",
      items: [
        {
          label: "Transfer my data",
          icon: Sync,
          onClick: () => {
            setIsMenuOpen(false);
          },
        },
        {
          label: "Delete my account",
          icon: Delete,
          danger: true,
          onClick: () => {
            setIsMenuOpen(false);
          },
        },
      ],
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        position: "relative",
        border: "2px solid #ccc",
        borderRadius: "8px",
        margin: "20px",
        overflow: "hidden", // This will constrain the component but menu should appear outside
        height: "200px",
        width: "300px",
      }}
    >
      <h3>Menu Outside Component Test</h3>
      <p>
        This test demonstrates that the menu can appear outside the component's
        boundaries. The component has overflow: hidden, but the menu should
        still appear outside.
      </p>

      <div style={{ marginBottom: "20px" }}>
        <Button
          ref={buttonRef}
          leftIcon={MoreVert}
          onClick={() => setIsMenuOpen(true)}
          variant="outline"
        >
          Open Menu (Outside Component)
        </Button>
      </div>

      <Menu
        sections={menuSections}
        open={isMenuOpen}
        onBackdropClick={() => setIsMenuOpen(false)}
        showBackdrop={false}
        anchorEl={buttonRef.current}
        placement="bottom-start"
      />
    </div>
  );
};