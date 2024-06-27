import { Habitacion } from "@/interfaces/HabitacionInterface";

export const getMockRoomsFilter = (filter:any): Habitacion[] => {
  return [
    {
      id: "3f50c0d0-4e80-4c9e-bb6d-2f7180ff6dfb",
      type: "standard",
      price: 100,
      description:
        "Standard room with sea view. Enjoy the comfort of this room with all basic amenities, perfect for a short and relaxing stay.",
      state: "available",
      images: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      roomNumber: 101,
      services: ["wifi", "television", "seaView", "airConditioning"],
    },
    {
      id: "2a14f5a5-3b98-4e8b-9cf7-2e86a8763e14",
      type: "suite",
      price: 200,
      description:
        "Luxury suite with private balcony and stunning views. Ideal for those seeking a high-end experience with exclusive amenities.",
      state: "available",
      images: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      roomNumber: 102,
      services: ["wifi", "television", "seaView", "airConditioning", "jacuzzi"],
    }
  ];
};
