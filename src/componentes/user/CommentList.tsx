import React, { useState, useEffect } from 'react';
import { Comentario } from '@/interfaces/UserInterface';
import CommentDetail from './CommentDetail';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { GoDiscussionClosed } from "react-icons/go";

interface CommentListProps {
  id: string;
}

const CommentList: React.FC<CommentListProps> = ({ id }) => {
  const [comments, setComments] = useState<Comentario[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setComments(data.user.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [id]);

  return (
    <div className="p-6 mx-auto w-full">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-700">Cargando comentarios...</p>
        </div>
      ) : comments.length > 0 ? (
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
            <Button variant="contained" onClick={() => router.push("/")}>Ver nuestro hotel!</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentList;
