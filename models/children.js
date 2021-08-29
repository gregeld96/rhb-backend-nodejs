'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Children extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Children.belongsTo(models.User, {foreignKey: 'user_id'});
      Children.hasMany(models.Sunday_Schedule_Children, {foreignKey: 'child_id'});
      Children.hasMany(models.Child_Dedication, {foreignKey: "child_id"});
    }
  };
  Children.init({
    full_name: DataTypes.STRING,
    birth_place: DataTypes.STRING,
    birth_of_date: DataTypes.DATE,
    gender: DataTypes.STRING,
    child_birth_certification_file: DataTypes.TEXT,
    profile_pic: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    qr_code: DataTypes.TEXT,
    dedication: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Children',
  });
  return Children;
};