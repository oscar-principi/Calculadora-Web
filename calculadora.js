/*
                                    Metodo para intercambiar informacion entre HTML y JS:


-Capturar: En los INPUT se usa para capturar el valor desde JS que manda el HTML la funcion document.getElementById('id').value;
    
    HTML -> JS    La forma de ir desde HTML hacia .JS es por medio de los eventos.

-Enviar: En los OUTPUT se usa para mostrar el valor obtenido desde JS que devuelve la funcion, al HTML la funcion document.getElementById('').innerHTML;

    JS -> HTML La forma de ir desde JS hacia HTML es por medio del D.O.M. (Document Ojbet Model).
*/

//3-FUNCION REFACTORIZADA
function calcular(operador){
    let valor1 = parseFloat(document.getElementById('valor1').value); //parseFloat() castea un valor(numero, cadena numero) a numero flotante, o entero segun sea el caso. Number(), solo castea a entero.
    let valor2 = parseFloat(document.getElementById('valor2').value);
    let resultado;
    
    if ((isNaN(valor1) || isNaN(valor2))&& operador!=='sqrt') {//Validacion para que los datos ingresados sean numeros =  "is Not a Number" retorna true sino es un numero.
        alert("Ingresa valores numéricos válidos");
        return;
    }
    if (operador === '/' && valor2 === 0) {//Validacion para la division por cero. Oerador de igualdad restricto (===), compara valor y tipo de dato.
        alert("No puedes dividir por cero");
        return;
    }
    
    switch(operador){
        case '+':
                resultado = valor1 + valor2;
                break;
        case '-': 
                resultado = valor1 - valor2;
                break;
        case '*':
                resultado = valor1 * valor2;
                break;
        case '/':
                resultado = valor1 / valor2;
                break;   
        case '^':
                resultado = Math.pow(valor1, valor2);
                break;  
        case 'sqrt':
                resultado = Math.sqrt(valor1);
                document.getElementById('valor2').value = '';
                break;  
    }
    if(operador !== 'sqrt'){
        document.getElementById('operacion').textContent = `${valor1} ${operador} ${valor2}`;
        document.getElementById('resultado').innerHTML = resultado;
    }
    else{
        document.getElementById('operacion').textContent = ` √ ${valor1}`;
        document.getElementById('resultado').innerHTML = resultado;
    }

}
function resetear(){
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('operacion').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

let inputActivo;

function agregarAlInput(valor) {
    // No se permite agregar el punto
    if (valor === '.') {
        return;
    }

    inputActivo.value += valor;
}

function borrarUltimo() {
    inputActivo.value = inputActivo.value.slice(0, -1);
}

document.getElementById('valor1').addEventListener('focus', function () {
    inputActivo = this;
});

document.getElementById('valor2').addEventListener('focus', function () {
    inputActivo = this;
});



    
    
    
    
    
// 1-FUNCIONES INDIVIDUALES DE CADA OPERACION, LUEGO SE PUEDE HACER LA REFACTORIZACION DE LAS FUNCIONES EN UNSA SOLA: 'calcular('parametro')';
// function sumar(){
//     let valor1 = Number(document.getElementById('valor1').value);
//     let valor2 = Number(document.getElementById('valor2').value);
//     let resultado = valor1 + valor2;

//     document.getElementById('resultado').innerHTML = resultado; /*Retorna el valor de la suma*/
// }
// function restar(){
//     let valor1 = Number(document.getElementById('valor1').value);
//     let valor2 = Number(document.getElementById('valor2').value) ;
//     let resultado = valor1 - valor2;

//     document.getElementById('resultado').innerHTML = resultado; /*Retorna el valor de la suma*/
// }
// function multiplicar(){
//     let valor1 = Number(document.getElementById('valor1').value);
//     let valor2 = Number(document.getElementById('valor2').value) ;
//     let resultado = valor1 * valor2;

//     document.getElementById('resultado').innerHTML = resultado; /*Retorna el valor de la suma*/
// }
// function dividir(){
//     let valor1 = Number(document.getElementById('valor1').value);
//     let valor2 = Number(document.getElementById('valor2').value) ;
//     if(valor2 !=0){
//         let resultado = valor1 / valor2;
//     }
//     else{
//         resultado = 'No se puede dividir por 0.'
//         document.getElementById('resultado').innerHTML = resultado;
//     }

//     document.getElementById('resultado').innerHTML = resultado; /*Retorna el valor de la suma*/
// }
/*
//2-Refactorizacion: 

La refactorización en programación se refiere al proceso de reestructurar y mejorar el código fuente de un programa sin cambiar su comportamiento externo. 
El objetivo principal de la refactorización es mejorar la legibilidad, la mantenibilidad y, en algunos casos, el rendimiento del código, sin introducir nuevas funcionalidades 
ni modificar el comportamiento existente.

Durante el desarrollo de software, es común que el código fuente acumule complejidad, redundancia o se vuelva difícil de entender con el tiempo. 
La refactorización aborda estos problemas al realizar cambios graduales en el código para hacerlo más limpio, eficiente y fácil de entender. 
Algunas de las acciones comunes de refactorización incluyen:

-Extracción de métodos o funciones: Dividir bloques de código grandes en funciones más pequeñas y manejables.
-Renombrar variables y funciones: Utilizar nombres más descriptivos para mejorar la comprensión del código.
-Eliminar código duplicado: Identificar y consolidar fragmentos de código idénticos o similares.
-Reorganización de código: Mejorar la estructura del código para que sea más lógico y fácil de seguir.
-Optimización de rendimiento: Realizar ajustes para mejorar la eficiencia del código sin cambiar su comportamiento externo.
-Mejora de la legibilidad: Añadir comentarios, mejorar la indentación y formateo, y hacer que el código sea más comprensible para otros desarrolladores.

La refactorización es una práctica clave en el desarrollo de software ágil y contribuye a mantener el códigobase saludable a medida que evoluciona con el tiempo. 
Facilita la colaboración entre desarrolladores, reduce la deuda técnica y ayuda a prevenir problemas derivados de un código desordenado y difícil de mantener.

*/