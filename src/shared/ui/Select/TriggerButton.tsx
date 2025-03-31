'use client';
import React from 'react';

import { Icon } from '../Icon';

type Props = {
  selected: string;
  onClick: () => void;
  isOpen: boolean;
  size?: 'md' | 'lg';
};

export function TriggerButton({ selected, onClick, isOpen, size = 'lg' }: Props) {
  const sizeClass =
    size === 'md'
      ? 'px-3 py-1 text-sm w-fit min-w-24'
      : 'px-5 py-1.5 md:py-2.5 min-w-64 md:w-72 text-base md:text-lg';

  const containerClass = `${sizeClass} flex items-center cursor-pointer rounded-lg border border-gray-200 bg-white text-start text-base font-semibold text-gray-400 `;

  return (
    <div className={containerClass} onClick={onClick}>
      <div
        className={`flex w-full items-center justify-between rounded-lg align-middle hover:rounded-lg ${
          isOpen ? 'hover:rounded-b-none' : ''
        } `}
      >
        {selected}
        <Icon
          name="arrowDown"
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          } ${size === 'md' ? 'w-5' : ''}`}
        />
      </div>
    </div>
  );
}
