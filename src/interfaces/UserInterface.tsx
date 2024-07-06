export interface AccompanistInterface {
    id_acompanante: string;
    name: string;
    identityCard: string;
  }
  
export interface ReservationInterface {
    id: string;
    user: any;
    roomId: string;
    check_in_date: string;
    check_out_date: string;
    paymentStatus: string;
    companions: AccompanistInterface[];
    room: any;
  }
export interface UserInterface {
    id: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    reservations: ReservationInterface[];
    comentario: Comentario[];
    photo: string;
  }

  export interface Comentario {
    comment: string;
    rating: number;
    comment_date:string;
    comment_status: string;
  }
  