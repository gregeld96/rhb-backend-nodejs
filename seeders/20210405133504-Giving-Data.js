'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data =[
      {
        qr: 'qr.jpeg',
        bank: 'BCA',
        holder: 'GSKI/Gereja Suara Kebenaran Injil',
        no_rek: `8650 98 111 5`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]

    await queryInterface.bulkInsert('Givings', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Givings', null, {});
  }
};
