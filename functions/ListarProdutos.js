export function ListarProdutos(produtos) {
    const produtos1 = document.getElementById("produtos1")
    const produtos2 = document.getElementById("produtos2")
    let qtdprodutos = 0

    produtos1.innerText = ""
    produtos2.innerText = ""

    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div")
        produtoDiv.className = "card-produto"
        produtoDiv.innerHTML = `
        <h2>${produto.nome}</h2>
        <p>Valor: R$${produto.valor.toFixed(2)}</p>
        <a href ="detalhesProduto.html?produtoId=${produto.id}">
            <button>Ver detalhes </button>
        </a>
        `
            qtdprodutos++

    if (qtdprodutos <= 3){
        produtos1.appendChild(produtoDiv)
    }else{
        produtos2.appendChild(produtoDiv)
    }
    });
}