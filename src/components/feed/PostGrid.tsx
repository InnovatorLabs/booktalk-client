import { PostType } from '@/service/posts';
// components
import PostCard from './PostCard';
import SearchInput from '../input/SearchInput';

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
        <div className="flex justify-between items-center w-full px-2 py-8">
          <h1 className="text-xl font-bold">{postTitle}</h1>
          <SearchInput />
        </div>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
