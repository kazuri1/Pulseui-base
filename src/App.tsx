import {
  PulseUIProvider,
  useTheme,
  useBrand,
} from "./contexts/PulseUIProvider";
import { VariantSelector } from "./components/atoms/VariantSelector/VariantSelector";
import { Button } from "./components/atoms/Button/Button";
import { Badge } from "./components/atoms/Badge";
import { Alert } from "./components/atoms/Alert";
import { Checkbox } from "./components/atoms/Checkbox";
import { Switch } from "./components/atoms/Switch";
import { Select } from "./components/atoms/Select";
import { SimpleTopNav } from "./components/atoms/SimpleTopNav";
import { Grid, GridCol } from "./components/layouts/Grid";
import { Text } from "./components/atoms/Text";
import React, { useState } from "react";
import { Input } from "./components/atoms/Input";
import { Textarea } from "./components/atoms/Textarea";
import { Pill } from "./components/atoms/Pill";
import { Card } from "./components/atoms/Card";
import { Tag } from "./components/atoms/Tag";
import { Avatar } from "./components/atoms/Avatar";
import { Modal } from "./components/atoms/Modal";
import { Pagination } from "./components/atoms/Pagination";
import { PillInput } from "./components/atoms/PillInput";
import { Radio } from "./components/atoms/Radio";
import { Stepper } from "./components/atoms/Stepper";
import { Kbd } from "./components/atoms/Kbd";
import { ThemeSwitcher } from "./components/atoms/ThemeSwitcher";
import { BrandSwitcher } from "./components/atoms/BrandSwitcher";
import { ThemeAndBrandSwitcher } from "./components/atoms/ThemeAndBrandSwitcher";
import { Drawer } from "./components/atoms/Drawer";

