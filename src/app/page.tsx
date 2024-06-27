"use client";
import ImageHero from "@/componentes/Home/ImageHero";
import FetchBookingForm from "@/componentes/reusables/forms/FetchFormReserva";
import { RoomProvider } from "@/contextos/RoomContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Home() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ImageHero>
          <FetchBookingForm />
        </ImageHero>
      </LocalizationProvider>
    </div>
  );
}
