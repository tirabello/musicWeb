document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar() {
    const titulo = document.querySelector("#titulo").value
    const preco = document.querySelector("#preco").value
    const categoria = document.querySelector("#categoria").value

    const tarefa = {
        titulo,
        preco,
        categoria
    }

    document.querySelector("#discos")
        .innerHTML += criarCard(tarefa)
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