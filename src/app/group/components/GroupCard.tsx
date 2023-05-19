import { GroupType } from '@/service/group';
import Image from 'next/image';

type Props = {
  data: GroupType;
};

export default function GroupCard(props: Props) {
  const { data } = props;

  return (
    <section
      className={`px-[1rem] grow-0 shrink-0 rounded-[1rem] basis-1/4 max-w-1/4`}
    >
      <div className="flex flex-col items-center rounded-[1rem]">
        <Image
          src={`/image/group/group${data.path}.png`}
          alt={data.title}
          width={320}
          height={40}
        />
        <article className="flex flex-col px-2 gap-3">
          <div className="flex w-full pt-3 items-center justify-between">
            <div className="flex-1 text-[18px] font-[700] truncate">
              {data.title}
            </div>
            <div className="bg-[#222222] opacity-[0.7] px-2 py-1 rounded-lg text-white">{`${data.currentMember} / ${data.maxMember}`}</div>
          </div>
          <div>{data.type}</div>
          <div className="w-full text-[#ADADAD] line-clamp-2">
            {data.content}
          </div>
          <div className="flex gap-2 flex-wrap">
            {data.category.map(item => (
              <button
                key={item}
                className="px-[10px] py-[6px] text-[15px] rounded-md bg-[#89CFF0] text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
