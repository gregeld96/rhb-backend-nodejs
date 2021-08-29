'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Needs',
        'section',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'User_Events',
        'section',
        {
          type: Sequelize.STRING
        }
      )
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Needs',
        'section',
        {}
      ),
      queryInterface.removeColumn(
        'User_Events',
        'section',
        {}
      )
    ])
  }
};
