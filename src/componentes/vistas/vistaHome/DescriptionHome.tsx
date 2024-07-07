import React from "react";
import { IoIosArrowForward } from "react-icons/io";


function DescriptionHome() {
  return (
    <div className="w-[100%] flex justify-center items-center gap-10 py-4">
      <div className="my-4 text-4xl text-gray-700 tracking-wider font-medium">
        <p className="text-xl text-gray-400 font-light mb-1">Descubre</p>
        <p>AQUA MARIS </p>
        <div className="w-60 h-1 bg-[#17858A] my-2"></div>
      </div>
      <div>
      <IoIosArrowForward className="text-4xl text-[#17858A] opacity-60"/>


      </div>

      <div className="w-1/3">

        <p className="text-gray-600 text-md text-justify">
        De propiedad familiar con una trayectoria de  60 años en la San Andrés, destino ideal para combinar playa, gastronomía, cultura y buenas experiencias.

        </p>
      </div>
    </div>
  );
}

export default DescriptionHome;
