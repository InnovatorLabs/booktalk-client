'use client';
import { GroupType } from '@/service/group';
// components
import CenterCarousel from '@/components/carousel/CenterCarousel';
import GroupCard from './GroupCard';

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
        {data.map(item => (
          <GroupCard
            key={item.id}
            data={item} //
          />
        ))}
      </CenterCarousel>
    </section>
  );
}
