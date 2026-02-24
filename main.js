'use strict'

function adicionarProduto() {
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')

    const span = document.createElement('span')
    span.textContent = produto.value
    span.className = 'flex flex-col bg-yellow-100 px-8 py-2'

    lista.appendChild(span)
    
}

function adicionarCodigo() {
    const lista = document.getElementById('lista')
    const codigo = document.getElementById('codigo')

    const span = document.createElement('span')
    span.textContent = codigo.value
    span.className = 'flex flex-col bg-yellow-100 px-8 py-2'

    lista.appendChild(span)
    
}

function adicionarQuantidade() {
    const lista = document.getElementById('lista')
    const produto = document.getElementById('quantia')

    const span = document.createElement('span')
    span.textContent = quantidade.value
    span.className = 'flex flex-col bg-yellow-100 px-8 py-2'

    lista.appendChild(span)
    
}