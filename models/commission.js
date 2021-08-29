'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Commission.hasMany(models.User_Commission_Role, {foreignKey: 'commission_id'});
      Commission.hasMany(models.User_Job_Event, {foreignKey: 'commission_job_id'});
    }
  };
  Commission.init({
    name: DataTypes.STRING,
    child_order: DataTypes.INTEGER,
    parent_order: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Commission',
  });
  return Commission;
};