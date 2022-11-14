var tipo_energia;
var nombre;
var energia_gen;
var presupuesto;
var tiempo_de_uso;
var efectividad;

let array_datos = [ [] ];
let efectividad_mas_alta = 0;

const generar_tabla = () => {

    // Obtenemos datos y generamos nueva fila
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


    // Guardamos los datos en una matriz
    array_datos.push([tipo_energia, nombre, energia_gen, presupuesto, tiempo_de_uso])
    console.log("Matriz de datos:", array_datos)
    
    // Array Objetos
    const array_objeto = Object.assign({}, array_datos);
    console.log(array_objeto);


    // Agregamos los datos a la fila
    celda1.innerHTML = tipo_energia;
    celda2.innerHTML = nombre;
    celda3.innerHTML = energia_gen + " kw/h";
    celda4.innerHTML = presupuesto  + " $";
    celda5.innerHTML = tiempo_de_uso + " horas";

    efectividad = energia_gen / ( presupuesto * tiempo_de_uso );
    celda6.innerHTML = efectividad;


    // Obtenemos el metodo mas eficiente
    if (efectividad > efectividad_mas_alta){

        efectividad_mas_alta=efectividad;
        document.getElementById("eficiencias_id").innerHTML=
        "El sistema energetico recomendado por ser el mas eficiente es el de " + 
        nombre + ", con una eficiencia de: " + efectividad_mas_alta;
    }
    console.log("Efectividad:", efectividad_mas_alta)


    alert("La efectividad de la fila ingresada es de: " + efectividad); 
}