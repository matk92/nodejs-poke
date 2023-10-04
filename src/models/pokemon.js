/* L’API Rest et la Base de données : Créer un modèle Sequelize */
const validTypes = ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Vol', 'Normal', 'Electrik', 'Fée']

module.exports = (sequelize, DataTypes) => {  
    return sequelize.define('Pokemon', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: {
          msg: 'Le pokémon existe déjà'
        },
        validate: {
          notEmpty: { msg : 'Le nom est une propriété requise' },
          notNull: { msg : 'Le nom est une propriété requise' }
        }
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg : 'Veuillez entrer uniquement des nombres entiers pour les HP' }, //Validateur natif grâce à Sequelize
          notNull: { msg : 'Les HP sont une propriété requise' },
          min: { 
            args: [0], 
            msg: 'Les HP doivent être supérieurs ou égaux à 0' 
          },
          max: { 
            args: [999], 
            msg: 'Les HP doivent être inférieurs ou égaux à 999' 
          }
        }
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg : 'Veuillez entrer uniquement des nombres entiers pour les CP' },
          notNull: { msg : 'Les CP sont une propriété requise' },
          min: { 
            args: [0], 
            msg: 'Les CP doivent être supérieurs ou égaux à 0' 
          },
          max: { 
            args: [99], 
            msg: 'Les CP doivent être inférieurs ou égaux à 99' 
          }
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: { msg : 'Veuillez entrer une URL valide pour l\'image' },
          notNull: { msg : 'L\'image est une propriété requise' }
        }
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue('types').split(',') // Getter : Base de données -> API / ["Plante", "Poison"]
        },
        set(types) {
          this.setDataValue('types', types.join()); // Setter : API -> Base de données / "Plante, Poison"
        },
        validate: {
          isTypesValid(value) {
            if(!value) {
              throw new Error('Un pokémon doit avoir au moins un type')
            }
            if(value.split(',').length > 3) {
              throw new Error('Un pokémon ne peut pas avoir plus de trois types')
            }
            value.split(',').forEach(type => {
              if(!validTypes.includes(type)) {
                throw new Error(`Le type d'un pokémon doit être parmi : ${validTypes}`)
              }
            });
          }
        } 
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }