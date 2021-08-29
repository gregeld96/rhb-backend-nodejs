'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      let list = [
        {
          "id": 1,
          "provinsi": "Aceh",
          "ibukota": "Banda Aceh",
          "p_bsni": "ID-AC"
        },
        {
          "id": 2,
          "provinsi": "Sumatra Utara",
          "ibukota": "Medan",
          "p_bsni": "ID-SU"
        },
        {
          "id": 3,
          "provinsi": "Sumatra Barat",
          "ibukota": "Padang",
          "p_bsni": "ID-SB"
        },
        {
          "id": 4,
          "provinsi": "Riau",
          "ibukota": "Pekanbaru",
          "p_bsni": "ID-RI"
        },
        {
          "id": 5,
          "provinsi": "Jambi",
          "ibukota": "Jambi",
          "p_bsni": "ID-JA"
        },
        {
          "id": 6,
          "provinsi": "Sumatra Selatan",
          "ibukota": "Palembang",
          "p_bsni": "ID-SS"
        },
        {
          "id": 7,
          "provinsi": "Bengkulu",
          "ibukota": "Bengkulu",
          "p_bsni": "ID-BE"
        },
        {
          "id": 8,
          "provinsi": "Lampung",
          "ibukota": "Bandar Lampung",
          "p_bsni": "ID-LA"
        },
        {
          "id": 9,
          "provinsi": "Bangka Belitung",
          "ibukota": "Pangkalpinang",
          "p_bsni": "ID-BB"
        },
        {
          "id": 10,
          "provinsi": "Kepulauan Riau",
          "ibukota": "Tanjungpinang",
          "p_bsni": "ID-KR"
        },
        {
          "id": 11,
          "provinsi": "DKI Jakarta",
          "ibukota": "Jakarta",
          "p_bsni": "ID-JB"
        },
        {
          "id": 12,
          "provinsi": "Jawa Barat",
          "ibukota": "Bandung",
          "p_bsni": "ID-JB"
        },
        {
          "id": 13,
          "provinsi": "Jawa Tengah",
          "ibukota": "Semarang",
          "p_bsni": "ID-JT"
        },
        {
          "id": 14,
          "provinsi": "Yogyakarta",
          "ibukota": "Yogyakarta",
          "p_bsni": "ID-YO"
        },
        {
          "id": 15,
          "provinsi": "Jawa Timur",
          "ibukota": "Surabaya",
          "p_bsni": "ID-JI"
        },
        {
          "id": 16,
          "provinsi": "Banten",
          "ibukota": "Serang",
          "p_bsni": "ID-BT"
        },
        {
          "id": 17,
          "provinsi": "Bali",
          "ibukota": "Denpasar",
          "p_bsni": "ID-BA"
        },
        {
          "id": 18,
          "provinsi": "Nusa Tenggara Barat",
          "ibukota": "Mataram",
          "p_bsni": "ID-NB"
        },
        {
          "id": 19,
          "provinsi": "Nusa Tenggara Timur",
          "ibukota": "Kupang",
          "p_bsni": "ID-NT"
        },
        {
          "id": 20,
          "provinsi": "Kalimantan Barat",
          "ibukota": "Pontianak",
          "p_bsni": "ID-KB"
        },
        {
          "id": 21,
          "provinsi": "Kalimantan Tengah",
          "ibukota": "Palangka Raya",
          "p_bsni": "ID-KT"
        },
        {
          "id": 22,
          "provinsi": "Kalimantan Selatan",
          "ibukota": "Banjarmasin",
          "p_bsni": "ID-KS"
        },
        {
          "id": 23,
          "provinsi": "Kalimantan Timur",
          "ibukota": "Samarinda",
          "p_bsni": "ID-KI"
        },
        {
          "id": 24,
          "provinsi": "Kalimantan Utara",
          "ibukota": "Tanjung Selor",
          "p_bsni": "ID-KU"
        },
        {
          "id": 25,
          "provinsi": "Sulawesi Utara",
          "ibukota": "Manado",
          "p_bsni": "ID-SA"
        },
        {
          "id": 26,
          "provinsi": "Sulawesi Tengah",
          "ibukota": "Palu",
          "p_bsni": "ID-ST"
        },
        {
          "id": 27,
          "provinsi": "Sulawesi Selatan",
          "ibukota": "Makassar",
          "p_bsni": "ID-SN"
        },
        {
          "id": 28,
          "provinsi": "Sulawesi Tenggara",
          "ibukota": "Kendari",
          "p_bsni": "ID-SG"
        },
        {
          "id": 29,
          "provinsi": "Gorontalo",
          "ibukota": "Gorontalo",
          "p_bsni": "ID-GO"
        },
        {
          "id": 30,
          "provinsi": "Sulawesi Barat",
          "ibukota": "Mamuju",
          "p_bsni": "ID-SR"
        },
        {
          "id": 31,
          "provinsi": "Maluku",
          "ibukota": "Ambon",
          "p_bsni": "ID-MA"
        },
        {
          "id": 32,
          "provinsi": "Maluku Utara",
          "ibukota": "Sofifi",
          "p_bsni": "ID-MU"
        },
        {
          "id": 33,
          "provinsi": "Papua",
          "ibukota": "Jayapura",
          "p_bsni": "ID-PA"
        },
        {
          "id": 34,
          "provinsi": "Papua Barat",
          "ibukota": "Manokwari",
          "p_bsni": "ID-PB"
        }
      ]

      let result = []

      list.forEach((data) => {
        data.createdAt = new Date()
        data.updatedAt = new Date()
        result.push(data)
      })
      

      await queryInterface.bulkInsert('Provinces', result, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Provinces', null, {});
  }
};
