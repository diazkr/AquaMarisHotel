"use client";

import FilterSidebar from "@/componentes/filtros/FilterSideBar";
import OrderButton from "@/componentes/filtros/OrderButton";
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

      <div className="flex my-4 justify-center bg px-6">
        <div className="w-1/4">
          <FilterSidebar />
        </div>
        <div className="w-2/3">
          <div className="flex justify-end w-[100%] pr-8">
            <OrderButton/>
          </div>
          <ListaHabitaciones />
        </div>
      </div>
    </div>
  );
}
