'use client';
import React from 'react';

import { useSelectContext } from './Select.context';

type Props = {
  id: string;
  name: string;
};

export function Option({ id, name }: Props) {
  const { onSelect, size } = useSelectContext();

  const sizeVariants = {
    md: 'px-3 py-1',
    lg: 'px-5 py-2 md:py-2.5',
  };

  return (
    <div
      onClick={() => onSelect({ id, name })}
      className={`cursor-pointer ${sizeVariants[size]} first:rounded-t-md last:rounded-b-md hover:bg-gray-50`}
    >
      {name}
    </div>
  );
}
