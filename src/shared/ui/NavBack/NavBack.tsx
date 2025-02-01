'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Icon } from '../Icon';

type Props = {
  title: string;
};

export default function NavBack({ title }: Props) {
  const router = useRouter();

  return (
    <button
      className="flex cursor-pointer flex-row items-center gap-2 align-middle"
      onClick={() => router.back()}
    >
      <Icon name="navbarArrow" />
      <p className="text-2xl font-bold text-gray-600">{title}</p>
    </button>
  );
}
