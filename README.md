# League Of Legends API

1. Obtener todos los campeones /api/v1/champions

## Otras entidades en el LOL

- Items (sanguinaria, filo infinito)
- Structures (nexo, torres)
- Maps

## Pasos para añadir un nuevo servicio

1. Añadir la ruta en routers/championsRoutes.js
2. Añadir el controlador en controllers/championControllers.js
3. Implementar el servicio en services/championServices.js
4. Implementar el acceso al JSON en Champion.js