import { Post } from '@/types';
import React from 'react';
import H2 from './ui/H2';
import { Badge } from './ui/badge';

interface IPostPreviewProps {
  post: Post;
}

const PostPreview: React.FunctionComponent<IPostPreviewProps> = ({ post }) => {
  return (
    <div>
      <H2>{post.title}</H2>
      <p>
        {post.levels.map(level => <Badge className='mr-1'>{level.name}</Badge>)}
      </p>
    </div>
  );
};

export default PostPreview;
