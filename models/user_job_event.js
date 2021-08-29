'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Job_Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Job_Event.belongsTo(models.Need, {foreignKey: 'need_id'})
      User_Job_Event.belongsTo(models.User, {foreignKey: 'user_id'})
      User_Job_Event.belongsTo(models.Role, {foreignKey: 'role_id'})
      User_Job_Event.belongsTo(models.Commission, {foreignKey: 'commission_job_id'})
    }
  };
  User_Job_Event.init({
    commission_job_id: DataTypes.INTEGER,
    need_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    approval: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User_Job_Event',
  });
  return User_Job_Event;
};