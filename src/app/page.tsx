"use client";
import ImageHero from "@/componentes/Home/ImageHero";
import FetchBookingForm from "@/componentes/reusables/forms/FetchFormReserva";
import DescriptionHome from "@/componentes/vistas/vistaHome/DescriptionHome";
import Gallery from "@/componentes/vistas/vistaHome/Gallery";
import ImageText from "@/componentes/vistas/vistaHome/ImageText";
import ImageTextExp from "@/componentes/vistas/vistaHome/ImageTextExp";
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

      <div className="w-[100%] flex justify-center">
        <DescriptionHome />
      </div>

      <div className="flex w-[100%] my-2 gap-2">
        <div className="w-1/2">
          <ImageTextExp />
        </div>
        <div className="w-1/2">
          <ImageText />
        </div>
      </div>

      <div className="w-[100%] flex flex-col justify-center items-center">
        <div className="my-3 text-2xl text-gray-700 tracking-wider font-medium w-2/3 text-center flex flex-col justify-center items-center">
        <p>CONOCE NUESTROS SERVICIOS</p>
          
          <div className="w-28 h-1 mt-2 bg-cyan-700">

          </div>
        </div>

        
      </div>

      <div className="mb-3">
          <Gallery/>
        </div>
    </div>
  );
}
