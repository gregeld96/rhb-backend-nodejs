'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Marriage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Marriage.belongsTo(models.User, {foreignKey: 'user_id'})
      User_Marriage.belongsTo(models.PreMarriageGuidance, {foreignKey: 'bpn_id'})
    }
  };
  User_Marriage.init({
    user_id: DataTypes.INTEGER,
    marriage_date: DataTypes.DATE,
    bpn_id: DataTypes.INTEGER,
    marriage_photo_file: DataTypes.TEXT,
    need_id: DataTypes.INTEGER,
    requirement: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User_Marriage',
  });
  return User_Marriage;
};