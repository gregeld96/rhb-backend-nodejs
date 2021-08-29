'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //Role: 17 Admin, 18 Manager, 19 Super admin

    let userRole = [
      {
        user_id: 1,
        commission_id: 1,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        commission_id: 2,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        commission_id: 3,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        commission_id: 4,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        commission_id: 5,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6,
        commission_id: 6,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 7,
        commission_id: 7,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 8,
        commission_id: 8,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 9,
        commission_id: 9,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 10,
        commission_id: 10,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 11,
        commission_id: 13,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 12,
        commission_id: 14,
        role_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 13,
        commission_id: 8,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 14,
        commission_id: 11,
        role_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ];
    await queryInterface.bulkInsert('User_Commission_Roles', userRole, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User_Commission_Roles', null, {}); 
  }
};
