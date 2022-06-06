document.querySelector('#botao').onclick = function(){
    if(document.querySelector('.digite input').value.length == 0){
        alert("Digite uma Tarefa")        
    }

    else{
        document.querySelector('.tarefas').innerHTML += `
        <div class="listagem">
            <input type="checkbox">
            <span id="nome-tarefa">
                ${document.querySelector('.digite input').value}
            </span>
        </div>
        `;
    }

}