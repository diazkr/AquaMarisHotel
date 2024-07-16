'use client'
import { useEffect, useState } from 'react';

type Comment = {
  id: string;
  comment: string;
  rating: number;
  comment_date: string;
  comment_status: string;
};

function RoomComments({ roomId }: { roomId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment/room/${roomId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const commentsData = await response.json();
      
        // console.log('API response:', commentsData);

        // Check if the response contains 'comments' array
        if (commentsData.comments && Array.isArray(commentsData.comments)) {
          setComments(commentsData.comments);
        } else if (Array.isArray(commentsData)) {
          
          setComments(commentsData);
        } else {
          console.error('Unexpected data format:', commentsData);
          throw new Error('Data returned is not in expected format');
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        setError('Error al cargar los comentarios');
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [roomId]);

  if (loading) {
    return <p>Cargando comentarios...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2><strong>🌟 Comentarios de la habitación:</strong></h2>
      {comments.length === 0 ? (
        <p><strong>No hay comentarios disponibles para esta habitación.</strong> </p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p><strong>Opinión:</strong> {comment.comment}</p>
              {/* <p>Rating: {comment.rating}</p> */}
              <p><strong>Fecha de comentario: </strong>  {comment.comment_date}</p>
              {/* <p>Estado del comentario: {comment.comment_status}</p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RoomComments;



