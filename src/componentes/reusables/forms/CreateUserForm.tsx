"use client";
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import {
  Email,
  Person,
  Phone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from "@/helpers/validationHelpers";
import RegisterButton from "../botones/CreateUserButton";
const { getNames } = require("country-list");

const CreateUserForm: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validar el campo actual
    let error = "";
    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "password":
      case "confirmPassword":
        error = validatePassword(
          name === "password" ? value : formData.password,
          name === "confirmPassword" ? value : formData.confirmPassword
        );
        break;
    }
    setErrors({ ...errors, [name]: error });

    // Validar todo el formulario
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const passwordError = validatePassword(
      formData.password,
      formData.confirmPassword
    );

    setIsFormValid(!nameError && !emailError && !phoneError && !passwordError);
  };

  const handleCountryChange = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    setFormData({ ...formData, country: value });

    // Validar el país (opcional, según tu lógica de validación)
    let error = "";
    setErrors({ ...errors, country: error });

    // Validar todo el formulario
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const passwordError = validatePassword(
      formData.password,
      formData.confirmPassword
    );

    setIsFormValid(!nameError && !emailError && !phoneError && !passwordError);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    const { name, email, country, phone, password } = formData;
    console.log({ name, email, country, phone, password });
    router.push("/register");
  };

  const countryNames = getNames();

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
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        className="text-[#175358]"
      >
        Regístrate
      </Typography>

      <TextField
        label="Nombre"
        name="name"
        placeholder="Escribe tu nombre"
        value={formData.name}
        onChange={handleInputChange}
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        placeholder="correo@example.com"
        value={formData.email}
        onChange={handleInputChange}
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
      />
      <FormControl margin="normal" fullWidth>
        <InputLabel id="country-label">País</InputLabel>
        <Select
          labelId="country-label"
          name="country"
          value={formData.country}
          onChange={handleCountryChange}
          error={!!errors.country}
        >
          {countryNames.map((country: string) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Teléfono"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        error={!!errors.phone}
        helperText={errors.phone}
        margin="normal"
        fullWidth
        required
        placeholder="Escribe tu telefono"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Contraseña"
        name="password"
        type={showPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleInputChange}
        error={!!errors.confirmPassword}
        margin="normal"
        fullWidth
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Confirmar Contraseña"
        name="confirmPassword"
        type={showPassword ? "text" : "password"}
        value={formData.confirmPassword}
        onChange={handleInputChange}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword}
        margin="normal"
        fullWidth
        required
      />

      <RegisterButton userData={formData} isDisabled={!isFormValid} />
    </Box>
  );
};

export default CreateUserForm;
