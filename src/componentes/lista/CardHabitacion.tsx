import { Habitacion } from "@/interfaces/HabitacionInterface";
import { Button } from "@mui/material";
import {
  FaWifi,
  FaTv,
  FaWater,
  FaSnowflake,
  FaFire,
  FaLock,
  FaParking,
  FaCoffee,
  FaIceCream,
  FaHotTub,
} from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { GiPalmTree } from "react-icons/gi";
import { IoMdSend } from "react-icons/io";
import SimpleCarousel from "./CarouselComponent";

interface CardHabitacionProps {
  habitacion: Habitacion;
}

const CardHabitacion: React.FC<CardHabitacionProps> = ({ habitacion }) => {
  const {
    id_habitacion,
    tipo_habitacion,
    precio,
    descripcion,
    estado,
    imagenes,
    numero_habitacion,
    servicios,
  } = habitacion;

  const nameHabitacion = (
    tipo_habitacion: string,
    servicios: string[]
  ): string => {
    let name = `Habitación tipo ${tipo_habitacion}`;

    if (servicios.includes("Vista al mar")) {
      name += " con vista al mar";
    }

    if (tipo_habitacion === "suite" && servicios.includes("Jacuzzi")) {
      name = "Suite de lujo con jacuzzi";
    } else if (tipo_habitacion === "deluxe") {
      name = "Habitación Deluxe con todas las comodidades";
    } else if (tipo_habitacion === "doble") {
      name = "Habitación Doble perfecta para parejas";
    } else if (tipo_habitacion === "familiar") {
      name = "Habitación Familiar ideal para familias grandes";
    }

    return name;
  };

  const capacidadHabitacion = (tipo_habitacion: string): number => {
    switch (tipo_habitacion) {
      case "estandar":
        return 2;
      case "doble":
        return 2;
      case "deluxe":
        return 3;
      case "suite":
        return 4;
      case "familiar":
        return 6;
      default:
        return 1; // Valor predeterminado en caso de que el tipo de habitación no coincida
    }
  };

  const renderIcon = (servicio: string) => {
    switch (servicio) {
      case "Wi-Fi":
        return <FaWifi key={servicio} />;
      case "Television":
        return <FaTv key={servicio} />;
      case "Vista al mar":
        return <FaWater key={servicio} />;
      case "Aire acondicionado":
        return <FaSnowflake key={servicio} />;
      case "Calefaccion":
        return <FaFire key={servicio} />;
      case "Caja fuerte":
        return <FaLock key={servicio} />;
      case "Estacionamiento":
        return <FaParking key={servicio} />;
      case "Desayuno":
        return <FaCoffee key={servicio} />;
      case "Nevera":
        return <FaIceCream key={servicio} />;
      case "Jacuzzi":
        return <FaHotTub key={servicio} />;
      default:
        return null;
    }
  };

  return (
    <div className="my-2 border border-gray-300">
      <div className="flex rounded-sm gap-4">
        <div className="w-[30%] bg-red-600">
        <SimpleCarousel images={imagenes} /> 
        </div>
        <div className="flex flex-col p-4 gap-1 text-[#07282C]">
          <p className=" text-lg font-medium">
            {nameHabitacion(tipo_habitacion, servicios)}
          </p>
          <p>{capacidadHabitacion(tipo_habitacion)} adultos</p>
          <div className="flex space-x-2 text-2xl text-[#17858A] my-3">
            {servicios.map((servicio) => (
              <div
                key={servicio}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300"
              >
                {renderIcon(servicio)}
              </div>
            ))}
          </div>
          <div className="inline-block">
            <Button
              variant="outlined"
              size="small"
              startIcon={<CiCircleMore />}
              sx={{ width: "auto" }}
            >
              Información de la habitación
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-slate-200 p-4 gap-12 rounded-b-sm ">
        <div className="flex  gap-2 items-center">
          <p className="text-gray-600">Tarifa Web - Mejor Precio Garantizado</p>
          <div className="text-sm bg-orange-100 p-1 px-2 border border-orange-200 text-amber-600">
            -5% de descuento para clientes premium
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-bold">USD ${precio}</p>
          <Button
            variant="contained"
            color="primary"
            endIcon={<IoMdSend style={{ marginLeft: "1em" }} />}
          >
            Elegir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardHabitacion;
