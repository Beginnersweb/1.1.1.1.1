
var nombre = prompt("Introduce nombre del que va hacer la reservarcion");
document.write("</p>Nombre del que va hacer la  reservacion: " + nombre);

var correo = prompt("Introduce correo electronico del que va hacer reservarcion");
document.write("</p>Corre del que hace la reservacion: " + correo);

var hora = Number(prompt("Porporcione la hora que piensa llegar (solo horas en punto)"));
document.write("</p>Hora de la reservacion: " + hora);

var n = Number(prompt("Cantidad de personas cada persona son $50 pesos mexicanos(10 personas maximo)"));
if(n <0){
    document.write("</p>No podemos sumar personas negativas")
}else{
document.write("</p>Costo de la reservacion: " + "$"+
+ 50*n+"  Pesos MXN");
}





