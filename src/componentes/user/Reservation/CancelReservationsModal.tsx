import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface CancelReservationModalProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

const CancelReservationModal: React.FC<CancelReservationModalProps> = ({ open, handleClose, handleConfirm }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Cancelar Reserva</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ¿Estás seguro de que deseas cancelar esta reserva? Esta acción no se puede deshacer. 

          <p>En caso de ser cancelada la reservación, esta se verá reflejada en unos minutos</p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          No
        </Button>
        <Button onClick={handleConfirm} variant='outlined' color="error">
          Sí, cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelReservationModal;
