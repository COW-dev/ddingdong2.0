import React from 'react';

type Props = {
  /**
   * 제출 여부를 나타냅니다.
   * - `true`: 제출 완료 (green)
   * - `false`: 미제출 (red)
   * - `null`: 제출 전 (gray)
   */
  isSubmited?: boolean | null;

  /**
   * 진행 상태를 나타냅니다.
   * - `true`: 진행 중 (green)
   * - `false`: 마감 (red)
   * - `null`: 진행 전 (gray)
   */
  isProgress?: boolean | null;

  /**
   * 모집 상태를 나타냅니다.
   * - `true`: 모집 중 (green)
   * - `false`: 모집 마감 (gray)
   */
  isRecruiting?: boolean;

  /**
   * - `true`: 초록색 (`bg-green-100 text-green-300`)
   * - `false`: 빨간색 (`bg-red-100 text-red-300`)
   * - `null`: 회색 (`bg-gray-100 text-gray-400`)
   *
   * @default null
   */
  color?: boolean | null;

  /**
   * 특정 상태가 없을 경우, text값이 표시됩니다.
   *
   * @default '상태 없음'
   */
  text?: string;
};

/**
 * `Badge` is a UI element that visually represents various statuses.
 */
export function Badge({ isSubmited, isProgress, isRecruiting, color, text }: Props) {
  let badgeColor = 'bg-gray-100 text-gray-400';
  let badgeText = text ?? '상태 없음';

  if (isRecruiting !== undefined) {
    badgeColor = isRecruiting ? 'bg-green-100 text-green-300' : 'bg-gray-100 text-gray-400';
    badgeText = isRecruiting ? '모집 중' : '모집 마감';
  } else if (isProgress !== undefined) {
    if (isProgress === null) {
      badgeColor = 'bg-gray-100 text-gray-400';
      badgeText = '진행 전';
    } else {
      badgeColor = isProgress ? 'bg-green-100 text-green-300' : 'bg-red-100 text-red-300';
      badgeText = isProgress ? '진행 중' : '마감';
    }
  } else if (isSubmited !== undefined) {
    if (isSubmited === null) {
      badgeColor = 'bg-gray-100 text-gray-400';
      badgeText = '제출 전';
    } else {
      badgeColor = isSubmited ? 'bg-green-100 text-green-300' : 'bg-red-100 text-red-300';
      badgeText = isSubmited ? '제출 완료' : '미제출';
    }
  } else if (color !== undefined) {
    badgeColor =
      color === true
        ? 'bg-green-100 text-green-300'
        : color === false
          ? 'bg-red-100 text-red-300'
          : 'bg-gray-100 text-gray-400';
  }

  return (
    <div className={`w-min whitespace-nowrap rounded-xl p-1 px-2 font-semibold ${badgeColor}`}>
      {badgeText}
    </div>
  );
}
