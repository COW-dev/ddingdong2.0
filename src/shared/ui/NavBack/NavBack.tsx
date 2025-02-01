'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Icon } from '../Icon';
import { Title1 } from '../Typography';

type Props = {
  title: string;
};

export function NavBack({ title }: Props) {
  const router = useRouter();

  return (
    <button
      className="flex cursor-pointer flex-row items-center gap-2 align-middle"
      onClick={() => router.back()}
    >
      <Icon name="navbarArrow" />
      <Title1 className="text-2xl font-bold text-gray-500">{title}</Title1>
    </button>
  );
}
