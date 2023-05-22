'use client';

import React from 'react';
// coponents
import PostGrid from './PostGrid';
import FollowedCarousel from './FollowedCarousel';
// types
import { PostType } from '@/types/feed';

type Props = {
  posts: PostType[];
};

export default function PostContent({ posts }: Props) {
  const [followedData, setFollowedData] = React.useState<PostType[]>([]);
  const [followedById, setFollowedById] = React.useState(new Set());

  const handleFollowUpdate = (userName: string) => {
    const updateFollowById = new Set(followedById);
    if (updateFollowById.has(userName)) {
      updateFollowById.delete(userName);
    } else {
      updateFollowById.add(userName);
    }
    setFollowedById(updateFollowById);
  };

  React.useEffect(() => {
    const baseFollowById = new Set(followedById);
    const filterPosts = posts.reduce((res: PostType[], cur: PostType) => {
      if (baseFollowById.has(cur.userName)) {
        return [...res, cur];
      }
      return res;
    }, []);
    setFollowedData(filterPosts);
  }, [posts, followedById]);

  return (
    <section>
      <FollowedCarousel
        data={followedData}
        onFollow={handleFollowUpdate}
        onFollowedId={followedById}
      />
      <PostGrid
        postTitle="포스팅"
        posts={posts}
        onFollow={handleFollowUpdate}
        onFollowedId={followedById}
      />
    </section>
  );
}
