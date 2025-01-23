import React, { ReactNode } from 'react';

export type Props = {
  /**
   * left child of the of the DoubleButton
   */
  left: ReactNode;
  /**
   * right child of the of the DoubleButton
   */
  right: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function DoubleButton({ left, right, ...props }: Props) {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4" {...props}>
      <div>{left}</div>
      <div> {right}</div>
    </div>
  );
}
