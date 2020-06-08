alert("Desayunos")

var chi = Number(prompt("Cuantos chilaquiles piensa consumir (cuestan $75.00 pesos MXN)"));
if(chi <0){
    document.write("</p>Costo de los chilaquiles: $ 0 Pesos MXN")
}else{
document.write("</p>Costo de los chilaquiles: " + "$"+
 + 75*chi+"  Pesos MXN");
}
var hot = prompt("Cuantos HotCakes piensa consumir (cuestan $65.00 pesos MXN)");
if(hot <0){
    document.write("</p>Costo de los chilaquiles: $ 0 Pesos MXN")
}else{
document.write("</p>Costo de los HotCakes: " + "$"+
 + 65*hot+"  Pesos MXN");
}

var mo = prompt("Cuantos Molletes piensa consumir (cuestan $45.00 pesos MXN)");
if(mo <0){
    document.write("</p>Costo de los chilaquiles: $ 0 Pesos MXN")
}else{
document.write("</p>Costo de los Molletes: " + "$"+
 + 45*mo+"  Pesos MXN");
}

 alert("comidas")
var pe = prompt("Cuantos Pechuga piensa consumir (cuestan $75.00 pesos MXN)");
if(pe <0){
    document.write("</p>Costo de los chilaquiles: $ 0 Pesos MXN")
}else{
document.write("</p>Costo de las Pechuga: " + "$"+
 + 75*pe+"  Pesos MXN");
}
var mi = prompt("Cuantos Milanesa piensa consumir (cuestan $65.00 pesos MXN)");
if(mi <0){
    document.write("</p>Costo de los chilaquiles: $ 0 Pesos MXN")
}else{
document.write("</p>Costo de las Milanesas: " + "$"+
 + 65*mi+"  Pesos MXN");
}
var po = prompt("Cuantos Pozole piensa consumir (cuestan $75.00 pesos MXN)");
if(po <0){
    document.write("</p>Costo de los chilaquiles: $ 0 Pesos MXN")
}else{
document.write("</p>Costo de los Pozoles: " + "$"+
 + 75*po+"  Pesos MXN");
}
res=0;
res=chi*75+hot*65+mo*45+pe*75+mi*65+po*75;
if(res<0){
document.write("</p>El costo total es: 0")
}else{
document.write("</p>Costo total de la comida es: $" + res+ "pesos MXN")
}