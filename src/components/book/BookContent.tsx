'use client';

import { BookType } from '@/service/books';
import BookGrid from '@/components/book/BookGrid';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  books: BookType[];
};

export default function BookContent({ books }: Props) {
  return (
    <section>
      <div className="flex justify-between items-center w-full h-[80px] px-2">
        <button
          type="button"
          className="w-[130px] h-3/5 rounded hover:brightness-110 bg-[#89CFF0] text-white"
        >
          글쓰기
        </button>
        <div className="relative w-[30rem] h-3/5">
          <input
            className="w-full h-full border-[#89CFF0] border-2 rounded pl-[14px]"
            type="text"
          />
          <button
            type="button"
            className="absolute top-0 right-0 w-[50px] h-full rounded-full"
          >
            <AiOutlineSearch size={25} color="#89CFF0" />
          </button>
        </div>
      </div>
      <BookGrid books={books} />
    </section>
  );
}
