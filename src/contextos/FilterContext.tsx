"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  filters: any;
  setFilters: (filters: any) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<any>({
    types: {
      standard: false,
      double: false,
      deluxe: false,
      suite: false,
      family: false
    },
    services: {
      wifi: false,
      television: false,
      seaView: false,
      airConditioning: false,
      heating: false,
      safeBox: false,
      parking: false,
      fridge: false,
      breakfast: false,
      jacuzzi: false
    }
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};
