export interface Habitacion {
  id: string;                  // ID of the room (PK) as a string
  type: string;           // Type of the room
  price: number;               // Price of the room (float)
  description: string;         // Description of the room
  state: string;              // Status of the room
  images: string[];            // Array of image URLs
  roomNumber: number;         // Room number
  services: string[];          // Array of services
  hotel?: string;
}
