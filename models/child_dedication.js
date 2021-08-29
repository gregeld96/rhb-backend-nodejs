'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Child_Dedication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Child_Dedication.belongsTo(models.User, {foreignKey: "user_id"});
      Child_Dedication.belongsTo(models.Dedication, {foreignKey: "dedication_id"});
      Child_Dedication.belongsTo(models.Children, {foreignKey: "child_id"});
      Child_Dedication.belongsTo(models.User_Service_Event, {foreignKey: "user_service_id"});
    }
  };
  Child_Dedication.init({
    user_id: DataTypes.INTEGER,
    child_id: DataTypes.INTEGER,
    dedication_id: DataTypes.INTEGER,
    user_service_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Child_Dedication',
  });
  return Child_Dedication;
};