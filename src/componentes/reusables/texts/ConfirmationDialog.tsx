import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { CiCircleCheck } from 'react-icons/ci';

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ open, onClose, onConfirm }) => {
  return (
    <div>
    <Dialog open={open} onClose={onClose} PaperProps={{ style: { padding: '0.5em', minWidth: '400px' } }}>
        
      <p className='p-4 text-lg text-green-950'>Habitación creada correctamente</p>
      <div className=' flex flex-col justify-center items-center'>
      <CiCircleCheck className='text-green-600 text-6xl text-center' />
      </div>

      <DialogContent>
        <DialogContentText className='text-sm'>
          ¿Quieres ver la nueva habitación?
        </DialogContentText>
      </DialogContent>
      <DialogActions className='flex justify-center items-center gap-4'>
        <Button onClick={onClose} color="primary">
          No, quedarse aquí
        </Button>
        <Button onClick={onConfirm} color="primary" variant="contained">
          Sí, mostrar
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  );
};

export default ConfirmationDialog;
