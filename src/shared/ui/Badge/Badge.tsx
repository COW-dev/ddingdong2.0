import React from 'react';

type Props = {
  /**
   * - `'green'`: 초록색 (`bg-green-100 text-green-300`)
   * - `'red'`: 빨간색 (`bg-red-100 text-red-300`)
   * - `'gray'`: 회색 (`bg-gray-100 text-gray-400`)
   * - `null`: 기본값 (회색)
   *
   * @default null
   */
  color?: 'red' | 'green' | 'gray' | null;

  /**
   * 특정 상태가 없을 경우
   *
   * @default '상태 없음'
   */
  text?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * `Badge` is a UI element that visually represents various statuses.
 */
export function Badge({ color, text, ...props }: Props) {
  let badgeColor = 'bg-gray-100 text-gray-400';

  if (color === 'green') {
    badgeColor = 'bg-green-100 text-green-300';
  } else if (color === 'red') {
    badgeColor = 'bg-red-100 text-red-300';
  } else if (color === 'gray') {
    badgeColor = 'bg-gray-100 text-gray-400';
  }

  const badgeText = text ?? '상태 없음';

  return (
    <div
      className={`w-min whitespace-nowrap rounded-xl p-1 px-2 font-semibold ${badgeColor}`}
      {...props}
    >
      {badgeText}
    </div>
  );
}
