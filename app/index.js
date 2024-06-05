const express = require('express')
const app = express()
const port = 3000

const connection = require('mysql').createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})
const listName = Array('Wesley', 'Arthur', 'Victoria', 'Paula', 'Felipe', 'Lucas', 'Livia', 'Matheus', 'Gabriel', 'Priscila', 'Marina', 'Gal')
connection.query(`INSERT INTO people(name) values ('${listName[Math.floor(Math.random() * listName.length)]}')`)

app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (err, result) => {
        if (err) {
            res.send(`<h1>Full Cycle Rocks!</h1> Fail to retrieve names`)
        } else {
            res.send(`<h1>Full Cycle Rocks!</h1> ${result.map((people) => people.name)}`)
        }
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})