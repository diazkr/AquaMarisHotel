import { Habitacion } from "@/interfaces/HabitacionInterface";

export const getMockRooms = (): Habitacion[] => {
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
    },
    {
      id: "7f3b9f5d-8f5a-4f6a-9f1e-85f8e8b2c1f1",
      type: "double",
      price: 150,
      description:
        "Double room with two comfortable beds and all necessary amenities for a pleasant stay. Perfect for friends or travel companions.",
      state: "available",
      images: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      roomNumber: 103,
      services: ["wifi", "television", "airConditioning", "heating"],
    },
    {
      id: "9c63b5c9-4a58-4e8b-8d1e-73f8b6b5c1c8",
      type: "deluxe",
      price: 250,
      description:
        "Deluxe room with jacuzzi and panoramic view. This spacious room offers luxury and comfort with modern facilities for a memorable stay.",
      state: "available",
      images: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      roomNumber: 104,
      services: ["wifi", "television", "seaView", "airConditioning", "jacuzzi", "safeBox"],
    },
    {
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
      ],
      roomNumber: 105,
      services: ["wifi", "television", "airConditioning", "heating", "breakfast", "fridge", "parking"],
    },
    {
      id: "af2f0cba-2f9b-4d0c-8a8e-6e8a8f8f8c8b",
      type: "standard",
      price: 100,
      description:
        "Standard room with modern decor and city view. An affordable and comfortable option for business or leisure travelers.",
      state: "available",
      images: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      roomNumber: 106,
      services: ["wifi", "television", "airConditioning"],
    },
    {
      id: "b8d8f8e8-5d8e-4e8e-8f8e-8f8e8f8e8f8e",
      type: "double",
      price: 150,
      description:
        "Double room with queen beds and private balcony. Perfect for couples looking for a romantic getaway with all amenities.",
      state: "available",
      images: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      roomNumber: 107,
      services: ["wifi", "television", "airConditioning", "heating", "safeBox"],
    },
    {
      id: "c9f9f9f9-9f9f-4f9f-9f9f-9f9f9f9f9f9f",
      type: "suite",
      price: 200,
      description:
        "Suite with separate living room and full kitchen. Ideal for long stays or those looking for a home away from home.",
      state: "available",
      images: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      roomNumber: 108,
      services: ["wifi", "television", "seaView", "airConditioning", "jacuzzi", "fridge"],
    },
    {
      id: "d0e0e0e0-0e0e-4e0e-0e0e-0e0e0e0e0e0e",
      type: "deluxe",
      price: 250,
      description:
        "Deluxe room with private terrace and butler service. Enjoy luxury and exclusivity with personalized attention and stunning views.",
      state: "available",
      images: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      roomNumber: 109,
      services: ["wifi", "television", "seaView", "airConditioning", "jacuzzi", "safeBox", "parking"],
    },
    {
      id: "e1f1f1f1-1f1f-4f1f-1f1f-1f1f1f1f1f1f",
      type: "family",
      price: 305,
      description:
        "Family room with play area and full kitchen. Perfect for families seeking comfort and fun, with all necessary facilities.",
      state: "available",
      images: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      roomNumber: 110,
      services: ["wifi", "television", "airConditioning", "heating", "breakfast", "fridge", "parking", "safeBox"],
    },
  ];
};
