'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baptism extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Baptism.belongsTo(models.User, {foreignKey: 'user_id'})
    }
  };
  Baptism.init({
    title: DataTypes.STRING,
    banner: DataTypes.TEXT,
    time_start: DataTypes.DATE,
    time_end: DataTypes.DATE,
    need_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Baptism'
  });
  return Baptism;
};