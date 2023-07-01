//object literals

function newUser(user, age, country, uId){
    return {
        user, 
        age,
        country,
        id : uId
    }
}

console.log(newUser("pepe", 34, "mx", 1))