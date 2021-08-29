'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const flash_page = [
      {
        title: 'Shallom, ',
        description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
        image: 'flash-page-1.png',
        order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Jadwal Ibadah & Pelayanan',
        description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
        image: 'flash-page-2.png',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Live Chat',
        description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
        image: 'flash-page-3.png',
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Renungan dalam Genggaman',
        description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
        image: 'flash-page-4.png',
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    
    await queryInterface.bulkInsert('Flashes', flash_page, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Flashes', null, {});
  }
};
