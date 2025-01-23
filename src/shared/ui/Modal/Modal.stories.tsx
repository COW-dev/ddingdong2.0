import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'components/common/Modal',
  component: Modal,
  argTypes: {
    showCloseButton: {
      control: 'boolean',
      defaultValue: true,
    },
    width: {
      control: { type: 'range', min: 300, max: 1000 },
      defaultValue: 500,
    },
    backgroundColor: {
      control: 'color',
      defaultValue: '#FFFFFF',
    },
  },
} as Meta<typeof Modal>;

export const Basic: StoryObj<typeof Modal> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const openModal = (e) => {
      e.stopPropagation();
      console.log('Opening modal...');
      setIsOpen(true);
    };

    const closeModal = () => {
      console.log('Closing modal...');
      setIsOpen(false);
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <button
          onClick={openModal}
          style={{
            backgroundColor: '#b0bec5',
            color: 'white',
            padding: '6px 12px',
            border: '1px solid white',
            borderRadius: '4px',
          }}
        >
          모달이 열립니다
        </button>

        {isOpen && (
          <Modal isOpen={isOpen} closeModal={closeModal} modalRef={modalRef} {...args}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '25px',
                borderRadius: '8px',
                width: 'auto',
                textAlign: 'center',
              }}
            >
              <div style={{ marginBottom: '35px' }}>dding-dong 모달입니다</div>
              <button
                onClick={closeModal}
                style={{
                  backgroundColor: '#b0bec5',
                  color: 'white',
                  fontSize: '16px',
                  padding: '2px 25px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                모달닫기
              </button>
            </div>
          </Modal>
        )}
      </div>
    );
  },
  args: {
    showCloseButton: true,
    width: 500,
    backgroundColor: '#FFFFFF',
  },
};
