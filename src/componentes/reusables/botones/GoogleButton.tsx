"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

function GoogleButton() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="w-[100%] flex justify-center items-center">
      <Button
      startIcon={<FcGoogle className="text-4xl" />}
        className="w-full rounded-2xl text-gray-600 border-4 border-gray-500 shadow-md bg-stone-200 py-2"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Iniciar sesión con google
      </Button>
    </div>
  );
}

export default GoogleButton;
