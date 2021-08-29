'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Event.belongsTo(models.User, {foreignKey: 'user_id'});
      User_Event.belongsTo(models.Mass_Schedule, {foreignKey: 'event_id'});
      User_Event.belongsTo(models.Role, {foreignKey: 'role_id'});
    }
  };
  User_Event.init({
    user_id: DataTypes.INTEGER,
    notification_id: DataTypes.TEXT,
    section: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    approval: DataTypes.BOOLEAN,
    event_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User_Event',
  });
  return User_Event;
};