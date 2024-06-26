import React from "react";
import Image from 'next/image';

const page = () => {
    return (
        <div className="container mx-auto p-4 bg-neutral-100">
            <h1 className="text-3xl font-bold mb-4 text-gray-600">Hotel AquaMaris</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                    <Image src="/images/hotel1.jpg" alt="Main view" width={800} height={600} className="rounded-lg w-full" />
                    <div className="grid grid-cols-2 gap-4">
                        <Image src="/images/hotel1.jpg" alt="View 2" width={400} height={300} className="rounded-lg w-full" />
                        <Image src="/images/hotel1.jpg" alt="View 3" width={400} height={300} className="rounded-lg w-full" />
                        <Image src="/images/hotel1.jpg" alt="View 4" width={400} height={300} className="rounded-lg w-full" />
                        <Image src="/images/hotel1.jpg" alt="View 5" width={400} height={300} className="rounded-lg w-full" />
                    </div>
                </div>
                <div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-xl mb-2 text-gray-600">Alojamiento entero en acapulco colombia</p>
                        {/* <p className="text-gray-600 mb-4">Más de 16 huéspedes · 10 habitaciones · 15 camas · 13.5 baños</p> */}
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <span className="text-lg font-semibold text-gray-600">Camas</span>
                                <span className="ml-2 text-gray-500 ">1</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg font-semibold text-gray-600">Spa</span>
                                <span className="ml-2 text-gray-500">Acceso total</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg font-semibold text-gray-600">Planes de alimentos</span>
                                <span className="ml-2 text-gray-500">Desayuno incluido</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg font-semibold text-gray-600">Estacionamiento</span>
                                <span className="ml-2 text-gray-500">si</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg font-semibold text-gray-600">maximo de personas</span>
                                <span className="ml-2 text-gray-500">3</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                        <p className="text-xl mb-4 text-gray-600">Total</p>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Por noche</span>
                                <span className="text-gray-600">$7000 MXN</span>
                            </div>
                            {/* <div className="flex justify-between">
                                <span className="text-gray-600">Oferta especial</span>
                                <span className="text-gray-600">-$113,616 MXN</span>
                            </div> */}
                            <div className="flex justify-between">
                                <span className="text-gray-600">Tarifa de servicio AquaMaris</span>
                                <span className="text-gray-600">$500 MXN</span>
                            </div>
                            <div className="flex justify-between font-bold">
                                <span className="text-gray-600">Total a pagar </span>
                                <span className="text-gray-600">$7500 MXN</span>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-4 bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                        Pagar reservación
                    </button>
                </div>
            </div>
        </div>
    );
}

export default page;
