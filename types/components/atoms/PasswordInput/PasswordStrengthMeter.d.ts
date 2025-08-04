import React from "react";
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
export declare const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps>;
