'use client'
import React, { useState } from 'react';
import {
    TextField,
    Button,
    IconButton,
    InputAdornment,
    Typography,
    Box,
    Divider,
  } from "@mui/material";
  import { Visibility, VisibilityOff } from "@mui/icons-material";
  import { IoIosArrowForward } from "react-icons/io";
  import Image from "next/image";
  import { useRouter } from "next/navigation";
  import { Alert, Snackbar} from '@mui/material';

const VerificationForm = () => {
    const router = useRouter();
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/mail/register/code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    code,
                }),
            });

            const data = await response.json();
            console.log(data)
            if (response.ok) {
                //alert('¡Verificación exitosa! Usuario logeado.');
                setOpen(true);
                router.push("/register")
            } else {
                setError('Código de verificación incorrecto.');
            }
        } catch (error) {
            console.error('Error al verificar:', error);
            setError('Error al verificar el código de verificación.');
        }
    };

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={3}
            borderRadius={2}
            className="w-[80%]"
        >
            <div>
                <Image src="/logos/iconoA.svg" alt="" width={70} height={70} />
            </div>
            <Typography variant="h5" component="div" gutterBottom className="text-[#175358]">
                Confirmacion de Cuenta
            </Typography>
            <TextField
                label="correo@example.com"
                variant="outlined"
                margin="normal"
                fullWidth
                className="shadow-md bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                className="shadow-md bg-white"
                label="Codigo"
                variant="outlined"
                margin="normal"
                type="text"
                fullWidth
                value={code}
                onChange={(e) => setCode(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                        >
                        </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                className="gradient-button my-1 w-[100%]"
                onClick={handleSubmit}
            >
                <span>Continuar</span>
                <IoIosArrowForward className="icon-right text-lg" />
            </Button>

            <Snackbar 
                open={open} 
                autoHideDuration={6000} 
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Ajusta la posición aquí
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Inicio de sesión exitoso
                </Alert>
      </Snackbar>

        </Box>
    );
};


export default VerificationForm;