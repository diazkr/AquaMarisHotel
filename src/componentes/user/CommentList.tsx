import React from 'react';
import { Comentario } from '@/interfaces/UserInterface';
import CommentDetail from './CommentDetail';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { GoDiscussionClosed } from "react-icons/go";


interface CommentListProps {
  comments: Comentario[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const router = useRouter()
  return (
    <div className="p-6 mx-auto w-full">
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <CommentDetail key={index} {...comment} />
        ))
      ) : (
        <div className='flex flex-col justify-center items-center'>

          <div className='text-5xl my-4 text-gray-500'>
          <GoDiscussionClosed />

          </div>

          <p className="text-sm text-gray-700">No hay comentarios disponibles.</p>
          <p className="text-md text-gray-700">Para poder comentar debes haber vivido la experiencia Aqua Maris!</p>
          <div className="text-md text-gray-700 my-3">
            <Button variant="contained" onClick={()=>router.push("/")}>Ver nuestro hotel!</Button>
          </div>

        </div>
        
      )}
    </div>
  );
};

export default CommentList;
