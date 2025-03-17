import React from 'react';
import { useRouter } from 'next/router';

export type Props = {
  children: React.ReactNode;
  size: 'sm' | 'lg';
  path: string;
};

const sizeClassesMap: Record<Props['size'], string> = {
  sm: 'w-72 p-4 h-[99px]',
  lg: 'w-[330px] py-6 px-5 md:h-[143px] h-[128px]',
};

export function ItemCard({ size, children, path }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(path);
      }}
      className={`cursor-pointer rounded-xl border border-gray-200 hover:bg-gray-50 md:w-[343px] ${sizeClassesMap[size]}`}
    >
      {children}
    </div>
  );
}
