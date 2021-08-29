'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact_Commission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contact_Commission.init({
    logo: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    leader_pic: DataTypes.STRING,
    leader_name: DataTypes.STRING,
    leader_phone: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contact_Commission',
  });
  return Contact_Commission;
};