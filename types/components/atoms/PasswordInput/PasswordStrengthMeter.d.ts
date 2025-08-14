import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface PasswordRequirement {
    id: string;
    label: string;
    test: (password: string) => boolean;
}
export interface PasswordStrengthMeterProps extends WithSxProps {
    password: string;
    requirements?: PasswordRequirement[];
}
export declare const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps>;
