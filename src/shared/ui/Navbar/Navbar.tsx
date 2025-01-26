'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Icon } from '../Icon';

type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  const router = useRouter();

  return (
    <button
      className="flex cursor-pointer flex-row items-center gap-4"
      onClick={() => router.back()}
    >
      <Icon name="arrowLeft" />
      <p className="text-gray-5s00 text-xl font-bold">{title}</p>
    </button>
  );
}
