"use client";

import {
  Button,
  Card,
  Text,
  Input,
  TextInput,
  Alert,
  Badge,
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
  useTheme,
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

  return (
    <div>
      {/* Navigation */}
      <SimpleTopNav
        brandName="Pulse UI Test"
        brandTitle="Next.js Compatibility"
        items={navItems}
        className="mb-8"
      />

      <Container size="lg" sx={{ paddingY: "xl" }}>
        <Stack gap="xl">
          {/* Header */}
          <div>
            <Text variant="xl" sx={{ marginBottom: "sm" }}>
              Pulse UI Next.js Compatibility Test
            </Text>
            <Text variant="md" color="muted">
              Testing all components with Next.js 15
            </Text>
          </div>

          {/* Buttons */}
          <div>
            <Text variant="lg" sx={{ marginBottom: "md" }}>
              Buttons
            </Text>
            <Group gap="md">
              <Button variant="filled">Primary Button</Button>
              <Button variant="outline">Secondary Button</Button>
              <Button variant="subtle">Success Button</Button>
              <Button variant="light">Warning Button</Button>
            </Group>
          </div>

          {/* Cards */}
          <div>
            <Text variant="lg" sx={{ marginBottom: "md" }}>
              Cards
            </Text>
            <Grid columns={12} gutter="md">
              <GridCol span={4}>
                <Card
                  title="Card 1"
                  description="This is a sample card"
                  buttonText="Learn More"
                />
              </GridCol>
              <GridCol span={4}>
                <Card
                  title="Card 2"
                  description="Another sample card"
                  buttonText="View Details"
                />
              </GridCol>
              <GridCol span={4}>
                <Card
                  title="Card 3"
                  description="Third sample card"
                  buttonText="Get Started"
                />
              </GridCol>
            </Grid>
          </div>

          {/* Form Elements */}
          <div>
            <Text variant="lg" sx={{ marginBottom: "md" }}>
              Form Elements
            </Text>
            <Stack gap="md">
              <TextInput
                label="Email"
                placeholder="Enter your email"
                required
              />
              <Input placeholder="Simple input" />
              <Switch label="Enable notifications" />
              <Radio label="Accept terms" />
            </Stack>
          </div>

          {/* Alerts */}
          <div>
            <Text variant="lg" sx={{ marginBottom: "md" }}>
              Alerts
            </Text>
            <Stack gap="sm">
              <Alert variant="info" title="Information">
                This is an informational alert.
              </Alert>
              <Alert variant="success" title="Success">
                Operation completed successfully.
              </Alert>
              <Alert variant="warning" title="Warning">
                Please review your input.
              </Alert>
              <Alert variant="error" title="Error">
                Something went wrong.
              </Alert>
            </Stack>
          </div>

          {/* Tabs */}
          <div>
            <Text variant="lg" sx={{ marginBottom: "md" }}>
              Tabs
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
                  {item.content}
                </TabsPanel>
              ))}
            </Tabs>
          </div>

          {/* Stepper */}
          <div>
            <Text variant="lg" sx={{ marginBottom: "md" }}>
              Stepper
            </Text>
            <Stepper
              steps={[
                {
                  id: "step1",
                  label: "Step 1",
                  status: "complete",
                  content: "Step 1 content",
                },
                {
                  id: "step2",
                  label: "Step 2",
                  status: "active",
                  content: "Step 2 content",
                },
                {
                  id: "step3",
                  label: "Step 3",
                  status: "default",
                  content: "Step 3 content",
                },
              ]}
            />
          </div>

          {/* Pagination */}
          <div>
            <Text variant="lg" sx={{ marginBottom: "md" }}>
              Pagination
            </Text>
            <Pagination currentPage={1} totalPages={10} />
          </div>

          {/* Theme Info */}
          <div>
            <Text variant="lg" sx={{ marginBottom: "md" }}>
              Theme Information
            </Text>
            <Card>
              <Text variant="md">Current Theme: {theme.currentTheme}</Text>
              <Text variant="md">Current Mode: {theme.currentMode}</Text>
            </Card>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
