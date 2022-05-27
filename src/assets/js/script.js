//entrada de dados

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

//função verificando o tamanho de caracteres de entrada

function inputLength(){
    return input.value.length
}

//função de criação do item da lista

function createListElement(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    //função habilitando mudança de cor na tarefa concluída

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    //deletando as tarefas

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");
    }
}

//manipular botão para registro da tarefa

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}




