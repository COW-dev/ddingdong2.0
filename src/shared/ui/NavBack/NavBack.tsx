'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Icon } from '../Icon';
import { Title1, Title3 } from '../Typography';

type Props = {
  title: string;
  size: 'sm' | 'lg';
};

export function NavBack({ title, size }: Props) {
  const router = useRouter();

  return (
    <button
      className="flex cursor-pointer flex-row items-center gap-2 whitespace-nowrap align-middle"
      onClick={() => router.back()}
    >
      {size === 'sm' ? (
        <>
          <Icon name="arrowLeft" className="w-4 md:w-6" />
          <Title3 className="whitespace-nowrap text-gray-500">{title}</Title3>
        </>
      ) : (
        <>
          <Icon name="navbarArrow" className="w-6 md:w-8" />
          <Title1 className="whitespace-nowrap text-gray-500">{title}</Title1>
        </>
      )}
    </button>
  );
}
