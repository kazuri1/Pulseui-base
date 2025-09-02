import React from "react";
import { Pill } from "../atoms/Pill";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Avatar } from "../atoms/Avatar";
import { Switch } from "../atoms/Switch";
import { Textarea } from "../atoms/Textarea";
import { TextInput } from "../atoms/TextInput";
import { Container } from "../layouts/Container";
import { Stack } from "../layouts/Stack";
import { Group } from "../layouts/Group";
import { Grid } from "../layouts/Grid";
import type { SxProps } from "../../styles/stylesApi";

export const SxPropsExample: React.FC = () => {
  // Example sx props
  

  const buttonSx: SxProps = {
    backgroundColor: "primary",
    color: "white",
    padding: "md",
    borderRadius: "md",
    "&:hover": {
      backgroundColor: "blue-7",
    },
  };

  const inputSx: SxProps = {
    border: "2px solid",
    borderColor: "primary",
    borderRadius: "sm",
    padding: "sm",
  };

  const layoutSx: SxProps = {
    backgroundColor: "gray-1",
    padding: "xl",
    margin: "lg",
    borderRadius: "lg",
  };

  return (
    <Container sx={layoutSx}>
      <Stack gap="lg">
        <h2>SX Props Examples</h2>

        {/* Pill with sx props */}
        <Group>
          <Pill sx={{ backgroundColor: "primary", color: "white" }}>
            Custom Pill
          </Pill>
          <Pill sx={{ backgroundColor: "success", color: "white" }}>
            Success Pill
          </Pill>
        </Group>

        {/* Button with sx props */}
        <Group>
          <Button sx={buttonSx}>Custom Button</Button>
          <Button
            sx={{
              backgroundColor: "error",
              color: "white",
              borderRadius: "full",
              padding: "lg",
            }}
          >
            Rounded Button
          </Button>
        </Group>

        {/* Input with sx props */}
        <Stack gap="md">
          <Input placeholder="Custom styled input" sx={inputSx} />
          <TextInput
            label="Custom Text Input"
            placeholder="With sx styling"
            sx={{
              "& .label": {
                color: "primary",
                fontWeight: "bold",
              },
            }}
          />
        </Stack>

        {/* Avatar with sx props */}
        <Group>
          <Avatar
            initials="JD"
            sx={{
              backgroundColor: "primary",
              width: "60px",
              height: "60px",
            }}
          />
          <Avatar
            type="icon"
            sx={{
              backgroundColor: "success",
              border: "3px solid",
              borderColor: "primary",
            }}
          />
        </Group>

        {/* Switch with sx props */}
        <Switch
          label="Custom Switch"
          sx={{
            "& .switchTrack": {
              backgroundColor: "primary",
            },
          }}
        />

        {/* Textarea with sx props */}
        <Textarea
          label="Custom Textarea"
          placeholder="With sx styling"
          sx={{
            border: "2px solid",
            borderColor: "primary",
            borderRadius: "md",
            padding: "md",
          }}
        />

        {/* Layout components with sx props */}
        <Grid
          sx={{ backgroundColor: "gray-2", padding: "md", borderRadius: "md" }}
        >
          <Grid.Col
            span={6}
            sx={{
              backgroundColor: "surface",
              padding: "md",
              borderRadius: "sm",
            }}
          >
            <h3>Grid Column 1</h3>
            <p>This column has custom sx styling</p>
          </Grid.Col>
          <Grid.Col
            span={6}
            sx={{
              backgroundColor: "primary",
              color: "white",
              padding: "md",
              borderRadius: "sm",
            }}
          >
            <h3>Grid Column 2</h3>
            <p>This column has different sx styling</p>
          </Grid.Col>
        </Grid>

        {/* Stack with sx props */}
        <Stack
          gap="md"
          sx={{
            backgroundColor: "surface",
            padding: "lg",
            borderRadius: "lg",
            border: "1px solid",
            borderColor: "border",
          }}
        >
          <h3>Stack with Custom Styling</h3>
          <p>This stack component has custom sx styling applied</p>
          <Button sx={{ alignSelf: "flex-start" }}>Aligned Button</Button>
        </Stack>

        {/* Group with sx props */}
        <Group
          sx={{
            backgroundColor: "gray-1",
            padding: "md",
            borderRadius: "md",
            justifyContent: "space-between",
          }}
        >
          <span>Left Content</span>
          <span>Center Content</span>
          <span>Right Content</span>
        </Group>
      </Stack>
    </Container>
  );
};
