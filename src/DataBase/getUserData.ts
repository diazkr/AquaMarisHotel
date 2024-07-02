// helpers/getUserData.ts
import { UserInterface, ReservationInterface, AccompanistInterface } from "@/interfaces/UserInterface";

export const getUserData = (id: string): UserInterface => {
  const reservations: ReservationInterface[] = [
    {
      id_reserva: "123e4567-e89b-12d3-a456-426614174000",
      id_usuario: id,
      id_habitacion: "123e4567-e89b-12d3-a456-426614174002",
      fecha_entrada: "2024-07-15",
      fecha_salida: "2024-07-20",
      estado_pago: "paid",
      acompanantes: [
        {
          id_acompanante: "123e4567-e89b-12d3-a456-426614174003",
          name: "John Doe",
          identificacion: "ABC123456",
        },
        {
          id_acompanante: "123e4567-e89b-12d3-a456-426614174004",
          name: "Jane Doe",
          identificacion: "XYZ789101",
        },
      ],
    },
  ];

  const user: UserInterface = {
    id,
    name: "Karen Diaz Cardozo",
    email: "kdiazc@unal.edu.co",
    phone: "2661170",
    country: "Colombia",
    reservations,
  };

  return user;
};
