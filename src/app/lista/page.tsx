"use client";

import ImageForm from "@/componentes/lista/ImageForm";
import ListaHabitaciones from "@/componentes/lista/ListaHabitaciones";
import FetchBookingForm from "@/componentes/reusables/forms/FetchFormReserva";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function PageLista() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ImageForm>
          <FetchBookingForm />
        </ImageForm>
      </LocalizationProvider>

      <ListaHabitaciones></ListaHabitaciones>
    </div>
  );
}
