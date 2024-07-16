import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface LoginPromptModalProps {
  open: boolean;
  handleClose: () => void;
  handleLogin: () => void;
}

const LoginPromptModal: React.FC<LoginPromptModalProps> = ({ open, handleClose, handleLogin }) => {

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Iniciar sesión</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Para activar la membresía, debes iniciar sesión.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleLogin} color="primary">
          Iniciar sesión
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginPromptModal;
