//object literals

class User {
    constructor(name){
      this.name = name;
    }
    setName(name){
      this.name = name;
    }
    getName(){
      return this.name;
    }
    saludo(){
      return "Hola " + this.name + this.#privado();
    }
    #privado (){
        return "es privado";
    }
  
};
  
  const newUser = new User('Benito');
  console.log(newUser.saludo());
  newUser.setName('Manolo');
  console.log(newUser.saludo());
  console.log(newUser.getName());
  //console.log(newUser.#privado());