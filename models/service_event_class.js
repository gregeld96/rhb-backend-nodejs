'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service_Event_Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Service_Event_Class.hasMany(models.User_Class, {foreignKey: 'class_id'})
    }
  };
  Service_Event_Class.init({
    topic: DataTypes.STRING,
    time: DataTypes.DATE,
    speaker: DataTypes.TEXT,
    section: DataTypes.STRING,
    special_event_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Service_Event_Class',
  });
  return Service_Event_Class;
};