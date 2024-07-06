import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import { UserInterface } from "@/interfaces/UserInterface";
import Image from "next/image";

const UserDetail: React.FC<
  Pick<UserInterface, "id" | "name" | "email" | "phone" | "country" |"photo">
> = ({ id, name, email, phone, country, photo }) => {
  return (
    <div className="p-6 mx-auto w-[50%] ">
      <div className=" flex justify-center items-center my-3">
      <Image
            // src={photo || "/iconos/usuario.png"}
            src={"/iconos/usuario.png"}

            width="100"
            height="100"
            alt="User Icon"
            className="rounded-full m-1" 
          />

      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 ">
        <div className="flex items-center">
          <FaUser className="mr-3 text-2xl text-cyan-800" />
          <div>
            <p className="text-sm font-semibold">Nombre:</p>
            <p className="text-sm">{name}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-3 text-2xl text-cyan-800" />
          <div>
            <p className="text-sm font-semibold">Email:</p>
            <p className="text-sm">{email}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-3 text-2xl text-cyan-800" />
          <div>
            <p className="text-sm font-semibold">Ubicación:</p>
            <p className="text-sm">{country || "Sin información"}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaPhone className="mr-3 text-2xl text-cyan-800" />
          <div>
            <p className="text-sm font-semibold">Teléfono:</p>
            <p className="text-sm">{phone || "Sin información"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
