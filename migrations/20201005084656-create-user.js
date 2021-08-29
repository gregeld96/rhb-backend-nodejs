'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING
      },
      birth_place: {
        type: Sequelize.STRING
      },
      birth_of_date: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      phone_number: {
        type: Sequelize.BIGINT
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.TEXT
      },
      identification_file: {
        type: Sequelize.TEXT
      },
      family_certification_file: {
        type: Sequelize.TEXT
      },
      birth_certification_file: {
        type: Sequelize.TEXT
      },
      baptism_certification_file: {
        type: Sequelize.TEXT
      },
      profile_pic: {
        type: Sequelize.TEXT
      },
      member_id: {
        type: Sequelize.BIGINT
      },
      otp: {
        type: Sequelize.INTEGER
      },
      isVerified: {
        type: Sequelize.BOOLEAN
      },
      QRcode: {
        type: Sequelize.TEXT
      },
      token_user: {
        type: Sequelize.TEXT
      },
      token_oneSignal: {
        type: Sequelize.TEXT
      },
      token_firebase: {
        type: Sequelize.TEXT
      },
      device_type: {
        type: Sequelize.INTEGER
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};