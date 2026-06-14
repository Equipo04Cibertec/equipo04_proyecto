import React from 'react';
import { Cake, Pizza, User, Image, Gift, Award, Heart, ShoppingBag } from 'lucide-react';

/**
 * COMPONENTE: MarcadorPosicionImagen (Image Placeholder)
 * 
 * Este componente se utiliza para mostrar contenedores visuales modernos y atractivos
 * en los espacios donde irán las fotografías reales en producción.
 * 
 * Propiedades:
 * - etiqueta (string): El texto descriptivo (ej: "FOTO PRODUCTO: TORTA PERSONALIZADA")
 * - tipo (string): El tipo de icono a mostrar ('torta', 'comida', 'cliente', 'promocion', 'galeria', 'logo', 'principal')
 * - alto (string): Altura del contenedor (ej: "300px", "100%", etc.)
 */
export default function MarcadorPosicionImagen({ etiqueta, tipo = 'defecto', alto = '250px' }) {
  // Seleccionar el icono correspondiente según el tipo
  const obtenerIcono = () => {
    const estiloIcono = { strokeWidth: 1.2, className: "texto-dorado" };
    switch (tipo.toLowerCase()) {
      case 'torta':
        return <Cake size={36} {...estiloIcono} />;
      case 'comida':
        return <Pizza size={36} {...estiloIcono} />;
      case 'cliente':
        return <User size={32} {...estiloIcono} />;
      case 'promocion':
        return <Gift size={36} {...estiloIcono} />;
      case 'galeria':
        return <Image size={30} {...estiloIcono} />;
      case 'logo':
        return <Award size={28} {...estiloIcono} />;
      case 'principal':
        return <ShoppingBag size={48} {...estiloIcono} />;
      default:
        return <Heart size={30} {...estiloIcono} />;
    }
  };

  return (
    <div 
      className="contenedor-placeholder"
      style={{
        height: alto,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #FFFDFB 0%, #F5EFEB 100%)',
        border: '1.5px dashed var(--beige-oscuro)',
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'var(--transicion-suave)',
        boxShadow: 'inset 0 0 20px rgba(74, 59, 50, 0.02)'
      }}
    >
      {/* Círculo decorativo de fondo */}
      <div 
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'rgba(212, 175, 55, 0.04)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Icono de la Categoría */}
      <div style={{ zIndex: 2, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
        {obtenerIcono()}
      </div>

      {/* Etiqueta del Marcador */}
      <div 
        style={{ 
          zIndex: 2, 
          fontSize: '0.8rem', 
          fontWeight: '700', 
          color: 'var(--marron-oscuro)', 
          letterSpacing: '0.1em', 
          textAlign: 'center',
          textTransform: 'uppercase',
          marginBottom: '0.25rem'
        }}
      >
        {etiqueta}
      </div>

      {/* Texto descriptivo secundario */}
      <div 
        style={{ 
          zIndex: 2, 
          fontSize: '0.7rem', 
          color: 'var(--marron-suave)', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}
      >
        Espacio de fotografía reservado
      </div>

      {/* Sello de Calidad Decorativo en la esquina */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          fontSize: '0.55rem',
          color: 'var(--beige-oscuro)',
          fontWeight: '600',
          letterSpacing: '0.05em'
        }}
      >
        DULCE LAURITA
      </div>
    </div>
  );
}
