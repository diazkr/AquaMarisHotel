export interface AccompanistInterface {
    id_acompanante: string;
    name: string;
    identityCard: string;
  }
  
export interface ReservationInterface {
    reservation_id: string;
    userId: string;
    roomId: string;
    entry_date: string;
    departure_date: string;
    payment_status: string;
    companions: AccompanistInterface[];
  }
export interface UserInterface {
    id: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    reservations: ReservationInterface[];
    comentario: Comentario[];
  }

  export interface Comentario {
    id_comment: string;
    date: string;
    comment: string;
    qualification: string;
  }
  