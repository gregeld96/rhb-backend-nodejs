'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PreMarriageGuidance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PreMarriageGuidance.belongsTo(models.User, {foreignKey: 'user_id'})
      PreMarriageGuidance.hasMany(models.User_Marriage, {foreignKey: 'bpn_id'})
    }
  };
  PreMarriageGuidance.init({
    bpn_date: DataTypes.DATE,
    quota: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PreMarriageGuidance',
  });
  return PreMarriageGuidance;
};