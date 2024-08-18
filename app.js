alert("No momento, o sorteador é limitado a gerar 100 números por vez.")

let sorteioRealizado = false;

function verificarValores(){
    let de = parseInt(document.getElementById("min").value);
    let ate = parseInt(document.getElementById("max").value);
}

function criacaoCirculo(number) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.textContent = number; 
    return circle;
}

function LimparCirculo() {
    const container = document.getElementById("numberContainer");
    container.innerHTML = "";
}

function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let maxCirculos = 100;

    let numerosSorteados = [];
    let numero;
    let intervalo = (ate - de + 1);

    if (de > ate) {
        alert('Não foi possível realizar o sorteio, insira um número menor no campo "Do Número", ou um número maior no campo "Até o número"!!');
        return;
    }

    if (quantidade > (ate - de + 1)){
        alert('O número da "Quantidade" deve ser menor ou igual ao número "Do número" até o "Até o número"!! ')
        return;
    }

    quantidade = Math.min(quantidade, maxCirculos);

    for(let i = 0; i < quantidade; i++){
        numero = numeroSorteado(de, ate);

        while (numerosSorteados.includes(numero)) {
            numero = numeroSorteado(de, ate);
        }

        numerosSorteados.push(numero);
    }

LimparCirculo();

const container = document.getElementById("resultadosNumeros");
numerosSorteados.forEach(num => {
    const circle = criacaoCirculo(num);
    container.appendChild(circle);
});

sorteioRealizado = true;
alterarBotaoReiniciar();
}

function numeroSorteado(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    if (sorteioRealizado) {
        botao.classList.remove("containerBotaoDesabilitado");
        botao.classList.add("containerBotao");
    } else {
        botao.classList.add("containerBotaoDesabilitado");
        botao.classList.remove("containerBotao");
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";

    const container = document.getElementById("resultadosNumeros");
    container.innerHTML = "";

    sorteioRealizado = false;
    alterarBotaoReiniciar();
}