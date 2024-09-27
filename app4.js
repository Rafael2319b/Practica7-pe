const nombres =["Ana","Luis","Maria","Juan","Carlos","Elena","Sofia","Pedro"];

console.log("Lista de Nombres:");
for (let i=0; i < nombres.length; i++){
    console.log(nombres[i]);
}

let cantidadNombres = nombres.length;
console.log("\nCantidad total de nombres:" + cantidadNombres);

let nombreBuscado = "Maria";
let encontrado = false;
for (let i = 0; i < nombreBuscado.length; i++){
    if(nombres[i]=== nombreBuscado){
        encontrado = true;
        console.log("\nNombre'" + nombreBuscado+ "'no fue encontrado en el arrar.");
        break;
    }
}