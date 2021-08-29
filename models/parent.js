'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Parent.belongsTo(models.User, {foreignKey: "user_id"});
    }
  };
  Parent.init({
    full_name: DataTypes.STRING,
    birth_place: DataTypes.STRING,
    birth_of_date: DataTypes.DATE,
    gender: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Parent',
  });
  return Parent;
};