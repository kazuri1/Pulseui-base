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
  Share,
  Twitter,
  Facebook,
  Email,
  Edit,
  Copy,
  Cut,
  Paste,
} from "../atoms/Icon/IconSet";

export const MenuExample: React.FC = () => {
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
            console.log("Settings clicked");
            setIsMenuOpen(false);
          },
        },
        {
          label: "Messages",
          icon: Message,
          onClick: () => {
            console.log("Messages clicked");
            setIsMenuOpen(false);
          },
        },
        {
          label: "Gallery",
          icon: Photo,
          onClick: () => {
            console.log("Gallery clicked");
            setIsMenuOpen(false);
          },
        },
        {
          label: "Search",
          icon: Search,
          shortcut: "⌘K",
          onClick: () => {
            console.log("Search clicked");
            setIsMenuOpen(false);
          },
        },
        {
          label: "Edit",
          icon: Edit,
          submenu: [
            {
              title: "Edit Actions",
              items: [
                {
                  label: "Copy",
                  icon: Copy,
                  shortcut: "⌘C",
                  onClick: () => {
                    console.log("Copy clicked");
                    setIsMenuOpen(false);
                  },
                },
                {
                  label: "Cut",
                  icon: Cut,
                  shortcut: "⌘X",
                  onClick: () => {
                    console.log("Cut clicked");
                    setIsMenuOpen(false);
                  },
                },
                {
                  label: "Paste",
                  icon: Paste,
                  shortcut: "⌘V",
                  onClick: () => {
                    console.log("Paste clicked");
                    setIsMenuOpen(false);
                  },
                },
              ],
            },
          ],
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
            console.log("Transfer data clicked");
            setIsMenuOpen(false);
          },
        },
        {
          label: "Delete my account",
          icon: Delete,
          danger: true,
          onClick: () => {
            console.log("Delete account clicked");
            setIsMenuOpen(false);
          },
        },
      ],
    },
  ];

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      <h3>Menu Component Example</h3>
      <p>
        Click the button below to open the menu. Try hovering over "Edit" to see
        the submenu:
      </p>

      <Button
        ref={buttonRef}
        leftIcon={MoreVert}
        onClick={() => setIsMenuOpen(true)}
        variant="outline"
      >
        Toggle Menu
      </Button>

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
