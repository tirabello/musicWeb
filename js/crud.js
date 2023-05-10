document.querySelector("#salvar").addEventListener("click", cadastrar)

let tarefas = []

window.addEventListener("load", () => {
    tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
    atualizar()
})

function atualizar(){
    document.querySelector("#tarefas").innerHTML = ""
    tarefas.forEach(tarefa => 
        document.querySelector("#tarefas").innerHTML += criarCard(tarefa))
}

function cadastrar() {
    const titulo = document.querySelector("#titulo").value
    const preco = document.querySelector("#preco").value
    const categoria = document.querySelector("#categoria").value

    const tarefa = {
        titulo,
        preco,
        categoria
    }

    if (!isValid(tarefa.titulo, document.querySelector("#titulo"))) return
    if (!isValid(tarefa.pontos, document.querySelector("#preco"))) return

    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    atualizar()
    modal.hide()
}

function isValid(valor, campo){
    if(valor.length == 0){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }else{
        campo.classList.add("is-valid")
        campo.classList.remove("is-invalid")
        return true
    }

}

function apagar(botao) {
    botao.parentNode.parentNode.parentNode.remove()
}

function criarCard(tarefa) {
    const card = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${tarefa.titulo}
            </div>
            <img src="assets/images/Lemonade.jfif" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text">${tarefa.categoria}</p>
                <span class="badge text-bg-warning">${tarefa.preco}R$</span>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-success" title="Adicionar ao carrinho">
                    <i class="bi bi-bag"></i>
                </a>
                <a href="#" onClick="apagar(this)" class="btn btn-danger" title="Remover do carrinho">
                    <i class="bi bi-trash3"></i>
                </a>
            </div> <!-- card footer -->
        </div>
        `
    return card
}