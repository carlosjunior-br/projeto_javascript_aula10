let tarefaInput = document.getElementById('tarefaInput')
let btnAdicionarTarefa = document.getElementById('btnAdicionarTarefa')
let listaDeTarefas = document.getElementById('listaDeTarefas')

tarefaInput.focus()
btnAdicionarTarefa.addEventListener('click', function () {
    let tarefaTexto = tarefaInput.value.trim()

    if (tarefaTexto !== '') {
        let tarefaItem = document.createElement('li')
        tarefaItem.className = 'list-group-item d-flex justify-content-between align-items-center'
    
        let divTextoTarefa = document.createElement('div')
        divTextoTarefa.className = 'texto-tarefa'
        let spanTarefa = document.createElement('span')
        spanTarefa.id = 'textoTarefa'
        spanTarefa.textContent = tarefaTexto
        divTextoTarefa.appendChild(spanTarefa)
    
        let divAcoes = document.createElement('div')
        divAcoes.className = 'acoes-tarefa'
        let checkboxConcluida = document.createElement('input')
        checkboxConcluida.type = 'checkbox'
        checkboxConcluida.id = 'concluida'
        let labelConcluida = document.createElement('label')
        labelConcluida.textContent = 'Concluída'
    
        let btnExcluirTarefa = document.createElement('button')
        btnExcluirTarefa.id = 'btnExcluirTarefa'
        btnExcluirTarefa.className = 'btn btn-danger btn-sm'
        btnExcluirTarefa.textContent = 'Excluir'
    
        divAcoes.appendChild(checkboxConcluida)
        divAcoes.appendChild(labelConcluida)
        divAcoes.appendChild(btnExcluirTarefa)
    
        tarefaItem.appendChild(divTextoTarefa)
        tarefaItem.appendChild(divAcoes)
    
        listaDeTarefas.appendChild(tarefaItem)
        tarefaInput.value = ''
        tarefaInput.focus()
    
        checkboxConcluida.addEventListener('click', function () {
            if (checkboxConcluida.checked) {
                spanTarefa.style.textDecoration = 'line-through'
            } else {
                spanTarefa.style.textDecoration = 'none'
            }
        })
    
        btnExcluirTarefa.addEventListener('click', function () {
            listaDeTarefas.removeChild(tarefaItem)
        })
    }
})