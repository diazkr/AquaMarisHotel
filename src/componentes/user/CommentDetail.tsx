import React from 'react';
import { Comentario } from '@/interfaces/UserInterface';
import { FaStar } from 'react-icons/fa';

const CommentDetail: React.FC<Comentario> = ({ comment, rating, comment_date }) => {
  return (
    <div className="p-4 border-b border-gray-300">
      <div className="flex items-center mb-2">
        <FaStar className="mr-2 text-yellow-500" />
        <p className="text-sm font-semibold">{rating} / 5</p>
      </div>
      <p className="text-sm text-gray-700 mb-2">{comment}</p>
      <p className="text-xs text-gray-500">
        {new Date(comment_date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default CommentDetail;
