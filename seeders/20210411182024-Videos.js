'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data =[
      {
        video_file: 'video.mp4',
        section: 'sunday',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]

    await queryInterface.bulkInsert('Videos', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Videos', null, {});
  }
};
