"use client";
import React, { useState } from "react";
import ReservationsDetails from "./ReservationsDetails";
import { ReservationInterface, Comentario } from "@/interfaces/UserInterface";
import { Divider, Typography } from "@mui/material";

interface ReservationsListProps {
  reservations: ReservationInterface[];
}

const ReservationsList: React.FC<ReservationsListProps> = ({
  reservations,
}) => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  if (reservations.length === 0) {
    return <p>No hay reservaciones disponibles.</p>;
  }

  return (
    <div>
      <Typography
        color="primary"
        className="text-center font-medium text-lg py-1"
      >
        Historial de reservas
      </Typography>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <ReservationsDetails
            key={reservation.id}
            {...reservation}
            setComentarios={setComentarios}
          />

          <Divider className="w-[100%]" />
        </div>
      ))}
    </div>
  );
};

export default ReservationsList;
