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

// Installation d'un orm et du driver postgres
// npm install sequelize --save
// npm install pg --save