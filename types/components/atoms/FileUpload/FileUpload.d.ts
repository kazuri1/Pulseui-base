import React from "react";
export interface FileUploadProps {
    /** Supported file types */
    acceptedFileTypes?: string[];
    /** Maximum file size in bytes */
    maxFileSize?: number;
    /** Maximum number of files */
    maxFiles?: number;
    /** Whether multiple files are allowed */
    multiple?: boolean;
    /** Upload handler function */
    onUpload?: (files: File[]) => void;
    /** Custom upload text */
    uploadText?: string;
    /** Custom browse text */
    browseText?: string;
    /** Whether to show file list */
    showFileList?: boolean;
    /** Component variant state */
    variant?: "default" | "uploading" | "completed";
    /** Additional CSS classes */
    className?: string;
}
export interface UploadFile {
    id: string;
    file: File;
    progress: number;
    status: "uploading" | "completed" | "error";
    timeRemaining?: string;
}
export declare const FileUpload: React.FC<FileUploadProps>;
