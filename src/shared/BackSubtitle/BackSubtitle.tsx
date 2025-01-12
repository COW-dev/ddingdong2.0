'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import BackArrow from '../BackArrow';
import { Head3 } from '../Typography/Typography';

type BackSubtitleProps = {
  title: string;
};

export default function BackSubtitle({ title }: BackSubtitleProps) {
  const router = useRouter();

  return (
    <div className="flex cursor-pointer flex-row items-center gap-4" onClick={() => router.back()}>
      <BackArrow />
      <Head3 color="GR">{title}</Head3>
    </div>
  );
}
