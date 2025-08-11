import React from "react";
export interface LoginFormProps {
    onSubmit?: (data: LoginFormData) => void;
    onSignUpClick?: () => void;
    onForgotPasswordClick?: () => void;
    onSocialLogin?: (provider: "google" | "twitter" | "github") => void;
    className?: string;
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
