'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sunday_School_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sunday_School_Category.hasMany(models.Sunday_School_Schedule, {foreignKey: 'category_id'})
    }
  };
  Sunday_School_Category.init({
    age_min: DataTypes.INTEGER,
    age_max: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sunday_School_Category',
  });
  return Sunday_School_Category;
};