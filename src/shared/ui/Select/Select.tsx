'use client';
import React, { useState } from 'react';

import { Icon } from '../Icon';

type Props = {
  contents: string[];
  size?: 'md' | 'lg';
};

export function Select({ contents, size }: Props) {
  const [selectedContent, setSelectedContent] = useState(contents[0]);
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <div
      className={`${openSelect ? 'rounded-lg' : 'rounded-lg border border-gray-100'} text-b'${
        size === 'md' ? 'md:min-w-26 w-fit min-w-24' : 'md:min-w-66 w-60'
      } cursor-pointer border border-gray-200 bg-white text-start text-base font-semibold text-gray-400 md:text-lg`}
    >
      <div
        className={`${
          openSelect
            ? 'border-b-2 border-gray-100 hover:rounded-lg hover:rounded-b-none'
            : 'border-0'
        } flex justify-between ${
          size === 'md' ? 'items-center py-1 pl-3 pr-2 text-sm' : 'px-5 py-2 md:py-3'
        } hover:rounded-md hover:bg-gray-50`}
        onClick={() => setOpenSelect(!openSelect)}
      >
        {selectedContent}

        <Icon
          name="arrowDown"
          className={`transform transition-transform duration-300 ${
            openSelect ? 'rotate-180' : ''
          } ${size === 'md' ? 'w-5' : ''} }`}
        />
      </div>

      {openSelect && (
        <div className="flex flex-col">
          {contents.map((item, key) => (
            <div
              onClick={() => {
                setSelectedContent(contents[key]);
                setOpenSelect(!openSelect);
              }}
              className={`cursor-pointer border-gray-100 ${
                size === 'md' ? 'px-3 py-1 text-sm' : 'px-5 py-2 md:py-3'
              } last:border-none hover:bg-gray-50 hover:last:rounded-b-md`}
              key={key}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
