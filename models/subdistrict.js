'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subdistrict extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subdistrict.init({
    kecamatan_id: DataTypes.INTEGER,
    kelurahan: DataTypes.STRING,
    kd_pos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subdistrict',
  });
  return Subdistrict;
};