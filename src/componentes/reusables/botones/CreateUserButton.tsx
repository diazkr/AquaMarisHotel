"use client";
import React, { useState } from "react";
import { Alert, Button, Snackbar } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

interface RegisterButtonProps {
  userData: {
    name: string;
    email: string;
    country: string;
    phone: string;
    password: string;
  };
  isDisabled: boolean;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({
  userData,
  isDisabled,
}) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleGoogleSignUp = async () => {
    const userDataWithRole = { ...userData, role: "USER" };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDataWithRole),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
      }

      setSuccess(true);
      setOpen(true);
      setTimeout(() => {
        router.push("/register");
      }, 2000); // Redirige al usuario después de 2 segundos
    } catch (error: any) {
      setError(error.message || "Error during authentication");
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      {error && (
        <div style={{ marginBottom: "10px" }} className="text-red-800">
          {error}
        </div>
      )}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="gradient-button my-1"
        onClick={handleGoogleSignUp}
      >
        <span>Crear usuario</span>
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Creación de cuenta exitosa. Inicia sesión.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegisterButton;
