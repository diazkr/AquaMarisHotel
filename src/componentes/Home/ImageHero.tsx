import Image from "next/image";
import React from "react";

function ImageHero() {
  return (
    <div>
      <div className="relative middle-screen">
        <Image
          src="/Hero/hero4.jpg"
          alt="Hero Image"
          className="object-cover w-full h-full"
          quality={100}
          fill
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2" style={{ top: '-25%' }}>
          <Image
            src="/logos/iconoAblanco.svg"
            alt="Icono A"
            width={150} // ajusta el tamaño según tus necesidades
            height={200} // ajusta el tamaño según tus necesidades
          />
          <Image
            src="/logos/logoBlanco.svg"
            alt="Logo Blanco"
            width={250} // ajusta el tamaño según tus necesidades
            height={200} // ajusta el tamaño según tus necesidades
          />
        </div>
      </div>
    </div>
  );
}

export default ImageHero;