function AppContent() {
  const { themeName } = useTheme();
  const { currentBrand, brandId, isDefaultBrand } = useBrand();
  const [checkboxState, setCheckboxState] = React.useState("default");
  const [inputState, setInputState] = React.useState<
    "default" | "filled" | "unstyled"
  >("default");
  const [textAreaState, setTextAreaState] = React.useState<
    "default" | "error" | "disabled"
  >("default");
  const [pillState, setPillState] = React.useState<
    "default" | "info" | "success" | "warning" | "error"
  >("default");
  const [cardState, setCardState] = React.useState<"default" | "image-overlay">(
    "default"
  );
  const [tagState, setTagState] = React.useState<
    "default" | "teal" | "selected" | "mint"
  >("default");
  const [avatarState, setAvatarState] = React.useState<
    "primary" | "secondary" | "success" | "warning"
  >("primary");
  const [modalState, setModalState] = React.useState<
    "default" | "large" | "small"
  >("default");
  const [paginationState, setPaginationState] = React.useState<
    "xs" | "sm" | "md" | "lg" | "xl"
  >("md");
  const [pillInputState, setPillInputState] = React.useState<
    "default" | "filled" | "unstyled"
  >("default");

  const [pillInputSize, setPillInputSize] = React.useState<
    "sm" | "md" | "lg" | "xl"
  >("md");
  const [pillInputPillSize, setPillInputPillSize] = React.useState<
    "xs" | "sm" | "md" | "lg" | "xl"
  >("sm");
  const [pillInputStateValue, setPillInputStateValue] = React.useState<
    "enabled" | "focus" | "typing" | "filled" | "disabled" | "error"
  >("enabled");
  const [pillInputDisabled, setPillInputDisabled] = React.useState(false);
  const [pillInputReadonly, setPillInputReadonly] = React.useState(false);
  const [pillInputRequired, setPillInputRequired] = React.useState(false);
  const [pillInputMaxPills, setPillInputMaxPills] = React.useState(5);
  const [pillInputPills, setPillInputPills] = React.useState<string[]>([
    "Sample",
    "Tag",
    "Demo",
  ]);

  const [radioState, setRadioState] = React.useState<
    "default" | "filled" | "outline" | "light"
  >("default");
  const [stepperState, setStepperState] = React.useState<
    "xs" | "sm" | "md" | "lg" | "xl"
  >("md");
  const [kbdState, setKbdState] = React.useState<"sm" | "md" | "lg" | "xl">(
    "md"
  );

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<"xs" | "sm" | "md" | "lg" | "xl">(
    "md"
  );

  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerDirection, setDrawerDirection] = useState<
    "right" | "left" | "bottom" | "top"
  >("right");
  const [drawerShowScroll, setDrawerShowScroll] = useState(true);

  const navItems = [
    {
      id: "home",
      label: "Home",
      active: true,
      onClick: () => console.log("Home clicked"),
    },
    {
      id: "about",
      label: "About",
      onClick: () => console.log("About clicked"),
    },
    {
      id: "contact",
      label: "Contact",
      onClick: () => console.log("Contact clicked"),
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingBottom: "100px",
      }}
    >
      <SimpleTopNav
        brandName="PulseUI"
        brandTitle="Component Library"
        items={navItems}
        sx={{ width: "100%" }}
        versionSelector={{
          version: "1.6.0",
          versions: ["1.5.0", "1.6.0", "1.7.0"],
          onVersionChange: (version) =>
            console.log("Version changed to:", version),
          show: true,
        }}
      />

      {/* Theme and Brand Switchers */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "flex-start",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          margin: "16px",
          flexWrap: "wrap",
        }}
      >
        {/* Theme Switcher */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #eee",
            backgroundColor: "#f9f9f9",
            minWidth: "300px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#666" }}>Theme:</span>
          <ThemeSwitcher size="md" variant="light" />
          <span style={{ fontSize: "12px", color: "#999" }}>
            Click to toggle between light and dark modes
          </span>
        </div>

        {/* Brand Switcher */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #eee",
            backgroundColor: "#f9f9f9",
            minWidth: "300px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#666" }}>Brand:</span>
          <BrandSwitcher size="md" showVersion={true} showDescription={true} />
          <span style={{ fontSize: "12px", color: "#999" }}>
            Switch between different brand designs
          </span>
        </div>

        {/* Combined Switcher */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #eee",
            backgroundColor: "#f9f9f9",
            minWidth: "400px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#666" }}>Combined:</span>
          <ThemeAndBrandSwitcher
            size="sm"
            showThemeToggle={true}
            showBrandSwitcher={true}
            showBrandVersion={true}
            direction="horizontal"
          />
        </div>
      </div>

      {/* Current Brand Info */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          margin: "16px",
          backgroundColor: "#f0f8ff",
        }}
      >
        <Badge variant="filled">
          Current Brand:{" "}
          {isDefaultBrand
            ? "PulseUI (Default)"
            : currentBrand?.name || "Unknown"}
        </Badge>
        <Badge variant="outline">Brand ID: {brandId || "pulseui"}</Badge>
        <Badge variant="light">Theme: {themeName}</Badge>
        {currentBrand && (
          <Badge variant="dot">Version: v{currentBrand.version}</Badge>
        )}
      </div>

      {/* Component Variants */}
      <div style={{ marginTop: "48px", padding: "0 16px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Component Variants
        </Text>

        <Grid gutter="24px">
          <GridCol span={4}>
            <VariantSelector
              title="Button Variants"
              variants={[
                "filled",
                "subtle",
                "light",
                "outline",
                "white",
                "default",
              ]}
              defaultVariant="filled"
              label="Select Button Variant:"
              onVariantChange={(variant) =>
                console.log(`Button variant changed to: ${variant}`)
              }
            >
              <Button size="lg">Sample Button</Button>
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Badge Variants"
              variants={[
                "dot",
                "filled",
                "subtle",
                "light",
                "outline",
                "white",
                "default",
              ]}
              defaultVariant="dot"
              label="Select Badge Variant:"
              onVariantChange={(variant) =>
                console.log(`Badge variant changed to: ${variant}`)
              }
            >
              <Badge variant="dot">Dot Badge</Badge>
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Alert Variants"
              variants={["success", "info", "warning", "error"]}
              defaultVariant="success"
              label="Select Alert Variant:"
              onVariantChange={(variant) =>
                console.log(`Alert variant changed to: ${variant}`)
              }
            >
              <Alert variant="success">
                <strong>Success!</strong> Your action was completed
                successfully.
              </Alert>
            </VariantSelector>
          </GridCol>
        </Grid>
      </div>

      {/* Form Components */}
      <div style={{ marginTop: "48px", padding: "0 16px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Form Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={4}>
            <VariantSelector
              title="Checkbox States"
              variants={["default", "disabled", "error"]}
              defaultVariant="default"
              label="Select Checkbox State:"
              onVariantChange={(variant) => {
                setCheckboxState(variant);
                console.log(`Checkbox state changed to: ${variant}`);
              }}
            >
              <Checkbox
                label="Sample Checkbox"
                defaultChecked={true}
                disabled={checkboxState === "disabled"}
                error={
                  checkboxState === "error"
                    ? "This is an error message"
                    : undefined
                }
                onChange={(checked) => console.log("Checkbox:", checked)}
              />
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Switch Variants"
              variants={["default", "disabled", "small", "large"]}
              defaultVariant="default"
              label="Select Switch Variant:"
              onVariantChange={(variant) =>
                console.log(`Switch variant changed to: ${variant}`)
              }
            >
              <Switch
                label="Sample Switch"
                defaultChecked={false}
                onChange={(checked) => console.log("Switch:", checked)}
              />
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Select Variants"
              variants={["default", "disabled", "error", "success"]}
              defaultVariant="default"
              label="Select State:"
              onVariantChange={(variant) =>
                console.log(`Select state changed to: ${variant}`)
              }
            >
              <Select
                label="Sample Select"
                placeholder="Choose an option"
                options={[
                  { value: "react", label: "React" },
                  { value: "vue", label: "Vue.js" },
                  { value: "angular", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "nextjs", label: "Next.js" },
                ]}
                onChange={(value) => console.log("Select:", value)}
              />
            </VariantSelector>
          </GridCol>
        </Grid>
      </div>

      {/* Additional Components */}
      <div style={{ marginTop: "48px", padding: "0 16px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Additional Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={4}>
            <VariantSelector
              title="Input Component"
              variants={["default", "filled", "unstyled"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                setInputState(variant as "default" | "filled" | "unstyled")
              }
            >
              <Input
                placeholder="Enter text..."
                size="md"
                variant={inputState}
              />
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Textarea Component"
              variants={["default", "error", "disabled"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                setTextAreaState(variant as "default" | "error" | "disabled")
              }
            >
              <Textarea
                label="Message"
                placeholder="Enter your message..."
                rows={3}
                disabled={textAreaState === "disabled"}
                error={
                  textAreaState === "error"
                    ? "This field has an error"
                    : undefined
                }
              />
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Pill Component"
              variants={["default", "info", "success", "warning", "error"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                setPillState(
                  variant as
                    | "default"
                    | "info"
                    | "success"
                    | "warning"
                    | "error"
                )
              }
            >
              <Pill
                variant={pillState}
                size="md"
                onClose={() => console.log("Pill closed")}
              >
                Sample Pill
              </Pill>
            </VariantSelector>
          </GridCol>
        </Grid>
      </div>

      {/* Additional Components Section */}
      <div style={{ marginTop: "48px", padding: "0 16px" }}>
        <Text variant="xxl" style={{ marginBottom: "24px" }}>
          More Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={4}>
            <VariantSelector
              title="Card Component"
              variants={["default", "image-overlay"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                setCardState(variant as "default" | "image-overlay")
              }
            >
              <Card
                title="Sample Card"
                description="This is a sample card component with some content."
                buttonText="Learn More"
                buttonVariant="filled"
              />
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Tag Component"
              variants={["default", "teal", "selected", "mint"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                setTagState(variant as "default" | "teal" | "selected" | "mint")
              }
            >
              <Tag variant={tagState} size="md">
                Sample Tag
              </Tag>
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Avatar Component"
              variants={["primary", "secondary", "success", "warning"]}
              defaultVariant="primary"
              onVariantChange={(variant) =>
                setAvatarState(
                  variant as "primary" | "secondary" | "success" | "warning"
                )
              }
            >
              <Avatar
                variant={avatarState}
                size="md"
                type="initial"
                initials="JD"
              />
            </VariantSelector>
          </GridCol>
        </Grid>
      </div>

      {/* Even More Components Section */}
      <div style={{ marginTop: "48px", padding: "0 16px" }}>
        <Text variant="xxl" style={{ marginBottom: "24px" }}>
          Even More Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={4}>
            <VariantSelector
              title="Modal Component"
              variants={["default", "large", "small"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                setModalState(variant as "default" | "large" | "small")
              }
            >
              <div
                style={{
                  padding: "20px",
                  border: "1px solid var(--color-border-secondary)",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <Text
                  variant="md"
                  weight="semibold"
                  style={{ marginBottom: "8px" }}
                >
                  Modal Preview
                </Text>
                <Text variant="sm" color="secondary">
                  This is a preview of the modal component. Click to open the
                  actual modal.
                </Text>
              </div>
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Pagination Component"
              variants={["xs", "sm", "md", "lg", "xl"]}
              defaultVariant="md"
              onVariantChange={(variant) =>
                setPaginationState(variant as "xs" | "sm" | "md" | "lg" | "xl")
              }
            >
              <Pagination
                currentPage={1}
                totalPages={5}
                onPageChange={(page) => console.log("Page changed to:", page)}
                size={paginationState}
              />
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="PillInput Component"
              variants={["default", "filled", "unstyled"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                setPillInputState(variant as "default" | "filled" | "unstyled")
              }
            >
              <PillInput
                placeholder="Add tags..."
                size={pillInputSize}
                variant={pillInputState}
                pills={pillInputPills}
                pillSize={pillInputPillSize}
                state={pillInputStateValue}
                disabled={pillInputDisabled}
                readonly={pillInputReadonly}
                required={pillInputRequired}
                maxPills={pillInputMaxPills}
                onPillsChange={(pills) => setPillInputPills(pills)}
                onPillRemove={(pill, index) =>
                  setPillInputPills(
                    pillInputPills.filter((_, i) => i !== index)
                  )
                }
                onPillAdd={(pill) =>
                  setPillInputPills([...pillInputPills, pill])
                }
              />
            </VariantSelector>
          </GridCol>
        </Grid>
      </div>

      {/* Three More Components */}
      <div style={{ marginTop: "48px", padding: "0 16px" }}>
        <Text variant="xxl" weight="bold" style={{ marginBottom: "24px" }}>
          Three More Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={4}>
            <VariantSelector
              title="Radio Component"
              variants={["default", "filled", "outline", "light"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                setRadioState(
                  variant as "default" | "filled" | "outline" | "light"
                )
              }
            >
              <div>
                <Radio
                  size="md"
                  label="Option 1"
                  name="radio-group"
                  value="option1"
                  checked={false}
                  onChange={() => console.log("Option 1 selected")}
                />
              </div>
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Stepper Component"
              variants={["xs", "sm", "md", "lg", "xl"]}
              defaultVariant="md"
              onVariantChange={(variant) =>
                setStepperState(variant as "xs" | "sm" | "md" | "lg" | "xl")
              }
            >
              <Stepper
                size={stepperState}
                steps={[
                  {
                    id: "1",
                    content: "1",
                    label: "Step 1",
                    status: "complete",
                  },
                  { id: "2", content: "2", label: "Step 2", status: "active" },
                  { id: "3", content: "3", label: "Step 3", status: "default" },
                ]}
              />
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Kbd Component"
              variants={["sm", "md", "lg", "xl"]}
              defaultVariant="md"
              onVariantChange={(variant) =>
                setKbdState(variant as "sm" | "md" | "lg" | "xl")
              }
            >
              <Kbd size={kbdState}>Ctrl + K</Kbd>
            </VariantSelector>
          </GridCol>
        </Grid>
      </div>

      {/* Modal Component Section */}
      <div style={{ marginTop: "48px", padding: "0 16px" }}>
        <Text variant="xxl" weight="bold" style={{ marginBottom: "24px" }}>
          Modal Component with VariantSelector
        </Text>
        <Grid gutter="24px">
          <GridCol span={6}>
            <VariantSelector
              title="Modal Size Variants"
              variants={["xs", "sm", "md", "lg", "xl"]}
              defaultVariant="md"
              onVariantChange={(variant) =>
                setModalSize(variant as "xs" | "sm" | "md" | "lg" | "xl")
              }
            >
              <div
                style={{
                  padding: "20px",
                  border: "1px solid var(--color-border-secondary)",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-surface)",
                  textAlign: "center",
                }}
              >
                <Text
                  variant="md"
                  weight="semibold"
                  style={{ marginBottom: "8px" }}
                >
                  Modal Size: {modalSize.toUpperCase()}
                </Text>
                <Button
                  variant="filled"
                  size="md"
                  onClick={() => setIsModalOpen(true)}
                >
                  View Modal
                </Button>
              </div>
            </VariantSelector>
          </GridCol>
          <VariantSelector
            title="Drawer Scroll Variants"
            variants={["true", "false"]}
            defaultVariant="true"
            onVariantChange={(variant) =>
              setDrawerShowScroll(variant === "true")
            }
          >
            <div
              style={{
                padding: "20px",
                border: "1px solid var(--color-border-secondary)",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-surface)",
                textAlign: "center",
              }}
            >
              <Text
                variant="md"
                weight="semibold"
                style={{ marginBottom: "8px" }}
              >
                Scroll: {drawerShowScroll ? "Enabled" : "Disabled"}
              </Text>
              <Text
                variant="sm"
                color="secondary"
                style={{ marginBottom: "16px" }}
              >
                Toggle scroll behavior for the drawer content
              </Text>
            </div>
          </VariantSelector>
        </Grid>
      </div>

      {/* Modal Component */}
      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Sample Modal"
        size={modalSize}
        showFooter={true}
        footerVariant="primary"
        primaryText="Confirm"
        secondaryText="Cancel"
        onPrimaryClick={() => {
          console.log("Primary button clicked");
          setIsModalOpen(false);
        }}
        onSecondaryClick={() => setIsModalOpen(false)}
        showClose={true}
        closeOnBackdropClick={true}
        closeOnEscape={true}
      >
        <div style={{ padding: "16px 0" }}>
          <Text variant="md" style={{ marginBottom: "16px" }}>
            Modal Content
          </Text>
          <Text variant="sm" color="secondary" style={{ marginBottom: "16px" }}>
            This modal demonstrates the VariantSelector integration. You can
            change:
          </Text>
          <ul
            style={{ marginLeft: "20px", color: "var(--color-text-secondary)" }}
          >
            <li>Modal size: {modalSize}</li>
            <li>Close behavior</li>
          </ul>
        </div>
      </Modal>

      {/* Drawer Component */}
      <Drawer
        show={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Sample Drawer"
        direction={drawerDirection}
        showScroll={drawerShowScroll}
        showClose={true}
        closeOnBackdropClick={true}
        closeOnEscape={true}
      >
        <div style={{ padding: "16px" }}>
          <Text variant="lg" weight="semibold" style={{ marginBottom: "16px" }}>
            Drawer Content
          </Text>
          <Text variant="md" style={{ marginBottom: "16px" }}>
            This drawer demonstrates the VariantSelector integration. You can
            change:
          </Text>
          <ul
            style={{
              marginLeft: "20px",
              color: "var(--color-text-secondary)",
              marginBottom: "16px",
            }}
          >
            <li>Drawer direction: {drawerDirection}</li>
            <li>
              Scroll behavior: {drawerShowScroll ? "Enabled" : "Disabled"}
            </li>
            <li>Close behavior</li>
          </ul>

          {/* Add some content to demonstrate scrolling */}
          {drawerShowScroll && (
            <div style={{ marginTop: "24px" }}>
              <Text
                variant="md"
                weight="semibold"
                style={{ marginBottom: "12px" }}
              >
                Scrollable Content Demo
              </Text>
              {Array.from({ length: 15 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px",
                    marginBottom: "8px",
                    backgroundColor: "var(--color-surface-secondary)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-border-tertiary)",
                  }}
                >
                  <Text variant="sm">Content item {i + 1}</Text>
                  <Text variant="xs" color="secondary">
                    This demonstrates the scroll behavior when enabled
                  </Text>
                </div>
              ))}
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
}

function App() {
  return (
    <PulseUIProvider
      defaultTheme="default-light"
      defaultBrand={null}
      availableBrands={[
        {
          id: "ibm",
          name: "IBM",
          version: "1.0.0",
          description:
            "IBM Design Language - Carbon Design System inspired tokens",
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
      ]}
    >
      <AppContent />
    </PulseUIProvider>
  );
}

export default App;
