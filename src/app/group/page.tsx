import React from 'react';
import { getAllgroup } from '@/service/group';
// icons
import LargeSearchIcon from '@/components/icons/LargeSearchIcon';
// components
import GroupCarousel from './components/GroupCarousel';
import GroupCategory from './components/GroupCategory';

const DUMMY_DATA = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export default async function GroupPage() {
  const [group] = await getAllgroup();

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
      <GroupCategory />
      <GroupCarousel
        data={group.myGroup}
        label="MY 북토크" //
      />
      <GroupCarousel
        data={group.activeGroup}
        label="활동 중인 온라인 독서모임" //
      />
      <GroupCarousel
        data={group.newGroup}
        label="신규 독서 모임" //
      />
    </section>
  );
}
