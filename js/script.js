/*const NOMBRE = prompt("Ingresá tu Nombre");
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
console.log("$" + valorhora * JUNIOR + educacionExtra + NO)*/


const NOMBRE = ['Juan','Carlos','Victor']; 

for (const index in NOMBRE){
console.log(NOMBRE [index]);
}

for(let x = 0; x < 10; x++) {
    if (x == 6){
        continue;
    }
    console.log(x);
}


let nivelExperiencia = prompt("Ingresá nivel de experiencia junior, semi senior o senior");
while(nivelExperiencia != "ESC" ){
    switch (nivelExperiencia) {
        case "junior":
            alert("Nivel de experiencia Junior");
            break;
        case "semi senior":
            alert("Nivel de experiencia semi senior");
            break;
        case "senior":
            alert("Nivel de experiencia senior")
            break;
    }
    nivelExperiencia = prompt ("Ingresá nivel de experiencia junior, semi senior o senior");
}






















