import React, { useState } from "react";
import { PasswordInput } from "../atoms/PasswordInput";

export const PasswordInputExample: React.FC = () => {
  const [password, setPassword] = useState("");
  const [controlledPassword, setControlledPassword] = useState("");
  const [controlledVisible, setControlledVisible] = useState(false);

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Password Input Examples</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Basic Password Input (Internal State)</h3>
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
          required
        />
        <p>Current value: {password}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Controlled Password Input (External State)</h3>
        <PasswordInput
          label="Controlled Password"
          placeholder="Enter your password"
          value={controlledPassword}
          onChange={setControlledPassword}
          passwordVisible={controlledVisible}
          onPasswordVisibilityChange={setControlledVisible}
          required
        />
        <p>Current value: {controlledPassword}</p>
        <p>Password visible: {controlledVisible ? "Yes" : "No"}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Password Input with Caption</h3>
        <PasswordInput
          label="Secure Password"
          placeholder="Enter a secure password"
          caption="Password must be at least 8 characters long"
          value={password}
          onChange={setPassword}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Password Input with Error</h3>
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          error="Password is too short"
          value={password}
          onChange={setPassword}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Disabled Password Input</h3>
        <PasswordInput
          label="Disabled Password"
          placeholder="This is disabled"
          value="disabled-password"
          disabled
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Password Input without Toggle</h3>
        <PasswordInput
          label="No Toggle"
          placeholder="No visibility toggle"
          value={password}
          onChange={setPassword}
          showPasswordToggle={false}
        />
      </div>
    </div>
  );
};
