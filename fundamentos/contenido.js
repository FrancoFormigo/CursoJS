// ----------------CAPITULO--------------------
// ------[01]--- VARIABLES --------------------
// --------------------------------------------

// -----------------CAPITULO-------------------
// ------[02]--- OBJETOS ----------------------
// --------------------------------------------

// var persona = {
//     nombre: "Juan",
//     edad: 19,
//     estudia: true,
//     saludar: function() {
//         console.log("Hola!");
//     }
// };

// // ACCESOS A LOS VALORES DE LAS PROPIEDADES DE UN ARRAY
// //con notacion de punto
// console.log(persona.nombre);
// persona.saludar();
// //con notacion de Corchetes
// persona["edad"]= 25;
// console.log(persona["edad"]);

// //usos de notacion de corchetes para propiedades dinamicas,
// //se declara una variable que contiene el nombre de la propiedad
// var propiedadDinamica = "nombre";
// console.log(persona[propiedadDinamica]);

// --------------CAPITULO----------------------
// ----[03]--- REFERENCIAS --------------------
// -------------------------------------------- 

// var a = 10;
// var b = a;

// a++;
// console.log(a);
// console.log(b);

// var r = { nombre: "Juan", estudia: true, edad: 34 };
// var s = r;

// r.edad++;
// console.log("r " + r.edad);
// console.log("s " + s.edad);

// --------------------------------CAPITULO----
// ----[04]--- ECMA ---------------------------
// -------------------------------------------- 

// // ES5
// var aux = 100; 
// var aux = "Hola"; //NO DA ERROR ES5

// // ES6
// let cantidad = 10;
// // let cantidad = 0; ERROR A PARTIR DE ES6

// // ES5
// var IVA = 21; // convencion de constante en ES5
// IVA++; //NO DA ERROR
// console.log(IVA);

// // ES6
// const PI= 3.14;
// // PI++; ERROR POR CAMBIAR VALOR A UNA CONSTANTE
// console.log(PI);

// // DOM
// const tituloH1 = document.getElementById("titular");
// tituloH1.innerHTML= "Javascript";
// tituloH1.style.color= "red";


// --------------------------------CAPITULO----
// ----[05]--- APP ----------------------------
// -------------------------------------------- 

