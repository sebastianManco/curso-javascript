dineroCofla = prompt("Cofla ¿cuanto dinero tienes?");
dineroRoberto = prompt("Roberto ¿cuanto dinero tienes?");
dineroPedro = prompt("Pedro ¿cuanto dinero tienes?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("comprar el heleado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("cofla, puedes comprar el helado de crema");
    alert("y te sobran" + (dineroCofla- 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("cofla, puedes comprar el helado de heladix");
    alert("y te sobran" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("cofla, puedes comprar el helado de heladovich");
    alert("y te sobran" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("cofla, puedes comprar el helado de helardo");
    alert("y te sobran" + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9){
    alert("cofla, puedes comprar el helado de confites o el pote de 1/4 kg");
    alert("y te sobran" + (dineroCofla - 2.9));
}
else {
    alert("lo sentimos cofla, no tienes dinero suficiente");
}



if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert                                                                         ("comprar el heleado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("roberto, puedes comprar el helado de crema");
}
else if (dineroRoberto >= 1.6 && ddineroRoberto < 1.7){
    alert("roberto, puedes comprar el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("roberto, puedes comprar el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("roberto, puedes comprar el helado de helardo");
}
else if (dineroRoberto >= 2.9){
    alert("roberto, puedes comprar el helado de confites o el pote de 1/4 kg");
}
else {
    alert("lo sentimos roberto, no tienes dinero suficiente");
}




if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("pedro, puedes comprar el heleado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("pedro, puedes comprar el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("pedro, puedes comprar el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("pedro, puedes comprar el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("pedro, puedes comprar el helado de helardo");
}
else if (dineroPedro >= 2.9){
    alert("pedro, puedes comprar el helado de confites o el pote de 1/4 kg");
}
else {
    alert("lo sentimos pedro, no tienes dinero suficiente");
}
