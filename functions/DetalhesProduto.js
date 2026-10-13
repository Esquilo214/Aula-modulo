export function DetalheProduto(produto){
    const divDetalhes = document.getElementById("detalhe-produto")
    divDetalhes.innerHTML = `
        <h2>${produto.nome}</h2>
        <p>Valor: R$${produto.valor}</p>
        <p>Estoque: ${produto.qtdEstoque}</p>
        <button>Comprar</button>
        <br>
        <a href="index.html">Voltar a lista de produtos</a>
    `
}