//**recordar cómo crear variables del tipo string
var lenguaje = "python";
var ciudad = "lima";
var mensaje = "¡Bienvenidos al sitio web!"

const single = 'comillas simples';
const double = "comillas dobles";
const backticks = `backticks`; //comillas invertidas
//**Seleccionar una letra con string 

var animal = "gato";
console.log(animal.charAt(2))
const saludo = 'Mundo';

console.assert(`Hola ${saludo}` === 'Hola Mundo')

//** Caracteres especiales
var frase1 = `Hola:
              amiga 1`;
          
alert(frase1);
// el \n genera un salto de línea
var frase2 = `Hola:\namiga 2`;
alert (frase2);

//Convertir minúsculas en mayúsculas
var minus = "Perú"
alert (minus.toLocaleUpperCase()); //Pasa a mayúscula

//Ejemeplos con comprobación utilizando assert
console.assert('Interface'.toUpperCase() === 'INTERFACE');
console.assert('INTERFACE'.toUpperCase() === 'interface');
console.assert('Interface'[0].toLowerCase() === 'i');

