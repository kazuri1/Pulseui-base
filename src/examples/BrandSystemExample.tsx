import React, { useState } from "react";
import {
  PulseUIProvider,
  useBrand,
  useTheme,
  BrandSwitcher,
  ThemeAndBrandSwitcher,
  useBrandManager,
  Button,
  Card,
  Text,
  Stack,
  Grid,
  TextInput,
  Textarea,
  Alert,
  Badge,
  Container,
} from "../index";

// Example brand configurations
const exampleBrands = [
  {
    id: "ibm",
    name: "IBM",
    version: "1.0.0",
    description: "IBM Design Language - Carbon Design System inspired tokens",
    figmaFileKey: "ibm-design-system",
    tokens: {
      light: {
        primary: "#0f62fe",
        secondary: "#525252",
        success: "#24a148",
        warning: "#f1c21b",
        error: "#da1e28",
      },
      dark: {
        primary: "#78a9ff",
        secondary: "#a8a8a8",
        success: "#42be65",
        warning: "#f1c21b",
        error: "#ff8389",
      },
    },
  },
  {
    id: "google",
    name: "Google",
    version: "1.0.0",
    description: "Google Material Design 3 inspired tokens",
    figmaFileKey: "google-material-3",
    tokens: {
      light: {
        primary: "#6750a4",
        secondary: "#625b71",
        success: "#4caf50",
        warning: "#ff9800",
        error: "#f44336",
      },
      dark: {
        primary: "#d0bcff",
        secondary: "#ccc2dc",
        success: "#81c784",
        warning: "#ffb74d",
        error: "#e57373",
      },
    },
  },
];

// Brand System Demo Component
const BrandSystemDemo: React.FC = () => {
  const { currentBrand, brandId, setBrand, isDefaultBrand } = useBrand();
  const { themeMode, isDark, toggleTheme } = useTheme();
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <Container>
      <Stack gap="lg">
        <Card>
          <Stack gap="md">
            <Text variant="h3">Brand System Demo</Text>
            <Text>
              This example demonstrates the complete brand system functionality
              in PulseUI. You can switch between different brands and themes,
              and see how components adapt to different design languages.
            </Text>

            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <Badge variant="primary">
                Current Brand:{" "}
                {isDefaultBrand
                  ? "PulseUI (Default)"
                  : currentBrand?.name || "Unknown"}
              </Badge>
              <Badge variant="secondary">Theme: {themeMode}</Badge>
              <Badge variant="info">Brand ID: {brandId || "pulseui"}</Badge>
            </div>
          </Stack>
        </Card>

        {/* Combined Theme and Brand Switcher */}
        <Card>
          <Stack gap="md">
            <Text variant="h4">Combined Theme & Brand Switcher</Text>
            <ThemeAndBrandSwitcher
              showThemeToggle={true}
              showBrandSwitcher={true}
              showBrandVersion={true}
              showBrandDescription={true}
              size="lg"
            />
          </Stack>
        </Card>

        {/* Individual Switchers */}
        <Grid cols={2} gap="lg">
          <Card>
            <Stack gap="md">
              <Text variant="h4">Theme Toggle</Text>
              <Button onClick={toggleTheme} variant="primary">
                Switch to {isDark ? "Light" : "Dark"} Theme
              </Button>
              <Text>Current theme: {themeMode}</Text>
            </Stack>
          </Card>

          <Card>
            <Stack gap="md">
              <Text variant="h4">Brand Switcher</Text>
              <BrandSwitcher
                showVersion={true}
                showDescription={true}
                size="lg"
              />
            </Stack>
          </Card>
        </Grid>

        {/* Component Examples */}
        <Card>
          <Stack gap="md">
            <Text variant="h4">Component Examples</Text>
            <Text>
              These components will automatically adapt to the current brand and
              theme:
            </Text>

            <Grid cols={3} gap="md">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="success">Success Button</Button>
            </Grid>

            <Grid cols={3} gap="md">
              <Alert variant="info">Info Alert</Alert>
              <Alert variant="success">Success Alert</Alert>
              <Alert variant="warning">Warning Alert</Alert>
            </Grid>

            <Grid cols={2} gap="md">
              <TextInput placeholder="Text input example" />
              <Textarea placeholder="Textarea example" />
            </Grid>
          </Stack>
        </Card>

        {/* Advanced Brand Management */}
        <Card>
          <Stack gap="md">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text variant="h4">Advanced Brand Management</Text>
              <Button
                variant="secondary"
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                {showAdvanced ? "Hide" : "Show"} Advanced
              </Button>
            </div>

            {showAdvanced && <AdvancedBrandManagement />}
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};

