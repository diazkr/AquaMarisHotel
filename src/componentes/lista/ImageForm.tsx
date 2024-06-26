import Image from "next/image";
import React, { ReactNode } from "react";
interface ImageHeroProps {
    children: ReactNode;
  }
const ImageForm: React.FC<ImageHeroProps>=({children})=> {
  return (
    <div>
      <div className="relative twenty-screen">
        <Image
          src="/Hero/hero5.jpg"
          alt="Hero Image"
          className="object-cover w-full h-full"
          quality={100}
          fill
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 top-[30%]">
        <Image
            src="/logos/logoBlanco.svg"
            alt="Logo Blanco"
            width={200} // ajusta el tamaño según tus necesidades
            height={200} // ajusta el tamaño según tus necesidades
          />
          <div className="w-4/5 lg:w-4/5 xl:w-3/5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageForm;
