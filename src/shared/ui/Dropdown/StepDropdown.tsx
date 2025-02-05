'use client';
import React, { useState } from 'react';

import { Icon } from '../Icon';

type Props = {
  contents: { [key: string]: string[] };
};

export function StepDropdown({ contents }: Props) {
  const allItems = Object.entries(contents).flatMap(([category, items]) =>
    items.map((item) => ({ category, item }))
  );

  const [selectedContent, setSelectedContent] = useState(allItems[0]?.item || '');
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div
      className={`md:w-82 border-gray-100'} relative w-72 cursor-pointer rounded-lg border bg-white text-start text-base font-semibold text-gray-400 md:text-lg`}
    >
      <div
        className={`flex justify-between px-5 py-2 hover:rounded-lg hover:rounded-b-none hover:bg-gray-100 md:py-3`}
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        {selectedContent}
        {openDropdown ? <Icon name="arrowUp" /> : <Icon name="arrowDown" />}
      </div>

      {openDropdown && (
        <div className="flex flex-col">
          {Object.entries(contents).map(([category, items], categoryIndex) => (
            <div key={categoryIndex} className="flex flex-col">
              <div className="cursor-default border-t-2 border-gray-100 px-5 py-2 font-semibold text-gray-300 hover:rounded-br-lg">
                {category}
              </div>

              {items.map((item, key) => (
                <div
                  key={key}
                  className="cursor-pointer px-5 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedContent(item);
                    setOpenDropdown(false);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
