// Démarrer un serveur Node.js avec Express
const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = 3000;

// Ordre d'execution des middlewares : favicon, morgan, bodyParser
//+ loger toutes les requêtes des utilisateurs grâce au module js 'morgan' 
//+ parser les données en JSON grâce au module js 'body-parser'
app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

sequelize.initDb()

// Ici, nous placerons nos futurs points de terminaison
require('./src/routes/findAllPokemons')(app)
require('./src/routes/findPokemonByPK')(app)
require('./src/routes/createPokemon')(app)
require('./src/routes/updatePokemon')(app)
require('./src/routes/deletePokemon')(app)
require('./src/routes/login')(app)

// On ajoute la gestion des erreurs 404
app.use(({res}) => {
    const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
      res.status(404).json({message});
  });

//Démarrer le serveur et specifie le port d'écoute + afficher un message dans la console
app.listen(port, () => console.log(`Application démarrée sur : http://localhost ${port} !`))
//2.17