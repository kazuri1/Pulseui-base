import React from "react";
import { Icon } from "../Icon";
import { Check, Close } from "../Icon/IconSet";
import styles from "./PasswordStrengthMeter.module.scss";

export interface PasswordRequirement {
  id: string;
  label: string;
  test: (password: string) => boolean;
}

export interface PasswordStrengthMeterProps {
  password: string;
  requirements?: PasswordRequirement[];
  className?: string;
}

const defaultRequirements: PasswordRequirement[] = [
  {
    id: "length",
    label: "Includes at least 6 characters",
    test: (password: string) => password.length >= 6,
  },
  {
    id: "number",
    label: "Includes number",
    test: (password: string) => /\d/.test(password),
  },
  {
    id: "lowercase",
    label: "Includes lowercase letter",
    test: (password: string) => /[a-z]/.test(password),
  },
  {
    id: "uppercase",
    label: "Includes uppercase letter",
    test: (password: string) => /[A-Z]/.test(password),
  },
  {
    id: "special",
    label: "Includes special symbol",
    test: (password: string) =>
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  },
];

export const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({
  password,
  requirements = defaultRequirements,
  className = "",
}) => {
  const metRequirements = requirements.filter((req) => req.test(password));
  const allRequirementsMet = metRequirements.length === requirements.length;
  const strengthPercentage =
    (metRequirements.length / requirements.length) * 100;

  // Determine strength level and color
  const getStrengthLevel = (percentage: number) => {
    if (percentage === 100) return "strong";
    if (percentage >= 50) return "medium";
    return "weak";
  };

  const strengthLevel = getStrengthLevel(strengthPercentage);

  return (
    <div className={`${styles.strengthMeter} ${className}`}>
      {/* Strength Progress Bar */}
      <div className={styles.strengthBar}>
        <div className={styles.strengthBarBackground}>
          <div
            className={`${styles.strengthBarFill} ${styles[strengthLevel]}`}
            style={{ width: `${strengthPercentage}%` }}
          />
        </div>
        <span className={styles.strengthText}>
          {strengthLevel === "strong"
            ? "Strong"
            : strengthLevel === "medium"
            ? "Medium"
            : "Weak"}
        </span>
      </div>

      <div className={styles.requirements}>
        {requirements.map((requirement) => {
          const isMet = requirement.test(password);
          return (
            <div
              key={requirement.id}
              className={`${styles.requirement} ${
                isMet ? styles.met : styles.unmet
              }`}
            >
              <Icon
                icon={isMet ? Check : Close}
                size="sm"
                color={isMet ? "success" : "error"}
                className={styles.icon}
              />
              <span className={styles.label}>{requirement.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

PasswordStrengthMeter.displayName = "PasswordStrengthMeter";
