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

export const MenuOverlayTest: React.FC = () => {
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
    <div style={{ padding: "40px" }}>
      <h2>Menu Overlay Test</h2>
      <p>
        This test demonstrates that the menu appears outside component
        boundaries like other overlay components.
      </p>

      {/* Constrained container to test overflow */}
      <div
        style={{
          border: "3px solid #ff6b6b",
          borderRadius: "12px",
          padding: "20px",
          margin: "20px 0",
          overflow: "hidden",
          height: "150px",
          width: "400px",
          position: "relative",
        }}
      >
        <h3>Constrained Container</h3>
        <p>This container has overflow: hidden and limited height/width.</p>

        <div style={{ marginTop: "20px" }}>
          <Button
            ref={buttonRef}
            leftIcon={MoreVert}
            onClick={() => setIsMenuOpen(true)}
            variant="outline"
          >
            Open Menu (Should Appear Outside)
          </Button>
        </div>
      </div>

      {/* Another constrained container */}
      <div
        style={{
          border: "3px solid #4ecdc4",
          borderRadius: "12px",
          padding: "20px",
          margin: "20px 0",
          overflow: "hidden",
          height: "120px",
          width: "300px",
          position: "relative",
        }}
      >
        <h3>Another Constrained Container</h3>
        <p>This one is even smaller.</p>

        <div style={{ marginTop: "10px" }}>
          <Button
            onClick={() => setIsMenuOpen(true)}
            variant="outline"
            size="sm"
          >
            Another Menu
          </Button>
        </div>
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