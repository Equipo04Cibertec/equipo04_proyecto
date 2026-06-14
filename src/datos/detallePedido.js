/**
 * ENTIDAD: DETALLE_PEDIDO (SIMULADO)
 * 
 * Este archivo simula los datos de la tabla "DetallePedido" en una base de datos.
 * Cada registro representa un producto y cantidad asociados a un pedido:
 * - id: Identificador único (Primary Key).
 * - pedidoId: Relación con el Pedido (Foreign Key).
 * - productoId: Relación con el Producto (Foreign Key).
 * - cantidad: Cantidad comprada.
 * - precioUnitario: Precio cobrado en el momento de la compra.
 */

export const listaDetallesPedidos = [
  {
    id: 501,
    pedidoId: 101,
    productoId: 1, // Torta Temática Personalizada
    cantidad: 1,
    precioUnitario: 85.00
  },
  {
    id: 502,
    pedidoId: 102,
    productoId: 2, // Calzone Relleno Familiar
    cantidad: 1,
    precioUnitario: 38.00
  },
  {
    id: 503,
    pedidoId: 102,
    productoId: 3, // Pack de Empanadas Artesanales
    cantidad: 1,
    precioUnitario: 24.00
  }
];
