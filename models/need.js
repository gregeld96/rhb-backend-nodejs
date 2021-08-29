'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Need extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Need.hasMany(models.User_Job_Event, {foreignKey: 'need_id'})
      Need.hasMany(models.Commission_Notification, {foreignKey: 'need_id'});
    }
  };
  Need.init({
    ruangan: DataTypes.TEXT,
    section: DataTypes.STRING,
    musicMultimedia: DataTypes.TEXT,
    designFlyer: DataTypes.TEXT,
    creativeVideo: DataTypes.TEXT,
    pembicara: DataTypes.TEXT,
    security: DataTypes.TEXT,
    it: DataTypes.TEXT,
    socialMedia: DataTypes.TEXT,
    commissionReq_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    event_name: DataTypes.STRING,
    event_pic: DataTypes.TEXT,
    time_start: DataTypes.DATE,
    time_end: DataTypes.DATE,
    calendarId: DataTypes.TEXT,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Need',
  });
  return Need;
};