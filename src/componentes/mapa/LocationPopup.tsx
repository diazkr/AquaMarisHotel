import Image from "next/image";
import React from "react";

interface LocationPopupProps {
  name: string;
  imageUrl: string;
  address: string;
}

const LocationPopup: React.FC<LocationPopupProps> = ({ name, imageUrl, address }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={imageUrl} alt={name} width={'100'} height={'100'}  className="rounded m-2"/>
      <div className="flex flex-col justify-center items-center">

      <h3 className=" font-medium text-md m-0 p-0">{name}</h3>
      <h2 className="m-0 p-0">{address}</h2>

      </div>

    </div>
  );
};

export default LocationPopup;
