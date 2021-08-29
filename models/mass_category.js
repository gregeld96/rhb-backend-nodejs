'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mass_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mass_Category.hasMany(models.Mass_Schedule, {foreignKey: 'category_id'})
      Mass_Category.belongsTo(models.Mass_Section, {foreignKey: 'section_id'})
    }
  };
  Mass_Category.init({
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.TEXT,
    section_id:DataTypes.INTEGER,
    order:DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Mass_Category',
  });
  return Mass_Category;
};