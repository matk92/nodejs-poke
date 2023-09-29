const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const {success, GetUniqueId} = require('./helper.js')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000;

//Favicon + loger toutes les requêtes des utilisateurs grâce au module js 'morgan'
app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))

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
//Endpoint permettant de créer un nouveau pokémon
app.post('/api/pokemons', (req, res) => {
    const id = getUniqueId(pokemons)
    const pokemonCreated = { ...req.body, ...{id: id, created: new Date()}}
    pokemon.push(pokemonCreated)
    const message = 'Le pokémon a bien été créé.'
    res.json(success(message, pokemonCreated))
})

//Démarrer le serveur et specifie le port d'écoute + afficher un message dans la console
app.listen(port, () => console.log(`Application démarrée sur : http://localhost ${port}!`))
//1.32