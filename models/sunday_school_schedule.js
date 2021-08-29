'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sunday_School_Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sunday_School_Schedule.hasMany(models.Sunday_Schedule_Children, {foreignKey: 'sunday_school_id'});
      Sunday_School_Schedule.belongsTo(models.Sunday_School_Category, {foreignKey: 'category_id'});
      Sunday_School_Schedule.belongsTo(models.User, {foreignKey: 'user_id'}); //Person in Charge (pic)
    }
  };
  Sunday_School_Schedule.init({
    quota: DataTypes.INTEGER,
    time_start: DataTypes.DATE,
    time_end: DataTypes.DATE,
    activities: DataTypes.TEXT,
    qr_code: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sunday_School_Schedule',
  });
  return Sunday_School_Schedule;
};