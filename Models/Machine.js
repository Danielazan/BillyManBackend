const {Model, DataTypes } = require("sequelize")

const sequelize = require("../database")

class  Machine extends Model{}

 Machine.init({
      Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ImagePath: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      
      Model: {
        type: DataTypes.JSON,
        allowNull: true
      }
    }, {
      sequelize, // Pass the sequelize instance
      modelName: 'Machines' // Set the model name
    });
    
module.exports = Machine;
