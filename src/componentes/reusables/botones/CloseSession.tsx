"use client";
import { Button } from "@mantine/core";
import React from "react";
import { signOut, useSession } from "next-auth/react";

function CloseSession() {
  return (
    <div>
      <Button variant="contained" onClick={() => signOut()}>
        Cerrar sesión
      </Button>
    </div>
  );
}

export default CloseSession;
