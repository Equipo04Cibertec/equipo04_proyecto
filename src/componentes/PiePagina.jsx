import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { configuracion } from '../datos/configuracion';

/**
 * COMPONENTE: PiePagina (Footer)
 * 
 * Sección final de la web. Agrupa la información de contacto, enlaces de
 * navegación rápida, redes sociales y derechos de autor.
 */
export default function PiePagina() {
  const anioActual = new Date().getFullYear();
  
  // Enlace directo de WhatsApp
  const enlaceWhatsApp = `https://wa.me/51${configuracion.whatsapp}?text=Hola%20${encodeURIComponent(configuracion.nombreNegocio)},%20quisiera%20realizar%20una%20consulta%20sobre%20sus%20productos.`;

  return (
    <footer className="pie-pagina">
      <div className="contenedor">
        <div className="pie-grilla">
          {/* COLUMNA 1: SOBRE EL NEGOCIO */}
          <div className="pie-col">
            <div className="pie-col-descripcion">
              <span className="texto-dorado">✿</span> {configuracion.nombreNegocio}
            </div>
            <p className="pie-col-texto" style={{ marginBottom: '1.5rem' }}>
              {configuracion.descripcion}
            </p>
            {/* REDES SOCIALES */}
            <div className="redes-lista" style={{ justifyContent: 'flex-start' }}>
              {configuracion.redesSociales.instagram && (
                <a href={configuracion.redesSociales.instagram} target="_blank" rel="noopener noreferrer" className="red-boton" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              )}
              {configuracion.redesSociales.facebook && (
                <a href={configuracion.redesSociales.facebook} target="_blank" rel="noopener noreferrer" className="red-boton" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              )}
              {configuracion.redesSociales.tiktok && (
                <a href={configuracion.redesSociales.tiktok} target="_blank" rel="noopener noreferrer" className="red-boton" aria-label="TikTok">
                  {/* Icono de TikTok representado con SVG limpio */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* COLUMNA 2: ENLACES RÁPIDOS */}
          <div className="pie-col">
            <h4>Navegación</h4>
            <div className="pie-enlaces">
              <a href="#inicio" className="pie-enlace-item">Inicio</a>
              <a href="#productos" className="pie-enlace-item">Nuestros Productos</a>
              <a href="#promociones" className="pie-enlace-item">Promociones Activas</a>
              <a href="#nosotros" className="pie-enlace-item">¿Por qué elegirnos?</a>
              <a href="#contacto" className="pie-enlace-item">Contacto</a>
            </div>
          </div>

          {/* COLUMNA 3: CONTACTO E INFORMACIÓN */}
          <div className="pie-col">
            <h4>Atención y Pedidos</h4>
            <div className="pie-contacto-item">
              <MessageCircle size={16} className="texto-dorado" />
              <span>WhatsApp: {configuracion.whatsapp}</span>
            </div>
            <div className="pie-contacto-item">
              <Mail size={16} className="texto-dorado" />
              <span>{configuracion.correo}</span>
            </div>
            <p className="pie-col-texto" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              * Al no contar con local comercial abierto, toda entrega se realiza bajo estricta coordinación previa. ¡Gracias por apoyar la repostería artesanal!
            </p>
          </div>
        </div>

        {/* DERECHOS DE AUTOR */}
        <div className="pie-derechos">
          <p className="pie-derechos-texto">
            &copy; {anioActual} <strong>{configuracion.nombreNegocio}</strong>. Todos los derechos reservados.
          </p>
          <p className="pie-derechos-texto" style={{ fontSize: '0.75rem', opacity: 0.7 }}>
            Diseñado con pasión artesanal • {configuracion.cobertura.zonaPrincipal}, Perú
          </p>
        </div>
      </div>
    </footer>
  );
}
