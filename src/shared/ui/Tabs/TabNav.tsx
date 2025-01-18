import { useContext } from 'react';

import { cn } from '@/shared/utils/core';

import { TabContext } from './Tab.context';

export function TabNav() {
  const content = useContext(TabContext);
  if (!content) return <></>;
  const { activeLabel, setActiveLabel, labels } = content;

  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 sm:block">
      {labels.map((label, index) => (
        <button
          key={index}
          onClick={() => setActiveLabel(label)}
          className={cn(
            `shrink-0 border-b-2 pb-4 text-base font-medium md:text-xl md:font-semibold ${
              activeLabel === label
                ? 'text-blue-500 border-primary-200'
                : 'border-transparent hover:border-blue-500 hover:text-blue-500 text-gray-500'
            }`,
            `w-1/${labels.length}`
          )}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
