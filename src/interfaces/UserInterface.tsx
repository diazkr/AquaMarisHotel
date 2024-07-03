export interface AccompanistInterface {
    id_acompanante: string;
    name: string;
    identificacion: string;
  }
  
export interface ReservationInterface {
    id_reserva: string;
    id_usuario: string;
    id_habitacion: string;
    fecha_entrada: string;
    fecha_salida: string;
    estado_pago: string;
    acompanantes: AccompanistInterface[];
  }
export interface UserInterface {
    id: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    reservations: ReservationInterface[];
  }

  export interface Comentario {
    id_comentario: string;
    fecha: string;
    comentario: string;
    calificacion: number;
  }
  