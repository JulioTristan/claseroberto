// //Tipos de datos y variables
// // String
// // Int = Numero Entero
// // Float = Numero Decimal
// // Boolean = 0 o 1, true o false
// //Variable es lo que sea que se le asigne, en JS debes definir que tipo de variable estas creando:
// // var (ya casi nadie lo usa), let (permite cambio en la variable), const (no permite cambio en la variable)

// let a = 4
// // const a = 4 // dara un error
// a= 6

// // Tipos de estructuras en JS
// let array=[]
// let objeto={}

// // array es un lista de variables, y se conforma por el elemento y el InputDeviceInfo
// // objeto es una coleccion de propiedades relacionadas con un valor

// array=[10,11,12,13,14,15]

// // para entrar a un elemento dentro de un array se usa la notacion de [indice] llamado tambien indexacion, es importante entender que se empieza en el indice 0 para el elemento numero 1.

// for (const [index, element] of array.entries()) {
//     console.log(`Valor del indice: ${index}, valor del elemento en esa posicion ${element}`);
//     console.log(`Valor del elemento ${array[index]}`)
// }

// //objeto definido por propiedades las cuales tienen asignadas un valor que puede ser una variable. La forma de entrar a la propiedad para conocer el valor es mediante un punto, objeto.propiedad => valor.
// objeto={propiedad:"valor"}
// console.log(objeto)
// console.log(objeto.propiedad)

// // combinacion de array con objetos

// let objetoArray = {listaDeProductos:[{nombre:"producto1"},{nombre:"producto2"},{nombre:"producto3"},4,5,6,7,8,9,10,[1,2,3,4,5,{propiedad:"objeto",nombre:"producto"}]]}
// //Imprimir nombre del objeto anidado
// console.log(objetoArray.listaDeProductos[10][5].nombre)

// //Cambiar de producto a nuevo producto el nombre
// objetoArray.listaDeProductos[10][5].nombre="nuevo_producto"
// console.log(objetoArray.listaDeProductos[10][5].nombre)
// //Imprimir el el sexto elemento completo
// console.log(objetoArray.listaDeProductos[10][5])

// //Cambiar el elemento 6 del array a un string en lugar de un objeto
// objetoArray.listaDeProductos[10][5]="Ahora soy string"
// console.log(objetoArray.listaDeProductos[10][5])
// //Como ahora es un string ya no tiene propiedades, por lo que esto generara un undefined
// console.log(objetoArray.listaDeProductos[10][5].nombre)
// //Si quiero que el elemento 11 del listaDeProductos ya no sea un array puedo cambiarlo
// objetoArray.listaDeProductos[10]="ahora soy un string"
// console.log(objetoArray.listaDeProductos[10])

//Condicionales: if/elseif/else ... switch ... try/catch
//if(condicion){accion} si la condicion es true ejecutas la accion
//elseif(condicion){accion} si la condicion es true ejecutas la accion
//else{accion} si no paso nada de lo de arriba ejecutas la accion
//try{accion} si funciona pues cool y si no entras al catch{accion} POR SI LITERALMENTE SE ROMPE EN EL TRY
//switch(variable){case'condicion':{accion} case'condicion2':{accion}} ejecuta todo lo que siga a la condicion verdadera importante tener el break en al verdadera para evitar esto

// let a = 1;
// let b = 2;
// let c = a + b;
// switch (c) {
//   case 8:
//     console.log(c, "8");

//   case 7:
//     console.log(c, "7");
//   case 3:
//     console.log(c);
//     break
//   case 8:
//     console.log(c, "8");

//   case 7:
//     console.log(c, "7");
// }

// Flow controllers, for para x condicion haz y, while mientras x haz y.En el while tu debes poner textualmente el salto porque no es requerido, en el for si es requerid.

// let result = "";
// let i = 0;

// do {
//   i += 1;
//   result = result + i;
//   console.log(result);
// } while (i < 5);

// i=0
// result = "";

// for(i;i<5;i++){
// result = result + (i+1);
//  console.log(result);
// }