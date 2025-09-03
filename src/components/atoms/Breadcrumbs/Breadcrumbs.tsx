import React from "react";
import { BreadcrumbsProps } from "./types";
import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = "/",
  ...props
}) => {
  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbs} {...props}>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            <a
              href={item.href}
              className={styles.link}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </a>
            {index < items.length - 1 && (
              <span className={styles.separator}>{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
