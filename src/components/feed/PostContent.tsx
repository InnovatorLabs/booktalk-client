'use client';

import { PostType } from '@/service/posts';
import PostGrid from '@/components/feed/PostGrid';

type Props = {
  posts: PostType[];
};

export default function PostContent({ posts }: Props) {
  return (
    <section>
      <PostGrid posts={posts} />
    </section>
  );
}
