
//INICIO ARRAY//

/*let usuario = {
    nombre: "Rafael Martin",
    dni: 95959959,
    horaTrabajo: 3000,
    experiecia: "Junior",
    factura: true,
    sofwareExperiencia: ["Indesign", "Illustrator", "Photoshop", "After Effects"],
}

console.log(usuario.sofwareExperiencia[3])
console.log(usuario.factura)

let cliente =  {
    nivel: 1,
    antiguedad: 4,
    ventas: 23344,
    pais: "Indonesia",
    activo: true,
        mercado: {
            paisesExportacion: ["Canada", "Emiratos", "España", "Japon"],
            paisesImportacion: ["China", "Argentina"],
    },
nickName: ["Kar.SA", "Burf.SA"]
}
console.log(cliente.mercado.paisesExportacion[3])*/

//FIN ARRAY//

//INICIO DOM//

/*let titulo = document.getElementsByClassName ("cuerpoTextos1");
console.log(titulo);

let menu = document.getElementsByClassName ("navbar");
console.log(menu);

let textoPrueba =document.getElementsByName ("textoPrueba");
console.log(textoPrueba);*/
/*
function valida () {
    let nombre = document.getElementById("nombre").value;
    let radios = document.getElementsByTagName("experiencia");
    let factura = document.getElementById("factura");
    let valorRadio = "";

    for (let a = 0; a < radios.length; a++){ 
        if (radios[a].checked){
            valorRadio = radios[a].value;
        }
    }
    if (factura.checked) {
        factura ="SI";
    }   else{
        factura = "NO";
    }
    console.log("Nombre: " + nombre + " Nivel de experiencia: " + valorRadio +  factura );
}

function borrar () {
    document.getElementById("nombre").value = "";
    let radios = document.getElementsByTagName("experiencia");
    

    for (let a = 0; a < radios.length; a++){ 
        if (radios[a].checked){
            radios[a].checked = false;
        }
    }
    let factura = document.getElementById("factura");
    factura.checked = false;
}*/
//FIN DOM//