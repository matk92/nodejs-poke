// Point de terminaison Express = app.METHODE(CHEMIN, GESTIONNAIRE(req, res))
// METHODE = (get, post, put, delete)
// Exemples de routes avec Express :

app.get('/pokemons/1', (req, res) => res.send('Vous êtes sur le pokémon n°1'))
app.post('/pokemons', (req, res) => res.send('vous venez d\'ajouter un nouveau pokémon au pokédex'))
app.put('/pokemons/1', (req, res) => res.send('vous venez de modifier le pokémon n°1'))
app.delete('/pokemons/1', (req, res) => res.send('vous venez de supprimer le pokémon n°1'))
app.delete('/pokemons', (req, res) => res.send('vous venez de supprimer tous les pokémons'))
