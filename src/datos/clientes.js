/**
 * ENTIDAD: CLIENTES (SIMULADO)
 * 
 * Este archivo simula los datos de la tabla "Clientes" en una base de datos.
 * Cada cliente tiene:
 * - id: Identificador único (Primary Key).
 * - nombre: Nombre completo.
 * - telefono: Número de contacto.
 * - direccion: Dirección de entrega.
 * - distrito: Relación con la cobertura.
 */

export const listaClientes = [
  {
    id: 1,
    nombre: "Mariana Costa",
    telefono: "987654321",
    direccion: "Av. La Marina 1230",
    distrito: "San Miguel"
  },
  {
    id: 2,
    nombre: "Ricardo Mendoza",
    telefono: "912345678",
    direccion: "Calle Libertad 450",
    distrito: "Pueblo Libre"
  },
  {
    id: 3,
    nombre: "Valeria Rivas",
    telefono: "945612378",
    direccion: "Av. Sáenz Peña 890",
    distrito: "Callao"
  }
];
