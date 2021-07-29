const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2);
}

const dividir = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("¿Qué operacion desea realizar?");
let eleccion = prompt("1: suma, 2: resta, 3: multiplicación, 4: división");

let operacion = parseInt(eleccion);
switch (operacion) {
    case 1:
        num1 = prompt("digite el numero 1 pra la operacion");
        num2 = prompt("digite el numero 2 pra la operacion");
        resultado = sumar(num1, num2);
        alert(`el resultado es: ${resultado}`);
    break;
    case 2:
        num1 = prompt("digite el numero 1 pra la operacion");
        num2 = prompt("digite el numero 2 pra la operacion");
        resultado = restar(num1, num2);
        alert(`el resultado es: ${resultado}`);
    break;
    case 3:
        num1 = prompt("digite el numero 1 pra la operacion");
        num2 = prompt("digite el numero 2 pra la operacion");
        resultado = multiplicar(num1, num2);
        alert(`el resultado es: ${resultado}`);
    break;
    case 4:
        num1 = prompt("digite el numero 1 pra la operacion");
        num2 = prompt("digite el numero 2 pra la operacion");
        resultado = dividir(num1, num2);
        alert(`el resultado es: ${resultado}`);
    break;
    default:
        alert("opción incorrecta");

}