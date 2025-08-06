import React, { Component, ErrorInfo, ReactNode } from "react";
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}
interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    resetOnPropsChange?: boolean;
    showErrorDetails?: boolean;
}
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState>;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    componentDidUpdate(prevProps: ErrorBoundaryProps): void;
    handleReset: () => void;
    render(): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined;
}
export declare const useErrorHandler: () => {
    error: Error | null;
    handleError: (error: Error) => void;
    resetError: () => void;
};
export declare const withErrorBoundary: <P extends object>(Component: React.ComponentType<P>, errorBoundaryProps?: Partial<ErrorBoundaryProps>) => {
    (props: P): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
