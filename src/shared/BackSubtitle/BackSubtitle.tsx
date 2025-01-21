'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Head3 } from '../Typography/Typography';

type BackSubtitleProps = {
  title: string;
};

export default function BackSubtitle({ title }: BackSubtitleProps) {
  const router = useRouter();

  return (
    <button
      className="flex cursor-pointer flex-row items-center gap-4"
      onClick={() => router.back()}
    >
      <svg
        width="13"
        height="21"
        viewBox="0 0 13 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-gray-600"
      >
        <path
          d="M10.9609 1.50024L2.75643 9.70475C2.31709 10.1441 2.31709 10.8564 2.75643 11.2957L10.9609 19.5002"
          stroke="#4B5563"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <Head3 color="GR">{title}</Head3>
    </button>
  );
}
