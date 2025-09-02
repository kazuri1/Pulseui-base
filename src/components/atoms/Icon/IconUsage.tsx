import { Icon } from "./Icon";
import * as Icons from "./IconSet";

// Icon Usage Guide - How to use icons consistently across the design system

/**
 * ICON USAGE PATTERNS
 *
 * 1. Direct Icon Component Usage
 * 2. Icon Component with Design Tokens
 * 3. Icon in Button Components
 * 4. Icon in Other Components
 * 5. Standalone Clickable Icons
 */

// 1. Direct Icon Component Usage
export const IconUsageExamples = () => {
  return (
    <div className="space-y-6">
      {/* Basic Icon Usage */}
      <div>
        <h3>Basic Icon Usage</h3>
        <div className="flex gap-4">
          <Icon icon={Icons.Add} size="sm" />
          <Icon icon={Icons.Edit} size="md" />
          <Icon icon={Icons.Delete} size="lg" />
          <Icon icon={Icons.Settings} size="xl" />
        </div>
      </div>

      {/* Icon with Colors */}
      <div>
        <h3>Icon with Colors</h3>
        <div className="flex gap-4">
          <Icon icon={Icons.CheckCircle} color="success" />
          <Icon icon={Icons.Error} color="error" />
          <Icon icon={Icons.Warning} color="warning" />
          <Icon icon={Icons.Info} color="primary" />
          <Icon icon={Icons.Help} color="muted" />
        </div>
      </div>

      {/* Clickable Icons */}
      <div>
        <h3>Clickable Icons</h3>
        <div className="flex gap-4">
          <Icon
            icon={Icons.Settings}
            clickable
            onClick={() => alert("Settings clicked!")}
          />
          <Icon
            icon={Icons.Refresh}
            clickable
            color="primary"
            onClick={() => {}}
          />
          <Icon
            icon={Icons.Favorite}
            clickable
            color="error"
            onClick={() => alert("Liked!")}
          />
        </div>
      </div>

      {/* Icon Sizes */}
      <div>
        <h3>Icon Sizes</h3>
        <div className="flex items-center gap-4">
          <Icon icon={Icons.Check} size="xs" />
          <Icon icon={Icons.Check} size="sm" />
          <Icon icon={Icons.Check} size="md" />
          <Icon icon={Icons.Check} size="lg" />
          <Icon icon={Icons.Check} size="xl" />
        </div>
      </div>
    </div>
  );
};

// 2. Icon in Button Components
export const ButtonWithIcons = () => {
  return (
    <div className="space-y-4">
      <h3>Button with Icons</h3>

      {/* Left Icon */}
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
        <Icon icon={Icons.Add} size="sm" color="inherit" />
        Add Item
      </button>

      {/* Right Icon */}
      <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded">
        Download
        <Icon icon={Icons.Download} size="sm" color="inherit" />
      </button>

      {/* Both Icons */}
      <button className="flex items-center justify-between gap-2 px-4 py-2 bg-purple-500 text-white rounded">
        <Icon icon={Icons.Upload} size="sm" color="inherit" />
        Upload & Download
        <Icon icon={Icons.Download} size="sm" color="inherit" />
      </button>
    </div>
  );
};

// 3. Icon Categories for Different Use Cases
export const IconCategories = {
  // Navigation
  navigation: {
    menu: Icons.Menu,
    close: Icons.Close,
    back: Icons.ArrowBack,
    forward: Icons.ArrowForward,
    expand: Icons.ExpandMore,
    collapse: Icons.ExpandLess,
  },

  // Actions
  actions: {
    add: Icons.Add,
    edit: Icons.Edit,
    delete: Icons.Delete,
    save: Icons.Save,
    refresh: Icons.Refresh,
    sync: Icons.Sync,
  },

  // File Operations
  files: {
    upload: Icons.Upload,
    download: Icons.Download,
    save: Icons.Save,
    print: Icons.Print,
    share: Icons.Share,
  },

  // Search & Filter
  search: {
    search: Icons.Search,
    filter: Icons.FilterList,
    sort: Icons.Sort,
    clear: Icons.Clear,
  },

  // Communication
  communication: {
    email: Icons.Email,
    phone: Icons.Person,
    message: Icons.Message,
    chat: Icons.Chat,
    notifications: Icons.Notifications,
  },

  // User & Account
  user: {
    person: Icons.Person,
    account: Icons.AccountCircle,
    settings: Icons.Settings,
    security: Icons.Visibility,
    lock: Icons.Settings,
  },

  // Status & Feedback
  status: {
    success: Icons.CheckCircle,
    error: Icons.Error,
    warning: Icons.Warning,
    info: Icons.Info,
    help: Icons.Help,
  },

  // Layout & UI
  layout: {
    home: Icons.Home,
    dashboard: Icons.Dashboard,
    list: Icons.ViewList,
    grid: Icons.ViewModule,
    menu: Icons.Menu,
  },
};

// 4. Icon Usage Best Practices
export const IconBestPractices = () => {
  return (
    <div className="space-y-4">
      <h3>Icon Usage Best Practices</h3>

      <div className="space-y-2">
        <h4> DO:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use consistent sizing within the same context</li>
          <li>Use semantic colors (success, error, warning, etc.)</li>
          <li>Provide click handlers for interactive icons</li>
          <li>Use appropriate icons for the action/meaning</li>
          <li>Maintain consistent spacing around icons</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h4>❌ DON'T:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Mix different icon sizes randomly</li>
          <li>Use icons without proper meaning/context</li>
          <li>Forget to handle disabled states</li>
          <li>Use too many icons in one component</li>
          <li>Ignore accessibility (provide alt text when needed)</li>
        </ul>
      </div>
    </div>
  );
};

// 5. Icon Token System
export const IconTokens = {
  // Size tokens (matches design system)
  sizes: {
    xs: "12px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "32px",
  },

  // Color tokens (matches design system)
  colors: {
    primary: "var(--color-blue-8)",
    secondary: "var(--color-indigo-6)",
    success: "var(--color-green-6)",
    warning: "var(--color-yellow-6)",
    error: "var(--color-red-6)",
    muted: "var(--color-gray-6)",
    inherit: "inherit",
  },

  // Spacing tokens for icon margins
  spacing: {
    xs: "var(--spacing-xs)",
    sm: "var(--spacing-sm)",
    md: "var(--spacing-md)",
    lg: "var(--spacing-lg)",
  },
};

// 6. Icon Component with Full Token Integration
export const TokenizedIcon = ({
  icon,
  size = "md",
  color = "inherit",

  clickable = false,
  onClick,
  disabled = false,
  className = "",
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: keyof typeof IconTokens.sizes;
  color?: keyof typeof IconTokens.colors;
  margin?: keyof typeof IconTokens.spacing;
  clickable?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <Icon
      icon={icon}
      size={size}
      color={color}
      clickable={clickable}
      onClick={onClick}
      disabled={disabled}
      className={className}
    />
  );
};
