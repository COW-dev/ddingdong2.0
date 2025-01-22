import React from 'react';

import { Title1, ButtonTitle1 } from '@/shared/ui/Typography/Typography';

import ModalPortal from '../Portal/Portal';

type ModalProps = {
  isOpen: boolean;
  title: string;
  closeModal: () => void;
  modalRef: React.RefObject<HTMLDivElement> | null;
  children: React.ReactNode;
};

export default function Modal({ title, isOpen, closeModal, modalRef, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <div ref={modalRef} className="fixed z-30 flex items-center justify-center">
        <div
          className="flex max-w-4xl flex-col items-center rounded-xl bg-white p-10 text-4xl text-black shadow-xl md:h-[70%]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-8 text-center">
            <Title1>{title}</Title1>
            {children}
            <button
              onClick={closeModal}
              className="rounded-lg bg-gray-200 px-3 py-2 text-base"
              color="emerald"
            >
              <ButtonTitle1>닫기</ButtonTitle1>
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
