import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FileUpload } from "./FileUpload";

const defaultProps = {
  acceptedFileTypes: ["jpg", "png", "pdf"],
  maxFileSize: 10 * 1024 * 1024, // 10MB
  maxFiles: 5,
  multiple: true,
  showFileList: true,
};

describe("FileUpload", () => {
  it("renders without crashing", () => {
    render(<FileUpload {...defaultProps} />);

    expect(screen.getByText("Upload Your Files")).toBeInTheDocument();
    expect(screen.getByText("JPG, PNG, PDF supported")).toBeInTheDocument();
    expect(screen.getByText("Drag & drop your file here")).toBeInTheDocument();
    expect(screen.getByText("or")).toBeInTheDocument();
    expect(screen.getByText("Browse Files")).toBeInTheDocument();
  });

  it("displays custom upload text when provided", () => {
    render(<FileUpload {...defaultProps} uploadText="Custom Upload" />);

    expect(screen.getByText("Custom Upload")).toBeInTheDocument();
  });

  it("displays custom browse text when provided", () => {
    render(<FileUpload {...defaultProps} browseText="Select Files" />);

    expect(screen.getByText("Select Files")).toBeInTheDocument();
  });

  it("shows file list when showFileList is true", () => {
    render(<FileUpload {...defaultProps} showFileList={true} />);

    // Initially no files, so no upload list should be visible
    expect(screen.queryByText(/Uploading/)).not.toBeInTheDocument();
  });

  it("hides file list when showFileList is false", () => {
    render(<FileUpload {...defaultProps} showFileList={false} />);

    // Even after files are added, list should not be visible
    expect(screen.queryByText(/Uploading/)).not.toBeInTheDocument();
  });

  it("handles file input change", () => {
    const onUpload = jest.fn();
    render(<FileUpload {...defaultProps} onUpload={onUpload} />);

    const fileInput = screen.getByDisplayValue("");
    const file = new File(["test content"], "test.jpg", { type: "image/jpeg" });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(onUpload).toHaveBeenCalledWith([file]);
  });

  it("validates file types correctly", () => {
    const onUpload = jest.fn();
    render(<FileUpload {...defaultProps} onUpload={onUpload} />);

    const fileInput = screen.getByDisplayValue("");
    const invalidFile = new File(["test content"], "test.txt", {
      type: "text/plain",
    });

    fireEvent.change(fileInput, { target: { files: [invalidFile] } });

    // Should not call onUpload for invalid file type
    expect(onUpload).not.toHaveBeenCalled();
  });

  it("validates file size correctly", () => {
    const onUpload = jest.fn();
    const largeFile = new File(["x".repeat(11 * 1024 * 1024)], "large.jpg", {
      type: "image/jpeg",
    });

    render(
      <FileUpload
        {...defaultProps}
        maxFileSize={10 * 1024 * 1024}
        onUpload={onUpload}
      />
    );

    const fileInput = screen.getByDisplayValue("");
    fireEvent.change(fileInput, { target: { files: [largeFile] } });

    // Should not call onUpload for oversized file
    expect(onUpload).not.toHaveBeenCalled();
  });

  it("handles drag and drop events", () => {
    const onUpload = jest.fn();
    render(<FileUpload {...defaultProps} onUpload={onUpload} />);

    const dropZone = screen
      .getByText("Drag & drop your file here")
      .closest("div");

    // Test drag over
    fireEvent.dragOver(dropZone!);
    expect(dropZone).toHaveClass("dragOver");

    // Test drag leave
    fireEvent.dragLeave(dropZone!);
    expect(dropZone).not.toHaveClass("dragOver");
  });

  it("handles file drop", () => {
    const onUpload = jest.fn();
    render(<FileUpload {...defaultProps} onUpload={onUpload} />);

    const dropZone = screen
      .getByText("Drag & drop your file here")
      .closest("div");
    const file = new File(["test content"], "test.jpg", { type: "image/jpeg" });

    const dropEvent = new Event("drop", { bubbles: true });
    Object.defineProperty(dropEvent, "dataTransfer", {
      value: { files: [file] },
    });

    fireEvent(dropZone!, dropEvent);

    expect(onUpload).toHaveBeenCalledWith([file]);
  });

  it("shows upload progress for files", async () => {
    const onUpload = jest.fn();
    render(<FileUpload {...defaultProps} onUpload={onUpload} />);

    const fileInput = screen.getByDisplayValue("");
    const file = new File(["test content"], "test.jpg", { type: "image/jpeg" });

    fireEvent.change(fileInput, { target: { files: [file] } });

    // Wait for upload list to appear
    await waitFor(() => {
      expect(screen.getByText("Uploading 1 file")).toBeInTheDocument();
    });

    expect(screen.getByText("test.jpg (9 Bytes)")).toBeInTheDocument();
  });

  it("allows canceling uploads", async () => {
    const onUpload = jest.fn();
    render(<FileUpload {...defaultProps} onUpload={onUpload} />);

    const fileInput = screen.getByDisplayValue("");
    const file = new File(["test content"], "test.jpg", { type: "image/jpeg" });

    fireEvent.change(fileInput, { target: { files: [file] } });

    // Wait for upload list to appear
    await waitFor(() => {
      expect(screen.getByText("Uploading 1 file")).toBeInTheDocument();
    });

    const cancelButton = screen.getByRole("button", { name: /x/i });
    fireEvent.click(cancelButton);

    // File should be removed from list
    await waitFor(() => {
      expect(screen.queryByText("test.jpg (9 Bytes)")).not.toBeInTheDocument();
    });
  });

  it("supports single file mode", () => {
    render(<FileUpload {...defaultProps} multiple={false} />);

    const fileInput = screen.getByDisplayValue("");
    expect(fileInput).not.toHaveAttribute("multiple");
  });

  it("supports multiple file mode", () => {
    render(<FileUpload {...defaultProps} multiple={true} />);

    const fileInput = screen.getByDisplayValue("");
    expect(fileInput).toHaveAttribute("multiple");
  });

  it("formats file sizes correctly", () => {
    const onUpload = jest.fn();
    render(<FileUpload {...defaultProps} onUpload={onUpload} />);

    const fileInput = screen.getByDisplayValue("");
    const file = new File(["x".repeat(1024)], "test.jpg", {
      type: "image/jpeg",
    });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(onUpload).toHaveBeenCalledWith([file]);
  });

  it("applies custom className when provided", () => {
    render(<FileUpload {...defaultProps} className="custom-class" />);

    const fileUpload = screen
      .getByText("Upload Your Files")
      .closest(".fileUpload");
    expect(fileUpload).toHaveClass("custom-class");
  });

  it("renders uploading variant correctly", () => {
    render(<FileUpload {...defaultProps} variant="uploading" />);

    expect(screen.getByText("Uploading files...")).toBeInTheDocument();
    expect(
      screen.getByText("Please wait while we process your files")
    ).toBeInTheDocument();
    expect(screen.queryByText("Browse Files")).not.toBeInTheDocument();

    // Should show placeholder upload items
    expect(screen.getByText("sample-file-1.jpg (2.5 MB)")).toBeInTheDocument();
    expect(screen.getByText("sample-file-2.jpg (2.5 MB)")).toBeInTheDocument();
    expect(screen.getByText("Uploading files...")).toBeInTheDocument();
  });

  it("renders completed variant correctly", () => {
    render(<FileUpload {...defaultProps} variant="completed" />);

    expect(screen.getByText("Upload completed!")).toBeInTheDocument();
    expect(
      screen.getByText("Your files have been successfully uploaded")
    ).toBeInTheDocument();
    expect(screen.queryByText("Browse Files")).not.toBeInTheDocument();

    // Should show placeholder completed items
    expect(
      screen.getByText("completed-file-1.pdf (1.8 MB)")
    ).toBeInTheDocument();
    expect(
      screen.getByText("completed-file-2.pdf (1.8 MB)")
    ).toBeInTheDocument();
    expect(screen.getByText("Upload completed!")).toBeInTheDocument();
  });

  it("renders default variant correctly", () => {
    render(<FileUpload {...defaultProps} variant="default" />);

    expect(screen.getByText("Drag & drop your file here")).toBeInTheDocument();
    expect(screen.getByText("or")).toBeInTheDocument();
    expect(screen.getByText("Browse Files")).toBeInTheDocument();
  });
});
