let vagas = [];
let url = "http://localhost:3000/vagas";
let lista = document.getElementById("vaga");

function limparLista() {

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

}

function exibirVagas() {

    let desenv = document.getElementById("desenv");
    let negocio = document.getElementById("negocio");

    limparLista();

    for(let i = 0; i < vagas.length; i++) {

        let tipo = vagas[i].tipo;
        var qualTipo = (desenv.checked && tipo == "1") || (negocio.checked && tipo == "2");

        if(qualTipo) {
            
            let option = document.createElement("option");
            option.textContent = vagas[i].titulo;
            option.setAttribute("value", vagas[i].id);
            lista.appendChild(option);
        }

    }

}

fetch(url)
    .then(res => res.json())
    .then((valor) => {
        vagas = valor;
        exibirVagas(); 
    });

desenv.addEventListener('click', exibirVagas);
negocio.addEventListener('click', exibirVagas);
