'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data =[
      {
        area: 'KG 1',
        day: 'Rabu',
        time: `19.00`,
        section: `online`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area: 'KG 2',
        day: 'Rabu',
        time: `19.30`,
        section: `online`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area: 'KG 3',
        day: 'Sabtu',
        time: `20.00`,
        section: `online`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area: 'KG 4',
        day: 'Rabu',
        time: `19.30`,
        section: `online`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area: 'KG 6',
        day: 'Sabtu',
        time: `19.00`,
        section: `online`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area: 'KG 7',
        day: 'Rabu',
        time: `18.30`,
        section: `online`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area: 'KG 8',
        day: 'Rabu',
        time: `19.00`,
        section: `online`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area: 'Serpong',
        day: 'Kamis',
        time: `19.30`,
        section: `online`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area: 'HI',
        day: 'Kamis',
        time: `20.00`,
        section: `online`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    await queryInterface.bulkInsert('Homes', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Homes', null, {});
  }
};
