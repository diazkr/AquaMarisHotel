import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { IoIosArrowForward } from 'react-icons/io';
import { useAuth } from '@/contextos/AuthContex';
import { useRouter } from 'next/navigation';

interface UserData {
  [key: string]: any;
}
interface AuthResponse {
  token: string;
  userData:UserData ;
}

interface LoginButtonProps {
  email: string;
  password: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ email, password }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { login } = useAuth(); 
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log({ email, password });

      console.log('Response status:', response.status);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data: AuthResponse = await response.json();
      const { token, userData } = data;
      login(token, userData); // Llama a la función login del
      setErrorMessage(null); // Clear any previous error messages
      router.push("/")

    } catch (error) {
      console.error('Error during authentication:', error);
      setErrorMessage((error as Error).message); // Set the error message
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-[100%]'>
        {errorMessage && (
        <Typography variant="body2" align="center" className='py-1 text-red-900'>
          {errorMessage}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="gradient-button my-1 w-[100%]"
        onClick={handleSignIn}
      >
        <span>Continuar</span>
        <IoIosArrowForward className="icon-right text-lg" />
      </Button>
    </div>
  );
};

export default LoginButton;
