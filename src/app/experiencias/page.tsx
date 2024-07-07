import MapComponent from "@/componentes/mapa/MapComponent";
import React from "react";
import dynamic from "next/dynamic";
import ImageExp from "@/componentes/mapa/ImageExperience";
import DescriptionExperiences from "@/componentes/vistaExperiencias/DescriptionExperiences";
import GuideToExperiences from "@/componentes/vistaExperiencias/GuideToExperiences";
import TabsComponent from "@/componentes/vistaExperiencias/SitiosDeInteres";

const DynamicMap = dynamic(
  () => import("../../componentes/mapa/MapComponent"),
  { ssr: false }
);

const HotelPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <ImageExp />
        <GuideToExperiences />
        <DescriptionExperiences />
      </div>

      <div className="flex my-24">
        <div className="w-[50%]" style={{ height: "500px" }}>
          <DynamicMap />
        </div>
        <div className=" w-[50%] m-1 border border-gray-100">
          <TabsComponent></TabsComponent>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
