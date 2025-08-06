import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
import type { SingleTabProps } from "../SingleTab/SingleTab";
export interface TabsTabProps extends Omit<SingleTabProps, "state" | "onClick">, WithSxProps {
    /** Value of associated control */
    value: string;
    /** Whether to keep this tab mounted even if keepMounted is false in parent */
    keepMounted?: boolean;
}
export declare const TabsTab: React.FC<TabsTabProps>;
