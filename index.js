let peliculas = ['mortal kombat','neo','matrix'];

peliculas.pop();
console.log(peliculas)

peliculas.push('pokemon')
console.log(peliculas)

peliculas.unshift('TLOTR')
console.log(peliculas);

console.log(peliculas[0]);

///splice insert, remove, replace
//arr.splice(start[, deleteCount, elem1, //..., elemN])

peliculas.splice(0,2,'casa de papel')
console.log(peliculas)
//en este ejemplo, empezando del index cero, eliminar 2 elementos, y luego agregar un elemento casa de papel

peliculas.splice(1,0,'paprika','totoro')
console.log(peliculas)

//slice
//arr.slice([start], [end])
console.log(`Esta es una copia del array de peliculas con los index del 1 al 3 y los resultados son : ${peliculas.slice(1,3)}`)
console.log(peliculas)

console.log(peliculas.slice(2,3))

//concat crea un nuevo array
let nuevoAr = peliculas.concat(['pitagoras'])
console.log(nuevoAr[nuevoAr.length -1 ])

///iterarion forEach

peliculas.forEach(n => console.log(n))

//currying -  closures remenber // in currying is the use of less parameters initially by leaving the use of the next for future steps

function currySaludo(saludo) {
  return function (nombre) {
    return `${saludo}, ${nombre}!!!`
  }
}

const saludoItaliano = currySaludo("Ciao")
console.log(saludoItaliano("bambino"))

//forEach practice

peliculas.forEach(pelis => console.log(pelis))

//array search methods

console.log(`The index of pokemon in peliculas array is number ${peliculas.indexOf('pokemon',3)}.`)

console.log(peliculas.includes('neo'))

//find and findIndex

//map
let pelis3 = peliculas.map((item,index,array) => {
  return `${index}: ${item}`
})

console.log(pelis3)

//filter
const numeros = [12,3,4,6,8,9,3,6,4,20];

let numeros2 = numeros.filter(item => item >=5 && item <= 10)

console.log(numeros2)

//reduce

let suma2 = numeros.reduce( (accu,item) => accu + item,2)

console.log(suma2)

//Sort 
/* 
usa valores unicode de strings
Funcion de comparacion
(De W3 schools:)
La función de comparación compara todos los valores de la matriz, dos valores a la vez (a, b).
Al comparar 40 y 100, el método sort() llama a la función de comparación (40, 100).
La función calcula 40 - 100 (a - b), y dado que el resultado es negativo (-60), la función de clasificación clasificará 40 como un valor inferior a 100.
*/

console.log(peliculas.length)
peliculas[5] = 'apollo 13'
console.log(peliculas.sort())

function comparacion(a,b) {
   return a-b
  /*
We have three scenarios: if result
1. <0 ... a comes first
2.  0 ... nothing will be changed
3. >0 ... b comes first
     */
}

console.log(numeros.sort(comparacion))

//de esta manera pasando una funcion de comparacion como callback as an argument de numeros.sort entonces tendra ese criterio de devolver el valor en orden cuando se aplica el metodo a una serie de numeros

const products = [
  {
    name:'mobile',
    price:200
  },
  {name:'laptop',
  price: 1000},
  {
    name:'desktop',
    price:400
  }  
]

products.sort((a,b) => {
  return b.price - a.price
})
//arranging descending order
console.log(products)

let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort((a,b) => a > b ? 1 : -1 ))
console.log(countries.sort((a,b) => a.localeCompare(b)))

/* 
Use localeCompare for strings
Remember strings comparison algorithm? It compares letters by their codes by default.

For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.
*/

//split join reverse

let names = 'Bilbo, Gandalf, Nazgul'

let arrNames = names.split(',')
console.log(arrNames)

//Here we transformed a strings that where separated with comas and turned into an array

for(let names of arrNames){
  console.log(`You have a message ${names}`)
}

//The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

let namesString = arrNames.join('--')

console.log(namesString)

console.log(arrNames.map((x,index) => x + "-i-"))

//reduce

console.log(numeros)

let sumaConReduce = numeros.reduce((acc,c) => acc + c,0 )
console.log(sumaConReduce)

let multConReduce = numeros.reduce( (acc,c)=> (acc * c)/4,1 )
console.log(multConReduce)

console.log(Array.isArray(peliculas))

/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
 */

function camelize(str) {
  return str.split('-').join('')
}

console.log(camelize('my-short-list'))

//rest operator

const numeroMax = (...num) => Math.max(...num)
console.log(numeroMax(5,6,7,8,12,45,0))

const suma3 = (...nums) => nums.reduce((acc,c) => acc + c,0)
console.log(suma3(6,7,1))

//by using the rest operator i can leave n amount of parameters in the function to be called potentially

