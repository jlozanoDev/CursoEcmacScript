//object literals

const anotherFuncion = () =>{
    return new Promise((resolve, reject)=>{
        if (false){
            resolve('Hey!!');
        }else{
            reject('baaaaa');
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err));



//con crsf

function llamarWebService(url, token) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': token
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la llamada al WS');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  // Ejemplo de uso
  const url = 'https://api.example.com/webservice';
  const token = 'mi_token_csrf';
  llamarWebService(url, token)
    .then(data => {
      console.log('Respuesta del WS:', data);
      // Haz algo con los datos recibidos
    })
    .catch(error => {
      console.error('Error en la llamada al WS:', error);
      // Maneja el error de alguna manera
    });
