'use client';

// pages/index.tsx
import { useState } from 'react';
import CustomPagination from '../pagination/pagination';

const ITEMS_PER_PAGE = 10; // Número de elementos por página

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Supongamos que tienes una lista de datos
  const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      <h1>My Paginated List</h1>
      <ul>
        {paginatedData.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <CustomPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
