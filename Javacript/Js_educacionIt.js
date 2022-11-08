var tipo_energia;
var nombre;
var energia_gen;
var presupuesto;
var tiempo_de_uso;
var efectividad;

function generar_tabla(){

    tipo_energia = prompt("Ingrese el tipo de energia del mecanismo: ")
    nombre = prompt("Ingrese el nombre del mecanismo a utilizar: ")
    energia_gen = prompt("Ingrese la cantidad de KW/H a utilizar: ")
    presupuesto = prompt("Ingrese la cantidad de presupuesto disponible: ")
    tiempo_de_uso = prompt("Ingrese la cantidad de tiempo que consumira el mecanismo: ")

    
    alert("funciona");
    
    
    document.getElementById('id_button').innerHTML = ''; //Limpiamos texto anteriormente guardado
    document.getElementById('id_button').innerHTML = tipo_energia; //Agregamos nuevo texto


    document.getElementById('tipo_energia').innerHTML = tipo_energia;
    document.getElementById('nombre').innerHTML = nombre;
    document.getElementById('energia_gen').innerHTML = energia_gen + " kw/h";
    document.getElementById('presupuesto').innerHTML = presupuesto + " $";
    document.getElementById('tiempo_aprox').innerHTML = tiempo_de_uso + " horas";

    efectividad = energia_gen / ( presupuesto * tiempo_de_uso );
    document.getElementById('efectividad').innerHTML = efectividad;

    /* alert("La efectividad de la fila ingresada es de: " + efectividad); */
}




/* function agregar_texto(){
    tipo_energia = prompt("Ingrese el tipo de energia del mecanismo: ")
    nombre = prompt("Ingrese el nombre del mecanismo a utilizar: ")
    energia_gen = prompt("Ingrese la cantidad de KW/H a utilizar: ")
    presupuesto = prompt("Ingrese la cantidad de presupuesto disponible: ")
    tiempo_de_uso = prompt("Ingrese la cantidad de tiempo que consumira el mecanismo: ")
}
 */



/* ------------------------------------ */



/* document.addEventListener('DOMContentLoaded', (event) => {
    
    do{
        nombre1 = prompt("Ingrese el nombre del mecanismo a utilizar: ")
        energia1 = prompt("Ingrese la cantidad de KW/H a utilizar: ")
        presupuesto1 = prompt("Ingrese la cantidad de presupuesto disponible: ")
        tiempo1 = prompt("Ingrese la cantidad de tiempo que consumira el mecanismo: ")
    } while( confirm("¿Guardar datos?") == false);
    
    

  })

document.write(nombre1 + energia1 + presupuesto1 + tiempo1 ); */