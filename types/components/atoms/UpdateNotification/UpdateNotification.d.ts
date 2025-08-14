import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface UpdateNotificationProps extends WithSxProps {
    /** Notification title */
    title?: string;
    /** Notification message */
    message?: string;
    /** Skip button text */
    skipText?: string;
    /** Download button text */
    downloadText?: string;
    /** Skip button click handler */
    onSkip?: () => void;
    /** Download button click handler */
    onDownload?: () => void;
}
export declare const UpdateNotification: React.FC<UpdateNotificationProps>;
