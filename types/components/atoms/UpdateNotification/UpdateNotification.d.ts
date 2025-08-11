import React from "react";
export interface UpdateNotificationProps {
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
    /** Additional CSS classes */
    className?: string;
}
export declare const UpdateNotification: React.FC<UpdateNotificationProps>;
