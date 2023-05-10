document.querySelector("#filtrarVinil").addEventListener("click", ()=>{
    let tarefasFiltradas = tarefas.filter(tarefa => !tarefa.concluida)
    filtrar(tarefasFiltradas)
})
document.querySelector("#filtrarCD").addEventListener("click", ()=>{
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.concluida)
    filtrar(tarefasFiltradas)
})