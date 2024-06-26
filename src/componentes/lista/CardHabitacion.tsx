import { Habitacion } from "@/interfaces/HabitacionInterface";
import { Button } from "@mui/material";

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

  const nameHabitacion = (tipo_habitacion: string, servicios: string[]): string => {
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

  return (
    <div className="my-2">
      <div className="flex bg-red-300 rounded-sm gap-4">
        <div className="w-[30%] bg-red-600">
          <img src={imagenes[0]} alt={`Imagen de ${tipo_habitacion}`} className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col justify-between p-4">
          <p className="font-bold">{nameHabitacion(tipo_habitacion, servicios)}</p>
          <p>2 adultos</p>
          <p className="text-gray-700">{descripcion}</p>
          <div>Información de la habitación</div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-slate-300 p-4 rounded-b-sm">
        <div className="flex gap-6">
          <p>Tarifa Web - Mejor Precio Garantizado</p>
          <div>5% de descuento para clientes premium</div>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold">USD ${precio}</p>
          <Button variant="contained" color="primary">Reservar</Button>
        </div>
      </div>
    </div>
  );
};

export default CardHabitacion;
