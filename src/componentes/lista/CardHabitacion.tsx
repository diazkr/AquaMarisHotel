import { Habitacion } from "@/interfaces/HabitacionInterface";
import { Button } from "@mui/material";
import { FaWifi, FaTv, FaWater, FaSnowflake, FaFire, FaLock, FaParking, FaCoffee, FaIceCream, FaHotTub } from 'react-icons/fa';

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

  const capacidadHabitacion = (tipo_habitacion: string): number => {
    switch (tipo_habitacion) {
      case 'estandar':
        return 2;
      case 'doble':
        return 2;
      case 'deluxe':
        return 3;
      case 'suite':
        return 4;
      case 'familiar':
        return 6;
      default:
        return 1; // Valor predeterminado en caso de que el tipo de habitación no coincida
    }
  };

  const renderIcon = (servicio: string) => {
    switch (servicio) {
      case 'Wi-Fi':
        return <FaWifi key={servicio} />;
      case 'Television':
        return <FaTv key={servicio} />;
      case 'Vista al mar':
        return <FaWater key={servicio} />;
      case 'Aire acondicionado':
        return <FaSnowflake key={servicio} />;
      case 'Calefaccion':
        return <FaFire key={servicio} />;
      case 'Caja fuerte':
        return <FaLock key={servicio} />;
      case 'Estacionamiento':
        return <FaParking key={servicio} />;
      case 'Desayuno':
        return <FaCoffee key={servicio} />;
      case 'Nevera':
        return <FaIceCream key={servicio} />;
      case 'Jacuzzi':
        return <FaHotTub key={servicio} />;
      default:
        return null;
    }
  };

  return (
    <div className="my-2">
      <div className="flex bg-red-300 rounded-sm gap-4">
        <div className="w-[30%] bg-red-600">
          <img src={imagenes[0]} alt={`Imagen de ${tipo_habitacion}`} className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col justify-between p-4">
          <p className="font-bold">{nameHabitacion(tipo_habitacion, servicios)}</p>
          <p>{capacidadHabitacion(tipo_habitacion)} adultos</p>
          <div className="flex space-x-2">
            {servicios.map(servicio => renderIcon(servicio))}
          </div>
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
