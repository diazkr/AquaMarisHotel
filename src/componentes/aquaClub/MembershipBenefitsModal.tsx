import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, ListItem, List, ListItemIcon, ListItemText } from '@mui/material';
import { FaRegCheckCircle } from "react-icons/fa";

interface MembershipBenefitsModalProps {
  open: boolean;
  handleClose: () => void;
}

const MembershipBenefitsModal: React.FC<MembershipBenefitsModalProps> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ya eres miembro</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <FaRegCheckCircle style={{ color: '#0d9488' }} />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '0.75rem' }} className="text-gra-600" primary="Hotel AquaMaris no realizará devoluciones de dinero por suscripciones canceladas." />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <FaRegCheckCircle style={{ color: '#0d9488' }} />
            </ListItemIcon>
            <ListItemText primary="La cancelación de la membresía se hará efectiva máximo 24h después de la confirmación." />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <FaRegCheckCircle style={{ color: '#0d9488' }} />
            </ListItemIcon>
            <ListItemText primary="No se otorgarán créditos ni reembolsos por períodos parciales de membresía." />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <FaRegCheckCircle style={{ color: '#0d9488' }} />
            </ListItemIcon>
            <ListItemText primary="Al cancelar la membresía, perderás acceso a todos los beneficios exclusivos." />
          </ListItem>
            
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MembershipBenefitsModal;
