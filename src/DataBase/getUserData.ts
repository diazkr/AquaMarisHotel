// helpers/getUserData.ts
import { UserInterface, ReservationInterface, AccompanistInterface, Comentario } from "@/interfaces/UserInterface";

export const getUserData = (id: string): UserInterface => {
  const reservations: ReservationInterface[] = [
    {
      reservation_id: "123e4567-e89b-12d3-a456-426614174000",
      userId: id,
      roomId: "123e4567-e89b-12d3-a456-426614174002",
      entry_date: "2024-07-15",
      departure_date: "2024-07-20",
      payment_status: "paid",
      companions: [
        {
          id_acompanante: "123e4567-e89b-12d3-a456-426614174003",
          name: "John Doe",
          identityCard: "ABC123456",
        },
        {
          id_acompanante: "123e4567-e89b-12d3-a456-426614174004",
          name: "Jane Doe",
          identityCard: "XYZ789101",
        },
      ],
    },
  ];

  const comentario: Comentario[] = [{
    id_comment: "12345678987564321",
    date: "2024-07-18",
    comment: "Muy buena atencion, me gusto mucho",
    qualification: "5 estrellas",
  }]
    

  const user: UserInterface = {
    id,
    name: "Karen Diaz Cardozo",
    email: "kdiazc@unal.edu.co",
    phone: "2661170",
    country: "Colombia",
    reservations,
    comentario,
  };

  return user;
};
