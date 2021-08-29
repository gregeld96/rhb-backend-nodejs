'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Commission_Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Commission_Role.belongsTo(models.User, {foreignKey: 'user_id'});
      User_Commission_Role.belongsTo(models.Commission, {foreignKey: 'commission_id'});
      User_Commission_Role.belongsTo(models.Role, {foreignKey: 'role_id'})
    }
  };
  User_Commission_Role.init({
    commission_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User_Commission_Role',
  });
  return User_Commission_Role;
};