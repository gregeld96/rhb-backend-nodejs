'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [
      {
        title: "Anak - anak",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
        logo: "rehobot-kids-icon.png",
        leader_name: "Herry",
        leader_phone: "0123456789",
        leader_pic: "leader-icon-1.jpeg",
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Musik",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
        logo: "rehobot-music-icon.png",
        leader_name: "Herry",
        leader_phone: "0123456789",
        leader_pic: "leader-icon-6.jpeg",
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Tunas Remaja",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
        logo: "rehobot-teens-icon.png",
        leader_name: "Herry",
        leader_phone: "0123456789",
        leader_pic: "leader-icon-2.jpeg",
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Remaja",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
        logo: "rehobot-youth-icon.png",
        leader_name: "Herry",
        leader_phone: "0123456789",
        leader_pic: "leader-icon-3.jpeg",
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Dewasa Muda",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
        logo: "rehobot-rehobotyoungadult-icon.png",
        leader_name: "Herry",
        leader_phone: "0123456789",
        leader_pic: "leader-icon-4.jpeg",
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Wanita",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
        logo: "rehobot-women-icon.png",
        leader_name: "Herry",
        leader_phone: "0123456789",
        leader_pic: "leader-icon-5.jpeg",
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('Contact_Commissions', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Contact_Commissions', null, {});
  }
};
