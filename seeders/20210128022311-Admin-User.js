'use strict';
const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let address = {
      address: 'Jalan Tebet Barat dalam X',
      province: 'DKI Jakarta',
      city: 'Jakarta Selatan',
      district: 'Tebet',
      subdistrict: 'Tebet Barat',
      postCode: '12810',
      area: '012/005'
    }

    let userList = [
      {
        full_name: 'Jemaat',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 123456789,
        email: 'jemaat@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Pelayanan Jemaat',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 234567891,
        email: 'pelayananjemaat@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Ruangan MAG',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 345678912,
        email: 'ruanganmag@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Ruangan Kirana',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 456789123,
        email: 'ruangankirana@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Security MAG',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 567891234,
        email: 'securitymag@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Security Kirana',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 678912345,
        email: 'securitykirana@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Multimedia',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 789123456,
        email: 'multimedia@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Penjadwalan',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 891234567,
        email: 'penjadwalan@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'IT',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 912345678,
        email: 'it@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Design',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 111111111,
        email: 'design@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Social Media',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Perempuan',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 222222222,
        email: 'socialmedia@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Sunday School',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Perempuan',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 333333333,
        email: 'sundayschool@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Greg',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 444444444,
        email: 'greg@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Pradipta',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 55555555,
        email: 'pradipta@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Eldwin',
        birth_place: 'Jakarta',
        birth_of_date: new Date(1996, 9, 8),
        gender: 'Laki-laki',
        occupation: 'Pegawai Swasta',
        address: JSON.stringify(address),
        phone_number: 6281284585765,
        email: 'gregeld96@gmail.com',
        password: hashPassword('admin'),
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('Users', userList, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
