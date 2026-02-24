'use strict'

function adicionarProduto() {
    const lista = document.getElementById('lista') //id desse objt lista foi criado no html
    const produto = document.getElementById('produto') //id desse objt produto foi criado no html
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')

    // Chama a funçao para cada input separadamente
    criarCaixa(codigo.value)
    criarCaixa(produto.value)
    criarCaixa(quantidade.value)

    //Limpa os campos para adicionar novos valores/elementos
    codigo.value = ''
    produto.value = '' 
    quantidade.value = ''

    // Criei uma função interna para não repetir o mesmo código 3 vezes
    function criarCaixa (valor) {
        if (valor === '') return; //Se clicar no adicionar e o campo estiver vazio o retorno é vazio
        const novoSpan = document.createElement('span') 
        novoSpan.textContent = valor
        novoSpan.className = 'bg-yellow-100 px-8 py-2 border border-yellow-200 rounded shadow-sm'
        lista.appendChild(novoSpan) //lista é o pai e o span é o filho
    }
}