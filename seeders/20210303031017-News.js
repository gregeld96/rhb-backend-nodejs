'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data =[
      {
        picture: 'news-1.png',
        publishedAt: '2021-02-28',
        section: 'home',
        url: 'https://www.youtube.com/watch?v=gLCn5MuWpI8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        picture: 'news-2.png',
        publishedAt: '2021-03-28',
        section: 'home',
        url: 'https://www.youtube.com/watch?v=LRP8d7hhpoQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        picture: 'news-3.png',
        publishedAt: '2021-03-14',
        section: 'home',
        url: 'https://www.youtube.com/watch?v=LRP8d7hhpoQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        picture: 'news-4.png',
        publishedAt: '2021-02-28',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the`,
        section: 'news',
        url: 'https://www.youtube.com/watch?v=gLCn5MuWpI8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        picture: 'news-5.png',
        publishedAt: '2021-03-28',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the`,
        section: 'news',
        url: 'https://www.youtube.com/watch?v=LRP8d7hhpoQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        picture: 'news-6.png',
        publishedAt: '2021-03-14',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the`,
        section: 'news',
        url: 'https://www.youtube.com/watch?v=LRP8d7hhpoQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]

    await queryInterface.bulkInsert('News', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('News', null, {});
  }
};
