import Image from "next/image";
import React, { ReactNode } from "react";

interface ImageHeroProps {
  children?: ReactNode;
}

const ImageExp: React.FC<ImageHeroProps> = ({ children }) => {
  return (
    <div className="relative w-full twenty-screen ">
      <Image
        src="/Hero/hero1.jpg"
        alt="Hero Image"
        className="object-cover w-full h-full"
        quality={100}
        fill
        style={{ objectPosition: "bottom" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-3xl my-1">Experiencias</p>
          <Image
            src="/logos/logoBlanco.svg"
            alt="Logo Blanco"
            width={250} // ajusta el tamaño según tus necesidades
            height={200} // ajusta el tamaño según tus necesidades
          />
          {children}

        </div>
      </div>
    </div>
  );
};

export default ImageExp;
