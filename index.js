const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors())

let filmes = [
    {
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks),um rapaz com QI abaixo da média e boas intenções."
    },
    {
    titulo: "Um Sonho de Liberdade",
    sinopse: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
    }
]

//(req, res, next) -> promisse em que o next eh opcional

//Ponto de acesso para atender requisições get oi
app.get('/oi', (req, res) => {res.send('oieeeeeeeee')} )

//Ponto de acesso para atender requisições get filmes
app.get('/filmes', (req, res) => {res.send(filmes)} )

//Ponto de acesso para inserir um novo filme EEEEMMM MEMÓÓÓRIA
app.post('/filmes', (req, res) => {
    
    //recupera os dados da requisição
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;

    //monta o objeto json
    const filme = {
        titulo: titulo,
        sinopse: sinopse
    }

    //insere o filme novo na lista filmes
    filmes.push(filme)

    //só pra conferir manda a lista nova
    res.json(filmes);
})


app.listen(3000, () => console.log("app up & running"))