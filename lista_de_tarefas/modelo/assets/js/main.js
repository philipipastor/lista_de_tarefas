function meu_escopo(){
    const input = document.querySelector(".input");
    const button = document.querySelector(".botao");
    const ul = document.querySelector(".lista");

    function cria_lista(){
        const lista_criada = document.createElement("li");
        ul.appendChild(lista_criada);
        lista_criada.textContent = input.value;
        input.value = "";
        input.focus();

        lista_criada.innerText += " "

        return lista_criada;
    }

    function btn_remove(lista_criada){
        //lista_criada.innerText += " "
        const button_remove = document.createElement("button");
        button_remove.innerText = "Apagar"
        lista_criada.appendChild(button_remove);
        

        button_remove.addEventListener("click", function (e) {
        ul.removeChild(lista_criada);
        })
    }

    function cria_tarefa(e){
        if (!input.value) return;
        const lista = cria_lista()
        btn_remove(lista)
    }

    function key_enter(e){
        if (e.key === "Enter"){
            cria_tarefa(e)
        }
    }

    button.addEventListener("click", cria_tarefa);
    input.addEventListener("keypress", key_enter);
}

meu_escopo();







