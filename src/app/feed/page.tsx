import { getAllPosts } from '@/service/posts';
import PostContent from '@/components/feed/PostContent';

export default async function FeedPage() {
  const posts = await getAllPosts();

  return (
    <section className="flex flex-col flex-1">
      <div className="flex items-center w-full px-2 py-8">
        <h1>포스팅</h1>
      </div>
      <PostContent posts={posts} />
    </section>
  );
}
