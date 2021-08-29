'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let commissionList = [
      {
        name: 'Jemaat',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pelayanan Jemaat',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruangan MAG',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruangan Kirana',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Security MAG',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Security Kirana',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pemusik & Multimedia',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Penjadwalan',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'IT',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Design & Creative',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Creative',
        child_order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Design',
        child_order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Social Media',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sunday School',
        child_order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('Commissions', commissionList, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Commissions', null, {});
  }
};
