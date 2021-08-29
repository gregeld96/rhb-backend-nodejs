'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sunday_Schedule_Children extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sunday_Schedule_Children.belongsTo(models.User, {foreignKey: 'user_id'});
      Sunday_Schedule_Children.belongsTo(models.Children, {foreignKey: 'child_id'});
      Sunday_Schedule_Children.belongsTo(models.Sunday_School_Schedule, {foreignKey: 'sunday_school_id'});
    }
  };
  Sunday_Schedule_Children.init({
    user_id: DataTypes.INTEGER,
    child_id: DataTypes.INTEGER,
    sunday_school_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    joinAt: DataTypes.DATE,
    leaveAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sunday_Schedule_Children',
  });
  return Sunday_Schedule_Children;
};