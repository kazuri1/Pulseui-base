import React, { useState } from "react";
import { PasswordInput } from "../atoms/PasswordInput";

export const PasswordStrengthExample: React.FC = () => {
  const [password, setPassword] = useState("");

  return (
    <div style={{ maxWidth: "400px", padding: "20px" }}>
      <h2 style={{ marginBottom: "16px", fontSize: "20px", fontWeight: "600" }}>
        Password Strength Meter Example
      </h2>
      <p style={{ marginBottom: "24px", color: "#666", fontSize: "14px" }}>
        Try typing different passwords to see the strength meter in action. The
        meter will show checkmarks for met requirements and X marks for unmet
        ones. When all requirements are met, it will show a success message with
        primary color.
      </p>

      <PasswordInput
        label="Create Password"
        placeholder="Enter your password"
        value={password}
        onChange={setPassword}
        showStrengthMeter={true}
        required={true}
      />

      <div style={{ marginTop: "24px", fontSize: "14px", color: "#666" }}>
        <p>
          <strong>Current password:</strong> {password || "(empty)"}
        </p>
        <p>
          <strong>Password length:</strong> {password.length} characters
        </p>
      </div>
    </div>
  );
};
