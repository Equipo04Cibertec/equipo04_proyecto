/**
 * PROMOCIONES ACTIVAS - DULCE LAURITA
 * 
 * En este archivo puedes gestionar las ofertas especiales del sitio.
 * Cada promoción debe tener:
 * - id: Un identificador único.
 * - titulo: El título de la promoción.
 * - descripcion: El texto explicativo de la oferta.
 * - textoBoton: El texto de la llamada a la acción.
 * - etiquetaImagen: Nombre que se mostrará en el contenedor de imagen (placeholder).
 * - activa: true para mostrarla en la web, false para ocultarla.
 */

export const listaPromociones = [
  {
    id: 1,
    titulo: "¡Dulce Bienvenida!",
    descripcion: "Llévate un 10% de descuento en tu primer pedido de cualquier Torta Temática Personalizada. Perfecta para celebrar con el mejor sabor casero.",
    textoBoton: "Reclamar descuento por WhatsApp",
    etiquetaImagen: "FOTO PROMOCION: DESCUENTO TORTAS",
    activa: true
  },
  {
    id: 2,
    titulo: "Combo Familiar del Fin de Semana",
    descripcion: "Compra un Calzone Relleno Familiar y llévate 4 Empanadas de carne por solo S/ 50.00 (Precio regular S/ 54.00). Disponible para entregas los sábados y domingos.",
    textoBoton: "Pedir Combo por WhatsApp",
    etiquetaImagen: "FOTO PROMOCION: COMBO FAMILIAR",
    activa: true
  }
];
