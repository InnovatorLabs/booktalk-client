'use client';
import { GroupType } from '@/service/group';
// components
import CenterCarousel from '@/components/carousel/CenterCarousel';
import GroupCard from './GroupCard';
// icons
import PlusIcon from '@/components/icons/PlusIcon';

type Props = {
  data: GroupType[];
  label: string;
};

export default function GroupCarousel(props: Props) {
  const { data, label } = props;

  return (
    <section className="pt-10">
      <div className="flex items-center w-full h-[100px]">
        <h1 className="text-xl font-bold">{label}</h1>
      </div>
      <CenterCarousel
        length={data.length}
        slideperscreen={4}
        centerpadding={2} //
      >
        {data &&
          data.map(item => (
            <GroupCard
              key={item.id}
              data={item} //
            />
          ))}
        <div className="flex flex-col justify-center items-center mx-[1rem] grow-0 shrink-0 rounded-[1rem] basis-1/4 max-w-1/4 bg-[#f7f7f7] gap-4 hover:bg-[#f4f4f4] cursor-pointer">
          <PlusIcon />
          <span className="text-[#363636] font-[700] text-[19px]">
            생성하기
          </span>
        </div>
      </CenterCarousel>
    </section>
  );
}
