function meu_escopo() {

    const input = document.querySelector(".input");
    const button = document.querySelector(".botao");
    const ul = document.querySelector(".lista");


    button.addEventListener("click", function (e) {
        e.preventDefault();

        if(!input.value) return;


        const lista_criada = document.createElement("li");
        ul.appendChild(lista_criada);
        lista_criada.textContent += input.value;
        input.value = "";

        const button_remove = document.createElement("button");
        button_remove.innerText = "Apagar"
        lista_criada.appendChild(button_remove);

        button_remove.addEventListener("click", function (e) {
            e.preventDefault();
            ul.removeChild(lista_criada);
        })
    })
}

meu_escopo()







