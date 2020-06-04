
var nombre = prompt("Introduce nombre del que va hacer la reservarcion");
var correo = prompt("Introduce correo electronico del que va hacer reservarcion");
var hora = Number(prompt("Porporcione la hora que piensa llegar (solo horas en punto)"));
var n = Number(prompt("Cantidad de personas 'cada persona son $50 pesos mexicanos(10 personas maximo)'"));

document.write("</p>Nombre del que va hacer la  reservacion: " + nombre);
document.write("</p>Corre del que hace la reservacion: " + correo);
document.write("</p>Hora de la reservacion: " + hora);
document.write("</p>Costo de la reservacion: " + "$"+
 + 50*n+"  Pesos MXN");

