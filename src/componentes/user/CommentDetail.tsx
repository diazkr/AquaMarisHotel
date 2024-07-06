import React from 'react';
import { Comentario } from '@/interfaces/UserInterface';
import { Rating } from '@mantine/core';

const CommentDetail: React.FC<Comentario> = ({ comment, rating, comment_date, comment_status }) => {
  const statusColors = {
    approved: 'bg-green-100 text-green-700',
    in_process: 'bg-orange-100 text-orange-700',
    denied: 'bg-red-100 text-red-700',
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return statusColors.approved;
      case 'in_process':
        return statusColors.in_process;
      case 'denied':
        return statusColors.denied;
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-4 border-b border-gray-300">
      <div className='flex justify-between'>
      <p className='text-sm font-normal'>ID de la reserva: RSGCH</p>
      <div className={`p-1 ${getStatusColor(comment_status)}`}>
        <p>{comment_status}</p>

      </div>
      

      </div>
      
      <Rating name="read-only" value={rating} readOnly />

      
      <p className="text-xs text-gray-500 my-2">
        {new Date(comment_date).toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-700">{comment}</p>
      
    </div>
  );
};

export default CommentDetail;
