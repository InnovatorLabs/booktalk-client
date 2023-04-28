import { PostType } from '@/service/posts';
import PostCard from './PostCard';

type Props = {
  posts: PostType[];
  onFollow: (userName: string) => void;
  onFollowedId: Set<unknown>;
};

export default function PostGrid(props: Props) {
  const { posts, onFollow, onFollowedId } = props;

  return (
    <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts?.map(post => (
        <li key={post.id} className="mb-24">
          <PostCard
            post={post}
            onFollow={onFollow}
            onFollowedId={onFollowedId} //
          />
        </li>
      ))}
    </ul>
  );
}
