import React from 'react';

function FAQContent() {
  return (
    <div className="p-6 mx-auto">
      <h1 className="text-md font-bold mb-4">Preguntas Frecuentes</h1>

      <div className="mb-4">
        <h2 className="text-sm font-semibold mb-2">¿Cómo puedo realizar un pedido?</h2>
        <p className="text-sm">
          Para realizar un pedido, navegue por nuestro catálogo de productos, añada los artículos que desee a su carrito y siga las instrucciones de pago en nuestro sitio web. Si necesita ayuda, no dude en contactarnos.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-semibold mb-2">¿Cuáles son las opciones de envío disponibles?</h2>
        <p className="text-sm">
          Ofrecemos varias opciones de envío para satisfacer sus necesidades. Puede elegir entre envío estándar, exprés o envío internacional durante el proceso de pago. Los costos y tiempos de envío varían según la opción seleccionada.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-semibold mb-2">¿Cómo puedo rastrear mi pedido?</h2>
        <p className="text-sm">
          Una vez que su pedido haya sido enviado, recibirá un correo electrónico con un número de seguimiento y un enlace para rastrear su paquete en línea. También puede rastrear su pedido desde su cuenta en nuestro sitio web.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-semibold mb-2">¿Cuál es su política de devoluciones?</h2>
        <p className="text-sm">
          Aceptamos devoluciones dentro de los 30 días posteriores a la recepción de su pedido. El producto debe estar en su estado original y sin usar. Para más detalles, consulte nuestra política de devoluciones en el sitio web.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-semibold mb-2">¿Cómo puedo contactar al servicio al cliente?</h2>
        <p className="text-sm">
          Puede contactarnos a través de nuestro formulario de contacto en el sitio web, por correo electrónico o llamándonos directamente. Nuestro equipo de servicio al cliente está disponible para ayudarle con cualquier pregunta o problema que pueda tener.
        </p>
      </div>
    </div>
  );
}

export default FAQContent;
