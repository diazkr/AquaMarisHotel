"use client"
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

interface CreateCommentProps {
  userId: string;
  roomId: string;
  comment: string;
  rating: number;
}

const CreateComment: React.FC<CreateCommentProps> = ({ userId, roomId, comment, rating }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    const data = {
      userId,
      roomId,
      comment,
      rating,
    };

    console.log(data);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);

      // Mostrar diálogo de confirmación
      setOpen(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleSubmit}>
        Enviar a revisión
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='text-green-900'>Comentario Enviado</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tu comentario se ha enviado a revisión.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateComment;
