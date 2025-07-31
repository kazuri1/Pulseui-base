import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Grid,
  Card,
  Button,
  Input,
  TextField,
  Label,
  HelperText,
  AlertSuccess,
  AlertError,
  AlertWarning,
  AlertInfo,
  Divider,
  Avatar,
  Badge,
  Chip,
  Paper,
  Progress,
  ProgressBar,
  Switch,
  SwitchThumb,
  Checkbox,
  Radio,
  Select,
  Textarea,
  Link,
  Image,
  Icon,
  Spinner,
} from "../../styles/stylesApi";

export const StylesApiExample: React.FC = () => {
  const [switchChecked, setSwitchChecked] = React.useState(false);
  const [progressValue, setProgressValue] = React.useState(60);

  return (
    <Container sx={{ py: "xl" }}>
      <Typography sx={{ typography: "h1", mb: "xl", textAlign: "center" }}>
        Pulse UI Styles API Examples
      </Typography>

      {/* Layout Examples */}
      <Stack sx={{ gap: "xl" }}>
        <Card>
          <Typography sx={{ typography: "h2", mb: "lg" }}>
            Layout Components
          </Typography>

          <Grid
            sx={{
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "md",
            }}
          >
            <Paper sx={{ p: "md", textAlign: "center" }}>
              <Typography sx={{ typography: "h4" }}>Paper</Typography>
              <Typography sx={{ typography: "text-sm", color: "secondary" }}>
                Elevated surface
              </Typography>
            </Paper>

            <Box
              sx={{
                p: "md",
                backgroundColor: "primary",
                color: "white",
                borderRadius: "md",
                textAlign: "center",
              }}
            >
              <Typography sx={{ typography: "h4" }}>Box</Typography>
              <Typography sx={{ typography: "text-sm" }}>
                Flexible container
              </Typography>
            </Box>
          </Grid>
        </Card>

        {/* Typography Examples */}
        <Card>
          <Typography sx={{ typography: "h2", mb: "lg" }}>
            Typography
          </Typography>

          <Stack sx={{ gap: "md" }}>
            <Typography sx={{ typography: "h1" }}>Heading 1</Typography>
            <Typography sx={{ typography: "h2" }}>Heading 2</Typography>
            <Typography sx={{ typography: "h3" }}>Heading 3</Typography>
            <Typography sx={{ typography: "text-lg" }}>Large text</Typography>
            <Typography sx={{ typography: "text-md" }}>Medium text</Typography>
            <Typography sx={{ typography: "text-sm" }}>Small text</Typography>
            <Typography sx={{ typography: "text-xs" }}>
              Extra small text
            </Typography>
          </Stack>
        </Card>

        {/* Form Components */}
        <Card>
          <Typography sx={{ typography: "h2", mb: "lg" }}>
            Form Components
          </Typography>

          <Stack sx={{ gap: "lg" }}>
            <TextField sx={{ width: "full" }}>
              <Label>Email address</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                sx={{ mt: "xs" }}
              />
              <HelperText sx={{ mt: "xs" }}>
                We'll never share your email
              </HelperText>
            </TextField>

            <TextField sx={{ width: "full" }}>
              <Label>Message</Label>
              <Textarea placeholder="Enter your message" sx={{ mt: "xs" }} />
            </TextField>

            <Box sx={{ display: "flex", gap: "md", alignItems: "center" }}>
              <Label sx={{ display: "flex", alignItems: "center", gap: "xs" }}>
                <Checkbox type="checkbox" />
                Accept terms
              </Label>

              <Label sx={{ display: "flex", alignItems: "center", gap: "xs" }}>
                <Radio type="radio" name="option" />
                Option 1
              </Label>
            </Box>

            <Select sx={{ width: "full" }}>
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Stack>
        </Card>

        {/* Button Examples */}
        <Card>
          <Typography sx={{ typography: "h2", mb: "lg" }}>Buttons</Typography>

          <Stack sx={{ gap: "md", flexDirection: { xs: "column", md: "row" } }}>
            <Button
              sx={{
                backgroundColor: "primary",
                color: "white",
                "&:hover": { backgroundColor: "blue-7" },
              }}
            >
              Primary Action
            </Button>

            <Button
              sx={{
                backgroundColor: "surface",
                color: "text",
                border: "1px solid",
                borderColor: "border",
              }}
            >
              Secondary Action
            </Button>

            <Button
              sx={{
                backgroundColor: "success",
                color: "white",
              }}
            >
              Success Action
            </Button>

            <Button
              sx={{
                backgroundColor: "error",
                color: "white",
              }}
            >
              Danger Action
            </Button>
          </Stack>
        </Card>

        {/* Alert Examples */}
        <Card>
          <Typography sx={{ typography: "h2", mb: "lg" }}>Alerts</Typography>

          <Stack sx={{ gap: "md" }}>
            <AlertSuccess>
              Success! Your action was completed successfully.
            </AlertSuccess>

            <AlertError>
              Error! Something went wrong. Please try again.
            </AlertError>

            <AlertWarning>
              Warning! Please review your input before proceeding.
            </AlertWarning>

            <AlertInfo>
              Info! Here's some helpful information for you.
            </AlertInfo>
          </Stack>
        </Card>

        {/* Interactive Components */}
        <Card>
          <Typography sx={{ typography: "h2", mb: "lg" }}>
            Interactive Components
          </Typography>

          <Stack sx={{ gap: "lg" }}>
            {/* Switch */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "md" }}>
              <Label>Toggle switch</Label>
              <Switch
                data-checked={switchChecked}
                onClick={() => setSwitchChecked(!switchChecked)}
              >
                <SwitchThumb data-checked={switchChecked} />
              </Switch>
            </Box>

            {/* Progress */}
            <Box>
              <Label sx={{ display: "block", mb: "xs" }}>
                Progress: {progressValue}%
              </Label>
              <Progress>
                <ProgressBar sx={{ width: `${progressValue}%` }} />
              </Progress>
            </Box>
          </Stack>
        </Card>

        {/* Data Display */}
        <Card>
          <Typography sx={{ typography: "h2", mb: "lg" }}>
            Data Display
          </Typography>

          <Stack sx={{ gap: "md" }}>
            {/* Avatar */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "md" }}>
              <Avatar>JD</Avatar>
              <Box>
                <Typography
                  sx={{ typography: "text-md", fontWeight: "semibold" }}
                >
                  John Doe
                </Typography>
                <Typography sx={{ typography: "text-sm", color: "secondary" }}>
                  Software Engineer
                </Typography>
              </Box>
            </Box>

            {/* Badge */}
            <Box sx={{ display: "flex", gap: "md", flexWrap: "wrap" }}>
              <Badge>New</Badge>
              <Badge sx={{ backgroundColor: "success" }}>Active</Badge>
              <Badge sx={{ backgroundColor: "warning" }}>Pending</Badge>
              <Badge sx={{ backgroundColor: "error" }}>Error</Badge>
            </Box>

            {/* Chip */}
            <Box sx={{ display: "flex", gap: "md", flexWrap: "wrap" }}>
              <Chip>React</Chip>
              <Chip>TypeScript</Chip>
              <Chip>Design Systems</Chip>
              <Chip>UI/UX</Chip>
            </Box>
          </Stack>
        </Card>

        {/* Loading States */}
        <Card>
          <Typography sx={{ typography: "h2", mb: "lg" }}>
            Loading States
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "md" }}>
            <Spinner />
            <Typography sx={{ typography: "text-md" }}>
              Loading content...
            </Typography>
          </Box>
        </Card>

        {/* Links */}
        <Card>
          <Typography sx={{ typography: "h2", mb: "lg" }}>Links</Typography>

          <Stack sx={{ gap: "sm" }}>
            <Link href="#" target="_blank">
              External link
            </Link>
            <Link href="#">Internal link</Link>
          </Stack>
        </Card>

        <Divider />

        {/* Responsive Design Example */}
        <Card>
          <Typography sx={{ typography: "h2", mb: "lg" }}>
            Responsive Design
          </Typography>

          <Box
            sx={{
              p: { xs: "sm", sm: "md", md: "lg" },
              fontSize: { xs: "text-sm", md: "text-lg" },
              flexDirection: { xs: "column", md: "row" },
              display: "flex",
              gap: "md",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: 1,
                p: "md",
                backgroundColor: "gray-1",
                borderRadius: "md",
                textAlign: "center",
              }}
            >
              <Typography sx={{ typography: "h4" }}>
                Responsive Box 1
              </Typography>
              <Typography sx={{ typography: "text-sm", color: "secondary" }}>
                This box adapts to different screen sizes
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                p: "md",
                backgroundColor: "blue-1",
                borderRadius: "md",
                textAlign: "center",
              }}
            >
              <Typography sx={{ typography: "h4" }}>
                Responsive Box 2
              </Typography>
              <Typography sx={{ typography: "text-sm", color: "secondary" }}>
                Layout changes on mobile vs desktop
              </Typography>
            </Box>
          </Box>
        </Card>
      </Stack>
    </Container>
  );
};
