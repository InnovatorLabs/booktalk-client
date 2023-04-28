import Image from 'next/image';
import { PostType } from '@/service/posts';

type Props = { post: PostType };

export default function PostCard({
  post: { profileImage, userName, title, content, date, path },
}: Props) {
  return (
    <article className="relative h-full rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2">
      <div className="flex items-center border-b pb-2">
        <Image
          src={`/image/profile/profile${profileImage}.png`}
          alt={title}
          width={40}
          height={40}
        />
        <div className="flex flex-col flex-1 pl-3">
          <h3 className="text-sm font-semibold">{userName}</h3>
          <h4 className="text-xs text-slate-300">{date.toString()}</h4>
        </div>
        <button
          type="button"
          className="bg-[#89CFF0] text-xs text-white py-2 px-3"
        >
          팔로우
        </button>
      </div>
      <div>
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
      </div>
    </article>
  );
}
