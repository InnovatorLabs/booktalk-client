'use client';
import React from 'react';
import cx from 'classnames';
// icons
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
// config
import { CATEGORY_TYPE, CATEGORY_BUTTON_CLASS } from '@/config/group';

export default function GroupCategory() {
  const [checkedById, setCheckedById] = React.useState<Set<string>>(new Set());

  const handleCategoryUpdate = (category: string) => {
    const updatedCheckedById = new Set(checkedById);
    if (updatedCheckedById.has(category)) {
      updatedCheckedById.delete(category);
    } else {
      updatedCheckedById.add(category);
    }
    setCheckedById(updatedCheckedById);
  };

  return (
    <section className="flex flex-col w-full pt-[28px]">
      <button className="flex h-[30px] items-center text-[15px] gap-1 font-[400] text-[#404040]">
        <div>전체 모임</div>
        <ChevronDownIcon />
      </button>
      <div className="flex gap-2 flex-wrap pt-5">
        {CATEGORY_TYPE.map((item: string) => (
          <button
            type="button"
            key={item}
            className={
              checkedById.has(item)
                ? cx(CATEGORY_BUTTON_CLASS, 'bg-[#89CFF0] text-white')
                : cx(CATEGORY_BUTTON_CLASS, 'bg-[#F7F8F9]')
            }
            onClick={() => handleCategoryUpdate(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
