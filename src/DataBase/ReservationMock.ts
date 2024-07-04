import { ReservationInterface } from "@/interfaces/UserInterface";

const getReservations = (): ReservationInterface[] => {
  const id = "exampleUserId"; // Asegúrate de definir el ID de usuario correctamente
  return [
    {
      reservation_id: "123e4567-e89b-12d3-a456-426614174000",
      userId: id,
      roomId: "123e4567-e89b-12d3-a456-426614174002",
      entry_date: "2024-07-01",
      departure_date: "2024-07-02",
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
    {
      reservation_id: "123e4567-e89b-12d3-a456-426614174001",
      userId: id,
      roomId: "123e4567-e89b-12d3-a456-426614174002",
      entry_date: "2024-07-01",
      departure_date: "2024-07-02",
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
    }
  ];
};

export default getReservations;
