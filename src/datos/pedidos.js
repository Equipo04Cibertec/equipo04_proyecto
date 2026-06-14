/**
 * ENTIDAD: PEDIDOS (SIMULADO)
 * 
 * Este archivo simula los datos de la tabla "Pedidos" en una base de datos.
 * Cada pedido tiene:
 * - id: Identificador único (Primary Key).
 * - clienteId: Relación con el Cliente (Foreign Key).
 * - fechaPedido: Fecha en que se realizó la solicitud.
 * - fechaEntrega: Fecha coordinada para la entrega.
 * - total: Suma total de los productos comprados.
 * - estado: Estado del pedido (pendiente, confirmado, entregado, cancelado).
 * - metodoPago: Yape, Plin o Transferencia.
 */

export const listaPedidos = [
  {
    id: 101,
    clienteId: 1, // Mariana Costa
    fechaPedido: "2026-06-12",
    fechaEntrega: "2026-06-14",
    total: 85.00,
    estado: "entregado",
    metodoPago: "Yape"
  },
  {
    id: 102,
    clienteId: 2, // Ricardo Mendoza
    fechaPedido: "2026-06-13",
    fechaEntrega: "2026-06-15",
    total: 62.00,
    estado: "confirmado",
    metodoPago: "Transferencia BCP"
  }
];
