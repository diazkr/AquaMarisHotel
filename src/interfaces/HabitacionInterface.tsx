export interface Habitacion {
    id_habitacion: string;            // ID de la habitación (PK) como string
    tipo_habitacion: string;          // Tipo de habitación
    precio: number;                   // Precio de la habitación (float)
    descripcion: string;              // Descripción de la habitación
    estado: string;                   // Estado de la habitación
    imagenes: string[];               // Array de URLs de imágenes
    numero_habitacion: number;        // Número de la habitación
    servicios: string[];              // Array de servicios
  }
  