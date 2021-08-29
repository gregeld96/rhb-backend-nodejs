'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Class.belongsTo(models.Service_Event_Class, {foreignKey: 'class_id'});
      User_Class.belongsTo(models.User, {foreignKey: 'user_id'})
    }
  };
  User_Class.init({
    user_id: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    notification_id: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User_Class',
  });
  return User_Class;
};