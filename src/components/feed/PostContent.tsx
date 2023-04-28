'use client';

import React from 'react';
import { PostType } from '@/service/posts';
import PostGrid from '@/components/feed/PostGrid';

type Props = {
  posts: PostType[];
};

export default function PostContent({ posts }: Props) {
  const [data, setData] = React.useState<PostType[]>(posts);
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

  return (
    <section>
      <PostGrid
        posts={data}
        onFollow={handleFollowUpdate}
        onFollowedId={followedById} //
      />
    </section>
  );
}
