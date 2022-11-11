var tipo_energia;
var nombre;
var energia_gen;
var presupuesto;
var tiempo_de_uso;
var efectividad;

let array_datos = [ [] ];
let valor_mas_alto = 0;

function generar_tabla(){

    tipo_energia = document.getElementById('id_tipo').value;
    nombre = document.getElementById('id_nombre').value;
    energia_gen = document.getElementById('id_energia').value;
    presupuesto = document.getElementById('id_presupuesto').value;
    tiempo_de_uso = document.getElementById('id_tiempo').value;

    var tabla = document.getElementById("tabla_generada_id");
    var nueva_fila = tabla.insertRow(tabla.rows.length/2+1)
    
    var celda1 = nueva_fila.insertCell(0);
    var celda2 = nueva_fila.insertCell(1);
    var celda3 = nueva_fila.insertCell(2);
    var celda4 = nueva_fila.insertCell(3);
    var celda5 = nueva_fila.insertCell(4);
    var celda6 = nueva_fila.insertCell(5);



    array_datos.push([tipo_energia, nombre, energia_gen, presupuesto, tiempo_de_uso])
    console.log(array_datos)


    // Agregar valores
    celda1.innerHTML = tipo_energia;
    celda2.innerHTML = nombre;
    celda3.innerHTML = energia_gen + " kw/h";
    celda4.innerHTML = presupuesto  + " $";
    celda5.innerHTML = tiempo_de_uso + " horas";

    efectividad = energia_gen / ( presupuesto * tiempo_de_uso );
    celda6.innerHTML = efectividad;

    if (efectividad>valor_mas_alto){
        valor_mas_alto=efectividad;
    }
    document.getElementById('eficiencias_id').value = "x";

    alert("La efectividad de la fila ingresada es de: " + efectividad); 
}

function comparar_eficiencias(){
    // alert("La efectividad de la fila ingresada es de: " + efectividad);

    document.getElementById('eficiencias_id').value = "x"
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