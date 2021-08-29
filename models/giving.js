'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Giving extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Giving.init({
    bank: DataTypes.STRING,
    holder: DataTypes.STRING,
    no_rek: DataTypes.TEXT,
    qr: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Giving',
  });
  return Giving;
};