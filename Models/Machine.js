const {Model, DataTypes } = require("sequelize")

const sequelize = require("../database")

class  Machine extends Model{}

class MachineModel extends Model{}

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
      }
    }, {
      sequelize, // Pass the sequelize instance
      modelName: 'Machines' // Set the model name
    });


MachineModel.init({
  ModelName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Capacity: {
    type: DataTypes.STRING,
    allowNull: false
  },
},{
  sequelize, // Pass the sequelize instance
  modelName: 'MachineModels' // Set the model name
})

Machine.hasMany(MachineModel,{ onDelete: 'CASCADE' })
MachineModel.belongsTo(Machine)

module.exports = {Machine,MachineModel};
