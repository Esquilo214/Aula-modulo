import Produto from "./model/Produto.js"
import { ListarProdutos } from "./functions/ListarProdutos.js"
import { DetalheProduto } from "./functions/DetalhesProduto.js"

const apiUrl = "http://localhost:3000/produtos"

const buscarProdutos = async () => {
    const resposta = await fetch (apiUrl)
    const produtosJson = await resposta.json()
    const listaProdutos = await produtosJson.map(produto => new Produto(produto.id, produto.nome, produto.valor, produto.qtdestoque))
    return listaProdutos
}

const buscarPorId = async (id) => {
    const resposta = await fetch(`${apiUrl}/${id}`)
    const produtoJson = await resposta.json()
    const produto = new Produto(produtoJson.id, produtoJson.nome, produtoJson.valor, produtoJson.qtdEstoque)
    return produto
}

if (document.getElementById("lista-produtos")) {
    ListarProdutos(await buscarProdutos())
}

if (document.getElementById("detalhe-produto")) {
    const parametrosNaUrl = new URLSearchParams(window.location.search)
    const produtoId = parametrosNaUrl.get('produtoId')
    const produto = await buscarPorId(produtoId)
    DetalheProduto(produto)
}