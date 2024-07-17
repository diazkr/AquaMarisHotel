'use client';
import React, { useState } from 'react';
import { Button, Typography, Link, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import PayPalView from '@/componentes/paypal/paypal';
import TermsAndConditions from '../termsAndConditions/page';

const PaymentPage = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPayPalButton, setShowPayPalButton] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAcceptTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(event.target.checked);
  };

  const handlePagarMembresiaClick = () => {
    if (acceptTerms) {
      setShowPayPalButton(true);
    } else {
      setIsDialogOpen(true);
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen mt-20 flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col mx-5 items-center md:items-start space-y-4 md:space-y-8 md:w-1/4">
        {/* Envolver cada imagen en un contenedor con la clase image-container */}
        <div className="image-container">
          <img src="https://i.pinimg.com/564x/60/c8/07/60c80702eedfe6fa07b27515a5784c87.jpg" alt="Image 1" className="w-full rounded-lg" />
          <div className="image-overlay">Descuento al reservar.</div>
        </div>
        <div className="image-container">
          <img src="https://i.pinimg.com/564x/4d/23/61/4d2361bed5e95d0a8e1a0c1250462607.jpg" alt="Image 2" className="w-full rounded-lg" />
          <div className="image-overlay">Variedad en comida.</div>
        </div>
        <div className="image-container">
          <img src="https://i.pinimg.com/564x/0a/f9/b5/0af9b56762ee6064bfa52280da42b6d6.jpg" alt="Image 3" className="w-full rounded-lg" />
          <div className="image-overlay">Variedad de servicios.</div>
        </div>
      </div>

      <div className="max-w-3xl mx-12 p-8 relative rounded-lg overflow-hidden">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover rounded-lg">
          <source src="/hotel.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90 rounded-lg" />
        <div className="relative text-white z-10 text-justify">
          <Typography variant="h4" gutterBottom className="text-white text-center">
            ¡Beneficios todo el año!
            <div className="w-60 h-1 bg-[#17858A] my-6 mx-auto"></div>
          </Typography>
          <Typography variant="body1" paragraph className="text-white">
            ¿Te imaginas disfrutar de escapadas exclusivas y relajantes mientras ahorras dinero? ¡Ahora es posible con nuestra membresía especial! Únete a nuestro selecto club de huéspedes y aprovecha increíbles descuentos durante todo el año en tu hotel favorito.
          </Typography>
          <Typography variant="body2" paragraph className="text-white text-lg">
            Con nuestra membresía, tendrás acceso a: <br/><br/>
            🌟 Descuentos exclusivos en reservas de habitaciones.<br/>
            🌟 Ofertas especiales en servicios de spa y bienestar.<br/>
            🌟 Promociones en experiencias gastronómicas y actividades.<br/>
            🌟 Beneficios adicionales solo para miembros.<br/><br/>
            ¡No dejes pasar esta oportunidad! Vive una experiencia de lujo sin comprometer tu presupuesto. Únete hoy y comienza a disfrutar de un año lleno de aventuras y ahorros.<br/><br/><br/>
            ¡Compra ahora y disfruta de todos los beneficios y sorpresas que tenemos para ti! <br/><br/>
          </Typography>
          <div className="flex items-center bg-transparent">
            <input type="checkbox" id="termsCheckbox" className="mr-2" checked={acceptTerms} onChange={handleAcceptTermsChange} />
            <label htmlFor="termsCheckbox" className="text-white cursor-pointer">
              Aceptas los <Link href="termsAndConditions" underline="always" className='text-white font-bold' >términos y condiciones</Link>
            </label>
          </div>
          <div className="bg-transparent mt-4">
            {showPayPalButton && <PayPalView />}
            {!showPayPalButton && (
              <Button variant="contained" color="primary" onClick={handlePagarMembresiaClick}>
                Continuar
              </Button>
            )}
          </div>
        </div>
      </div>
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>Acepta los términos</DialogTitle>
        <DialogContent>
          Es necesario que aceptes nuestras políticas.
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaymentPage;
