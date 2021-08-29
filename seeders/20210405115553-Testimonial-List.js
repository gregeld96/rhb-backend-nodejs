'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data =[
      {
        photo: 'testimonial-1.jpeg',
        name: 'Joe Doe',
        testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the`,
        section: 'home',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'testimonial-2.jpeg',
        name: 'Natalia',
        testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the`,
        section: 'home',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'testimonial-3.jpeg',
        name: 'Herry Santoso',
        testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the`,
        section: 'home',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'testimonial-4.jpeg',
        name: 'Maria Derrothy',
        testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the`,
        section: 'sunday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'testimonial-5.jpeg',
        name: 'Joe Josh',
        testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the`,
        section: 'sunday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'testimonial-6.jpeg',
        name: 'Fillia',
        testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the`,
        section: 'sunday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    await queryInterface.bulkInsert('Testimonials', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Testimonials', null, {});
  }
};
