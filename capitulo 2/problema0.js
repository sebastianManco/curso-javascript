let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿cual es su edad?");
    if(edad > 18) {
        if (time >= 2 && time <7 && free == false) {
            alert("¡felicidades! pasa gratis porque eres la primer persona despues de las 2 AM");
            free = true;
        } else {
            alert(`son las ${time}:00HS ¡pasa!, pero paga tu entrada`);
        }

    }else {
        alert("lo sentimos, su ingreso ha sido denegado")
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);