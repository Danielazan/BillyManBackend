const {Model, DataTypes } = require("sequelize")

const sequelize = require("../database")

class  Teams extends Model{}


 Teams.init({
      Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ImagePath: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Position: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      whatsAppNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      }
    }, {
      sequelize, // Pass the sequelize instance
      modelName: 'TeamsMembers' // Set the model name
    });




module.exports = {Teams};
