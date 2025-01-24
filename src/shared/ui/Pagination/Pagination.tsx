import { cn } from '@/shared/lib/core';

import { Icon } from '../Icon';

type WrapperProps = {
  /**
   * additional className.
   */
  className: string;
} & React.HTMLAttributes<HTMLElement>;

function PaginationWrapper({ className, ...props }: WrapperProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('flex cursor-pointer items-center justify-center gap-1', className)}
      {...props}
    />
  );
}

type PaginationItemProps = {
  /**
   * page number.
   */
  page: number;
  /**
   * whether the page is active.
   */
  isActive: boolean;
  /**
   * function to be called when the page is clicked
   */
  onClick: () => void;
};

function PaginationItem({ page, isActive, onClick }: PaginationItemProps) {
  return (
    <button
      onClickCapture={onClick}
      className={`size-10 rounded px-3 py-1 hover:bg-gray-100 ${
        isActive && 'shadow-sm outline outline-1 -outline-offset-1 outline-gray-200'
      }`}
    >
      {page}
    </button>
  );
}

type Props = {
  /**
   * current page number.
   */
  currentPage: number;
  /**
   * total page number.
   */
  totalPages: number;
  /**
   * function to be called when page is changed.
   */
  onPageChange: (page: number) => void;
  /**
   * additional className.
   */
  className?: string;
};

export function Pagination({ currentPage, totalPages, onPageChange, className = '' }: Props) {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <PaginationWrapper className={className}>
      {totalPages >= 3 && currentPage > 1 && (
        <Icon
          name="arrowLeft"
          size={30}
          className="size-10 rounded-md px-3 py-1 hover:bg-gray-100"
          onClickCapture={handlePrevious}
        />
      )}

      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationItem
          key={index}
          page={index + 1}
          isActive={index + 1 === currentPage}
          onClick={() => onPageChange(index + 1)}
        />
      ))}

      {totalPages >= 3 && currentPage < totalPages && (
        <Icon
          name="arrowRight"
          size={35}
          className="size-10 rounded-md px-3 py-1 hover:bg-gray-100"
          onClickCapture={handleNext}
        />
      )}
    </PaginationWrapper>
  );
}
