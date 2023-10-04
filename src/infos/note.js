// Point de terminaison Express = app.METHODE(CHEMIN, GESTIONNAIRE(req, res))
// METHODE = (get, post, put, delete)
// Exemples de routes avec Express :

app.get('/pokemons/1', (req, res) => res.send('Vous êtes sur le pokémon n°1'))
app.post('/pokemons', (req, res) => res.send('vous venez d\'ajouter un nouveau pokémon au pokédex'))
app.put('/pokemons/1', (req, res) => res.send('vous venez de modifier le pokémon n°1'))
app.delete('/pokemons/1', (req, res) => res.send('vous venez de supprimer le pokémon n°1'))
app.delete('/pokemons', (req, res) => res.send('vous venez de supprimer tous les pokémons'))



// logger toutes les requêtes des utilisateurs avec le module js 'morgan'
const morgan = require('morgan')
app.use(morgan('dev'))


//1. On reçoit des données sous la forme de chaînes de caractère :
const userString = '{"name": "John", "age": 30}'

//2. On "parse" la chaîne de caractère afin d'obtenir du json :
const userJson = JSON.parse(userString)

//3. Pour obtenir les données "inverses",
// que l'on devra retourner au client,
// on utilise la méthode JSON.stringify() :
console.log(JSON.stringify(userJson)) // {"name":"John","age":30}

// Chaîne de caractère transitant par le protocole HTTP
let String = '{"name": "John", "age": 30}'
// Format JSON
let Json = {"name": "John", "age": 30}


const userString2 = '{"name": "John", "age": 30}'
const userJson2 = {name: "John", age: 30}

console.log(userJson2.age) // Affiche 30, aucun souci !
console.log(userString2.age) // Affiche undefined, car age est une propriété de userJson et non de userString

// Ajout d'un pokémon
const pokemonCreated = { ...req.body, ...{id: id, created: new Date()}}
// Modification d'un pokémon
const pokemonUpdated = { ...req.body, id: id}

/*
body-parser : un middleware pour l'analyse des corps de requête HTTP. Il peut être utilisé pour analyser les corps de requête JSON, URL-encodés et d'autres types.

express : un framework web populaire pour Node.js. Il fournit un ensemble de fonctionnalités pour la création d'applications web, telles que le routage, les middlewares et les templates.

pg : un client PostgreSQL pour Node.js. Il fournit un ensemble de fonctions pour interagir avec une base de données PostgreSQL, telles que l'exécution de requêtes SQL et la gestion des transactions.

sequelize : un ORM (Object-Relational Mapping) pour Node.js. Il fournit un ensemble de fonctions pour interagir avec une base de données en utilisant des objets JavaScript, plutôt que d'écrire directement des requêtes SQL.

serve-favicon : un middleware pour servir un favicon (une petite icône qui apparaît dans l'onglet du navigateur) pour votre application web.

morgan : un middleware pour enregistrer les requêtes et les réponses HTTP dans la console. Il peut être utilisé pour déboguer et surveiller votre application web.

nodemon : un outil pour redémarrer automatiquement votre application Node.js chaque fois que des modifications sont apportées au code source. Il peut vous faire gagner du temps et des efforts pendant le développement en éliminant la nécessité d'arrêter et de redémarrer manuellement votre application.

bcrypt : un outil pour hacher les mots de passe. Il peut être utilisé pour stocker les mots de passe des utilisateurs de manière sécurisée dans une base de données.

jsonwebtoken : un outil pour générer et vérifier les jetons JWT. Il peut être utilisé pour implémenter l'authentification basée sur les jetons dans votre application web.

*/

//PSQL
// docker exec -it 2baa /bin/bash
// psql -h localhost -U myuser -d pokedex