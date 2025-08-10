import React, { useMemo } from "react";
import { Icon, NpmIcon } from "../Icon";
import { GitHub, Edit } from "../Icon/IconSet";
import styles from "./ComponentDisplay.module.scss";
import { useState } from "react";
import { Button } from "../Button";

export interface ComponentDisplayProps {
  title: string;
  description?: string;
  component: React.ComponentType<any>;
  props?: Record<string, any>;
  stories?: React.ComponentType<any>;
  storybookUrl?: string;
  storyId?: string;
  storybookViewMode?: "docs" | "story" | "canvas";
  showCode?: boolean;
  showProps?: boolean;
  showStories?: boolean;
}

export const ComponentDisplay: React.FC<ComponentDisplayProps> = ({
  title,
  description,
  component: Component,
  props = {},
  stories: Stories,
  storybookUrl,
  storyId,
  storybookViewMode = "docs",
  showCode = true,
  showProps = true,
  showStories = true,
}) => {
  // Auto-infer Storybook URL and story ID if not provided but stories exist
  const autoStorybookUrl =
    storybookUrl ||
    (Stories ? window.location.origin + "/storybook" : undefined);
  const autoStoryId =
    storyId ||
    (Stories
      ? `${Stories.displayName || Stories.name || "default"}-docs`
      : undefined);
  const autoViewMode = storybookViewMode;

  return (
    <div className={styles.componentDisplay}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      <ComponentContent
        component={Component}
        props={props}
        stories={Stories}
        showCode={showCode}
        showProps={showProps}
        showStories={showStories}
        storybookUrl={autoStorybookUrl}
        storyId={autoStoryId}
        storybookViewMode={autoViewMode}
      />
    </div>
  );
};

// Component to auto-generate content from a component
interface ComponentContentProps {
  component: React.ComponentType<any>;
  props: Record<string, any>;
  stories?: React.ComponentType<any>;
  showCode: boolean;
  showProps: boolean;
  showStories: boolean;
  storybookUrl?: string;
  storyId?: string;
  storybookViewMode: "docs" | "story" | "canvas";
}

const ComponentContent: React.FC<ComponentContentProps> = ({
  component: Component,
  props,
  stories: Stories,
  showCode,
  showProps,
  showStories,
  storybookUrl,
  storyId,
  storybookViewMode,
}) => {
  const [activeTab, setActiveTab] = useState<
    "preview" | "code" | "props" | "stories" | "storybook"
  >("preview");

  // State for large overlay components
  const [isLargeComponentOpen, setIsLargeComponentOpen] = useState(false);

  // Show storybook tab if we have storybook URL and stories
  const hasStorybook = storybookUrl && storyId && Stories;

  // Helper function to generate component code
  const generateComponentCode = (
    component: React.ComponentType<any>,
    componentProps: Record<string, any>
  ) => {
    const componentName =
      component.displayName || component.name || "Component";
    const propsString = Object.entries(componentProps)
      .map(([key, value]) => {
        if (typeof value === "string") {
          return `${key}="${value}"`;
        } else if (typeof value === "boolean") {
          return value ? key : `${key}={false}`;
        } else {
          return `${key}={${JSON.stringify(value)}}`;
        }
      })
      .join(" ");

    return `<${componentName}${propsString ? ` ${propsString}` : ""} />`;
  };

  // Helper function to check if component is a large overlay component
  const isLargeOverlayComponent = (component: React.ComponentType<any>) => {
    const componentName = component.displayName || component.name || "";
    return componentName === "Modal" || componentName === "Drawer";
  };

  // Helper function to render component preview
  const renderComponentPreview = () => {
    const isLargeOverlay = isLargeOverlayComponent(Component);

    if (isLargeOverlay) {
      // For large overlay components, show a button to open them
      return (
        <div className={styles.previewContainer}>
          <div className={styles.previewBox}>
            <div className={styles.previewPlaceholder}>
              <p>Large Component: {Component.displayName || Component.name}</p>
              <Button
                onClick={() => setIsLargeComponentOpen(true)}
                variant="filled"
                size="md"
              >
                Open {Component.displayName || Component.name}
              </Button>
            </div>
          </div>

          {/* Render the actual component with show prop controlled */}
          <Component
            {...props}
            show={isLargeComponentOpen}
            onClose={() => setIsLargeComponentOpen(false)}
          />
        </div>
      );
    } else {
      // For regular components, render them directly in the preview box
      return (
        <div className={styles.previewContainer}>
          <div className={styles.previewBox}>
            <Component {...props} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "preview" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        {showCode && (
          <button
            className={`${styles.tab} ${
              activeTab === "code" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </button>
        )}
        {showProps && (
          <button
            className={`${styles.tab} ${
              activeTab === "props" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("props")}
          >
            Props
          </button>
        )}
        {showStories && Stories && (
          <button
            className={`${styles.tab} ${
              activeTab === "stories" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("stories")}
          >
            Stories
          </button>
        )}
        {hasStorybook && (
          <button
            className={`${styles.tab} ${
              activeTab === "storybook" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("storybook")}
          >
            Interactive Docs
          </button>
        )}
      </div>

      <div className={styles.tabContent}>
        {activeTab === "preview" && (
          <div className={styles.preview}>{renderComponentPreview()}</div>
        )}

        {activeTab === "code" && showCode && (
          <div className={styles.code}>
            <pre>
              <code>{generateComponentCode(Component, props)}</code>
            </pre>
          </div>
        )}

        {activeTab === "props" && showProps && (
          <div className={styles.props}>
            <pre>
              <code>{JSON.stringify(props, null, 2)}</code>
            </pre>
          </div>
        )}

        {activeTab === "stories" && showStories && Stories && (
          <div className={styles.stories}>
            <Stories />
          </div>
        )}

        {activeTab === "storybook" && hasStorybook && (
          <div className={styles.storybookSection}>
            <div className={styles.storybookHeader}>
              <h3 className={styles.storybookTitle}>
                Interactive Documentation
              </h3>
              <a
                href={`${storybookUrl}?path=/docs/${storyId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storybookLink}
              >
                Open in Storybook →
              </a>
            </div>
            <div className={styles.storybookEmbed}>
              <iframe
                src={`${storybookUrl}?path=/docs/${storyId}`}
                className={styles.storybookIframe}
                title="Interactive Storybook Documentation"
                frameBorder="0"
              />
            </div>
            <div className={styles.storybookInfo}>
              <p>
                This embedded Storybook documentation provides interactive
                examples, prop controls, and comprehensive component
                information.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
