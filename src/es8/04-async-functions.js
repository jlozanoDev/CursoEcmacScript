const fnAsync = () =>{
    return new Promise ((resolve, reject) => {
        (true) ?setTimeout(()=> resolve ('AsyncC!!', 2000)) : reject (new Error ('Error!'));
    })
}

const anotherFuncion = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("hola");
}

console.log("Before");
anotherFuncion();
console.log("After");
