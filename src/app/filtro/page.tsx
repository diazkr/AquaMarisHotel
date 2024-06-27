import React from 'react';
import FilterSidebar from '../filtros/filtro';

const Home = () => {
  return (
    <div className="flex">
      <FilterSidebar />
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">Resto de la pagina</h1>
       {/* agregar aqui la lista de hoteles */}
      </div>
    </div>
  );
}

export default Home;
