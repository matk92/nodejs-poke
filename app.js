// Démarrer un serveur Node.js avec Express
const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = 3000;

//Favicon 
//+ loger toutes les requêtes des utilisateurs grâce au module js 'morgan' 
//+ parser les données en JSON grâce au module js 'body-parser'
app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

sequelize.initDb()

// Ici, nous placerons nos futurs points de terminaison

//Démarrer le serveur et specifie le port d'écoute + afficher un message dans la console
app.listen(port, () => console.log(`Application démarrée sur : http://localhost ${port} !`))
//2.17