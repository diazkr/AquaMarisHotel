"use client"
import { Habitacion } from '@/interfaces/HabitacionInterface';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// soy un comentario

interface RoomContextType {
  rooms: Habitacion[];
  setRooms: (rooms: Habitacion[]) => void;
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const RoomProvider = ({ children }: { children: ReactNode }) => {
  const [rooms, setRooms] = useState<Habitacion[]>([]);

  return (
    <RoomContext.Provider value={{ rooms, setRooms }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRooms = () => {
  const context = useContext(RoomContext);
  if (context === undefined) {
    throw new Error('useRooms must be used within a RoomProvider');
  }
  return context;
};
