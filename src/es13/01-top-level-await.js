import { getProducts } from './products.js';

getProducts()
  .then((data) => {
    // La solicitud se completó correctamente
    // Puedes acceder a los datos obtenidos aquí
    console.log(data);
  })
  .catch((error) => {
    // Ocurrió un error durante la solicitud
    // Puedes manejar el error de la forma que desees
    console.error(error);
  });