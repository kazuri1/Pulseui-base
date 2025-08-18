import React, { useState, useRef, useCallback } from "react";
import { Card } from "../Card";
import { Text } from "../Text";
import { Button } from "../Button";
import { Icon } from "../Icon";
import {
  CloudUpload,
  FileUpload as FileIcon,
  Close,
  Upload,
} from "../Icon/IconSet";
import styles from "./FileUpload.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";


export interface FileUploadProps extends WithSxProps {
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
}

export interface UploadFile {
  id: string;
  file: File;
  progress: number;
  status: "uploading" | "completed" | "error";
  timeRemaining?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  acceptedFileTypes = ["jpg", "png", "pdf", "mp4", "gif"],
  maxFileSize = 100 * 1024 * 1024, // 100MB
  maxFiles = 5,
  multiple = true,
  onUpload,
  uploadText = "Upload Your Files",
  browseText = "Browse Files",
  showFileList = true,
  variant = "default",
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return FileIcon;
      case "pdf":
        return FileIcon;
      case "mp4":
        return FileIcon;
      default:
        return FileIcon;
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + sizes[i];
  };

  const validateFile = (file: File): string | null => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (!acceptedFileTypes.includes(extension || "")) {
      return `File type ${extension} is not supported`;
    }
    if (file.size > maxFileSize) {
      return `File size exceeds ${formatFileSize(maxFileSize)}`;
    }
    return null;
  };

  const handleFiles = useCallback(
    (files: FileList) => {
      const validFiles: File[] = [];
      const errors: string[] = [];

      Array.from(files).forEach((file) => {
        const error = validateFile(file);
        if (error) {
          errors.push(`${file.name}: ${error}`);
        } else {
          validFiles.push(file);
        }
      });

      if (errors.length > 0) {
        console.warn("File validation errors:", errors);
      }

      if (validFiles.length > 0) {
        const newUploadFiles: UploadFile[] = validFiles.map((file) => ({
          id: Math.random().toString(36).substr(2, 9),
          file,
          progress: 0,
          status: "uploading",
          timeRemaining: "25s left",
        }));

        setUploadFiles((prev) => [...prev, ...newUploadFiles]);
        setIsUploading(true);

        // Simulate upload progress
        newUploadFiles.forEach((uploadFile) => {
          simulateUpload(uploadFile.id);
        });

        if (onUpload) {
          onUpload(validFiles);
        }
      }
    },
    [acceptedFileTypes, maxFileSize, onUpload]
  );

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadFiles((prev) =>
          prev.map((f) =>
            f.id === fileId ? { ...f, progress: 100, status: "completed" } : f
          )
        );
      } else {
        setUploadFiles((prev) =>
          prev.map((f) => (f.id === fileId ? { ...f, progress } : f))
        );
      }
    }, 500);
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFiles(files);
      }
    },
    [handleFiles]
  );

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleCancelUpload = (fileId: string) => {
    setUploadFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const acceptedTypesString = acceptedFileTypes
    .map((type) => type.toUpperCase())
    .join(", ");

  const fileUploadClasses = combineClassNames(
    styles.fileUpload,
    styles[variant],
    sxClassName
  );

  return (
    <Card className={fileUploadClasses} sx={sx} style={sxStyle}>
      <div
        className={styles.header}
        style={{
          marginBottom: "25px",
        }}
      >
        <Text variant="lg" weight="semibold" className={styles.title}>
          {uploadText}
        </Text>
        <Text variant="sm" color="secondary" className={styles.supportedTypes}>
          {acceptedTypesString} supported
        </Text>
      </div>

      <div
        className={`${styles.dropZone} ${isDragOver ? styles.dragOver : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {variant === "uploading" ? (
          <>
            <Icon icon={CloudUpload} size="xl" className={styles.uploadIcon} />
            <Text variant="md" className={styles.dropText}>
              Uploading files...
            </Text>
            <Text variant="sm" color="secondary" className={styles.orText}>
              Please wait while we process your files
            </Text>
          </>
        ) : variant === "completed" ? (
          <>
            <Icon icon={CloudUpload} size="xl" className={styles.uploadIcon} />
            <Text variant="md" className={styles.dropText}>
              Upload completed!
            </Text>
            <Text variant="sm" color="secondary" className={styles.orText}>
              Your files have been successfully uploaded
            </Text>
          </>
        ) : (
          <>
            <Icon icon={CloudUpload} size="xl" className={styles.uploadIcon} />
            <Text variant="md" className={styles.dropText}>
              Drag & drop your file here
            </Text>
            <Text variant="sm" color="secondary" className={styles.orText}>
              or
            </Text>
            <Button
              variant="subtle"
              size="sm"
              onClick={handleBrowseClick}
              className={styles.browseButton}
            >
              {browseText}
            </Button>
          </>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={acceptedFileTypes.map((type) => `.${type}`).join(",")}
        onChange={handleFileInputChange}
        className={styles.hiddenInput}
      />

      {showFileList &&
        (uploadFiles.length > 0 ||
          variant === "uploading" ||
          variant === "completed") && (
          <div className={styles.uploadList}>
            <Text variant="md" weight="medium" className={styles.uploadTitle}>
              {variant === "uploading"
                ? "Uploading files..."
                : variant === "completed"
                ? "Upload completed!"
                : `Uploading ${uploadFiles.length} file${
                    uploadFiles.length > 1 ? "s" : ""
                  }`}
            </Text>
            {variant === "uploading" && uploadFiles.length === 0
              ? // Show placeholder upload items for uploading variant
                Array.from({ length: 2 }).map((_, index) => (
                  <div
                    key={`placeholder-${index}`}
                    className={styles.uploadItem}
                  >
                    <div className={styles.fileInfo}>
                      <Icon
                        icon={FileIcon}
                        size="sm"
                        className={styles.fileIcon}
                      />
                      <div className={styles.fileDetails}>
                        <Text
                          variant="sm"
                          weight="medium"
                          className={styles.fileName}
                        >
                          sample-file-{index + 1}.jpg (2.5 MB)
                        </Text>
                        <div className={styles.progressContainer}>
                          <div className={styles.progressBar}>
                            <div
                              className={styles.progressFill}
                              style={{ width: `${Math.random() * 100}%` }}
                            />
                          </div>
                          <Text
                            variant="xs"
                            color="secondary"
                            className={styles.timeRemaining}
                          >
                            {Math.floor(Math.random() * 30) + 10}s left
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className={styles.cancelButton}
                      disabled
                    >
                      <Icon icon={Close} size="sm" />
                    </Button>
                  </div>
                ))
              : variant === "completed" && uploadFiles.length === 0
              ? // Show placeholder completed items for completed variant
                Array.from({ length: 2 }).map((_, index) => (
                  <div key={`completed-${index}`} className={styles.uploadItem}>
                    <div className={styles.fileInfo}>
                      <Icon
                        icon={FileIcon}
                        size="sm"
                        className={styles.fileIcon}
                      />
                      <div className={styles.fileDetails}>
                        <Text
                          variant="sm"
                          weight="medium"
                          className={styles.fileName}
                        >
                          completed-file-{index + 1}.pdf (1.8 MB)
                        </Text>
                        <div className={styles.progressContainer}>
                          <div className={styles.progressBar}>
                            <div
                              className={styles.progressFill}
                              style={{ width: "100%" }}
                            />
                          </div>
                          <Text
                            variant="xs"
                            color="secondary"
                            className={styles.timeRemaining}
                          >
                            Completed
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className={styles.cancelButton}
                      disabled
                    >
                      <Icon icon={Close} size="sm" />
                    </Button>
                  </div>
                ))
              : uploadFiles.map((uploadFile) => (
                  <div key={uploadFile.id} className={styles.uploadItem}>
                    <div className={styles.fileInfo}>
                      <Icon
                        icon={getFileIcon(uploadFile.file.name)}
                        size="sm"
                        className={styles.fileIcon}
                      />
                      <div className={styles.fileDetails}>
                        <Text
                          variant="sm"
                          weight="medium"
                          className={styles.fileName}
                        >
                          {uploadFile.file.name} (
                          {formatFileSize(uploadFile.file.size)})
                        </Text>
                        <div className={styles.progressContainer}>
                          <div className={styles.progressBar}>
                            <div
                              className={styles.progressFill}
                              style={{ width: `${uploadFile.progress}%` }}
                            />
                          </div>
                          {uploadFile.status === "uploading" && (
                            <Text
                              variant="xs"
                              color="secondary"
                              className={styles.timeRemaining}
                            >
                              {uploadFile.timeRemaining}
                            </Text>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCancelUpload(uploadFile.id)}
                      className={styles.cancelButton}
                    >
                      <Icon icon={Close} size="sm" />
                    </Button>
                  </div>
                ))}
          </div>
        )}
    </Card>
  );
};
