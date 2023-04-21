import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import { getAllPosts } from '@/service/posts';

export default async function BookPage() {
  const posts = await getAllPosts();

  return (
    <section className="flex flex-col flex-1">
      <Hero />
      <FeaturedPosts posts={posts} />
    </section>
  );
}
