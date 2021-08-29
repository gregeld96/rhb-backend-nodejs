'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const newNotification = [
      {
        address: 'Jalan Kerjakeras Utara no 2',
        city: 'Jakarta Utara',
        code_post: '11175',
        hotline: '082131551235 (Rani)',
        section: 'dedication',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: 'Jalan Kerjakeras Utara no 2',
        city: 'Jakarta Utara',
        code_post: '11175',
        hotline: '082131551235 (Rani)',
        section: 'baptism',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hotline: '082131551235 (Rani)',
        section: 'marriage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hotline: '082131551235 (Rani)',
        section: 'home',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    
    await queryInterface.bulkInsert('Notifications', newNotification, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Notifications', null, {});
  }
};
