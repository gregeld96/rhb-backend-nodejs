'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let roleList = [
      {
        name: 'Jemaat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pendeta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Member Commission',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Workship Leader',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Singer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Keyboardist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guitarist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Drummer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bassist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Perkusi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Orchestra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Soundman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lighting',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Streaming',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Multimedia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kameramen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SuperAdmin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    
    await queryInterface.bulkInsert('Roles', roleList, {});
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
    
  }
};
