"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useAuth } from "@/contextos/AuthContex";
import { Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";

const CloseSession: React.FC = () => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const handleSignOut = () => {
    logout();
    signOut();
    router.push("/")

  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    handleSignOut();
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} color="primary">
        <IoIosLogOut className=" font-semibold" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cerrar sesión"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Estás seguro que quieres cerrar sesión?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancelar
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus variant="outlined">
            Cerrar sesión
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CloseSession;
