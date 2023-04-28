import { getAllPosts } from '@/service/posts';
import PostGrid from '@/components/PostGrid';

export default async function FeedPage() {
  const posts = await getAllPosts();

  return (
    <section className="flex flex-col flex-1 pb-20">
      <div className="flex items-end w-full h-[60px] px-2">
        <h1>포스팅</h1>
      </div>
      <PostGrid posts={posts} />
    </section>
  );
}
