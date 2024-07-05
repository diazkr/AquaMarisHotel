import React, { Dispatch, SetStateAction } from "react";
import { ReservationInterface, Comentario } from "@/interfaces/UserInterface";
import { useState } from "react";
import { Button, Rating } from "@mui/material";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaRegClock,
  FaRegComments,
  FaTimesCircle,
  FaUser,
} from "react-icons/fa";
import CardHabitacionReserva from "./cardHabitacionReserva";

interface ReservationsDetailsProps extends ReservationInterface {
  setComentarios: Dispatch<SetStateAction<Comentario[]>>;
}

const ReservationsDetails: React.FC<ReservationsDetailsProps> = ({
  reservation_id,
  userId,
  room,
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
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === null) return;
    const comment_date = new Date().toISOString();
    const newComment: Comentario = { comment_date, comment, rating };
    setComentarios((prevComments) => [...prevComments, newComment]);
    setShowCommentForm(false);
    setComment("");
    setRating(null);
  };

  const getPaymentStatusInfo = (status: string) => {
    switch (status) {
      case "PENDING":
        return {
          text: "Pendiente",
          icon: <FaRegClock className="text-yellow-500 mr-2 text-xl" />,
        };
      case "APPROVED":
        return {
          text: "Aprobado",
          icon: <FaCheckCircle className="text-green-500 mr-2 text-xl" />,
        };
      case "FAILURE":
        return {
          text: "Fallido",
          icon: <FaTimesCircle className="text-red-500 mr-2 text-xl" />,
        };
      default:
        return {
          text: "Desconocido",
          icon: <FaRegClock className="text-gray-500 mr-2 text-xl" />,
        };
    }
  };

  const paymentStatusInfo = getPaymentStatusInfo(payment_status);

  return (
    <div className="mx-auto px-6 my-3 ">
      <div className="bg-gray-50 border border-gray-300 shadow-lg overflow-hidden p-6">
        <div className="mb-4 flex gap-1">
          <p className="text-sm font-semibold text-cyan-800">
            Código de reserva:{" "}
          </p>
          <p className="text-sm text-gray-900">{reservation_id}</p>
        </div>
        <div className="flex gap-3 justify-between">
          <div className="mb-4 flex flex-col items-center">
            <p className="text-sm font-semibold text-cyan-800 py-2">
              Fecha de Entrada
            </p>
            <div className="flex">
              <FaCalendarAlt className="mr-2  text-gray-600 text-xl" />
              <p className="text-sm text-gray-900 ml-2">{entry_date}</p>
            </div>
          </div>
          <div className="mb-4 flex flex-col items-center">
            <p className="text-sm font-semibold text-cyan-800 py-2">
              Fecha de Salida
            </p>
            <div className="flex">
              <FaCalendarAlt className="mr-2  text-gray-600 text-xl" />
              <p className="text-sm text-gray-900 ml-2">{departure_date}</p>
            </div>
          </div>
          <div className="mb-4 flex flex-col items-center">
            <p className="text-sm font-semibold text-cyan-800 py-2">
              Estado de pago
            </p>
            <div className="flex">
              {paymentStatusInfo.icon}
              <p className="text-sm text-gray-900 ml-2">
                {paymentStatusInfo.text}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-semibold text-cyan-800 py-2">
            Acompañantes
          </p>
          <div className="flex flex-wrap gap-3">
            {companions && companions.length > 0 ? (
              companions.map((a) => (
                <div
                  key={a.id_acompanante}
                  className="flex items-center text-sm text-gray-900"
                >
                  <FaUser className="mr-2 text-lg text-gray-600" />
                  <p>{a.name}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-900">Ninguno</p>
            )}
          </div>
        </div>

        <div>
          <CardHabitacionReserva {...room}></CardHabitacionReserva>
        </div>

        {isPastDepartureDate && (
          <div className="mt-4 flex justify-center">
            <Button
              variant="contained"
              onClick={() => setShowCommentForm(true)}
              startIcon={<FaRegComments />}
            >
              Dejar Comentarios
            </Button>
            {showCommentForm && (
              <form onSubmit={handleCommentSubmit} className="mt-4">
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold text-cyan-800 mb-2"
                    htmlFor="comment"
                  >
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
                  <label className="block text-sm font-semibold text-cyan-800 mb-2">
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
