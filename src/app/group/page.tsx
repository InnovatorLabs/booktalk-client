import React from 'react';
import { getAllgroup } from '@/service/group';

// components
import GroupCarousel from './components/GroupCarousel';

export default async function GroupPage() {
  const [group] = await getAllgroup();

  return (
    <>
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
    </>
  );
}
