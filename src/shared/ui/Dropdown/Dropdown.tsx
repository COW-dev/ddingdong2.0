'use client';
import React, { useState } from 'react';

import { Icon } from '../Icon';

type Props = {
  contents: string[];
};

export function Dropdown({ contents }: Props) {
  const [selectedContent, setSelectedContent] = useState(contents[0]);
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div
      className={`${openDropdown ? 'rounded-lg' : 'rounded-lg border border-gray-100'} md:w-82 text-b' fixed w-72 cursor-pointer border border-gray-100 bg-white text-start text-base font-semibold text-gray-400 md:text-lg`}
    >
      <div
        className={`${openDropdown ? 'border-b-2 border-gray-100 hover:rounded-lg hover:rounded-b-none' : 'border-0'} flex justify-between px-5 py-2 hover:rounded-md hover:bg-gray-50 md:py-3`}
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        {selectedContent}
        {openDropdown ? <Icon name="arrowUp" /> : <Icon name="arrowDown" />}
      </div>
      {openDropdown && (
        <div className="flex flex-col">
          {contents.map((item, key) => (
            <div
              onClick={() => {
                setSelectedContent(contents[key]);
                setOpenDropdown(!openDropdown);
              }}
              className="cursor-pointer border-b-2 border-gray-100 px-5 py-2 last:border-none hover:bg-gray-50 hover:last:rounded-b-md md:py-3"
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
