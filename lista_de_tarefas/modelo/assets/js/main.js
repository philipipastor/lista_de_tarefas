function meu_escopo(){
    const input = document.querySelector(".input");
    const button = document.querySelector(".botao");
    const ul = document.querySelector(".lista");

    function cria_lista(texto){
        const lista_criada = document.createElement("li");
        ul.appendChild(lista_criada);
        lista_criada.textContent = texto;
        input.value = "";
        input.focus();

        lista_criada.innerText += " "

        return lista_criada;
    }

    function btn_remove(lista_criada){
        
        const button_remove = document.createElement("button");
        button_remove.innerText = "Apagar"
        lista_criada.appendChild(button_remove);
        salvar_tarefa()
        

        button_remove.addEventListener("click", function (e) {
        ul.removeChild(lista_criada);
        })
    }

    function cria_tarefa(texto = input.value){
        const lista = cria_lista(texto);
        btn_remove(lista);
        salvar_tarefa();
    }

    function key_enter(e){
        if (e.key === "Enter"){
            cria_tarefa()
        }
    }

    button.addEventListener("click", function(e){
        if (!input.value) return;
        cria_tarefa();
    });

    input.addEventListener("keypress", key_enter);


    function salvar_tarefa(){
        const tarefas_li = ul.querySelectorAll("li");
        const lista_de_tarefa = [];

        for (let tarefa of tarefas_li) {
            let tarefa_texto = tarefa.innerText;
            tarefa_texto = tarefa_texto.replace("Apagar", "").trim();
            lista_de_tarefa.push(tarefa_texto)
        }

        const tarefaJSON = JSON.stringify(lista_de_tarefa);
        localStorage.setItem("tarefas", tarefaJSON);
    }

        function adicionando_tarefas_salvas(){
            const tarefas = localStorage.getItem("tarefas");
            const lista_de_tarefa = JSON.parse(tarefas);
            console.log(lista_de_tarefa)

            for (let tarefa of lista_de_tarefa){
                cria_tarefa(tarefa)
            }

        }
        adicionando_tarefas_salvas();
}
meu_escopo();


