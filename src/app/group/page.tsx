'use client';
import React from 'react';
import cx from 'classnames';
// icons
import LargeSearchIcon from '@/components/icons/LargeSearchIcon';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
// components
import GroupCarousel from './components/GroupCarousel';

const CATEGORY_TYPE = [
  '소설',
  '시/에세이',
  '인문',
  '가정/육아',
  '건강',
  '취미/실용/스포츠',
  '경제/경영',
  '자기계발',
  '정치/사회',
  '역사/문화',
  '종교',
  '기술/공학',
  '예술/대중문화',
  '외국어',
  '과학',
  '여행',
  '컴퓨터/IT',
] as const;

const CATEGORY_BUTTON_CLASS = [
  'flex',
  'px-[10px]',
  'py-[6px]',
  'text-[15px]',
  'tracking-[2px]',
  'rounded-md',
  'duration-200',
];

const DUMMY_DATA = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export default function GroupPage() {
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
    <section className="flex flex-col flex-1 px-2">
      <section className="relative flex items-center w-full h-[80px] border-b-2">
        <input
          className="w-full h-full pl-[50px] outline-0 text-[22px] font-[500]"
          type="text"
          placeholder="북토크 명을 입력하세요"
        />
        <button
          type="button"
          className="absolute top-0 left-0 w-[50px] h-full rounded-full"
        >
          <LargeSearchIcon />
        </button>
      </section>
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
      <GroupCarousel
        data={DUMMY_DATA}
        label="MY 북토크" //
      />
      <GroupCarousel
        data={DUMMY_DATA}
        label="활동 중인 온라인 독서모임" //
      />
      <GroupCarousel
        data={DUMMY_DATA}
        label="신규 독서 모임" //
      />
    </section>
  );
}
