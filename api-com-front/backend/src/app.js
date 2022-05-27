const express = require('express')
const app = express()
const cors = require('cors')

const alunos = [
    {
        nome: 'Da Silva',
        idade: 12
    },
    {
        nome: 'Barbosa', 
        idade: 13
    }, 
    {
        nome: 'Anderson', 
        idade: 14
    },
    {
        nome: 'Silva', 
        idade: 15   
    }
]

app.use(cors())

app.get('/api/v1/alunos', function(req, res) {
    res.send(alunos)
})

app.listen(3000)