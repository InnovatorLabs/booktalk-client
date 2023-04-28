import { PostType } from '@/service/posts';
import PostCard from './PostCard';

type Props = {
  postTitle?: string;
  posts: PostType[];
  onFollow: (userName: string) => void;
  onFollowedId: Set<unknown>;
};

export default function PostGrid(props: Props) {
  const { postTitle, posts, onFollow, onFollowedId } = props;

  return (
    <>
      {postTitle && (
        <div className="flex items-center w-full px-2 py-8">
          <h1 className="text-xl font-bold">{postTitle}</h1>
        </div>
      )}
      <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts?.map(post => (
          <li key={post.id} className="mb-20">
            <PostCard
              post={post}
              onFollow={onFollow}
              onFollowedId={onFollowedId}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
