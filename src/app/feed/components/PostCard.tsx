import Image from 'next/image';
import cx from 'classnames';
// types
import { PostType } from '@/types/feed';
// icons
import ShareIcon from '@/components/icons/ShareIcon';
import HeartIcon from '@/components/icons/HeartIcon';
// config
import { FOLLOW_BUTTON_CLASS } from '@/config/feed';

type Props = {
  post: PostType;
  onFollow: (userName: string) => void;
  onFollowedId: Set<unknown>;
};

export default function PostCard(props: Props) {
  const { post, onFollow, onFollowedId } = props;

  const handleFollowBtnClick = () => {
    onFollow(post.userName);
  };

  return (
    <article className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2">
      <div>
        <div className="flex items-center border-b pb-2">
          <Image
            src={`/image/profile/profile${post.profileImage}.png`}
            alt={post.title}
            width={40}
            height={40}
          />
          <div className="flex flex-col flex-1 pl-3">
            <h3 className="text-sm font-semibold">{post.userName}</h3>
            <h4 className="text-xs text-slate-300">{post.date.toString()}</h4>
          </div>
          <button
            type="button"
            className={
              onFollowedId.has(post.userName)
                ? cx(FOLLOW_BUTTON_CLASS, 'bg-[#ADADAD]')
                : cx(FOLLOW_BUTTON_CLASS, 'bg-[#89CFF0]')
            }
            onClick={handleFollowBtnClick}
          >
            팔로우
          </button>
        </div>
        <div>
          <Image
            className="absolute left-10 bottom-[-4rem]"
            src={`/image/books/book${post.path}.png`}
            alt={post.title}
            width={100}
            height={100}
          />
          <div className="flex flex-col items-center p-4">
            <h3 className="text-lg w-full font-bold truncate">{post.title}</h3>
            <p className="w-full line-clamp-2 text-center my-3">
              {post.content}
            </p>
            <time className="self-end text-slate-300">
              {post.date.toString()}
            </time>
          </div>
        </div>
      </div>
      <div className="flex self-end gap-3 pr-4">
        <ShareIcon />
        <HeartIcon />
      </div>
    </article>
  );
}
