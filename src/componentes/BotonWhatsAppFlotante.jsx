import React from 'react';
import { MessageCircle } from 'lucide-react';
import { configuracion } from '../datos/configuracion';

/**
 * COMPONENTE: BotonWhatsAppFlotante
 * 
 * Un botón flotante fijo en la esquina inferior derecha que permite al usuario
 * contactar directamente a la repostería por WhatsApp en cualquier momento.
 */
export default function BotonWhatsAppFlotante() {
  const mensajePredeterminado = `Hola%20${encodeURIComponent(configuracion.nombreNegocio)},%20vengo%20de%20su%20página%20web%20y%20me%20gustaría%20solicitar%20información%20sobre%20un%20pedido.`;
  const enlaceWhatsApp = `https://wa.me/51${configuracion.whatsapp}?text=${mensajePredeterminado}`;

  return (
    <a 
      href={enlaceWhatsApp} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-flotante animacion-flotar"
      title="Escríbenos por WhatsApp"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2.2} />
    </a>
  );
}
