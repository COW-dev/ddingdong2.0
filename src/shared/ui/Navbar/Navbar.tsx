'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Icon } from '../Icon';
import { Title1 } from '../Typography/Typography';

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
      <Title1 className="text-gray-400">{title}</Title1>
    </button>
  );
}
