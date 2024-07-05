"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button, CircularProgress, Backdrop } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contextos/AuthContex";

interface GoogleUserData {
  name: string;
  email: string;
  user_photo: string;
}

interface UserData {
  [key: string]: any;
}
interface AuthResponse {
  access_token: string;
  userData: UserData;
}

const GoogleButton: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false); // Estado para el loader

  const handleGoogleSignIn = async () => {
    setLoading(true); // Mostrar el loader
    const result = await signIn("google", { redirect: false }); // No redirigir automáticamente

    if (result?.ok) {
      console.log('Google sign-in result:', result);
      // Aquí no redirigimos inmediatamente, esperamos a que se complete el proceso de autenticación
    } else {
      console.error('Error during Google sign-in:', result?.error);
      setLoading(false); // Ocultar el loader si hay un error
    }
  };

  useEffect(() => {
    const authenticateUser = async () => {
      if (session) {
        const { user } = session;
        const googleUserData: GoogleUserData = {
          name: user?.name || "",
          email: user?.email || "",
          user_photo: user?.image || "",
        };

        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/auth0login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(googleUserData),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data: AuthResponse = await response.json();
          const { access_token, userData: userDataFromServer } = data;
          login(access_token, userDataFromServer);

          router.replace("/");
        } catch (error) {
          console.error('Error during authentication:', error);
          setLoading(false); // Ocultar el loader si hay un error
        }
      } else {
        console.log('No session found');
        setLoading(false); // Ocultar el loader si no hay sesión
      }
    };

    if (session) {
      authenticateUser();
    }
  }, [session, router, login]);

  return (
    <>
      <div className="w-[100%] flex justify-center items-center">
        <Button
          startIcon={<FcGoogle className="text-4xl" />}
          className="w-full rounded-2xl text-gray-600 border-4 border-gray-500 shadow-md bg-stone-200 py-2"
          onClick={handleGoogleSignIn}
          disabled={loading} // Deshabilitar el botón mientras se muestra el loader
        >
          {loading ? <CircularProgress size={24} /> : 'Iniciar sesión con Google'}
        </Button>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default GoogleButton;
