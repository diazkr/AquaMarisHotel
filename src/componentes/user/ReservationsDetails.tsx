import React, { Dispatch, SetStateAction } from 'react';
import { ReservationInterface, Comentario } from '@/interfaces/UserInterface';
import { useState } from 'react';
import { Rating } from '@mui/material';
import Link from 'next/link';

interface ReservationsDetailsProps extends ReservationInterface {
  setComentarios: Dispatch<SetStateAction<Comentario[]>>;
}

const ReservationsDetails: React.FC<ReservationsDetailsProps> = ({
  reservation_id,
  userId,
  roomId,
  entry_date,
  departure_date,
  payment_status,
  companions,
  setComentarios,
}) => {
  const departureDate = new Date(departure_date);
  const currentDate = new Date();
  const isPastDepartureDate = departureDate <= currentDate;
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number | null>(null);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === null) return;

    const newComment: Comentario = { userId, roomId, comment, rating };
    setComentarios((prevComments) => [...prevComments, newComment]);
    setShowCommentForm(false);
    setComment('');
    setRating(null);
  };

  return (
    <div className="max-w-2xl mx-auto my-8 px-6">
      <h2 className="text-3xl font-semibold text-teal-600 mb-6 text-center">
        Historial de Reservas
      </h2>
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden p-6">
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700">Reserva</p>
          <p className="text-sm text-gray-900">{reservation_id}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700">Usuario</p>
          <p className="text-sm text-gray-900">{userId}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700">Habitacion</p>
          <p className="text-sm text-gray-900">{roomId}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700">Fecha de Entrada</p>
          <p className="text-sm text-gray-900">{entry_date}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700">Fecha de salida</p>
          <p className="text-sm text-gray-900">{departure_date}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700">Estado de pago</p>
          <p className="text-sm text-gray-900">{payment_status}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700">Acompañantes</p>
          <p className="text-sm text-gray-900">
            {companions ? companions.map((a) => a.name).join(', ') : 'Ninguno'}
          </p>
        </div>

        <Link href={`/rooms/${roomId}`}>
          <button
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
            >
              Ver habitacion reservada
            </button>
        </Link>
          
        {isPastDepartureDate && (
          <div className="mt-4">
            <button
              className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              onClick={() => setShowCommentForm(true)}
            >
              Dejar Comentarios
            </button>
            {showCommentForm && (
              <form onSubmit={handleCommentSubmit} className="mt-4">
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="comment">
                    Comentario
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rating
                  </label>
                  <Rating
                    name="rating"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    
                  />
                </div>
                <button
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationsDetails;



