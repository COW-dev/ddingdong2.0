import React, { ReactNode } from 'react';

export type Props = {
  left: ReactNode;
  right: ReactNode;
};

export default function DoubleButton({ left, right }: Props) {
  return (
    <div className="flex items-center justify-center gap-2">
      {left}
      {right}
    </div>
  );
}
