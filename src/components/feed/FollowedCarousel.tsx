// components
import MultiCarousel from '../MultiCarousel';
import cx from 'classnames';

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
  'ease-out duration-700',
  'select-none',
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
        <section className="">
          <div className="flex items-center w-full px-2 py-8">
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
        <></> //
      )}
    </div>
  );
}
