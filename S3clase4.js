/* var nombre = 'ana';
if (nombre.length>7) {
    console.log('Qué nombre tan largo tienes!')
    alert('Qué nombre tan largo tienes');
} else {
    console.log('tu nombre es muy largo');
    alert ('tu nombre no es muy largo');
}
 //vario.if y else:
 var num = parseInt (prompt(`Ingrese un número`));
 if (num<10) {
     alert ('Diste un número pequeño');
 } else if (num<100) {
     alert ('Diste un número mediano');
 } else {
     alert ('Diste un número grande')
 }
 */
 //if anidados:


var temperatura = parseInt (prompt(`Ingrese una temperatura`));
    if(temperatura>10){
        if(temperatura<26){
            alert("temperatura moderada.");
        } else if (temperatura > 26) {
            alert("La temperatura está alta.");
        } 
    } else {
        alert("Hace frío en la ciudad")
    }
