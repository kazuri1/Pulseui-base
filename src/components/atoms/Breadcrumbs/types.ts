export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps
  extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}
