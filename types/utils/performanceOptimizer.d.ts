export interface PerformanceMetrics {
    renderTime: number;
    memoryUsage?: number;
    componentName: string;
    timestamp: number;
}
export declare const usePerformanceMonitor: (componentName: string) => {
    metrics: PerformanceMetrics[];
};
export declare const createLazyComponent: <T extends React.ComponentType<any>>(importFunc: () => Promise<{
    default: T;
}>, fallback?: React.ReactNode) => (props: React.ComponentProps<T>) => import("react").FunctionComponentElement<import("react").SuspenseProps>;
export declare const useMemoizedCallback: <T extends (...args: any[]) => any>(callback: T, deps: React.DependencyList) => T;
export declare const useMemoizedValue: <T>(factory: () => T, deps: React.DependencyList) => T;
export declare const useDebounce: <T>(value: T, delay: number) => T;
export declare const useThrottle: <T>(value: T, delay: number) => T;
export declare const useIntersectionObserver: (options?: IntersectionObserverInit) => {
    elementRef: import("react").RefObject<HTMLElement | null>;
    isIntersecting: boolean;
    hasIntersected: boolean;
};
export interface VirtualScrollConfig {
    itemHeight: number;
    containerHeight: number;
    overscan?: number;
}
export declare const useVirtualScroll: (items: any[], config: VirtualScrollConfig) => {
    visibleItems: any[];
    totalHeight: number;
    offsetY: number;
    setScrollTop: import("react").Dispatch<import("react").SetStateAction<number>>;
};
export declare const useExpensiveCalculation: <T>(calculation: () => T, deps: React.DependencyList, options?: {
    maxTime?: number;
    useWorker?: boolean;
}) => {
    result: T | null;
    isCalculating: boolean;
};
export declare const useMemoryMonitor: () => any;
