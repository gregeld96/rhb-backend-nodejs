'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emergency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Emergency.belongsTo(models.User, {foreignKey: 'user_id'});
    }
  };
  Emergency.init({
    full_name: DataTypes.STRING,
    relationship: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.TEXT,
    phone_number: DataTypes.BIGINT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Emergency',
  });
  return Emergency;
};