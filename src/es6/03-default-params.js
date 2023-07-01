function newUser (name, age, country){
    var name = name || 'Oscar';
    var age = age || '34';
    var country = country || 'ES';
    console.log(name, age, country);
}
newUser();


function newUser2 (name = 'Oscar', age = 34, country = 'ES'){
    console.log(name, age, country);
}
newUser2();