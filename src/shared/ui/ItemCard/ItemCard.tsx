import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  size: 'sm' | 'lg';
};

const sizeClassesMap: Record<Props['size'], string> = {
  sm: 'w-72 p-4',
  lg: 'w-[330px] py-6 px-5',
};

export function ItemCard({ size, children, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl border border-gray-200 hover:bg-gray-50 md:w-[343px] ${sizeClassesMap[size]}`}
    >
      {children}
    </div>
  );
}
