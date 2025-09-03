import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";

export interface MenuItem {
  /** Item label */
  label: string;
  /** Item icon */
  icon?: SvgIconComponent;
  /** Keyboard shortcut (e.g., "⌘K") */
  shortcut?: string;
  /** Whether this is a danger/delete action */
  danger?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Submenu sections */
  submenu?: MenuSection[];
}

export interface MenuSection {
  /** Section title */
  title: string;
  /** Section items */
  items: MenuItem[];
}

export interface MenuProps extends WithSxProps {
  /** Menu sections */
  sections: MenuSection[];
  /** Whether the menu is open */
  open?: boolean;
  /** Menu width */
  width?: string;
  /** Maximum menu width */
  maxWidth?: string;
  /** Whether to show section titles */
  showSectionTitles?: boolean;
  /** Click handler for backdrop */
  onBackdropClick?: () => void;
  /** Whether to show backdrop */
  showBackdrop?: boolean;
  /** @internal */
  isSubmenu?: boolean;
  /** @internal */
  parentRef?: React.RefObject<HTMLDivElement> | null;
  /** Position the menu relative to a trigger element */
  anchorEl?: HTMLElement | null;
  /** Menu placement relative to anchor */
  placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
}
