'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Partner.belongsTo(models.User, {foreignKey: "user_id"});
    }
  };
  Partner.init({
    full_name: DataTypes.STRING,
    birth_place: DataTypes.STRING,
    birth_of_date: DataTypes.DATE,
    gender: DataTypes.STRING,
    occupation: DataTypes.STRING,
    address: DataTypes.TEXT,
    phone_number: DataTypes.BIGINT,
    email: DataTypes.STRING,
    identification_file: {
      type: DataTypes.TEXT,
    },
    family_certification_file: {
      type: DataTypes.TEXT,
    },
    birth_certification_file: {
      type: DataTypes.TEXT,
    },
    baptism_certification_file: {
      type: DataTypes.TEXT,
    },
    user_id: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Partner',
  });
  return Partner;
};