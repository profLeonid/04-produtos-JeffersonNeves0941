'use strict'
function adicionarProduto(){
    const produto = document.getElementById("produto")
      const codigo = document.getElementById("codigo")
      const quantidade = document.getElementById("quantidade")

    const lista = document.getElementById("lista")

    const codspan = document.createElement("codigo") 
    const prodspan`` = document.createElement("codigo")
    span.textContent = produto.value
    span.className = "bg-blue-200 px-8 py-2"
 
    lista.appendChild(span)

    if(produto == ""){
    return false
    } 
}