// Advanced Brand Management Component
const AdvancedBrandManagement: React.FC = () => {
  const [newBrandConfig, setNewBrandConfig] = useState("");
  const [importUrl, setImportUrl] = useState("");
  const [brandId, setBrandId] = useState("");

  const {
    loadBrand,
    loadBrandFromUrl,
    addBrand,
    removeBrand,
    refreshBrands,
    availableBrands,
    externalBrandUrls,
    isLoading,
    error,
    validateBrand,
    exportBrandConfig,
    importBrandConfig,
  } = useBrandManager({ enableDynamicLoading: true });

  const handleAddBrand = () => {
    if (newBrandConfig.trim()) {
      try {
        const config = JSON.parse(newBrandConfig);
        if (validateBrand(config)) {
          addBrand(config);
          setNewBrandConfig("");
        }
      } catch (err) {
        console.error("Invalid JSON:", err);
      }
    }
  };

  const handleLoadFromUrl = () => {
    if (importUrl.trim() && brandId.trim()) {
      loadBrandFromUrl(brandId, importUrl);
    }
  };

  const handleExportBrand = (brandId: string) => {
    const config = exportBrandConfig(brandId);
    if (config) {
      navigator.clipboard.writeText(config);
      alert("Brand configuration copied to clipboard!");
    }
  };

  return (
    <Stack gap="lg">
      {/* Add New Brand */}
      <Card>
        <Stack gap="md">
          <Text variant="h5">Add New Brand</Text>
          <Textarea
            placeholder="Paste brand configuration JSON here..."
            value={newBrandConfig}
            onChange={(e) => setNewBrandConfig(e.target.value)}
            rows={6}
          />
          <Button onClick={handleAddBrand} disabled={!newBrandConfig.trim()}>
            Add Brand
          </Button>
        </Stack>
      </Card>

      {/* Load Brand from URL */}
      <Card>
        <Stack gap="md">
          <Text variant="h5">Load Brand from URL</Text>
          <Grid cols={2} gap="md">
            <TextInput
              placeholder="Brand ID"
              value={brandId}
              onChange={(e) => setBrandId(e.target.value)}
            />
            <TextInput
              placeholder="URL to brand config JSON"
              value={importUrl}
              onChange={(e) => setImportUrl(e.target.value)}
            />
          </Grid>
          <Button
            onClick={handleLoadFromUrl}
            disabled={!importUrl.trim() || !brandId.trim()}
          >
            Load from URL
          </Button>
        </Stack>
      </Card>

      {/* Brand Management Actions */}
      <Card>
        <Stack gap="md">
          <Text variant="h5">Brand Management</Text>
          <Grid cols={2} gap="md">
            <Button onClick={refreshBrands} disabled={isLoading}>
              {isLoading ? "Refreshing..." : "Refresh All Brands"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </Button>
          </Grid>
        </Stack>
      </Card>

      {/* Available Brands */}
      <Card>
        <Stack gap="md">
          <Text variant="h5">Available Brands ({availableBrands.length})</Text>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {availableBrands.map((brandId) => (
              <div
                key={brandId}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  border: "1px solid var(--color-border)",
                  borderRadius: "4px",
                }}
              >
                <Text>{brandId}</Text>
                <div style={{ display: "flex", gap: "8px" }}>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleExportBrand(brandId)}
                  >
                    Export
                  </Button>
                  {brandId !== "pulseui" && (
                    <Button
                      size="sm"
                      variant="error"
                      onClick={() => removeBrand(brandId)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Stack>
      </Card>

      {/* External Brand URLs */}
      {externalBrandUrls.size > 0 && (
        <Card>
          <Stack gap="md">
            <Text variant="h5">External Brand Sources</Text>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {Array.from(externalBrandUrls.entries()).map(([brandId, url]) => (
                <div
                  key={brandId}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px",
                    border: "1px solid var(--color-border)",
                    borderRadius: "4px",
                  }}
                >
                  <Text>{brandId}</Text>
                  <Text
                    size="sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {url}
                  </Text>
                </div>
              ))}
            </div>
          </Stack>
        </Card>
      )}

      {/* Error Display */}
      {error && (
        <Alert variant="error">
          <Text variant="h6">Error</Text>
          <Text>{error}</Text>
        </Alert>
      )}
    </Stack>
  );
};

// Main Example Component with Provider
export const BrandSystemExample: React.FC = () => {
  return (
    <PulseUIProvider
      defaultTheme="default-light"
      defaultBrand={null}
      availableBrands={exampleBrands}
    >
      <BrandSystemDemo />
    </PulseUIProvider>
  );
};

export default BrandSystemExample;
