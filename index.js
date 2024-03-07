//////////////////////// Funciones de JavaScript ////////////////////////

function hello(){
    console.log('Hola Mundo')
    console.log('trabajando con JS')
}
hello()
hello()


function helloW(){
    return 'Hello World'
}
const result=helloW()
console.log(result)

console.log(helloW())


function objeto(){
    return {name: 'Jaime'}
}

console.log(objeto())

// Esto me devolvera una funcion
// Programacion funcional 
function helloM(){
    return function(){
        return 'Hello World'
    }
}

console.log(helloM()) //Ver la funcion
console.log(helloM()()) //Ver el contenido de la funcion que se encuentra dentro de la funcion



//////////////////////// Parametros de Fucniones ////////////////////////

console.log("________________________________________________________________")



function helloWM(name){
    return 'Hola' +' '+ name
}

console.log(helloWM('Jaime'))
console.log(helloWM('Jose'))
console.log(helloWM('Maria'))



function add(x, y=0){
    return x+y
}

console.log(add(10,20))
console.log(add(10,10))
console.log(add(10,8))
console.log(add(100));
console.log(add()); //NaN

//////////////////////// Objetos en JavaScript ////////////////////////
console.log("________________________________________________________________")

const user ={
    name: "Jose",
    lastname: "Vazquez",
    age: 30,
    address:{
        country : "Mexico",
        city: "Puebla",
        street: "main Street 123"
    },
    friends: ['Jose', 'Maria', 'Pablo'],
    active: true,
    sendMail(){  //esto es una funcion
        return 'sending email...'
    }
}

console.log(user);
console.log(user.name); //Josse
console.log(user.address);
console.log(user.address.country); //Mexico
console.log(user.sendMail()); //Ejecuto la funcion

////////////////////////////////////////////////
console.log("________________________________________________________________")

const name="laptop"
const price = 3000

const newProduct ={
    name: name,
    price: price
}
console.log(newProduct);

const newProduct2 ={
    name,
    price
}
console.log(newProduct2);

////////////////////////////////////////////////
console.log("________________________________________________________________")

/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
*/
////////////////////Manipular el DOM////////////////////////////
console.log("________________________________________________________________")


const title=document.createElement('h1')   //Permite crear elementos html
title.innerText="Hola Mundo desde JS"

document.body.appendChild(title)


const button=document.createElement('button')
button.innerText='click'

button.addEventListener('click', function(){
    title.innerText='Texto actualizado con JS'
    alert('se realizo un click')
})

document.body.appendChild(button)


////////////////////Objetos como Parametros////////////////////////////
console.log("________________________________________________________________")


const User={
    name:'Jose',
    age:30
}


function printInfo(User){
    return '<h1>Hola '+ user.name+ '</h1>'
}

console.log(printInfo(User));

document.body.innerHTML=printInfo(User)








