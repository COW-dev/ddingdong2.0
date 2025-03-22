import React from 'react';

type Props = {
  /**
   * Color type representing the status.
   * - 'positive': (`bg-green-100 text-green-300`)
   * - 'negative': (`bg-red-100 text-red-300`)
   * - 'neutral': (`bg-gray-100 text-gray-400`)
   *
   * @default 'neutral'
   */
  variant: 'positive' | 'negative' | 'neutral';

  /**
   * The text content to be displayed.
   */
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Badge({ variant = 'neutral', text, ...props }: Props) {
  const variantStyles = {
    positive: 'bg-green-100 text-green-300',
    negative: 'bg-red-100 text-red-300',
    neutral: 'bg-gray-100 text-gray-400',
  };

  const badgeStyle = variantStyles[variant];

  return (
    <div
      className={`w-min whitespace-nowrap rounded-xl px-2 py-1 font-semibold ${badgeStyle}`}
      {...props}
    >
      {text}
    </div>
  );
}
