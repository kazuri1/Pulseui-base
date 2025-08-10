import React from "react";
import { ComponentDisplay } from "./components/atoms/ComponentDisplay/ComponentDisplay";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Button } from "./components/atoms/Button/Button";
import buttonStories from "./components/atoms/Button/Button.stories";

function AppContent() {
  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ 
        textAlign: "center", 
        marginBottom: "48px",
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "var(--color-text-primary)"
      }}>
        PulseUI ComponentDisplay Demo
      </h1>

      {/* Auto-generated ComponentDisplay from Button component */}
      <ComponentDisplay
        component={Button}
        componentName="Button"
        stories={buttonStories}
      />

      <div style={{ marginTop: "48px", textAlign: "center" }}>
        <h2 style={{ 
          fontSize: "1.5rem", 
          marginBottom: "24px",
          color: "var(--color-text-primary)"
        }}>
          Usage Instructions
        </h2>
        <div style={{ 
          textAlign: "left", 
          maxWidth: "800px", 
          margin: "0 auto",
          padding: "24px",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "8px",
          border: "1px solid var(--color-border-secondary)"
        }}>
          <h3>Auto-Generation Feature</h3>
          <p>
            The ComponentDisplay component now supports automatic content generation from any PulseUI component:
          </p>
          <pre style={{ 
            backgroundColor: "var(--color-surface-tertiary)", 
            padding: "16px", 
            borderRadius: "4px",
            overflow: "auto",
            fontSize: "14px"
          }}>
{`import { ComponentDisplay } from '@pulseui-base';
import { Button } from '@pulseui-base';
import buttonStories from './Button.stories';

// Auto-generate content from component
<ComponentDisplay
  component={Button}
  componentName="Button"
  stories={buttonStories}
/>`}
          </pre>
          
          <h3>What Gets Auto-Generated:</h3>
          <ul>
            <li><strong>Title & Description</strong> - From component name and display name</li>
            <li><strong>Source URL</strong> - Links to GitHub repository</li>
            <li><strong>Props Table</strong> - Extracted from Storybook argTypes</li>
            <li><strong>Examples</strong> - Rendered from component stories</li>
            <li><strong>Usage Instructions</strong> - Import and usage code</li>
          </ul>

          <h3>Props:</h3>
          <ul>
            <li><code>component</code> - The React component to display</li>
            <li><code>componentName</code> - Optional custom name</li>
            <li><code>stories</code> - Component's Storybook stories for enhanced content</li>
            <li><code>title</code> - Optional custom title (overrides auto-generated)</li>
            <li><code>description</code> - Optional custom description</li>
            <li><code>sourceUrl</code> - Optional custom source URL</li>
            <li><code>docsUrl</code> - Optional documentation URL</li>
            <li><code>packageName</code> - Optional custom package name</li>
            <li><code>children</code> - Optional custom content (overrides auto-generation)</li>
            <li><code>className</code> - Optional custom CSS class</li>
          </ul>
        </div>
      </div>

      <footer style={{ 
        marginTop: "48px", 
        textAlign: "center", 
        padding: "24px",
        borderTop: "1px solid var(--color-border-secondary)",
        color: "var(--color-text-secondary)"
      }}>
        <p>PulseUI ComponentDisplay - Auto-generating component documentation</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="default" defaultMode="light">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
