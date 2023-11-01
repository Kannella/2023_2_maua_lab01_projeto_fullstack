const protocolo = "http://"
const baseURL = "localhost:3000"
const filmesEndPoint = "/filmes"

async function obterFilmes () {
    // console.log("teste 123");
    //PROTOCOLO:// SERVIDOR:porta E PONTO DE ACESSO => Criando uma string de acesso
    const URLcompleta = `${protocolo}${baseURL}${filmesEndPoint}`
    const filmes = (await axios.get(URLcompleta)).data // aqui ela via pegar os filmes
    //get eh uma requisição http que ocorre de forma assincrona só que agora vamos usar o async await 
    let tabela = document.querySelector('.filmes') //vai no dom e pesquisa a classe filmes
    let corpoTabela = tabela.getElementsByTagName('tbody')[0]
    for (let filme of filmes) { // para cada posicao do vetor filme
        let linha = corpoTabela.insertRow(0)
        let celulaTitulo = linha.insertCell(0)
        let celulaSinopse = linha.insertCell(1)
        celulaTitulo.innerHTML = filme.titulo
        celulaSinopse.innerHTML = filme.sinopse

    }

}


async function cadastrarFilme() {
    const URLcompleta = `${protocolo}${baseURL}${filmesEndPoint}`
    let tituloInput = document.querySelector('#tituloInput') //busca o id tituloInput
    let sinopseInput = document.querySelector('#sinopseInput') //busca o id sinopseInput
    let titulo = tituloInput.value //pega o valor que o usuario digitou
    let sinopse = sinopseInput.value //pega o valor que o usuario digitou
    tituloInput.value = "" //limpa a caixinha
    sinopseInput.value = "" //limpa a caixinha

    if(titulo && sinopse) {
    
    //mandando o que ta no bagui de pesquisa para a base do servidor (get)
    //estamos mandando esse objeto json pra essa url e o .data pede de volta pra devolver a resposta, que resposta? -> no script do node na linha (res.json(filmes);)
        const filmes = (await axios.post(URLcompleta, {titulo, sinopse})).data
        let tabela = document.querySelector('.filmes') //vai no dom e pesquisa a classe filmes
        let corpoTabela = tabela.getElementsByTagName('tbody')[0] //vai no dom e pesquisa a tag tbody e atribui essa tag na variavel corpoTabela
        corpoTabela.innerHTML ="" //insere vazio na variavel corpoTabela
        for (let filme of filmes) { // para cada posicao, que eu nomeei como filme, do vetor filmes, eu faço:
            let linha = corpoTabela.insertRow(0) //insere na tag tbody na primeira posição do vetor uma linha e atribui na variavel linha
            let celulaTitulo = linha.insertCell(0) //insere na linha do tbody na primeira posição do vetor uma coluna e atribui na variavel celulaTitulo
            let celulaSinopse = linha.insertCell(1) //insere na linha do tbody na segunda posição do vetor uma coluna e atribui na variavel celulaSinopse
            celulaTitulo.innerHTML = filme.titulo // pega o valor titulo que o usuario digitou no vetor filme e insere na index na coluna do tbody na primeira posicao 
            celulaSinopse.innerHTML = filme.sinopse // pega o valor sinopse que o usuario digitou no vetor filme e insere na index na coluna do tbody na primeira posicao 
        }  
    } else {
        let alert = document.querySelector('.alert')
        alert.classList.add('show')
        alert.classList.remove('d-none')
        setTimeout(() => {
            alert.classList.add('d-none')
            alert.classList.remove('show')
        }, 2000);
    }

      
}