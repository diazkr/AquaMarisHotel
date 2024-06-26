"use client";

import React from 'react';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useRooms } from '@/contextos/RoomContext';
import CardHabitacion from './CardHabitacion';


const ListaHabitaciones: React.FC = () => {
  const { rooms } = useRooms();

  return (
    <Container>
      <List>
        {rooms.map((room, index) => (
          <ListItem key={index}>
            <CardHabitacion habitacion={room}></CardHabitacion>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ListaHabitaciones;
