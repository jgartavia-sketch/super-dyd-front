# Supermercado D&D — frontend actualizado

## Reemplazar la carpeta actual

1. Conservá una copia de respaldo de la carpeta anterior.
2. Extraé este ZIP dentro de `C:\Users\Memo\Desktop\DyD`.
3. Abrí PowerShell dentro de `super-dyd-front`.
4. Ejecutá:

```powershell
npm install
npm run dev
```

## Funciones incluidas

- Navbar: Inicio, Supermercado, Mi cuenta y Nosotros.
- Noticias, promociones, concursos activos y ganadores.
- Categorías desplegables con productos y carrito.
- Pedido enviado al WhatsApp 6423-0421.
- Formularios de registro e ingreso.
- Panel de puntos, referidos y enlace para compartir.
- Ubicación, Facebook, Google Maps, Waze y horarios.
- Diseño responsive para computadora y celular.

## Conexión del sistema de cuentas

El repositorio original solo incluye frontend. Para guardar cuentas, contraseñas,
puntos y referidos de forma real se necesita un backend con PostgreSQL.

Cuando exista la URL del backend:

1. Copiá `.env.example` con el nombre `.env`.
2. Colocá la URL en `VITE_API_URL`.
3. Reiniciá `npm run dev`.

El frontend espera estos endpoints:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/customers/me`

Hasta conectar el backend, el catálogo, carrito, contacto y pedidos por WhatsApp
funcionan normalmente; el formulario mostrará que el servicio de cuentas aún no
está conectado.
