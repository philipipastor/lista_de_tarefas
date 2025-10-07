# 📝 Lista de Tarefas (To-Do List)

Este projeto é uma **aplicação simples em JavaScript puro (Vanilla JS)** que permite ao usuário **criar, listar e apagar tarefas**, com **armazenamento local** via `localStorage`.
O código foi escrito de forma funcional, sem o uso de frameworks, para treinar **manipulação de DOM**, **eventos** e **armazenamento persistente** no navegador.

---

## 🚀 Funcionalidades

* ✅ Adicionar tarefas por meio de um **botão** ou pressionando a tecla **Enter**
* ✅ Criar elementos dinamicamente (`<li>` e `<button>`) dentro da lista
* ✅ Remover tarefas individualmente com o botão **Apagar**
* ✅ Salvar as tarefas automaticamente no **LocalStorage**
* ✅ Manter as tarefas salvas mesmo após recarregar a página

---

## 💻 Estrutura do Código

### 1. Seleção de elementos do DOM

```js
const input = document.querySelector(".input");
const button = document.querySelector(".botao");
const ul = document.querySelector(".lista");
```

Seleciona os elementos principais: campo de texto, botão e lista (`ul`).

---

### 2. Função `cria_lista(texto)`

Cria um item da lista (`<li>`) com o texto digitado no input e o adiciona ao `<ul>`:

```js
function cria_lista(texto){
    const lista_criada = document.createElement("li");
    ul.appendChild(lista_criada);
    lista_criada.textContent = texto;
    input.value = "";
    input.focus();

    lista_criada.innerText += " "

    return lista_criada;
    }
```

---

### 3. Função `btn_remove(lista_criada)`

Cria um botão **Apagar** para cada tarefa e adiciona a função de remover o item da lista:

```js
function btn_remove(lista_criada) {
    const button_remove = document.createElement("button");
    button_remove.innerText = "Apagar";
    lista_criada.appendChild(button_remove);

    button_remove.addEventListener("click", function () {
        ul.removeChild(lista_criada);
    });
}
```

---

### 4. Função `cria_tarefa(e)`

Chama as funções anteriores para adicionar a tarefa completa:

```js
function cria_tarefa(texto = input.value){
    const lista = cria_lista(texto);
    btn_remove(lista);
    salvar_tarefa();
    }
```

---

### 6. Função `salvar_tarefa()`

Percorre todos os itens da lista, remove a palavra “Apagar” e salva os textos no `localStorage` em formato JSON:

```js
function salvar_tarefa() {
    const tarefas_li = ul.querySelectorAll("li");
    const lista_de_tarefa = [];

    for (tarefa of tarefas_li) {
        let tarefa_texto = tarefa.innerText.replace("Apagar", "").trim();
        lista_de_tarefa.push(tarefa_texto);
    }

    const tarefaJSON = JSON.stringify(lista_de_tarefa);
    localStorage.setItem("tarefas", tarefaJSON);
}
```

---

### 7. Função `adicionando_tarefas_salvas()`

Recupera as tarefas armazenadas no `localStorage`:

```js
function adicionando_tarefas_salvas(){
    const tarefas = localStorage.getItem("tarefas");
    const lista_de_tarefa = JSON.parse(tarefas);
    console.log(lista_de_tarefa)

    for (let tarefa of lista_de_tarefa){
        cria_tarefa(tarefa)
    }

}
adicionando_tarefas_salvas();
```
---

### 8. Eventos

* **Clique no botão:** adiciona a tarefa
```js
button.addEventListener("click", function(){
    if(!input.value) return;
    cria_tarefa();
});
```

* **Tecla Enter:** adiciona a tarefa também
```js
input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        cria_tarefa();
    }
});

```
---

## 🧠 Aprendizados

Este projeto exercita:

* Manipulação de DOM com `createElement`, `appendChild`, `querySelector`
* Controle de eventos (`click`, `keypress`)
* Estruturação modular de funções
* Armazenamento e recuperação de dados com `localStorage`
* Conversão de dados com `JSON.stringify()` e `JSON.parse()`

---

## 🔧 Melhorias Futuras

* Adicionar estilo com CSS (ex: botão apagar com espaçamento)
* Criar um feedback visual (mensagem ou animação ao apagar/adicionar tarefa)
* Permitir marcar tarefas como concluídas

---

## 📂 Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**






