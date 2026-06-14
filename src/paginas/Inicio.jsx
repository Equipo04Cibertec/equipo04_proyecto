import React, { useState } from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  Heart, 
  Smile, 
  Clock, 
  Award, 
  Sparkles, 
  Sliders, 
  Truck, 
  Calendar, 
  CreditCard, 
  Star, 
  MapPin, 
  Mail,
  ChevronRight
} from 'lucide-react';

// Importación de Datos Centralizados
import { configuracion } from '../datos/configuracion';
import { listaCategorias } from '../datos/categorias';
import { categoriasProductos, listaProductos } from '../datos/productos';
import { listaPromociones } from '../datos/promociones';
import { listaTestimonios } from '../datos/testimonios';

// Importación de Componentes
import MarcadorPosicionImagen from '../componentes/MarcadorPosicionImagen';

/**
 * PAGINA: Inicio
 * 
 * Contiene todas las secciones principales de la web "Dulce Laurita".
 * Organiza los datos de forma que la navegación fluya naturalmente y
 * maximice la probabilidad de que el cliente inicie un chat en WhatsApp.
 */
export default function Inicio() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  // Filtrar productos por categoría seleccionada
  const productosFiltrados = listaProductos.filter(producto => {
    const coincideCategoria = categoriaActiva === 'Todos' || producto.categoria === categoriaActiva;
    // Mostramos los destacados en la pestaña "Destacados" o todos los que coincidan con la categoría
    return coincideCategoria && (producto.destacado || categoriaActiva !== 'Todos');
  });

  // Generador de enlace de WhatsApp
  const generarEnlaceWhatsApp = (mensaje) => {
    return `https://wa.me/51${configuracion.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <main id="inicio" style={{ marginTop: '80px' }}>
      
      {/* HERO SECTION / PORTADA */}
      <section className="seccion hero">
        <div className="contenedor hero-grilla">
          {/* Textos y Acciones */}
          <div className="hero-contenido">
            <span className="hero-subtitulo">Repostería 100% Artesanal</span>
            <h1 className="hero-titulo">
              {configuracion.nombreNegocio}
            </h1>
            <p className="hero-descripcion">
              {configuracion.eslogan} {configuracion.descripcion}
            </p>
            
            <div className="hero-botones">
              <a 
                href={generarEnlaceWhatsApp(`Hola ${configuracion.nombreNegocio}, me gustaría hacer una consulta para un pedido.`)}
                target="_blank" 
                rel="noopener noreferrer" 
                className="boton boton-whatsapp animacion-latido"
              >
                <MessageCircle size={20} />
                Pedir por WhatsApp
              </a>
              <a href="#productos" className="boton boton-secundario">
                Ver catálogo
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Indicadores de Confianza */}
            <div className="hero-indicadores">
              <div className="indicador-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Heart size={18} className="texto-dorado" />
                  <span className="indicador-titulo">Elaboración Artesanal</span>
                </div>
                <span className="indicador-desc">Recetas caseras hechas con amor.</span>
              </div>
              <div className="indicador-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Smile size={18} className="texto-dorado" />
                  <span className="indicador-titulo">Atención Personalizada</span>
                </div>
                <span className="indicador-desc">Asesoría en cada detalle de tu pedido.</span>
              </div>
              <div className="indicador-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={18} className="texto-dorado" />
                  <span className="indicador-titulo">Entregas Coordinadas</span>
                </div>
                <span className="indicador-desc">Recibe tu postre fresco a la hora pactada.</span>
              </div>
            </div>
          </div>

          {/* Imagen Hero Placeholder */}
          <div className="hero-imagen-wrapper">
            <MarcadorPosicionImagen 
              etiqueta="[IMAGEN PRINCIPAL: DULCE LAURITA PORTADA]" 
              tipo="principal" 
              alto="420px" 
            />
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="productos" className="seccion seccion-alterna seccion-productos">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>Nuestros Productos Destacados</h2>
            <p>Descubre el sabor inconfundible de nuestras preparaciones dulces y saladas.</p>
          </div>

          {/* Filtros de Categorías */}
          <div className="filtros-categorias">
            <button 
              className={`boton-filtro ${categoriaActiva === 'Todos' ? 'activo' : ''}`}
              onClick={() => setCategoriaActiva('Todos')}
            >
              Destacados
            </button>
            {categoriasProductos.map((categoria) => (
              <button 
                key={categoria}
                className={`boton-filtro ${categoriaActiva === categoria ? 'activo' : ''}`}
                onClick={() => setCategoriaActiva(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Grilla de Productos */}
          <div className="productos-grilla">
            {productosFiltrados.map((producto) => (
              <article key={producto.id} className="tarjeta-producto">
                {/* Imagen Placeholder del Producto */}
                <MarcadorPosicionImagen 
                  etiqueta={producto.etiquetaImagen} 
                  tipo={producto.categoria === 'Calzones' || producto.categoria === 'Empanadas' ? 'comida' : 'torta'} 
                  alto="230px" 
                />
                
                <div className="tarjeta-producto-contenido">
                  <span className="tarjeta-producto-categoria">{producto.categoria}</span>
                  <h3 className="tarjeta-producto-nombre">{producto.nombre}</h3>
                  <p className="tarjeta-producto-desc">{producto.descripcion}</p>
                  
                  <div className="tarjeta-producto-pie">
                    <span className="tarjeta-producto-precio">{producto.precio}</span>
                    <a 
                      href={generarEnlaceWhatsApp(`Hola ${configuracion.nombreNegocio}, me interesa ordenar el producto: "${producto.nombre}". Me gustaría coordinar los detalles.`)}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="boton boton-whatsapp"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                    >
                      <MessageCircle size={14} />
                      Pedir por WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="seccion">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>Nuestras Categorías</h2>
            <p>Explora la variedad de delicias que preparamos artesanalmente bajo pedido.</p>
          </div>

          <div className="categorias-grilla">
            {listaCategorias.map((categoria) => (
              <div key={categoria.id} className="tarjeta-categoria">
                <MarcadorPosicionImagen 
                  etiqueta={categoria.etiquetaImagen} 
                  tipo={categoria.slug === 'calzones' || categoria.slug === 'empanadas' ? 'comida' : 'torta'} 
                  alto="200px" 
                />
                <div className="tarjeta-categoria-contenido">
                  <h3>{categoria.nombre}</h3>
                  <p>{categoria.descripcion}</p>
                  <a 
                    href="#productos" 
                    className="boton-categoria-enlace"
                    onClick={() => setCategoriaActiva(categoria.nombre)}
                  >
                    <span>Ver {categoria.nombre.toLowerCase()}</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ ELEGIRNOS? */}
      <section id="nosotros" className="seccion seccion-alterna">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>¿Por Qué Elegir Dulce Laurita?</h2>
            <p>Trabajamos diariamente para que cada bocado sea una experiencia única para tu paladar.</p>
          </div>

          <div className="elegirnos-grilla">
            <div className="tarjeta-elegirnos">
              <div className="icono-contenedor">
                <Heart size={28} />
              </div>
              <h3 className="elegirnos-titulo">Elaboración Artesanal</h3>
              <p>Cada producto es horneado a mano, siguiendo recetas tradicionales que garantizan un auténtico sabor hogareño.</p>
            </div>

            <div className="tarjeta-elegirnos">
              <div className="icono-contenedor">
                <Award size={28} />
              </div>
              <h3 className="elegirnos-titulo">Ingredientes de Calidad</h3>
              <p>Seleccionamos la mejor mantequilla, chocolates de alta pureza y frutas frescas para asegurar la calidad de tus postres.</p>
            </div>

            <div className="tarjeta-elegirnos">
              <div className="icono-contenedor">
                <Smile size={28} />
              </div>
              <h3 className="elegirnos-titulo">Atención Personalizada</h3>
              <p>Escuchamos tus ideas y te asesoramos para que tu torta o bocadito sea exactamente como lo soñaste.</p>
            </div>

            <div className="tarjeta-elegirnos">
              <div className="icono-contenedor">
                <Sliders size={28} />
              </div>
              <h3 className="elegirnos-titulo">Pedidos Personalizados</h3>
              <p>Adaptamos sabores, tamaños, colores y temáticas. Cuéntanos qué deseas y nosotros lo hacemos realidad.</p>
            </div>

            <div className="tarjeta-elegirnos">
              <div className="icono-contenedor">
                <Truck size={28} />
              </div>
              <h3 className="elegirnos-titulo">Entregas Coordinadas</h3>
              <p>Entregamos tu pedido en el horario pactado para asegurar que lo recibas con la frescura intacta en Lima y Callao.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO HACER UN PEDIDO */}
      <section className="seccion">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>Cómo Hacer un Pedido</h2>
            <p>Nuestros postres son recién horneados, por lo que trabajamos bajo un sencillo proceso coordinado.</p>
          </div>

          <div className="como-pedir-grilla">
            <div className="tarjeta-paso">
              <div className="numero-paso">1</div>
              <div className="paso-icono"><MessageCircle size={32} /></div>
              <h3 className="paso-titulo">Contactar por WhatsApp</h3>
              <p className="paso-desc">Envíanos un mensaje detallando tu consulta, fecha del evento y los detalles de lo que deseas.</p>
            </div>

            <div className="tarjeta-paso">
              <div className="numero-paso">2</div>
              <div className="paso-icono"><Sliders size={32} /></div>
              <h3 className="paso-titulo">Seleccionar productos</h3>
              <p className="paso-desc">Elige del catálogo de productos, tamaños, sabores o envíanos la foto de referencia que tienes en mente.</p>
            </div>

            <div className="tarjeta-paso">
              <div className="numero-paso">3</div>
              <div className="paso-icono"><CreditCard size={32} /></div>
              <h3 className="paso-titulo">Coordinar detalles</h3>
              <p className="paso-desc">Confirmamos disponibilidad para tu fecha, el costo de envío personalizado y acordamos la forma de abono.</p>
            </div>

            <div className="tarjeta-paso">
              <div className="numero-paso">4</div>
              <div className="paso-icono"><Truck size={32} /></div>
              <h3 className="paso-titulo">Recibir pedido</h3>
              <p className="paso-desc">Recibe tus productos frescos y decorados en la dirección acordada del distrito correspondiente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS PERSONALIZADOS */}
      <section className="seccion seccion-alterna">
        <div className="contenedor">
          <div className="personalizados-tarjeta" style={{ backgroundColor: 'var(--blanco)' }}>
            <div className="personalizados-grilla">
              <div>
                <span className="texto-dorado negrita" style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>Proyectos Especiales</span>
                <h2 className="alineado-izquierda" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Creamos Diseños Únicos a tu Medida</h2>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  ¿Tienes una idea en mente? Nos especializamos en la creación de tortas y postres temáticos adaptados a cualquier celebración. Cuidamos cada detalle visual y el sabor artesanal.
                </p>
                <p className="negrita" style={{ color: 'var(--marron-oscuro)' }}>Elaboramos productos personalizados para:</p>
                
                <div className="lista-ocasiones">
                  <div className="ocasion-item">
                    <span className="ocasion-punto" />
                    <span>Cumpleaños Temáticos</span>
                  </div>
                  <div className="ocasion-item">
                    <span className="ocasion-punto" />
                    <span>Aniversarios y Bodas</span>
                  </div>
                  <div className="ocasion-item">
                    <span className="ocasion-punto" />
                    <span>Bautizos y Baby Showers</span>
                  </div>
                  <div className="ocasion-item">
                    <span className="ocasion-punto" />
                    <span>Eventos Empresariales</span>
                  </div>
                  <div className="ocasion-item">
                    <span className="ocasion-punto" />
                    <span>Reuniones y Celebraciones</span>
                  </div>
                  <div className="ocasion-item">
                    <span className="ocasion-punto" />
                    <span>Regalos Corporativos</span>
                  </div>
                </div>

                <a 
                  href={generarEnlaceWhatsApp(`Hola ${configuracion.nombreNegocio}, me gustaría cotizar una torta personalizada para un evento.`)}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="boton boton-whatsapp"
                >
                  <MessageCircle size={20} />
                  Cotizar Torta Personalizada
                </a>
              </div>

              <div>
                <MarcadorPosicionImagen 
                  etiqueta="[FOTO PRODUCTO: MUESTRA DE TORTAS PERSONALIZADAS]" 
                  tipo="torta" 
                  alto="350px" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOCIONES */}
      <section id="promociones" className="seccion seccion-promociones">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>Promociones Especiales</h2>
            <p>Aprovecha nuestras ofertas y deléitate con lo mejor de nuestra repostería artesanal.</p>
          </div>

          {listaPromociones.filter(p => p.activa).map((promo) => (
            <div key={promo.id} className="promocion-destacada">
              <div className="promocion-grilla">
                {/* Contenido de la Promoción */}
                <div className="promocion-contenido">
                  <span className="promocion-tag">Oferta Especial</span>
                  <h3 className="promocion-titulo">{promo.titulo}</h3>
                  <p className="promocion-desc">{promo.descripcion}</p>
                  <a 
                    href={generarEnlaceWhatsApp(`Hola ${configuracion.nombreNegocio}, me gustaría reclamar la promoción: "${promo.titulo}".`)}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="boton boton-whatsapp"
                  >
                    <MessageCircle size={20} />
                    {promo.textoBoton}
                  </a>
                </div>
                {/* Imagen Placeholder Promoción */}
                <div>
                  <MarcadorPosicionImagen 
                    etiqueta={promo.etiquetaImagen} 
                    tipo="promocion" 
                    alto="340px" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA (ESTILO INSTAGRAM) */}
      <section className="seccion">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>Nuestra Galería de Creaciones</h2>
            <p>Síguenos en nuestras redes sociales para estar al tanto de nuestros últimos horneados.</p>
          </div>

          <div className="galeria-grilla">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((indice) => (
              <div key={indice} className="galeria-item">
                <MarcadorPosicionImagen 
                  etiqueta={`[FOTO GALERÍA ${indice}]`} 
                  tipo="galeria" 
                  alto="260px" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="seccion seccion-alterna">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>Lo Que Dicen Nuestros Clientes</h2>
            <p>La mayor satisfacción de nuestro taller es acompañar tus momentos especiales.</p>
          </div>

          <div className="testimonios-grilla">
            {listaTestimonios.map((testimonio) => (
              <div key={testimonio.id} className="tarjeta-testimonio">
                {/* Estrellas */}
                <div className="testimonio-estrellas">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < testimonio.calificacion ? "currentColor" : "none"} 
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Mensaje */}
                <p className="testimonio-comentario">
                  "{testimonio.comentario}"
                </p>

                {/* Cliente */}
                <div className="testimonio-usuario">
                  <div className="usuario-avatar">
                    <MarcadorPosicionImagen 
                      etiqueta={`[${testimonio.etiquetaFoto}]`} 
                      tipo="cliente" 
                      alto="100%" 
                    />
                  </div>
                  <div>
                    <span className="usuario-info-nombre">{testimonio.nombre}</span>
                    <br />
                    <span className="usuario-info-distrito">{testimonio.distrito}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COBERTURA DE ENTREGAS */}
      <section className="seccion">
        <div className="contenedor">
          <div className="cobertura-grilla">
            {/* Imagen Ilustrativa Placeholder */}
            <div>
              <MarcadorPosicionImagen 
                etiqueta="[FOTO MAPA / COBERTURA REPARTO LIMA Y CALLAO]" 
                tipo="defecto" 
                alto="320px" 
              />
            </div>

            {/* Info de Despacho */}
            <div className="cobertura-info">
              <span className="texto-dorado negrita" style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>Envíos a Domicilio</span>
              <h2 className="alineado-izquierda" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Cobertura en {configuracion.cobertura.zonaPrincipal}</h2>
              <p>
                {configuracion.cobertura.textoInformativo}
              </p>
              
              <p className="negrita" style={{ color: 'var(--marron-oscuro)', marginBottom: '1rem' }}>
                Distritos donde realizamos entregas:
              </p>
              
              <div className="distritos-lista">
                {configuracion.cobertura.distritos.map((distrito, index) => (
                  <span key={index} className="distrito-badge">
                    {distrito}
                  </span>
                ))}
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  background: 'rgba(212, 175, 55, 0.05)', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--dorado-suave)'
                }}
              >
                <MapPin size={24} className="texto-dorado" />
                <span style={{ fontSize: '0.9rem', color: 'var(--marron-oscuro)' }}>
                  ¿Tu distrito no figura en la lista? Contáctanos por WhatsApp para consultar disponibilidad especial.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="seccion seccion-alterna">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>Ponte en Contacto Con Nosotros</h2>
            <p>¿Tienes preguntas o deseas realizar una cotización? Escríbenos por cualquiera de nuestros medios.</p>
          </div>

          <div className="contacto-grilla">
            {/* Canales de Contacto */}
            <div className="contacto-info">
              {/* WhatsApp */}
              <div className="contacto-bloque">
                <div className="contacto-icono">
                  <MessageCircle size={24} />
                </div>
                <div className="contacto-detalles">
                  <h4>WhatsApp</h4>
                  <p>Atención directa para cotizaciones y pedidos.</p>
                  <a 
                    href={generarEnlaceWhatsApp("Hola Dulce Laurita, me gustaría realizar una consulta.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="negrita"
                    style={{ color: 'var(--dorado-oscuro)' }}
                  >
                    +51 {configuracion.whatsapp}
                  </a>
                </div>
              </div>

              {/* Correo Electrónico */}
              <div className="contacto-bloque">
                <div className="contacto-icono">
                  <Mail size={24} />
                </div>
                <div className="contacto-detalles">
                  <h4>Correo Electrónico</h4>
                  <p>Para consultas corporativas o dudas generales.</p>
                  <a href={`mailto:${configuracion.correo}`} className="negrita" style={{ color: 'var(--dorado-oscuro)' }}>
                    {configuracion.correo}
                  </a>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="contacto-bloque">
                <div className="contacto-detalles" style={{ width: '100%' }}>
                  <h4>Síguenos en Redes Sociales</h4>
                  <p>Publicamos novedades, promociones y fotos de nuestros últimos pedidos diariamente.</p>
                  
                  <div className="redes-lista" style={{ justifyContent: 'flex-start', marginTop: '1rem' }}>
                    {configuracion.redesSociales.instagram && (
                      <a href={configuracion.redesSociales.instagram} target="_blank" rel="noopener noreferrer" className="red-boton" aria-label="Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    )}
                    {configuracion.redesSociales.facebook && (
                      <a href={configuracion.redesSociales.facebook} target="_blank" rel="noopener noreferrer" className="red-boton" aria-label="Facebook">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                    )}
                    {configuracion.redesSociales.tiktok && (
                      <a href={configuracion.redesSociales.tiktok} target="_blank" rel="noopener noreferrer" className="red-boton" aria-label="TikTok">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Aclaración o Recordatorios */}
            <div 
              style={{
                backgroundColor: 'var(--blanco)',
                border: '1.5px solid var(--beige-oscuro)',
                borderRadius: '24px',
                padding: '3rem 2.5rem',
                boxShadow: 'var(--sombra-suave)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <h3 style={{ marginBottom: '1rem' }}>Información Importante</h3>
              
              <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--marron-suave)' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span className="texto-dorado" style={{ fontWeight: 'bold' }}>✓</span>
                  <span><strong>Taller cerrado al público:</strong> No contamos con local presencial comercial. Todo se prepara de manera artesanal bajo pedido.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span className="texto-dorado" style={{ fontWeight: 'bold' }}>✓</span>
                  <span><strong>Anticipación:</strong> Recomendamos agendar pedidos regulares con 48 horas de anticipación, y tortas temáticas personalizadas con 5 días de anticipación.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span className="texto-dorado" style={{ fontWeight: 'bold' }}>✓</span>
                  <span><strong>Costos de envío:</strong> Varían de acuerdo al distrito y dirección exacta de entrega, informándose antes de confirmar tu pedido.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span className="texto-dorado" style={{ fontWeight: 'bold' }}>✓</span>
                  <span><strong>Medios de Pago:</strong> Aceptamos transferencias bancarias directas y billeteras digitales (Yape / Plin).</span>
                </li>
              </ul>
              
              <a 
                href={generarEnlaceWhatsApp("Hola Dulce Laurita, estoy de acuerdo con los términos y me gustaría realizar un pedido.")}
                target="_blank"
                rel="noopener noreferrer"
                className="boton boton-principal"
                style={{ marginTop: '2rem' }}
              >
                Escríbenos y Agenda Tu Pedido
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
