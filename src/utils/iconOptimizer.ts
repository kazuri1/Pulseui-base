// Icon optimization utility to reduce bundle size
import { lazy } from 'react';

// Lazy load commonly used icons
export const CommonIcons = {
  InfoOutlined: lazy(() => import('@mui/icons-material/InfoOutlined')),
  Home: lazy(() => import('@mui/icons-material/Home')),
  Settings: lazy(() => import('@mui/icons-material/Settings')),
  Person: lazy(() => import('@mui/icons-material/Person')),
  Search: lazy(() => import('@mui/icons-material/Search')),
  NotificationsNone: lazy(() => import('@mui/icons-material/NotificationsNone')),
  MailOutline: lazy(() => import('@mui/icons-material/MailOutline')),
  HelpOutline: lazy(() => import('@mui/icons-material/HelpOutline')),
  ErrorOutline: lazy(() => import('@mui/icons-material/ErrorOutline')),
  Warning: lazy(() => import('@mui/icons-material/Warning')),
  CheckCircle: lazy(() => import('@mui/icons-material/CheckCircle')),
  FavoriteBorder: lazy(() => import('@mui/icons-material/FavoriteBorder')),
  BookmarkBorder: lazy(() => import('@mui/icons-material/BookmarkBorder')),
  FlagOutlined: lazy(() => import('@mui/icons-material/FlagOutlined')),
  LockOutlined: lazy(() => import('@mui/icons-material/LockOutlined')),
};

// Icon registry for dynamic loading
export const IconRegistry = new Map(Object.entries(CommonIcons));

// Get icon component with fallback
export const getIcon = (iconName: string) => {
  return IconRegistry.get(iconName) || CommonIcons.InfoOutlined;
};

// Preload critical icons
export const preloadCriticalIcons = () => {
  const criticalIcons = ['InfoOutlined', 'Home', 'Settings'];
  criticalIcons.forEach(iconName => {
    const icon = IconRegistry.get(iconName);
    if (icon) {
      // Trigger lazy loading
      icon.toString();
    }
  });
};
