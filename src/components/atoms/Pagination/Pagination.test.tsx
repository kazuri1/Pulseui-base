import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 10,
  };

  it("renders pagination with page numbers", () => {
    render(<Pagination {...defaultProps} />);
    
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    // With currentPage=1, siblingCount=1, boundaryCount=1, expect 1,2,...,10
    expect(screen.getByTestId("MoreHorizIcon")).toBeInTheDocument(); // ellipsis
  });

  it("renders pagination with middle page showing siblings", () => {
    render(<Pagination currentPage={5} totalPages={10} />);
    
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument(); // sibling
    expect(screen.getByText("5")).toBeInTheDocument(); // current
    expect(screen.getByText("6")).toBeInTheDocument(); // sibling
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("highlights current page as active", () => {
    render(<Pagination {...defaultProps} currentPage={3} />);
    
    const activeButton = screen.getByText("3");
    expect(activeButton).toHaveClass("active");
  });

  it("calls onPageChange when page button is clicked", () => {
    const onPageChange = jest.fn();
    render(<Pagination {...defaultProps} onPageChange={onPageChange} />);
    
    fireEvent.click(screen.getByText("2"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("does not call onPageChange when current page is clicked", () => {
    const onPageChange = jest.fn();
    render(<Pagination {...defaultProps} onPageChange={onPageChange} />);
    
    fireEvent.click(screen.getByText("1"));
    expect(onPageChange).not.toHaveBeenCalled();
  });

  it("renders navigation buttons", () => {
    render(<Pagination {...defaultProps} />);
    
    expect(screen.getByLabelText("Go to previous page")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to next page")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to first page")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to last page")).toBeInTheDocument();
  });

  it("calls onPreviousPage when previous button is clicked", () => {
    const onPreviousPage = jest.fn();
    render(<Pagination {...defaultProps} currentPage={2} onPreviousPage={onPreviousPage} />);
    
    fireEvent.click(screen.getByLabelText("Go to previous page"));
    expect(onPreviousPage).toHaveBeenCalled();
  });

  it("calls onNextPage when next button is clicked", () => {
    const onNextPage = jest.fn();
    render(<Pagination {...defaultProps} currentPage={2} onNextPage={onNextPage} />);
    
    fireEvent.click(screen.getByLabelText("Go to next page"));
    expect(onNextPage).toHaveBeenCalled();
  });

  it("calls onFirstPage when first button is clicked", () => {
    const onFirstPage = jest.fn();
    render(<Pagination {...defaultProps} currentPage={5} onFirstPage={onFirstPage} />);
    
    fireEvent.click(screen.getByLabelText("Go to first page"));
    expect(onFirstPage).toHaveBeenCalled();
  });

  it("calls onLastPage when last button is clicked", () => {
    const onLastPage = jest.fn();
    render(<Pagination {...defaultProps} currentPage={5} onLastPage={onLastPage} />);
    
    fireEvent.click(screen.getByLabelText("Go to last page"));
    expect(onLastPage).toHaveBeenCalled();
  });

  it("disables previous and first buttons on first page", () => {
    render(<Pagination {...defaultProps} currentPage={1} />);
    
    const prevButton = screen.getByLabelText("Go to previous page");
    const firstButton = screen.getByLabelText("Go to first page");
    
    expect(prevButton).toBeDisabled();
    expect(firstButton).toBeDisabled();
  });

  it("disables next and last buttons on last page", () => {
    render(<Pagination {...defaultProps} currentPage={10} />);
    
    const nextButton = screen.getByLabelText("Go to next page");
    const lastButton = screen.getByLabelText("Go to last page");
    
    expect(nextButton).toBeDisabled();
    expect(lastButton).toBeDisabled();
  });

  it("renders ellipsis when there are many pages", () => {
    render(<Pagination {...defaultProps} totalPages={20} currentPage={10} />);
    
    const ellipsisElements = screen.getAllByTestId("MoreHorizIcon");
    expect(ellipsisElements.length).toBeGreaterThan(0);
  });

  it("applies different sizes", () => {
    const { rerender } = render(<Pagination {...defaultProps} size="xs" />);
    expect(screen.getByRole("navigation")).toHaveClass("size-xs");

    rerender(<Pagination {...defaultProps} size="sm" />);
    expect(screen.getByRole("navigation")).toHaveClass("size-sm");

    rerender(<Pagination {...defaultProps} size="md" />);
    expect(screen.getByRole("navigation")).toHaveClass("size-md");

    rerender(<Pagination {...defaultProps} size="lg" />);
    expect(screen.getByRole("navigation")).toHaveClass("size-lg");

    rerender(<Pagination {...defaultProps} size="xl" />);
    expect(screen.getByRole("navigation")).toHaveClass("size-xl");
  });

  it("hides first/last buttons when showFirstLast is false", () => {
    render(<Pagination {...defaultProps} showFirstLast={false} />);
    
    expect(screen.queryByLabelText("Go to first page")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Go to last page")).not.toBeInTheDocument();
  });

  it("hides previous/next buttons when showPrevNext is false", () => {
    render(<Pagination {...defaultProps} showPrevNext={false} />);
    
    expect(screen.queryByLabelText("Go to previous page")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Go to next page")).not.toBeInTheDocument();
  });

  it("applies disabled state", () => {
    render(<Pagination {...defaultProps} disabled={true} />);
    
    expect(screen.getByRole("navigation")).toHaveClass("disabled");
    
    const pageButton = screen.getByText("2");
    expect(pageButton).toBeDisabled();
  });

  it("does not call callbacks when disabled", () => {
    const onPageChange = jest.fn();
    const onPreviousPage = jest.fn();
    const onNextPage = jest.fn();
    
    render(
      <Pagination
        {...defaultProps}
        disabled={true}
        onPageChange={onPageChange}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    );
    
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByLabelText("Go to previous page"));
    fireEvent.click(screen.getByLabelText("Go to next page"));
    
    expect(onPageChange).not.toHaveBeenCalled();
    expect(onPreviousPage).not.toHaveBeenCalled();
    expect(onNextPage).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<Pagination {...defaultProps} className="custom-class" />);
    
    expect(screen.getByRole("navigation")).toHaveClass("custom-class");
  });

  it("applies custom id", () => {
    render(<Pagination {...defaultProps} id="custom-id" />);
    
    expect(screen.getByRole("navigation")).toHaveAttribute("id", "custom-id");
  });

  it("handles edge cases with small total pages", () => {
    render(<Pagination currentPage={1} totalPages={1} />);
    
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
  });

  it("handles large page numbers", () => {
    render(<Pagination currentPage={100} totalPages={1000} />);
    
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
  });
}); 