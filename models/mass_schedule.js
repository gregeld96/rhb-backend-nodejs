'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mass_Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mass_Schedule.hasMany(models.User_Event, {foreignKey: 'event_id'});
      Mass_Schedule.belongsTo(models.Mass_Category, {foreignKey: 'category_id'});
    }
  };
  Mass_Schedule.init({
    name: DataTypes.TEXT,
    time_start: DataTypes.DATE,
    time_end: DataTypes.DATE,
    need_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    youtube_link: DataTypes.TEXT,
    banner: DataTypes.TEXT,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Mass_Schedule',
  });
  return Mass_Schedule;
};