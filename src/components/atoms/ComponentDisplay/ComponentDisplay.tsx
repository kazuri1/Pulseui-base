import React, { useMemo } from "react";
import { Icon, NpmIcon } from "../Icon";
import { GitHub, Edit } from "../Icon/IconSet";
import styles from "./ComponentDisplay.module.scss";

export interface ComponentDisplayProps {
  title?: string;
  description?: string;
  sourceUrl?: string;
  docsUrl?: string;
  packageName?: string;
  children?: React.ReactNode;
  className?: string;
  // New prop: the component to display
  component?: React.ComponentType<any>;
  // Optional: custom component name if different from the component's display name
  componentName?: string;
  // Optional: component stories for enhanced auto-generation
  stories?: any;
}

export const ComponentDisplay: React.FC<ComponentDisplayProps> = ({
  title,
  description,
  sourceUrl,
  docsUrl,
  packageName,
  children,
  className,
  component,
  componentName,
  stories,
}) => {
  // Auto-generate title and description from component if not provided
  const autoTitle = useMemo(() => {
    if (title) return title;
    if (component) {
      return (
        componentName || component.displayName || component.name || "Component"
      );
    }
    return "Component";
  }, [title, component, componentName]);

  const autoDescription = useMemo(() => {
    if (description) return description;
    if (component) {
      return `Interactive documentation and examples for the ${autoTitle} component.`;
    }
    return "Component documentation and examples.";
  }, [description, component, autoTitle]);

  // Auto-generate source URL if not provided
  const autoSourceUrl = useMemo(() => {
    if (sourceUrl) return sourceUrl;
    if (component) {
      const componentPath =
        component.displayName || component.name || "Component";
      return `https://github.com/kazuri1/Pulseui/tree/main/src/components/${componentPath}`;
    }
    return undefined;
  }, [sourceUrl, component]);

  // Auto-generate package name if not provided
  const autoPackageName = useMemo(() => {
    if (packageName) return packageName;
    return "@pulseui-base";
  }, [packageName]);

  return (
    <div className={`${styles.componentDisplay} ${className || ""}`}>
      <header className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{autoTitle}</h1>
          <p className={styles.description}>{autoDescription}</p>
        </div>

        {(autoSourceUrl || docsUrl || autoPackageName) && (
          <nav className={styles.metadata} aria-label="Component metadata">
            {autoSourceUrl && (
              <div className={styles.metadataItem}>
                <span className={styles.metadataLabel}>Source</span>
                <a
                  href={autoSourceUrl}
                  className={styles.metadataLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${autoTitle}`}
                >
                  <Icon icon={GitHub} className={styles.metadataIcon} />
                  <span>View source code</span>
                </a>
              </div>
            )}

            {docsUrl && (
              <div className={styles.metadataItem}>
                <span className={styles.metadataLabel}>Docs</span>
                <a
                  href={docsUrl}
                  className={styles.metadataLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Edit documentation for ${autoTitle}`}
                >
                  <Icon icon={Edit} className={styles.metadataIcon} />
                  <span>Edit this page</span>
                </a>
              </div>
            )}

            {autoPackageName && (
              <div className={styles.metadataItem}>
                <span className={styles.metadataLabel}>Package</span>
                <div className={styles.packageInfo}>
                  <NpmIcon className={styles.metadataIcon} />
                  <a
                    href={`https://www.npmjs.com/package/${autoPackageName.replace(
                      "@",
                      ""
                    )}`}
                    className={styles.packageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${autoPackageName} on npm`}
                  >
                    {autoPackageName}
                  </a>
                </div>
              </div>
            )}
          </nav>
        )}
      </header>

      <main className={styles.content}>
        {children ||
          (component && (
            <ComponentContent component={component} stories={stories} />
          ))}
      </main>
    </div>
  );
};

// Component to auto-generate content from a component
interface ComponentContentProps {
  component: React.ComponentType<any>;
  stories?: any;
}

const ComponentContent: React.FC<ComponentContentProps> = ({
  component,
  stories,
}) => {
  // Get component props from TypeScript interface
  const componentProps = useMemo(() => {
    try {
      const componentName =
        component.displayName || component.name || "Component";

      // Try to extract props from stories if available
      if (stories?.argTypes) {
        const props = Object.entries(stories.argTypes).map(
          ([key, value]: [string, any]) => ({
            name: key,
            type: value.control?.type || value.type || "unknown",
            required: value.required || false,
            defaultValue:
              value.defaultValue || value.control?.defaultValue || "none",
            description: value.description || "No description available",
            options: value.options || null,
          })
        );

        return {
          name: componentName,
          props,
        };
      }

      // Fallback to basic structure
      return {
        name: componentName,
        props: [],
      };
    } catch (error) {
      console.warn("Could not extract component props:", error);
      return { name: "Component", props: [] };
    }
  }, [component, stories]);

  // Extract examples from stories if available
  const examples = useMemo(() => {
    if (!stories) return [];

    try {
      // Get story names and descriptions
      const storyEntries = Object.entries(stories).filter(
        ([key, value]) =>
          key !== "default" &&
          typeof value === "object" &&
          value !== null &&
          "render" in value
      );

      return storyEntries.map(([key, story]: [string, any]) => ({
        name: story.name || key,
        description:
          story.parameters?.docs?.description?.story ||
          "No description available",
        render: story.render,
      }));
    } catch (error) {
      console.warn("Could not extract examples from stories:", error);
      return [];
    }
  }, [stories]);

  return (
    <div className={styles.autoContent}>
      <section className={styles.propsSection}>
        <h2 className={styles.sectionTitle}>Props Reference</h2>
        <p className={styles.sectionDescription}>
          Available props for the {componentProps.name} component.
        </p>
        <div className={styles.propsTable}>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Required</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {componentProps.props.length > 0 ? (
                componentProps.props.map((prop, index) => (
                  <tr key={index}>
                    <td>
                      <code>{prop.name}</code>
                    </td>
                    <td>{prop.type}</td>
                    <td>{prop.required ? "Yes" : "No"}</td>
                    <td>{prop.defaultValue}</td>
                    <td>{prop.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className={styles.noProps}>
                    Props information will be auto-generated from component
                    interface.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.examplesSection}>
        <h2 className={styles.sectionTitle}>Examples</h2>
        <p className={styles.sectionDescription}>
          Interactive examples and usage patterns for the {componentProps.name}{" "}
          component.
        </p>
        {examples.length > 0 ? (
          <div className={styles.examplesGrid}>
            {examples.map((example, index) => (
              <div key={index} className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>{example.name}</h3>
                <p className={styles.exampleDescription}>
                  {example.description}
                </p>
                <div className={styles.examplePreview}>
                  {/* Render the actual component example */}
                  {example.render && example.render()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.examplePlaceholder}>
            <p>Examples will be auto-generated from component stories.</p>
          </div>
        )}
      </section>

      <section className={styles.usageSection}>
        <h2 className={styles.sectionTitle}>Usage</h2>
        <p className={styles.sectionDescription}>
          How to import and use the {componentProps.name} component.
        </p>
        <div className={styles.codeBlock}>
          <pre>
            <code>{`import { ${componentProps.name} } from '@pulseui-base';

// Basic usage
<${componentProps.name}>Content</${componentProps.name}>

// With props
<${componentProps.name} variant="primary" size="md">
  Button Text
</${componentProps.name}>`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
};
