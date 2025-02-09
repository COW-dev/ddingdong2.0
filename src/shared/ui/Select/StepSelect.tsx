'use client';
import React, { useState } from 'react';

import { Icon } from '../Icon';

type Props = {
  contents: { [key: string]: string[] };
};

export function StepSelect({ contents }: Props) {
  const allItems = Object.entries(contents).flatMap(([category, items]) =>
    items.map((item) => ({ category, item }))
  );

  const [selectedContent, setSelectedContent] = useState(allItems[0]?.item || '');
  const [openSelect, setOpenSelect] = useState(false);

  const totalItems = allItems.length;
  const shouldScroll = totalItems > 5;

  return (
    <div className="relative h-fit w-72 cursor-pointer rounded-lg border border-gray-200 bg-white text-start text-base font-semibold text-gray-400 md:w-8 md:text-lg">
      <div
        className="flex justify-between px-5 py-2 hover:rounded-lg hover:bg-gray-50 md:py-3"
        onClick={() => setOpenSelect(!openSelect)}
      >
        {selectedContent}

        <Icon
          name="arrowDown"
          className={`transform transition-transform duration-300 ${
            openSelect ? 'rotate-180' : ''
          }`}
        />
      </div>

      {openSelect && (
        <div
          className={`flex flex-col border border-gray-100 bg-white ${
            shouldScroll ? 'max-h-60 overflow-y-auto' : 'rounded-b-lg'
          }`}
        >
          {Object.entries(contents).map(([category, items], categoryIndex) => (
            <div key={categoryIndex} className="flex flex-col">
              <div className="cursor-default border-gray-50 px-5 py-2 font-semibold text-gray-300">
                {category}
              </div>

              {items.map((item, key) => (
                <div
                  key={key}
                  className={`cursor-pointer px-5 py-2 hover:bg-gray-50 ${
                    key === items.length - 1 ? 'hover:rounded-b-lg' : ''
                  }`}
                  onClick={() => {
                    setSelectedContent(item);
                    setOpenSelect(false);
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
