'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Crisis_Center extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Crisis_Center.init({
    profile_pic: DataTypes.STRING,
    name: DataTypes.STRING,
    phone_number: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Crisis_Center',
  });
  return Crisis_Center;
};