const express = require('express')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('test'))

// Methode http:get
// URL du endpoint : /api/pokemons
// Vous devrez retourner un messgae du type "Il y'a 12 pokemons dans le pokedex pour le moment""
app.get('/api/pokemons', (req, res) => {
    res.send(`Il y'a ${pokemons.length} pokemons dans le pokedex pour le moment`)
}) 


app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    res.send(`Vous avez demandé le pokemon ${pokemon.name}.`)
})

app.listen(port, () => console.log(`Application démarrée sur : http://localhost ${port}!`))
