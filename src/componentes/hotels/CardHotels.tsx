import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  backgroundUrl: string;
  foregroundUrl: string;
  overlayColor: string;
  serviceName: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  backgroundUrl,
  foregroundUrl,
  overlayColor,
  serviceName,
  description,
}) => {
  return (
    <div className="flex h-[40vh] w-full" style={{ backgroundColor: overlayColor }}>      <div className="w-1/2">
        <div className="relative w-full h-full mb-4">
          <Image
            src={foregroundUrl}
            alt={serviceName}
            layout="fill"
            objectFit="cover"
            
          />
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center flex-col p-10 px-5">
        <h2 className="text-2xl text-[#17858A] font-semibold mb-4">{serviceName}</h2>
        <p className="text-md mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
