"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
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
import CreateComment from "../reusables/botones/CreateComment";
import CopyToClipboard from "../reusables/texts/CopyComponent";
import { differenceInDays } from "date-fns";
import CancelReservationModal from "./Reservation/CancelReservationsModal";

interface ReservationsDetailsProps extends ReservationInterface {
  setComentarios: Dispatch<SetStateAction<Comentario[]>>;
}

const ReservationsDetails: React.FC<ReservationsDetailsProps> = ({
  id,
  user,
  room,
  check_in_date,
  check_out_date,
  paymentStatus,
  companions,
  setComentarios,
}) => {
  const departureDate = new Date(check_out_date);
  const currentDate = new Date();
  const isPastDepartureDate = departureDate <= currentDate;
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number | null>(5);

  const [isCancelButtonDisabled, setIsCancelButtonDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const daysUntilCheckIn = differenceInDays(
      new Date(check_in_date),
      new Date()
    );
    setIsCancelButtonDisabled(daysUntilCheckIn <= 3);
  }, [check_in_date]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === null) return;
    const comment_date = new Date().toISOString();
    const newComment: any = { comment_date, comment, rating };
    setComentarios((prevComments) => [...prevComments, newComment]);
    setShowCommentForm(false);
    setComment("");
    setRating(null);
  };

  const handleCancelReservation = () => {
    console.log(`La reserva con ID ${id} ha sido cancelada.`);
    setIsModalOpen(false);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const getPaymentStatusInfo = (status: string) => {
    switch (status) {
      case "IN_PROGRESS":
        return {
          text: "En proceso",
          icon: <FaRegClock className="text-yellow-500 mr-1 text-xl" />,
        };
      case "approved":
        return {
          text: "Aprobado",
          icon: <FaCheckCircle className="text-green-500 mr-1 text-xl" />,
        };
      case "PENDING":
        return {
          text: "Pendiente",
          icon: <FaRegClock className="text-yellow-500 mr-1 text-xl" />,
        };
      default:
        return {
          text: "Desconocido",
          icon: <FaRegClock className="text-gray-500 mr-1 text-xl" />,
        };
    }
  };

  const paymentStatusInfo = getPaymentStatusInfo(paymentStatus);

  return (
    <div className="mx-auto px-6 my-3 ">
      <div className="bg-gray-50 border border-gray-300 shadow-lg overflow-hidden p-6">
        <div className="mb-4 flex gap-3 justify-between items-center my-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-cyan-800">
              Código de reserva:{" "}
            </p>
            <div>
              <CopyToClipboard textToCopy={id}></CopyToClipboard>
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              color="error"
              onClick={handleOpenModal}
              disabled={isCancelButtonDisabled}
            >
              Cancelar Reserva
            </Button>
          </div>
        </div>
        <div className="flex gap-3 justify-between">
          <div className="mb-4 flex flex-col items-center">
            <p className="text-sm font-semibold text-cyan-800 py-2">
              Fecha de Entrada
            </p>
            <div className="flex">
              <FaCalendarAlt className="mr-2  text-gray-600 text-xl" />
              <p className="text-sm text-gray-900 ml-2">{check_in_date}</p>
            </div>
          </div>
          <div className="mb-4 flex flex-col items-center">
            <p className="text-sm font-semibold text-cyan-800 py-2">
              Fecha de Salida
            </p>
            <div className="flex">
              <FaCalendarAlt className="mr-2  text-gray-600 text-xl" />
              <p className="text-sm text-gray-900 ml-2">{check_out_date}</p>
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

        <div>
          <CardHabitacionReserva {...room}></CardHabitacionReserva>
        </div>

        {isPastDepartureDate && (
          <div className="mt-4 flex flex-col justify-center">
            <div className="flex justify-center items-center">
              <Button
                variant="contained"
                onClick={() => setShowCommentForm(true)}
                startIcon={<FaRegComments />}
              >
                Agregar comentario de tu experiencia
              </Button>
            </div>

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
                <div className="w-[100%] flex justify-center items-center gap-2">
                  <Button
                    variant="outlined"
                    onClick={() => setShowCommentForm(false)}
                  >
                    Cancelar
                  </Button>
                  <CreateComment
                    userId={user.id}
                    roomId={room.id}
                    comment={comment}
                    rating={rating ?? 0}
                  ></CreateComment>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
      <CancelReservationModal
                open={isModalOpen}
                handleClose={handleCloseModal}
                handleConfirm={handleCancelReservation}
              />
    </div>
  );
};

export default ReservationsDetails;
