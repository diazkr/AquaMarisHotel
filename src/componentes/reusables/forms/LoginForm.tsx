"use client";
import React, { useState } from "react";
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
import GoogleButton from "../botones/GoogleButton";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
        Inicia sesión
      </Typography>
      <TextField label="correo@example.com" variant="outlined" margin="normal" fullWidth className=" shadow-md bg-white"/>
      <TextField
      className=" shadow-md bg-white" 
        label="Contraseña"
        variant="outlined"
        margin="normal"
        type={showPassword ? "text" : "password"}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="gradient-button my-1"
      >
        <span>Continuar</span>
        <IoIosArrowForward className="icon-right text-lg" />
      </Button>
      <Divider className="w-full my-5"/>
      
      <GoogleButton />
        <div className="flex justify-center items-center my-2">
          <p className="text-gray-500 text-sm">¿No tienes cuenta?</p>
          <Button onClick={()=>router.push("/createUser")}>Registrate!</Button>
        </div>
    </Box>
  );
};

export default LoginForm;
