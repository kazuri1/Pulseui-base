import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface LoginFormProps extends WithSxProps {
    onSubmit?: (data: LoginFormData) => void;
    onSignUpClick?: () => void;
    onForgotPasswordClick?: () => void;
    onSocialLogin?: (provider: "google" | "twitter" | "github") => void;
    title?: string;
    subtitle?: string;
    emailLabel?: string;
    passwordLabel?: string;
    rememberMeLabel?: string;
    forgotPasswordLabel?: string;
    loginButtonLabel?: string;
    signUpLabel?: string;
    showSocialLogin?: boolean;
    showRememberMe?: boolean;
    showForgotPassword?: boolean;
    defaultEmail?: string;
}
export interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}
export declare const LoginForm: React.FC<LoginFormProps>;
