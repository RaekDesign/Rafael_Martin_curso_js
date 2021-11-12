/*class Producto {
    constructor(nombre, precios){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva (){
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;
    }

}

const producto1 = new Producto("arroz", "123");
const producto1 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.sumaIva();
*/
/*
class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;

    }
    hablar(){
        console.log("Hola" + this.nombre);
    }

}
const persona1 = new Persona("homero", 39, "Av santa");
persona1.hablar();

class Estudiante {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
		this.activo = true;
	}
	cambiarEstado() {
		this.activo = !this.activo;
	}
	logout() {
		console.log("Sesión terminada");
	}
	mostrarDatos() {
		console.log(`El estudiante ${this.nombre} tiene ${this.edad} años`);
	}
}*/
/*function Estudiante (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this. activo = true;
}
const estudiante1 = new Estudiante ("Carlos", 25);
const estudiante2 = new Estudiante ("David", 23);
console.log(estudiante1)
console.log(estudiante2)*/
/*
const NOMBRE = prompt("Ingresá tu Nombre");
const MENSAJE = "Hola " + NOMBRE + " Bienvenido a tu Presupuesto Personal";
alert(MENSAJE);
console.log(MENSAJE);

function sumar(VALORHORA,nivelExperiencia,JUNIOR) {
    const resultado = VALORHORA + nivelExperiencia +JUNIOR;
    return resultado; 
}
function sumar(VALORHORA,nivelExperiencia,SEMISENIOR) {
    const resultado = VALORHORA + nivelExperiencia +SEMISENIOR;
    return resultado;  
}
function sumar(VALORHORA,nivelExperiencia,SENIOR) {
    const resultado = VALORHORA + nivelExperiencia +SENIOR;
    return resultado;  
}

let nivelExperiencia = Number (prompt (`Ingresá nivel de experiencia (junior, semi senior o senior
1 - junior
2 - semi senior 
3 - senior`));

const JUNIOR = 100;
const SEMISENIOR = 200;
const SENIOR = 300;
const VALORHORA = Number (prompt("Ingresá el valor de tu hora de trabajo"));

switch (nivelExperiencia){
    case 1:
        const SUMAJUNIOR = sumar(VALORHORA,nivelExperiencia,JUNIOR);
        console.log (`El resultado ${VALORHORA} + ${nivelExperiencia} + ${JUNIOR} es ${SUMAJUNIOR}`);
        alert(`El resultado es ${SUMAJUNIOR}`);
        break;
    case 2:
        const SUMASEMISENIOR = sumar(VALORHORA,nivelExperiencia,SEMISENIOR);
        console.log (`El resultado ${VALORHORA} + ${nivelExperiencia} + ${SEMISENIOR} es ${SUMASEMISENIOR}`);
        alert(SUMASEMISENIOR);
        break;
    case 3:
        const SUMASENIOR = sumar(VALORHORA,nivelExperiencia,SENIOR);
        console.log (`El resultado ${VALORHORA} + ${nivelExperiencia} + ${SENIOR} es ${SUMASENIOR}`);
        alert(SUMASENIOR);
        break;
    default:
        break;
}*/
function Datos(edad){
    let nombre = prompt("Ingresá tu Nombre");
    let dni = Number (prompt("Ingresá tu Dni"));
    let valorHora = Number (prompt("Ingresá el valor de tu hora de trabajo"));
    let nivelExperiencia = (prompt (`Ingresá nivel de experiencia (junior, semi senior o senior`));
    this.edad = edad;
    this.getDni = function(){
        return dni;
    }
    this.confirmar = function(){
        alert(`Hola ${nombre} los datos ingresados son: Edad: ${edad} años / DNI: ${dni} / Valor Hora de Trabajo: ${valorHora} Pesos / Nivel de experiecia profesional: ${nivelExperiencia}`)
    }
}
let objetoDatos = new Datos (25);
objetoDatos.confirmar();


