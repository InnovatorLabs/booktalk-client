import Link from 'next/link';
import Image from 'next/image';
import { BookType } from '@/service/books';

type Props = { book: BookType };

export default function BookCard({
  book: { id, title, content, date, path },
}: Props) {
  return (
    <Link href={`/books/${id}`}>
      <article className="relative h-[250px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2">
        <Image
          className="absolute left-10 bottom-[-4rem]"
          src={`/image/books/book${path}.png`}
          alt={title}
          width={100}
          height={100}
        />
        <div className="flex flex-col items-center p-4">
          <h3 className="text-lg w-full font-bold truncate">{title}</h3>
          <p className="w-full line-clamp-2 text-center my-3">{content}</p>
          <time className="self-end text-slate-300">{date.toString()}</time>
        </div>
      </article>
    </Link>
  );
}
