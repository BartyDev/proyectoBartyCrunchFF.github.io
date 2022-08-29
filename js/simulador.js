
function container() {
    //Este es mi simulador de compra de comida rapida ,aun apenas es un comienzo,si tienes algun consejo para contribuir te animo me los dejes saber en los comentarios, GRACIAS!!

//comenzamos con una funcion de saludo al cliente del cual retornaremos el nombre para usarlo posteriormente
function nuevoNombre() {
    alert('Tasty Crunch - fast food 🍔🍟🥤')

    let nombre = prompt('Tasty Crunch\n\nIngrese su NOMBRE o presione en cancelar para SALIR').toUpperCase();
    while (nombre === '') {
        nombre = prompt('Tasty Crunch\n\nIngrese su NOMBRE o presione en cancelar para SALIR').toUpperCase();
    }
    alert(`Bienvenido ${nombre}`);

    return nombre;
}

//primera carta de pedido , aqui trabajo do-while dentro de juna funcion para que se cumplan ciertas condiciones
function pedidosNuevos() {
    let food;
    do {
        food = parseInt(prompt('Tasty Crunch\nCarta disponible :\n 1) hamburguesa simple 🍔\n======\n 2) hamburguesa de lomo 🍔\n======\n 3) hamburguesa mixta 🍔'));

    } while (food !== 1 && food !== 2 && food !== 3) {}
    switch (food) {
        case 1:
            return 'hamburguesa simple 🍔'
        case 2:
            return 'hamburguesa de lomo 🍔'
        case 3:
            return 'hamburguesa mixta 🍔'
        default:
            pedidosNuevos();
    }
}

//esta funcion me regresa un valor segun la opcion que haya elegido

function precioFood(valor) {
    if (valor === 'hamburguesa simple 🍔') {
        return 2000;
    } else if (valor === 'hamburguesa de lomo 🍔') {
        return 3500;
    } else {
        return 5000;
    }

}
//esta funcion me imprime en el alert mi pedido
function cuenta(nombre, food, valor) {

    alert(`Tasty Crunch\n\n ${nombre} elegiste una ${food} con valor de ${valor} clp.`);
}
/* DE AQUI EN ADELANTE ES REPETIR EL PROCESO PARA UN SEGUNDO PEDIDO , AQUI ES DONDE SE QUE HAY MUCHAS MANERAS MEJORES DE HACER ESTO PERO , ES LO QUE LA CONSIGNA PIDE HASTA AHORA Y CONFORME VAYAMOS AVANZANDO LAS CLASES MEJORARE ESTE PROYECTO :) */
function agregados() {
    let agree;
    do {
        agree = parseInt(prompt('Tasty Crunch\nAgregados :\n 1) papas simples 🍟\n======\n 2) bebida 🥤\n======\n 3) No deseo agregar nada más'));

    } while (agree !== 1 && agree !== 2 && agree !== 3) {}
    switch (agree) {
        case 1:
            return 'papas simples 🍟'
        case 2:
            return 'bebida 🥤'
        case 3:
            return '❌'
        default:
            agregados()
    }
}

function precioAgree(valor2) {
    if (valor2 === 'papas simples 🍟') {
        return 1500;
    } else if (valor2 === 'bebida 🥤') {
        return 1000;
    } else {
        return 0;
    }
}

function cuentaAgree(nombre, agree, valor2) {

    alert(`Tasty Crunch\n\n ${nombre} agregaste ${agree} con valor de ${valor2} clp.`);


    /* Y pasemos al pago, aqui realizo  mediante if y else la validacion de si el usuario esta ingresando suficiente para cancelar la compra o no , aqui hago una consulta ya que creo hay mejores formas de validar esto y que no se corte pero aun no se como y sigo practicando, si podes ayudarme con una mejor forma de hacerlo lo agradeceria :) */

    let cash = parseInt(prompt('Tasty Crunch\n\ncon cuanto abona $ :'));
    if (isNaN(cash)) {
        alert('Error! ☠️')
    } else if (cash < costo) {
        alert('Tasty Crunch\n\nNo te alcanza❗');
        cash = parseInt(prompt('Con cuanto abona $ :'));
        alert('Tasty Crunch\n\n' + nombre + ' tu vuelto es ' + (cash - (costo + costo2)) + ' clp.');
    } else {
        alert('Tasty Crunch\n\n' + nombre + ' tu vuelto es ' + (cash - (costo + costo2)) + ' clp.');
    }
    alert('Tasty Crunch\n\nGRACIAS POR SU COMPRA VUELVA PRONTO! 🤗');
}


let cliente = nuevoNombre();
let producto = pedidosNuevos();
let costo = precioFood(producto);
cuenta(cliente, producto, costo);

let agregado = agregados();
let costo2 = precioAgree(agregado);
cuentaAgree(cliente, agregado, costo2);



/* variables que contiene las diferentes funciones realizadas , encuentro que esta forma tiene un mejor orden al ejecutar */
}


