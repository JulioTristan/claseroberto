//Strings
let input = "05:00:00AM";
//que se vea formato 24 horas
let hora = Number(input.slice(0, 2));
let minutos = input.slice(3, 5);
let segundos = input.slice(6, 8);
if (input.slice(-2) === "PM") {
  hora = hora + 12;
  hora=hora.toString()
  if (hora === 24) {
    hora = "00";
  }
}
else{
    hora=hora.toString();
    hora=`0${hora}`
}
console.log(`${hora}:${minutos}:${segundos}`);
