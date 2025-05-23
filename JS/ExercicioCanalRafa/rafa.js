
function adicionarTarefa() {
    let mensagemSucesso = "Tarefa adicionada com sucesso!"     
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    let mensagem = document.getElementById("mensagem")
    if (tarefa == "") {
        let mensagemErro = "[ERRO] Digite uma Tarefa para adicionar a sua lista "
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#a34743"
        
    } else {
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "#28a745"
        let novaTarefa = document.createElement("li")
        let listaTarefa = document.getElementById("listaTarefa")
        novaTarefa.textContent = tarefa
        listaTarefa.appendChild(novaTarefa)
    }

    inputTarefa.value = ""
    
}