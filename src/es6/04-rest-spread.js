let fruits = ['Apple', 'Banana'];

let [a, b] = fruits;

console.log (a, b);



let user = {
    username : 'Oscar',
    age: 34
}

let {username, age} = user;
console.log (username, age);



//spread operator
let person = {name: 'oscar', age: 28};
let country = 'MX';

let data = { ...person, country};
console.log(data);


function sum(num, ...values){
    console.log(values);
    console.log(num+values[0]);

    return num+ values[0];
}
sum (1,1,2,3,4,5);