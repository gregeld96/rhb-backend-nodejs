'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dedication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dedication.hasMany(models.Child_Dedication, {foreignKey: "dedication_id"})
      Dedication.belongsTo(models.User, {foreignKey: 'user_id'})
    }
  };
  Dedication.init({
    title: DataTypes.STRING,
    banner: DataTypes.TEXT,
    time_start: DataTypes.DATE,
    time_end: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    need_id: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Dedication',
  });
  return Dedication;
};