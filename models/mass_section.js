'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mass_Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mass_Section.hasMany(models.Mass_Category, {foreignKey: 'section_id'})
    }
  };
  Mass_Section.init({
    title: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Mass_Section',
  });
  return Mass_Section;
};