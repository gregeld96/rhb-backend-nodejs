'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Children', {
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
      dedication: {
        type: Sequelize.BOOLEAN
      },
      child_birth_certification_file: {
        type: Sequelize.TEXT
      },
      qr_code: {
        type: Sequelize.TEXT
      },
      profile_pic: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Children');
  }
};