//Strings
let input = "12:45:05PM";
//que se vea formato 24 horas
let hora = Number(input.slice(0, 2));
let minutos = input.slice(3, 5);
let segundos = input.slice(6, 8);
if (input.slice(-2) === "PM") {
  hora = hora + 12;
  if (hora === 24) {
    hora = "12";
  } else {
    hora = hora.toString();
  }
} else {
  if (hora < 10) {
    hora = hora.toString();
    hora = `0${hora}`;
  } else if (hora < 12) {
    hora = hora.toString();
  } else {
    hora = "00";
  }
}
console.log(`${hora}:${minutos}:${segundos}`);
