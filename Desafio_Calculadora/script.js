const resultados = document.getElementById('text-inf');
const buttons = document.getElementById('button_contaner');

let operacao = '';
let numero = '';

function adicionarNumero(num) {
    numero += num;
    resultados.value += num;
}

function adicionarOperacao(op) {
    operacao = op;
    resultados.value += op;
}

function calcular() {
    if (resultados.value) {
        resultados.value = eval(resultados.value);
        document.getElementById('text-inf').innerHTML = resultados;
        numero = resultados;
    }
}

function clean() {
    resultados.value = resultados.value.slice(0, -1);
    numero = numero.slice(0, -1);
}

function limpar() {
    resultados.value = '';
    numero = '';
}
