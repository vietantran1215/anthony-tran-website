import { Post } from '@/types';
import React from 'react';
import PostPreview from './PostPreview';

interface IPostListProps {
  posts: Post[];
}

const PostList: React.FunctionComponent<IPostListProps> = ({ posts }) => {
  return (
    <>{posts.map(post => <PostPreview post={post} />)}</>
  );
};

export default PostList;
