import cx from 'classnames';
// components
import MultiCarousel from '@/components/carousel/MultiCarousel';
import FollowedSkeleton from '@/components/skeleton/FollowedSkeleton';

// types
import { PostType } from '@/service/posts';
import PostCard from './PostCard';

type Props = {
  data: PostType[];
  onFollow: (userName: string) => void;
  onFollowedId: Set<unknown>;
};

const CAROUSEL_CLASS = [
  'overflow-hidden',
  'ease-in-out duration-500', //
];

export default function FollowedCarousel(props: Props) {
  const { data, onFollow, onFollowedId } = props;

  return (
    <div
      className={
        data.length
          ? cx(CAROUSEL_CLASS, 'h-[30rem]')
          : cx(CAROUSEL_CLASS, 'h-0')
      }
    >
      {data.length ? (
        <section className="animate-[fadeIn_0.3s_ease-in-out]">
          <div className="flex items-center w-full h-[100px] px-2">
            <h1 className="text-xl font-bold">내가 팔로우 한 독서가</h1>
          </div>
          <MultiCarousel>
            {data.map(item => (
              <PostCard
                key={item.path}
                post={item}
                onFollow={onFollow}
                onFollowedId={onFollowedId}
              />
            ))}
          </MultiCarousel>
        </section>
      ) : (
        <FollowedSkeleton /> //
      )}
    </div>
  );
}
