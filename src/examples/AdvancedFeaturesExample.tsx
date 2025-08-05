import React, { useState } from "react";
import {
  Button,
  Card,
  Text,
  Stack,
  Grid,
  Badge,
  Container,
} from "../components/atoms";
import {
  Animation,
  useAnimation,
  useStaggerAnimation,
} from "../components/Animation";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";
import { ErrorBoundary } from "../utils/errorBoundary";
import {
  usePerformanceMonitor,
  useDebounce,
} from "../utils/performanceOptimizer";

// Example of advanced theming
const CustomThemeExample: React.FC = () => {
  const { currentTheme, setTheme, addCustomTheme } = useTheme();

  const handleAddCustomTheme = () => {
    addCustomTheme("custom", {
      description: "Custom theme with custom colors",
      mode: {
        light: {
          primary: { type: "color", value: "#6366f1" },
          secondary: { type: "color", value: "#f59e0b" },
          accent: { type: "color", value: "#10b981" },
          background: { type: "color", value: "#ffffff" },
          text: { type: "color", value: "#1f2937" },
        },
        dark: {
          primary: { type: "color", value: "#818cf8" },
          secondary: { type: "color", value: "#fbbf24" },
          accent: { type: "color", value: "#34d399" },
          background: { type: "color", value: "#111827" },
          text: { type: "color", value: "#f9fafb" },
        },
      },
    });
  };

  return (
    <Card>
      <Stack gap="md">
        <Text variant="h3">Advanced Theming</Text>
        <Text variant="sm">Current theme: {currentTheme}</Text>

        <Grid cols={3} gap="sm">
          <Button variant="primary" onClick={() => setTheme("default")}>
            Default Theme
          </Button>
          <Button variant="primary" onClick={() => setTheme("medash")}>
            MedTech Theme
          </Button>
          <Button variant="primary" onClick={handleAddCustomTheme}>
            Add Custom Theme
          </Button>
        </Grid>
      </Stack>
    </Card>
  );
};

// Example of advanced animations
const AnimationExample: React.FC = () => {
  const [animationType, setAnimationType] = useState<
    "fade" | "slide" | "scale" | "bounce"
  >("fade");
  const { isAnimating, animate } = useAnimation({ type: animationType });
  const { animatedItems, startStagger } = useStaggerAnimation(5, 200);

  return (
    <Card>
      <Stack gap="lg">
        <Text variant="h3">Advanced Animations</Text>

        <Grid cols={2} gap="md">
          <Stack gap="sm">
            <Text variant="sm">Animation Types:</Text>
            <Grid cols={2} gap="xs">
              {["fade", "slide", "scale", "bounce"].map((type) => (
                <Button
                  key={type}
                  variant={animationType === type ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setAnimationType(type as any)}
                >
                  {type}
                </Button>
              ))}
            </Grid>
          </Stack>

          <Stack gap="sm">
            <Text variant="sm">Trigger Animation:</Text>
            <Button onClick={animate} disabled={isAnimating}>
              {isAnimating ? "Animating..." : "Animate"}
            </Button>
          </Stack>
        </Grid>

        <Animation type={animationType} trigger="scroll">
          <Card>
            <Text>Scroll-triggered animation</Text>
          </Card>
        </Animation>

        <Stack gap="sm">
          <Text variant="sm">Stagger Animation:</Text>
          <Button onClick={startStagger}>Start Stagger</Button>
          <Grid cols={5} gap="xs">
            {animatedItems.map((isAnimated, index) => (
              <Animation
                key={index}
                type="fade"
                delay={index * 100}
                trigger="mount"
              >
                <Badge variant={isAnimated ? "filled" : "outline"}>
                  Item {index + 1}
                </Badge>
              </Animation>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Card>
  );
};

// Example of edge case handling
const ErrorHandlingExample: React.FC = () => {
  const [shouldError, setShouldError] = useState(false);
  const { error, handleError, resetError } = useErrorHandler();

  const BuggyComponent: React.FC = () => {
    if (shouldError) {
      throw new Error("This is a simulated error for testing!");
    }
    return <Text>This component works normally</Text>;
  };

  return (
    <Card>
      <Stack gap="md">
        <Text variant="h3">Error Handling</Text>

        <Grid cols={2} gap="md">
          <Stack gap="sm">
            <Text variant="sm">Simulate Error:</Text>
            <Button
              variant="outline"
              onClick={() => setShouldError(!shouldError)}
            >
              {shouldError ? "Disable Error" : "Trigger Error"}
            </Button>
          </Stack>

          <Stack gap="sm">
            <Text variant="sm">Manual Error:</Text>
            <Button
              variant="outline"
              onClick={() => handleError(new Error("Manual error"))}
            >
              Throw Manual Error
            </Button>
          </Stack>
        </Grid>

        {error && (
          <Card variant="outline" sx={{ borderColor: "red" }}>
            <Stack gap="sm">
              <Text variant="sm" color="error">
                Manual Error Caught:
              </Text>
              <Text variant="xs">{error.message}</Text>
              <Button size="sm" onClick={resetError}>
                Clear Error
              </Button>
            </Stack>
          </Card>
        )}

        <ErrorBoundary
          fallback={
            <Card variant="outline" sx={{ borderColor: "red" }}>
              <Text variant="sm" color="error">
                Component crashed! This is the fallback UI.
              </Text>
            </Card>
          }
        >
          <BuggyComponent />
        </ErrorBoundary>
      </Stack>
    </Card>
  );
};

// Example of performance optimization
const PerformanceExample: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { metrics } = usePerformanceMonitor("PerformanceExample");

  const expensiveItems = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `This is item number ${i} with some description`,
  }));

  const filteredItems = React.useMemo(() => {
    return expensiveItems.filter((item) =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  return (
    <Card>
      <Stack gap="md">
        <Text variant="h3">Performance Optimization</Text>

        <Stack gap="sm">
          <Text variant="sm">Search (debounced):</Text>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search items..."
            style={{
              padding: "8px",
              border: "1px solid var(--color-gray-3)",
              borderRadius: "4px",
            }}
          />
        </Stack>

        <Stack gap="sm">
          <Text variant="sm">Results: {filteredItems.length} items</Text>
          <Text variant="xs" color="muted">
            Render time: {metrics[metrics.length - 1]?.renderTime.toFixed(2)}ms
          </Text>
        </Stack>

        <div style={{ maxHeight: "200px", overflow: "auto" }}>
          <Stack gap="xs">
            {filteredItems.slice(0, 10).map((item) => (
              <div key={item.id} style={{ padding: "4px" }}>
                <Text variant="sm">{item.name}</Text>
              </div>
            ))}
          </Stack>
        </div>
      </Stack>
    </Card>
  );
};

// Main example component
export const AdvancedFeaturesExample: React.FC = () => {
  return (
    <ThemeProvider>
      <Container>
        <Stack gap="xl">
          <Text variant="h1">PulseUI Advanced Features</Text>

          <CustomThemeExample />
          <AnimationExample />
          <ErrorHandlingExample />
          <PerformanceExample />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};
