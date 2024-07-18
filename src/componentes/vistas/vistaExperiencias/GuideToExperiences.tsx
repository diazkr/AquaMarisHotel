"use client"
import React from 'react';
import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface GuideToExperiencesProps {
  text: string;
}

const GuideToExperiences: React.FC<GuideToExperiencesProps> = ({ text }) => {  const router = useRouter();

  return (
    <div className="bg-gray-100 py-4 w-full">
      <div className="container mx-auto px-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Button
            color="inherit"
            onClick={() => router.push('/')}
            className="flex items-center cursor-pointer"
            startIcon={<FaHome/>}
          >
            Inicio
          </Button>
          <Typography color="primary" >{text}</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default GuideToExperiences;
