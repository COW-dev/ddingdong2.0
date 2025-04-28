'use client';
import React from 'react';

import { cn } from '@/shared/lib/core';

import { useSelectContext } from './Select.context';

type Props = {
  id: string;
  name: string;
};

type Size = 'md' | 'lg';

export function Option({ id, name }: Props) {
  const { onSelect, size } = useSelectContext() as {
    onSelect: (arg: { id: string; name: string }) => void;
    size: Size;
  };

  const sizeVariants = {
    md: 'px-3 py-1 text-sm',
    lg: 'px-5 py-2 md:py-2.5',
  };

  return (
    <div
      onClick={() => onSelect({ id, name })}
      className={cn(
        'cursor-pointer first:rounded-t-md last:rounded-b-md hover:bg-gray-50',
        sizeVariants[size]
      )}
    >
      {name}
    </div>
  );
}
