import React from 'react';
import Cabecera from './componentes/Cabecera';
import Inicio from './paginas/Inicio';
import PiePagina from './componentes/PiePagina';
import BotonWhatsAppFlotante from './componentes/BotonWhatsAppFlotante';

/**
 * COMPONENTE PRINCIPAL: App
 * 
 * Este es el punto de entrada de los componentes de la aplicación.
 * Ensambla la barra de navegación (Cabecera), la página de Inicio,
 * el pie de página (PiePagina) y el botón de WhatsApp flotante.
 */
function App() {
  return (
    <>
      {/* Barra de Navegación Superior */}
      <Cabecera />
      
      {/* Contenido Principal de la Página */}
      <Inicio />
      
      {/* Pie de Página */}
      <PiePagina />
      
      {/* Botón Flotante de Contacto */}
      <BotonWhatsAppFlotante />
    </>
  );
}

export default App;
