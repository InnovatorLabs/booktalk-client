import Image from 'next/image';
// icons
import NewIcon from './icons/NewIcon';

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-end w-full h-[300px] border-b">
      <div className="absolute top-0 w-full h-[210px] bg-gradient-to-br from-slate-300 to-white bg-slate-300" />
      <div className="flex items-center h-3/5 z-10 p-1">
        <Image
          src={'/image/profile/profile1.png'}
          width={100}
          height={100}
          alt="my profile"
        />
        <div className="flex flex-col w-full h-[100px] pl-8">
          <div className="flex-1 text-2xl">
            <strong>고독한 독서가</strong>의 책장
          </div>
          <div className="flex flex-1 gap-3">
            <div className="flex h-1/2 items-center">
              팔로워
              <NewIcon />
            </div>
            <div className="flex h-1/2 items-center">
              팔로잉
              <NewIcon />
            </div>
            <div className="flex h-1/2 items-center">
              참여 모임
              <NewIcon />
            </div>
            <div className="flex h-1/2 items-center">
              내 모임
              <NewIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
