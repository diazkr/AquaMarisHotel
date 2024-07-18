// src/components/FetchBookingForm.tsx
import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { getMockRooms } from "@/DataBase/MockDataRooms";
import { useRooms } from "@/contextos/RoomContext";
import { useFilters } from "@/contextos/FilterContext";
import dayjs from "dayjs";
import FormReservaHotel from "./FormReservaHome";
import { useRouter } from "next/navigation";
import { removeEmptyFields } from "@/helpers/removeEmptyFiles";

const FetchBookingForm: React.FC = () => {
  const {
    hotel,
    arriveDate,
    departureDate,
    people,
    setFilters,
    totalPage,
    setTotalPage,
  } = useFilters();
  const router = useRouter();
  const { setRooms } = useRooms();

  useEffect(() => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      arriveDate,
      departureDate,
      people,
    }));
  }, [arriveDate, departureDate, people, setFilters]);

  const handleBooking = async () => {
    try {
      const bookingData = {
        hotel,
        arrive_date: dayjs(arriveDate).format("YYYY-MM-DD"),
        departure_date: dayjs(departureDate).format("YYYY-MM-DD"),
        people,
      };

      const bookingDataReady = removeEmptyFields(bookingData);

      const params = new URLSearchParams(bookingDataReady).toString();
      console.log(params);
      const url = `${process.env.NEXT_PUBLIC_API_URL}/rooms/filter?${params}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      setRooms(result.allRooms);

      setTotalPage(result.totalPages);
      console.log("total de las paginas", totalPage);
      router.push("/lista");
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  return (
    <Container>
      <FormReservaHotel onBooking={handleBooking} />
    </Container>
  );
};

export default FetchBookingForm;
