function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it= iterate(['david', 'ana', 'jorge', 'pepe']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);