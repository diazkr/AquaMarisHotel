// 'use client';

// import React, { useState } from "react";
// import Image from 'next/image';
// import Modal from 'react-modal';

// const Page = () => {
//     const [modalIsOpen, setModalIsOpen] = useState(false);

//     const openModal = () => {
//         setModalIsOpen(true);
//     }

//     const closeModal = () => {
//         setModalIsOpen(false);
//     }

//     const image6Exists = true; // false: para que salga el texto

//     return (
//         <div className="container mx-auto p-4 bg-neutral-100">
//             <h1 className="text-3xl font-bold mb-4 text-primary text-center">Hotel AquaMaris</h1>
//             <div className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                         <Image src="/images/hotel1.jpg" alt="Main view" width={800} height={600} className="rounded-lg w-full h-auto" />
//                     </div>
//                     <div className="grid grid-cols-2 gap-2">
//                         <Image src="/images/hotel1.jpg" alt="View 2" width={400} height={300} className="rounded-lg w-full h-auto" />
//                         <Image src="/images/hotel1.jpg" alt="View 3" width={400} height={300} className="rounded-lg w-full h-auto" />
//                         <Image src="/images/hotel1.jpg" alt="View 4" width={400} height={300} className="rounded-lg w-full h-auto" />
//                         <div className="relative">
//                             <Image src="/images/hotel1.jpg" alt="View 5" width={400} height={300} className="rounded-lg w-full h-auto" />
//                             <button 
//                                 className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center rounded-lg"
//                                 onClick={openModal}
//                             >
//                                 Ver más fotos
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                     <div className="md:col-start-2 space-y-4">
//                         <div className="p-6 rounded-lg shadow-md bg-white">
//                             <p className="text-2xl font-bold mb-2 text-primary">Alojamiento entero en Acapulco, Colombia</p>
//                             <div className="space-y-2">
//                                 <div className="flex items-center">
//                                     <span className="text-lg font-semibold text-gray-600">Camas</span>
//                                     <span className="ml-2 text-gray-500">1</span>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <span className="text-lg font-semibold text-gray-600">Spa</span>
//                                     <span className="ml-2 text-gray-500">Acceso total</span>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <span className="text-lg font-semibold text-gray-600">Planes de alimentos</span>
//                                     <span className="ml-2 text-gray-500">Desayuno incluido</span>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <span className="text-lg font-semibold text-gray-600">Estacionamiento</span>
//                                     <span className="ml-2 text-gray-500">Sí</span>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <span className="text-lg font-semibold text-gray-600">Máximo de personas</span>
//                                     <span className="ml-2 text-gray-500">3</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="p-6 rounded-lg shadow-md bg-white">
//                             <p className="text-2xl font-bold mb-4 text-primary">Total</p>
//                             <div className="space-y-2">
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-600">Por noche</span>
//                                     <span className="text-gray-600">$7000 MXN</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-600">Tarifa de servicio AquaMaris</span>
//                                     <span className="text-gray-600">$500 MXN</span>
//                                 </div>
//                                 <div className="flex justify-between font-bold">
//                                     <span className="text-gray-600">Total a pagar</span>
//                                     <span className="text-gray-600">$7500 MXN</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500">
//                             Pagar reservación
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 contentLabel="Ver más fotos"
//                 className="modal"
//                 overlayClassName="overlay"
//             >
//                 {image6Exists ? (
//                     <Image src="/images/hotel2.jpg" alt="View 6" width={400} height={300} className="rounded-lg w-full h-auto" />
//                 ) : (
//                     <div className="flex justify-center items-center h-full">
//                         <p className="text-gray-600 text-xl">No hay más fotos</p>
//                     </div>
//                 )}
//                 <button onClick={closeModal} className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500">
//                     Cerrar
//                 </button>
//             </Modal>
//         </div>
//     );
// }

// export default Page;

// // import React, { useState } from "react";
// // import Image from 'next/image';
// // import Modal from 'react-modal';

// // const Page = () => {
// //     const [modalIsOpen, setModalIsOpen] = useState(false);

// //     const openModal = () => {
// //         setModalIsOpen(true);
// //     }

// //     const closeModal = () => {
// //         setModalIsOpen(false);
// //     }

