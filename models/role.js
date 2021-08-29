'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.hasMany(models.User_Commission_Role, {foreignKey: 'role_id'})
      Role.hasMany(models.User_Job_Event, {foreignKey: 'role_id'})
      Role.hasMany(models.User_Event, {foreignKey: 'role_id'})
    }
  };
  Role.init({
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};