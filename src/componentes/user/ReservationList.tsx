"use client";
import React, { useState } from "react";
import ReservationsDetails from "./ReservationsDetails";
import { ReservationInterface, Comentario } from "@/interfaces/UserInterface";
import { Button, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { TbCalendarSad } from "react-icons/tb";


interface ReservationsListProps {
  reservations: ReservationInterface[];
  onUpdate: () => void;
  onUpdateReservationStatus: (reservationId: string, status: string) => void;
}

const ReservationsList: React.FC<ReservationsListProps> = ({
  reservations, onUpdate, onUpdateReservationStatus
}) => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const router = useRouter()

  if (reservations.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center my-3'>

          <div className='text-5xl my-4 text-gray-500'>
          <TbCalendarSad />

          </div>

          <p className="text-sm text-gray-700">Por ahora no tienes ninguna reserva.</p>
          <p className="text-md text-gray-700">Te invitamos a conocer las maravillas de Aqua Maris</p>
          <div className="text-md text-gray-700 my-3">
            <Button variant="contained" onClick={()=>router.push("/")}>Ver nuestro hotel!</Button>
          </div>

        </div>
    );
  }

  return (
    <div>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <ReservationsDetails
            key={reservation.id}
            {...reservation}
            setComentarios={setComentarios}
            onUpdate={onUpdate}
            onUpdateReservationStatus={onUpdateReservationStatus}
          />
        </div>
      ))}
    </div>
  );
};

export default ReservationsList;
