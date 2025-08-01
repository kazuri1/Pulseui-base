import React, { useState } from "react";
import { Textarea } from "../atoms/Textarea";
import { Container } from "../layouts/Container";
import { Stack } from "../layouts/Stack";

export const TextareaExample: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Container size="md">
      <Stack gap="lg">
        <h2>Textarea Component Test</h2>

        <div>
          <h3>Basic Textarea</h3>
          <Textarea
            label="Basic Textarea"
            placeholder="Type your message here..."
            value={value}
            onChange={setValue}
          />
        </div>

        <div>
          <h3>Required Textarea</h3>
          <Textarea
            label="Required Textarea"
            placeholder="This field is required..."
            required
            value={value}
            onChange={setValue}
          />
        </div>

        <div>
          <h3>Disabled Textarea</h3>
          <Textarea
            label="Disabled Textarea"
            placeholder="This is disabled..."
            disabled
            value="This is disabled content"
          />
        </div>

        <div>
          <h3>Textarea with Caption</h3>
          <Textarea
            label="Textarea with Caption"
            placeholder="Type here..."
            caption="This is a helpful caption"
            value={value}
            onChange={setValue}
          />
        </div>

        <div>
          <h3>Non-resizable Textarea</h3>
          <Textarea
            label="Non-resizable Textarea"
            placeholder="This cannot be resized..."
            resizable={false}
            value={value}
            onChange={setValue}
          />
        </div>

        <div>
          <h3>Large Textarea</h3>
          <Textarea
            label="Large Textarea"
            placeholder="This has more rows..."
            rows={8}
            value={value}
            onChange={setValue}
          />
        </div>
      </Stack>
    </Container>
  );
};
