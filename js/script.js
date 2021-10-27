const NOMBRE = prompt("Ingresá tu Nombre");
const MENSAJE = "Hola " + NOMBRE + " Bienvenido a tu Presupuesto Personal";
alert(MENSAJE);
console.log(MENSAJE);

let valorhora = prompt ("Ingresá el valor de tu hora de trabajo");
let nivelExperiencia = prompt ("Ingresá nivel de experiencia (junior, semi senior o senior");

const JUNIOR = 100;
const SEMISENIOR = 200;
const SENIOR = 300;

console.log(JUNIOR);
console.log(SEMISENIOR);
console.log(SENIOR);

if(nivelExperiencia=="junior"){
alert("Como Junior deberias cobrar $" + valorhora * JUNIOR);
}else if (nivelExperiencia=="semi senior") {
alert("Como Semi senior deberias cobrar $" + valorhora * SEMISENIOR);}
else if (nivelExperiencia=="senior") {
alert("Como Senior deberias cobrar $" + valorhora * SENIOR);}

let educacionExtra = Number(prompt("¿Con cuantas computadoras contás?"));

const SI = 500;
const NO = 100;

console.log("$" + valorhora * JUNIOR + educacionExtra + SI);
console.log("$" + valorhora * JUNIOR + educacionExtra + NO)























