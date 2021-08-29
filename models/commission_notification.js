'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commission_Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Commission_Notification.belongsTo(models.Need, {foreignKey: 'need_id'})
    }
  };
  Commission_Notification.init({
    need_id: DataTypes.INTEGER,
    commission_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Commission_Notification',
  });
  return Commission_Notification;
};