/**
 * BASE DE DATOS DE PRODUCTOS - DULCE LAURITA
 * 
 * Modifica, agrega o elimina productos en este archivo.
 * Cada producto está diseñado como una entidad lista para ser mapeada a una base de datos:
 * - id: Identificador único (Primary Key).
 * - nombre: Nombre comercial del producto.
 * - precio: Precio como texto (o número para el cálculo en el carro de compras).
 * - descripcion: Descripción detallada de los ingredientes o preparación.
 * - categoria: Relación con el nombre de la categoría (Foreign Key simulada).
 * - etiquetaImagen: Marcador para la imagen placeholder.
 * - destacado: Indica si se muestra en la sección de destacados (Booleano).
 */

import { listaCategorias } from './categorias';

// Exportar las categorías en formato simple para compatibilidad con filtros de UI
export const categoriasProductos = listaCategorias.map(cat => cat.nombre);

export const listaProductos = [
  {
    id: 1,
    nombre: "Torta Temática Personalizada",
    precio: "Desde S/ 85.00",
    descripcion: "Diseños exclusivos en masa elástica o crema para cumpleaños, bautizos y aniversarios. Sabor y temática a tu elección.",
    categoria: "Productos personalizados",
    etiquetaImagen: "FOTO PRODUCTO: TORTA PERSONALIZADA",
    destacado: true
  },
  {
    id: 2,
    nombre: "Calzone Relleno Familiar",
    precio: "S/ 38.00",
    descripcion: "Deliciosa masa artesanal horneada, rellena de abundante queso mozzarella, jamón inglés, orégano y salsa de tomate de la casa.",
    categoria: "Calzones",
    etiquetaImagen: "FOTO PRODUCTO: CALZONE FAMILIAR",
    destacado: true
  },
  {
    id: 3,
    nombre: "Pack de Empanadas Artesanales (6 und)",
    precio: "S/ 24.00",
    descripcion: "Empanadas súper jugosas de carne o pollo, preparadas con una masa suave y horneadas al punto perfecto. Incluye limón.",
    categoria: "Empanadas",
    etiquetaImagen: "FOTO PRODUCTO: PACK EMPANADAS",
    destacado: true
  },
  {
    id: 4,
    nombre: "Torta Tres Leches Tradicional",
    precio: "S/ 55.00",
    descripcion: "Bizcochuelo súper húmedo bañado en nuestra mezcla especial de tres leches, decorado con merengue italiano y un toque de canela.",
    categoria: "Postres",
    etiquetaImagen: "FOTO PRODUCTO: TRES LECHES",
    destacado: true
  },
  {
    id: 5,
    nombre: "Pie de Limón Clásico",
    precio: "S/ 45.00",
    descripcion: "Base de galleta crujiente de mantequilla, con un relleno cremoso y ácido de limón, coronado con copos de merengue dorado.",
    categoria: "Postres",
    etiquetaImagen: "FOTO PRODUCTO: PIE DE LIMON",
    destacado: true
  },
  {
    id: 6,
    nombre: "Cupcakes Temáticos (Pack de 6)",
    precio: "S/ 30.00",
    descripcion: "Cupcakes esponjosos decorados con crema de mantequilla o detalles de fondant de acuerdo a la temática de tu evento.",
    categoria: "Productos personalizados",
    etiquetaImagen: "FOTO PRODUCTO: CUPCAKES TEMATICOS",
    destacado: true
  },
  {
    id: 7,
    nombre: "Empanada de Carne Individual",
    precio: "S/ 4.50",
    descripcion: "Empanada artesanal de carne picada, cebolla caramelizada, pasas y huevo, con masa hojaldrada.",
    categoria: "Empanadas",
    etiquetaImagen: "FOTO PRODUCTO: EMPANADA DE CARNE",
    destacado: false
  },
  {
    id: 8,
    nombre: "Brownies de Fudge Casero (Pack de 6)",
    precio: "S/ 20.00",
    descripcion: "Brownies melcochudos de chocolate de alta calidad con trozos de nueces y bañado en fudge artesanal.",
    categoria: "Postres",
    etiquetaImagen: "FOTO PRODUCTO: PACK BROWNIES",
    destacado: false
  }
];
