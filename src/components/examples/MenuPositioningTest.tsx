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

export const MenuPositioningTest: React.FC = () => {
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
    <div style={{ padding: "20px", position: "relative" }}>
      <h3>Menu Positioning Test</h3>
      <p>
        This test verifies that the menu is properly positioned relative to the
        trigger button. The menu should appear below the button and stay within
        the viewport boundaries.
      </p>

      <div style={{ marginBottom: "20px" }}>
        <Button
          ref={buttonRef}
          leftIcon={MoreVert}
          onClick={() => setIsMenuOpen(true)}
          variant="outline"
        >
          Open Menu (Bottom Start)
        </Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button
          onClick={() => setIsMenuOpen(true)}
          variant="outline"
          style={{ marginLeft: "200px" }}
        >
          Open Menu (Different Position)
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