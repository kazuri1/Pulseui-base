"use client";

import {
  Button,
  Card,
  Text,
  Input,
  TextInput,
  Alert,
  Badge,
  Avatar,
  Switch,
  Radio,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
  SimpleTopNav,
  Stepper,
  StepperItem,
  StepperIcon,
  Pagination,
  TableOfContents,
  Container,
  Grid,
  GridCol,
  Stack,
  Group,
  Image,
  Pill,
  ActionButton,
  Textarea,
  PinInput,
  PasswordInput,
  Autocomplete,
  PillInput,
  Calendar,
  Icon,
  useTheme
} from "pulseui-base";

export default function Home() {
  const theme = useTheme();

  const navItems = [
    { id: "home", label: "Home", active: true },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const tabsItems = [
    { value: "tab1", label: "Tab 1", content: "Content for tab 1" },
    { value: "tab2", label: "Tab 2", content: "Content for tab 2" },
    { value: "tab3", label: "Tab 3", content: "Content for tab 3" },
  ];

  const tocItems = [
    { id: "section1", label: "Section 1", level: 1 },
    { id: "section2", label: "Section 2", level: 1 },
    { id: "subsection2a", label: "Subsection 2a", level: 2 },
    { id: "section3", label: "Section 3", level: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <SimpleTopNav
        brandName="Pulse UI Test"
        brandTitle="Next.js Compatibility Test"
        items={navItems}
      />

      <Container size="lg" py="xl">
        <Stack gap="xl">
          {/* Header */}
          <div>
            <Text variant="h1" mb="sm">
              Pulse UI Next.js Compatibility Test
            </Text>
            <Text variant="body" color="muted">
              Testing all components for Next.js SSR compatibility
            </Text>
          </div>

          {/* Basic Components */}
          <Card>
            <Text variant="h2" mb="md">
              Basic Components
            </Text>
            <Group gap="md">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Badge variant="success">Success Badge</Badge>
              <Badge variant="warning">Warning Badge</Badge>
            </Group>
          </Card>

          {/* Form Components */}
          <Card>
            <Text variant="h2" mb="md">
              Form Components
            </Text>
            <Grid cols={2} gap="md">
              <GridCol>
                <TextInput
                  label="Text Input"
                  placeholder="Enter text..."
                  required
                />
              </GridCol>
              <GridCol>
                <Input
                  label="Input"
                  placeholder="Enter input..."
                  required
                />
              </GridCol>
              <GridCol>
                <PasswordInput
                  label="Password Input"
                  placeholder="Enter password..."
                  required
                />
              </GridCol>
              <GridCol>
                <Textarea
                  label="Textarea"
                  placeholder="Enter text..."
                  rows={3}
                />
              </GridCol>
            </Grid>
          </Card>

          {/* Interactive Components */}
          <Card>
            <Text variant="h2" mb="md">
              Interactive Components
            </Text>
            <Group gap="md">
              <Switch label="Toggle Switch" />
              <Radio
                name="test-radio"
                label="Radio Option 1"
                value="option1"
              />
              <Radio
                name="test-radio"
                label="Radio Option 2"
                value="option2"
              />
            </Group>
          </Card>

          {/* Tabs Component */}
          <Card>
            <Text variant="h2" mb="md">
              Tabs Component
            </Text>
            <Tabs defaultValue="tab1">
              <TabsList>
                {tabsItems.map((item) => (
                  <TabsTab key={item.value} value={item.value}>
                    {item.label}
                  </TabsTab>
                ))}
              </TabsList>
              {tabsItems.map((item) => (
                <TabsPanel key={item.value} value={item.value}>
                  <Text>{item.content}</Text>
                </TabsPanel>
              ))}
            </Tabs>
          </Card>

          {/* Stepper Component */}
          <Card>
            <Text variant="h2" mb="md">
              Stepper Component
            </Text>
            <Stepper active={1}>
              <StepperItem label="Step 1" description="First step">
                <StepperIcon>1</StepperIcon>
              </StepperItem>
              <StepperItem label="Step 2" description="Second step">
                <StepperIcon>2</StepperIcon>
              </StepperItem>
              <StepperItem label="Step 3" description="Third step">
                <StepperIcon>3</StepperIcon>
              </StepperItem>
            </Stepper>
          </Card>

          {/* Layout Components */}
          <Card>
            <Text variant="h2" mb="md">
              Layout Components
            </Text>
            <Grid cols={3} gap="md">
              <GridCol>
                <Card>
                  <Text variant="h3">Grid Column 1</Text>
                  <Text>This is content in the first grid column.</Text>
                </Card>
              </GridCol>
              <GridCol>
                <Card>
                  <Text variant="h3">Grid Column 2</Text>
                  <Text>This is content in the second grid column.</Text>
                </Card>
              </GridCol>
              <GridCol>
                <Card>
                  <Text variant="h3">Grid Column 3</Text>
                  <Text>This is content in the third grid column.</Text>
                </Card>
              </GridCol>
            </Grid>
          </Card>

          {/* Alert Components */}
          <Card>
            <Text variant="h2" mb="md">
              Alert Components
            </Text>
            <Stack gap="sm">
              <Alert variant="success" title="Success Alert">
                This is a success alert message.
              </Alert>
              <Alert variant="warning" title="Warning Alert">
                This is a warning alert message.
              </Alert>
              <Alert variant="error" title="Error Alert">
                This is an error alert message.
              </Alert>
              <Alert variant="info" title="Info Alert">
                This is an info alert message.
              </Alert>
            </Stack>
          </Card>

          {/* Table of Contents */}
          <Card>
            <Text variant="h2" mb="md">
              Table of Contents
            </Text>
            <TableOfContents items={tocItems} />
          </Card>

          {/* Pagination */}
          <Card>
            <Text variant="h2" mb="md">
              Pagination
            </Text>
            <Pagination total={100} page={1} />
          </Card>

          {/* Theme Info */}
          <Card>
            <Text variant="h2" mb="md">
              Theme Information
            </Text>
            <Text>
              Current Theme: {theme?.currentTheme || "default"}
            </Text>
            <Text>
              Current Mode: {theme?.currentMode || "light"}
            </Text>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}
