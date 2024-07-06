export interface Habitacion {
  id: string;                  // ID of the room (PK) as a string
  type: string;           // Type of the room
  price: number;               // Price of the room (float)
  description: string;         // Description of the room
  state: string;              // Status of the room
  images: any[];            // Array of image URLs
  roomNumber: number;         // Room number
  services: any[];          // Array of services
  hotel?: string;
}

export interface HabitacionError {
  id?: string;
  type?: string;
  price?: string;
  description?: string;
  state?: string;
  images?: string,
  roomNumber?: string;
  services?: string,
}
