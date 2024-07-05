import CloseSession from "@/componentes/reusables/botones/CloseSession";
import GoogleButton from "@/componentes/reusables/botones/GoogleButton";
import CreateUserForm from "@/componentes/reusables/forms/CreateUserForm";
import LoginForm from "@/componentes/reusables/forms/LoginForm";
import Image from "next/image";
import React from "react";

function PageCreateUser() {
  return (
    <div className=" h-screen w-full flex">
    <div className="w-7/12 relative shadow-2xl">
      <Image
        src="/images/fondologin.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="svg-container">
          <Image
            src="/logos/logoBlanco.svg" // Asegúrate de que esta sea la ruta correcta a tu logo
            alt="Logo"
            width={300}
            height={100}
          />
        </div>
      </div>
    </div>
    <div className=" w-5/12 py-24 flex justify-center items-center bg-slate-50">
      <CreateUserForm />
    </div>
  </div>
  );
}

export default PageCreateUser;
