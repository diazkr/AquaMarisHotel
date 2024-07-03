"use client";
import { Button } from "@mantine/core";
import React from "react";
import { signIn, useSession } from "next-auth/react";

function GoogleButton() {
  const { data: session } = useSession();
  console.log(session)
  return (
    <div>
      <Button variant="filled" onClick={() => signIn('google', { callbackUrl: '/' })}>
        Inicia sesión con Google
      </Button>

      <p>{session ? session.user?.name: "nohaynombre"}</p>
    </div>
  );
}

export default GoogleButton;
