import { Post } from '@/service/posts';
import PostCard from './PostCard';

type Props = { posts: Post[] };

export default function PostGrid({ posts }: Props) {
  return (
    <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts?.map(post => (
        <li key={post.id} className="mb-10">
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}