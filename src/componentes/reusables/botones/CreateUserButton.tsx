import React from 'react';
import { Button } from '@mui/material';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/navigation';

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

interface AuthResponse {
  access_token: string;
  userId: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ userData, isDisabled }) => {
  const router = useRouter();

  const handleGoogleSignUp = async () => {
    const userDataWithRole = { ...userData, role: "USER" };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDataWithRole),
      });

      console.log(userData)

      console.log('Response status:', response.status);
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      router.push("/register");
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      className="gradient-button my-1"
      onClick={handleGoogleSignUp}
      disabled={false}
    >
      <span>Crear usuario</span>
      <IoIosArrowForward className="icon-right text-lg" />
    </Button>
  );
};

export default RegisterButton;
