import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  backgroundUrl: string;
  foregroundUrl: string;
  overlayColor: string;
  serviceName: string;
  description: string;
}

const ServiceCardChange: React.FC<ServiceCardProps> = ({
  backgroundUrl,
  foregroundUrl,
  overlayColor,
  serviceName,
  description,
}) => {
  return (
    <div className="flex h-[30vh] w-full" style={{ backgroundColor: overlayColor }}>  
     

      <div className="w-1/2 flex justify-center items-center flex-col px-10">
        <h2 className="text-3xl text-[#17858A] font-semibold mb-4">{serviceName}</h2>
        <p className="text-lg mb-4">{description}</p>
      </div>
      <div className="w-1/2">
        <div className="relative w-full h-full mb-4">
          <Image
            src={foregroundUrl}
            alt={serviceName}
            layout="fill"
            objectFit="cover"
            
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardChange;
