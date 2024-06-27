"use client";

import FilterSidebar from "@/componentes/filtros/FilterSideBar";
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

      <div className="flex my-4 justify-center">
        <div className="w-1/6">
          <FilterSidebar />
        </div>
        <div >
          <ListaHabitaciones />
        </div>
      </div>
    </div>
  );
}
