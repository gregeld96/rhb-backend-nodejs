'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_Marriages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      marriage_date: {
        type: Sequelize.DATE
      },
      bpn_id: {
        type: Sequelize.INTEGER
      },
      need_id: {
        type: Sequelize.INTEGER
      },
      marriage_photo_file: {
        type: Sequelize.TEXT
      },
      requirement:{
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      deletedAt: {
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
    await queryInterface.dropTable('User_Marriages');
  }
};