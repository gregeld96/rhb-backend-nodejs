'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Service_Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Service_Event.belongsTo(models.User, {foreignKey: 'user_id'})
    }
  };
  User_Service_Event.init({
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    section: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    message: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User_Service_Event',
  });
  return User_Service_Event;
};