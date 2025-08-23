import React, { useState } from "react";
import {
  // Core Components
  Button,
  TextInput,
  PasswordInput,
  Input,
  Textarea,
  PinInput,
  PillInput,
  Autocomplete,
  Radio,
  Switch,
  Select,
  Checkbox,
  Alert,
  Pagination,
  Carousel,

  // Animation Component
  Animation,

  // Navigation Components
  SimpleTopNav,
  VersionSelector,
  ThemeSwitcher,
  BrandSwitcher,
  ThemeAndBrandSwitcher,
  LeftDrawer,
  Drawer,
  Modal,
  ModalFooter,
  ComponentDisplay,
  ComponentBox,
  LoginForm,

  // Stepper Components
  StepperIcon,
  StepperItem,
  Stepper,

  // Display Components
  Text,
  Badge,
  Card,
  ContentCard,
  Avatar,
  Image,
  Pill,
  FileUpload,
  ProfileCard,
  UpdateNotification,
  Kbd,
  Tag,

  // Accordion Components
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionList,

  // Action Components
  ActionButton,
  VariantSelector,
  TableOfContents,

  // Tabs Components
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
  useTabs,
  SingleTab,

  // Layout Components
  Container,
  Grid,
  GridCol,
  Group,
  Stack,

  // Calendar Components
  Calendar,
  CalendarDate,
  CalendarTitle,
  CalendarYear,
  CalendarDecade,
  DatePicker,

  // Icon Component
  Icon,

  // Utilities
  mergeSxWithStyles,
  combineClassNames,

  // Hooks
  useBreakpoint,

  // Icons
  InfoOutlined,
  CheckCircle,
  Warning,
  ErrorOutline,
  Close,
  ArrowBack,
  ArrowForward,
  MoreHoriz,
} from "./index";

function AppContent() {
  // Initialize brand and theme on component mount
  React.useEffect(() => {
    const root = document.documentElement;

    // Initialize brand
    const savedBrand = localStorage.getItem("pulseui-brand") || "default";
    root.setAttribute("data-brand", savedBrand);

    // Initialize theme and mode
    const savedTheme = localStorage.getItem("pulseui-theme") || "light";
    root.setAttribute("data-theme", savedTheme);
    root.setAttribute("data-mode", savedTheme);
  }, []);

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
      id: "components",
      label: "Components",
      onClick: () => console.log("Component clicked"),
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
        useDynamicBrandLogo={true}
        brandLogoSize="md"
        showBrandText={false}
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
        brandSwitcher={{
          show: true,
          size: "sm",
          showDescription: false,
        }}
      />

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
              <Button size="md">Button</Button>
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
                label="Checkbox"
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
                label="Switch"
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

      {/* New Components Section - Including Fixed PinInput */}
      <div style={{ marginTop: "48px", padding: "0 16px" }}>
        <Text variant="xxl" weight="bold" style={{ marginBottom: "24px" }}>
          New Components & Fixed PinInput
        </Text>
        <Grid gutter="24px">
          <GridCol span={4}>
            <VariantSelector
              title="PinInput Component (Fixed)"
              variants={["default", "error", "disabled"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                console.log(`PinInput variant changed to: ${variant}`)
              }
            >
              <PinInput
                label="Security PIN"
                placeholder="0"
                helperText="Fixed PinInput with '0' placeholder and accessibility features"
                length={4}
                required={true}
              />
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Carousel Component"
              variants={["default", "compact", "imageOnly"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                console.log(`Carousel variant changed to: ${variant}`)
              }
            >
              <Carousel
                ariaLabel="Sample carousel"
                enableKeyboard={true}
                autoPlay={0}
                useCards={true}
                imageOnly={false}
                size="display"
                compact={false}
              >
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "var(--color-surface-secondary)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <Text variant="md" weight="semibold">
                    Slide 1
                  </Text>
                  <Text variant="sm" color="secondary">
                    Carousel content
                  </Text>
                </div>
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "var(--color-surface-secondary)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <Text variant="md" weight="semibold">
                    Slide 2
                  </Text>
                  <Text variant="sm" color="secondary">
                    More content
                  </Text>
                </div>
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "var(--color-surface-secondary)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <Text variant="md" weight="semibold">
                    Slide 3
                  </Text>
                  <Text variant="sm" color="secondary">
                    Final slide
                  </Text>
                </div>
              </Carousel>
            </VariantSelector>
          </GridCol>
          <GridCol span={4}>
            <VariantSelector
              title="Accordion Component"
              variants={["default", "bordered", "separated"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                console.log(`Accordion variant changed to: ${variant}`)
              }
            >
              <Accordion size="display" allowMultiple={false}>
                <AccordionItem id="item-1">
                  <AccordionHeader itemId="item-1">
                    What is PulseUI?
                  </AccordionHeader>
                  <AccordionContent itemId="item-1">
                    <Text variant="sm">
                      PulseUI is a comprehensive design system and component
                      library built with React and TypeScript.
                    </Text>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem id="item-2">
                  <AccordionHeader itemId="item-2">
                    How to customize themes?
                  </AccordionHeader>
                  <AccordionContent itemId="item-2">
                    <Text variant="sm">
                      Use the brand switcher in the navigation to switch between
                      different themes like MedDash, FitCore, and LabSync.
                    </Text>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem id="item-3">
                  <AccordionHeader itemId="item-3">
                    Documentation
                  </AccordionHeader>
                  <AccordionContent itemId="item-3">
                    <Text variant="sm">
                      All components include comprehensive Storybook
                      documentation with examples and props.
                    </Text>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
          <GridCol span={4}>
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
          <GridCol span={4}>
            <VariantSelector
              title="Drawer Scroll Variants"
              variants={["Right", "Left", "Top", "Bottom"]}
              defaultVariant="Right"
              onVariantChange={(variant) =>
                setDrawerDirection(
                  variant as "right" | "left" | "top" | "bottom"
                )
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
                <Button
                  variant="filled"
                  size="md"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  View Drawer
                </Button>
              </div>
            </VariantSelector>
          </GridCol>
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
  return <AppContent />;
}

export default App;
