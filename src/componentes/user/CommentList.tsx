import React from 'react';
import { Comentario } from '@/interfaces/UserInterface';
import CommentDetail from './CommentDetail';

interface CommentListProps {
  comments: Comentario[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="p-6 mx-auto w-full">
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <CommentDetail key={index} {...comment} />
        ))
      ) : (
        <p className="text-sm text-gray-700">No hay comentarios disponibles.</p>
      )}
    </div>
  );
};

export default CommentList;
