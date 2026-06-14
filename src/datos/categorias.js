/**
 * CATEGORÍAS DE PRODUCTOS - DULCE LAURITA
 * 
 * Este archivo define las categorías disponibles en el taller.
 * Diseñado como una entidad independiente para facilitar la futura conexión a una base de datos o API.
 */

export const listaCategorias = [
  {
    id: 1,
    nombre: "Tortas",
    slug: "tortas",
    descripcion: "Tortas clásicas y tradicionales con recetas caseras preparadas con ingredientes de alta calidad.",
    etiquetaImagen: "FOTO CATEGORIA: TORTAS"
  },
  {
    id: 2,
    nombre: "Calzones",
    slug: "calzones",
    descripcion: "Calzones artesanales rellenos de abundante queso mozzarella y embutidos selectos horneados al momento.",
    etiquetaImagen: "FOTO CATEGORIA: CALZONES"
  },
  {
    id: 3,
    nombre: "Empanadas",
    slug: "empanadas",
    descripcion: "Empanadas de carne o pollo con masa suave, dorada y súper jugosas.",
    etiquetaImagen: "FOTO CATEGORIA: EMPANADAS"
  },
  {
    id: 4,
    nombre: "Postres",
    slug: "postres",
    descripcion: "Una variedad de postres fríos y horneados para endulzar tus tardes.",
    etiquetaImagen: "FOTO CATEGORIA: POSTRES"
  },
  {
    id: 5,
    nombre: "Productos personalizados",
    slug: "productos-personalizados",
    descripcion: "Tortas temáticas y cupcakes diseñados a tu medida para que tu celebración sea inolvidable.",
    etiquetaImagen: "FOTO CATEGORIA: PRODUCTOS PERSONALIZADOS"
  }
];
