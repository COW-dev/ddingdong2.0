import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'components/common/Modal',
  component: Modal,
} as Meta<typeof Modal>;

export const Basic: StoryObj<typeof Modal> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const openModal = (e) => {
      e.stopPropagation();
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
      <div>
        <button
          className="rounded-md bg-primary-300 p-3 font-semibold text-white"
          onClick={openModal}
        >
          모달이 열립니다
        </button>

        {isOpen && (
          <Modal isOpen={isOpen} closeModal={closeModal} modalRef={modalRef} {...args}>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6">
              <div className="p-2 text-2xl font-semibold">dding-dong 모달입니다</div>
              <button
                onClick={closeModal}
                className="rounded-lg bg-red-200 px-4 py-2 font-bold text-white"
              >
                모달닫기
              </button>
            </div>
          </Modal>
        )}
      </div>
    );
  },
};
