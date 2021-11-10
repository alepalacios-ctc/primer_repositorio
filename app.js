
/*  Metodos para seleciconar elementos del DOM (Nodos del tipo1) */
/*document.getElementById()  //nodo del tipo elemento que coincida con el id indicado
document.getElementsByTagName() // coleccion de elementos HTML
document.getElementsByClassName() // coleccion de elementos HTML
document.querySelector() // primer elemento que cumpla la condicion 
document.querySelectorAll() // todos los elementos que cumplan la condicion */
var title = document.getElementById("title");
console.log(title);
console.log(titkle.firstChild)

var linkList = document.getElementsByTagName("a");
console.log(linkList);
console.log(linkList[0]);
console.log(linkList[0].firstChild);

var itemslist = document.getElementsByClassName("item");
console.log(itemlist);
console.log(itemlist[2]);
console.log(itemlist[2]);


