import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Atoms/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A comprehensive file upload component with drag & drop support, file validation, progress tracking, and upload management. Built with PulseUI design system and supports multiple file types and sizes.",
      },
    },
  },
  argTypes: {
    acceptedFileTypes: {
      control: { type: "object" },
      description: "Array of supported file extensions",
    },
    maxFileSize: {
      control: { type: "number" },
      description: "Maximum file size in bytes",
    },
    maxFiles: {
      control: { type: "number" },
      description: "Maximum number of files allowed",
    },
    multiple: {
      control: { type: "boolean" },
      description: "Whether multiple files are allowed",
    },
    onUpload: {
      action: "upload",
      description: "Callback when files are uploaded",
    },
    uploadText: {
      control: { type: "text" },
      description: "Custom upload title text",
    },
    browseText: {
      control: { type: "text" },
      description: "Custom browse button text",
    },
    showFileList: {
      control: { type: "boolean" },
      description: "Whether to show the file upload list",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "uploading", "completed"],
      description: "Component variant state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    acceptedFileTypes: ["jpg", "png", "pdf", "mp4", "gif"],
    maxFileSize: 100 * 1024 * 1024, // 100MB
    maxFiles: 5,
    multiple: true,
    showFileList: true,
  },
};

export const SingleFile: Story = {
  args: {
    acceptedFileTypes: ["jpg", "png"],
    maxFileSize: 10 * 1024 * 1024, // 10MB
    maxFiles: 1,
    multiple: false,
    showFileList: true,
    uploadText: "Upload Profile Picture",
    browseText: "Choose Image",
  },
};

export const DocumentOnly: Story = {
  args: {
    acceptedFileTypes: ["pdf", "doc", "docx", "txt"],
    maxFileSize: 50 * 1024 * 1024, // 50MB
    maxFiles: 10,
    multiple: true,
    showFileList: true,
    uploadText: "Upload Documents",
    browseText: "Select Files",
  },
};

export const ImageOnly: Story = {
  args: {
    acceptedFileTypes: ["jpg", "jpeg", "png", "gif", "webp"],
    maxFileSize: 25 * 1024 * 1024, // 25MB
    maxFiles: 20,
    multiple: true,
    showFileList: true,
    uploadText: "Upload Images",
    browseText: "Choose Images",
  },
};

export const VideoOnly: Story = {
  args: {
    acceptedFileTypes: ["mp4", "avi", "mov", "wmv", "flv"],
    maxFileSize: 500 * 1024 * 1024, // 500MB
    maxFiles: 3,
    multiple: true,
    showFileList: true,
    uploadText: "Upload Videos",
    browseText: "Select Videos",
  },
};

export const LargeFiles: Story = {
  args: {
    acceptedFileTypes: ["zip", "rar", "7z", "tar", "gz"],
    maxFileSize: 2 * 1024 * 1024 * 1024, // 2GB
    maxFiles: 2,
    multiple: true,
    showFileList: true,
    uploadText: "Upload Large Files",
    browseText: "Browse Files",
  },
};

export const WithoutFileList: Story = {
  args: {
    acceptedFileTypes: ["jpg", "png", "pdf"],
    maxFileSize: 100 * 1024 * 1024, // 100MB
    maxFiles: 5,
    multiple: true,
    showFileList: false,
    uploadText: "Quick Upload",
    browseText: "Select Files",
  },
};

export const CustomText: Story = {
  args: {
    acceptedFileTypes: ["jpg", "png", "pdf"],
    maxFileSize: 100 * 1024 * 1024, // 100MB
    maxFiles: 5,
    multiple: true,
    showFileList: true,
    uploadText: "Share Your Files",
    browseText: "Pick Files",
  },
};

export const StrictValidation: Story = {
  args: {
    acceptedFileTypes: ["pdf"],
    maxFileSize: 5 * 1024 * 1024, // 5MB
    maxFiles: 1,
    multiple: false,
    showFileList: true,
    uploadText: "Upload PDF Only",
    browseText: "Select PDF",
  },
};

export const UploadingVariant: Story = {
  args: {
    acceptedFileTypes: ["jpg", "png", "pdf"],
    maxFileSize: 100 * 1024 * 1024, // 100MB
    maxFiles: 5,
    multiple: true,
    showFileList: true,
    variant: "uploading",
    uploadText: "Uploading Files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the FileUpload component in the uploading state with placeholder files and progress bars.",
      },
    },
  },
};

export const CompletedVariant: Story = {
  args: {
    acceptedFileTypes: ["jpg", "png", "pdf"],
    maxFileSize: 100 * 1024 * 1024, // 100MB
    maxFiles: 5,
    multiple: true,
    showFileList: true,
    variant: "completed",
    uploadText: "Files Uploaded",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the FileUpload component in the completed state with placeholder completed files.",
      },
    },
  },
};
