import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  List,
  ListItemIcon,
  ListItemText,
  ListItem
} from "@mui/material";
import { MdCancel } from "react-icons/md";


interface CancelMembershipModalProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

const CancelMembershipModal: React.FC<CancelMembershipModalProps> = ({
  open,
  handleClose,
  handleConfirm,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Cancelar Membresía</DialogTitle>
      <DialogContent>
        <DialogContentText className="text-gray-700">
          ¿Estás seguro de que deseas cancelar tu membresía? Al hacerlo,
          perderás todos los beneficios asociados.
        </DialogContentText>
        <List>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <MdCancel style={{ color: '' }} />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '0.75rem' }} className="text-gra-600" primary="Hotel AquaMaris no realizará devoluciones de dinero por suscripciones canceladas." />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <MdCancel style={{ color: '' }} />
            </ListItemIcon>
            <ListItemText primary="La cancelación de la membresía se hará efectiva máximo 24h después de la confirmación." />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <MdCancel style={{ color: '' }} />
            </ListItemIcon>
            <ListItemText primary="No se otorgarán créditos ni reembolsos por períodos parciales de membresía." />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <MdCancel style={{ color: '' }} />
            </ListItemIcon>
            <ListItemText primary="Al cancelar la membresía, perderás acceso a todos los beneficios exclusivos." />
          </ListItem>
            
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} color="error" variant="outlined">
          Si, estoy seguro
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelMembershipModal;
