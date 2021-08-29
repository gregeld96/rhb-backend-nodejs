'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [
      {
        name: "Herry",
        phone_number: "0123456789",
        profile_pic: "prof-icon-1.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joe",
        phone_number: "0123456789",
        profile_pic: "prof-icon-2.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Doe",
        phone_number: "0123456789",
        profile_pic: "prof-icon-3.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Herman",
        phone_number: "0123456789",
        profile_pic: "prof-icon-4.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tanjung",
        phone_number: "0123456789",
        profile_pic: "prof-icon-5.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('Crisis_Centers', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Crisis_Centers', null, {});
  }
};
