import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const StyledPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    color: '#fff',
    backgroundColor: '#333',
    border: '1px solid #444',
    borderRadius: '4px',
  },
  '& .Mui-selected': {
    backgroundColor: '#666',
    color: '#fff',
    borderColor: '#555',
  },
  '& .MuiPaginationItem-ellipsis': {
    color: '#fff',
  },
});

const CustomPagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
      <StyledPagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        siblingCount={2}
        boundaryCount={1}
        shape="rounded"
      />
    </Stack>
  );
};

export default CustomPagination;
