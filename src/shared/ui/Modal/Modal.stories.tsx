import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'components/common/Modal',
  component: Modal,
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['wait', 'sync', 'popLayout'],
      defaultValue: 'sync',
    },
  },
} as Meta<typeof Modal>;

export const Basic: StoryObj<typeof Modal> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <button
          className="rounded-md bg-primary-300 px-4 py-2 font-semibold text-white"
          onClick={openModal}
        >
          모달 열기
        </button>

        <Modal isOpen={isOpen} closeModal={closeModal} mode="wait">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
            <div className="p-2 text-2xl font-semibold">딩동 모달입니다.</div>
            <button
              onClick={closeModal}
              className="rounded-lg bg-red-200 px-4 py-2 font-semibold text-white"
            >
              모달 닫기
            </button>
          </div>
        </Modal>
      </div>
    );
  },
};
