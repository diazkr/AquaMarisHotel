"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleButton from "../botones/GoogleButton";
import { IoIosArrowForward } from "react-icons/io";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

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
      <Typography variant="h4" component="div" gutterBottom>
        Logo
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Inicia sesión
      </Typography>
      <TextField label="Email" variant="outlined" margin="normal" fullWidth />
      <TextField
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
        className="gradient-button"
      >
        <span>Continuar</span>
        <IoIosArrowForward className="icon-right text-lg" />
      </Button>
      <Typography className="text-sm text-gray-600 my-5">
        Conéctate usando Google
      </Typography>
      <GoogleButton />
    </Box>
  );
};

export default LoginForm;
