'use client';

import { Post } from '@/service/posts';
import PostGrid from '@/components/PostsGrid';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  posts: Post[];
};

export default function FeaturedPosts({ posts }: Props) {
  return (
    <section className="pb-20">
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
      <PostGrid posts={posts} />
    </section>
  );
}
