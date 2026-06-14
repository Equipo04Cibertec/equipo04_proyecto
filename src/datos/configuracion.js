/**
 * CONFIGURACIÓN CENTRALIZADA - DULCE LAURITA
 * 
 * Este archivo contiene toda la información de configuración del negocio.
 * Toda la aplicación debe consumir estos datos desde este archivo para
 * facilitar cambios futuros y la posterior integración con una API o base de datos.
 */

export const configuracion = {
  // Información General
  nombreNegocio: "Dulce Laurita",
  eslogan: "Hecho con amor, entregado con cariño.",
  descripcion: "Creamos tortas, postres y detalles dulces hechos artesanalmente para convertir cada ocasión en un momento especial. Pedidos personalizados y entregas coordinadas en Lima y Callao",

  // Datos de Contacto
  whatsapp: "950323490",
  correo: "contacto@dulcelaurita.pe", // Correo principal
  correos: [
    "contacto@dulcelaurita.pe"
  ],

  // Redes Sociales
  redesSociales: {
    instagram: "https://www.instagram.com/dulcelaurita.pe", // Modificar con URL real posterior
    facebook: "https://www.facebook.com/dulcelaurita.pe",   // Modificar con URL real posterior
    tiktok: "https://www.tiktok.com/@dulcelaurita.pe",       // Modificar con URL real posterior
    whatsappLink: "https://wa.me/51950323490"
  },

  // Cobertura de Entregas
  cobertura: {
    zonaPrincipal: "Lima y Callao",
    costoEnvio: "Variable según la ubicación del cliente.",
    distritos: [
      "Callao",
      "San Miguel",
      "Ventanilla",
      "Pueblo Libre",
      "Cercado de Lima",
      "Breña",
      "San Martín de Porres"
    ],
    textoInformativo: "Realizamos entregas coordinadas en los distritos indicados. El costo de envío es variable según la ubicación del cliente y se cotiza al momento de procesar el pedido por WhatsApp."
  }
};
