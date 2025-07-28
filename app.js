// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Agrega al menos dos amigos para sortear.");
        return;
    }

    let copiaAmigos = [...listaAmigos];
    let resultado = {};

    for (let i = 0; i < listaAmigos.length; i++) {
        const amigo = listaAmigos[i];
        const posibles = copiaAmigos.filter(nombre => nombre !== amigo);

        if (posibles.length === 0) {
            alert("Error al sortear. Intenta nuevamente.");
            return;
        }

        const index = Math.floor(Math.random() * posibles.length);
        const amigoSecreto = posibles[index];
        resultado[amigo] = amigoSecreto;

        copiaAmigos.splice(copiaAmigos.indexOf(amigoSecreto), 1);
    }

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const ul = document.getElementById("resultado");
    ul.innerHTML = "";

    for (let amigo in resultado) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${resultado[amigo]}`;
        ul.appendChild(li);
    }
}
