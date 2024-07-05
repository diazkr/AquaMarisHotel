import React from 'react';

interface PremiumProps {
  membershipStatus: string;
}

const Premium: React.FC<PremiumProps> = ({ membershipStatus }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Estado de Membresía</h2>
      <p>{membershipStatus}</p>
    </div>
  );
};

export default Premium;