// //     return (
// //         <div className="container mx-auto p-4 bg-neutral-100">
// //             <h1 className="text-3xl font-bold mb-4 text-gray-600">Hotel AquaMaris</h1>
// //             <div className="space-y-4">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <div>
// //                         <Image src="/images/hotel1.jpg" alt="Main view" width={800} height={600} className="rounded-lg w-full h-auto" />
// //                     </div>
// //                     <div className="grid grid-cols-2 gap-2">
// //                         <Image src="/images/hotel1.jpg" alt="View 2" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                         <Image src="/images/hotel1.jpg" alt="View 3" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                         <Image src="/images/hotel1.jpg" alt="View 4" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                         <div className="relative">
// //                             <Image src="/images/hotel1.jpg" alt="View 5" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                             <button 
// //                                 className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center rounded-lg"
// //                                 onClick={openModal}
// //                             >
// //                                 Ver más fotos
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //                     <div className="space-y-4">
// //                         <div className="p-6 rounded-lg shadow-md bg-white">
// //                             <p className="text-xl mb-2 text-gray-600">Alojamiento entero en Acapulco, Colombia</p>
// //                             <div className="space-y-2">
// //                                 <div className="flex items-center">
// //                                     <span className="text-lg font-semibold text-gray-600">Camas</span>
// //                                     <span className="ml-2 text-gray-500">1</span>
// //                                 </div>
// //                                 <div className="flex items-center">
// //                                     <span className="text-lg font-semibold text-gray-600">Spa</span>
// //                                     <span className="ml-2 text-gray-500">Acceso total</span>
// //                                 </div>
// //                                 <div className="flex items-center">
// //                                     <span className="text-lg font-semibold text-gray-600">Planes de alimentos</span>
// //                                     <span className="ml-2 text-gray-500">Desayuno incluido</span>
// //                                 </div>
// //                                 <div className="flex items-center">
// //                                     <span className="text-lg font-semibold text-gray-600">Estacionamiento</span>
// //                                     <span className="ml-2 text-gray-500">Sí</span>
// //                                 </div>
// //                                 <div className="flex items-center">
// //                                     <span className="text-lg font-semibold text-gray-600">Máximo de personas</span>
// //                                     <span className="ml-2 text-gray-500">3</span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div className="p-6 rounded-lg shadow-md bg-white">
// //                             <p className="text-xl mb-4 text-gray-600">Total</p>
// //                             <div className="space-y-2">
// //                                 <div className="flex justify-between">
// //                                     <span className="text-gray-600">Por noche</span>
// //                                     <span className="text-gray-600">$7000 MXN</span>
// //                                 </div>
// //                                 <div className="flex justify-between">
// //                                     <span className="text-gray-600">Tarifa de servicio AquaMaris</span>
// //                                     <span className="text-gray-600">$500 MXN</span>
// //                                 </div>
// //                                 <div className="flex justify-between font-bold">
// //                                     <span className="text-gray-600">Total a pagar</span>
// //                                     <span className="text-gray-600">$7500 MXN</span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500">
// //                             Pagar reservación
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //             <Modal
// //                 isOpen={modalIsOpen}
// //                 onRequestClose={closeModal}
// //                 contentLabel="Ver más fotos"
// //                 className="modal"
// //                 overlayClassName="overlay"
// //             >
// //                 <div className="grid grid-cols-2 gap-2">
// //                     <Image src="/images/hotel2.jpg" alt="View 6" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                     <Image src="/images/hotel3.jpg" alt="View 7" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                     <Image src="/images/hotel4.jpg" alt="View 8" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                     <Image src="/images/hotel5.jpg" alt="View 9" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                 </div>
// //                 <button onClick={closeModal} className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500">
// //                     Cerrar
// //                 </button>
// //             </Modal>
// //         </div>
// //     );
// // }

// // export default Page;











// // import React from "react";
// // import Image from 'next/image';

// // const Page = () => {
// //     return (
// //         <div className="container mx-auto p-4 bg-neutral-100">
// //             <h1 className="text-3xl font-bold mb-4 text-gray-600">Hotel AquaMaris</h1>
// //             <div className="space-y-4">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <div>
// //                         <Image src="/images/hotel1.jpg" alt="Main view" width={800} height={600} className="rounded-lg w-full h-auto" />
// //                     </div>
// //                     <div className="grid grid-cols-2 gap-2">
// //                         <Image src="/images/hotel1.jpg" alt="View 2" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                         <Image src="/images/hotel1.jpg" alt="View 3" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                         <Image src="/images/hotel1.jpg" alt="View 4" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                         <Image src="/images/hotel1.jpg" alt="View 5" width={400} height={300} className="rounded-lg w-full h-auto" />
// //                     </div>
// //                 </div>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //                     <div className="space-y-4">
// //                         <div className="p-6 rounded-lg shadow-md bg-white">
// //                             <p className="text-xl mb-2 text-gray-600">Alojamiento entero en Acapulco, Colombia</p>
// //                             <div className="space-y-2">
// //                                 <div className="flex items-center">
// //                                     <span className="text-lg font-semibold text-gray-600">Camas</span>
// //                                     <span className="ml-2 text-gray-500">1</span>
// //                                 </div>
// //                                 <div className="flex items-center">
// //                                     <span className="text-lg font-semibold text-gray-600">Spa</span>
// //                                     <span className="ml-2 text-gray-500">Acceso total</span>
// //                                 </div>
// //                                 <div className="flex items-center">
// //                                     <span className="text-lg font-semibold text-gray-600">Planes de alimentos</span>
// //                                     <span className="ml-2 text-gray-500">Desayuno incluido</span>
// //                                 </div>
// //                                 <div className="flex items-center">
// //                                     <span className="text-lg font-semibold text-gray-600">Estacionamiento</span>
// //                                     <span className="ml-2 text-gray-500">Sí</span>
// //                                 </div>
// //                                 <div className="flex items-center">
// //                                     <span className="text-lg font-semibold text-gray-600">Máximo de personas</span>
// //                                     <span className="ml-2 text-gray-500">3</span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div className="p-6 rounded-lg shadow-md bg-white">
// //                             <p className="text-xl mb-4 text-gray-600">Total</p>
// //                             <div className="space-y-2">
// //                                 <div className="flex justify-between">
// //                                     <span className="text-gray-600">Por noche</span>
// //                                     <span className="text-gray-600">$7000 MXN</span>
// //                                 </div>
// //                                 <div className="flex justify-between">
// //                                     <span className="text-gray-600">Tarifa de servicio AquaMaris</span>
// //                                     <span className="text-gray-600">$500 MXN</span>
// //                                 </div>
// //                                 <div className="flex justify-between font-bold">
// //                                     <span className="text-gray-600">Total a pagar</span>
// //                                     <span className="text-gray-600">$7500 MXN</span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500">
// //                             Pagar reservación
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Page;
