'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Needs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ruangan: {
        type: Sequelize.TEXT
      },
      musicMultimedia: {
        type: Sequelize.TEXT
      },
      designFlyer: {
        type: Sequelize.TEXT
      },
      creativeVideo: {
        type: Sequelize.TEXT
      },
      pembicara: {
        type: Sequelize.TEXT
      },
      security: {
        type: Sequelize.TEXT
      },
      it: {
        type: Sequelize.TEXT
      },
      socialMedia: {
        type: Sequelize.TEXT
      },
      commissionReq_id: {
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER
      },
      event_name: {
        type: Sequelize.STRING
      },
      event_pic: {
        type: Sequelize.TEXT
      },
      time_start: {
        type: Sequelize.DATE
      },
      time_end: {
        type: Sequelize.DATE
      },
      calendarId: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Needs');
  }
};