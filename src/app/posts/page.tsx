import React, { use, useEffect } from 'react';
import { FIELD } from '../../constants';
import { Api } from '../../utils/api'
import PostList from '@/components/PostList';

interface IPostsProps {
}

const fetchPosts = async (fieldIds: string[]) => {
  const queryParams = new URLSearchParams({
    fieldIds: fieldIds.toString()
  }).toString();
  try {
    const posts = await Api.get('/api/posts?' + queryParams, {
      cache: 'no-store'
    })
    return posts;
  } catch (e) {
    console.error(e);
  }
}

const Posts: React.FunctionComponent<IPostsProps> = () => {
  const posts = use(fetchPosts([
    FIELD.TITLE.ID,
    FIELD.LEVELS.ID,
    FIELD.CATEGORIES.ID
  ]));
  return (
    <>
      <h1>Posts</h1>
      
      <PostList posts={posts} />
    </>
  );
};

export default Posts;
