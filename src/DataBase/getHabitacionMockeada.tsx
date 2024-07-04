import { Habitacion } from "@/interfaces/HabitacionInterface";

const getHabitacion = (): Habitacion => {
  return {
    id: "5b34d0c4-3f80-4a7b-9e8e-5f4f8d8e2c4c",
    type: "family",
    price: 300,
    description:
      "Family room with multiple beds and spacious areas. Ideal for large families, offering all necessary amenities for a comfortable and fun stay.",
    state: "occupied",
    images: [
      "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
      "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
      "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
      "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
    ],
    roomNumber: 105,
    services: ["wifi", "television", "airConditioning", "heater", "breakfast", "fridge", "parking"],
  };
};

export default getHabitacion;
