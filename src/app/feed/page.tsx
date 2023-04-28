import { getAllPosts } from '@/service/posts';
import PostContent from '@/components/feed/PostContent';

export default async function FeedPage() {
  const posts = await getAllPosts();

  return (
    <section className="flex flex-col flex-1">
      <PostContent posts={posts} />
    </section>
  );
}
