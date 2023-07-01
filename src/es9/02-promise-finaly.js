//object literals

const anotherFuncion = () =>{
  return new Promise((resolve, reject)=>{
      if (true){
          resolve('Hey!!');
      }else{
          reject('baaaaa');
      }
  })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(()=>{
  console.log("finalizado");
});