document.querySelector("#filtrarVinil").addEventListener("click", ()=>{
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.categoria == "Vinil")
    filtrar(tarefasFiltradas)
})
document.querySelector("#filtrarCD").addEventListener("click", ()=>{
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.categoria == "CD")
    filtrar(tarefasFiltradas)
})
document.querySelector("#filtrarDVD").addEventListener("click", ()=>{
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.categoria == "DVD")
    filtrar(tarefasFiltradas)
})
document.querySelector("#filtrarOutros").addEventListener("click", ()=>{
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.categoria == "Outros")
    filtrar(tarefasFiltradas)
})
document.querySelector("#busca").addEventListener("keyup", ()=>{
    let busca = document.querySelector("#busca").value
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.titulo.includes(busca))
    filtrar(tarefasFiltradas)
})