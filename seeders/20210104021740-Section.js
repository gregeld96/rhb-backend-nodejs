'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let massSections = [
      {
        title: 'Ibadah Umum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ibadah Komunitas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ibadah Khusus',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('Mass_Sections', massSections, {});
  
  },

  down: async (queryInterface, Sequelize) => {   
    await queryInterface.bulkDelete('Mass_Sections', null, {});
  }
};
