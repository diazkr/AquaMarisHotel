import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Rating } from '@mui/material';

interface CommentDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (comment: string, rating: number) => void;
}

const CommentDialog: React.FC<CommentDialogProps> = ({ open, onClose, onSubmit }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number | null>(null);

  const handleSubmit = () => {
    if (comment && rating !== null) {
      onSubmit(comment, rating);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Dejar Comentario y Calificación</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Comentario"
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommentDialog;

