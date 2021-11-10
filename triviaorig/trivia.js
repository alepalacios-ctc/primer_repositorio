
alert(" Hola, bienvenido amante de la música. ");

function datos(){
    var nombres = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var fechanacimiento = document.getElementById("fecha-nacimiento").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var edad = document.getElementById("edad").value;
    var música = document.getElementById("música").checked;

    var mensaje = "nombres:" + nombres
    + "\napellidos: " + apellidos
    + "\ncorreo electronico: " + email
    + "\Fecha de nacimiento: " + fechanacimiento
    + "\nEs mujer: " + f
    + "\nEs hombre: " + m
    + "\nEdad: " + años
    + "\nToca un instrumento: " + música;

    /*
    var mensaje = "Nombres: " + nombres
    + "\nApellidos: " + apellido
    + "\nCorreo electrónico: " + email
    + "\nFecha de nacimiento: " + fechanacimiento
    + "\nEs mujer: " + f
    + "\nEs hombre: " + m
    + "\nEdad: " + edad + " años"
    + "\nHace música: " + música;
    
    console.log(mensaje);
    */


}
