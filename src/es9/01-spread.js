const objeto = {
    nombre: "Andres",
    age: 23,
  }
  
const usuario = {
      ...objeto,
      plataforma: "Platzi"
  }

const {nombre, ...values} = usuario;
console.log(nombre);
console.log(values);