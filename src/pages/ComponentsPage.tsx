import React, { useEffect, useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import {
  // Core Components
  Button,
  Input,
  Textarea,
  PinInput,
  PillInput,
  Radio,
  Switch,
  Select,
  Checkbox,
  Alert,
  Pagination,
  ProgressBar,
  Carousel,

  // Display Components
  Text,
  Badge,
  Card,
  Avatar,
  Pill,
  Kbd,
  Tag,

  // Accordion Components
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,

  // Action Components
  VariantSelector,

  // Stepper Components
  Stepper,

  // Layout Components
  Grid,
  GridCol,

  // Modal and Drawer Components
  Modal,
  Drawer,

  // Date and Input Components
  Calendar,
  PasswordInput,

  // Interactive Components
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
  FileUpload,
} from "../index";

export function ComponentsPage() {
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

  const { isMobile, isTablet } = useBreakpoint();
  let span = 4; // default 3 cols
  if (isMobile) span = 12; // 1 col
  else if (isTablet) span = 6;

  const [radioState, setRadioState] = React.useState<
    "default" | "filled" | "outline" | "light"
  >("default");
  const [stepperState, setStepperState] = useState<
    "xs" | "sm" | "md" | "lg" | "xl"
  >(
    isMobile ? "xs" : "md" // ✅ default state respects mobile
  );
  const [kbdState, setKbdState] = React.useState<"sm" | "md" | "lg" | "xl">(
    "md"
  );
  useEffect(() => {
    setStepperState(isMobile ? "xs" : "md");
  }, [isMobile]);
  useEffect(() => {
    setPaginationState(isMobile ? "xs" : "md");
  }, [isMobile]);

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

  // Calendar state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [calendarView, setCalendarView] = useState<"month" | "year" | "decade">(
    "month"
  );

  // Password input state
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVariant, setPasswordVariant] = useState<
    "default" | "with-toggle" | "with-strength"
  >("default");

  // Progress bar state
  const [progressValue, setProgressValue] = useState(65);
  const [progressVariant, setProgressVariant] = useState<
    "primary" | "success" | "warning" | "error" | "info"
  >("primary");
  const [progressSize, setProgressSize] = useState<
    "xs" | "sm" | "md" | "lg" | "xl"
  >("md");

  // Tabs state
  const [activeTab, setActiveTab] = useState("tab1");
  const [tabVariant, setTabVariant] = useState<
    "horizontal" | "vertical" | "pills"
  >("horizontal");

  // FileUpload state
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  return (
    <>
      {/* Component Variants */}
      <div style={{ marginTop: "150px", marginBottom: "100px" }}>
        <Text as="h1" variant="xxl" weight="bold" sx={{ marginBottom: "24px" }}>
          PulseUI Components
        </Text>
        <Text variant="lg" color="secondary" sx={{ marginBottom: "32px" }}>
          Explore all the available components in the PulseUI design system.
          Each component is fully interactive and demonstrates the various
          states and variants available.
        </Text>

        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Component Variants
        </Text>

        <Grid gutter="24px">
          <GridCol span={span}>
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
          <GridCol span={span}>
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
          <GridCol span={span}>
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
      <div style={{ marginTop: "48px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Form Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={span}>
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
          <GridCol span={span}>
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
          <GridCol span={span}>
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
      <div style={{ marginTop: "48px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Input Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={span}>
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
          <GridCol span={span}>
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
          <GridCol span={span}>
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

      {/* Display Components Section */}
      <div style={{ marginTop: "48px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Display Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={span}>
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
          <GridCol span={span}>
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
          <GridCol span={span}>
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

      {/* Interactive Components Section */}
      <div style={{ marginTop: "48px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Interactive Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={span}>
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
                  textAlign: "center",
                }}
              >
                <Text
                  variant="md"
                  weight="semibold"
                  style={{ marginBottom: "8px" }}
                >
                  Modal Preview
                </Text>
                <Text
                  variant="sm"
                  color="secondary"
                  style={{ marginBottom: "16px" }}
                >
                  Click to open the modal component.
                </Text>
                <Button
                  variant="filled"
                  size="md"
                  onClick={() => setIsModalOpen(true)}
                >
                  Open Modal
                </Button>
              </div>
            </VariantSelector>
          </GridCol>
          <GridCol span={span}>
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
          <GridCol span={span}>
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
          <GridCol span={span}>
            <VariantSelector
              title="Progress Bar Component"
              variants={["primary", "success", "warning", "error", "info"]}
              defaultVariant="primary"
              label="Select Progress Variant:"
              onVariantChange={(variant) => {
                setProgressVariant(
                  variant as
                    | "primary"
                    | "success"
                    | "warning"
                    | "error"
                    | "info"
                );
                console.log(`Progress variant changed to: ${variant}`);
                // Animate progress when variant changes
                setProgressValue(Math.floor(Math.random() * 100) + 1);
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <ProgressBar
                  value={progressValue}
                  variant={progressVariant}
                  size={progressSize}
                  showLabel={true}
                  striped={true}
                  animated={true}
                />
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setProgressValue(Math.max(0, progressValue - 10))
                    }
                  >
                    -10%
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setProgressValue(Math.min(100, progressValue + 10))
                    }
                  >
                    +10%
                  </Button>
                  <Button
                    size="sm"
                    variant="filled"
                    onClick={() =>
                      setProgressValue(Math.floor(Math.random() * 100) + 1)
                    }
                  >
                    Random
                  </Button>
                </div>
              </div>
            </VariantSelector>
          </GridCol>
          {/* Tabs Component - Hidden on mobile */}
          {!isMobile && (
            <GridCol span={span}>
              <VariantSelector
                title="Tabs Component"
                variants={["horizontal", "vertical", "pills"]}
                defaultVariant="horizontal"
                label="Select Tab Style:"
                onVariantChange={(variant) => {
                  setTabVariant(variant as "horizontal" | "vertical" | "pills");
                  console.log(`Tab variant changed to: ${variant}`);
                  setActiveTab("tab1"); // Reset to first tab when changing variants
                }}
              >
                <Tabs
                  value={activeTab}
                  onChange={(value) => setActiveTab(value || "tab1")}
                  orientation={
                    tabVariant === "vertical" ? "vertical" : "horizontal"
                  }
                  sx={{
                    "& .tabsList": {
                      gap: "4px",
                      ...(tabVariant === "vertical" && {
                        flexDirection: "column",
                        width: "120px",
                      }),
                    },
                    "& .tab": {
                      padding: "6px 12px",
                      fontSize: "0.875rem",
                      minHeight: "32px",
                      minWidth: "auto",
                      ...(tabVariant === "pills" && {
                        borderRadius: "16px",
                        backgroundColor: "var(--color-surface-secondary)",
                        border: "none",
                        "&.active": {
                          backgroundColor: "var(--color-primary)",
                          color: "white",
                        },
                      }),
                      ...(tabVariant === "vertical" && {
                        width: "100%",
                        textAlign: "left",
                      }),
                    },
                    "& .tabsPanel": {
                      padding: "12px",
                      minHeight: "80px",
                      ...(tabVariant === "vertical" && {
                        flex: 1,
                      }),
                    },
                    ...(tabVariant === "vertical" && {
                      display: "flex",
                      gap: "16px",
                    }),
                  }}
                >
                  <TabsList>
                    <TabsTab
                      value="tab1"
                      placeholder="Overview"
                      variant={tabVariant === "pills" ? "pill" : "default"}
                    />
                    <TabsTab
                      value="tab2"
                      placeholder="Features"
                      variant={tabVariant === "pills" ? "pill" : "default"}
                    />
                    <TabsTab
                      value="tab3"
                      placeholder="Settings"
                      variant={tabVariant === "pills" ? "pill" : "default"}
                    />
                  </TabsList>
                  <TabsPanel value="tab1">
                    <div style={{ padding: "12px" }}>
                      <Text
                        variant="sm"
                        weight="semibold"
                        style={{ marginBottom: "6px" }}
                      >
                        Overview Tab
                      </Text>
                      <Text variant="xs" color="secondary">
                        This is the overview content. Tabs provide a way to
                        organize content into separate views.
                      </Text>
                    </div>
                  </TabsPanel>
                  <TabsPanel value="tab2">
                    <div style={{ padding: "12px" }}>
                      <Text
                        variant="sm"
                        weight="semibold"
                        style={{ marginBottom: "6px" }}
                      >
                        Features Tab
                      </Text>
                      <Text variant="xs" color="secondary">
                        Interactive tab switching, keyboard navigation, and
                        accessibility support.
                      </Text>
                    </div>
                  </TabsPanel>
                  <TabsPanel value="tab3">
                    <div style={{ padding: "12px" }}>
                      <Text
                        variant="sm"
                        weight="semibold"
                        style={{ marginBottom: "6px" }}
                      >
                        Settings Tab
                      </Text>
                      <Text variant="xs" color="secondary">
                        Configure your preferences and options here.
                      </Text>
                    </div>
                  </TabsPanel>
                </Tabs>
              </VariantSelector>
            </GridCol>
          )}
          {/* FileUpload Component - Hidden on mobile */}
          {!isMobile && (
            <GridCol span={span}>
              <VariantSelector
                title="File Upload Component"
                variants={["default", "drag-drop", "multiple"]}
                defaultVariant="default"
                label="Select Upload Type:"
                onVariantChange={(variant) => {
                  console.log(`FileUpload variant changed to: ${variant}`);
                  setUploadedFiles([]); // Clear uploaded files when changing variants
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "350px",
                      margin: "0 auto",
                    }}
                  >
                    <FileUpload
                      acceptedFileTypes={["jpg", "png", "pdf", "txt"]}
                      maxFileSize={5 * 1024 * 1024} // 5MB
                      maxFiles={3}
                      multiple={true}
                      uploadText="Drop files here"
                      browseText="Choose Files"
                      showFileList={true}
                      onUpload={(files) => {
                        setUploadedFiles(files);
                        console.log(
                          "Files uploaded:",
                          files.map((f) => f.name)
                        );
                      }}
                      sx={{
                        width: "100%",
                        maxWidth: "100%",
                        padding: "12px",
                        "& .fileUpload": {
                          maxWidth: "100%",
                          width: "100%",
                          padding: "16px",
                        },
                        "& .dropZone": {
                          minHeight: "120px",
                          padding: "16px",
                        },
                        "& .header": {
                          gap: "4px",
                          marginBottom: "8px",
                        },
                        "& .uploadIcon": {
                          marginBottom: "4px",
                        },
                      }}
                    />
                  </div>
                  {uploadedFiles.length > 0 && (
                    <div
                      style={{
                        marginTop: "12px",
                        padding: "8px",
                        backgroundColor: "var(--color-surface-secondary)",
                        borderRadius: "var(--radius-sm)",
                        maxWidth: "350px",
                        margin: "12px auto 0 auto",
                        wordBreak: "break-word",
                      }}
                    >
                      <Text variant="xs" color="secondary">
                        Uploaded: {uploadedFiles.map((f) => f.name).join(", ")}
                      </Text>
                    </div>
                  )}
                </div>
              </VariantSelector>
            </GridCol>
          )}
        </Grid>
      </div>

      {/* Advanced Components */}
      <div style={{ marginTop: "48px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Advanced Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={span}>
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
          <GridCol span={span}>
            <VariantSelector
              title="Stepper Component"
              variants={["xs", "sm", "md", "lg", "xl"]}
              defaultVariant={stepperState}
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
          <GridCol span={span}>
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

      {/* Special Components */}
      <div style={{ marginTop: "48px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Special Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={span}>
            <VariantSelector
              title="PinInput Component"
              variants={["default", "error", "disabled"]}
              defaultVariant="default"
              onVariantChange={(variant) =>
                console.log(`PinInput variant changed to: ${variant}`)
              }
            >
              <PinInput
                label="Security PIN"
                placeholder="0"
                helperText="Enter your 4-digit PIN"
                length={4}
                required={true}
                sx={{ alignItems: "center", justifyContent: "center" }}
              />
            </VariantSelector>
          </GridCol>
          <GridCol span={span}>
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
              </Carousel>
            </VariantSelector>
          </GridCol>
          <GridCol span={span}>
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
              </Accordion>
            </VariantSelector>
          </GridCol>
        </Grid>
      </div>

      {/* Drawer Demo */}
      <div style={{ marginTop: "48px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Overlay Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={span}>
            <VariantSelector
              title="Drawer Direction"
              variants={["Right", "Left", "Top", "Bottom"]}
              defaultVariant="Right"
              onVariantChange={(variant) =>
                setDrawerDirection(
                  variant.toLowerCase() as "right" | "left" | "top" | "bottom"
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
                  Drawer Direction: {drawerDirection}
                </Text>
                <Button
                  variant="filled"
                  size="md"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  Open Drawer
                </Button>
              </div>
            </VariantSelector>
          </GridCol>
        </Grid>
      </div>

      {/* Date and Input Components */}
      <div style={{ marginTop: "48px" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Date and Input Components
        </Text>
        <Grid gutter="24px">
          <GridCol span={span}>
            <VariantSelector
              title="Calendar Component"
              variants={["month", "year", "decade"]}
              defaultVariant="month"
              label="Select Calendar View:"
              onVariantChange={(variant) => {
                setCalendarView(variant as "month" | "year" | "decade");
                console.log(`Calendar view changed to: ${variant}`);
              }}
            >
              <div
                style={{
                  padding: "12px",
                  border: "1px solid var(--color-border-secondary)",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  minHeight: "300px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "280px",
                    width: "100%",
                  }}
                >
                  <Calendar
                    view={calendarView}
                    selectedDate={selectedDate}
                    onDateSelect={(date) => {
                      setSelectedDate(date);
                      console.log("Date selected:", date);
                    }}
                    onViewChange={(view) => {
                      setCalendarView(view);
                      console.log("View changed:", view);
                    }}
                    size={isMobile ? "xs" : "sm"}
                    showNavigation={true}
                    showDayLabels={true}
                    showOutsideDates={true}
                    sx={{
                      margin: "0 auto",
                      maxWidth: "280px",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </VariantSelector>
          </GridCol>
          <GridCol span={span}>
            <VariantSelector
              title="Password Input Component"
              variants={["default", "with-toggle", "with-strength"]}
              defaultVariant="default"
              label="Select Password Variant:"
              onVariantChange={(variant) => {
                setPasswordVariant(
                  variant as "default" | "with-toggle" | "with-strength"
                );
                console.log(`Password variant changed to: ${variant}`);
                // Reset password when switching variants to show strength meter working
                if (variant === "with-strength") {
                  setPassword("");
                }
              }}
            >
              <PasswordInput
                label="Password"
                placeholder={
                  passwordVariant === "with-strength"
                    ? "Enter password to see strength"
                    : "Enter your password"
                }
                value={password}
                onChange={setPassword}
                passwordVisible={passwordVisible}
                onPasswordVisibilityChange={setPasswordVisible}
                showPasswordToggle={passwordVariant !== "default"}
                showStrengthMeter={passwordVariant === "with-strength"}
                required={true}
              />
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
            This modal demonstrates the component functionality with different
            sizes.
          </Text>
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
            This drawer demonstrates the component functionality with different
            directions.
          </Text>
          <Text variant="sm" color="secondary">
            Direction: {drawerDirection}
          </Text>
        </div>
      </Drawer>
    </>
  );
}
