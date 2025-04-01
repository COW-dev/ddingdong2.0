'use client';
import React from 'react';

import { useSelectContext } from './Select.context';

type Props = {
  children: React.ReactNode;
};

export function OptionList({ children }: Props) {
  const { size } = useSelectContext();

  const sizeClass = size === 'md' ? 'text-sm min-w-24' : 'text-base md:text-lg';

  return (
    <div
      className={`mt-1 max-h-60 overflow-y-auto rounded-md border border-gray-200 bg-white font-semibold text-gray-400 ${sizeClass}`}
    >
      {children}
    </div>
  );
}
