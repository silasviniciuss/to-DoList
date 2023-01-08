document.getElementById("button_add").onclick = function(){
    
    //variavel para armazenar o valor do input
    var text_input = document.getElementById("text").value;

    //variarel que vai criar uma nova div
    var new_task = '<div id="tarefa"><span>'+text_input+'</span><button id="delete">Deletar</button></div>';

    //Condição para alertar caso não tenha nada digitado no input
    if(text_input.length == 0){
        alert("Você precisa digitar um texto");
    } else{
        document.getElementById('novastarefas').innerHTML += new_task;
    }

    //Variavel que vai numerar cada div nova criada apartir do id
    var numeroDeTarefas = document.querySelectorAll('#delete');

    //For para deletar a div correspondente criada
    for (let index = 0; index < numeroDeTarefas.length; index++) {
        numeroDeTarefas[index].onclick = function(){
            this.parentNode.remove();
        };
        
    }

}