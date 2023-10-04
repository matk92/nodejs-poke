const { Pokemon } = require('../db/sequelize')
const { Op } = require('sequelize')
  
module.exports = (app) => {
  app.get('/api/pokemons', (req, res) => {
    if(req.query.name) {
      const name = req.query.name
      return Pokemon.findAll({ 
        where: {
          name: { // 'name' est une propriété du modèle Pokemon
            [Op.like]: `%${name}%` // 'name' est le critère de la recherche
          } 
        },
        limit: 5
      })
      .then(pokemons => {
        const message = `il y'a ${pokemons.length} pokémon qui correspondent au terme de recherche ${name}`
        res.json({ message, data: pokemons })
      })
    } else{
      Pokemon.findAll()
      .then(pokemons => {
        const message = 'La liste des pokémons a bien été récupérée.'
        res.json({ message, data: pokemons })
      })
      .catch(error => {
        const message = `La liste des pokémons n'a pas pu être récupérée. Réessayez dans quelques instants.`
        res.status(505).json({ message, data: error })
      })
    }
  })
}