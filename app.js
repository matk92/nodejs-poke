const express = require('express')
const morgan = require('morgan')
const {success} = require('./helper.js')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000;

// loger toutes les requêtes des utilisateurs gràce au module js 'morgan'
app.use(morgan('dev'))

app.get('/', (req, res) => res.send('<h1>Bienvenue</h1><p>Ceci est mon premier projet NodeJS !</p>'))

//Endpoint affichant le nombre de pokémons
app.get('/api/pokemons', (req, res) => {
    const message = 'La liste des pokémons a bien été récupérée.'
    res.json(success(message, pokemons))
})

//Endpoint affichant les infos du pokémon
app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokémon a bien été trouvé.'
    res.json(success(message, pokemon))
})

app.listen(port, () => console.log(`Application démarrée sur : http://localhost ${port}!`))
//1.32