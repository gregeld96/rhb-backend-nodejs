'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Partners', {
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
      user_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Partners');
  }
};