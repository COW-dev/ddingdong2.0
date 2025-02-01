import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'components/common/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: false,
    },
    mode: {
      control: { type: 'select' },
      options: ['wait', 'sync', 'popLayout'],
      defaultValue: 'sync',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '사용자가 원하는 상태 모드에 따라 **모달을 띄우고 닫을 수 있는** 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Modal>;

export const Basic: StoryObj<typeof Modal> = {
  args: {
    isOpen: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen); // args를 상태로 활용

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <button
          className="rounded-md bg-primary-300 px-4 py-2 font-semibold text-white"
          onClick={openModal}
        >
          모달 열기
        </button>

        <Modal {...args} isOpen={isOpen} closeModal={closeModal}>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
            <div className="p-2 text-2xl font-semibold">딩동! 모달입니다.</div>
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
