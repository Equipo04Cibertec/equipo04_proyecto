import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { configuracion } from '../datos/configuracion';

/**
 * COMPONENTE: Cabecera (Header)
 * 
 * Barra de navegación superior. Incluye enlaces de navegación con scroll suave
 * y el botón principal de llamada a la acción para pedir por WhatsApp.
 */
export default function Cabecera() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para cerrar el menú móvil cuando se hace clic en un enlace
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  // Crear el enlace directo para enviar mensaje de WhatsApp
  const enlaceWhatsApp = `https://wa.me/51${configuracion.whatsapp}?text=Hola%20${encodeURIComponent(configuracion.nombreNegocio)},%20quisiera%20realizar%20una%20consulta%20sobre%20sus%20productos.`;

  return (
    <header className="cabecera">
      <div className="contenedor cabecera-contenedor">
        {/* LOGO */}
        <a href="#inicio" className="logo-enlace" onClick={cerrarMenu}>
          <span className="texto-dorado">✿</span>
          <span>{configuracion.nombreNegocio}</span>
        </a>

        {/* NAVEGACIÓN ESCRITORIO */}
        <nav className="navegacion-escritorio">
          <a href="#inicio" className="enlace-menu">Inicio</a>
          <a href="#productos" className="enlace-menu">Productos</a>
          <a href="#promociones" className="enlace-menu">Promociones</a>
          <a href="#nosotros" className="enlace-menu">Nosotros</a>
          <a href="#contacto" className="enlace-menu">Contacto</a>
          
          <a 
            href={enlaceWhatsApp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="boton boton-principal"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}
          >
            <MessageCircle size={16} />
            Pedir por WhatsApp
          </a>
        </nav>

        {/* BOTÓN MENÚ MÓVIL (HAMBURGUESA) */}
        <button 
          className="boton-menu-movil" 
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        >
          {menuAbierto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MÓVIL DEPLEGABLE */}
      <div className={`menu-movil-drawer ${menuAbierto ? 'abierto' : ''}`}>
        <a href="#inicio" className="enlace-menu" onClick={cerrarMenu}>Inicio</a>
        <a href="#productos" className="enlace-menu" onClick={cerrarMenu}>Productos</a>
        <a href="#promociones" className="enlace-menu" onClick={cerrarMenu}>Promociones</a>
        <a href="#nosotros" className="enlace-menu" onClick={cerrarMenu}>Nosotros</a>
        <a href="#contacto" className="enlace-menu" onClick={cerrarMenu}>Contacto</a>
        
        <a 
          href={enlaceWhatsApp} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="boton boton-principal animacion-latido"
          onClick={cerrarMenu}
          style={{ width: '100%', marginTop: '0.5rem' }}
        >
          <MessageCircle size={18} />
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}
