// components
import Hero from '@/components/Hero';
import SearchInput from '@/components/input/SearchInput';

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col flex-1">
      <Hero />
      <div className="flex justify-between items-center w-full h-[80px] px-2">
        <button
          type="button"
          className="w-[130px] h-3/5 rounded hover:brightness-110 bg-[#89CFF0] text-white"
        >
          글쓰기
        </button>
        <SearchInput />
      </div>
      <section>{children}</section>
    </section>
  );
}
