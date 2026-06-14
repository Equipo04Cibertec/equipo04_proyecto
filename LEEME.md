# ✿ DULCE LAURITA - SITIO WEB OFICIAL

Este proyecto es una aplicación web moderna, profesional y elegante para **Dulce Laurita**, un taller de repostería artesanal en Lima y Callao que trabaja bajo pedido y con entregas coordinadas a domicilio. El sitio está optimizado para dispositivos móviles (Mobile-First) y enfocado en captar pedidos a través de WhatsApp.

La aplicación está construida usando **React** y **Vite**, y está estructurada de tal manera que permite a estudiantes y desarrolladores conectar fácilmente una base de datos y un backend en el futuro.

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu computadora:
* [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada).
* Un editor de código como [Visual Studio Code](https://code.visualstudio.com/).

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para descargar, instalar y poner en marcha el proyecto en tu entorno local:

### 1. Instalar las dependencias
Abre una terminal (PowerShell o CMD en Windows, o la terminal integrada de VS Code) dentro de la carpeta del proyecto y ejecuta el siguiente comando:
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
Una vez completada la instalación, inicia el servidor local de desarrollo con:
```bash
npm run dev
```

### 3. Abrir la página
La terminal te mostrará una dirección local (por lo general, `http://localhost:5173`). Abre tu navegador web e ingresa a esa URL para ver la página web en tiempo real.

---

## 📂 Estructura del Proyecto

El proyecto está organizado en español bajo una estructura limpia que divide las responsabilidades del sistema:

* **`index.html`**: Estructura principal y configuración de SEO (título de página, descripción en Google).
* **`src/main.jsx`**: Punto de entrada de React que renderiza la aplicación y carga los estilos globales.
* **`src/App.jsx`**: Ensamblador general de la barra de navegación, la página de inicio, el footer y el botón flotante.
* **`src/estilos/`**: Carpeta destinada a las hojas de estilo del sitio.
  * `index.css`: Contiene todo el sistema de diseño (tokens de color, tipografía Inter y Playfair Display, animaciones y componentes CSS).
* **`src/componentes/`**: Componentes visuales reutilizables:
  * `Cabecera.jsx`: Barra de navegación superior con enlaces dinámicos y botón de llamado a la acción.
  * `PiePagina.jsx`: Sección inferior con enlaces rápidos, créditos e información de contacto.
  * `BotonWhatsAppFlotante.jsx`: Botón flotante verde para contactar directamente vía chat.
  * `MarcadorPosicionImagen.jsx`: Contenedores visuales elegantes (placeholders) que simulan fotos profesionales con iconos.
* **`src/paginas/`**:
  * `Inicio.jsx`: La página principal que renderiza todas las secciones requeridas (Hero, Productos Destacados, Categorías, ¿Por qué elegirnos?, Proceso de Pedido, Personalizados, Promociones, Galería, Testimonios, Cobertura, Contacto).
* **`src/datos/`**: **Información centralizada y simulada** (Mock Data). Actúa como una base de datos local en formato de archivos JS:
  * `configuracion.js`: Nombre del negocio, WhatsApp, eslogan, descripción, correos, redes sociales y distritos.
  * `categorias.js`: Lista de categorías del negocio.
  * `productos.js`: Lista de productos asociados a sus respectivas categorías.
  * `promociones.js`: Banner de ofertas especiales activas.
  * `testimonios.js`: Opiniones reales de clientes del negocio.
  * `clientes.js`: Entidad simulada de Clientes (para futuras integraciones).
  * `pedidos.js`: Entidad simulada de Pedidos (para futuras integraciones).
  * `detallePedido.js`: Entidad simulada de Detalle de Pedidos (para futuras integraciones).
* **`src/imagenes/`**: Carpeta reservada para almacenar archivos multimedia y fotos reales del negocio.
* **`src/servicios/`**: Carpeta reservada para la lógica de API (por ejemplo, llamadas Axios o Fetch).
* **`src/utilidades/`**: Carpeta reservada para funciones auxiliares (formateadores de precios, fechas, etc.).

---

## ✏️ Guía de Personalización y Cambios

Toda la web consume dinámicamente los datos de la carpeta `src/datos/`. No necesitas modificar código JSX o HTML complejo para realizar cambios de negocio.

### 1. Cómo cambiar el número de WhatsApp, Correo y Redes Sociales
Abre el archivo `src/datos/configuracion.js` y edita los campos correspondientes:
```javascript
export const configuracion = {
  nombreNegocio: "Dulce Laurita",
  whatsapp: "950323490", // Modifica solo el número de 9 dígitos
  correo: "contacto@dulcelaurita.pe",
  redesSociales: {
    instagram: "https://www.instagram.com/tu_usuario_real",
    facebook: "https://www.facebook.com/tu_pagina_real",
    tiktok: "https://www.tiktok.com/@tu_usuario_real"
  },
  // ...
}
```

### 2. Cómo agregar, editar o quitar Productos y Precios
Abre `src/datos/productos.js`. Los productos están estructurados como objetos dentro de un arreglo.
* **Para editar un precio o descripción:** Modifica el texto en los campos `precio` o `descripcion`.
* **Para quitar un producto:** Borra el bloque del producto del arreglo (desde `{` hasta `},`).
* **Para agregar un producto:** Copia un bloque existente y pégalo al final, asignándole un `id` único e incremental.

```javascript
{
  id: 9,
  nombre: "Nuevo Postre de Fresa",
  precio: "S/ 15.00",
  descripcion: "Esponjoso bizcochuelo relleno de crema pastelera y fresas frescas.",
  categoria: "Postres", // Debe coincidir exactamente con una de las categorías
  etiquetaImagen: "FOTO PRODUCTO: NUEVO POSTRE",
  destacado: true
}
```

### 3. Cómo cambiar las Promociones
Abre `src/datos/promociones.js`. Puedes cambiar el título, la descripción, la imagen simulada y alternar el campo `activa` (poniendo `true` para mostrarla o `false` para ocultarla temporalmente):
```javascript
{
  id: 1,
  titulo: "¡15% de Descuento Especial!",
  descripcion: "Descripción de la oferta...",
  textoBoton: "Reclamar descuento por WhatsApp",
  etiquetaImagen: "FOTO PROMOCION: DESCUENTO ESPECIAL",
  activa: true
}
```

### 4. Cómo cambiar las Imágenes Placeholder por Fotos Reales
El sitio utiliza un componente interactivo llamado `MarcadorPosicionImagen` para mostrar cajas temporales de gran diseño. Cuando desees colocar fotos reales:

1. Guarda tus fotos reales en la carpeta `src/imagenes/` (ejemplo: `torta-chocolate.jpg`).
2. Importa la imagen en el componente correspondiente (por ejemplo en `src/paginas/Inicio.jsx`):
   ```javascript
   import fotoTortaChocolate from '../imagenes/torta-chocolate.jpg';
   ```
3. Reemplaza el componente `<MarcadorPosicionImagen ... />` por la etiqueta HTML nativa `<img>`:
   * **Antes:**
     ```jsx
     <MarcadorPosicionImagen 
       etiqueta={producto.etiquetaImagen} 
       tipo="torta" 
       alto="230px" 
     />
     ```
   * **Después:**
     ```jsx
     <img 
       src={fotoTortaChocolate} 
       alt={producto.nombre} 
       style={{ width: '100%', height: '230px', objectFit: 'cover', borderRadius: '16px' }}
     />
     ```

---

## 💾 Cómo conectar una base de datos en el futuro

El sitio está estructurado siguiendo las bases del desarrollo frontend profesional, lo que permite que sea escalado a un entorno fullstack (utilizando tecnologías como **Node.js, Express, MySQL, PostgreSQL u MongoDB**).

### 1. Entidades del Sistema (Base de Datos Relacional)
Si diseñas una base de datos para este proyecto, las tablas recomendadas y sus relaciones son:
1. **Categorías**: `id` (PK), `nombre`, `slug`, `descripcion`, `etiquetaImagen`.
2. **Productos**: `id` (PK), `nombre`, `precio` (Decimal), `descripcion`, `categoriaId` (FK -> Categorías), `etiquetaImagen`, `destacado` (Booleano).
3. **Promociones**: `id` (PK), `titulo`, `descripcion`, `textoBoton`, `etiquetaImagen`, `activa` (Booleano).
4. **Clientes**: `id` (PK), `nombre`, `telefono`, `direccion`, `distrito`.
5. **Pedidos**: `id` (PK), `clienteId` (FK -> Clientes), `fechaPedido`, `fechaEntrega`, `total`, `estado`, `metodoPago`.
6. **DetallePedido**: `id` (PK), `pedidoId` (FK -> Pedidos), `productoId` (FK -> Productos), `cantidad`, `precioUnitario`.

### 2. Pasos Técnicos para la Integración Frontend-Backend
Para conectar este frontend con una API REST en el futuro, se deben realizar los siguientes cambios:

#### A. Crear los servicios de comunicación API
En la carpeta `src/servicios/`, crea archivos para realizar las peticiones HTTP al backend (por ejemplo usando `fetch` o instalando `axios` con `npm install axios`).
*Ejemplo: `src/servicios/productosServicio.js`*
```javascript
const API_URL = 'http://localhost:3000/api'; // URL del backend con Node/Express

export async function obtenerProductos() {
  const respuesta = await fetch(`${API_URL}/productos`);
  if (!respuesta.ok) {
    throw new Error('Error al cargar productos desde la base de datos');
  }
  return await respuesta.json();
}
```

#### B. Reemplazar las importaciones estáticas por estado dinámico en React
En la página `src/paginas/Inicio.jsx`, en lugar de importar la variable estática `listaProductos`, utiliza los hooks `useState` y `useEffect` de React para realizar la carga al iniciar el sitio.

*Ejemplo de modificación en `src/paginas/Inicio.jsx`:*
```javascript
import React, { useState, useEffect } from 'react';
// Eliminar: import { listaProductos } from '../datos/productos';
import { obtenerProductos } from '../servicios/productosServicio';

export default function Inicio() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProductos()
      .then(datos => {
        setProductos(datos);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  // ... (el resto de la lógica de renderizado utiliza el estado "productos")
}
```

Haciendo este cambio para las entidades (Categorías, Productos, Promociones y Testimonios), la interfaz de usuario se volverá completamente dinámica y estará conectada al backend en tiempo real sin alterar las hojas de estilo (`index.css`) ni la maquetación principal.
