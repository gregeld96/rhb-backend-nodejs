'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let list = [
      {
        "id": 1,
        "kabkot_id": 1,
        "kecamatan": "Arongan Lambalek"
      },
      {
        "id": 2,
        "kabkot_id": 1,
        "kecamatan": "Bubon"
      },
      {
        "id": 3,
        "kabkot_id": 1,
        "kecamatan": "Johan Pahlawan"
      },
      {
        "id": 4,
        "kabkot_id": 1,
        "kecamatan": "Kaway XVI"
      },
      {
        "id": 5,
        "kabkot_id": 1,
        "kecamatan": "Meureubo"
      },
      {
        "id": 6,
        "kabkot_id": 1,
        "kecamatan": "Pante Ceureumen (Pantai Ceuremen)"
      },
      {
        "id": 7,
        "kabkot_id": 1,
        "kecamatan": "Panton Reu"
      },
      {
        "id": 8,
        "kabkot_id": 1,
        "kecamatan": "Samatiga"
      },
      {
        "id": 9,
        "kabkot_id": 1,
        "kecamatan": "Sungai Mas"
      },
      {
        "id": 10,
        "kabkot_id": 1,
        "kecamatan": "Woyla"
      },
      {
        "id": 11,
        "kabkot_id": 1,
        "kecamatan": "Woyla Barat"
      },
      {
        "id": 12,
        "kabkot_id": 1,
        "kecamatan": "Woyla Timur"
      },
      {
        "id": 13,
        "kabkot_id": 2,
        "kecamatan": "Babah Rot"
      },
      {
        "id": 14,
        "kabkot_id": 2,
        "kecamatan": "Blang Pidie"
      },
      {
        "id": 15,
        "kabkot_id": 2,
        "kecamatan": "Jeumpa"
      },
      {
        "id": 16,
        "kabkot_id": 2,
        "kecamatan": "Kuala Batee"
      },
      {
        "id": 17,
        "kabkot_id": 2,
        "kecamatan": "Lembah Sabil"
      },
      {
        "id": 18,
        "kabkot_id": 2,
        "kecamatan": "Manggeng"
      },
      {
        "id": 19,
        "kabkot_id": 2,
        "kecamatan": "Setia"
      },
      {
        "id": 20,
        "kabkot_id": 2,
        "kecamatan": "Susoh"
      },
      {
        "id": 21,
        "kabkot_id": 2,
        "kecamatan": "Tangan-Tangan"
      },
      {
        "id": 22,
        "kabkot_id": 3,
        "kecamatan": "Baitussalam"
      },
      {
        "id": 23,
        "kabkot_id": 3,
        "kecamatan": "Blank Bintang"
      },
      {
        "id": 24,
        "kabkot_id": 3,
        "kecamatan": "Darul Imarah"
      },
      {
        "id": 25,
        "kabkot_id": 3,
        "kecamatan": "Darul Kamal"
      },
      {
        "id": 26,
        "kabkot_id": 3,
        "kecamatan": "Darussalam"
      },
      {
        "id": 27,
        "kabkot_id": 3,
        "kecamatan": "Indrapuri"
      },
      {
        "id": 28,
        "kabkot_id": 3,
        "kecamatan": "Ingin Jaya"
      },
      {
        "id": 29,
        "kabkot_id": 3,
        "kecamatan": "Kota Cot Glie (Kuta Cot Glie)"
      },
      {
        "id": 30,
        "kabkot_id": 3,
        "kecamatan": "Kota Jantho"
      },
      {
        "id": 31,
        "kabkot_id": 3,
        "kecamatan": "Kota Malaka (Kuta Malaka)"
      },
      {
        "id": 32,
        "kabkot_id": 3,
        "kecamatan": "Krueng Barona Jaya"
      },
      {
        "id": 33,
        "kabkot_id": 3,
        "kecamatan": "Kuta Baro"
      },
      {
        "id": 34,
        "kabkot_id": 3,
        "kecamatan": "Lembah Seulawah"
      },
      {
        "id": 35,
        "kabkot_id": 3,
        "kecamatan": "Leupung"
      },
      {
        "id": 36,
        "kabkot_id": 3,
        "kecamatan": "Lhoknga (Lho'nga)"
      },
      {
        "id": 37,
        "kabkot_id": 3,
        "kecamatan": "Lhoong"
      },
      {
        "id": 38,
        "kabkot_id": 3,
        "kecamatan": "Mantasiek (Montasik)"
      },
      {
        "id": 39,
        "kabkot_id": 3,
        "kecamatan": "Mesjid Raya"
      },
      {
        "id": 40,
        "kabkot_id": 3,
        "kecamatan": "Peukan Bada"
      },
      {
        "id": 41,
        "kabkot_id": 3,
        "kecamatan": "Pulo Aceh"
      },
      {
        "id": 42,
        "kabkot_id": 3,
        "kecamatan": "Seulimeum"
      },
      {
        "id": 43,
        "kabkot_id": 3,
        "kecamatan": "Simpang Tiga"
      },
      {
        "id": 44,
        "kabkot_id": 3,
        "kecamatan": "Suka Makmur"
      },
      {
        "id": 45,
        "kabkot_id": 4,
        "kecamatan": "Darul Hikmah"
      },
      {
        "id": 46,
        "kabkot_id": 4,
        "kecamatan": "Indra Jaya"
      },
      {
        "id": 47,
        "kabkot_id": 4,
        "kecamatan": "Jaya"
      },
      {
        "id": 48,
        "kabkot_id": 4,
        "kecamatan": "Keude Panga"
      },
      {
        "id": 49,
        "kabkot_id": 4,
        "kecamatan": "Krueng Sabee"
      },
      {
        "id": 50,
        "kabkot_id": 4,
        "kecamatan": "Pasie Raya"
      },
      {
        "id": 51,
        "kabkot_id": 4,
        "kecamatan": "Sampoiniet"
      },
      {
        "id": 52,
        "kabkot_id": 4,
        "kecamatan": "Setia Bakti"
      },
      {
        "id": 53,
        "kabkot_id": 4,
        "kecamatan": "Teunom"
      },
      {
        "id": 54,
        "kabkot_id": 5,
        "kecamatan": "Bakongan"
      },
      {
        "id": 55,
        "kabkot_id": 5,
        "kecamatan": "Bakongan Timur"
      },
      {
        "id": 56,
        "kabkot_id": 5,
        "kecamatan": "Kluet Selatan"
      },
      {
        "id": 57,
        "kabkot_id": 5,
        "kecamatan": "Kluet Tengah"
      },
      {
        "id": 58,
        "kabkot_id": 5,
        "kecamatan": "Kluet Timur"
      },
      {
        "id": 59,
        "kabkot_id": 5,
        "kecamatan": "Kluet Utara"
      },
      {
        "id": 60,
        "kabkot_id": 5,
        "kecamatan": "Kota Bahagia"
      },
      {
        "id": 61,
        "kabkot_id": 5,
        "kecamatan": "Labuhan Haji"
      },
      {
        "id": 62,
        "kabkot_id": 5,
        "kecamatan": "Labuhan Haji Barat"
      },
      {
        "id": 63,
        "kabkot_id": 5,
        "kecamatan": "Labuhan Haji Timur"
      },
      {
        "id": 64,
        "kabkot_id": 5,
        "kecamatan": "Meukek"
      },
      {
        "id": 65,
        "kabkot_id": 5,
        "kecamatan": "Pasie Raja"
      },
      {
        "id": 66,
        "kabkot_id": 5,
        "kecamatan": "Sama Dua"
      },
      {
        "id": 67,
        "kabkot_id": 5,
        "kecamatan": "Sawang"
      },
      {
        "id": 68,
        "kabkot_id": 5,
        "kecamatan": "Tapak Tuan"
      },
      {
        "id": 69,
        "kabkot_id": 5,
        "kecamatan": "Trumon"
      },
      {
        "id": 70,
        "kabkot_id": 5,
        "kecamatan": "Trumon Tengah"
      },
      {
        "id": 71,
        "kabkot_id": 5,
        "kecamatan": "Trumon Timur"
      },
      {
        "id": 72,
        "kabkot_id": 6,
        "kecamatan": "Danau Paris"
      },
      {
        "id": 73,
        "kabkot_id": 6,
        "kecamatan": "Gunung Meriah (Mariah)"
      },
      {
        "id": 74,
        "kabkot_id": 6,
        "kecamatan": "Kota Baharu"
      },
      {
        "id": 75,
        "kabkot_id": 6,
        "kecamatan": "Kuala Baru"
      },
      {
        "id": 76,
        "kabkot_id": 6,
        "kecamatan": "Pulau Banyak"
      },
      {
        "id": 77,
        "kabkot_id": 6,
        "kecamatan": "Pulau Banyak Barat"
      },
      {
        "id": 78,
        "kabkot_id": 6,
        "kecamatan": "Simpang Kanan"
      },
      {
        "id": 79,
        "kabkot_id": 6,
        "kecamatan": "Singkil"
      },
      {
        "id": 80,
        "kabkot_id": 6,
        "kecamatan": "Singkil Utara"
      },
      {
        "id": 81,
        "kabkot_id": 6,
        "kecamatan": "Singkohor"
      },
      {
        "id": 82,
        "kabkot_id": 6,
        "kecamatan": "Suro Makmur"
      },
      {
        "id": 83,
        "kabkot_id": 7,
        "kecamatan": "Banda Mulia"
      },
      {
        "id": 84,
        "kabkot_id": 7,
        "kecamatan": "Bandar Pusaka"
      },
      {
        "id": 85,
        "kabkot_id": 7,
        "kecamatan": "Bendahara"
      },
      {
        "id": 86,
        "kabkot_id": 7,
        "kecamatan": "Karang Baru"
      },
      {
        "id": 87,
        "kabkot_id": 7,
        "kecamatan": "Kejuruan Muda"
      },
      {
        "id": 88,
        "kabkot_id": 7,
        "kecamatan": "Kota Kuala Simpang"
      },
      {
        "id": 89,
        "kabkot_id": 7,
        "kecamatan": "Manyak Payed"
      },
      {
        "id": 90,
        "kabkot_id": 7,
        "kecamatan": "Rantau"
      },
      {
        "id": 91,
        "kabkot_id": 7,
        "kecamatan": "Sekerak"
      },
      {
        "id": 92,
        "kabkot_id": 7,
        "kecamatan": "Seruway"
      },
      {
        "id": 93,
        "kabkot_id": 7,
        "kecamatan": "Tamiang Hulu"
      },
      {
        "id": 94,
        "kabkot_id": 7,
        "kecamatan": "Tenggulun"
      },
      {
        "id": 95,
        "kabkot_id": 8,
        "kecamatan": "Atu Lintang"
      },
      {
        "id": 96,
        "kabkot_id": 8,
        "kecamatan": "Bebesen"
      },
      {
        "id": 97,
        "kabkot_id": 8,
        "kecamatan": "Bies"
      },
      {
        "id": 98,
        "kabkot_id": 8,
        "kecamatan": "Bintang"
      },
      {
        "id": 99,
        "kabkot_id": 8,
        "kecamatan": "Celala"
      },
      {
        "id": 100,
        "kabkot_id": 8,
        "kecamatan": "Jagong Jeget"
      },
      {
        "id": 101,
        "kabkot_id": 8,
        "kecamatan": "Kebayakan"
      },
      {
        "id": 102,
        "kabkot_id": 8,
        "kecamatan": "Ketol"
      },
      {
        "id": 103,
        "kabkot_id": 8,
        "kecamatan": "Kute Panang"
      },
      {
        "id": 104,
        "kabkot_id": 8,
        "kecamatan": "Linge"
      },
      {
        "id": 105,
        "kabkot_id": 8,
        "kecamatan": "Lut Tawar"
      },
      {
        "id": 106,
        "kabkot_id": 8,
        "kecamatan": "Pegasing"
      },
      {
        "id": 107,
        "kabkot_id": 8,
        "kecamatan": "Rusip Antara"
      },
      {
        "id": 108,
        "kabkot_id": 8,
        "kecamatan": "Silih Nara"
      },
      {
        "id": 109,
        "kabkot_id": 9,
        "kecamatan": "Babul Makmur"
      },
      {
        "id": 110,
        "kabkot_id": 9,
        "kecamatan": "Babul Rahmah"
      },
      {
        "id": 111,
        "kabkot_id": 9,
        "kecamatan": "Babussalam"
      },
      {
        "id": 112,
        "kabkot_id": 9,
        "kecamatan": "Badar"
      },
      {
        "id": 113,
        "kabkot_id": 9,
        "kecamatan": "Bambel"
      },
      {
        "id": 114,
        "kabkot_id": 9,
        "kecamatan": "Bukit Tusam"
      },
      {
        "id": 115,
        "kabkot_id": 9,
        "kecamatan": "Darul Hasanah"
      },
      {
        "id": 116,
        "kabkot_id": 9,
        "kecamatan": "Deleng Pokhisen"
      },
      {
        "id": 117,
        "kabkot_id": 9,
        "kecamatan": "Ketambe"
      },
      {
        "id": 118,
        "kabkot_id": 9,
        "kecamatan": "Lawe Alas"
      },
      {
        "id": 119,
        "kabkot_id": 9,
        "kecamatan": "Lawe Bulan"
      },
      {
        "id": 120,
        "kabkot_id": 9,
        "kecamatan": "Lawe Sigala-Gala"
      },
      {
        "id": 121,
        "kabkot_id": 9,
        "kecamatan": "Lawe Sumur"
      },
      {
        "id": 122,
        "kabkot_id": 9,
        "kecamatan": "Leuser"
      },
      {
        "id": 123,
        "kabkot_id": 9,
        "kecamatan": "Semadam"
      },
      {
        "id": 124,
        "kabkot_id": 9,
        "kecamatan": "Tanah Alas"
      },
      {
        "id": 125,
        "kabkot_id": 10,
        "kecamatan": "Banda Alam"
      },
      {
        "id": 126,
        "kabkot_id": 10,
        "kecamatan": "Birem Bayeun"
      },
      {
        "id": 127,
        "kabkot_id": 10,
        "kecamatan": "Darul Aman"
      },
      {
        "id": 128,
        "kabkot_id": 10,
        "kecamatan": "Darul Falah"
      },
      {
        "id": 129,
        "kabkot_id": 10,
        "kecamatan": "Darul Iksan (Ihsan)"
      },
      {
        "id": 130,
        "kabkot_id": 10,
        "kecamatan": "Idi Rayeuk"
      },
      {
        "id": 131,
        "kabkot_id": 10,
        "kecamatan": "Idi Timur"
      },
      {
        "id": 132,
        "kabkot_id": 10,
        "kecamatan": "Idi Tunong"
      },
      {
        "id": 133,
        "kabkot_id": 10,
        "kecamatan": "Indra Makmur"
      },
      {
        "id": 134,
        "kabkot_id": 10,
        "kecamatan": "Julok"
      },
      {
        "id": 135,
        "kabkot_id": 10,
        "kecamatan": "Madat"
      },
      {
        "id": 136,
        "kabkot_id": 10,
        "kecamatan": "Nurussalam"
      },
      {
        "id": 137,
        "kabkot_id": 10,
        "kecamatan": "Pante Bidari"
      },
      {
        "id": 138,
        "kabkot_id": 10,
        "kecamatan": "Peudawa"
      },
      {
        "id": 139,
        "kabkot_id": 10,
        "kecamatan": "Peunaron"
      },
      {
        "id": 140,
        "kabkot_id": 10,
        "kecamatan": "Peureulak"
      },
      {
        "id": 141,
        "kabkot_id": 10,
        "kecamatan": "Peureulak Barat"
      },
      {
        "id": 142,
        "kabkot_id": 10,
        "kecamatan": "Peureulak Timur"
      },
      {
        "id": 143,
        "kabkot_id": 10,
        "kecamatan": "Rantau Selamat"
      },
      {
        "id": 144,
        "kabkot_id": 10,
        "kecamatan": "Ranto Peureulak"
      },
      {
        "id": 145,
        "kabkot_id": 10,
        "kecamatan": "Serbajadi"
      },
      {
        "id": 146,
        "kabkot_id": 10,
        "kecamatan": "Simpang Jernih"
      },
      {
        "id": 147,
        "kabkot_id": 10,
        "kecamatan": "Simpang Ulim"
      },
      {
        "id": 148,
        "kabkot_id": 10,
        "kecamatan": "Sungai Raya"
      },
      {
        "id": 149,
        "kabkot_id": 11,
        "kecamatan": "Baktiya"
      },
      {
        "id": 150,
        "kabkot_id": 11,
        "kecamatan": "Baktiya Barat"
      },
      {
        "id": 151,
        "kabkot_id": 11,
        "kecamatan": "Banda Baro"
      },
      {
        "id": 152,
        "kabkot_id": 11,
        "kecamatan": "Cot Girek"
      },
      {
        "id": 153,
        "kabkot_id": 11,
        "kecamatan": "Dewantara"
      },
      {
        "id": 154,
        "kabkot_id": 11,
        "kecamatan": "Geuredong Pase"
      },
      {
        "id": 155,
        "kabkot_id": 11,
        "kecamatan": "Kuta Makmur"
      },
      {
        "id": 156,
        "kabkot_id": 11,
        "kecamatan": "Langkahan"
      },
      {
        "id": 157,
        "kabkot_id": 11,
        "kecamatan": "Lapang"
      },
      {
        "id": 158,
        "kabkot_id": 11,
        "kecamatan": "Lhoksukon"
      },
      {
        "id": 159,
        "kabkot_id": 11,
        "kecamatan": "Matangkuli"
      },
      {
        "id": 160,
        "kabkot_id": 11,
        "kecamatan": "Meurah Mulia"
      },
      {
        "id": 161,
        "kabkot_id": 11,
        "kecamatan": "Muara Batu"
      },
      {
        "id": 162,
        "kabkot_id": 11,
        "kecamatan": "Nibong"
      },
      {
        "id": 163,
        "kabkot_id": 11,
        "kecamatan": "Nisam"
      },
      {
        "id": 164,
        "kabkot_id": 11,
        "kecamatan": "Nisam Antara"
      },
      {
        "id": 165,
        "kabkot_id": 11,
        "kecamatan": "Paya Bakong"
      },
      {
        "id": 166,
        "kabkot_id": 11,
        "kecamatan": "Pirak Timur"
      },
      {
        "id": 167,
        "kabkot_id": 11,
        "kecamatan": "Samudera"
      },
      {
        "id": 168,
        "kabkot_id": 11,
        "kecamatan": "Sawang"
      },
      {
        "id": 169,
        "kabkot_id": 11,
        "kecamatan": "Seunuddon (Seunudon)"
      },
      {
        "id": 170,
        "kabkot_id": 11,
        "kecamatan": "Simpang Kramat (Keramat)"
      },
      {
        "id": 171,
        "kabkot_id": 11,
        "kecamatan": "Syamtalira Aron"
      },
      {
        "id": 172,
        "kabkot_id": 11,
        "kecamatan": "Syamtalira Bayu"
      },
      {
        "id": 173,
        "kabkot_id": 11,
        "kecamatan": "Tanah Jambo Aye"
      },
      {
        "id": 174,
        "kabkot_id": 11,
        "kecamatan": "Tanah Luas"
      },
      {
        "id": 175,
        "kabkot_id": 11,
        "kecamatan": "Tanah Pasir"
      },
      {
        "id": 176,
        "kabkot_id": 12,
        "kecamatan": "Bandar"
      },
      {
        "id": 177,
        "kabkot_id": 12,
        "kecamatan": "Bener Kelipah"
      },
      {
        "id": 178,
        "kabkot_id": 12,
        "kecamatan": "Bukit"
      },
      {
        "id": 179,
        "kabkot_id": 12,
        "kecamatan": "Gajah Putih"
      },
      {
        "id": 180,
        "kabkot_id": 12,
        "kecamatan": "Mesidah"
      },
      {
        "id": 181,
        "kabkot_id": 12,
        "kecamatan": "Permata"
      },
      {
        "id": 182,
        "kabkot_id": 12,
        "kecamatan": "Pintu Rime Gayo"
      },
      {
        "id": 183,
        "kabkot_id": 12,
        "kecamatan": "Syiah Utama"
      },
      {
        "id": 184,
        "kabkot_id": 12,
        "kecamatan": "Timang Gajah"
      },
      {
        "id": 185,
        "kabkot_id": 12,
        "kecamatan": "Wih Pesam"
      },
      {
        "id": 186,
        "kabkot_id": 13,
        "kecamatan": "Ganda Pura"
      },
      {
        "id": 187,
        "kabkot_id": 13,
        "kecamatan": "Jangka"
      },
      {
        "id": 188,
        "kabkot_id": 13,
        "kecamatan": "Jeumpa"
      },
      {
        "id": 189,
        "kabkot_id": 13,
        "kecamatan": "Jeunieb"
      },
      {
        "id": 190,
        "kabkot_id": 13,
        "kecamatan": "Juli"
      },
      {
        "id": 191,
        "kabkot_id": 13,
        "kecamatan": "Kota Juang"
      },
      {
        "id": 192,
        "kabkot_id": 13,
        "kecamatan": "Kuala"
      },
      {
        "id": 193,
        "kabkot_id": 13,
        "kecamatan": "Kuta Blang"
      },
      {
        "id": 194,
        "kabkot_id": 13,
        "kecamatan": "Makmur"
      },
      {
        "id": 195,
        "kabkot_id": 13,
        "kecamatan": "Pandrah"
      },
      {
        "id": 196,
        "kabkot_id": 13,
        "kecamatan": "Peudada"
      },
      {
        "id": 197,
        "kabkot_id": 13,
        "kecamatan": "Peulimbang (Plimbang)"
      },
      {
        "id": 198,
        "kabkot_id": 13,
        "kecamatan": "Peusangan"
      },
      {
        "id": 199,
        "kabkot_id": 13,
        "kecamatan": "Peusangan Selatan"
      },
      {
        "id": 200,
        "kabkot_id": 13,
        "kecamatan": "Peusangan Siblah Krueng"
      },
      {
        "id": 201,
        "kabkot_id": 13,
        "kecamatan": "Samalanga"
      },
      {
        "id": 202,
        "kabkot_id": 13,
        "kecamatan": "Simpang Mamplam"
      },
      {
        "id": 203,
        "kabkot_id": 14,
        "kecamatan": "Blang Jerango"
      },
      {
        "id": 204,
        "kabkot_id": 14,
        "kecamatan": "Blang Kejeren"
      },
      {
        "id": 205,
        "kabkot_id": 14,
        "kecamatan": "Blang Pegayon"
      },
      {
        "id": 206,
        "kabkot_id": 14,
        "kecamatan": "Dabun Gelang (Debun Gelang)"
      },
      {
        "id": 207,
        "kabkot_id": 14,
        "kecamatan": "Kuta Panjang"
      },
      {
        "id": 208,
        "kabkot_id": 14,
        "kecamatan": "Pantan Cuaca"
      },
      {
        "id": 209,
        "kabkot_id": 14,
        "kecamatan": "Pining (Pinding)"
      },
      {
        "id": 210,
        "kabkot_id": 14,
        "kecamatan": "Putri Betung"
      },
      {
        "id": 211,
        "kabkot_id": 14,
        "kecamatan": "Rikit Gaib"
      },
      {
        "id": 212,
        "kabkot_id": 14,
        "kecamatan": "Terangun (Terangon)"
      },
      {
        "id": 213,
        "kabkot_id": 14,
        "kecamatan": "Teripe/Tripe Jaya"
      },
      {
        "id": 214,
        "kabkot_id": 15,
        "kecamatan": "Beutong"
      },
      {
        "id": 215,
        "kabkot_id": 15,
        "kecamatan": "Beutong Ateuh Banggalang"
      },
      {
        "id": 216,
        "kabkot_id": 15,
        "kecamatan": "Darul Makmur"
      },
      {
        "id": 217,
        "kabkot_id": 15,
        "kecamatan": "Kuala"
      },
      {
        "id": 218,
        "kabkot_id": 15,
        "kecamatan": "Kuala Pesisir"
      },
      {
        "id": 219,
        "kabkot_id": 15,
        "kecamatan": "Seunagan"
      },
      {
        "id": 220,
        "kabkot_id": 15,
        "kecamatan": "Seunagan Timur"
      },
      {
        "id": 221,
        "kabkot_id": 15,
        "kecamatan": "Suka Makmue"
      },
      {
        "id": 222,
        "kabkot_id": 15,
        "kecamatan": "Tadu Raya"
      },
      {
        "id": 223,
        "kabkot_id": 15,
        "kecamatan": "Tripa Makmur"
      },
      {
        "id": 224,
        "kabkot_id": 16,
        "kecamatan": "Batee"
      },
      {
        "id": 225,
        "kabkot_id": 16,
        "kecamatan": "Delima"
      },
      {
        "id": 226,
        "kabkot_id": 16,
        "kecamatan": "Geumpang"
      },
      {
        "id": 227,
        "kabkot_id": 16,
        "kecamatan": "Glumpang Baro"
      },
      {
        "id": 228,
        "kabkot_id": 16,
        "kecamatan": "Glumpang Tiga (Geulumpang Tiga)"
      },
      {
        "id": 229,
        "kabkot_id": 16,
        "kecamatan": "Grong Grong"
      },
      {
        "id": 230,
        "kabkot_id": 16,
        "kecamatan": "Indrajaya"
      },
      {
        "id": 231,
        "kabkot_id": 16,
        "kecamatan": "Kembang Tanjong"
      },
      {
        "id": 232,
        "kabkot_id": 16,
        "kecamatan": "Keumala"
      },
      {
        "id": 233,
        "kabkot_id": 16,
        "kecamatan": "Kota Sigli"
      },
      {
        "id": 234,
        "kabkot_id": 16,
        "kecamatan": "Mane"
      },
      {
        "id": 235,
        "kabkot_id": 16,
        "kecamatan": "Mila"
      },
      {
        "id": 236,
        "kabkot_id": 16,
        "kecamatan": "Muara Tiga"
      },
      {
        "id": 237,
        "kabkot_id": 16,
        "kecamatan": "Mutiara"
      },
      {
        "id": 238,
        "kabkot_id": 16,
        "kecamatan": "Mutiara Timur"
      },
      {
        "id": 239,
        "kabkot_id": 16,
        "kecamatan": "Padang Tiji"
      },
      {
        "id": 240,
        "kabkot_id": 16,
        "kecamatan": "Peukan Baro"
      },
      {
        "id": 241,
        "kabkot_id": 16,
        "kecamatan": "Pidie"
      },
      {
        "id": 242,
        "kabkot_id": 16,
        "kecamatan": "Sakti"
      },
      {
        "id": 243,
        "kabkot_id": 16,
        "kecamatan": "Simpang Tiga"
      },
      {
        "id": 244,
        "kabkot_id": 16,
        "kecamatan": "Tangse"
      },
      {
        "id": 245,
        "kabkot_id": 16,
        "kecamatan": "Tiro/Truseb"
      },
      {
        "id": 246,
        "kabkot_id": 16,
        "kecamatan": "Titeue"
      },
      {
        "id": 247,
        "kabkot_id": 17,
        "kecamatan": "Bandar Baru"
      },
      {
        "id": 248,
        "kabkot_id": 17,
        "kecamatan": "Bandar Dua"
      },
      {
        "id": 249,
        "kabkot_id": 17,
        "kecamatan": "Jangka Buya"
      },
      {
        "id": 250,
        "kabkot_id": 17,
        "kecamatan": "Meurah Dua"
      },
      {
        "id": 251,
        "kabkot_id": 17,
        "kecamatan": "Meureudu"
      },
      {
        "id": 252,
        "kabkot_id": 17,
        "kecamatan": "Panteraja"
      },
      {
        "id": 253,
        "kabkot_id": 17,
        "kecamatan": "Trienggadeng"
      },
      {
        "id": 254,
        "kabkot_id": 17,
        "kecamatan": "Ulim"
      },
      {
        "id": 255,
        "kabkot_id": 18,
        "kecamatan": "Alapan (Alafan)"
      },
      {
        "id": 256,
        "kabkot_id": 18,
        "kecamatan": "Salang"
      },
      {
        "id": 257,
        "kabkot_id": 18,
        "kecamatan": "Simeuleu Barat"
      },
      {
        "id": 258,
        "kabkot_id": 18,
        "kecamatan": "Simeuleu Tengah"
      },
      {
        "id": 259,
        "kabkot_id": 18,
        "kecamatan": "Simeuleu Timur"
      },
      {
        "id": 260,
        "kabkot_id": 18,
        "kecamatan": "Simeulue Cut"
      },
      {
        "id": 261,
        "kabkot_id": 18,
        "kecamatan": "Teluk Dalam"
      },
      {
        "id": 262,
        "kabkot_id": 18,
        "kecamatan": "Teupah Barat"
      },
      {
        "id": 263,
        "kabkot_id": 18,
        "kecamatan": "Teupah Selatan"
      },
      {
        "id": 264,
        "kabkot_id": 18,
        "kecamatan": "Teupah Tengah"
      },
      {
        "id": 265,
        "kabkot_id": 19,
        "kecamatan": "Baiturrahman"
      },
      {
        "id": 266,
        "kabkot_id": 19,
        "kecamatan": "Banda Raya"
      },
      {
        "id": 267,
        "kabkot_id": 19,
        "kecamatan": "Jaya Baru"
      },
      {
        "id": 268,
        "kabkot_id": 19,
        "kecamatan": "Kuta Alam"
      },
      {
        "id": 269,
        "kabkot_id": 19,
        "kecamatan": "Kuta Raja"
      },
      {
        "id": 270,
        "kabkot_id": 19,
        "kecamatan": "Lueng Bata"
      },
      {
        "id": 271,
        "kabkot_id": 19,
        "kecamatan": "Meuraxa"
      },
      {
        "id": 272,
        "kabkot_id": 19,
        "kecamatan": "Syiah Kuala"
      },
      {
        "id": 273,
        "kabkot_id": 19,
        "kecamatan": "Ulee Kareng"
      },
      {
        "id": 274,
        "kabkot_id": 20,
        "kecamatan": "Langsa Barat"
      },
      {
        "id": 275,
        "kabkot_id": 20,
        "kecamatan": "Langsa Baro"
      },
      {
        "id": 276,
        "kabkot_id": 20,
        "kecamatan": "Langsa Kota"
      },
      {
        "id": 277,
        "kabkot_id": 20,
        "kecamatan": "Langsa Lama"
      },
      {
        "id": 278,
        "kabkot_id": 20,
        "kecamatan": "Langsa Timur"
      },
      {
        "id": 279,
        "kabkot_id": 21,
        "kecamatan": "Banda Sakti"
      },
      {
        "id": 280,
        "kabkot_id": 21,
        "kecamatan": "Blang Mangat"
      },
      {
        "id": 281,
        "kabkot_id": 21,
        "kecamatan": "Muara Dua"
      },
      {
        "id": 282,
        "kabkot_id": 21,
        "kecamatan": "Muara Satu"
      },
      {
        "id": 283,
        "kabkot_id": 22,
        "kecamatan": "Sukajaya"
      },
      {
        "id": 284,
        "kabkot_id": 22,
        "kecamatan": "Sukakarya"
      },
      {
        "id": 285,
        "kabkot_id": 23,
        "kecamatan": "Longkib"
      },
      {
        "id": 286,
        "kabkot_id": 23,
        "kecamatan": "Penanggalan"
      },
      {
        "id": 287,
        "kabkot_id": 23,
        "kecamatan": "Rundeng"
      },
      {
        "id": 288,
        "kabkot_id": 23,
        "kecamatan": "Simpang Kiri"
      },
      {
        "id": 289,
        "kabkot_id": 23,
        "kecamatan": "Sultan Daulat"
      },
      {
        "id": 290,
        "kabkot_id": 24,
        "kecamatan": "Aek Kuasan"
      },
      {
        "id": 291,
        "kabkot_id": 24,
        "kecamatan": "Aek Ledong"
      },
      {
        "id": 292,
        "kabkot_id": 24,
        "kecamatan": "Aek Songsongan"
      },
      {
        "id": 293,
        "kabkot_id": 24,
        "kecamatan": "Air Batu"
      },
      {
        "id": 294,
        "kabkot_id": 24,
        "kecamatan": "Air Joman"
      },
      {
        "id": 295,
        "kabkot_id": 24,
        "kecamatan": "Bandar Pasir Mandoge"
      },
      {
        "id": 296,
        "kabkot_id": 24,
        "kecamatan": "Bandar Pulau"
      },
      {
        "id": 297,
        "kabkot_id": 24,
        "kecamatan": "Buntu Pane"
      },
      {
        "id": 298,
        "kabkot_id": 24,
        "kecamatan": "Kota Kisaran Barat"
      },
      {
        "id": 299,
        "kabkot_id": 24,
        "kecamatan": "Kota Kisaran Timur"
      },
      {
        "id": 300,
        "kabkot_id": 24,
        "kecamatan": "Meranti"
      },
      {
        "id": 301,
        "kabkot_id": 24,
        "kecamatan": "Pulau Rakyat"
      },
      {
        "id": 302,
        "kabkot_id": 24,
        "kecamatan": "Pulo Bandring"
      },
      {
        "id": 303,
        "kabkot_id": 24,
        "kecamatan": "Rahuning"
      },
      {
        "id": 304,
        "kabkot_id": 24,
        "kecamatan": "Rawang Panca Arga"
      },
      {
        "id": 305,
        "kabkot_id": 24,
        "kecamatan": "Sei Dadap"
      },
      {
        "id": 306,
        "kabkot_id": 24,
        "kecamatan": "Sei Kepayang"
      },
      {
        "id": 307,
        "kabkot_id": 24,
        "kecamatan": "Sei Kepayang Barat"
      },
      {
        "id": 308,
        "kabkot_id": 24,
        "kecamatan": "Sei Kepayang Timur"
      },
      {
        "id": 309,
        "kabkot_id": 24,
        "kecamatan": "Setia Janji"
      },
      {
        "id": 310,
        "kabkot_id": 24,
        "kecamatan": "Silau Laut"
      },
      {
        "id": 311,
        "kabkot_id": 24,
        "kecamatan": "Simpang Empat"
      },
      {
        "id": 312,
        "kabkot_id": 24,
        "kecamatan": "Tanjung Balai"
      },
      {
        "id": 313,
        "kabkot_id": 24,
        "kecamatan": "Teluk Dalam"
      },
      {
        "id": 314,
        "kabkot_id": 24,
        "kecamatan": "Tinggi Raja"
      },
      {
        "id": 315,
        "kabkot_id": 25,
        "kecamatan": "Air Putih"
      },
      {
        "id": 316,
        "kabkot_id": 25,
        "kecamatan": "Limapuluh"
      },
      {
        "id": 317,
        "kabkot_id": 25,
        "kecamatan": "Medang Deras"
      },
      {
        "id": 318,
        "kabkot_id": 25,
        "kecamatan": "Sei Balai"
      },
      {
        "id": 319,
        "kabkot_id": 25,
        "kecamatan": "Sei Suka"
      },
      {
        "id": 320,
        "kabkot_id": 25,
        "kecamatan": "Talawi"
      },
      {
        "id": 321,
        "kabkot_id": 25,
        "kecamatan": "Tanjung Tiram"
      },
      {
        "id": 322,
        "kabkot_id": 26,
        "kecamatan": "Berampu (Brampu)"
      },
      {
        "id": 323,
        "kabkot_id": 26,
        "kecamatan": "Gunung Sitember"
      },
      {
        "id": 324,
        "kabkot_id": 26,
        "kecamatan": "Lae Parira"
      },
      {
        "id": 325,
        "kabkot_id": 26,
        "kecamatan": "Parbuluan"
      },
      {
        "id": 326,
        "kabkot_id": 26,
        "kecamatan": "Pegagan Hilir"
      },
      {
        "id": 327,
        "kabkot_id": 26,
        "kecamatan": "Sidikalang"
      },
      {
        "id": 328,
        "kabkot_id": 26,
        "kecamatan": "Siempat Nempu"
      },
      {
        "id": 329,
        "kabkot_id": 26,
        "kecamatan": "Siempat Nempu Hilir"
      },
      {
        "id": 330,
        "kabkot_id": 26,
        "kecamatan": "Siempat Nempu Hulu"
      },
      {
        "id": 331,
        "kabkot_id": 26,
        "kecamatan": "Silahi Sabungan"
      },
      {
        "id": 332,
        "kabkot_id": 26,
        "kecamatan": "Silima Pungga-Pungga"
      },
      {
        "id": 333,
        "kabkot_id": 26,
        "kecamatan": "Sitinjo"
      },
      {
        "id": 334,
        "kabkot_id": 26,
        "kecamatan": "Sumbul"
      },
      {
        "id": 335,
        "kabkot_id": 26,
        "kecamatan": "Tanah Pinem"
      },
      {
        "id": 336,
        "kabkot_id": 26,
        "kecamatan": "Tiga Lingga"
      },
      {
        "id": 337,
        "kabkot_id": 27,
        "kecamatan": "Bangun Purba"
      },
      {
        "id": 338,
        "kabkot_id": 27,
        "kecamatan": "Batang Kuis"
      },
      {
        "id": 339,
        "kabkot_id": 27,
        "kecamatan": "Beringin"
      },
      {
        "id": 340,
        "kabkot_id": 27,
        "kecamatan": "Biru-Biru"
      },
      {
        "id": 341,
        "kabkot_id": 27,
        "kecamatan": "Deli Tua"
      },
      {
        "id": 342,
        "kabkot_id": 27,
        "kecamatan": "Galang"
      },
      {
        "id": 343,
        "kabkot_id": 27,
        "kecamatan": "Gunung Meriah"
      },
      {
        "id": 344,
        "kabkot_id": 27,
        "kecamatan": "Hamparan Perak"
      },
      {
        "id": 345,
        "kabkot_id": 27,
        "kecamatan": "Kutalimbaru"
      },
      {
        "id": 346,
        "kabkot_id": 27,
        "kecamatan": "Labuhan Deli"
      },
      {
        "id": 347,
        "kabkot_id": 27,
        "kecamatan": "Lubuk Pakam"
      },
      {
        "id": 348,
        "kabkot_id": 27,
        "kecamatan": "Namo Rambe"
      },
      {
        "id": 349,
        "kabkot_id": 27,
        "kecamatan": "Pagar Merbau"
      },
      {
        "id": 350,
        "kabkot_id": 27,
        "kecamatan": "Pancur Batu"
      },
      {
        "id": 351,
        "kabkot_id": 27,
        "kecamatan": "Pantai Labu"
      },
      {
        "id": 352,
        "kabkot_id": 27,
        "kecamatan": "Patumbak"
      },
      {
        "id": 353,
        "kabkot_id": 27,
        "kecamatan": "Percut Sei Tuan"
      },
      {
        "id": 354,
        "kabkot_id": 27,
        "kecamatan": "Sibolangit"
      },
      {
        "id": 355,
        "kabkot_id": 27,
        "kecamatan": "Sinembah Tanjung Muda Hilir"
      },
      {
        "id": 356,
        "kabkot_id": 27,
        "kecamatan": "Sinembah Tanjung Muda Hulu"
      },
      {
        "id": 357,
        "kabkot_id": 27,
        "kecamatan": "Sunggal"
      },
      {
        "id": 358,
        "kabkot_id": 27,
        "kecamatan": "Tanjung Morawa"
      },
      {
        "id": 359,
        "kabkot_id": 28,
        "kecamatan": "Bakti Raja"
      },
      {
        "id": 360,
        "kabkot_id": 28,
        "kecamatan": "Dolok Sanggul"
      },
      {
        "id": 361,
        "kabkot_id": 28,
        "kecamatan": "Lintong Nihuta"
      },
      {
        "id": 362,
        "kabkot_id": 28,
        "kecamatan": "Onan Ganjang"
      },
      {
        "id": 363,
        "kabkot_id": 28,
        "kecamatan": "Pakkat"
      },
      {
        "id": 364,
        "kabkot_id": 28,
        "kecamatan": "Paranginan"
      },
      {
        "id": 365,
        "kabkot_id": 28,
        "kecamatan": "Parlilitan"
      },
      {
        "id": 366,
        "kabkot_id": 28,
        "kecamatan": "Pollung"
      },
      {
        "id": 367,
        "kabkot_id": 28,
        "kecamatan": "Sijama Polang"
      },
      {
        "id": 368,
        "kabkot_id": 28,
        "kecamatan": "Tara Bintang"
      },
      {
        "id": 369,
        "kabkot_id": 29,
        "kecamatan": "Barus Jahe"
      },
      {
        "id": 370,
        "kabkot_id": 29,
        "kecamatan": "Brastagi (Berastagi)"
      },
      {
        "id": 371,
        "kabkot_id": 29,
        "kecamatan": "Dolat Rayat"
      },
      {
        "id": 372,
        "kabkot_id": 29,
        "kecamatan": "Juhar"
      },
      {
        "id": 373,
        "kabkot_id": 29,
        "kecamatan": "Kabanjahe"
      },
      {
        "id": 374,
        "kabkot_id": 29,
        "kecamatan": "Kuta Buluh"
      },
      {
        "id": 375,
        "kabkot_id": 29,
        "kecamatan": "Laubaleng"
      },
      {
        "id": 376,
        "kabkot_id": 29,
        "kecamatan": "Mardinding"
      },
      {
        "id": 377,
        "kabkot_id": 29,
        "kecamatan": "Merdeka"
      },
      {
        "id": 378,
        "kabkot_id": 29,
        "kecamatan": "Merek"
      },
      {
        "id": 379,
        "kabkot_id": 29,
        "kecamatan": "Munte"
      },
      {
        "id": 380,
        "kabkot_id": 29,
        "kecamatan": "Nama Teran"
      },
      {
        "id": 381,
        "kabkot_id": 29,
        "kecamatan": "Payung"
      },
      {
        "id": 382,
        "kabkot_id": 29,
        "kecamatan": "Simpang Empat"
      },
      {
        "id": 383,
        "kabkot_id": 29,
        "kecamatan": "Tiga Binanga"
      },
      {
        "id": 384,
        "kabkot_id": 29,
        "kecamatan": "Tiga Panah"
      },
      {
        "id": 385,
        "kabkot_id": 29,
        "kecamatan": "Tiganderket"
      },
      {
        "id": 386,
        "kabkot_id": 30,
        "kecamatan": "Bilah Barat"
      },
      {
        "id": 387,
        "kabkot_id": 30,
        "kecamatan": "Bilah Hilir"
      },
      {
        "id": 388,
        "kabkot_id": 30,
        "kecamatan": "Bilah Hulu"
      },
      {
        "id": 389,
        "kabkot_id": 30,
        "kecamatan": "Panai Hilir"
      },
      {
        "id": 390,
        "kabkot_id": 30,
        "kecamatan": "Panai Hulu"
      },
      {
        "id": 391,
        "kabkot_id": 30,
        "kecamatan": "Panai Tengah"
      },
      {
        "id": 392,
        "kabkot_id": 30,
        "kecamatan": "Pangkatan"
      },
      {
        "id": 393,
        "kabkot_id": 30,
        "kecamatan": "Rantau Selatan"
      },
      {
        "id": 394,
        "kabkot_id": 30,
        "kecamatan": "Rantau Utara"
      },
      {
        "id": 395,
        "kabkot_id": 31,
        "kecamatan": "Kampung Rakyat"
      },
      {
        "id": 396,
        "kabkot_id": 31,
        "kecamatan": "Kota Pinang"
      },
      {
        "id": 397,
        "kabkot_id": 31,
        "kecamatan": "Sei/Sungai Kanan"
      },
      {
        "id": 398,
        "kabkot_id": 31,
        "kecamatan": "Silangkitang"
      },
      {
        "id": 399,
        "kabkot_id": 31,
        "kecamatan": "Torgamba"
      },
      {
        "id": 400,
        "kabkot_id": 32,
        "kecamatan": "Aek Kuo"
      },
      {
        "id": 401,
        "kabkot_id": 32,
        "kecamatan": "Aek Natas"
      },
      {
        "id": 402,
        "kabkot_id": 32,
        "kecamatan": "Kualuh Hilir"
      },
      {
        "id": 403,
        "kabkot_id": 32,
        "kecamatan": "Kualuh Hulu"
      },
      {
        "id": 404,
        "kabkot_id": 32,
        "kecamatan": "Kualuh Leidong"
      },
      {
        "id": 405,
        "kabkot_id": 32,
        "kecamatan": "Kualuh Selatan"
      },
      {
        "id": 406,
        "kabkot_id": 32,
        "kecamatan": "Marbau"
      },
      {
        "id": 407,
        "kabkot_id": 32,
        "kecamatan": "Na IX-X"
      },
      {
        "id": 408,
        "kabkot_id": 33,
        "kecamatan": "Babalan"
      },
      {
        "id": 409,
        "kabkot_id": 33,
        "kecamatan": "Bahorok"
      },
      {
        "id": 410,
        "kabkot_id": 33,
        "kecamatan": "Batang Serangan"
      },
      {
        "id": 411,
        "kabkot_id": 33,
        "kecamatan": "Besitang"
      },
      {
        "id": 412,
        "kabkot_id": 33,
        "kecamatan": "Binjai"
      },
      {
        "id": 413,
        "kabkot_id": 33,
        "kecamatan": "Brandan Barat"
      },
      {
        "id": 414,
        "kabkot_id": 33,
        "kecamatan": "Gebang"
      },
      {
        "id": 415,
        "kabkot_id": 33,
        "kecamatan": "Hinai"
      },
      {
        "id": 416,
        "kabkot_id": 33,
        "kecamatan": "Kuala"
      },
      {
        "id": 417,
        "kabkot_id": 33,
        "kecamatan": "Kutambaru"
      },
      {
        "id": 418,
        "kabkot_id": 33,
        "kecamatan": "Padang Tualang"
      },
      {
        "id": 419,
        "kabkot_id": 33,
        "kecamatan": "Pangkalan Susu"
      },
      {
        "id": 420,
        "kabkot_id": 33,
        "kecamatan": "Pematang Jaya"
      },
      {
        "id": 421,
        "kabkot_id": 33,
        "kecamatan": "Salapian"
      },
      {
        "id": 422,
        "kabkot_id": 33,
        "kecamatan": "Sawit Seberang"
      },
      {
        "id": 423,
        "kabkot_id": 33,
        "kecamatan": "Secanggang"
      },
      {
        "id": 424,
        "kabkot_id": 33,
        "kecamatan": "Sei Binge (Bingai)"
      },
      {
        "id": 425,
        "kabkot_id": 33,
        "kecamatan": "Sei Lepan"
      },
      {
        "id": 426,
        "kabkot_id": 33,
        "kecamatan": "Selesai"
      },
      {
        "id": 427,
        "kabkot_id": 33,
        "kecamatan": "Sirapit (Serapit)"
      },
      {
        "id": 428,
        "kabkot_id": 33,
        "kecamatan": "Stabat"
      },
      {
        "id": 429,
        "kabkot_id": 33,
        "kecamatan": "Tanjungpura"
      },
      {
        "id": 430,
        "kabkot_id": 33,
        "kecamatan": "Wampu"
      },
      {
        "id": 431,
        "kabkot_id": 34,
        "kecamatan": "Batahan"
      },
      {
        "id": 432,
        "kabkot_id": 34,
        "kecamatan": "Batang Natal"
      },
      {
        "id": 433,
        "kabkot_id": 34,
        "kecamatan": "Bukit Malintang"
      },
      {
        "id": 434,
        "kabkot_id": 34,
        "kecamatan": "Huta Bargot"
      },
      {
        "id": 435,
        "kabkot_id": 34,
        "kecamatan": "Kotanopan"
      },
      {
        "id": 436,
        "kabkot_id": 34,
        "kecamatan": "Lembah Sorik Marapi"
      },
      {
        "id": 437,
        "kabkot_id": 34,
        "kecamatan": "Lingga Bayu"
      },
      {
        "id": 438,
        "kabkot_id": 34,
        "kecamatan": "Muara Batang Gadis"
      },
      {
        "id": 439,
        "kabkot_id": 34,
        "kecamatan": "Muara Sipongi"
      },
      {
        "id": 440,
        "kabkot_id": 34,
        "kecamatan": "Naga Juang"
      },
      {
        "id": 441,
        "kabkot_id": 34,
        "kecamatan": "Natal"
      },
      {
        "id": 442,
        "kabkot_id": 34,
        "kecamatan": "Pakantan"
      },
      {
        "id": 443,
        "kabkot_id": 34,
        "kecamatan": "Panyabungan"
      },
      {
        "id": 444,
        "kabkot_id": 34,
        "kecamatan": "Panyabungan Barat"
      },
      {
        "id": 445,
        "kabkot_id": 34,
        "kecamatan": "Panyabungan Selatan"
      },
      {
        "id": 446,
        "kabkot_id": 34,
        "kecamatan": "Panyabungan Timur"
      },
      {
        "id": 447,
        "kabkot_id": 34,
        "kecamatan": "Panyabungan Utara"
      },
      {
        "id": 448,
        "kabkot_id": 34,
        "kecamatan": "Puncak Sorik Marapi"
      },
      {
        "id": 449,
        "kabkot_id": 34,
        "kecamatan": "Ranto Baek"
      },
      {
        "id": 450,
        "kabkot_id": 34,
        "kecamatan": "Siabu"
      },
      {
        "id": 451,
        "kabkot_id": 34,
        "kecamatan": "Sinunukan"
      },
      {
        "id": 452,
        "kabkot_id": 34,
        "kecamatan": "Tambangan"
      },
      {
        "id": 453,
        "kabkot_id": 34,
        "kecamatan": "Ulu Pungkut"
      },
      {
        "id": 454,
        "kabkot_id": 35,
        "kecamatan": "Bawolato"
      },
      {
        "id": 455,
        "kabkot_id": 35,
        "kecamatan": "Botomuzoi"
      },
      {
        "id": 456,
        "kabkot_id": 35,
        "kecamatan": "Gido"
      },
      {
        "id": 457,
        "kabkot_id": 35,
        "kecamatan": "Hili Serangkai (Hilisaranggu)"
      },
      {
        "id": 458,
        "kabkot_id": 35,
        "kecamatan": "Hiliduho"
      },
      {
        "id": 459,
        "kabkot_id": 35,
        "kecamatan": "Idano Gawo"
      },
      {
        "id": 460,
        "kabkot_id": 35,
        "kecamatan": "Ma'u"
      },
      {
        "id": 461,
        "kabkot_id": 35,
        "kecamatan": "Sogae Adu (Sogaeadu)"
      },
      {
        "id": 462,
        "kabkot_id": 35,
        "kecamatan": "Somolo-Molo (Samolo)"
      },
      {
        "id": 463,
        "kabkot_id": 35,
        "kecamatan": "Ulugawo"
      },
      {
        "id": 464,
        "kabkot_id": 36,
        "kecamatan": "Lahomi (Gahori)"
      },
      {
        "id": 465,
        "kabkot_id": 36,
        "kecamatan": "Lolofitu Moi"
      },
      {
        "id": 466,
        "kabkot_id": 36,
        "kecamatan": "Mandrehe"
      },
      {
        "id": 467,
        "kabkot_id": 36,
        "kecamatan": "Mandrehe Barat"
      },
      {
        "id": 468,
        "kabkot_id": 36,
        "kecamatan": "Mandrehe Utara"
      },
      {
        "id": 469,
        "kabkot_id": 36,
        "kecamatan": "Moro'o"
      },
      {
        "id": 470,
        "kabkot_id": 36,
        "kecamatan": "Sirombu"
      },
      {
        "id": 471,
        "kabkot_id": 36,
        "kecamatan": "Ulu Moro'o (Ulu Narwo)"
      },
      {
        "id": 472,
        "kabkot_id": 37,
        "kecamatan": "Amandraya"
      },
      {
        "id": 473,
        "kabkot_id": 37,
        "kecamatan": "Aramo"
      },
      {
        "id": 474,
        "kabkot_id": 37,
        "kecamatan": "Boronadu"
      },
      {
        "id": 475,
        "kabkot_id": 37,
        "kecamatan": "Fanayama"
      },
      {
        "id": 476,
        "kabkot_id": 37,
        "kecamatan": "Gomo"
      },
      {
        "id": 477,
        "kabkot_id": 37,
        "kecamatan": "Hibala"
      },
      {
        "id": 478,
        "kabkot_id": 37,
        "kecamatan": "Hilimegai"
      },
      {
        "id": 479,
        "kabkot_id": 37,
        "kecamatan": "Hilisalawa'ahe (Hilisalawaahe)"
      },
      {
        "id": 480,
        "kabkot_id": 37,
        "kecamatan": "Huruna"
      },
      {
        "id": 481,
        "kabkot_id": 37,
        "kecamatan": "Lahusa"
      },
      {
        "id": 482,
        "kabkot_id": 37,
        "kecamatan": "Lolomatua"
      },
      {
        "id": 483,
        "kabkot_id": 37,
        "kecamatan": "Lolowau"
      },
      {
        "id": 484,
        "kabkot_id": 37,
        "kecamatan": "Maniamolo"
      },
      {
        "id": 485,
        "kabkot_id": 37,
        "kecamatan": "Mazino"
      },
      {
        "id": 486,
        "kabkot_id": 37,
        "kecamatan": "Mazo"
      },
      {
        "id": 487,
        "kabkot_id": 37,
        "kecamatan": "O'o'u (Oou)"
      },
      {
        "id": 488,
        "kabkot_id": 37,
        "kecamatan": "Onohazumba"
      },
      {
        "id": 489,
        "kabkot_id": 37,
        "kecamatan": "Pulau-Pulau Batu"
      },
      {
        "id": 490,
        "kabkot_id": 37,
        "kecamatan": "Pulau-Pulau Batu Barat"
      },
      {
        "id": 491,
        "kabkot_id": 37,
        "kecamatan": "Pulau-Pulau Batu Timur"
      },
      {
        "id": 492,
        "kabkot_id": 37,
        "kecamatan": "Pulau-Pulau Batu Utara"
      },
      {
        "id": 493,
        "kabkot_id": 37,
        "kecamatan": "Sidua'ori"
      },
      {
        "id": 494,
        "kabkot_id": 37,
        "kecamatan": "Simuk"
      },
      {
        "id": 495,
        "kabkot_id": 37,
        "kecamatan": "Somambawa"
      },
      {
        "id": 496,
        "kabkot_id": 37,
        "kecamatan": "Susua"
      },
      {
        "id": 497,
        "kabkot_id": 37,
        "kecamatan": "Tanah Masa"
      },
      {
        "id": 498,
        "kabkot_id": 37,
        "kecamatan": "Teluk Dalam"
      },
      {
        "id": 499,
        "kabkot_id": 37,
        "kecamatan": "Toma"
      },
      {
        "id": 500,
        "kabkot_id": 37,
        "kecamatan": "Ulunoyo"
      },
      {
        "id": 501,
        "kabkot_id": 37,
        "kecamatan": "Ulususua"
      },
      {
        "id": 502,
        "kabkot_id": 37,
        "kecamatan": "Umbunasi"
      },
      {
        "id": 503,
        "kabkot_id": 38,
        "kecamatan": "Afulu"
      },
      {
        "id": 504,
        "kabkot_id": 38,
        "kecamatan": "Alasa"
      },
      {
        "id": 505,
        "kabkot_id": 38,
        "kecamatan": "Alasa Talumuzoi"
      },
      {
        "id": 506,
        "kabkot_id": 38,
        "kecamatan": "Lahewa"
      },
      {
        "id": 507,
        "kabkot_id": 38,
        "kecamatan": "Lahewa Timur"
      },
      {
        "id": 508,
        "kabkot_id": 38,
        "kecamatan": "Lotu"
      },
      {
        "id": 509,
        "kabkot_id": 38,
        "kecamatan": "Namohalu Esiwa"
      },
      {
        "id": 510,
        "kabkot_id": 38,
        "kecamatan": "Sawo"
      },
      {
        "id": 511,
        "kabkot_id": 38,
        "kecamatan": "Sitolu Ori"
      },
      {
        "id": 512,
        "kabkot_id": 38,
        "kecamatan": "Tugala Oyo"
      },
      {
        "id": 513,
        "kabkot_id": 38,
        "kecamatan": "Tuhemberua"
      },
      {
        "id": 514,
        "kabkot_id": 39,
        "kecamatan": "Aek Nabara Barumun"
      },
      {
        "id": 515,
        "kabkot_id": 39,
        "kecamatan": "Barumun"
      },
      {
        "id": 516,
        "kabkot_id": 39,
        "kecamatan": "Barumun Selatan"
      },
      {
        "id": 517,
        "kabkot_id": 39,
        "kecamatan": "Barumun Tengah"
      },
      {
        "id": 518,
        "kabkot_id": 39,
        "kecamatan": "Batang Lubu Sutam"
      },
      {
        "id": 519,
        "kabkot_id": 39,
        "kecamatan": "Huristak"
      },
      {
        "id": 520,
        "kabkot_id": 39,
        "kecamatan": "Huta Raja Tinggi"
      },
      {
        "id": 521,
        "kabkot_id": 39,
        "kecamatan": "Lubuk Barumun"
      },
      {
        "id": 522,
        "kabkot_id": 39,
        "kecamatan": "Sihapas Barumun"
      },
      {
        "id": 523,
        "kabkot_id": 39,
        "kecamatan": "Sosa"
      },
      {
        "id": 524,
        "kabkot_id": 39,
        "kecamatan": "Sosopan"
      },
      {
        "id": 525,
        "kabkot_id": 39,
        "kecamatan": "Ulu Barumun"
      },
      {
        "id": 526,
        "kabkot_id": 40,
        "kecamatan": "Batang Onang"
      },
      {
        "id": 527,
        "kabkot_id": 40,
        "kecamatan": "Dolok"
      },
      {
        "id": 528,
        "kabkot_id": 40,
        "kecamatan": "Dolok Sigompulon"
      },
      {
        "id": 529,
        "kabkot_id": 40,
        "kecamatan": "Halongonan"
      },
      {
        "id": 530,
        "kabkot_id": 40,
        "kecamatan": "Hulu Sihapas"
      },
      {
        "id": 531,
        "kabkot_id": 40,
        "kecamatan": "Padang Bolak"
      },
      {
        "id": 532,
        "kabkot_id": 40,
        "kecamatan": "Padang Bolak Julu"
      },
      {
        "id": 533,
        "kabkot_id": 40,
        "kecamatan": "Portibi"
      },
      {
        "id": 534,
        "kabkot_id": 40,
        "kecamatan": "Simangambat"
      },
      {
        "id": 535,
        "kabkot_id": 41,
        "kecamatan": "Kerajaan"
      },
      {
        "id": 536,
        "kabkot_id": 41,
        "kecamatan": "Pagindar"
      },
      {
        "id": 537,
        "kabkot_id": 41,
        "kecamatan": "Pergetteng Getteng Sengkut"
      },
      {
        "id": 538,
        "kabkot_id": 41,
        "kecamatan": "Salak"
      },
      {
        "id": 539,
        "kabkot_id": 41,
        "kecamatan": "Siempat Rube"
      },
      {
        "id": 540,
        "kabkot_id": 41,
        "kecamatan": "Sitellu Tali Urang Jehe"
      },
      {
        "id": 541,
        "kabkot_id": 41,
        "kecamatan": "Sitellu Tali Urang Julu"
      },
      {
        "id": 542,
        "kabkot_id": 41,
        "kecamatan": "Tinada"
      },
      {
        "id": 543,
        "kabkot_id": 42,
        "kecamatan": "Harian"
      },
      {
        "id": 544,
        "kabkot_id": 42,
        "kecamatan": "Nainggolan"
      },
      {
        "id": 545,
        "kabkot_id": 42,
        "kecamatan": "Onan Runggu"
      },
      {
        "id": 546,
        "kabkot_id": 42,
        "kecamatan": "Palipi"
      },
      {
        "id": 547,
        "kabkot_id": 42,
        "kecamatan": "Pangururan"
      },
      {
        "id": 548,
        "kabkot_id": 42,
        "kecamatan": "Ronggur Nihuta"
      },
      {
        "id": 549,
        "kabkot_id": 42,
        "kecamatan": "Sianjur Mula Mula"
      },
      {
        "id": 550,
        "kabkot_id": 42,
        "kecamatan": "Simanindo"
      },
      {
        "id": 551,
        "kabkot_id": 42,
        "kecamatan": "Sitio-tio"
      },
      {
        "id": 552,
        "kabkot_id": 43,
        "kecamatan": "Bandar Khalifah"
      },
      {
        "id": 553,
        "kabkot_id": 43,
        "kecamatan": "Bintang Bayu"
      },
      {
        "id": 554,
        "kabkot_id": 43,
        "kecamatan": "Dolok Masihul"
      },
      {
        "id": 555,
        "kabkot_id": 43,
        "kecamatan": "Dolok Merawan"
      },
      {
        "id": 556,
        "kabkot_id": 43,
        "kecamatan": "Kotarih"
      },
      {
        "id": 557,
        "kabkot_id": 43,
        "kecamatan": "Pantai Cermin"
      },
      {
        "id": 558,
        "kabkot_id": 43,
        "kecamatan": "Pegajahan"
      },
      {
        "id": 559,
        "kabkot_id": 43,
        "kecamatan": "Perbaungan"
      },
      {
        "id": 560,
        "kabkot_id": 43,
        "kecamatan": "Sei Bamban"
      },
      {
        "id": 561,
        "kabkot_id": 43,
        "kecamatan": "Sei Rampah"
      },
      {
        "id": 562,
        "kabkot_id": 43,
        "kecamatan": "Serba Jadi"
      },
      {
        "id": 563,
        "kabkot_id": 43,
        "kecamatan": "Silinda"
      },
      {
        "id": 564,
        "kabkot_id": 43,
        "kecamatan": "Sipispis"
      },
      {
        "id": 565,
        "kabkot_id": 43,
        "kecamatan": "Tanjung Beringin"
      },
      {
        "id": 566,
        "kabkot_id": 43,
        "kecamatan": "Tebing Syahbandar"
      },
      {
        "id": 567,
        "kabkot_id": 43,
        "kecamatan": "Tebing Tinggi"
      },
      {
        "id": 568,
        "kabkot_id": 43,
        "kecamatan": "Teluk Mengkudu"
      },
      {
        "id": 569,
        "kabkot_id": 44,
        "kecamatan": "Bandar"
      },
      {
        "id": 570,
        "kabkot_id": 44,
        "kecamatan": "Bandar Huluan"
      },
      {
        "id": 571,
        "kabkot_id": 44,
        "kecamatan": "Bandar Masilam"
      },
      {
        "id": 572,
        "kabkot_id": 44,
        "kecamatan": "Bosar Maligas"
      },
      {
        "id": 573,
        "kabkot_id": 44,
        "kecamatan": "Dolok Batu Nanggar"
      },
      {
        "id": 574,
        "kabkot_id": 44,
        "kecamatan": "Dolok Panribuan"
      },
      {
        "id": 575,
        "kabkot_id": 44,
        "kecamatan": "Dolok Pardamean"
      },
      {
        "id": 576,
        "kabkot_id": 44,
        "kecamatan": "Dolok Silau"
      },
      {
        "id": 577,
        "kabkot_id": 44,
        "kecamatan": "Girsang Sipangan Bolon"
      },
      {
        "id": 578,
        "kabkot_id": 44,
        "kecamatan": "Gunung Malela"
      },
      {
        "id": 579,
        "kabkot_id": 44,
        "kecamatan": "Gunung Maligas"
      },
      {
        "id": 580,
        "kabkot_id": 44,
        "kecamatan": "Haranggaol Horison"
      },
      {
        "id": 581,
        "kabkot_id": 44,
        "kecamatan": "Hatonduhan"
      },
      {
        "id": 582,
        "kabkot_id": 44,
        "kecamatan": "Huta Bayu Raja"
      },
      {
        "id": 583,
        "kabkot_id": 44,
        "kecamatan": "Jawa Maraja Bah Jambi"
      },
      {
        "id": 584,
        "kabkot_id": 44,
        "kecamatan": "Jorlang Hataran"
      },
      {
        "id": 585,
        "kabkot_id": 44,
        "kecamatan": "Panei"
      },
      {
        "id": 586,
        "kabkot_id": 44,
        "kecamatan": "Panombeian Panei"
      },
      {
        "id": 587,
        "kabkot_id": 44,
        "kecamatan": "Pematang Bandar"
      },
      {
        "id": 588,
        "kabkot_id": 44,
        "kecamatan": "Pematang Sidamanik"
      },
      {
        "id": 589,
        "kabkot_id": 44,
        "kecamatan": "Pematang Silima Huta"
      },
      {
        "id": 590,
        "kabkot_id": 44,
        "kecamatan": "Purba"
      },
      {
        "id": 591,
        "kabkot_id": 44,
        "kecamatan": "Raya"
      },
      {
        "id": 592,
        "kabkot_id": 44,
        "kecamatan": "Raya Kahean"
      },
      {
        "id": 593,
        "kabkot_id": 44,
        "kecamatan": "Siantar"
      },
      {
        "id": 594,
        "kabkot_id": 44,
        "kecamatan": "Sidamanik"
      },
      {
        "id": 595,
        "kabkot_id": 44,
        "kecamatan": "Silimakuta"
      },
      {
        "id": 596,
        "kabkot_id": 44,
        "kecamatan": "Silou Kahean"
      },
      {
        "id": 597,
        "kabkot_id": 44,
        "kecamatan": "Tanah Jawa"
      },
      {
        "id": 598,
        "kabkot_id": 44,
        "kecamatan": "Tapian Dolok"
      },
      {
        "id": 599,
        "kabkot_id": 44,
        "kecamatan": "Ujung Padang"
      },
      {
        "id": 600,
        "kabkot_id": 45,
        "kecamatan": "Aek Bilah"
      },
      {
        "id": 601,
        "kabkot_id": 45,
        "kecamatan": "Angkola Barat"
      },
      {
        "id": 602,
        "kabkot_id": 45,
        "kecamatan": "Angkola Sangkunur"
      },
      {
        "id": 603,
        "kabkot_id": 45,
        "kecamatan": "Angkola Selatan"
      },
      {
        "id": 604,
        "kabkot_id": 45,
        "kecamatan": "Angkola Timur"
      },
      {
        "id": 605,
        "kabkot_id": 45,
        "kecamatan": "Arse"
      },
      {
        "id": 606,
        "kabkot_id": 45,
        "kecamatan": "Batang Angkola"
      },
      {
        "id": 607,
        "kabkot_id": 45,
        "kecamatan": "Batang Toru"
      },
      {
        "id": 608,
        "kabkot_id": 45,
        "kecamatan": "Marancar"
      },
      {
        "id": 609,
        "kabkot_id": 45,
        "kecamatan": "Muara Batang Toru"
      },
      {
        "id": 610,
        "kabkot_id": 45,
        "kecamatan": "Saipar Dolok Hole"
      },
      {
        "id": 611,
        "kabkot_id": 45,
        "kecamatan": "Sayur Matinggi"
      },
      {
        "id": 612,
        "kabkot_id": 45,
        "kecamatan": "Sipirok"
      },
      {
        "id": 613,
        "kabkot_id": 45,
        "kecamatan": "Tano Tombangan Angkola"
      },
      {
        "id": 614,
        "kabkot_id": 46,
        "kecamatan": "Andam Dewi"
      },
      {
        "id": 615,
        "kabkot_id": 46,
        "kecamatan": "Badiri"
      },
      {
        "id": 616,
        "kabkot_id": 46,
        "kecamatan": "Barus"
      },
      {
        "id": 617,
        "kabkot_id": 46,
        "kecamatan": "Barus Utara"
      },
      {
        "id": 618,
        "kabkot_id": 46,
        "kecamatan": "Kolang"
      },
      {
        "id": 619,
        "kabkot_id": 46,
        "kecamatan": "Lumut"
      },
      {
        "id": 620,
        "kabkot_id": 46,
        "kecamatan": "Manduamas"
      },
      {
        "id": 621,
        "kabkot_id": 46,
        "kecamatan": "Pandan"
      },
      {
        "id": 622,
        "kabkot_id": 46,
        "kecamatan": "Pasaribu Tobing"
      },
      {
        "id": 623,
        "kabkot_id": 46,
        "kecamatan": "Pinangsori"
      },
      {
        "id": 624,
        "kabkot_id": 46,
        "kecamatan": "Sarudik"
      },
      {
        "id": 625,
        "kabkot_id": 46,
        "kecamatan": "Sibabangun"
      },
      {
        "id": 626,
        "kabkot_id": 46,
        "kecamatan": "Sirandorung"
      },
      {
        "id": 627,
        "kabkot_id": 46,
        "kecamatan": "Sitahuis"
      },
      {
        "id": 628,
        "kabkot_id": 46,
        "kecamatan": "Sorkam"
      },
      {
        "id": 629,
        "kabkot_id": 46,
        "kecamatan": "Sorkam Barat"
      },
      {
        "id": 630,
        "kabkot_id": 46,
        "kecamatan": "Sosor Gadong"
      },
      {
        "id": 631,
        "kabkot_id": 46,
        "kecamatan": "Suka Bangun"
      },
      {
        "id": 632,
        "kabkot_id": 46,
        "kecamatan": "Tapian Nauli"
      },
      {
        "id": 633,
        "kabkot_id": 46,
        "kecamatan": "Tukka"
      },
      {
        "id": 634,
        "kabkot_id": 47,
        "kecamatan": "Adian Koting"
      },
      {
        "id": 635,
        "kabkot_id": 47,
        "kecamatan": "Garoga"
      },
      {
        "id": 636,
        "kabkot_id": 47,
        "kecamatan": "Muara"
      },
      {
        "id": 637,
        "kabkot_id": 47,
        "kecamatan": "Pagaran"
      },
      {
        "id": 638,
        "kabkot_id": 47,
        "kecamatan": "Pahae Jae"
      },
      {
        "id": 639,
        "kabkot_id": 47,
        "kecamatan": "Pahae Julu"
      },
      {
        "id": 640,
        "kabkot_id": 47,
        "kecamatan": "Pangaribuan"
      },
      {
        "id": 641,
        "kabkot_id": 47,
        "kecamatan": "Parmonangan"
      },
      {
        "id": 642,
        "kabkot_id": 47,
        "kecamatan": "Purbatua"
      },
      {
        "id": 643,
        "kabkot_id": 47,
        "kecamatan": "Siatas Barita"
      },
      {
        "id": 644,
        "kabkot_id": 47,
        "kecamatan": "Siborong-Borong"
      },
      {
        "id": 645,
        "kabkot_id": 47,
        "kecamatan": "Simangumban"
      },
      {
        "id": 646,
        "kabkot_id": 47,
        "kecamatan": "Sipahutar"
      },
      {
        "id": 647,
        "kabkot_id": 47,
        "kecamatan": "Sipoholon"
      },
      {
        "id": 648,
        "kabkot_id": 47,
        "kecamatan": "Tarutung"
      },
      {
        "id": 649,
        "kabkot_id": 48,
        "kecamatan": "Ajibata"
      },
      {
        "id": 650,
        "kabkot_id": 48,
        "kecamatan": "Balige"
      },
      {
        "id": 651,
        "kabkot_id": 48,
        "kecamatan": "Bonatua Lunasi"
      },
      {
        "id": 652,
        "kabkot_id": 48,
        "kecamatan": "Bor-Bor"
      },
      {
        "id": 653,
        "kabkot_id": 48,
        "kecamatan": "Habinsaran"
      },
      {
        "id": 654,
        "kabkot_id": 48,
        "kecamatan": "Laguboti"
      },
      {
        "id": 655,
        "kabkot_id": 48,
        "kecamatan": "Lumban Julu"
      },
      {
        "id": 656,
        "kabkot_id": 48,
        "kecamatan": "Nassau"
      },
      {
        "id": 657,
        "kabkot_id": 48,
        "kecamatan": "Parmaksian"
      },
      {
        "id": 658,
        "kabkot_id": 48,
        "kecamatan": "Pintu Pohan Meranti"
      },
      {
        "id": 659,
        "kabkot_id": 48,
        "kecamatan": "Porsea"
      },
      {
        "id": 660,
        "kabkot_id": 48,
        "kecamatan": "Siantar Narumonda"
      },
      {
        "id": 661,
        "kabkot_id": 48,
        "kecamatan": "Sigumpar"
      },
      {
        "id": 662,
        "kabkot_id": 48,
        "kecamatan": "Silaen"
      },
      {
        "id": 663,
        "kabkot_id": 48,
        "kecamatan": "Tampahan"
      },
      {
        "id": 664,
        "kabkot_id": 48,
        "kecamatan": "Uluan"
      },
      {
        "id": 665,
        "kabkot_id": 49,
        "kecamatan": "Binjai Barat"
      },
      {
        "id": 666,
        "kabkot_id": 49,
        "kecamatan": "Binjai Kota"
      },
      {
        "id": 667,
        "kabkot_id": 49,
        "kecamatan": "Binjai Selatan"
      },
      {
        "id": 668,
        "kabkot_id": 49,
        "kecamatan": "Binjai Timur"
      },
      {
        "id": 669,
        "kabkot_id": 49,
        "kecamatan": "Binjai Utara"
      },
      {
        "id": 670,
        "kabkot_id": 50,
        "kecamatan": "Gunungsitoli"
      },
      {
        "id": 671,
        "kabkot_id": 50,
        "kecamatan": "Gunungsitoli Alo'oa"
      },
      {
        "id": 672,
        "kabkot_id": 50,
        "kecamatan": "Gunungsitoli Barat"
      },
      {
        "id": 673,
        "kabkot_id": 50,
        "kecamatan": "Gunungsitoli Idanoi"
      },
      {
        "id": 674,
        "kabkot_id": 50,
        "kecamatan": "Gunungsitoli Selatan"
      },
      {
        "id": 675,
        "kabkot_id": 50,
        "kecamatan": "Gunungsitoli Utara"
      },
      {
        "id": 676,
        "kabkot_id": 51,
        "kecamatan": "Medan Amplas"
      },
      {
        "id": 677,
        "kabkot_id": 51,
        "kecamatan": "Medan Area"
      },
      {
        "id": 678,
        "kabkot_id": 51,
        "kecamatan": "Medan Barat"
      },
      {
        "id": 679,
        "kabkot_id": 51,
        "kecamatan": "Medan Baru"
      },
      {
        "id": 680,
        "kabkot_id": 51,
        "kecamatan": "Medan Belawan Kota"
      },
      {
        "id": 681,
        "kabkot_id": 51,
        "kecamatan": "Medan Deli"
      },
      {
        "id": 682,
        "kabkot_id": 51,
        "kecamatan": "Medan Denai"
      },
      {
        "id": 683,
        "kabkot_id": 51,
        "kecamatan": "Medan Helvetia"
      },
      {
        "id": 684,
        "kabkot_id": 51,
        "kecamatan": "Medan Johor"
      },
      {
        "id": 685,
        "kabkot_id": 51,
        "kecamatan": "Medan Kota"
      },
      {
        "id": 686,
        "kabkot_id": 51,
        "kecamatan": "Medan Labuhan"
      },
      {
        "id": 687,
        "kabkot_id": 51,
        "kecamatan": "Medan Maimun"
      },
      {
        "id": 688,
        "kabkot_id": 51,
        "kecamatan": "Medan Marelan"
      },
      {
        "id": 689,
        "kabkot_id": 51,
        "kecamatan": "Medan Perjuangan"
      },
      {
        "id": 690,
        "kabkot_id": 51,
        "kecamatan": "Medan Petisah"
      },
      {
        "id": 691,
        "kabkot_id": 51,
        "kecamatan": "Medan Polonia"
      },
      {
        "id": 692,
        "kabkot_id": 51,
        "kecamatan": "Medan Selayang"
      },
      {
        "id": 693,
        "kabkot_id": 51,
        "kecamatan": "Medan Sunggal"
      },
      {
        "id": 694,
        "kabkot_id": 51,
        "kecamatan": "Medan Tembung"
      },
      {
        "id": 695,
        "kabkot_id": 51,
        "kecamatan": "Medan Timur"
      },
      {
        "id": 696,
        "kabkot_id": 51,
        "kecamatan": "Medan Tuntungan"
      },
      {
        "id": 697,
        "kabkot_id": 52,
        "kecamatan": "Padang Sidempuan Angkola Julu"
      },
      {
        "id": 698,
        "kabkot_id": 52,
        "kecamatan": "Padang Sidempuan Batunadua"
      },
      {
        "id": 699,
        "kabkot_id": 52,
        "kecamatan": "Padang Sidempuan Hutaimbaru"
      },
      {
        "id": 700,
        "kabkot_id": 52,
        "kecamatan": "Padang Sidempuan Selatan"
      },
      {
        "id": 701,
        "kabkot_id": 52,
        "kecamatan": "Padang Sidempuan Tenggara"
      },
      {
        "id": 702,
        "kabkot_id": 52,
        "kecamatan": "Padang Sidempuan Utara (Padangsidimpuan)"
      },
      {
        "id": 703,
        "kabkot_id": 53,
        "kecamatan": "Siantar Barat"
      },
      {
        "id": 704,
        "kabkot_id": 53,
        "kecamatan": "Siantar Marihat"
      },
      {
        "id": 705,
        "kabkot_id": 53,
        "kecamatan": "Siantar Marimbun"
      },
      {
        "id": 706,
        "kabkot_id": 53,
        "kecamatan": "Siantar Martoba"
      },
      {
        "id": 707,
        "kabkot_id": 53,
        "kecamatan": "Siantar Selatan"
      },
      {
        "id": 708,
        "kabkot_id": 53,
        "kecamatan": "Siantar Sitalasari"
      },
      {
        "id": 709,
        "kabkot_id": 53,
        "kecamatan": "Siantar Timur"
      },
      {
        "id": 710,
        "kabkot_id": 53,
        "kecamatan": "Siantar Utara"
      },
      {
        "id": 711,
        "kabkot_id": 54,
        "kecamatan": "Sibolga Kota"
      },
      {
        "id": 712,
        "kabkot_id": 54,
        "kecamatan": "Sibolga Sambas"
      },
      {
        "id": 713,
        "kabkot_id": 54,
        "kecamatan": "Sibolga Selatan"
      },
      {
        "id": 714,
        "kabkot_id": 54,
        "kecamatan": "Sibolga Utara"
      },
      {
        "id": 715,
        "kabkot_id": 55,
        "kecamatan": "Datuk Bandar"
      },
      {
        "id": 716,
        "kabkot_id": 55,
        "kecamatan": "Datuk Bandar Timur"
      },
      {
        "id": 717,
        "kabkot_id": 55,
        "kecamatan": "Sei Tualang Raso"
      },
      {
        "id": 718,
        "kabkot_id": 55,
        "kecamatan": "Tanjung Balai Selatan"
      },
      {
        "id": 719,
        "kabkot_id": 55,
        "kecamatan": "Tanjung Balai Utara"
      },
      {
        "id": 720,
        "kabkot_id": 55,
        "kecamatan": "Teluk Nibung"
      },
      {
        "id": 721,
        "kabkot_id": 56,
        "kecamatan": "Bajenis"
      },
      {
        "id": 722,
        "kabkot_id": 56,
        "kecamatan": "Padang Hilir"
      },
      {
        "id": 723,
        "kabkot_id": 56,
        "kecamatan": "Padang Hulu"
      },
      {
        "id": 724,
        "kabkot_id": 56,
        "kecamatan": "Rambutan"
      },
      {
        "id": 725,
        "kabkot_id": 56,
        "kecamatan": "Tebing Tinggi Kota"
      },
      {
        "id": 726,
        "kabkot_id": 57,
        "kecamatan": "Ampek Nagari (IV Nagari )"
      },
      {
        "id": 727,
        "kabkot_id": 57,
        "kecamatan": "Banuhampu"
      },
      {
        "id": 728,
        "kabkot_id": 57,
        "kecamatan": "Baso"
      },
      {
        "id": 729,
        "kabkot_id": 57,
        "kecamatan": "Candung"
      },
      {
        "id": 730,
        "kabkot_id": 57,
        "kecamatan": "IV Angkat Candung (Ampek Angkek)"
      },
      {
        "id": 731,
        "kabkot_id": 57,
        "kecamatan": "IV Koto (Ampek Koto)"
      },
      {
        "id": 732,
        "kabkot_id": 57,
        "kecamatan": "Kamang Magek"
      },
      {
        "id": 733,
        "kabkot_id": 57,
        "kecamatan": "Lubuk Basung"
      },
      {
        "id": 734,
        "kabkot_id": 57,
        "kecamatan": "Malakak"
      },
      {
        "id": 735,
        "kabkot_id": 57,
        "kecamatan": "Matur"
      },
      {
        "id": 736,
        "kabkot_id": 57,
        "kecamatan": "Palembayan"
      },
      {
        "id": 737,
        "kabkot_id": 57,
        "kecamatan": "Palupuh"
      },
      {
        "id": 738,
        "kabkot_id": 57,
        "kecamatan": "Sungai Pua (Puar)"
      },
      {
        "id": 739,
        "kabkot_id": 57,
        "kecamatan": "Tanjung Mutiara"
      },
      {
        "id": 740,
        "kabkot_id": 57,
        "kecamatan": "Tanjung Raya"
      },
      {
        "id": 741,
        "kabkot_id": 57,
        "kecamatan": "Tilatang Kamang"
      },
      {
        "id": 742,
        "kabkot_id": 58,
        "kecamatan": "Asam Jujuhan"
      },
      {
        "id": 743,
        "kabkot_id": 58,
        "kecamatan": "Koto Baru"
      },
      {
        "id": 744,
        "kabkot_id": 58,
        "kecamatan": "Koto Besar"
      },
      {
        "id": 745,
        "kabkot_id": 58,
        "kecamatan": "Koto Salak"
      },
      {
        "id": 746,
        "kabkot_id": 58,
        "kecamatan": "Padang Laweh"
      },
      {
        "id": 747,
        "kabkot_id": 58,
        "kecamatan": "Pulau Punjung"
      },
      {
        "id": 748,
        "kabkot_id": 58,
        "kecamatan": "Sembilan Koto"
      },
      {
        "id": 749,
        "kabkot_id": 58,
        "kecamatan": "Sitiung"
      },
      {
        "id": 750,
        "kabkot_id": 58,
        "kecamatan": "Sungai Rumbai"
      },
      {
        "id": 751,
        "kabkot_id": 58,
        "kecamatan": "Timpeh"
      },
      {
        "id": 752,
        "kabkot_id": 58,
        "kecamatan": "Tiumang"
      },
      {
        "id": 753,
        "kabkot_id": 59,
        "kecamatan": "Pagai Selatan"
      },
      {
        "id": 754,
        "kabkot_id": 59,
        "kecamatan": "Pagai Utara"
      },
      {
        "id": 755,
        "kabkot_id": 59,
        "kecamatan": "Siberut Barat"
      },
      {
        "id": 756,
        "kabkot_id": 59,
        "kecamatan": "Siberut Barat Daya"
      },
      {
        "id": 757,
        "kabkot_id": 59,
        "kecamatan": "Siberut Selatan"
      },
      {
        "id": 758,
        "kabkot_id": 59,
        "kecamatan": "Siberut Tengah"
      },
      {
        "id": 759,
        "kabkot_id": 59,
        "kecamatan": "Siberut Utara"
      },
      {
        "id": 760,
        "kabkot_id": 59,
        "kecamatan": "Sikakap"
      },
      {
        "id": 761,
        "kabkot_id": 59,
        "kecamatan": "Sipora Selatan"
      },
      {
        "id": 762,
        "kabkot_id": 59,
        "kecamatan": "Sipora Utara"
      },
      {
        "id": 763,
        "kabkot_id": 60,
        "kecamatan": "Akabiluru"
      },
      {
        "id": 764,
        "kabkot_id": 60,
        "kecamatan": "Bukik Barisan"
      },
      {
        "id": 765,
        "kabkot_id": 60,
        "kecamatan": "Guguak (Gugu)"
      },
      {
        "id": 766,
        "kabkot_id": 60,
        "kecamatan": "Gunuang Omeh (Gunung Mas)"
      },
      {
        "id": 767,
        "kabkot_id": 60,
        "kecamatan": "Harau"
      },
      {
        "id": 768,
        "kabkot_id": 60,
        "kecamatan": "Kapur IX/Sembilan"
      },
      {
        "id": 769,
        "kabkot_id": 60,
        "kecamatan": "Lareh Sago Halaban"
      },
      {
        "id": 770,
        "kabkot_id": 60,
        "kecamatan": "Luak (Luhak)"
      },
      {
        "id": 771,
        "kabkot_id": 60,
        "kecamatan": "Mungka"
      },
      {
        "id": 772,
        "kabkot_id": 60,
        "kecamatan": "Pangkalan Koto Baru"
      },
      {
        "id": 773,
        "kabkot_id": 60,
        "kecamatan": "Payakumbuh"
      },
      {
        "id": 774,
        "kabkot_id": 60,
        "kecamatan": "Situjuah Limo/Lima Nagari"
      },
      {
        "id": 775,
        "kabkot_id": 60,
        "kecamatan": "Suliki"
      },
      {
        "id": 776,
        "kabkot_id": 61,
        "kecamatan": "2 X 11 Enam Lingkung"
      },
      {
        "id": 777,
        "kabkot_id": 61,
        "kecamatan": "2 X 11 Kayu Tanam"
      },
      {
        "id": 778,
        "kabkot_id": 61,
        "kecamatan": "Batang Anai"
      },
      {
        "id": 779,
        "kabkot_id": 61,
        "kecamatan": "Batang Gasan"
      },
      {
        "id": 780,
        "kabkot_id": 61,
        "kecamatan": "Enam Lingkung"
      },
      {
        "id": 781,
        "kabkot_id": 61,
        "kecamatan": "IV Koto Aur Malintang"
      },
      {
        "id": 782,
        "kabkot_id": 61,
        "kecamatan": "Lubuk Alung"
      },
      {
        "id": 783,
        "kabkot_id": 61,
        "kecamatan": "Nan Sabaris"
      },
      {
        "id": 784,
        "kabkot_id": 61,
        "kecamatan": "Padang Sago"
      },
      {
        "id": 785,
        "kabkot_id": 61,
        "kecamatan": "Patamuan"
      },
      {
        "id": 786,
        "kabkot_id": 61,
        "kecamatan": "Sintuk/Sintuak Toboh Gadang"
      },
      {
        "id": 787,
        "kabkot_id": 61,
        "kecamatan": "Sungai Geringging/Garingging"
      },
      {
        "id": 788,
        "kabkot_id": 61,
        "kecamatan": "Sungai Limau"
      },
      {
        "id": 789,
        "kabkot_id": 61,
        "kecamatan": "Ulakan Tapakih/Tapakis"
      },
      {
        "id": 790,
        "kabkot_id": 61,
        "kecamatan": "V Koto Kampung Dalam"
      },
      {
        "id": 791,
        "kabkot_id": 61,
        "kecamatan": "V Koto Timur"
      },
      {
        "id": 792,
        "kabkot_id": 61,
        "kecamatan": "VII Koto Sungai Sarik"
      },
      {
        "id": 793,
        "kabkot_id": 62,
        "kecamatan": "Bonjol"
      },
      {
        "id": 794,
        "kabkot_id": 62,
        "kecamatan": "Duo Koto (II Koto)"
      },
      {
        "id": 795,
        "kabkot_id": 62,
        "kecamatan": "Lubuk Sikaping"
      },
      {
        "id": 796,
        "kabkot_id": 62,
        "kecamatan": "Mapat Tunggul"
      },
      {
        "id": 797,
        "kabkot_id": 62,
        "kecamatan": "Mapat Tunggul Selatan"
      },
      {
        "id": 798,
        "kabkot_id": 62,
        "kecamatan": "Padang Gelugur"
      },
      {
        "id": 799,
        "kabkot_id": 62,
        "kecamatan": "Panti"
      },
      {
        "id": 800,
        "kabkot_id": 62,
        "kecamatan": "Rao"
      },
      {
        "id": 801,
        "kabkot_id": 62,
        "kecamatan": "Rao Selatan"
      },
      {
        "id": 802,
        "kabkot_id": 62,
        "kecamatan": "Rao Utara"
      },
      {
        "id": 803,
        "kabkot_id": 62,
        "kecamatan": "Simpang Alahan Mati"
      },
      {
        "id": 804,
        "kabkot_id": 62,
        "kecamatan": "Tigo Nagari (III Nagari)"
      },
      {
        "id": 805,
        "kabkot_id": 63,
        "kecamatan": "Gunung Tuleh"
      },
      {
        "id": 806,
        "kabkot_id": 63,
        "kecamatan": "Kinali"
      },
      {
        "id": 807,
        "kabkot_id": 63,
        "kecamatan": "Koto Balingka"
      },
      {
        "id": 808,
        "kabkot_id": 63,
        "kecamatan": "Lembah Melintang"
      },
      {
        "id": 809,
        "kabkot_id": 63,
        "kecamatan": "Luhak Nan Duo"
      },
      {
        "id": 810,
        "kabkot_id": 63,
        "kecamatan": "Pasaman"
      },
      {
        "id": 811,
        "kabkot_id": 63,
        "kecamatan": "Ranah Batahan"
      },
      {
        "id": 812,
        "kabkot_id": 63,
        "kecamatan": "Sasak Ranah Pasisir/Pesisie"
      },
      {
        "id": 813,
        "kabkot_id": 63,
        "kecamatan": "Sei Beremas"
      },
      {
        "id": 814,
        "kabkot_id": 63,
        "kecamatan": "Sungai Aur"
      },
      {
        "id": 815,
        "kabkot_id": 63,
        "kecamatan": "Talamau"
      },
      {
        "id": 816,
        "kabkot_id": 64,
        "kecamatan": "Airpura"
      },
      {
        "id": 817,
        "kabkot_id": 64,
        "kecamatan": "Basa Ampek Balai Tapan"
      },
      {
        "id": 818,
        "kabkot_id": 64,
        "kecamatan": "Batang Kapas"
      },
      {
        "id": 819,
        "kabkot_id": 64,
        "kecamatan": "Bayang"
      },
      {
        "id": 820,
        "kabkot_id": 64,
        "kecamatan": "IV Jurai"
      },
      {
        "id": 821,
        "kabkot_id": 64,
        "kecamatan": "IV Nagari Bayang Utara"
      },
      {
        "id": 822,
        "kabkot_id": 64,
        "kecamatan": "Koto XI Tarusan"
      },
      {
        "id": 823,
        "kabkot_id": 64,
        "kecamatan": "Lengayang"
      },
      {
        "id": 824,
        "kabkot_id": 64,
        "kecamatan": "Linggo Sari Baganti"
      },
      {
        "id": 825,
        "kabkot_id": 64,
        "kecamatan": "Lunang"
      },
      {
        "id": 826,
        "kabkot_id": 64,
        "kecamatan": "Pancung Soal"
      },
      {
        "id": 827,
        "kabkot_id": 64,
        "kecamatan": "Ranah Ampek Hulu Tapan"
      },
      {
        "id": 828,
        "kabkot_id": 64,
        "kecamatan": "Ranah Pesisir"
      },
      {
        "id": 829,
        "kabkot_id": 64,
        "kecamatan": "Silaut"
      },
      {
        "id": 830,
        "kabkot_id": 64,
        "kecamatan": "Sutera"
      },
      {
        "id": 831,
        "kabkot_id": 65,
        "kecamatan": "IV Nagari"
      },
      {
        "id": 832,
        "kabkot_id": 65,
        "kecamatan": "Kamang Baru"
      },
      {
        "id": 833,
        "kabkot_id": 65,
        "kecamatan": "Koto VII"
      },
      {
        "id": 834,
        "kabkot_id": 65,
        "kecamatan": "Kupitan"
      },
      {
        "id": 835,
        "kabkot_id": 65,
        "kecamatan": "Lubuak Tarok"
      },
      {
        "id": 836,
        "kabkot_id": 65,
        "kecamatan": "Sijunjung"
      },
      {
        "id": 837,
        "kabkot_id": 65,
        "kecamatan": "Sumpur Kudus"
      },
      {
        "id": 838,
        "kabkot_id": 65,
        "kecamatan": "Tanjung Gadang"
      },
      {
        "id": 839,
        "kabkot_id": 66,
        "kecamatan": "Bukit Sundi"
      },
      {
        "id": 840,
        "kabkot_id": 66,
        "kecamatan": "Danau Kembar"
      },
      {
        "id": 841,
        "kabkot_id": 66,
        "kecamatan": "Gunung Talang"
      },
      {
        "id": 842,
        "kabkot_id": 66,
        "kecamatan": "Hiliran Gumanti"
      },
      {
        "id": 843,
        "kabkot_id": 66,
        "kecamatan": "IX Koto Sungai Lasi"
      },
      {
        "id": 844,
        "kabkot_id": 66,
        "kecamatan": "Junjung Sirih"
      },
      {
        "id": 845,
        "kabkot_id": 66,
        "kecamatan": "Kubung"
      },
      {
        "id": 846,
        "kabkot_id": 66,
        "kecamatan": "Lembah Gumanti"
      },
      {
        "id": 847,
        "kabkot_id": 66,
        "kecamatan": "Lembang Jaya"
      },
      {
        "id": 848,
        "kabkot_id": 66,
        "kecamatan": "Pantai Cermin"
      },
      {
        "id": 849,
        "kabkot_id": 66,
        "kecamatan": "Payung Sekaki"
      },
      {
        "id": 850,
        "kabkot_id": 66,
        "kecamatan": "Tigo Lurah"
      },
      {
        "id": 851,
        "kabkot_id": 66,
        "kecamatan": "X Koto Diatas"
      },
      {
        "id": 852,
        "kabkot_id": 66,
        "kecamatan": "X Koto Singkarak"
      },
      {
        "id": 853,
        "kabkot_id": 67,
        "kecamatan": "Koto Parik Gadang Diateh"
      },
      {
        "id": 854,
        "kabkot_id": 67,
        "kecamatan": "Pauh Duo"
      },
      {
        "id": 855,
        "kabkot_id": 67,
        "kecamatan": "Sangir"
      },
      {
        "id": 856,
        "kabkot_id": 67,
        "kecamatan": "Sangir Balai Janggo"
      },
      {
        "id": 857,
        "kabkot_id": 67,
        "kecamatan": "Sangir Batang Hari"
      },
      {
        "id": 858,
        "kabkot_id": 67,
        "kecamatan": "Sangir Jujuan"
      },
      {
        "id": 859,
        "kabkot_id": 67,
        "kecamatan": "Sungai Pagu"
      },
      {
        "id": 860,
        "kabkot_id": 68,
        "kecamatan": "Batipuh"
      },
      {
        "id": 861,
        "kabkot_id": 68,
        "kecamatan": "Batipuh Selatan"
      },
      {
        "id": 862,
        "kabkot_id": 68,
        "kecamatan": "Lima Kaum"
      },
      {
        "id": 863,
        "kabkot_id": 68,
        "kecamatan": "Lintau Buo"
      },
      {
        "id": 864,
        "kabkot_id": 68,
        "kecamatan": "Lintau Buo Utara"
      },
      {
        "id": 865,
        "kabkot_id": 68,
        "kecamatan": "Padang Ganting"
      },
      {
        "id": 866,
        "kabkot_id": 68,
        "kecamatan": "Pariangan"
      },
      {
        "id": 867,
        "kabkot_id": 68,
        "kecamatan": "Rambatan"
      },
      {
        "id": 868,
        "kabkot_id": 68,
        "kecamatan": "Salimpaung"
      },
      {
        "id": 869,
        "kabkot_id": 68,
        "kecamatan": "Sepuluh Koto (X Koto)"
      },
      {
        "id": 870,
        "kabkot_id": 68,
        "kecamatan": "Sungai Tarab"
      },
      {
        "id": 871,
        "kabkot_id": 68,
        "kecamatan": "Sungayang"
      },
      {
        "id": 872,
        "kabkot_id": 68,
        "kecamatan": "Tanjung Baru"
      },
      {
        "id": 873,
        "kabkot_id": 68,
        "kecamatan": "Tanjung Emas"
      },
      {
        "id": 874,
        "kabkot_id": 69,
        "kecamatan": "Aur Birugo Tigo Baleh"
      },
      {
        "id": 875,
        "kabkot_id": 69,
        "kecamatan": "Guguk Panjang (Guguak Panjang)"
      },
      {
        "id": 876,
        "kabkot_id": 69,
        "kecamatan": "Mandiangin Koto Selayan"
      },
      {
        "id": 877,
        "kabkot_id": 70,
        "kecamatan": "Bungus Teluk Kabung"
      },
      {
        "id": 878,
        "kabkot_id": 70,
        "kecamatan": "Koto Tangah"
      },
      {
        "id": 879,
        "kabkot_id": 70,
        "kecamatan": "Kuranji"
      },
      {
        "id": 880,
        "kabkot_id": 70,
        "kecamatan": "Lubuk Begalung"
      },
      {
        "id": 881,
        "kabkot_id": 70,
        "kecamatan": "Lubuk Kilangan"
      },
      {
        "id": 882,
        "kabkot_id": 70,
        "kecamatan": "Nanggalo"
      },
      {
        "id": 883,
        "kabkot_id": 70,
        "kecamatan": "Padang Barat"
      },
      {
        "id": 884,
        "kabkot_id": 70,
        "kecamatan": "Padang Selatan"
      },
      {
        "id": 885,
        "kabkot_id": 70,
        "kecamatan": "Padang Timur"
      },
      {
        "id": 886,
        "kabkot_id": 70,
        "kecamatan": "Padang Utara"
      },
      {
        "id": 887,
        "kabkot_id": 70,
        "kecamatan": "Pauh"
      },
      {
        "id": 888,
        "kabkot_id": 71,
        "kecamatan": "Padang Panjang Barat"
      },
      {
        "id": 889,
        "kabkot_id": 71,
        "kecamatan": "Padang Panjang Timur"
      },
      {
        "id": 890,
        "kabkot_id": 72,
        "kecamatan": "Pariaman Selatan"
      },
      {
        "id": 891,
        "kabkot_id": 72,
        "kecamatan": "Pariaman Tengah"
      },
      {
        "id": 892,
        "kabkot_id": 72,
        "kecamatan": "Pariaman Timur"
      },
      {
        "id": 893,
        "kabkot_id": 72,
        "kecamatan": "Pariaman Utara"
      },
      {
        "id": 894,
        "kabkot_id": 73,
        "kecamatan": "Lamposi Tigo Nagari"
      },
      {
        "id": 895,
        "kabkot_id": 73,
        "kecamatan": "Payakumbuh Barat"
      },
      {
        "id": 896,
        "kabkot_id": 73,
        "kecamatan": "Payakumbuh Selatan"
      },
      {
        "id": 897,
        "kabkot_id": 73,
        "kecamatan": "Payakumbuh Timur"
      },
      {
        "id": 898,
        "kabkot_id": 73,
        "kecamatan": "Payakumbuh Utara"
      },
      {
        "id": 899,
        "kabkot_id": 74,
        "kecamatan": "Barangin"
      },
      {
        "id": 900,
        "kabkot_id": 74,
        "kecamatan": "Lembah Segar"
      },
      {
        "id": 901,
        "kabkot_id": 74,
        "kecamatan": "Silungkang"
      },
      {
        "id": 902,
        "kabkot_id": 74,
        "kecamatan": "Talawi"
      },
      {
        "id": 903,
        "kabkot_id": 75,
        "kecamatan": "Lubuk Sikarah"
      },
      {
        "id": 904,
        "kabkot_id": 75,
        "kecamatan": "Tanjung Harapan"
      },
      {
        "id": 905,
        "kabkot_id": 76,
        "kecamatan": "Bantan"
      },
      {
        "id": 906,
        "kabkot_id": 76,
        "kecamatan": "Bengkalis"
      },
      {
        "id": 907,
        "kabkot_id": 76,
        "kecamatan": "Bukit Batu"
      },
      {
        "id": 908,
        "kabkot_id": 76,
        "kecamatan": "Mandau"
      },
      {
        "id": 909,
        "kabkot_id": 76,
        "kecamatan": "Pinggir"
      },
      {
        "id": 910,
        "kabkot_id": 76,
        "kecamatan": "Rupat"
      },
      {
        "id": 911,
        "kabkot_id": 76,
        "kecamatan": "Rupat Utara"
      },
      {
        "id": 912,
        "kabkot_id": 76,
        "kecamatan": "Siak Kecil"
      },
      {
        "id": 913,
        "kabkot_id": 77,
        "kecamatan": "Batang Tuaka"
      },
      {
        "id": 914,
        "kabkot_id": 77,
        "kecamatan": "Concong"
      },
      {
        "id": 915,
        "kabkot_id": 77,
        "kecamatan": "Enok"
      },
      {
        "id": 916,
        "kabkot_id": 77,
        "kecamatan": "Gaung"
      },
      {
        "id": 917,
        "kabkot_id": 77,
        "kecamatan": "Gaung Anak Serka"
      },
      {
        "id": 918,
        "kabkot_id": 77,
        "kecamatan": "Kateman"
      },
      {
        "id": 919,
        "kabkot_id": 77,
        "kecamatan": "Kempas"
      },
      {
        "id": 920,
        "kabkot_id": 77,
        "kecamatan": "Kemuning"
      },
      {
        "id": 921,
        "kabkot_id": 77,
        "kecamatan": "Keritang"
      },
      {
        "id": 922,
        "kabkot_id": 77,
        "kecamatan": "Kuala Indragiri"
      },
      {
        "id": 923,
        "kabkot_id": 77,
        "kecamatan": "Mandah"
      },
      {
        "id": 924,
        "kabkot_id": 77,
        "kecamatan": "Pelangiran"
      },
      {
        "id": 925,
        "kabkot_id": 77,
        "kecamatan": "Pulau Burung"
      },
      {
        "id": 926,
        "kabkot_id": 77,
        "kecamatan": "Reteh"
      },
      {
        "id": 927,
        "kabkot_id": 77,
        "kecamatan": "Sungai Batang"
      },
      {
        "id": 928,
        "kabkot_id": 77,
        "kecamatan": "Tanah Merah"
      },
      {
        "id": 929,
        "kabkot_id": 77,
        "kecamatan": "Teluk Belengkong"
      },
      {
        "id": 930,
        "kabkot_id": 77,
        "kecamatan": "Tembilahan"
      },
      {
        "id": 931,
        "kabkot_id": 77,
        "kecamatan": "Tembilahan Hulu"
      },
      {
        "id": 932,
        "kabkot_id": 77,
        "kecamatan": "Tempuling"
      },
      {
        "id": 933,
        "kabkot_id": 78,
        "kecamatan": "Batang Cenaku"
      },
      {
        "id": 934,
        "kabkot_id": 78,
        "kecamatan": "Batang Gansal"
      },
      {
        "id": 935,
        "kabkot_id": 78,
        "kecamatan": "Batang Peranap"
      },
      {
        "id": 936,
        "kabkot_id": 78,
        "kecamatan": "Kelayang"
      },
      {
        "id": 937,
        "kabkot_id": 78,
        "kecamatan": "Kuala Cenaku"
      },
      {
        "id": 938,
        "kabkot_id": 78,
        "kecamatan": "Lirik"
      },
      {
        "id": 939,
        "kabkot_id": 78,
        "kecamatan": "Lubuk Batu Jaya"
      },
      {
        "id": 940,
        "kabkot_id": 78,
        "kecamatan": "Pasir Penyu"
      },
      {
        "id": 941,
        "kabkot_id": 78,
        "kecamatan": "Peranap"
      },
      {
        "id": 942,
        "kabkot_id": 78,
        "kecamatan": "Rakit Kulim"
      },
      {
        "id": 943,
        "kabkot_id": 78,
        "kecamatan": "Rengat"
      },
      {
        "id": 944,
        "kabkot_id": 78,
        "kecamatan": "Rengat Barat"
      },
      {
        "id": 945,
        "kabkot_id": 78,
        "kecamatan": "Seberida"
      },
      {
        "id": 946,
        "kabkot_id": 78,
        "kecamatan": "Sungai Lala"
      },
      {
        "id": 947,
        "kabkot_id": 79,
        "kecamatan": "Bangkinang"
      },
      {
        "id": 948,
        "kabkot_id": 79,
        "kecamatan": "Bangkinang Kota"
      },
      {
        "id": 949,
        "kabkot_id": 79,
        "kecamatan": "Gunung Sahilan"
      },
      {
        "id": 950,
        "kabkot_id": 79,
        "kecamatan": "Kampar"
      },
      {
        "id": 951,
        "kabkot_id": 79,
        "kecamatan": "Kampar Kiri"
      },
      {
        "id": 952,
        "kabkot_id": 79,
        "kecamatan": "Kampar Kiri Hilir"
      },
      {
        "id": 953,
        "kabkot_id": 79,
        "kecamatan": "Kampar Kiri Hulu"
      },
      {
        "id": 954,
        "kabkot_id": 79,
        "kecamatan": "Kampar Kiri Tengah"
      },
      {
        "id": 955,
        "kabkot_id": 79,
        "kecamatan": "Kampar Timur"
      },
      {
        "id": 956,
        "kabkot_id": 79,
        "kecamatan": "Kampar Utara"
      },
      {
        "id": 957,
        "kabkot_id": 79,
        "kecamatan": "Koto Kampar Hulu"
      },
      {
        "id": 958,
        "kabkot_id": 79,
        "kecamatan": "Kuok"
      },
      {
        "id": 959,
        "kabkot_id": 79,
        "kecamatan": "Perhentian Raja"
      },
      {
        "id": 960,
        "kabkot_id": 79,
        "kecamatan": "Rumbio Jaya"
      },
      {
        "id": 961,
        "kabkot_id": 79,
        "kecamatan": "Salo"
      },
      {
        "id": 962,
        "kabkot_id": 79,
        "kecamatan": "Siak Hulu"
      },
      {
        "id": 963,
        "kabkot_id": 79,
        "kecamatan": "Tambang"
      },
      {
        "id": 964,
        "kabkot_id": 79,
        "kecamatan": "Tapung"
      },
      {
        "id": 965,
        "kabkot_id": 79,
        "kecamatan": "Tapung Hilir"
      },
      {
        "id": 966,
        "kabkot_id": 79,
        "kecamatan": "Tapung Hulu"
      },
      {
        "id": 967,
        "kabkot_id": 79,
        "kecamatan": "XIII Koto Kampar"
      },
      {
        "id": 968,
        "kabkot_id": 80,
        "kecamatan": "Merbau"
      },
      {
        "id": 969,
        "kabkot_id": 80,
        "kecamatan": "Pulaumerbau"
      },
      {
        "id": 970,
        "kabkot_id": 80,
        "kecamatan": "Rangsang"
      },
      {
        "id": 971,
        "kabkot_id": 80,
        "kecamatan": "Rangsang Barat"
      },
      {
        "id": 972,
        "kabkot_id": 80,
        "kecamatan": "Rangsang Pesisir"
      },
      {
        "id": 973,
        "kabkot_id": 80,
        "kecamatan": "Tasik Putri Puyu"
      },
      {
        "id": 974,
        "kabkot_id": 80,
        "kecamatan": "Tebing Tinggi"
      },
      {
        "id": 975,
        "kabkot_id": 80,
        "kecamatan": "Tebing Tinggi Barat"
      },
      {
        "id": 976,
        "kabkot_id": 80,
        "kecamatan": "Tebing Tinggi Timur"
      },
      {
        "id": 977,
        "kabkot_id": 81,
        "kecamatan": "Benai"
      },
      {
        "id": 978,
        "kabkot_id": 81,
        "kecamatan": "Cerenti"
      },
      {
        "id": 979,
        "kabkot_id": 81,
        "kecamatan": "Gunung Toar"
      },
      {
        "id": 980,
        "kabkot_id": 81,
        "kecamatan": "Hulu Kuantan"
      },
      {
        "id": 981,
        "kabkot_id": 81,
        "kecamatan": "Inuman"
      },
      {
        "id": 982,
        "kabkot_id": 81,
        "kecamatan": "Kuantan Hilir"
      },
      {
        "id": 983,
        "kabkot_id": 81,
        "kecamatan": "Kuantan Hilir Seberang"
      },
      {
        "id": 984,
        "kabkot_id": 81,
        "kecamatan": "Kuantan Mudik"
      },
      {
        "id": 985,
        "kabkot_id": 81,
        "kecamatan": "Kuantan Tengah"
      },
      {
        "id": 986,
        "kabkot_id": 81,
        "kecamatan": "Logas Tanah Darat"
      },
      {
        "id": 987,
        "kabkot_id": 81,
        "kecamatan": "Pangean"
      },
      {
        "id": 988,
        "kabkot_id": 81,
        "kecamatan": "Pucuk Rantau"
      },
      {
        "id": 989,
        "kabkot_id": 81,
        "kecamatan": "Sentajo Raya"
      },
      {
        "id": 990,
        "kabkot_id": 81,
        "kecamatan": "Singingi"
      },
      {
        "id": 991,
        "kabkot_id": 81,
        "kecamatan": "Singingi Hilir"
      },
      {
        "id": 992,
        "kabkot_id": 82,
        "kecamatan": "Bandar Petalangan"
      },
      {
        "id": 993,
        "kabkot_id": 82,
        "kecamatan": "Bandar Sei Kijang"
      },
      {
        "id": 994,
        "kabkot_id": 82,
        "kecamatan": "Bunut"
      },
      {
        "id": 995,
        "kabkot_id": 82,
        "kecamatan": "Kerumutan"
      },
      {
        "id": 996,
        "kabkot_id": 82,
        "kecamatan": "Kuala Kampar"
      },
      {
        "id": 997,
        "kabkot_id": 82,
        "kecamatan": "Langgam"
      },
      {
        "id": 998,
        "kabkot_id": 82,
        "kecamatan": "Pangkalan Kerinci"
      },
      {
        "id": 999,
        "kabkot_id": 82,
        "kecamatan": "Pangkalan Kuras"
      },
      {
        "id": 1000,
        "kabkot_id": 82,
        "kecamatan": "Pangkalan Lesung"
      },
      {
        "id": 1001,
        "kabkot_id": 82,
        "kecamatan": "Pelalawan"
      },
      {
        "id": 1002,
        "kabkot_id": 82,
        "kecamatan": "Teluk Meranti"
      },
      {
        "id": 1003,
        "kabkot_id": 82,
        "kecamatan": "Ukui"
      },
      {
        "id": 1004,
        "kabkot_id": 83,
        "kecamatan": "Bagan Sinembah"
      },
      {
        "id": 1005,
        "kabkot_id": 83,
        "kecamatan": "Bangko"
      },
      {
        "id": 1006,
        "kabkot_id": 83,
        "kecamatan": "Bangko Pusaka (Pusako)"
      },
      {
        "id": 1007,
        "kabkot_id": 83,
        "kecamatan": "Batu Hampar"
      },
      {
        "id": 1008,
        "kabkot_id": 83,
        "kecamatan": "Kubu"
      },
      {
        "id": 1009,
        "kabkot_id": 83,
        "kecamatan": "Kubu Babussalam"
      },
      {
        "id": 1010,
        "kabkot_id": 83,
        "kecamatan": "Pasir Limau Kapas"
      },
      {
        "id": 1011,
        "kabkot_id": 83,
        "kecamatan": "Pekaitan"
      },
      {
        "id": 1012,
        "kabkot_id": 83,
        "kecamatan": "Pujud"
      },
      {
        "id": 1013,
        "kabkot_id": 83,
        "kecamatan": "Rantau Kopar"
      },
      {
        "id": 1014,
        "kabkot_id": 83,
        "kecamatan": "Rimba Melintang"
      },
      {
        "id": 1015,
        "kabkot_id": 83,
        "kecamatan": "Simpang Kanan"
      },
      {
        "id": 1016,
        "kabkot_id": 83,
        "kecamatan": "Sinaboi (Senaboi)"
      },
      {
        "id": 1017,
        "kabkot_id": 83,
        "kecamatan": "Tanah Putih"
      },
      {
        "id": 1018,
        "kabkot_id": 83,
        "kecamatan": "Tanah Putih Tanjung Melawan"
      },
      {
        "id": 1019,
        "kabkot_id": 84,
        "kecamatan": "Bangun Purba"
      },
      {
        "id": 1020,
        "kabkot_id": 84,
        "kecamatan": "Bonai Darussalam"
      },
      {
        "id": 1021,
        "kabkot_id": 84,
        "kecamatan": "Kabun"
      },
      {
        "id": 1022,
        "kabkot_id": 84,
        "kecamatan": "Kepenuhan"
      },
      {
        "id": 1023,
        "kabkot_id": 84,
        "kecamatan": "Kepenuhan Hulu"
      },
      {
        "id": 1024,
        "kabkot_id": 84,
        "kecamatan": "Kunto Darussalam"
      },
      {
        "id": 1025,
        "kabkot_id": 84,
        "kecamatan": "Pagaran Tapah Darussalam"
      },
      {
        "id": 1026,
        "kabkot_id": 84,
        "kecamatan": "Pendalian IV Koto"
      },
      {
        "id": 1027,
        "kabkot_id": 84,
        "kecamatan": "Rambah"
      },
      {
        "id": 1028,
        "kabkot_id": 84,
        "kecamatan": "Rambah Hilir"
      },
      {
        "id": 1029,
        "kabkot_id": 84,
        "kecamatan": "Rambah Samo"
      },
      {
        "id": 1030,
        "kabkot_id": 84,
        "kecamatan": "Rokan IV Koto"
      },
      {
        "id": 1031,
        "kabkot_id": 84,
        "kecamatan": "Tambusai"
      },
      {
        "id": 1032,
        "kabkot_id": 84,
        "kecamatan": "Tambusai Utara"
      },
      {
        "id": 1033,
        "kabkot_id": 84,
        "kecamatan": "Tandun"
      },
      {
        "id": 1034,
        "kabkot_id": 84,
        "kecamatan": "Ujung Batu"
      },
      {
        "id": 1035,
        "kabkot_id": 85,
        "kecamatan": "Bunga Raya"
      },
      {
        "id": 1036,
        "kabkot_id": 85,
        "kecamatan": "Dayun"
      },
      {
        "id": 1037,
        "kabkot_id": 85,
        "kecamatan": "Kandis"
      },
      {
        "id": 1038,
        "kabkot_id": 85,
        "kecamatan": "Kerinci Kanan"
      },
      {
        "id": 1039,
        "kabkot_id": 85,
        "kecamatan": "Koto Gasib"
      },
      {
        "id": 1040,
        "kabkot_id": 85,
        "kecamatan": "Lubuk Dalam"
      },
      {
        "id": 1041,
        "kabkot_id": 85,
        "kecamatan": "Mempura"
      },
      {
        "id": 1042,
        "kabkot_id": 85,
        "kecamatan": "Minas"
      },
      {
        "id": 1043,
        "kabkot_id": 85,
        "kecamatan": "Pusako"
      },
      {
        "id": 1044,
        "kabkot_id": 85,
        "kecamatan": "Sabak Auh"
      },
      {
        "id": 1045,
        "kabkot_id": 85,
        "kecamatan": "Siak"
      },
      {
        "id": 1046,
        "kabkot_id": 85,
        "kecamatan": "Sungai Apit"
      },
      {
        "id": 1047,
        "kabkot_id": 85,
        "kecamatan": "Sungai Mandau"
      },
      {
        "id": 1048,
        "kabkot_id": 85,
        "kecamatan": "Tualang"
      },
      {
        "id": 1049,
        "kabkot_id": 86,
        "kecamatan": "Bukit Kapur"
      },
      {
        "id": 1050,
        "kabkot_id": 86,
        "kecamatan": "Dumai Barat"
      },
      {
        "id": 1051,
        "kabkot_id": 86,
        "kecamatan": "Dumai Kota"
      },
      {
        "id": 1052,
        "kabkot_id": 86,
        "kecamatan": "Dumai Selatan"
      },
      {
        "id": 1053,
        "kabkot_id": 86,
        "kecamatan": "Dumai Timur"
      },
      {
        "id": 1054,
        "kabkot_id": 86,
        "kecamatan": "Medang Kampai"
      },
      {
        "id": 1055,
        "kabkot_id": 86,
        "kecamatan": "Sungai Sembilan"
      },
      {
        "id": 1056,
        "kabkot_id": 87,
        "kecamatan": "Bukit Raya"
      },
      {
        "id": 1057,
        "kabkot_id": 87,
        "kecamatan": "Lima Puluh"
      },
      {
        "id": 1058,
        "kabkot_id": 87,
        "kecamatan": "Marpoyan Damai"
      },
      {
        "id": 1059,
        "kabkot_id": 87,
        "kecamatan": "Payung Sekaki"
      },
      {
        "id": 1060,
        "kabkot_id": 87,
        "kecamatan": "Pekanbaru Kota"
      },
      {
        "id": 1061,
        "kabkot_id": 87,
        "kecamatan": "Rumbai"
      },
      {
        "id": 1062,
        "kabkot_id": 87,
        "kecamatan": "Rumbai Pesisir"
      },
      {
        "id": 1063,
        "kabkot_id": 87,
        "kecamatan": "Sail"
      },
      {
        "id": 1064,
        "kabkot_id": 87,
        "kecamatan": "Senapelan"
      },
      {
        "id": 1065,
        "kabkot_id": 87,
        "kecamatan": "Sukajadi"
      },
      {
        "id": 1066,
        "kabkot_id": 87,
        "kecamatan": "Tampan"
      },
      {
        "id": 1067,
        "kabkot_id": 87,
        "kecamatan": "Tenayan Raya"
      },
      {
        "id": 1068,
        "kabkot_id": 88,
        "kecamatan": "Bajubang"
      },
      {
        "id": 1069,
        "kabkot_id": 88,
        "kecamatan": "Batin XXIV"
      },
      {
        "id": 1070,
        "kabkot_id": 88,
        "kecamatan": "Maro Sebo Ilir"
      },
      {
        "id": 1071,
        "kabkot_id": 88,
        "kecamatan": "Maro Sebo Ulu"
      },
      {
        "id": 1072,
        "kabkot_id": 88,
        "kecamatan": "Mersam"
      },
      {
        "id": 1073,
        "kabkot_id": 88,
        "kecamatan": "Muara Bulian"
      },
      {
        "id": 1074,
        "kabkot_id": 88,
        "kecamatan": "Muara Tembesi"
      },
      {
        "id": 1075,
        "kabkot_id": 88,
        "kecamatan": "Pemayung"
      },
      {
        "id": 1076,
        "kabkot_id": 89,
        "kecamatan": "Bathin II Babeko"
      },
      {
        "id": 1077,
        "kabkot_id": 89,
        "kecamatan": "Bathin II Pelayang"
      },
      {
        "id": 1078,
        "kabkot_id": 89,
        "kecamatan": "Bathin III"
      },
      {
        "id": 1079,
        "kabkot_id": 89,
        "kecamatan": "Bathin III Ulu"
      },
      {
        "id": 1080,
        "kabkot_id": 89,
        "kecamatan": "Bungo Dani"
      },
      {
        "id": 1081,
        "kabkot_id": 89,
        "kecamatan": "Jujuhan"
      },
      {
        "id": 1082,
        "kabkot_id": 89,
        "kecamatan": "Jujuhan Ilir"
      },
      {
        "id": 1083,
        "kabkot_id": 89,
        "kecamatan": "Limbur Lubuk Mengkuang"
      },
      {
        "id": 1084,
        "kabkot_id": 89,
        "kecamatan": "Muko-Muko Batin VII"
      },
      {
        "id": 1085,
        "kabkot_id": 89,
        "kecamatan": "Pasar Muara Bungo"
      },
      {
        "id": 1086,
        "kabkot_id": 89,
        "kecamatan": "Pelepat"
      },
      {
        "id": 1087,
        "kabkot_id": 89,
        "kecamatan": "Pelepat Ilir"
      },
      {
        "id": 1088,
        "kabkot_id": 89,
        "kecamatan": "Rantau Pandan"
      },
      {
        "id": 1089,
        "kabkot_id": 89,
        "kecamatan": "Rimbo Tengah"
      },
      {
        "id": 1090,
        "kabkot_id": 89,
        "kecamatan": "Tanah Sepenggal"
      },
      {
        "id": 1091,
        "kabkot_id": 89,
        "kecamatan": "Tanah Sepenggal Lintas"
      },
      {
        "id": 1092,
        "kabkot_id": 89,
        "kecamatan": "Tanah Tumbuh"
      },
      {
        "id": 1093,
        "kabkot_id": 90,
        "kecamatan": "Air Hangat"
      },
      {
        "id": 1094,
        "kabkot_id": 90,
        "kecamatan": "Air Hangat Barat"
      },
      {
        "id": 1095,
        "kabkot_id": 90,
        "kecamatan": "Air Hangat Timur"
      },
      {
        "id": 1096,
        "kabkot_id": 90,
        "kecamatan": "Batang Merangin"
      },
      {
        "id": 1097,
        "kabkot_id": 90,
        "kecamatan": "Bukitkerman"
      },
      {
        "id": 1098,
        "kabkot_id": 90,
        "kecamatan": "Danau Kerinci"
      },
      {
        "id": 1099,
        "kabkot_id": 90,
        "kecamatan": "Depati Tujuh"
      },
      {
        "id": 1100,
        "kabkot_id": 90,
        "kecamatan": "Gunung Kerinci"
      },
      {
        "id": 1101,
        "kabkot_id": 90,
        "kecamatan": "Gunung Raya"
      },
      {
        "id": 1102,
        "kabkot_id": 90,
        "kecamatan": "Gunung Tujuh"
      },
      {
        "id": 1103,
        "kabkot_id": 90,
        "kecamatan": "Kayu Aro"
      },
      {
        "id": 1104,
        "kabkot_id": 90,
        "kecamatan": "Kayu Aro Barat"
      },
      {
        "id": 1105,
        "kabkot_id": 90,
        "kecamatan": "Keliling Danau"
      },
      {
        "id": 1106,
        "kabkot_id": 90,
        "kecamatan": "Sitinjau Laut"
      },
      {
        "id": 1107,
        "kabkot_id": 90,
        "kecamatan": "Siulak"
      },
      {
        "id": 1108,
        "kabkot_id": 90,
        "kecamatan": "Siulak Mukai"
      },
      {
        "id": 1109,
        "kabkot_id": 91,
        "kecamatan": "Bangko"
      },
      {
        "id": 1110,
        "kabkot_id": 91,
        "kecamatan": "Bangko Barat"
      },
      {
        "id": 1111,
        "kabkot_id": 91,
        "kecamatan": "Batang Masumai"
      },
      {
        "id": 1112,
        "kabkot_id": 91,
        "kecamatan": "Jangkat"
      },
      {
        "id": 1113,
        "kabkot_id": 91,
        "kecamatan": "Lembah Masurai"
      },
      {
        "id": 1114,
        "kabkot_id": 91,
        "kecamatan": "Margo Tabir"
      },
      {
        "id": 1115,
        "kabkot_id": 91,
        "kecamatan": "Muara Siau"
      },
      {
        "id": 1116,
        "kabkot_id": 91,
        "kecamatan": "Nalo Tantan"
      },
      {
        "id": 1117,
        "kabkot_id": 91,
        "kecamatan": "Pamenang"
      },
      {
        "id": 1118,
        "kabkot_id": 91,
        "kecamatan": "Pamenang Barat"
      },
      {
        "id": 1119,
        "kabkot_id": 91,
        "kecamatan": "Pamenang Selatan"
      },
      {
        "id": 1120,
        "kabkot_id": 91,
        "kecamatan": "Pangkalan Jambu"
      },
      {
        "id": 1121,
        "kabkot_id": 91,
        "kecamatan": "Renah Pembarap"
      },
      {
        "id": 1122,
        "kabkot_id": 91,
        "kecamatan": "Renah Pemenang"
      },
      {
        "id": 1123,
        "kabkot_id": 91,
        "kecamatan": "Sungai Manau"
      },
      {
        "id": 1124,
        "kabkot_id": 91,
        "kecamatan": "Sungai Tenang"
      },
      {
        "id": 1125,
        "kabkot_id": 91,
        "kecamatan": "Tabir"
      },
      {
        "id": 1126,
        "kabkot_id": 91,
        "kecamatan": "Tabir Barat"
      },
      {
        "id": 1127,
        "kabkot_id": 91,
        "kecamatan": "Tabir Ilir"
      },
      {
        "id": 1128,
        "kabkot_id": 91,
        "kecamatan": "Tabir Lintas"
      },
      {
        "id": 1129,
        "kabkot_id": 91,
        "kecamatan": "Tabir Selatan"
      },
      {
        "id": 1130,
        "kabkot_id": 91,
        "kecamatan": "Tabir Timur"
      },
      {
        "id": 1131,
        "kabkot_id": 91,
        "kecamatan": "Tabir Ulu"
      },
      {
        "id": 1132,
        "kabkot_id": 91,
        "kecamatan": "Tiang Pumpung"
      },
      {
        "id": 1133,
        "kabkot_id": 92,
        "kecamatan": "Bahar Selatan"
      },
      {
        "id": 1134,
        "kabkot_id": 92,
        "kecamatan": "Bahar Utara"
      },
      {
        "id": 1135,
        "kabkot_id": 92,
        "kecamatan": "Jambi Luar Kota"
      },
      {
        "id": 1136,
        "kabkot_id": 92,
        "kecamatan": "Kumpeh"
      },
      {
        "id": 1137,
        "kabkot_id": 92,
        "kecamatan": "Kumpeh Ulu"
      },
      {
        "id": 1138,
        "kabkot_id": 92,
        "kecamatan": "Maro Sebo"
      },
      {
        "id": 1139,
        "kabkot_id": 92,
        "kecamatan": "Mestong"
      },
      {
        "id": 1140,
        "kabkot_id": 92,
        "kecamatan": "Sekernan"
      },
      {
        "id": 1141,
        "kabkot_id": 92,
        "kecamatan": "Sungai Bahar"
      },
      {
        "id": 1142,
        "kabkot_id": 92,
        "kecamatan": "Sungai Gelam"
      },
      {
        "id": 1143,
        "kabkot_id": 92,
        "kecamatan": "Taman Rajo"
      },
      {
        "id": 1144,
        "kabkot_id": 93,
        "kecamatan": "Air Hitam"
      },
      {
        "id": 1145,
        "kabkot_id": 93,
        "kecamatan": "Batang Asai"
      },
      {
        "id": 1146,
        "kabkot_id": 93,
        "kecamatan": "Bathin VIII (Batin VIII)"
      },
      {
        "id": 1147,
        "kabkot_id": 93,
        "kecamatan": "Cermin Nan Gadang"
      },
      {
        "id": 1148,
        "kabkot_id": 93,
        "kecamatan": "Limun"
      },
      {
        "id": 1149,
        "kabkot_id": 93,
        "kecamatan": "Mandiangin"
      },
      {
        "id": 1150,
        "kabkot_id": 93,
        "kecamatan": "Pauh"
      },
      {
        "id": 1151,
        "kabkot_id": 93,
        "kecamatan": "Pelawan"
      },
      {
        "id": 1152,
        "kabkot_id": 93,
        "kecamatan": "Sarolangun"
      },
      {
        "id": 1153,
        "kabkot_id": 93,
        "kecamatan": "Singkut"
      },
      {
        "id": 1154,
        "kabkot_id": 94,
        "kecamatan": "Batang Asam"
      },
      {
        "id": 1155,
        "kabkot_id": 94,
        "kecamatan": "Betara"
      },
      {
        "id": 1156,
        "kabkot_id": 94,
        "kecamatan": "Bram Itam"
      },
      {
        "id": 1157,
        "kabkot_id": 94,
        "kecamatan": "Kuala Betara"
      },
      {
        "id": 1158,
        "kabkot_id": 94,
        "kecamatan": "Merlung"
      },
      {
        "id": 1159,
        "kabkot_id": 94,
        "kecamatan": "Muara Papalik"
      },
      {
        "id": 1160,
        "kabkot_id": 94,
        "kecamatan": "Pengabuan"
      },
      {
        "id": 1161,
        "kabkot_id": 94,
        "kecamatan": "Renah Mendaluh"
      },
      {
        "id": 1162,
        "kabkot_id": 94,
        "kecamatan": "Seberang Kota"
      },
      {
        "id": 1163,
        "kabkot_id": 94,
        "kecamatan": "Senyerang"
      },
      {
        "id": 1164,
        "kabkot_id": 94,
        "kecamatan": "Tebing Tinggi"
      },
      {
        "id": 1165,
        "kabkot_id": 94,
        "kecamatan": "Tungkal Ilir"
      },
      {
        "id": 1166,
        "kabkot_id": 94,
        "kecamatan": "Tungkal Ulu"
      },
      {
        "id": 1167,
        "kabkot_id": 95,
        "kecamatan": "Berbak"
      },
      {
        "id": 1168,
        "kabkot_id": 95,
        "kecamatan": "Dendang"
      },
      {
        "id": 1169,
        "kabkot_id": 95,
        "kecamatan": "Geragai"
      },
      {
        "id": 1170,
        "kabkot_id": 95,
        "kecamatan": "Kuala Jambi"
      },
      {
        "id": 1171,
        "kabkot_id": 95,
        "kecamatan": "Mendahara"
      },
      {
        "id": 1172,
        "kabkot_id": 95,
        "kecamatan": "Mendahara Ulu"
      },
      {
        "id": 1173,
        "kabkot_id": 95,
        "kecamatan": "Muara Sabak Barat"
      },
      {
        "id": 1174,
        "kabkot_id": 95,
        "kecamatan": "Muara Sabak Timur"
      },
      {
        "id": 1175,
        "kabkot_id": 95,
        "kecamatan": "Nipah Panjang"
      },
      {
        "id": 1176,
        "kabkot_id": 95,
        "kecamatan": "Rantau Rasau"
      },
      {
        "id": 1177,
        "kabkot_id": 95,
        "kecamatan": "Sadu"
      },
      {
        "id": 1178,
        "kabkot_id": 96,
        "kecamatan": "Muara Tabir"
      },
      {
        "id": 1179,
        "kabkot_id": 96,
        "kecamatan": "Rimbo Bujang"
      },
      {
        "id": 1180,
        "kabkot_id": 96,
        "kecamatan": "Rimbo Ilir"
      },
      {
        "id": 1181,
        "kabkot_id": 96,
        "kecamatan": "Rimbo Ulu"
      },
      {
        "id": 1182,
        "kabkot_id": 96,
        "kecamatan": "Serai Serumpun"
      },
      {
        "id": 1183,
        "kabkot_id": 96,
        "kecamatan": "Sumay"
      },
      {
        "id": 1184,
        "kabkot_id": 96,
        "kecamatan": "Tebo Ilir"
      },
      {
        "id": 1185,
        "kabkot_id": 96,
        "kecamatan": "Tebo Tengah"
      },
      {
        "id": 1186,
        "kabkot_id": 96,
        "kecamatan": "Tebo Ulu"
      },
      {
        "id": 1187,
        "kabkot_id": 96,
        "kecamatan": "Tengah Ilir"
      },
      {
        "id": 1188,
        "kabkot_id": 96,
        "kecamatan": "VII Koto"
      },
      {
        "id": 1189,
        "kabkot_id": 96,
        "kecamatan": "VII Koto Ilir"
      },
      {
        "id": 1190,
        "kabkot_id": 97,
        "kecamatan": "Danau Teluk"
      },
      {
        "id": 1191,
        "kabkot_id": 97,
        "kecamatan": "Jambi Selatan"
      },
      {
        "id": 1192,
        "kabkot_id": 97,
        "kecamatan": "Jambi Timur"
      },
      {
        "id": 1193,
        "kabkot_id": 97,
        "kecamatan": "Jelutung"
      },
      {
        "id": 1194,
        "kabkot_id": 97,
        "kecamatan": "Kota Baru"
      },
      {
        "id": 1195,
        "kabkot_id": 97,
        "kecamatan": "Pasar Jambi"
      },
      {
        "id": 1196,
        "kabkot_id": 97,
        "kecamatan": "Pelayangan"
      },
      {
        "id": 1197,
        "kabkot_id": 97,
        "kecamatan": "Telanaipura"
      },
      {
        "id": 1198,
        "kabkot_id": 98,
        "kecamatan": "Hamparan Rawang"
      },
      {
        "id": 1199,
        "kabkot_id": 98,
        "kecamatan": "Koto Baru"
      },
      {
        "id": 1200,
        "kabkot_id": 98,
        "kecamatan": "Kumun Debai"
      },
      {
        "id": 1201,
        "kabkot_id": 98,
        "kecamatan": "Pesisir Bukit"
      },
      {
        "id": 1202,
        "kabkot_id": 98,
        "kecamatan": "Pondok Tinggi"
      },
      {
        "id": 1203,
        "kabkot_id": 98,
        "kecamatan": "Sungai Bungkal"
      },
      {
        "id": 1204,
        "kabkot_id": 98,
        "kecamatan": "Sungai Penuh"
      },
      {
        "id": 1205,
        "kabkot_id": 98,
        "kecamatan": "Tanah Kampung"
      },
      {
        "id": 1206,
        "kabkot_id": 99,
        "kecamatan": "Air Kumbang"
      },
      {
        "id": 1207,
        "kabkot_id": 99,
        "kecamatan": "Air Salek"
      },
      {
        "id": 1208,
        "kabkot_id": 99,
        "kecamatan": "Banyuasin I"
      },
      {
        "id": 1209,
        "kabkot_id": 99,
        "kecamatan": "Banyuasin II"
      },
      {
        "id": 1210,
        "kabkot_id": 99,
        "kecamatan": "Banyuasin III"
      },
      {
        "id": 1211,
        "kabkot_id": 99,
        "kecamatan": "Betung"
      },
      {
        "id": 1212,
        "kabkot_id": 99,
        "kecamatan": "Makarti Jaya"
      },
      {
        "id": 1213,
        "kabkot_id": 99,
        "kecamatan": "Muara Padang"
      },
      {
        "id": 1214,
        "kabkot_id": 99,
        "kecamatan": "Muara Sugihan"
      },
      {
        "id": 1215,
        "kabkot_id": 99,
        "kecamatan": "Muara Telang"
      },
      {
        "id": 1216,
        "kabkot_id": 99,
        "kecamatan": "Pulau Rimau"
      },
      {
        "id": 1217,
        "kabkot_id": 99,
        "kecamatan": "Rambutan"
      },
      {
        "id": 1218,
        "kabkot_id": 99,
        "kecamatan": "Rantau Bayur"
      },
      {
        "id": 1219,
        "kabkot_id": 99,
        "kecamatan": "Sembawa"
      },
      {
        "id": 1220,
        "kabkot_id": 99,
        "kecamatan": "Suak Tapeh"
      },
      {
        "id": 1221,
        "kabkot_id": 99,
        "kecamatan": "Sumber Marga Telang"
      },
      {
        "id": 1222,
        "kabkot_id": 99,
        "kecamatan": "Talang Kelapa"
      },
      {
        "id": 1223,
        "kabkot_id": 99,
        "kecamatan": "Tanjung Lago"
      },
      {
        "id": 1224,
        "kabkot_id": 99,
        "kecamatan": "Tungkal Ilir"
      },
      {
        "id": 1225,
        "kabkot_id": 100,
        "kecamatan": "Lintang Kanan"
      },
      {
        "id": 1226,
        "kabkot_id": 100,
        "kecamatan": "Muara Pinang"
      },
      {
        "id": 1227,
        "kabkot_id": 100,
        "kecamatan": "Pasemah Air Keruh"
      },
      {
        "id": 1228,
        "kabkot_id": 100,
        "kecamatan": "Pendopo"
      },
      {
        "id": 1229,
        "kabkot_id": 100,
        "kecamatan": "Pendopo Barat"
      },
      {
        "id": 1230,
        "kabkot_id": 100,
        "kecamatan": "Saling"
      },
      {
        "id": 1231,
        "kabkot_id": 100,
        "kecamatan": "Sikap Dalam"
      },
      {
        "id": 1232,
        "kabkot_id": 100,
        "kecamatan": "Talang Padang"
      },
      {
        "id": 1233,
        "kabkot_id": 100,
        "kecamatan": "Tebing Tinggi"
      },
      {
        "id": 1234,
        "kabkot_id": 100,
        "kecamatan": "Ulu Musi"
      },
      {
        "id": 1235,
        "kabkot_id": 101,
        "kecamatan": "Gumay Talang"
      },
      {
        "id": 1236,
        "kabkot_id": 101,
        "kecamatan": "Gumay Ulu"
      },
      {
        "id": 1237,
        "kabkot_id": 101,
        "kecamatan": "Jarai"
      },
      {
        "id": 1238,
        "kabkot_id": 101,
        "kecamatan": "Kikim Barat"
      },
      {
        "id": 1239,
        "kabkot_id": 101,
        "kecamatan": "Kikim Selatan"
      },
      {
        "id": 1240,
        "kabkot_id": 101,
        "kecamatan": "Kikim Tengah"
      },
      {
        "id": 1241,
        "kabkot_id": 101,
        "kecamatan": "Kikim Timur"
      },
      {
        "id": 1242,
        "kabkot_id": 101,
        "kecamatan": "Kota Agung"
      },
      {
        "id": 1243,
        "kabkot_id": 101,
        "kecamatan": "Lahat"
      },
      {
        "id": 1244,
        "kabkot_id": 101,
        "kecamatan": "Merapi Barat"
      },
      {
        "id": 1245,
        "kabkot_id": 101,
        "kecamatan": "Merapi Selatan"
      },
      {
        "id": 1246,
        "kabkot_id": 101,
        "kecamatan": "Merapi Timur"
      },
      {
        "id": 1247,
        "kabkot_id": 101,
        "kecamatan": "Muarapayang"
      },
      {
        "id": 1248,
        "kabkot_id": 101,
        "kecamatan": "Mulak Ulu"
      },
      {
        "id": 1249,
        "kabkot_id": 101,
        "kecamatan": "Pagar Gunung"
      },
      {
        "id": 1250,
        "kabkot_id": 101,
        "kecamatan": "Pajar Bulan"
      },
      {
        "id": 1251,
        "kabkot_id": 101,
        "kecamatan": "Pseksu"
      },
      {
        "id": 1252,
        "kabkot_id": 101,
        "kecamatan": "Pulau Pinang"
      },
      {
        "id": 1253,
        "kabkot_id": 101,
        "kecamatan": "Sukamerindu"
      },
      {
        "id": 1254,
        "kabkot_id": 101,
        "kecamatan": "Tanjung Sakti Pumi"
      },
      {
        "id": 1255,
        "kabkot_id": 101,
        "kecamatan": "Tanjung Sakti Pumu"
      },
      {
        "id": 1256,
        "kabkot_id": 101,
        "kecamatan": "Tanjung Tebat"
      },
      {
        "id": 1257,
        "kabkot_id": 102,
        "kecamatan": "Belida Darat"
      },
      {
        "id": 1258,
        "kabkot_id": 102,
        "kecamatan": "Belimbing"
      },
      {
        "id": 1259,
        "kabkot_id": 102,
        "kecamatan": "Benakat"
      },
      {
        "id": 1260,
        "kabkot_id": 102,
        "kecamatan": "Gelumbang"
      },
      {
        "id": 1261,
        "kabkot_id": 102,
        "kecamatan": "Gunung Megang"
      },
      {
        "id": 1262,
        "kabkot_id": 102,
        "kecamatan": "Kelekar"
      },
      {
        "id": 1263,
        "kabkot_id": 102,
        "kecamatan": "Lawang Kidul"
      },
      {
        "id": 1264,
        "kabkot_id": 102,
        "kecamatan": "Lembak"
      },
      {
        "id": 1265,
        "kabkot_id": 102,
        "kecamatan": "Lubai"
      },
      {
        "id": 1266,
        "kabkot_id": 102,
        "kecamatan": "Lubai Ulu"
      },
      {
        "id": 1267,
        "kabkot_id": 102,
        "kecamatan": "Muara Belida"
      },
      {
        "id": 1268,
        "kabkot_id": 102,
        "kecamatan": "Muara Enim"
      },
      {
        "id": 1269,
        "kabkot_id": 102,
        "kecamatan": "Rambang"
      },
      {
        "id": 1270,
        "kabkot_id": 102,
        "kecamatan": "Rambang Dangku"
      },
      {
        "id": 1271,
        "kabkot_id": 102,
        "kecamatan": "Semende Darat Laut"
      },
      {
        "id": 1272,
        "kabkot_id": 102,
        "kecamatan": "Semende Darat Tengah"
      },
      {
        "id": 1273,
        "kabkot_id": 102,
        "kecamatan": "Semende Darat Ulu"
      },
      {
        "id": 1274,
        "kabkot_id": 102,
        "kecamatan": "Sungai Rotan"
      },
      {
        "id": 1275,
        "kabkot_id": 102,
        "kecamatan": "Tanjung Agung"
      },
      {
        "id": 1276,
        "kabkot_id": 102,
        "kecamatan": "Ujan Mas"
      },
      {
        "id": 1277,
        "kabkot_id": 103,
        "kecamatan": "Babat Supat"
      },
      {
        "id": 1278,
        "kabkot_id": 103,
        "kecamatan": "Babat Toman"
      },
      {
        "id": 1279,
        "kabkot_id": 103,
        "kecamatan": "Batanghari Leko"
      },
      {
        "id": 1280,
        "kabkot_id": 103,
        "kecamatan": "Bayung Lencir"
      },
      {
        "id": 1281,
        "kabkot_id": 103,
        "kecamatan": "Keluang"
      },
      {
        "id": 1282,
        "kabkot_id": 103,
        "kecamatan": "Lais"
      },
      {
        "id": 1283,
        "kabkot_id": 103,
        "kecamatan": "Lalan (Sungai Lalan)"
      },
      {
        "id": 1284,
        "kabkot_id": 103,
        "kecamatan": "Lawang Wetan"
      },
      {
        "id": 1285,
        "kabkot_id": 103,
        "kecamatan": "Plakat Tinggi (Pelakat Tinggi)"
      },
      {
        "id": 1286,
        "kabkot_id": 103,
        "kecamatan": "Sanga Desa"
      },
      {
        "id": 1287,
        "kabkot_id": 103,
        "kecamatan": "Sekayu"
      },
      {
        "id": 1288,
        "kabkot_id": 103,
        "kecamatan": "Sungai Keruh"
      },
      {
        "id": 1289,
        "kabkot_id": 103,
        "kecamatan": "Sungai Lilin"
      },
      {
        "id": 1290,
        "kabkot_id": 103,
        "kecamatan": "Tungkal Jaya"
      },
      {
        "id": 1291,
        "kabkot_id": 104,
        "kecamatan": "BTS Ulu"
      },
      {
        "id": 1292,
        "kabkot_id": 104,
        "kecamatan": "Jaya Loka"
      },
      {
        "id": 1293,
        "kabkot_id": 104,
        "kecamatan": "Megang Sakti"
      },
      {
        "id": 1294,
        "kabkot_id": 104,
        "kecamatan": "Muara Beliti"
      },
      {
        "id": 1295,
        "kabkot_id": 104,
        "kecamatan": "Muara Kelingi"
      },
      {
        "id": 1296,
        "kabkot_id": 104,
        "kecamatan": "Muara Lakitan"
      },
      {
        "id": 1297,
        "kabkot_id": 104,
        "kecamatan": "Purwodadi"
      },
      {
        "id": 1298,
        "kabkot_id": 104,
        "kecamatan": "Selangit"
      },
      {
        "id": 1299,
        "kabkot_id": 104,
        "kecamatan": "Sukakarya"
      },
      {
        "id": 1300,
        "kabkot_id": 104,
        "kecamatan": "Suku Tengah Lakitan Ulu Terawas"
      },
      {
        "id": 1301,
        "kabkot_id": 104,
        "kecamatan": "Sumber Harta"
      },
      {
        "id": 1302,
        "kabkot_id": 104,
        "kecamatan": "Tiang Pumpung Kepungut"
      },
      {
        "id": 1303,
        "kabkot_id": 104,
        "kecamatan": "Tuah Negeri"
      },
      {
        "id": 1304,
        "kabkot_id": 104,
        "kecamatan": "Tugumulyo"
      },
      {
        "id": 1305,
        "kabkot_id": 105,
        "kecamatan": "Karang Dapo"
      },
      {
        "id": 1306,
        "kabkot_id": 105,
        "kecamatan": "Karang Jaya"
      },
      {
        "id": 1307,
        "kabkot_id": 105,
        "kecamatan": "Nibung"
      },
      {
        "id": 1308,
        "kabkot_id": 105,
        "kecamatan": "Rawas Ilir"
      },
      {
        "id": 1309,
        "kabkot_id": 105,
        "kecamatan": "Rawas Ulu"
      },
      {
        "id": 1310,
        "kabkot_id": 105,
        "kecamatan": "Rupit"
      },
      {
        "id": 1311,
        "kabkot_id": 105,
        "kecamatan": "Ulu Rawas"
      },
      {
        "id": 1312,
        "kabkot_id": 106,
        "kecamatan": "Indralaya"
      },
      {
        "id": 1313,
        "kabkot_id": 106,
        "kecamatan": "Indralaya Selatan"
      },
      {
        "id": 1314,
        "kabkot_id": 106,
        "kecamatan": "Indralaya Utara"
      },
      {
        "id": 1315,
        "kabkot_id": 106,
        "kecamatan": "Kandis"
      },
      {
        "id": 1316,
        "kabkot_id": 106,
        "kecamatan": "Lubuk Keliat"
      },
      {
        "id": 1317,
        "kabkot_id": 106,
        "kecamatan": "Muara Kuang"
      },
      {
        "id": 1318,
        "kabkot_id": 106,
        "kecamatan": "Payaraman"
      },
      {
        "id": 1319,
        "kabkot_id": 106,
        "kecamatan": "Pemulutan"
      },
      {
        "id": 1320,
        "kabkot_id": 106,
        "kecamatan": "Pemulutan Barat"
      },
      {
        "id": 1321,
        "kabkot_id": 106,
        "kecamatan": "Pemulutan Selatan"
      },
      {
        "id": 1322,
        "kabkot_id": 106,
        "kecamatan": "Rambang Kuang"
      },
      {
        "id": 1323,
        "kabkot_id": 106,
        "kecamatan": "Rantau Alai"
      },
      {
        "id": 1324,
        "kabkot_id": 106,
        "kecamatan": "Rantau Panjang"
      },
      {
        "id": 1325,
        "kabkot_id": 106,
        "kecamatan": "Sungai Pinang"
      },
      {
        "id": 1326,
        "kabkot_id": 106,
        "kecamatan": "Tanjung Batu"
      },
      {
        "id": 1327,
        "kabkot_id": 106,
        "kecamatan": "Tanjung Raja"
      },
      {
        "id": 1328,
        "kabkot_id": 107,
        "kecamatan": "Air Sugihan"
      },
      {
        "id": 1329,
        "kabkot_id": 107,
        "kecamatan": "Cengal"
      },
      {
        "id": 1330,
        "kabkot_id": 107,
        "kecamatan": "Jejawi"
      },
      {
        "id": 1331,
        "kabkot_id": 107,
        "kecamatan": "Kayu Agung"
      },
      {
        "id": 1332,
        "kabkot_id": 107,
        "kecamatan": "Lempuing"
      },
      {
        "id": 1333,
        "kabkot_id": 107,
        "kecamatan": "Lempuing Jaya"
      },
      {
        "id": 1334,
        "kabkot_id": 107,
        "kecamatan": "Mesuji"
      },
      {
        "id": 1335,
        "kabkot_id": 107,
        "kecamatan": "Mesuji Makmur"
      },
      {
        "id": 1336,
        "kabkot_id": 107,
        "kecamatan": "Mesuji Raya"
      },
      {
        "id": 1337,
        "kabkot_id": 107,
        "kecamatan": "Pampangan"
      },
      {
        "id": 1338,
        "kabkot_id": 107,
        "kecamatan": "Pangkalan Lampam"
      },
      {
        "id": 1339,
        "kabkot_id": 107,
        "kecamatan": "Pedamaran"
      },
      {
        "id": 1340,
        "kabkot_id": 107,
        "kecamatan": "Pedamaran Timur"
      },
      {
        "id": 1341,
        "kabkot_id": 107,
        "kecamatan": "Sirah Pulau Padang"
      },
      {
        "id": 1342,
        "kabkot_id": 107,
        "kecamatan": "Sungai Menang"
      },
      {
        "id": 1343,
        "kabkot_id": 107,
        "kecamatan": "Tanjung Lubuk"
      },
      {
        "id": 1344,
        "kabkot_id": 107,
        "kecamatan": "Teluk Gelam"
      },
      {
        "id": 1345,
        "kabkot_id": 107,
        "kecamatan": "Tulung Selapan"
      },
      {
        "id": 1346,
        "kabkot_id": 108,
        "kecamatan": "Baturaja Barat"
      },
      {
        "id": 1347,
        "kabkot_id": 108,
        "kecamatan": "Baturaja Timur"
      },
      {
        "id": 1348,
        "kabkot_id": 108,
        "kecamatan": "Lengkiti"
      },
      {
        "id": 1349,
        "kabkot_id": 108,
        "kecamatan": "Lubuk Batang"
      },
      {
        "id": 1350,
        "kabkot_id": 108,
        "kecamatan": "Lubuk Raja"
      },
      {
        "id": 1351,
        "kabkot_id": 108,
        "kecamatan": "Muara Jaya"
      },
      {
        "id": 1352,
        "kabkot_id": 108,
        "kecamatan": "Pengandonan"
      },
      {
        "id": 1353,
        "kabkot_id": 108,
        "kecamatan": "Peninjauan"
      },
      {
        "id": 1354,
        "kabkot_id": 108,
        "kecamatan": "Semidang Aji"
      },
      {
        "id": 1355,
        "kabkot_id": 108,
        "kecamatan": "Sinar Peninjauan"
      },
      {
        "id": 1356,
        "kabkot_id": 108,
        "kecamatan": "Sosoh Buay Rayap"
      },
      {
        "id": 1357,
        "kabkot_id": 108,
        "kecamatan": "Ulu Ogan"
      },
      {
        "id": 1358,
        "kabkot_id": 109,
        "kecamatan": "Banding Agung"
      },
      {
        "id": 1359,
        "kabkot_id": 109,
        "kecamatan": "Buana Pemaca"
      },
      {
        "id": 1360,
        "kabkot_id": 109,
        "kecamatan": "Buay Pemaca"
      },
      {
        "id": 1361,
        "kabkot_id": 109,
        "kecamatan": "Buay Pematang Ribu Ranau Tengah"
      },
      {
        "id": 1362,
        "kabkot_id": 109,
        "kecamatan": "Buay Rawan"
      },
      {
        "id": 1363,
        "kabkot_id": 109,
        "kecamatan": "Buay Runjung"
      },
      {
        "id": 1364,
        "kabkot_id": 109,
        "kecamatan": "Buay Sandang Aji"
      },
      {
        "id": 1365,
        "kabkot_id": 109,
        "kecamatan": "Kisam Ilir"
      },
      {
        "id": 1366,
        "kabkot_id": 109,
        "kecamatan": "Kisam Tinggi"
      },
      {
        "id": 1367,
        "kabkot_id": 109,
        "kecamatan": "Mekakau Ilir"
      },
      {
        "id": 1368,
        "kabkot_id": 109,
        "kecamatan": "Muaradua"
      },
      {
        "id": 1369,
        "kabkot_id": 109,
        "kecamatan": "Muaradua Kisam"
      },
      {
        "id": 1370,
        "kabkot_id": 109,
        "kecamatan": "Pulau Beringin"
      },
      {
        "id": 1371,
        "kabkot_id": 109,
        "kecamatan": "Runjung Agung"
      },
      {
        "id": 1372,
        "kabkot_id": 109,
        "kecamatan": "Simpang"
      },
      {
        "id": 1373,
        "kabkot_id": 109,
        "kecamatan": "Sindang Danau"
      },
      {
        "id": 1374,
        "kabkot_id": 109,
        "kecamatan": "Sungai Are"
      },
      {
        "id": 1375,
        "kabkot_id": 109,
        "kecamatan": "Tiga Dihaji"
      },
      {
        "id": 1376,
        "kabkot_id": 109,
        "kecamatan": "Warkuk Ranau Selatan"
      },
      {
        "id": 1377,
        "kabkot_id": 110,
        "kecamatan": "Belitang"
      },
      {
        "id": 1378,
        "kabkot_id": 110,
        "kecamatan": "Belitang II"
      },
      {
        "id": 1379,
        "kabkot_id": 110,
        "kecamatan": "Belitang III"
      },
      {
        "id": 1380,
        "kabkot_id": 110,
        "kecamatan": "Belitang Jaya"
      },
      {
        "id": 1381,
        "kabkot_id": 110,
        "kecamatan": "Belitang Madang Raya"
      },
      {
        "id": 1382,
        "kabkot_id": 110,
        "kecamatan": "Belitang Mulya"
      },
      {
        "id": 1383,
        "kabkot_id": 110,
        "kecamatan": "Buay Madang"
      },
      {
        "id": 1384,
        "kabkot_id": 110,
        "kecamatan": "Buay Madang Timur"
      },
      {
        "id": 1385,
        "kabkot_id": 110,
        "kecamatan": "Buay Pemuka Bangsa Raja"
      },
      {
        "id": 1386,
        "kabkot_id": 110,
        "kecamatan": "Buay Pemuka Peliung"
      },
      {
        "id": 1387,
        "kabkot_id": 110,
        "kecamatan": "Bunga Mayang"
      },
      {
        "id": 1388,
        "kabkot_id": 110,
        "kecamatan": "Cempaka"
      },
      {
        "id": 1389,
        "kabkot_id": 110,
        "kecamatan": "Jayapura"
      },
      {
        "id": 1390,
        "kabkot_id": 110,
        "kecamatan": "Madang Suku I"
      },
      {
        "id": 1391,
        "kabkot_id": 110,
        "kecamatan": "Madang Suku II"
      },
      {
        "id": 1392,
        "kabkot_id": 110,
        "kecamatan": "Madang Suku III"
      },
      {
        "id": 1393,
        "kabkot_id": 110,
        "kecamatan": "Martapura"
      },
      {
        "id": 1394,
        "kabkot_id": 110,
        "kecamatan": "Semendawai Barat"
      },
      {
        "id": 1395,
        "kabkot_id": 110,
        "kecamatan": "Semendawai Suku III"
      },
      {
        "id": 1396,
        "kabkot_id": 110,
        "kecamatan": "Semendawai Timur"
      },
      {
        "id": 1397,
        "kabkot_id": 111,
        "kecamatan": "Abab"
      },
      {
        "id": 1398,
        "kabkot_id": 111,
        "kecamatan": "Penukal"
      },
      {
        "id": 1399,
        "kabkot_id": 111,
        "kecamatan": "Penukal Utara"
      },
      {
        "id": 1400,
        "kabkot_id": 111,
        "kecamatan": "Talang Ubi"
      },
      {
        "id": 1401,
        "kabkot_id": 111,
        "kecamatan": "Tanah Abang"
      },
      {
        "id": 1402,
        "kabkot_id": 112,
        "kecamatan": "Lubuk Linggau Barat Dua (II)"
      },
      {
        "id": 1403,
        "kabkot_id": 112,
        "kecamatan": "Lubuk Linggau Barat Satu (I)"
      },
      {
        "id": 1404,
        "kabkot_id": 112,
        "kecamatan": "Lubuk Linggau Selatan Dua (II)"
      },
      {
        "id": 1405,
        "kabkot_id": 112,
        "kecamatan": "Lubuk Linggau Selatan Satu (I)"
      },
      {
        "id": 1406,
        "kabkot_id": 112,
        "kecamatan": "Lubuk Linggau Timur Dua (II)"
      },
      {
        "id": 1407,
        "kabkot_id": 112,
        "kecamatan": "Lubuk Linggau Timur Satu (I)"
      },
      {
        "id": 1408,
        "kabkot_id": 112,
        "kecamatan": "Lubuk Linggau Utara Dua (II)"
      },
      {
        "id": 1409,
        "kabkot_id": 112,
        "kecamatan": "Lubuk Linggau Utara Satu (I)"
      },
      {
        "id": 1410,
        "kabkot_id": 113,
        "kecamatan": "Dempo Selatan"
      },
      {
        "id": 1411,
        "kabkot_id": 113,
        "kecamatan": "Dempo Tengah"
      },
      {
        "id": 1412,
        "kabkot_id": 113,
        "kecamatan": "Dempo Utara"
      },
      {
        "id": 1413,
        "kabkot_id": 113,
        "kecamatan": "Pagar Alam Selatan"
      },
      {
        "id": 1414,
        "kabkot_id": 113,
        "kecamatan": "Pagar Alam Utara"
      },
      {
        "id": 1415,
        "kabkot_id": 114,
        "kecamatan": "Alang-Alang Lebar"
      },
      {
        "id": 1416,
        "kabkot_id": 114,
        "kecamatan": "Bukit Kecil"
      },
      {
        "id": 1417,
        "kabkot_id": 114,
        "kecamatan": "Gandus"
      },
      {
        "id": 1418,
        "kabkot_id": 114,
        "kecamatan": "Ilir Barat I"
      },
      {
        "id": 1419,
        "kabkot_id": 114,
        "kecamatan": "Ilir Barat II"
      },
      {
        "id": 1420,
        "kabkot_id": 114,
        "kecamatan": "Ilir Timur I"
      },
      {
        "id": 1421,
        "kabkot_id": 114,
        "kecamatan": "Ilir Timur II"
      },
      {
        "id": 1422,
        "kabkot_id": 114,
        "kecamatan": "Kalidoni"
      },
      {
        "id": 1423,
        "kabkot_id": 114,
        "kecamatan": "Kemuning"
      },
      {
        "id": 1424,
        "kabkot_id": 114,
        "kecamatan": "Kertapati"
      },
      {
        "id": 1425,
        "kabkot_id": 114,
        "kecamatan": "Plaju"
      },
      {
        "id": 1426,
        "kabkot_id": 114,
        "kecamatan": "Sako"
      },
      {
        "id": 1427,
        "kabkot_id": 114,
        "kecamatan": "Seberang Ulu I"
      },
      {
        "id": 1428,
        "kabkot_id": 114,
        "kecamatan": "Seberang Ulu II"
      },
      {
        "id": 1429,
        "kabkot_id": 114,
        "kecamatan": "Sematang Borang"
      },
      {
        "id": 1430,
        "kabkot_id": 114,
        "kecamatan": "Sukarami"
      },
      {
        "id": 1431,
        "kabkot_id": 115,
        "kecamatan": "Cambai"
      },
      {
        "id": 1432,
        "kabkot_id": 115,
        "kecamatan": "Prabumulih Barat"
      },
      {
        "id": 1433,
        "kabkot_id": 115,
        "kecamatan": "Prabumulih Selatan"
      },
      {
        "id": 1434,
        "kabkot_id": 115,
        "kecamatan": "Prabumulih Timur"
      },
      {
        "id": 1435,
        "kabkot_id": 115,
        "kecamatan": "Prabumulih Utara"
      },
      {
        "id": 1436,
        "kabkot_id": 115,
        "kecamatan": "Rambang Kapak Tengah"
      },
      {
        "id": 1437,
        "kabkot_id": 116,
        "kecamatan": "Air Nipis"
      },
      {
        "id": 1438,
        "kabkot_id": 116,
        "kecamatan": "Bunga Mas"
      },
      {
        "id": 1439,
        "kabkot_id": 116,
        "kecamatan": "Kedurang"
      },
      {
        "id": 1440,
        "kabkot_id": 116,
        "kecamatan": "Kedurang Ilir"
      },
      {
        "id": 1441,
        "kabkot_id": 116,
        "kecamatan": "Kota Manna"
      },
      {
        "id": 1442,
        "kabkot_id": 116,
        "kecamatan": "Manna"
      },
      {
        "id": 1443,
        "kabkot_id": 116,
        "kecamatan": "Pasar Manna"
      },
      {
        "id": 1444,
        "kabkot_id": 116,
        "kecamatan": "Pino"
      },
      {
        "id": 1445,
        "kabkot_id": 116,
        "kecamatan": "Pinoraya"
      },
      {
        "id": 1446,
        "kabkot_id": 116,
        "kecamatan": "Seginim"
      },
      {
        "id": 1447,
        "kabkot_id": 116,
        "kecamatan": "Ulu Manna"
      },
      {
        "id": 1448,
        "kabkot_id": 117,
        "kecamatan": "Bang Haji"
      },
      {
        "id": 1449,
        "kabkot_id": 117,
        "kecamatan": "Karang Tinggi"
      },
      {
        "id": 1450,
        "kabkot_id": 117,
        "kecamatan": "Merigi Kelindang"
      },
      {
        "id": 1451,
        "kabkot_id": 117,
        "kecamatan": "Merigi Sakti"
      },
      {
        "id": 1452,
        "kabkot_id": 117,
        "kecamatan": "Pagar Jati"
      },
      {
        "id": 1453,
        "kabkot_id": 117,
        "kecamatan": "Pematang Tiga"
      },
      {
        "id": 1454,
        "kabkot_id": 117,
        "kecamatan": "Pondok Kelapa"
      },
      {
        "id": 1455,
        "kabkot_id": 117,
        "kecamatan": "Pondok Kubang"
      },
      {
        "id": 1456,
        "kabkot_id": 117,
        "kecamatan": "Taba Penanjung"
      },
      {
        "id": 1457,
        "kabkot_id": 117,
        "kecamatan": "Talang Empat"
      },
      {
        "id": 1458,
        "kabkot_id": 118,
        "kecamatan": "Air Besi"
      },
      {
        "id": 1459,
        "kabkot_id": 118,
        "kecamatan": "Air Napal"
      },
      {
        "id": 1460,
        "kabkot_id": 118,
        "kecamatan": "Air Padang"
      },
      {
        "id": 1461,
        "kabkot_id": 118,
        "kecamatan": "Arga Makmur"
      },
      {
        "id": 1462,
        "kabkot_id": 118,
        "kecamatan": "Arma Jaya"
      },
      {
        "id": 1463,
        "kabkot_id": 118,
        "kecamatan": "Batik Nau"
      },
      {
        "id": 1464,
        "kabkot_id": 118,
        "kecamatan": "Enggano"
      },
      {
        "id": 1465,
        "kabkot_id": 118,
        "kecamatan": "Giri Mulia"
      },
      {
        "id": 1466,
        "kabkot_id": 118,
        "kecamatan": "Hulu Palik"
      },
      {
        "id": 1467,
        "kabkot_id": 118,
        "kecamatan": "Kerkap"
      },
      {
        "id": 1468,
        "kabkot_id": 118,
        "kecamatan": "Ketahun"
      },
      {
        "id": 1469,
        "kabkot_id": 118,
        "kecamatan": "Lais"
      },
      {
        "id": 1470,
        "kabkot_id": 118,
        "kecamatan": "Napal Putih"
      },
      {
        "id": 1471,
        "kabkot_id": 118,
        "kecamatan": "Padang Jaya"
      },
      {
        "id": 1472,
        "kabkot_id": 118,
        "kecamatan": "Putri Hijau"
      },
      {
        "id": 1473,
        "kabkot_id": 118,
        "kecamatan": "Tanjung Agung Palik"
      },
      {
        "id": 1474,
        "kabkot_id": 118,
        "kecamatan": "Ulok Kupai"
      },
      {
        "id": 1475,
        "kabkot_id": 119,
        "kecamatan": "Kaur Selatan"
      },
      {
        "id": 1476,
        "kabkot_id": 119,
        "kecamatan": "Kaur Tengah"
      },
      {
        "id": 1477,
        "kabkot_id": 119,
        "kecamatan": "Kaur Utara"
      },
      {
        "id": 1478,
        "kabkot_id": 119,
        "kecamatan": "Kelam Tengah"
      },
      {
        "id": 1479,
        "kabkot_id": 119,
        "kecamatan": "Kinal"
      },
      {
        "id": 1480,
        "kabkot_id": 119,
        "kecamatan": "Luas"
      },
      {
        "id": 1481,
        "kabkot_id": 119,
        "kecamatan": "Lungkang Kule"
      },
      {
        "id": 1482,
        "kabkot_id": 119,
        "kecamatan": "Maje"
      },
      {
        "id": 1483,
        "kabkot_id": 119,
        "kecamatan": "Muara Sahung"
      },
      {
        "id": 1484,
        "kabkot_id": 119,
        "kecamatan": "Nasal"
      },
      {
        "id": 1485,
        "kabkot_id": 119,
        "kecamatan": "Padang Guci Hilir"
      },
      {
        "id": 1486,
        "kabkot_id": 119,
        "kecamatan": "Padang Guci Hulu"
      },
      {
        "id": 1487,
        "kabkot_id": 119,
        "kecamatan": "Semidang Gumai (Gumay)"
      },
      {
        "id": 1488,
        "kabkot_id": 119,
        "kecamatan": "Tanjung Kemuning"
      },
      {
        "id": 1489,
        "kabkot_id": 119,
        "kecamatan": "Tetap (Muara Tetap)"
      },
      {
        "id": 1490,
        "kabkot_id": 120,
        "kecamatan": "Bermani Ilir"
      },
      {
        "id": 1491,
        "kabkot_id": 120,
        "kecamatan": "Kebawetan"
      },
      {
        "id": 1492,
        "kabkot_id": 120,
        "kecamatan": "Kepahiang"
      },
      {
        "id": 1493,
        "kabkot_id": 120,
        "kecamatan": "Merigi"
      },
      {
        "id": 1494,
        "kabkot_id": 120,
        "kecamatan": "Muara Kemumu"
      },
      {
        "id": 1495,
        "kabkot_id": 120,
        "kecamatan": "Seberang Musi"
      },
      {
        "id": 1496,
        "kabkot_id": 120,
        "kecamatan": "Tebat Karai"
      },
      {
        "id": 1497,
        "kabkot_id": 120,
        "kecamatan": "Ujan Mas"
      },
      {
        "id": 1498,
        "kabkot_id": 121,
        "kecamatan": "Amen"
      },
      {
        "id": 1499,
        "kabkot_id": 121,
        "kecamatan": "Bingin Kuning"
      },
      {
        "id": 1500,
        "kabkot_id": 121,
        "kecamatan": "Lebong Atas"
      },
      {
        "id": 1501,
        "kabkot_id": 121,
        "kecamatan": "Lebong Sakti"
      },
      {
        "id": 1502,
        "kabkot_id": 121,
        "kecamatan": "Lebong Selatan"
      },
      {
        "id": 1503,
        "kabkot_id": 121,
        "kecamatan": "Lebong Tengah"
      },
      {
        "id": 1504,
        "kabkot_id": 121,
        "kecamatan": "Lebong Utara"
      },
      {
        "id": 1505,
        "kabkot_id": 121,
        "kecamatan": "Pelabai"
      },
      {
        "id": 1506,
        "kabkot_id": 121,
        "kecamatan": "Pinang Belapis"
      },
      {
        "id": 1507,
        "kabkot_id": 121,
        "kecamatan": "Rimbo Pengadang"
      },
      {
        "id": 1508,
        "kabkot_id": 121,
        "kecamatan": "Topos"
      },
      {
        "id": 1509,
        "kabkot_id": 121,
        "kecamatan": "Uram Jaya"
      },
      {
        "id": 1510,
        "kabkot_id": 122,
        "kecamatan": "Air Dikit"
      },
      {
        "id": 1511,
        "kabkot_id": 122,
        "kecamatan": "Air Majunto"
      },
      {
        "id": 1512,
        "kabkot_id": 122,
        "kecamatan": "Air Rami"
      },
      {
        "id": 1513,
        "kabkot_id": 122,
        "kecamatan": "Ipuh (Muko-Muko Selatan)"
      },
      {
        "id": 1514,
        "kabkot_id": 122,
        "kecamatan": "Kota Mukomuko (Mukomuko Utara)"
      },
      {
        "id": 1515,
        "kabkot_id": 122,
        "kecamatan": "Lubuk Pinang"
      },
      {
        "id": 1516,
        "kabkot_id": 122,
        "kecamatan": "Malin Deman"
      },
      {
        "id": 1517,
        "kabkot_id": 122,
        "kecamatan": "Penarik"
      },
      {
        "id": 1518,
        "kabkot_id": 122,
        "kecamatan": "Pondok Suguh"
      },
      {
        "id": 1519,
        "kabkot_id": 122,
        "kecamatan": "Selagan Raya"
      },
      {
        "id": 1520,
        "kabkot_id": 122,
        "kecamatan": "Sungai Rumbai"
      },
      {
        "id": 1521,
        "kabkot_id": 122,
        "kecamatan": "Teramang Jaya"
      },
      {
        "id": 1522,
        "kabkot_id": 122,
        "kecamatan": "Teras Terunjam"
      },
      {
        "id": 1523,
        "kabkot_id": 122,
        "kecamatan": "V Koto"
      },
      {
        "id": 1524,
        "kabkot_id": 122,
        "kecamatan": "XIV Koto"
      },
      {
        "id": 1525,
        "kabkot_id": 123,
        "kecamatan": "Bermani Ulu"
      },
      {
        "id": 1526,
        "kabkot_id": 123,
        "kecamatan": "Bermani Ulu Raya"
      },
      {
        "id": 1527,
        "kabkot_id": 123,
        "kecamatan": "Binduriang"
      },
      {
        "id": 1528,
        "kabkot_id": 123,
        "kecamatan": "Curup"
      },
      {
        "id": 1529,
        "kabkot_id": 123,
        "kecamatan": "Curup Selatan"
      },
      {
        "id": 1530,
        "kabkot_id": 123,
        "kecamatan": "Curup Tengah"
      },
      {
        "id": 1531,
        "kabkot_id": 123,
        "kecamatan": "Curup Timur"
      },
      {
        "id": 1532,
        "kabkot_id": 123,
        "kecamatan": "Curup Utara"
      },
      {
        "id": 1533,
        "kabkot_id": 123,
        "kecamatan": "Kota Padang"
      },
      {
        "id": 1534,
        "kabkot_id": 123,
        "kecamatan": "Padang Ulak Tanding"
      },
      {
        "id": 1535,
        "kabkot_id": 123,
        "kecamatan": "Selupu Rejang"
      },
      {
        "id": 1536,
        "kabkot_id": 123,
        "kecamatan": "Sindang Beliti Ilir"
      },
      {
        "id": 1537,
        "kabkot_id": 123,
        "kecamatan": "Sindang Beliti Ulu"
      },
      {
        "id": 1538,
        "kabkot_id": 123,
        "kecamatan": "Sindang Daratan"
      },
      {
        "id": 1539,
        "kabkot_id": 123,
        "kecamatan": "Sindang Kelingi"
      },
      {
        "id": 1540,
        "kabkot_id": 124,
        "kecamatan": "Air Periukan"
      },
      {
        "id": 1541,
        "kabkot_id": 124,
        "kecamatan": "Ilir Talo"
      },
      {
        "id": 1542,
        "kabkot_id": 124,
        "kecamatan": "Lubuk Sandi"
      },
      {
        "id": 1543,
        "kabkot_id": 124,
        "kecamatan": "Seluma"
      },
      {
        "id": 1544,
        "kabkot_id": 124,
        "kecamatan": "Seluma Barat"
      },
      {
        "id": 1545,
        "kabkot_id": 124,
        "kecamatan": "Seluma Selatan"
      },
      {
        "id": 1546,
        "kabkot_id": 124,
        "kecamatan": "Seluma Timur"
      },
      {
        "id": 1547,
        "kabkot_id": 124,
        "kecamatan": "Seluma Utara"
      },
      {
        "id": 1548,
        "kabkot_id": 124,
        "kecamatan": "Semidang Alas"
      },
      {
        "id": 1549,
        "kabkot_id": 124,
        "kecamatan": "Semidang Alas Maras"
      },
      {
        "id": 1550,
        "kabkot_id": 124,
        "kecamatan": "Sukaraja"
      },
      {
        "id": 1551,
        "kabkot_id": 124,
        "kecamatan": "Talo"
      },
      {
        "id": 1552,
        "kabkot_id": 124,
        "kecamatan": "Talo Kecil"
      },
      {
        "id": 1553,
        "kabkot_id": 124,
        "kecamatan": "Ulu Talo"
      },
      {
        "id": 1554,
        "kabkot_id": 125,
        "kecamatan": "Gading Cempaka"
      },
      {
        "id": 1555,
        "kabkot_id": 125,
        "kecamatan": "Kampung Melayu"
      },
      {
        "id": 1556,
        "kabkot_id": 125,
        "kecamatan": "Muara Bangka Hulu"
      },
      {
        "id": 1557,
        "kabkot_id": 125,
        "kecamatan": "Ratu Agung"
      },
      {
        "id": 1558,
        "kabkot_id": 125,
        "kecamatan": "Ratu Samban"
      },
      {
        "id": 1559,
        "kabkot_id": 125,
        "kecamatan": "Selebar"
      },
      {
        "id": 1560,
        "kabkot_id": 125,
        "kecamatan": "Singaran Pati"
      },
      {
        "id": 1561,
        "kabkot_id": 125,
        "kecamatan": "Sungai Serut"
      },
      {
        "id": 1562,
        "kabkot_id": 125,
        "kecamatan": "Teluk Segara"
      },
      {
        "id": 1563,
        "kabkot_id": 126,
        "kecamatan": "Air Hitam"
      },
      {
        "id": 1564,
        "kabkot_id": 126,
        "kecamatan": "Balik Bukit"
      },
      {
        "id": 1565,
        "kabkot_id": 126,
        "kecamatan": "Bandar Negeri Suoh"
      },
      {
        "id": 1566,
        "kabkot_id": 126,
        "kecamatan": "Batu Brak"
      },
      {
        "id": 1567,
        "kabkot_id": 126,
        "kecamatan": "Batu Ketulis"
      },
      {
        "id": 1568,
        "kabkot_id": 126,
        "kecamatan": "Belalau"
      },
      {
        "id": 1569,
        "kabkot_id": 126,
        "kecamatan": "Gedung Surian"
      },
      {
        "id": 1570,
        "kabkot_id": 126,
        "kecamatan": "Kebun Tebu"
      },
      {
        "id": 1571,
        "kabkot_id": 126,
        "kecamatan": "Lumbok Seminung"
      },
      {
        "id": 1572,
        "kabkot_id": 126,
        "kecamatan": "Pagar Dewa"
      },
      {
        "id": 1573,
        "kabkot_id": 126,
        "kecamatan": "Sekincau"
      },
      {
        "id": 1574,
        "kabkot_id": 126,
        "kecamatan": "Sukau"
      },
      {
        "id": 1575,
        "kabkot_id": 126,
        "kecamatan": "Sumber Jaya"
      },
      {
        "id": 1576,
        "kabkot_id": 126,
        "kecamatan": "Suoh"
      },
      {
        "id": 1577,
        "kabkot_id": 126,
        "kecamatan": "Way Tenong"
      },
      {
        "id": 1578,
        "kabkot_id": 127,
        "kecamatan": "Bakauheni"
      },
      {
        "id": 1579,
        "kabkot_id": 127,
        "kecamatan": "Candipuro"
      },
      {
        "id": 1580,
        "kabkot_id": 127,
        "kecamatan": "Jati Agung"
      },
      {
        "id": 1581,
        "kabkot_id": 127,
        "kecamatan": "Kalianda"
      },
      {
        "id": 1582,
        "kabkot_id": 127,
        "kecamatan": "Katibung"
      },
      {
        "id": 1583,
        "kabkot_id": 127,
        "kecamatan": "Ketapang"
      },
      {
        "id": 1584,
        "kabkot_id": 127,
        "kecamatan": "Merbau Mataram"
      },
      {
        "id": 1585,
        "kabkot_id": 127,
        "kecamatan": "Natar"
      },
      {
        "id": 1586,
        "kabkot_id": 127,
        "kecamatan": "Palas"
      },
      {
        "id": 1587,
        "kabkot_id": 127,
        "kecamatan": "Penengahan"
      },
      {
        "id": 1588,
        "kabkot_id": 127,
        "kecamatan": "Rajabasa"
      },
      {
        "id": 1589,
        "kabkot_id": 127,
        "kecamatan": "Sidomulyo"
      },
      {
        "id": 1590,
        "kabkot_id": 127,
        "kecamatan": "Sragi"
      },
      {
        "id": 1591,
        "kabkot_id": 127,
        "kecamatan": "Tanjung Bintang"
      },
      {
        "id": 1592,
        "kabkot_id": 127,
        "kecamatan": "Tanjung Sari"
      },
      {
        "id": 1593,
        "kabkot_id": 127,
        "kecamatan": "Way Panji"
      },
      {
        "id": 1594,
        "kabkot_id": 127,
        "kecamatan": "Way Sulan"
      },
      {
        "id": 1595,
        "kabkot_id": 128,
        "kecamatan": "Anak Ratu Aji"
      },
      {
        "id": 1596,
        "kabkot_id": 128,
        "kecamatan": "Anak Tuha"
      },
      {
        "id": 1597,
        "kabkot_id": 128,
        "kecamatan": "Bandar Mataram"
      },
      {
        "id": 1598,
        "kabkot_id": 128,
        "kecamatan": "Bandar Surabaya"
      },
      {
        "id": 1599,
        "kabkot_id": 128,
        "kecamatan": "Bangun Rejo"
      },
      {
        "id": 1600,
        "kabkot_id": 128,
        "kecamatan": "Bekri"
      },
      {
        "id": 1601,
        "kabkot_id": 128,
        "kecamatan": "Bumi Nabung"
      },
      {
        "id": 1602,
        "kabkot_id": 128,
        "kecamatan": "Bumi Ratu Nuban"
      },
      {
        "id": 1603,
        "kabkot_id": 128,
        "kecamatan": "Gunung Sugih"
      },
      {
        "id": 1604,
        "kabkot_id": 128,
        "kecamatan": "Kalirejo"
      },
      {
        "id": 1605,
        "kabkot_id": 128,
        "kecamatan": "Kota Gajah"
      },
      {
        "id": 1606,
        "kabkot_id": 128,
        "kecamatan": "Padang Ratu"
      },
      {
        "id": 1607,
        "kabkot_id": 128,
        "kecamatan": "Pubian"
      },
      {
        "id": 1608,
        "kabkot_id": 128,
        "kecamatan": "Punggur"
      },
      {
        "id": 1609,
        "kabkot_id": 128,
        "kecamatan": "Putra Rumbia"
      },
      {
        "id": 1610,
        "kabkot_id": 128,
        "kecamatan": "Rumbia"
      },
      {
        "id": 1611,
        "kabkot_id": 128,
        "kecamatan": "Selagai Lingga"
      },
      {
        "id": 1612,
        "kabkot_id": 128,
        "kecamatan": "Sendang Agung"
      },
      {
        "id": 1613,
        "kabkot_id": 128,
        "kecamatan": "Seputih Agung"
      },
      {
        "id": 1614,
        "kabkot_id": 128,
        "kecamatan": "Seputih Banyak"
      },
      {
        "id": 1615,
        "kabkot_id": 128,
        "kecamatan": "Seputih Mataram"
      },
      {
        "id": 1616,
        "kabkot_id": 128,
        "kecamatan": "Seputih Raman"
      },
      {
        "id": 1617,
        "kabkot_id": 128,
        "kecamatan": "Seputih Surabaya"
      },
      {
        "id": 1618,
        "kabkot_id": 128,
        "kecamatan": "Terbanggi Besar"
      },
      {
        "id": 1619,
        "kabkot_id": 128,
        "kecamatan": "Terusan Nunyai"
      },
      {
        "id": 1620,
        "kabkot_id": 128,
        "kecamatan": "Trimurjo"
      },
      {
        "id": 1621,
        "kabkot_id": 128,
        "kecamatan": "Way Pangubuan"
      },
      {
        "id": 1622,
        "kabkot_id": 128,
        "kecamatan": "Way Seputih"
      },
      {
        "id": 1623,
        "kabkot_id": 129,
        "kecamatan": "Bandar Sribawono"
      },
      {
        "id": 1624,
        "kabkot_id": 129,
        "kecamatan": "Batanghari"
      },
      {
        "id": 1625,
        "kabkot_id": 129,
        "kecamatan": "Batanghari Nuban"
      },
      {
        "id": 1626,
        "kabkot_id": 129,
        "kecamatan": "Braja Slebah"
      },
      {
        "id": 1627,
        "kabkot_id": 129,
        "kecamatan": "Bumi Agung"
      },
      {
        "id": 1628,
        "kabkot_id": 129,
        "kecamatan": "Gunung Pelindung"
      },
      {
        "id": 1629,
        "kabkot_id": 129,
        "kecamatan": "Jabung"
      },
      {
        "id": 1630,
        "kabkot_id": 129,
        "kecamatan": "Labuhan Maringgai"
      },
      {
        "id": 1631,
        "kabkot_id": 129,
        "kecamatan": "Labuhan Ratu"
      },
      {
        "id": 1632,
        "kabkot_id": 129,
        "kecamatan": "Marga Sekampung"
      },
      {
        "id": 1633,
        "kabkot_id": 129,
        "kecamatan": "Margatiga"
      },
      {
        "id": 1634,
        "kabkot_id": 129,
        "kecamatan": "Mataram Baru"
      },
      {
        "id": 1635,
        "kabkot_id": 129,
        "kecamatan": "Melinting"
      },
      {
        "id": 1636,
        "kabkot_id": 129,
        "kecamatan": "Metro Kibang"
      },
      {
        "id": 1637,
        "kabkot_id": 129,
        "kecamatan": "Pasir Sakti"
      },
      {
        "id": 1638,
        "kabkot_id": 129,
        "kecamatan": "Pekalongan"
      },
      {
        "id": 1639,
        "kabkot_id": 129,
        "kecamatan": "Purbolinggo"
      },
      {
        "id": 1640,
        "kabkot_id": 129,
        "kecamatan": "Raman Utara"
      },
      {
        "id": 1641,
        "kabkot_id": 129,
        "kecamatan": "Sekampung"
      },
      {
        "id": 1642,
        "kabkot_id": 129,
        "kecamatan": "Sekampung Udik"
      },
      {
        "id": 1643,
        "kabkot_id": 129,
        "kecamatan": "Sukadana"
      },
      {
        "id": 1644,
        "kabkot_id": 129,
        "kecamatan": "Waway Karya"
      },
      {
        "id": 1645,
        "kabkot_id": 129,
        "kecamatan": "Way Bungur (Purbolinggo Utara)"
      },
      {
        "id": 1646,
        "kabkot_id": 129,
        "kecamatan": "Way Jepara"
      },
      {
        "id": 1647,
        "kabkot_id": 130,
        "kecamatan": "Abung Barat"
      },
      {
        "id": 1648,
        "kabkot_id": 130,
        "kecamatan": "Abung Kunang"
      },
      {
        "id": 1649,
        "kabkot_id": 130,
        "kecamatan": "Abung Pekurun"
      },
      {
        "id": 1650,
        "kabkot_id": 130,
        "kecamatan": "Abung Selatan"
      },
      {
        "id": 1651,
        "kabkot_id": 130,
        "kecamatan": "Abung Semuli"
      },
      {
        "id": 1652,
        "kabkot_id": 130,
        "kecamatan": "Abung Surakarta"
      },
      {
        "id": 1653,
        "kabkot_id": 130,
        "kecamatan": "Abung Tengah"
      },
      {
        "id": 1654,
        "kabkot_id": 130,
        "kecamatan": "Abung Timur"
      },
      {
        "id": 1655,
        "kabkot_id": 130,
        "kecamatan": "Abung Tinggi"
      },
      {
        "id": 1656,
        "kabkot_id": 130,
        "kecamatan": "Blambangan Pagar"
      },
      {
        "id": 1657,
        "kabkot_id": 130,
        "kecamatan": "Bukit Kemuning"
      },
      {
        "id": 1658,
        "kabkot_id": 130,
        "kecamatan": "Bunga Mayang"
      },
      {
        "id": 1659,
        "kabkot_id": 130,
        "kecamatan": "Hulu Sungkai"
      },
      {
        "id": 1660,
        "kabkot_id": 130,
        "kecamatan": "Kotabumi"
      },
      {
        "id": 1661,
        "kabkot_id": 130,
        "kecamatan": "Kotabumi Selatan"
      },
      {
        "id": 1662,
        "kabkot_id": 130,
        "kecamatan": "Kotabumi Utara"
      },
      {
        "id": 1663,
        "kabkot_id": 130,
        "kecamatan": "Muara Sungkai"
      },
      {
        "id": 1664,
        "kabkot_id": 130,
        "kecamatan": "Sungkai Barat"
      },
      {
        "id": 1665,
        "kabkot_id": 130,
        "kecamatan": "Sungkai Jaya"
      },
      {
        "id": 1666,
        "kabkot_id": 130,
        "kecamatan": "Sungkai Selatan"
      },
      {
        "id": 1667,
        "kabkot_id": 130,
        "kecamatan": "Sungkai Tengah"
      },
      {
        "id": 1668,
        "kabkot_id": 130,
        "kecamatan": "Sungkai Utara"
      },
      {
        "id": 1669,
        "kabkot_id": 130,
        "kecamatan": "Tanjung Raja"
      },
      {
        "id": 1670,
        "kabkot_id": 131,
        "kecamatan": "Mesuji"
      },
      {
        "id": 1671,
        "kabkot_id": 131,
        "kecamatan": "Mesuji Timur"
      },
      {
        "id": 1672,
        "kabkot_id": 131,
        "kecamatan": "Panca Jaya"
      },
      {
        "id": 1673,
        "kabkot_id": 131,
        "kecamatan": "Rawa Jitu Utara"
      },
      {
        "id": 1674,
        "kabkot_id": 131,
        "kecamatan": "Simpang Pematang"
      },
      {
        "id": 1675,
        "kabkot_id": 131,
        "kecamatan": "Tanjung Raya"
      },
      {
        "id": 1676,
        "kabkot_id": 131,
        "kecamatan": "Way Serdang"
      },
      {
        "id": 1677,
        "kabkot_id": 132,
        "kecamatan": "Gedong Tataan"
      },
      {
        "id": 1678,
        "kabkot_id": 132,
        "kecamatan": "Kedondong"
      },
      {
        "id": 1679,
        "kabkot_id": 132,
        "kecamatan": "Marga Punduh"
      },
      {
        "id": 1680,
        "kabkot_id": 132,
        "kecamatan": "Negeri Katon"
      },
      {
        "id": 1681,
        "kabkot_id": 132,
        "kecamatan": "Padang Cermin"
      },
      {
        "id": 1682,
        "kabkot_id": 132,
        "kecamatan": "Punduh Pidada"
      },
      {
        "id": 1683,
        "kabkot_id": 132,
        "kecamatan": "Tegineneng"
      },
      {
        "id": 1684,
        "kabkot_id": 132,
        "kecamatan": "Way Khilau"
      },
      {
        "id": 1685,
        "kabkot_id": 132,
        "kecamatan": "Way Lima"
      },
      {
        "id": 1686,
        "kabkot_id": 133,
        "kecamatan": "Bengkunat"
      },
      {
        "id": 1687,
        "kabkot_id": 133,
        "kecamatan": "Bengkunat Belimbing"
      },
      {
        "id": 1688,
        "kabkot_id": 133,
        "kecamatan": "Karya Penggawa"
      },
      {
        "id": 1689,
        "kabkot_id": 133,
        "kecamatan": "Krui Selatan"
      },
      {
        "id": 1690,
        "kabkot_id": 133,
        "kecamatan": "Lemong"
      },
      {
        "id": 1691,
        "kabkot_id": 133,
        "kecamatan": "Ngambur"
      },
      {
        "id": 1692,
        "kabkot_id": 133,
        "kecamatan": "Pesisir Selatan"
      },
      {
        "id": 1693,
        "kabkot_id": 133,
        "kecamatan": "Pesisir Tengah"
      },
      {
        "id": 1694,
        "kabkot_id": 133,
        "kecamatan": "Pesisir Utara"
      },
      {
        "id": 1695,
        "kabkot_id": 133,
        "kecamatan": "Pulau Pisang"
      },
      {
        "id": 1696,
        "kabkot_id": 133,
        "kecamatan": "Way Krui"
      },
      {
        "id": 1697,
        "kabkot_id": 134,
        "kecamatan": "Adi Luwih"
      },
      {
        "id": 1698,
        "kabkot_id": 134,
        "kecamatan": "Ambarawa"
      },
      {
        "id": 1699,
        "kabkot_id": 134,
        "kecamatan": "Banyumas"
      },
      {
        "id": 1700,
        "kabkot_id": 134,
        "kecamatan": "Gading Rejo"
      },
      {
        "id": 1701,
        "kabkot_id": 134,
        "kecamatan": "Pagelaran"
      },
      {
        "id": 1702,
        "kabkot_id": 134,
        "kecamatan": "Pagelaran Utara"
      },
      {
        "id": 1703,
        "kabkot_id": 134,
        "kecamatan": "Pardasuka"
      },
      {
        "id": 1704,
        "kabkot_id": 134,
        "kecamatan": "Pringsewu"
      },
      {
        "id": 1705,
        "kabkot_id": 134,
        "kecamatan": "Sukoharjo"
      },
      {
        "id": 1706,
        "kabkot_id": 135,
        "kecamatan": "Air Naningan"
      },
      {
        "id": 1707,
        "kabkot_id": 135,
        "kecamatan": "Bandar Negeri Semuong"
      },
      {
        "id": 1708,
        "kabkot_id": 135,
        "kecamatan": "Bulok"
      },
      {
        "id": 1709,
        "kabkot_id": 135,
        "kecamatan": "Cukuh Balak"
      },
      {
        "id": 1710,
        "kabkot_id": 135,
        "kecamatan": "Gisting"
      },
      {
        "id": 1711,
        "kabkot_id": 135,
        "kecamatan": "Gunung Alip"
      },
      {
        "id": 1712,
        "kabkot_id": 135,
        "kecamatan": "Kelumbayan"
      },
      {
        "id": 1713,
        "kabkot_id": 135,
        "kecamatan": "Kelumbayan Barat"
      },
      {
        "id": 1714,
        "kabkot_id": 135,
        "kecamatan": "Kota Agung (Kota Agung Pusat)"
      },
      {
        "id": 1715,
        "kabkot_id": 135,
        "kecamatan": "Kota Agung Barat"
      },
      {
        "id": 1716,
        "kabkot_id": 135,
        "kecamatan": "Kota Agung Timur"
      },
      {
        "id": 1717,
        "kabkot_id": 135,
        "kecamatan": "Limau"
      },
      {
        "id": 1718,
        "kabkot_id": 135,
        "kecamatan": "Pematang Sawa"
      },
      {
        "id": 1719,
        "kabkot_id": 135,
        "kecamatan": "Pugung"
      },
      {
        "id": 1720,
        "kabkot_id": 135,
        "kecamatan": "Pulau Panggung"
      },
      {
        "id": 1721,
        "kabkot_id": 135,
        "kecamatan": "Semaka"
      },
      {
        "id": 1722,
        "kabkot_id": 135,
        "kecamatan": "Sumberejo"
      },
      {
        "id": 1723,
        "kabkot_id": 135,
        "kecamatan": "Talang Padang"
      },
      {
        "id": 1724,
        "kabkot_id": 135,
        "kecamatan": "Ulubelu"
      },
      {
        "id": 1725,
        "kabkot_id": 135,
        "kecamatan": "Wonosobo"
      },
      {
        "id": 1726,
        "kabkot_id": 136,
        "kecamatan": "Banjar Agung"
      },
      {
        "id": 1727,
        "kabkot_id": 136,
        "kecamatan": "Banjar Baru"
      },
      {
        "id": 1728,
        "kabkot_id": 136,
        "kecamatan": "Banjar Margo"
      },
      {
        "id": 1729,
        "kabkot_id": 136,
        "kecamatan": "Dente Teladas"
      },
      {
        "id": 1730,
        "kabkot_id": 136,
        "kecamatan": "Gedung Aji"
      },
      {
        "id": 1731,
        "kabkot_id": 136,
        "kecamatan": "Gedung Aji Baru"
      },
      {
        "id": 1732,
        "kabkot_id": 136,
        "kecamatan": "Gedung Meneng"
      },
      {
        "id": 1733,
        "kabkot_id": 136,
        "kecamatan": "Menggala"
      },
      {
        "id": 1734,
        "kabkot_id": 136,
        "kecamatan": "Menggala Timur"
      },
      {
        "id": 1735,
        "kabkot_id": 136,
        "kecamatan": "Meraksa Aji"
      },
      {
        "id": 1736,
        "kabkot_id": 136,
        "kecamatan": "Penawar Aji"
      },
      {
        "id": 1737,
        "kabkot_id": 136,
        "kecamatan": "Penawar Tama"
      },
      {
        "id": 1738,
        "kabkot_id": 136,
        "kecamatan": "Rawa Pitu"
      },
      {
        "id": 1739,
        "kabkot_id": 136,
        "kecamatan": "Rawajitu Selatan"
      },
      {
        "id": 1740,
        "kabkot_id": 136,
        "kecamatan": "Rawajitu Timur"
      },
      {
        "id": 1741,
        "kabkot_id": 137,
        "kecamatan": "Gunung Agung"
      },
      {
        "id": 1742,
        "kabkot_id": 137,
        "kecamatan": "Gunung Terang"
      },
      {
        "id": 1743,
        "kabkot_id": 137,
        "kecamatan": "Lambu Kibang"
      },
      {
        "id": 1744,
        "kabkot_id": 137,
        "kecamatan": "Pagar Dewa"
      },
      {
        "id": 1745,
        "kabkot_id": 137,
        "kecamatan": "Tulang Bawang Tengah"
      },
      {
        "id": 1746,
        "kabkot_id": 137,
        "kecamatan": "Tulang Bawang Udik"
      },
      {
        "id": 1747,
        "kabkot_id": 137,
        "kecamatan": "Tumijajar"
      },
      {
        "id": 1748,
        "kabkot_id": 137,
        "kecamatan": "Way Kenanga"
      },
      {
        "id": 1749,
        "kabkot_id": 138,
        "kecamatan": "Bahuga"
      },
      {
        "id": 1750,
        "kabkot_id": 138,
        "kecamatan": "Banjit"
      },
      {
        "id": 1751,
        "kabkot_id": 138,
        "kecamatan": "Baradatu"
      },
      {
        "id": 1752,
        "kabkot_id": 138,
        "kecamatan": "Blambangan Umpu"
      },
      {
        "id": 1753,
        "kabkot_id": 138,
        "kecamatan": "Buay Bahuga"
      },
      {
        "id": 1754,
        "kabkot_id": 138,
        "kecamatan": "Bumi Agung"
      },
      {
        "id": 1755,
        "kabkot_id": 138,
        "kecamatan": "Gunung Labuhan"
      },
      {
        "id": 1756,
        "kabkot_id": 138,
        "kecamatan": "Kasui"
      },
      {
        "id": 1757,
        "kabkot_id": 138,
        "kecamatan": "Negara Batin"
      },
      {
        "id": 1758,
        "kabkot_id": 138,
        "kecamatan": "Negeri Agung"
      },
      {
        "id": 1759,
        "kabkot_id": 138,
        "kecamatan": "Negeri Besar"
      },
      {
        "id": 1760,
        "kabkot_id": 138,
        "kecamatan": "Pakuan Ratu"
      },
      {
        "id": 1761,
        "kabkot_id": 138,
        "kecamatan": "Rebang Tangkas"
      },
      {
        "id": 1762,
        "kabkot_id": 138,
        "kecamatan": "Way Tuba"
      },
      {
        "id": 1763,
        "kabkot_id": 139,
        "kecamatan": "Bumi Waras"
      },
      {
        "id": 1764,
        "kabkot_id": 139,
        "kecamatan": "Enggal"
      },
      {
        "id": 1765,
        "kabkot_id": 139,
        "kecamatan": "Kedamaian"
      },
      {
        "id": 1766,
        "kabkot_id": 139,
        "kecamatan": "Kedaton"
      },
      {
        "id": 1767,
        "kabkot_id": 139,
        "kecamatan": "Kemiling"
      },
      {
        "id": 1768,
        "kabkot_id": 139,
        "kecamatan": "Labuhan Ratu"
      },
      {
        "id": 1769,
        "kabkot_id": 139,
        "kecamatan": "Langkapura"
      },
      {
        "id": 1770,
        "kabkot_id": 139,
        "kecamatan": "Panjang"
      },
      {
        "id": 1771,
        "kabkot_id": 139,
        "kecamatan": "Rajabasa"
      },
      {
        "id": 1772,
        "kabkot_id": 139,
        "kecamatan": "Sukabumi"
      },
      {
        "id": 1773,
        "kabkot_id": 139,
        "kecamatan": "Sukarame"
      },
      {
        "id": 1774,
        "kabkot_id": 139,
        "kecamatan": "Tanjung Karang Barat"
      },
      {
        "id": 1775,
        "kabkot_id": 139,
        "kecamatan": "Tanjung Karang Pusat"
      },
      {
        "id": 1776,
        "kabkot_id": 139,
        "kecamatan": "Tanjung Karang Timur"
      },
      {
        "id": 1777,
        "kabkot_id": 139,
        "kecamatan": "Tanjung Senang"
      },
      {
        "id": 1778,
        "kabkot_id": 139,
        "kecamatan": "Telukbetung Barat"
      },
      {
        "id": 1779,
        "kabkot_id": 139,
        "kecamatan": "Telukbetung Selatan"
      },
      {
        "id": 1780,
        "kabkot_id": 139,
        "kecamatan": "Telukbetung Timur"
      },
      {
        "id": 1781,
        "kabkot_id": 139,
        "kecamatan": "Telukbetung Utara"
      },
      {
        "id": 1782,
        "kabkot_id": 139,
        "kecamatan": "Way Halim"
      },
      {
        "id": 1783,
        "kabkot_id": 140,
        "kecamatan": "Metro Barat"
      },
      {
        "id": 1784,
        "kabkot_id": 140,
        "kecamatan": "Metro Pusat"
      },
      {
        "id": 1785,
        "kabkot_id": 140,
        "kecamatan": "Metro Selatan"
      },
      {
        "id": 1786,
        "kabkot_id": 140,
        "kecamatan": "Metro Timur"
      },
      {
        "id": 1787,
        "kabkot_id": 140,
        "kecamatan": "Metro Utara"
      },
      {
        "id": 1788,
        "kabkot_id": 141,
        "kecamatan": "Bakam"
      },
      {
        "id": 1789,
        "kabkot_id": 141,
        "kecamatan": "Belinyu"
      },
      {
        "id": 1790,
        "kabkot_id": 141,
        "kecamatan": "Mendo Barat"
      },
      {
        "id": 1791,
        "kabkot_id": 141,
        "kecamatan": "Merawang"
      },
      {
        "id": 1792,
        "kabkot_id": 141,
        "kecamatan": "Pemali"
      },
      {
        "id": 1793,
        "kabkot_id": 141,
        "kecamatan": "Puding Besar"
      },
      {
        "id": 1794,
        "kabkot_id": 141,
        "kecamatan": "Riau Silip"
      },
      {
        "id": 1795,
        "kabkot_id": 141,
        "kecamatan": "Sungai Liat"
      },
      {
        "id": 1796,
        "kabkot_id": 142,
        "kecamatan": "Jebus"
      },
      {
        "id": 1797,
        "kabkot_id": 142,
        "kecamatan": "Kelapa"
      },
      {
        "id": 1798,
        "kabkot_id": 142,
        "kecamatan": "Mentok (Muntok)"
      },
      {
        "id": 1799,
        "kabkot_id": 142,
        "kecamatan": "Parittiga"
      },
      {
        "id": 1800,
        "kabkot_id": 142,
        "kecamatan": "Simpang Teritip"
      },
      {
        "id": 1801,
        "kabkot_id": 142,
        "kecamatan": "Tempilang"
      },
      {
        "id": 1802,
        "kabkot_id": 143,
        "kecamatan": "Air Gegas"
      },
      {
        "id": 1803,
        "kabkot_id": 143,
        "kecamatan": "Kepulauan Pongok"
      },
      {
        "id": 1804,
        "kabkot_id": 143,
        "kecamatan": "Lepar Pongok"
      },
      {
        "id": 1805,
        "kabkot_id": 143,
        "kecamatan": "Payung"
      },
      {
        "id": 1806,
        "kabkot_id": 143,
        "kecamatan": "Pulau Besar"
      },
      {
        "id": 1807,
        "kabkot_id": 143,
        "kecamatan": "Simpang Rimba"
      },
      {
        "id": 1808,
        "kabkot_id": 143,
        "kecamatan": "Toboali"
      },
      {
        "id": 1809,
        "kabkot_id": 143,
        "kecamatan": "Tukak Sadai"
      },
      {
        "id": 1810,
        "kabkot_id": 144,
        "kecamatan": "Koba"
      },
      {
        "id": 1811,
        "kabkot_id": 144,
        "kecamatan": "Lubuk Besar"
      },
      {
        "id": 1812,
        "kabkot_id": 144,
        "kecamatan": "Namang"
      },
      {
        "id": 1813,
        "kabkot_id": 144,
        "kecamatan": "Pangkalan Baru"
      },
      {
        "id": 1814,
        "kabkot_id": 144,
        "kecamatan": "Simpang Katis"
      },
      {
        "id": 1815,
        "kabkot_id": 144,
        "kecamatan": "Sungai Selan"
      },
      {
        "id": 1816,
        "kabkot_id": 145,
        "kecamatan": "Badau"
      },
      {
        "id": 1817,
        "kabkot_id": 145,
        "kecamatan": "Membalong"
      },
      {
        "id": 1818,
        "kabkot_id": 145,
        "kecamatan": "Selat Nasik"
      },
      {
        "id": 1819,
        "kabkot_id": 145,
        "kecamatan": "Sijuk"
      },
      {
        "id": 1820,
        "kabkot_id": 145,
        "kecamatan": "Tanjung Pandan"
      },
      {
        "id": 1821,
        "kabkot_id": 146,
        "kecamatan": "Damar"
      },
      {
        "id": 1822,
        "kabkot_id": 146,
        "kecamatan": "Dendang"
      },
      {
        "id": 1823,
        "kabkot_id": 146,
        "kecamatan": "Gantung"
      },
      {
        "id": 1824,
        "kabkot_id": 146,
        "kecamatan": "Kelapa Kampit"
      },
      {
        "id": 1825,
        "kabkot_id": 146,
        "kecamatan": "Manggar"
      },
      {
        "id": 1826,
        "kabkot_id": 146,
        "kecamatan": "Simpang Pesak"
      },
      {
        "id": 1827,
        "kabkot_id": 146,
        "kecamatan": "Simpang Renggiang"
      },
      {
        "id": 1828,
        "kabkot_id": 147,
        "kecamatan": "Bukit Intan"
      },
      {
        "id": 1829,
        "kabkot_id": 147,
        "kecamatan": "Gabek"
      },
      {
        "id": 1830,
        "kabkot_id": 147,
        "kecamatan": "Gerunggang"
      },
      {
        "id": 1831,
        "kabkot_id": 147,
        "kecamatan": "Girimaya"
      },
      {
        "id": 1832,
        "kabkot_id": 147,
        "kecamatan": "Pangkal Balam"
      },
      {
        "id": 1833,
        "kabkot_id": 147,
        "kecamatan": "Rangkui"
      },
      {
        "id": 1834,
        "kabkot_id": 147,
        "kecamatan": "Taman Sari"
      },
      {
        "id": 1835,
        "kabkot_id": 148,
        "kecamatan": "Bintan Pesisir"
      },
      {
        "id": 1836,
        "kabkot_id": 148,
        "kecamatan": "Bintan Timur"
      },
      {
        "id": 1837,
        "kabkot_id": 148,
        "kecamatan": "Bintan Utara"
      },
      {
        "id": 1838,
        "kabkot_id": 148,
        "kecamatan": "Gunung Kijang"
      },
      {
        "id": 1839,
        "kabkot_id": 148,
        "kecamatan": "Mantang"
      },
      {
        "id": 1840,
        "kabkot_id": 148,
        "kecamatan": "Seri/Sri Kuala Lobam"
      },
      {
        "id": 1841,
        "kabkot_id": 148,
        "kecamatan": "Tambelan"
      },
      {
        "id": 1842,
        "kabkot_id": 148,
        "kecamatan": "Teluk Bintan"
      },
      {
        "id": 1843,
        "kabkot_id": 148,
        "kecamatan": "Teluk Sebong"
      },
      {
        "id": 1844,
        "kabkot_id": 148,
        "kecamatan": "Toapaya"
      },
      {
        "id": 1845,
        "kabkot_id": 149,
        "kecamatan": "Belat"
      },
      {
        "id": 1846,
        "kabkot_id": 149,
        "kecamatan": "Buru"
      },
      {
        "id": 1847,
        "kabkot_id": 149,
        "kecamatan": "Durai"
      },
      {
        "id": 1848,
        "kabkot_id": 149,
        "kecamatan": "Karimun"
      },
      {
        "id": 1849,
        "kabkot_id": 149,
        "kecamatan": "Kundur"
      },
      {
        "id": 1850,
        "kabkot_id": 149,
        "kecamatan": "Kundur Barat"
      },
      {
        "id": 1851,
        "kabkot_id": 149,
        "kecamatan": "Kundur Utara"
      },
      {
        "id": 1852,
        "kabkot_id": 149,
        "kecamatan": "Meral"
      },
      {
        "id": 1853,
        "kabkot_id": 149,
        "kecamatan": "Meral Barat"
      },
      {
        "id": 1854,
        "kabkot_id": 149,
        "kecamatan": "Moro"
      },
      {
        "id": 1855,
        "kabkot_id": 149,
        "kecamatan": "Tebing"
      },
      {
        "id": 1856,
        "kabkot_id": 149,
        "kecamatan": "Ungar"
      },
      {
        "id": 1857,
        "kabkot_id": 150,
        "kecamatan": "Jemaja"
      },
      {
        "id": 1858,
        "kabkot_id": 150,
        "kecamatan": "Jemaja Timur"
      },
      {
        "id": 1859,
        "kabkot_id": 150,
        "kecamatan": "Palmatak"
      },
      {
        "id": 1860,
        "kabkot_id": 150,
        "kecamatan": "Siantan"
      },
      {
        "id": 1861,
        "kabkot_id": 150,
        "kecamatan": "Siantan Selatan"
      },
      {
        "id": 1862,
        "kabkot_id": 150,
        "kecamatan": "Siantan Tengah"
      },
      {
        "id": 1863,
        "kabkot_id": 150,
        "kecamatan": "Siantan Timur"
      },
      {
        "id": 1864,
        "kabkot_id": 151,
        "kecamatan": "Lingga"
      },
      {
        "id": 1865,
        "kabkot_id": 151,
        "kecamatan": "Lingga Timur"
      },
      {
        "id": 1866,
        "kabkot_id": 151,
        "kecamatan": "Lingga Utara"
      },
      {
        "id": 1867,
        "kabkot_id": 151,
        "kecamatan": "Selayar"
      },
      {
        "id": 1868,
        "kabkot_id": 151,
        "kecamatan": "Senayang"
      },
      {
        "id": 1869,
        "kabkot_id": 151,
        "kecamatan": "Singkep"
      },
      {
        "id": 1870,
        "kabkot_id": 151,
        "kecamatan": "Singkep Barat"
      },
      {
        "id": 1871,
        "kabkot_id": 151,
        "kecamatan": "Singkep Pesisir"
      },
      {
        "id": 1872,
        "kabkot_id": 151,
        "kecamatan": "Singkep Selatan"
      },
      {
        "id": 1873,
        "kabkot_id": 152,
        "kecamatan": "Bunguran Barat"
      },
      {
        "id": 1874,
        "kabkot_id": 152,
        "kecamatan": "Bunguran Selatan"
      },
      {
        "id": 1875,
        "kabkot_id": 152,
        "kecamatan": "Bunguran Tengah"
      },
      {
        "id": 1876,
        "kabkot_id": 152,
        "kecamatan": "Bunguran Timur"
      },
      {
        "id": 1877,
        "kabkot_id": 152,
        "kecamatan": "Bunguran Timur Laut"
      },
      {
        "id": 1878,
        "kabkot_id": 152,
        "kecamatan": "Bunguran Utara"
      },
      {
        "id": 1879,
        "kabkot_id": 152,
        "kecamatan": "Midai"
      },
      {
        "id": 1880,
        "kabkot_id": 152,
        "kecamatan": "Pulau Laut"
      },
      {
        "id": 1881,
        "kabkot_id": 152,
        "kecamatan": "Pulau Tiga"
      },
      {
        "id": 1882,
        "kabkot_id": 152,
        "kecamatan": "Serasan"
      },
      {
        "id": 1883,
        "kabkot_id": 152,
        "kecamatan": "Serasan Timur"
      },
      {
        "id": 1884,
        "kabkot_id": 152,
        "kecamatan": "Subi"
      },
      {
        "id": 1885,
        "kabkot_id": 153,
        "kecamatan": "Batam Kota"
      },
      {
        "id": 1886,
        "kabkot_id": 153,
        "kecamatan": "Batu Aji"
      },
      {
        "id": 1887,
        "kabkot_id": 153,
        "kecamatan": "Batu Ampar"
      },
      {
        "id": 1888,
        "kabkot_id": 153,
        "kecamatan": "Belakang Padang"
      },
      {
        "id": 1889,
        "kabkot_id": 153,
        "kecamatan": "Bengkong"
      },
      {
        "id": 1890,
        "kabkot_id": 153,
        "kecamatan": "Bulang"
      },
      {
        "id": 1891,
        "kabkot_id": 153,
        "kecamatan": "Galang"
      },
      {
        "id": 1892,
        "kabkot_id": 153,
        "kecamatan": "Lubuk Baja"
      },
      {
        "id": 1893,
        "kabkot_id": 153,
        "kecamatan": "Nongsa"
      },
      {
        "id": 1894,
        "kabkot_id": 153,
        "kecamatan": "Sagulung"
      },
      {
        "id": 1895,
        "kabkot_id": 153,
        "kecamatan": "Sei/Sungai Beduk"
      },
      {
        "id": 1896,
        "kabkot_id": 153,
        "kecamatan": "Sekupang"
      },
      {
        "id": 1897,
        "kabkot_id": 154,
        "kecamatan": "Bukit Bestari"
      },
      {
        "id": 1898,
        "kabkot_id": 154,
        "kecamatan": "Tanjung Pinang Barat"
      },
      {
        "id": 1899,
        "kabkot_id": 154,
        "kecamatan": "Tanjung Pinang Kota"
      },
      {
        "id": 1900,
        "kabkot_id": 154,
        "kecamatan": "Tanjung Pinang Timur"
      },
      {
        "id": 1901,
        "kabkot_id": 155,
        "kecamatan": "Kepulauan Seribu Selatan"
      },
      {
        "id": 1902,
        "kabkot_id": 155,
        "kecamatan": "Kepulauan Seribu Utara"
      },
      {
        "id": 1903,
        "kabkot_id": 156,
        "kecamatan": "Cengkareng"
      },
      {
        "id": 1904,
        "kabkot_id": 156,
        "kecamatan": "Grogol Petamburan"
      },
      {
        "id": 1905,
        "kabkot_id": 156,
        "kecamatan": "Kalideres"
      },
      {
        "id": 1906,
        "kabkot_id": 156,
        "kecamatan": "Kebon Jeruk"
      },
      {
        "id": 1907,
        "kabkot_id": 156,
        "kecamatan": "Kembangan"
      },
      {
        "id": 1908,
        "kabkot_id": 156,
        "kecamatan": "Palmerah"
      },
      {
        "id": 1909,
        "kabkot_id": 156,
        "kecamatan": "Taman Sari"
      },
      {
        "id": 1910,
        "kabkot_id": 156,
        "kecamatan": "Tambora"
      },
      {
        "id": 1911,
        "kabkot_id": 157,
        "kecamatan": "Cempaka Putih"
      },
      {
        "id": 1912,
        "kabkot_id": 157,
        "kecamatan": "Gambir"
      },
      {
        "id": 1913,
        "kabkot_id": 157,
        "kecamatan": "Johar Baru"
      },
      {
        "id": 1914,
        "kabkot_id": 157,
        "kecamatan": "Kemayoran"
      },
      {
        "id": 1915,
        "kabkot_id": 157,
        "kecamatan": "Menteng"
      },
      {
        "id": 1916,
        "kabkot_id": 157,
        "kecamatan": "Sawah Besar"
      },
      {
        "id": 1917,
        "kabkot_id": 157,
        "kecamatan": "Senen"
      },
      {
        "id": 1918,
        "kabkot_id": 157,
        "kecamatan": "Tanah Abang"
      },
      {
        "id": 1919,
        "kabkot_id": 158,
        "kecamatan": "Cilandak"
      },
      {
        "id": 1920,
        "kabkot_id": 158,
        "kecamatan": "Jagakarsa"
      },
      {
        "id": 1921,
        "kabkot_id": 158,
        "kecamatan": "Kebayoran Baru"
      },
      {
        "id": 1922,
        "kabkot_id": 158,
        "kecamatan": "Kebayoran Lama"
      },
      {
        "id": 1923,
        "kabkot_id": 158,
        "kecamatan": "Mampang Prapatan"
      },
      {
        "id": 1924,
        "kabkot_id": 158,
        "kecamatan": "Pancoran"
      },
      {
        "id": 1925,
        "kabkot_id": 158,
        "kecamatan": "Pasar Minggu"
      },
      {
        "id": 1926,
        "kabkot_id": 158,
        "kecamatan": "Pesanggrahan"
      },
      {
        "id": 1927,
        "kabkot_id": 158,
        "kecamatan": "Setia Budi"
      },
      {
        "id": 1928,
        "kabkot_id": 158,
        "kecamatan": "Tebet"
      },
      {
        "id": 1929,
        "kabkot_id": 159,
        "kecamatan": "Cakung"
      },
      {
        "id": 1930,
        "kabkot_id": 159,
        "kecamatan": "Cipayung"
      },
      {
        "id": 1931,
        "kabkot_id": 159,
        "kecamatan": "Ciracas"
      },
      {
        "id": 1932,
        "kabkot_id": 159,
        "kecamatan": "Duren Sawit"
      },
      {
        "id": 1933,
        "kabkot_id": 159,
        "kecamatan": "Jatinegara"
      },
      {
        "id": 1934,
        "kabkot_id": 159,
        "kecamatan": "Kramat Jati"
      },
      {
        "id": 1935,
        "kabkot_id": 159,
        "kecamatan": "Makasar"
      },
      {
        "id": 1936,
        "kabkot_id": 159,
        "kecamatan": "Matraman"
      },
      {
        "id": 1937,
        "kabkot_id": 159,
        "kecamatan": "Pasar Rebo"
      },
      {
        "id": 1938,
        "kabkot_id": 159,
        "kecamatan": "Pulo Gadung"
      },
      {
        "id": 1939,
        "kabkot_id": 160,
        "kecamatan": "Cilincing"
      },
      {
        "id": 1940,
        "kabkot_id": 160,
        "kecamatan": "Kelapa Gading"
      },
      {
        "id": 1941,
        "kabkot_id": 160,
        "kecamatan": "Koja"
      },
      {
        "id": 1942,
        "kabkot_id": 160,
        "kecamatan": "Pademangan"
      },
      {
        "id": 1943,
        "kabkot_id": 160,
        "kecamatan": "Penjaringan"
      },
      {
        "id": 1944,
        "kabkot_id": 160,
        "kecamatan": "Tanjung Priok"
      },
      {
        "id": 1945,
        "kabkot_id": 161,
        "kecamatan": "Arjasari"
      },
      {
        "id": 1946,
        "kabkot_id": 161,
        "kecamatan": "Baleendah"
      },
      {
        "id": 1947,
        "kabkot_id": 161,
        "kecamatan": "Banjaran"
      },
      {
        "id": 1948,
        "kabkot_id": 161,
        "kecamatan": "Bojongsoang"
      },
      {
        "id": 1949,
        "kabkot_id": 161,
        "kecamatan": "Cangkuang"
      },
      {
        "id": 1950,
        "kabkot_id": 161,
        "kecamatan": "Cicalengka"
      },
      {
        "id": 1951,
        "kabkot_id": 161,
        "kecamatan": "Cikancung"
      },
      {
        "id": 1952,
        "kabkot_id": 161,
        "kecamatan": "Cilengkrang"
      },
      {
        "id": 1953,
        "kabkot_id": 161,
        "kecamatan": "Cileunyi"
      },
      {
        "id": 1954,
        "kabkot_id": 161,
        "kecamatan": "Cimaung"
      },
      {
        "id": 1955,
        "kabkot_id": 161,
        "kecamatan": "Cimeunyan"
      },
      {
        "id": 1956,
        "kabkot_id": 161,
        "kecamatan": "Ciparay"
      },
      {
        "id": 1957,
        "kabkot_id": 161,
        "kecamatan": "Ciwidey"
      },
      {
        "id": 1958,
        "kabkot_id": 161,
        "kecamatan": "Dayeuhkolot"
      },
      {
        "id": 1959,
        "kabkot_id": 161,
        "kecamatan": "Ibun"
      },
      {
        "id": 1960,
        "kabkot_id": 161,
        "kecamatan": "Katapang"
      },
      {
        "id": 1961,
        "kabkot_id": 161,
        "kecamatan": "Kertasari"
      },
      {
        "id": 1962,
        "kabkot_id": 161,
        "kecamatan": "Kutawaringin"
      },
      {
        "id": 1963,
        "kabkot_id": 161,
        "kecamatan": "Majalaya"
      },
      {
        "id": 1964,
        "kabkot_id": 161,
        "kecamatan": "Margaasih"
      },
      {
        "id": 1965,
        "kabkot_id": 161,
        "kecamatan": "Margahayu"
      },
      {
        "id": 1966,
        "kabkot_id": 161,
        "kecamatan": "Nagreg"
      },
      {
        "id": 1967,
        "kabkot_id": 161,
        "kecamatan": "Pacet"
      },
      {
        "id": 1968,
        "kabkot_id": 161,
        "kecamatan": "Pameungpeuk"
      },
      {
        "id": 1969,
        "kabkot_id": 161,
        "kecamatan": "Pangalengan"
      },
      {
        "id": 1970,
        "kabkot_id": 161,
        "kecamatan": "Paseh"
      },
      {
        "id": 1971,
        "kabkot_id": 161,
        "kecamatan": "Pasirjambu"
      },
      {
        "id": 1972,
        "kabkot_id": 161,
        "kecamatan": "Ranca Bali"
      },
      {
        "id": 1973,
        "kabkot_id": 161,
        "kecamatan": "Rancaekek"
      },
      {
        "id": 1974,
        "kabkot_id": 161,
        "kecamatan": "Solokan Jeruk"
      },
      {
        "id": 1975,
        "kabkot_id": 161,
        "kecamatan": "Soreang"
      },
      {
        "id": 1976,
        "kabkot_id": 162,
        "kecamatan": "Batujajar"
      },
      {
        "id": 1977,
        "kabkot_id": 162,
        "kecamatan": "Cihampelas"
      },
      {
        "id": 1978,
        "kabkot_id": 162,
        "kecamatan": "Cikalong Wetan"
      },
      {
        "id": 1979,
        "kabkot_id": 162,
        "kecamatan": "Cililin"
      },
      {
        "id": 1980,
        "kabkot_id": 162,
        "kecamatan": "Cipatat"
      },
      {
        "id": 1981,
        "kabkot_id": 162,
        "kecamatan": "Cipeundeuy"
      },
      {
        "id": 1982,
        "kabkot_id": 162,
        "kecamatan": "Cipongkor"
      },
      {
        "id": 1983,
        "kabkot_id": 162,
        "kecamatan": "Cisarua"
      },
      {
        "id": 1984,
        "kabkot_id": 162,
        "kecamatan": "Gununghalu"
      },
      {
        "id": 1985,
        "kabkot_id": 162,
        "kecamatan": "Lembang"
      },
      {
        "id": 1986,
        "kabkot_id": 162,
        "kecamatan": "Ngamprah"
      },
      {
        "id": 1987,
        "kabkot_id": 162,
        "kecamatan": "Padalarang"
      },
      {
        "id": 1988,
        "kabkot_id": 162,
        "kecamatan": "Parongpong"
      },
      {
        "id": 1989,
        "kabkot_id": 162,
        "kecamatan": "Rongga"
      },
      {
        "id": 1990,
        "kabkot_id": 162,
        "kecamatan": "Saguling"
      },
      {
        "id": 1991,
        "kabkot_id": 162,
        "kecamatan": "Sindangkerta"
      },
      {
        "id": 1992,
        "kabkot_id": 163,
        "kecamatan": "Babelan"
      },
      {
        "id": 1993,
        "kabkot_id": 163,
        "kecamatan": "Bojongmangu"
      },
      {
        "id": 1994,
        "kabkot_id": 163,
        "kecamatan": "Cabangbungin"
      },
      {
        "id": 1995,
        "kabkot_id": 163,
        "kecamatan": "Cibarusah"
      },
      {
        "id": 1996,
        "kabkot_id": 163,
        "kecamatan": "Cibitung"
      },
      {
        "id": 1997,
        "kabkot_id": 163,
        "kecamatan": "Cikarang Barat"
      },
      {
        "id": 1998,
        "kabkot_id": 163,
        "kecamatan": "Cikarang Pusat"
      },
      {
        "id": 1999,
        "kabkot_id": 163,
        "kecamatan": "Cikarang Selatan"
      },
      {
        "id": 2000,
        "kabkot_id": 163,
        "kecamatan": "Cikarang Timur"
      },
      {
        "id": 2001,
        "kabkot_id": 163,
        "kecamatan": "Cikarang Utara"
      },
      {
        "id": 2002,
        "kabkot_id": 163,
        "kecamatan": "Karangbahagia"
      },
      {
        "id": 2003,
        "kabkot_id": 163,
        "kecamatan": "Kedung Waringin"
      },
      {
        "id": 2004,
        "kabkot_id": 163,
        "kecamatan": "Muara Gembong"
      },
      {
        "id": 2005,
        "kabkot_id": 163,
        "kecamatan": "Pebayuran"
      },
      {
        "id": 2006,
        "kabkot_id": 163,
        "kecamatan": "Serang Baru"
      },
      {
        "id": 2007,
        "kabkot_id": 163,
        "kecamatan": "Setu"
      },
      {
        "id": 2008,
        "kabkot_id": 163,
        "kecamatan": "Sukakarya"
      },
      {
        "id": 2009,
        "kabkot_id": 163,
        "kecamatan": "Sukatani"
      },
      {
        "id": 2010,
        "kabkot_id": 163,
        "kecamatan": "Sukawangi"
      },
      {
        "id": 2011,
        "kabkot_id": 163,
        "kecamatan": "Tambelang"
      },
      {
        "id": 2012,
        "kabkot_id": 163,
        "kecamatan": "Tambun Selatan"
      },
      {
        "id": 2013,
        "kabkot_id": 163,
        "kecamatan": "Tambun Utara"
      },
      {
        "id": 2014,
        "kabkot_id": 163,
        "kecamatan": "Tarumajaya"
      },
      {
        "id": 2015,
        "kabkot_id": 164,
        "kecamatan": "Babakan Madang"
      },
      {
        "id": 2016,
        "kabkot_id": 164,
        "kecamatan": "Bojonggede"
      },
      {
        "id": 2017,
        "kabkot_id": 164,
        "kecamatan": "Caringin"
      },
      {
        "id": 2018,
        "kabkot_id": 164,
        "kecamatan": "Cariu"
      },
      {
        "id": 2019,
        "kabkot_id": 164,
        "kecamatan": "Ciampea"
      },
      {
        "id": 2020,
        "kabkot_id": 164,
        "kecamatan": "Ciawi"
      },
      {
        "id": 2021,
        "kabkot_id": 164,
        "kecamatan": "Cibinong"
      },
      {
        "id": 2022,
        "kabkot_id": 164,
        "kecamatan": "Cibungbulang"
      },
      {
        "id": 2023,
        "kabkot_id": 164,
        "kecamatan": "Cigombong"
      },
      {
        "id": 2024,
        "kabkot_id": 164,
        "kecamatan": "Cigudeg"
      },
      {
        "id": 2025,
        "kabkot_id": 164,
        "kecamatan": "Cijeruk"
      },
      {
        "id": 2026,
        "kabkot_id": 164,
        "kecamatan": "Cileungsi"
      },
      {
        "id": 2027,
        "kabkot_id": 164,
        "kecamatan": "Ciomas"
      },
      {
        "id": 2028,
        "kabkot_id": 164,
        "kecamatan": "Cisarua"
      },
      {
        "id": 2029,
        "kabkot_id": 164,
        "kecamatan": "Ciseeng"
      },
      {
        "id": 2030,
        "kabkot_id": 164,
        "kecamatan": "Citeureup"
      },
      {
        "id": 2031,
        "kabkot_id": 164,
        "kecamatan": "Dramaga"
      },
      {
        "id": 2032,
        "kabkot_id": 164,
        "kecamatan": "Gunung Putri"
      },
      {
        "id": 2033,
        "kabkot_id": 164,
        "kecamatan": "Gunung Sindur"
      },
      {
        "id": 2034,
        "kabkot_id": 164,
        "kecamatan": "Jasinga"
      },
      {
        "id": 2035,
        "kabkot_id": 164,
        "kecamatan": "Jonggol"
      },
      {
        "id": 2036,
        "kabkot_id": 164,
        "kecamatan": "Kemang"
      },
      {
        "id": 2037,
        "kabkot_id": 164,
        "kecamatan": "Klapanunggal"
      },
      {
        "id": 2038,
        "kabkot_id": 164,
        "kecamatan": "Leuwiliang"
      },
      {
        "id": 2039,
        "kabkot_id": 164,
        "kecamatan": "Leuwisadeng"
      },
      {
        "id": 2040,
        "kabkot_id": 164,
        "kecamatan": "Megamendung"
      },
      {
        "id": 2041,
        "kabkot_id": 164,
        "kecamatan": "Nanggung"
      },
      {
        "id": 2042,
        "kabkot_id": 164,
        "kecamatan": "Pamijahan"
      },
      {
        "id": 2043,
        "kabkot_id": 164,
        "kecamatan": "Parung"
      },
      {
        "id": 2044,
        "kabkot_id": 164,
        "kecamatan": "Parung Panjang"
      },
      {
        "id": 2045,
        "kabkot_id": 164,
        "kecamatan": "Ranca Bungur"
      },
      {
        "id": 2046,
        "kabkot_id": 164,
        "kecamatan": "Rumpin"
      },
      {
        "id": 2047,
        "kabkot_id": 164,
        "kecamatan": "Sukajaya"
      },
      {
        "id": 2048,
        "kabkot_id": 164,
        "kecamatan": "Sukamakmur"
      },
      {
        "id": 2049,
        "kabkot_id": 164,
        "kecamatan": "Sukaraja"
      },
      {
        "id": 2050,
        "kabkot_id": 164,
        "kecamatan": "Tajurhalang"
      },
      {
        "id": 2051,
        "kabkot_id": 164,
        "kecamatan": "Tamansari"
      },
      {
        "id": 2052,
        "kabkot_id": 164,
        "kecamatan": "Tanjungsari"
      },
      {
        "id": 2053,
        "kabkot_id": 164,
        "kecamatan": "Tenjo"
      },
      {
        "id": 2054,
        "kabkot_id": 164,
        "kecamatan": "Tenjolaya"
      },
      {
        "id": 2055,
        "kabkot_id": 165,
        "kecamatan": "Banjarsari"
      },
      {
        "id": 2056,
        "kabkot_id": 165,
        "kecamatan": "Baregbeg"
      },
      {
        "id": 2057,
        "kabkot_id": 165,
        "kecamatan": "Ciamis"
      },
      {
        "id": 2058,
        "kabkot_id": 165,
        "kecamatan": "Cidolog"
      },
      {
        "id": 2059,
        "kabkot_id": 165,
        "kecamatan": "Cihaurbeuti"
      },
      {
        "id": 2060,
        "kabkot_id": 165,
        "kecamatan": "Cijeungjing"
      },
      {
        "id": 2061,
        "kabkot_id": 165,
        "kecamatan": "Cikoneng"
      },
      {
        "id": 2062,
        "kabkot_id": 165,
        "kecamatan": "Cimaragas"
      },
      {
        "id": 2063,
        "kabkot_id": 165,
        "kecamatan": "Cipaku"
      },
      {
        "id": 2064,
        "kabkot_id": 165,
        "kecamatan": "Cisaga"
      },
      {
        "id": 2065,
        "kabkot_id": 165,
        "kecamatan": "Jatinagara"
      },
      {
        "id": 2066,
        "kabkot_id": 165,
        "kecamatan": "Kawali"
      },
      {
        "id": 2067,
        "kabkot_id": 165,
        "kecamatan": "Lakbok"
      },
      {
        "id": 2068,
        "kabkot_id": 165,
        "kecamatan": "Lumbung"
      },
      {
        "id": 2069,
        "kabkot_id": 165,
        "kecamatan": "Pamarican"
      },
      {
        "id": 2070,
        "kabkot_id": 165,
        "kecamatan": "Panawangan"
      },
      {
        "id": 2071,
        "kabkot_id": 165,
        "kecamatan": "Panjalu"
      },
      {
        "id": 2072,
        "kabkot_id": 165,
        "kecamatan": "Panumbangan"
      },
      {
        "id": 2073,
        "kabkot_id": 165,
        "kecamatan": "Purwadadi"
      },
      {
        "id": 2074,
        "kabkot_id": 165,
        "kecamatan": "Rajadesa"
      },
      {
        "id": 2075,
        "kabkot_id": 165,
        "kecamatan": "Rancah"
      },
      {
        "id": 2076,
        "kabkot_id": 165,
        "kecamatan": "Sadananya"
      },
      {
        "id": 2077,
        "kabkot_id": 165,
        "kecamatan": "Sindangkasih"
      },
      {
        "id": 2078,
        "kabkot_id": 165,
        "kecamatan": "Sukadana"
      },
      {
        "id": 2079,
        "kabkot_id": 165,
        "kecamatan": "Sukamantri"
      },
      {
        "id": 2080,
        "kabkot_id": 165,
        "kecamatan": "Tambaksari"
      },
      {
        "id": 2081,
        "kabkot_id": 166,
        "kecamatan": "Agrabinta"
      },
      {
        "id": 2082,
        "kabkot_id": 166,
        "kecamatan": "Bojongpicung"
      },
      {
        "id": 2083,
        "kabkot_id": 166,
        "kecamatan": "Campaka"
      },
      {
        "id": 2084,
        "kabkot_id": 166,
        "kecamatan": "Campaka Mulya"
      },
      {
        "id": 2085,
        "kabkot_id": 166,
        "kecamatan": "Cianjur"
      },
      {
        "id": 2086,
        "kabkot_id": 166,
        "kecamatan": "Cibeber"
      },
      {
        "id": 2087,
        "kabkot_id": 166,
        "kecamatan": "Cibinong"
      },
      {
        "id": 2088,
        "kabkot_id": 166,
        "kecamatan": "Cidaun"
      },
      {
        "id": 2089,
        "kabkot_id": 166,
        "kecamatan": "Cijati"
      },
      {
        "id": 2090,
        "kabkot_id": 166,
        "kecamatan": "Cikadu"
      },
      {
        "id": 2091,
        "kabkot_id": 166,
        "kecamatan": "Cikalongkulon"
      },
      {
        "id": 2092,
        "kabkot_id": 166,
        "kecamatan": "Cilaku"
      },
      {
        "id": 2093,
        "kabkot_id": 166,
        "kecamatan": "Cipanas"
      },
      {
        "id": 2094,
        "kabkot_id": 166,
        "kecamatan": "Ciranjang"
      },
      {
        "id": 2095,
        "kabkot_id": 166,
        "kecamatan": "Cugenang"
      },
      {
        "id": 2096,
        "kabkot_id": 166,
        "kecamatan": "Gekbrong"
      },
      {
        "id": 2097,
        "kabkot_id": 166,
        "kecamatan": "Haurwangi"
      },
      {
        "id": 2098,
        "kabkot_id": 166,
        "kecamatan": "Kadupandak"
      },
      {
        "id": 2099,
        "kabkot_id": 166,
        "kecamatan": "Karangtengah"
      },
      {
        "id": 2100,
        "kabkot_id": 166,
        "kecamatan": "Leles"
      },
      {
        "id": 2101,
        "kabkot_id": 166,
        "kecamatan": "Mande"
      },
      {
        "id": 2102,
        "kabkot_id": 166,
        "kecamatan": "Naringgul"
      },
      {
        "id": 2103,
        "kabkot_id": 166,
        "kecamatan": "Pacet"
      },
      {
        "id": 2104,
        "kabkot_id": 166,
        "kecamatan": "Pagelaran"
      },
      {
        "id": 2105,
        "kabkot_id": 166,
        "kecamatan": "Pasirkuda"
      },
      {
        "id": 2106,
        "kabkot_id": 166,
        "kecamatan": "Sindangbarang"
      },
      {
        "id": 2107,
        "kabkot_id": 166,
        "kecamatan": "Sukaluyu"
      },
      {
        "id": 2108,
        "kabkot_id": 166,
        "kecamatan": "Sukanagara"
      },
      {
        "id": 2109,
        "kabkot_id": 166,
        "kecamatan": "Sukaresmi"
      },
      {
        "id": 2110,
        "kabkot_id": 166,
        "kecamatan": "Takokak"
      },
      {
        "id": 2111,
        "kabkot_id": 166,
        "kecamatan": "Tanggeung"
      },
      {
        "id": 2112,
        "kabkot_id": 166,
        "kecamatan": "Warungkondang"
      },
      {
        "id": 2113,
        "kabkot_id": 167,
        "kecamatan": "Arjawinangun"
      },
      {
        "id": 2114,
        "kabkot_id": 167,
        "kecamatan": "Astanajapura"
      },
      {
        "id": 2115,
        "kabkot_id": 167,
        "kecamatan": "Babakan"
      },
      {
        "id": 2116,
        "kabkot_id": 167,
        "kecamatan": "Beber"
      },
      {
        "id": 2117,
        "kabkot_id": 167,
        "kecamatan": "Ciledug"
      },
      {
        "id": 2118,
        "kabkot_id": 167,
        "kecamatan": "Ciwaringin"
      },
      {
        "id": 2119,
        "kabkot_id": 167,
        "kecamatan": "Depok"
      },
      {
        "id": 2120,
        "kabkot_id": 167,
        "kecamatan": "Dukupuntang"
      },
      {
        "id": 2121,
        "kabkot_id": 167,
        "kecamatan": "Gebang"
      },
      {
        "id": 2122,
        "kabkot_id": 167,
        "kecamatan": "Gegesik"
      },
      {
        "id": 2123,
        "kabkot_id": 167,
        "kecamatan": "Gempol"
      },
      {
        "id": 2124,
        "kabkot_id": 167,
        "kecamatan": "Greged (Greget)"
      },
      {
        "id": 2125,
        "kabkot_id": 167,
        "kecamatan": "Gunung Jati (Cirebon Utara)"
      },
      {
        "id": 2126,
        "kabkot_id": 167,
        "kecamatan": "Jamblang"
      },
      {
        "id": 2127,
        "kabkot_id": 167,
        "kecamatan": "Kaliwedi"
      },
      {
        "id": 2128,
        "kabkot_id": 167,
        "kecamatan": "Kapetakan"
      },
      {
        "id": 2129,
        "kabkot_id": 167,
        "kecamatan": "Karangsembung"
      },
      {
        "id": 2130,
        "kabkot_id": 167,
        "kecamatan": "Karangwareng"
      },
      {
        "id": 2131,
        "kabkot_id": 167,
        "kecamatan": "Kedawung"
      },
      {
        "id": 2132,
        "kabkot_id": 167,
        "kecamatan": "Klangenan"
      },
      {
        "id": 2133,
        "kabkot_id": 167,
        "kecamatan": "Lemahabang"
      },
      {
        "id": 2134,
        "kabkot_id": 167,
        "kecamatan": "Losari"
      },
      {
        "id": 2135,
        "kabkot_id": 167,
        "kecamatan": "Mundu"
      },
      {
        "id": 2136,
        "kabkot_id": 167,
        "kecamatan": "Pabedilan"
      },
      {
        "id": 2137,
        "kabkot_id": 167,
        "kecamatan": "Pabuaran"
      },
      {
        "id": 2138,
        "kabkot_id": 167,
        "kecamatan": "Palimanan"
      },
      {
        "id": 2139,
        "kabkot_id": 167,
        "kecamatan": "Pangenan"
      },
      {
        "id": 2140,
        "kabkot_id": 167,
        "kecamatan": "Panguragan"
      },
      {
        "id": 2141,
        "kabkot_id": 167,
        "kecamatan": "Pasaleman"
      },
      {
        "id": 2142,
        "kabkot_id": 167,
        "kecamatan": "Plered"
      },
      {
        "id": 2143,
        "kabkot_id": 167,
        "kecamatan": "Plumbon"
      },
      {
        "id": 2144,
        "kabkot_id": 167,
        "kecamatan": "Sedong"
      },
      {
        "id": 2145,
        "kabkot_id": 167,
        "kecamatan": "Sumber"
      },
      {
        "id": 2146,
        "kabkot_id": 167,
        "kecamatan": "Suranenggala"
      },
      {
        "id": 2147,
        "kabkot_id": 167,
        "kecamatan": "Susukan"
      },
      {
        "id": 2148,
        "kabkot_id": 167,
        "kecamatan": "Susukan Lebak"
      },
      {
        "id": 2149,
        "kabkot_id": 167,
        "kecamatan": "Talun (Cirebon Selatan)"
      },
      {
        "id": 2150,
        "kabkot_id": 167,
        "kecamatan": "Tengah Tani"
      },
      {
        "id": 2151,
        "kabkot_id": 167,
        "kecamatan": "Waled"
      },
      {
        "id": 2152,
        "kabkot_id": 167,
        "kecamatan": "Weru"
      },
      {
        "id": 2153,
        "kabkot_id": 168,
        "kecamatan": "Banjarwangi"
      },
      {
        "id": 2154,
        "kabkot_id": 168,
        "kecamatan": "Banyuresmi"
      },
      {
        "id": 2155,
        "kabkot_id": 168,
        "kecamatan": "Bayongbong"
      },
      {
        "id": 2156,
        "kabkot_id": 168,
        "kecamatan": "Blubur Limbangan"
      },
      {
        "id": 2157,
        "kabkot_id": 168,
        "kecamatan": "Bungbulang"
      },
      {
        "id": 2158,
        "kabkot_id": 168,
        "kecamatan": "Caringin"
      },
      {
        "id": 2159,
        "kabkot_id": 168,
        "kecamatan": "Cibalong"
      },
      {
        "id": 2160,
        "kabkot_id": 168,
        "kecamatan": "Cibatu"
      },
      {
        "id": 2161,
        "kabkot_id": 168,
        "kecamatan": "Cibiuk"
      },
      {
        "id": 2162,
        "kabkot_id": 168,
        "kecamatan": "Cigedug"
      },
      {
        "id": 2163,
        "kabkot_id": 168,
        "kecamatan": "Cihurip"
      },
      {
        "id": 2164,
        "kabkot_id": 168,
        "kecamatan": "Cikajang"
      },
      {
        "id": 2165,
        "kabkot_id": 168,
        "kecamatan": "Cikelet"
      },
      {
        "id": 2166,
        "kabkot_id": 168,
        "kecamatan": "Cilawu"
      },
      {
        "id": 2167,
        "kabkot_id": 168,
        "kecamatan": "Cisewu"
      },
      {
        "id": 2168,
        "kabkot_id": 168,
        "kecamatan": "Cisompet"
      },
      {
        "id": 2169,
        "kabkot_id": 168,
        "kecamatan": "Cisurupan"
      },
      {
        "id": 2170,
        "kabkot_id": 168,
        "kecamatan": "Garut Kota"
      },
      {
        "id": 2171,
        "kabkot_id": 168,
        "kecamatan": "Kadungora"
      },
      {
        "id": 2172,
        "kabkot_id": 168,
        "kecamatan": "Karangpawitan"
      },
      {
        "id": 2173,
        "kabkot_id": 168,
        "kecamatan": "Karangtengah"
      },
      {
        "id": 2174,
        "kabkot_id": 168,
        "kecamatan": "Kersamanah"
      },
      {
        "id": 2175,
        "kabkot_id": 168,
        "kecamatan": "Leles"
      },
      {
        "id": 2176,
        "kabkot_id": 168,
        "kecamatan": "Leuwigoong"
      },
      {
        "id": 2177,
        "kabkot_id": 168,
        "kecamatan": "Malangbong"
      },
      {
        "id": 2178,
        "kabkot_id": 168,
        "kecamatan": "Mekarmukti"
      },
      {
        "id": 2179,
        "kabkot_id": 168,
        "kecamatan": "Pakenjeng"
      },
      {
        "id": 2180,
        "kabkot_id": 168,
        "kecamatan": "Pameungpeuk"
      },
      {
        "id": 2181,
        "kabkot_id": 168,
        "kecamatan": "Pamulihan"
      },
      {
        "id": 2182,
        "kabkot_id": 168,
        "kecamatan": "Pangatikan"
      },
      {
        "id": 2183,
        "kabkot_id": 168,
        "kecamatan": "Pasirwangi"
      },
      {
        "id": 2184,
        "kabkot_id": 168,
        "kecamatan": "Peundeuy"
      },
      {
        "id": 2185,
        "kabkot_id": 168,
        "kecamatan": "Samarang"
      },
      {
        "id": 2186,
        "kabkot_id": 168,
        "kecamatan": "Selaawi"
      },
      {
        "id": 2187,
        "kabkot_id": 168,
        "kecamatan": "Singajaya"
      },
      {
        "id": 2188,
        "kabkot_id": 168,
        "kecamatan": "Sucinaraja"
      },
      {
        "id": 2189,
        "kabkot_id": 168,
        "kecamatan": "Sukaresmi"
      },
      {
        "id": 2190,
        "kabkot_id": 168,
        "kecamatan": "Sukawening"
      },
      {
        "id": 2191,
        "kabkot_id": 168,
        "kecamatan": "Talegong"
      },
      {
        "id": 2192,
        "kabkot_id": 168,
        "kecamatan": "Tarogong Kaler"
      },
      {
        "id": 2193,
        "kabkot_id": 168,
        "kecamatan": "Tarogong Kidul"
      },
      {
        "id": 2194,
        "kabkot_id": 168,
        "kecamatan": "Wanaraja"
      },
      {
        "id": 2195,
        "kabkot_id": 169,
        "kecamatan": "Anjatan"
      },
      {
        "id": 2196,
        "kabkot_id": 169,
        "kecamatan": "Arahan"
      },
      {
        "id": 2197,
        "kabkot_id": 169,
        "kecamatan": "Balongan"
      },
      {
        "id": 2198,
        "kabkot_id": 169,
        "kecamatan": "Bangodua"
      },
      {
        "id": 2199,
        "kabkot_id": 169,
        "kecamatan": "Bongas"
      },
      {
        "id": 2200,
        "kabkot_id": 169,
        "kecamatan": "Cantigi"
      },
      {
        "id": 2201,
        "kabkot_id": 169,
        "kecamatan": "Cikedung"
      },
      {
        "id": 2202,
        "kabkot_id": 169,
        "kecamatan": "Gabuswetan"
      },
      {
        "id": 2203,
        "kabkot_id": 169,
        "kecamatan": "Gantar"
      },
      {
        "id": 2204,
        "kabkot_id": 169,
        "kecamatan": "Haurgeulis"
      },
      {
        "id": 2205,
        "kabkot_id": 169,
        "kecamatan": "Indramayu"
      },
      {
        "id": 2206,
        "kabkot_id": 169,
        "kecamatan": "Jatibarang"
      },
      {
        "id": 2207,
        "kabkot_id": 169,
        "kecamatan": "Juntinyuat"
      },
      {
        "id": 2208,
        "kabkot_id": 169,
        "kecamatan": "Kandanghaur"
      },
      {
        "id": 2209,
        "kabkot_id": 169,
        "kecamatan": "Karangampel"
      },
      {
        "id": 2210,
        "kabkot_id": 169,
        "kecamatan": "Kedokan Bunder"
      },
      {
        "id": 2211,
        "kabkot_id": 169,
        "kecamatan": "Kertasemaya"
      },
      {
        "id": 2212,
        "kabkot_id": 169,
        "kecamatan": "Krangkeng"
      },
      {
        "id": 2213,
        "kabkot_id": 169,
        "kecamatan": "Kroya"
      },
      {
        "id": 2214,
        "kabkot_id": 169,
        "kecamatan": "Lelea"
      },
      {
        "id": 2215,
        "kabkot_id": 169,
        "kecamatan": "Lohbener"
      },
      {
        "id": 2216,
        "kabkot_id": 169,
        "kecamatan": "Losarang"
      },
      {
        "id": 2217,
        "kabkot_id": 169,
        "kecamatan": "Pasekan"
      },
      {
        "id": 2218,
        "kabkot_id": 169,
        "kecamatan": "Patrol"
      },
      {
        "id": 2219,
        "kabkot_id": 169,
        "kecamatan": "Sindang"
      },
      {
        "id": 2220,
        "kabkot_id": 169,
        "kecamatan": "Sliyeg"
      },
      {
        "id": 2221,
        "kabkot_id": 169,
        "kecamatan": "Sukagumiwang"
      },
      {
        "id": 2222,
        "kabkot_id": 169,
        "kecamatan": "Sukra"
      },
      {
        "id": 2223,
        "kabkot_id": 169,
        "kecamatan": "Trisi/Terisi"
      },
      {
        "id": 2224,
        "kabkot_id": 169,
        "kecamatan": "Tukdana"
      },
      {
        "id": 2225,
        "kabkot_id": 169,
        "kecamatan": "Widasari"
      },
      {
        "id": 2226,
        "kabkot_id": 170,
        "kecamatan": "Banyusari"
      },
      {
        "id": 2227,
        "kabkot_id": 170,
        "kecamatan": "Batujaya"
      },
      {
        "id": 2228,
        "kabkot_id": 170,
        "kecamatan": "Ciampel"
      },
      {
        "id": 2229,
        "kabkot_id": 170,
        "kecamatan": "Cibuaya"
      },
      {
        "id": 2230,
        "kabkot_id": 170,
        "kecamatan": "Cikampek"
      },
      {
        "id": 2231,
        "kabkot_id": 170,
        "kecamatan": "Cilamaya Kulon"
      },
      {
        "id": 2232,
        "kabkot_id": 170,
        "kecamatan": "Cilamaya Wetan"
      },
      {
        "id": 2233,
        "kabkot_id": 170,
        "kecamatan": "Cilebar"
      },
      {
        "id": 2234,
        "kabkot_id": 170,
        "kecamatan": "Jatisari"
      },
      {
        "id": 2235,
        "kabkot_id": 170,
        "kecamatan": "Jayakerta"
      },
      {
        "id": 2236,
        "kabkot_id": 170,
        "kecamatan": "Karawang Barat"
      },
      {
        "id": 2237,
        "kabkot_id": 170,
        "kecamatan": "Karawang Timur"
      },
      {
        "id": 2238,
        "kabkot_id": 170,
        "kecamatan": "Klari"
      },
      {
        "id": 2239,
        "kabkot_id": 170,
        "kecamatan": "Kotabaru"
      },
      {
        "id": 2240,
        "kabkot_id": 170,
        "kecamatan": "Kutawaluya"
      },
      {
        "id": 2241,
        "kabkot_id": 170,
        "kecamatan": "Lemahabang"
      },
      {
        "id": 2242,
        "kabkot_id": 170,
        "kecamatan": "Majalaya"
      },
      {
        "id": 2243,
        "kabkot_id": 170,
        "kecamatan": "Pakisjaya"
      },
      {
        "id": 2244,
        "kabkot_id": 170,
        "kecamatan": "Pangkalan"
      },
      {
        "id": 2245,
        "kabkot_id": 170,
        "kecamatan": "Pedes"
      },
      {
        "id": 2246,
        "kabkot_id": 170,
        "kecamatan": "Purwasari"
      },
      {
        "id": 2247,
        "kabkot_id": 170,
        "kecamatan": "Rawamerta"
      },
      {
        "id": 2248,
        "kabkot_id": 170,
        "kecamatan": "Rengasdengklok"
      },
      {
        "id": 2249,
        "kabkot_id": 170,
        "kecamatan": "Talagasari"
      },
      {
        "id": 2250,
        "kabkot_id": 170,
        "kecamatan": "Tegalwaru"
      },
      {
        "id": 2251,
        "kabkot_id": 170,
        "kecamatan": "Telukjambe Barat"
      },
      {
        "id": 2252,
        "kabkot_id": 170,
        "kecamatan": "Telukjambe Timur"
      },
      {
        "id": 2253,
        "kabkot_id": 170,
        "kecamatan": "Tempuran"
      },
      {
        "id": 2254,
        "kabkot_id": 170,
        "kecamatan": "Tirtajaya"
      },
      {
        "id": 2255,
        "kabkot_id": 170,
        "kecamatan": "Tirtamulya"
      },
      {
        "id": 2256,
        "kabkot_id": 171,
        "kecamatan": "Ciawigebang"
      },
      {
        "id": 2257,
        "kabkot_id": 171,
        "kecamatan": "Cibeureum"
      },
      {
        "id": 2258,
        "kabkot_id": 171,
        "kecamatan": "Cibingbin"
      },
      {
        "id": 2259,
        "kabkot_id": 171,
        "kecamatan": "Cidahu"
      },
      {
        "id": 2260,
        "kabkot_id": 171,
        "kecamatan": "Cigandamekar"
      },
      {
        "id": 2261,
        "kabkot_id": 171,
        "kecamatan": "Cigugur"
      },
      {
        "id": 2262,
        "kabkot_id": 171,
        "kecamatan": "Cilebak"
      },
      {
        "id": 2263,
        "kabkot_id": 171,
        "kecamatan": "Cilimus"
      },
      {
        "id": 2264,
        "kabkot_id": 171,
        "kecamatan": "Cimahi"
      },
      {
        "id": 2265,
        "kabkot_id": 171,
        "kecamatan": "Ciniru"
      },
      {
        "id": 2266,
        "kabkot_id": 171,
        "kecamatan": "Cipicung"
      },
      {
        "id": 2267,
        "kabkot_id": 171,
        "kecamatan": "Ciwaru"
      },
      {
        "id": 2268,
        "kabkot_id": 171,
        "kecamatan": "Darma"
      },
      {
        "id": 2269,
        "kabkot_id": 171,
        "kecamatan": "Garawangi"
      },
      {
        "id": 2270,
        "kabkot_id": 171,
        "kecamatan": "Hantara"
      },
      {
        "id": 2271,
        "kabkot_id": 171,
        "kecamatan": "Jalaksana"
      },
      {
        "id": 2272,
        "kabkot_id": 171,
        "kecamatan": "Japara"
      },
      {
        "id": 2273,
        "kabkot_id": 171,
        "kecamatan": "Kadugede"
      },
      {
        "id": 2274,
        "kabkot_id": 171,
        "kecamatan": "Kalimanggis"
      },
      {
        "id": 2275,
        "kabkot_id": 171,
        "kecamatan": "Karangkancana"
      },
      {
        "id": 2276,
        "kabkot_id": 171,
        "kecamatan": "Kramat Mulya"
      },
      {
        "id": 2277,
        "kabkot_id": 171,
        "kecamatan": "Kuningan"
      },
      {
        "id": 2278,
        "kabkot_id": 171,
        "kecamatan": "Lebakwangi"
      },
      {
        "id": 2279,
        "kabkot_id": 171,
        "kecamatan": "Luragung"
      },
      {
        "id": 2280,
        "kabkot_id": 171,
        "kecamatan": "Maleber"
      },
      {
        "id": 2281,
        "kabkot_id": 171,
        "kecamatan": "Mandirancan"
      },
      {
        "id": 2282,
        "kabkot_id": 171,
        "kecamatan": "Nusaherang"
      },
      {
        "id": 2283,
        "kabkot_id": 171,
        "kecamatan": "Pancalang"
      },
      {
        "id": 2284,
        "kabkot_id": 171,
        "kecamatan": "Pasawahan"
      },
      {
        "id": 2285,
        "kabkot_id": 171,
        "kecamatan": "Selajambe"
      },
      {
        "id": 2286,
        "kabkot_id": 171,
        "kecamatan": "Sindangagung"
      },
      {
        "id": 2287,
        "kabkot_id": 171,
        "kecamatan": "Subang"
      },
      {
        "id": 2288,
        "kabkot_id": 172,
        "kecamatan": "Argapura"
      },
      {
        "id": 2289,
        "kabkot_id": 172,
        "kecamatan": "Banjaran"
      },
      {
        "id": 2290,
        "kabkot_id": 172,
        "kecamatan": "Bantarujeg"
      },
      {
        "id": 2291,
        "kabkot_id": 172,
        "kecamatan": "Cigasong"
      },
      {
        "id": 2292,
        "kabkot_id": 172,
        "kecamatan": "Cikijing"
      },
      {
        "id": 2293,
        "kabkot_id": 172,
        "kecamatan": "Cingambul"
      },
      {
        "id": 2294,
        "kabkot_id": 172,
        "kecamatan": "Dawuan"
      },
      {
        "id": 2295,
        "kabkot_id": 172,
        "kecamatan": "Jatitujuh"
      },
      {
        "id": 2296,
        "kabkot_id": 172,
        "kecamatan": "Jatiwangi"
      },
      {
        "id": 2297,
        "kabkot_id": 172,
        "kecamatan": "Kadipaten"
      },
      {
        "id": 2298,
        "kabkot_id": 172,
        "kecamatan": "Kasokandel"
      },
      {
        "id": 2299,
        "kabkot_id": 172,
        "kecamatan": "Kertajati"
      },
      {
        "id": 2300,
        "kabkot_id": 172,
        "kecamatan": "Lemahsugih"
      },
      {
        "id": 2301,
        "kabkot_id": 172,
        "kecamatan": "Leuwimunding"
      },
      {
        "id": 2302,
        "kabkot_id": 172,
        "kecamatan": "Ligung"
      },
      {
        "id": 2303,
        "kabkot_id": 172,
        "kecamatan": "Maja"
      },
      {
        "id": 2304,
        "kabkot_id": 172,
        "kecamatan": "Majalengka"
      },
      {
        "id": 2305,
        "kabkot_id": 172,
        "kecamatan": "Malausma"
      },
      {
        "id": 2306,
        "kabkot_id": 172,
        "kecamatan": "Palasah"
      },
      {
        "id": 2307,
        "kabkot_id": 172,
        "kecamatan": "Panyingkiran"
      },
      {
        "id": 2308,
        "kabkot_id": 172,
        "kecamatan": "Rajagaluh"
      },
      {
        "id": 2309,
        "kabkot_id": 172,
        "kecamatan": "Sindang"
      },
      {
        "id": 2310,
        "kabkot_id": 172,
        "kecamatan": "Sindangwangi"
      },
      {
        "id": 2311,
        "kabkot_id": 172,
        "kecamatan": "Sukahaji"
      },
      {
        "id": 2312,
        "kabkot_id": 172,
        "kecamatan": "Sumberjaya"
      },
      {
        "id": 2313,
        "kabkot_id": 172,
        "kecamatan": "Talaga"
      },
      {
        "id": 2314,
        "kabkot_id": 173,
        "kecamatan": "Cigugur"
      },
      {
        "id": 2315,
        "kabkot_id": 173,
        "kecamatan": "Cijulang"
      },
      {
        "id": 2316,
        "kabkot_id": 173,
        "kecamatan": "Cimerak"
      },
      {
        "id": 2317,
        "kabkot_id": 173,
        "kecamatan": "Kalipucang"
      },
      {
        "id": 2318,
        "kabkot_id": 173,
        "kecamatan": "Langkaplancar"
      },
      {
        "id": 2319,
        "kabkot_id": 173,
        "kecamatan": "Mangunjaya"
      },
      {
        "id": 2320,
        "kabkot_id": 173,
        "kecamatan": "Padaherang"
      },
      {
        "id": 2321,
        "kabkot_id": 173,
        "kecamatan": "Pangandaran"
      },
      {
        "id": 2322,
        "kabkot_id": 173,
        "kecamatan": "Parigi"
      },
      {
        "id": 2323,
        "kabkot_id": 173,
        "kecamatan": "Sidamulih"
      },
      {
        "id": 2324,
        "kabkot_id": 174,
        "kecamatan": "Babakancikao"
      },
      {
        "id": 2325,
        "kabkot_id": 174,
        "kecamatan": "Bojong"
      },
      {
        "id": 2326,
        "kabkot_id": 174,
        "kecamatan": "Bungursari"
      },
      {
        "id": 2327,
        "kabkot_id": 174,
        "kecamatan": "Campaka"
      },
      {
        "id": 2328,
        "kabkot_id": 174,
        "kecamatan": "Cibatu"
      },
      {
        "id": 2329,
        "kabkot_id": 174,
        "kecamatan": "Darangdan"
      },
      {
        "id": 2330,
        "kabkot_id": 174,
        "kecamatan": "Jatiluhur"
      },
      {
        "id": 2331,
        "kabkot_id": 174,
        "kecamatan": "Kiarapedes"
      },
      {
        "id": 2332,
        "kabkot_id": 174,
        "kecamatan": "Maniis"
      },
      {
        "id": 2333,
        "kabkot_id": 174,
        "kecamatan": "Pasawahan"
      },
      {
        "id": 2334,
        "kabkot_id": 174,
        "kecamatan": "Plered"
      },
      {
        "id": 2335,
        "kabkot_id": 174,
        "kecamatan": "Pondoksalam"
      },
      {
        "id": 2336,
        "kabkot_id": 174,
        "kecamatan": "Purwakarta"
      },
      {
        "id": 2337,
        "kabkot_id": 174,
        "kecamatan": "Sukasari"
      },
      {
        "id": 2338,
        "kabkot_id": 174,
        "kecamatan": "Sukatani"
      },
      {
        "id": 2339,
        "kabkot_id": 174,
        "kecamatan": "Tegal Waru"
      },
      {
        "id": 2340,
        "kabkot_id": 174,
        "kecamatan": "Wanayasa"
      },
      {
        "id": 2341,
        "kabkot_id": 175,
        "kecamatan": "Binong"
      },
      {
        "id": 2342,
        "kabkot_id": 175,
        "kecamatan": "Blanakan"
      },
      {
        "id": 2343,
        "kabkot_id": 175,
        "kecamatan": "Ciasem"
      },
      {
        "id": 2344,
        "kabkot_id": 175,
        "kecamatan": "Ciater"
      },
      {
        "id": 2345,
        "kabkot_id": 175,
        "kecamatan": "Cibogo"
      },
      {
        "id": 2346,
        "kabkot_id": 175,
        "kecamatan": "Cijambe"
      },
      {
        "id": 2347,
        "kabkot_id": 175,
        "kecamatan": "Cikaum"
      },
      {
        "id": 2348,
        "kabkot_id": 175,
        "kecamatan": "Cipeundeuy"
      },
      {
        "id": 2349,
        "kabkot_id": 175,
        "kecamatan": "Cipunagara"
      },
      {
        "id": 2350,
        "kabkot_id": 175,
        "kecamatan": "Cisalak"
      },
      {
        "id": 2351,
        "kabkot_id": 175,
        "kecamatan": "Compreng"
      },
      {
        "id": 2352,
        "kabkot_id": 175,
        "kecamatan": "Dawuan"
      },
      {
        "id": 2353,
        "kabkot_id": 175,
        "kecamatan": "Jalancagak"
      },
      {
        "id": 2354,
        "kabkot_id": 175,
        "kecamatan": "Kalijati"
      },
      {
        "id": 2355,
        "kabkot_id": 175,
        "kecamatan": "Kasomalang"
      },
      {
        "id": 2356,
        "kabkot_id": 175,
        "kecamatan": "Legonkulon"
      },
      {
        "id": 2357,
        "kabkot_id": 175,
        "kecamatan": "Pabuaran"
      },
      {
        "id": 2358,
        "kabkot_id": 175,
        "kecamatan": "Pagaden"
      },
      {
        "id": 2359,
        "kabkot_id": 175,
        "kecamatan": "Pagaden Barat"
      },
      {
        "id": 2360,
        "kabkot_id": 175,
        "kecamatan": "Pamanukan"
      },
      {
        "id": 2361,
        "kabkot_id": 175,
        "kecamatan": "Patokbeusi"
      },
      {
        "id": 2362,
        "kabkot_id": 175,
        "kecamatan": "Purwadadi"
      },
      {
        "id": 2363,
        "kabkot_id": 175,
        "kecamatan": "Pusakajaya"
      },
      {
        "id": 2364,
        "kabkot_id": 175,
        "kecamatan": "Pusakanagara"
      },
      {
        "id": 2365,
        "kabkot_id": 175,
        "kecamatan": "Sagalaherang"
      },
      {
        "id": 2366,
        "kabkot_id": 175,
        "kecamatan": "Serangpanjang"
      },
      {
        "id": 2367,
        "kabkot_id": 175,
        "kecamatan": "Subang"
      },
      {
        "id": 2368,
        "kabkot_id": 175,
        "kecamatan": "Sukasari"
      },
      {
        "id": 2369,
        "kabkot_id": 175,
        "kecamatan": "Tambakdahan"
      },
      {
        "id": 2370,
        "kabkot_id": 175,
        "kecamatan": "Tanjungsiang"
      },
      {
        "id": 2371,
        "kabkot_id": 176,
        "kecamatan": "Bantargadung"
      },
      {
        "id": 2372,
        "kabkot_id": 176,
        "kecamatan": "Bojong Genteng"
      },
      {
        "id": 2373,
        "kabkot_id": 176,
        "kecamatan": "Caringin"
      },
      {
        "id": 2374,
        "kabkot_id": 176,
        "kecamatan": "Ciambar"
      },
      {
        "id": 2375,
        "kabkot_id": 176,
        "kecamatan": "Cibadak"
      },
      {
        "id": 2376,
        "kabkot_id": 176,
        "kecamatan": "Cibitung"
      },
      {
        "id": 2377,
        "kabkot_id": 176,
        "kecamatan": "Cicantayan"
      },
      {
        "id": 2378,
        "kabkot_id": 176,
        "kecamatan": "Cicurug"
      },
      {
        "id": 2379,
        "kabkot_id": 176,
        "kecamatan": "Cidadap"
      },
      {
        "id": 2380,
        "kabkot_id": 176,
        "kecamatan": "Cidahu"
      },
      {
        "id": 2381,
        "kabkot_id": 176,
        "kecamatan": "Cidolog"
      },
      {
        "id": 2382,
        "kabkot_id": 176,
        "kecamatan": "Ciemas"
      },
      {
        "id": 2383,
        "kabkot_id": 176,
        "kecamatan": "Cikakak"
      },
      {
        "id": 2384,
        "kabkot_id": 176,
        "kecamatan": "Cikembar"
      },
      {
        "id": 2385,
        "kabkot_id": 176,
        "kecamatan": "Cikidang"
      },
      {
        "id": 2386,
        "kabkot_id": 176,
        "kecamatan": "Cimanggu"
      },
      {
        "id": 2387,
        "kabkot_id": 176,
        "kecamatan": "Ciracap"
      },
      {
        "id": 2388,
        "kabkot_id": 176,
        "kecamatan": "Cireunghas"
      },
      {
        "id": 2389,
        "kabkot_id": 176,
        "kecamatan": "Cisaat"
      },
      {
        "id": 2390,
        "kabkot_id": 176,
        "kecamatan": "Cisolok"
      },
      {
        "id": 2391,
        "kabkot_id": 176,
        "kecamatan": "Curugkembar"
      },
      {
        "id": 2392,
        "kabkot_id": 176,
        "kecamatan": "Geger Bitung"
      },
      {
        "id": 2393,
        "kabkot_id": 176,
        "kecamatan": "Gunungguruh"
      },
      {
        "id": 2394,
        "kabkot_id": 176,
        "kecamatan": "Jampang Kulon"
      },
      {
        "id": 2395,
        "kabkot_id": 176,
        "kecamatan": "Jampang Tengah"
      },
      {
        "id": 2396,
        "kabkot_id": 176,
        "kecamatan": "Kabandungan"
      },
      {
        "id": 2397,
        "kabkot_id": 176,
        "kecamatan": "Kadudampit"
      },
      {
        "id": 2398,
        "kabkot_id": 176,
        "kecamatan": "Kalapa Nunggal"
      },
      {
        "id": 2399,
        "kabkot_id": 176,
        "kecamatan": "Kalibunder"
      },
      {
        "id": 2400,
        "kabkot_id": 176,
        "kecamatan": "Kebonpedes"
      },
      {
        "id": 2401,
        "kabkot_id": 176,
        "kecamatan": "Lengkong"
      },
      {
        "id": 2402,
        "kabkot_id": 176,
        "kecamatan": "Nagrak"
      },
      {
        "id": 2403,
        "kabkot_id": 176,
        "kecamatan": "Nyalindung"
      },
      {
        "id": 2404,
        "kabkot_id": 176,
        "kecamatan": "Pabuaran"
      },
      {
        "id": 2405,
        "kabkot_id": 176,
        "kecamatan": "Parakan Salak"
      },
      {
        "id": 2406,
        "kabkot_id": 176,
        "kecamatan": "Parung Kuda"
      },
      {
        "id": 2407,
        "kabkot_id": 176,
        "kecamatan": "Pelabuhanratu"
      },
      {
        "id": 2408,
        "kabkot_id": 176,
        "kecamatan": "Purabaya"
      },
      {
        "id": 2409,
        "kabkot_id": 176,
        "kecamatan": "Sagaranten"
      },
      {
        "id": 2410,
        "kabkot_id": 176,
        "kecamatan": "Simpenan"
      },
      {
        "id": 2411,
        "kabkot_id": 176,
        "kecamatan": "Sukabumi"
      },
      {
        "id": 2412,
        "kabkot_id": 176,
        "kecamatan": "Sukalarang"
      },
      {
        "id": 2413,
        "kabkot_id": 176,
        "kecamatan": "Sukaraja"
      },
      {
        "id": 2414,
        "kabkot_id": 176,
        "kecamatan": "Surade"
      },
      {
        "id": 2415,
        "kabkot_id": 176,
        "kecamatan": "Tegalbuleud"
      },
      {
        "id": 2416,
        "kabkot_id": 176,
        "kecamatan": "Waluran"
      },
      {
        "id": 2417,
        "kabkot_id": 176,
        "kecamatan": "Warungkiara"
      },
      {
        "id": 2418,
        "kabkot_id": 177,
        "kecamatan": "Buahdua"
      },
      {
        "id": 2419,
        "kabkot_id": 177,
        "kecamatan": "Cibugel"
      },
      {
        "id": 2420,
        "kabkot_id": 177,
        "kecamatan": "Cimalaka"
      },
      {
        "id": 2421,
        "kabkot_id": 177,
        "kecamatan": "Cimanggung"
      },
      {
        "id": 2422,
        "kabkot_id": 177,
        "kecamatan": "Cisarua"
      },
      {
        "id": 2423,
        "kabkot_id": 177,
        "kecamatan": "Cisitu"
      },
      {
        "id": 2424,
        "kabkot_id": 177,
        "kecamatan": "Conggeang"
      },
      {
        "id": 2425,
        "kabkot_id": 177,
        "kecamatan": "Darmaraja"
      },
      {
        "id": 2426,
        "kabkot_id": 177,
        "kecamatan": "Ganeas"
      },
      {
        "id": 2427,
        "kabkot_id": 177,
        "kecamatan": "Jatigede"
      },
      {
        "id": 2428,
        "kabkot_id": 177,
        "kecamatan": "Jatinangor"
      },
      {
        "id": 2429,
        "kabkot_id": 177,
        "kecamatan": "Jatinunggal"
      },
      {
        "id": 2430,
        "kabkot_id": 177,
        "kecamatan": "Pamulihan"
      },
      {
        "id": 2431,
        "kabkot_id": 177,
        "kecamatan": "Paseh"
      },
      {
        "id": 2432,
        "kabkot_id": 177,
        "kecamatan": "Rancakalong"
      },
      {
        "id": 2433,
        "kabkot_id": 177,
        "kecamatan": "Situraja"
      },
      {
        "id": 2434,
        "kabkot_id": 177,
        "kecamatan": "Sukasari"
      },
      {
        "id": 2435,
        "kabkot_id": 177,
        "kecamatan": "Sumedang Selatan"
      },
      {
        "id": 2436,
        "kabkot_id": 177,
        "kecamatan": "Sumedang Utara"
      },
      {
        "id": 2437,
        "kabkot_id": 177,
        "kecamatan": "Surian"
      },
      {
        "id": 2438,
        "kabkot_id": 177,
        "kecamatan": "Tanjungkerta"
      },
      {
        "id": 2439,
        "kabkot_id": 177,
        "kecamatan": "Tanjungmedar"
      },
      {
        "id": 2440,
        "kabkot_id": 177,
        "kecamatan": "Tanjungsari"
      },
      {
        "id": 2441,
        "kabkot_id": 177,
        "kecamatan": "Tomo"
      },
      {
        "id": 2442,
        "kabkot_id": 177,
        "kecamatan": "Ujungjaya"
      },
      {
        "id": 2443,
        "kabkot_id": 177,
        "kecamatan": "Wado"
      },
      {
        "id": 2444,
        "kabkot_id": 178,
        "kecamatan": "Bantarkalong"
      },
      {
        "id": 2445,
        "kabkot_id": 178,
        "kecamatan": "Bojongasih"
      },
      {
        "id": 2446,
        "kabkot_id": 178,
        "kecamatan": "Bojonggambir"
      },
      {
        "id": 2447,
        "kabkot_id": 178,
        "kecamatan": "Ciawi"
      },
      {
        "id": 2448,
        "kabkot_id": 178,
        "kecamatan": "Cibalong"
      },
      {
        "id": 2449,
        "kabkot_id": 178,
        "kecamatan": "Cigalontang"
      },
      {
        "id": 2450,
        "kabkot_id": 178,
        "kecamatan": "Cikalong"
      },
      {
        "id": 2451,
        "kabkot_id": 178,
        "kecamatan": "Cikatomas"
      },
      {
        "id": 2452,
        "kabkot_id": 178,
        "kecamatan": "Cineam"
      },
      {
        "id": 2453,
        "kabkot_id": 178,
        "kecamatan": "Cipatujah"
      },
      {
        "id": 2454,
        "kabkot_id": 178,
        "kecamatan": "Cisayong"
      },
      {
        "id": 2455,
        "kabkot_id": 178,
        "kecamatan": "Culamega"
      },
      {
        "id": 2456,
        "kabkot_id": 178,
        "kecamatan": "Gunung Tanjung"
      },
      {
        "id": 2457,
        "kabkot_id": 178,
        "kecamatan": "Jamanis"
      },
      {
        "id": 2458,
        "kabkot_id": 178,
        "kecamatan": "Jatiwaras"
      },
      {
        "id": 2459,
        "kabkot_id": 178,
        "kecamatan": "Kadipaten"
      },
      {
        "id": 2460,
        "kabkot_id": 178,
        "kecamatan": "Karang Jaya"
      },
      {
        "id": 2461,
        "kabkot_id": 178,
        "kecamatan": "Karangnunggal"
      },
      {
        "id": 2462,
        "kabkot_id": 178,
        "kecamatan": "Leuwisari"
      },
      {
        "id": 2463,
        "kabkot_id": 178,
        "kecamatan": "Mangunreja"
      },
      {
        "id": 2464,
        "kabkot_id": 178,
        "kecamatan": "Manonjaya"
      },
      {
        "id": 2465,
        "kabkot_id": 178,
        "kecamatan": "Padakembang"
      },
      {
        "id": 2466,
        "kabkot_id": 178,
        "kecamatan": "Pagerageung"
      },
      {
        "id": 2467,
        "kabkot_id": 178,
        "kecamatan": "Pancatengah"
      },
      {
        "id": 2468,
        "kabkot_id": 178,
        "kecamatan": "Parungponteng"
      },
      {
        "id": 2469,
        "kabkot_id": 178,
        "kecamatan": "Puspahiang"
      },
      {
        "id": 2470,
        "kabkot_id": 178,
        "kecamatan": "Rajapolah"
      },
      {
        "id": 2471,
        "kabkot_id": 178,
        "kecamatan": "Salawu"
      },
      {
        "id": 2472,
        "kabkot_id": 178,
        "kecamatan": "Salopa"
      },
      {
        "id": 2473,
        "kabkot_id": 178,
        "kecamatan": "Sariwangi"
      },
      {
        "id": 2474,
        "kabkot_id": 178,
        "kecamatan": "Singaparna"
      },
      {
        "id": 2475,
        "kabkot_id": 178,
        "kecamatan": "Sodonghilir"
      },
      {
        "id": 2476,
        "kabkot_id": 178,
        "kecamatan": "Sukahening"
      },
      {
        "id": 2477,
        "kabkot_id": 178,
        "kecamatan": "Sukaraja"
      },
      {
        "id": 2478,
        "kabkot_id": 178,
        "kecamatan": "Sukarame"
      },
      {
        "id": 2479,
        "kabkot_id": 178,
        "kecamatan": "Sukaratu"
      },
      {
        "id": 2480,
        "kabkot_id": 178,
        "kecamatan": "Sukaresik"
      },
      {
        "id": 2481,
        "kabkot_id": 178,
        "kecamatan": "Tanjungjaya"
      },
      {
        "id": 2482,
        "kabkot_id": 178,
        "kecamatan": "Taraju"
      },
      {
        "id": 2483,
        "kabkot_id": 179,
        "kecamatan": "Andir"
      },
      {
        "id": 2484,
        "kabkot_id": 179,
        "kecamatan": "Antapani (Cicadas)"
      },
      {
        "id": 2485,
        "kabkot_id": 179,
        "kecamatan": "Arcamanik"
      },
      {
        "id": 2486,
        "kabkot_id": 179,
        "kecamatan": "Astana Anyar"
      },
      {
        "id": 2487,
        "kabkot_id": 179,
        "kecamatan": "Babakan Ciparay"
      },
      {
        "id": 2488,
        "kabkot_id": 179,
        "kecamatan": "Bandung Kidul"
      },
      {
        "id": 2489,
        "kabkot_id": 179,
        "kecamatan": "Bandung Kulon"
      },
      {
        "id": 2490,
        "kabkot_id": 179,
        "kecamatan": "Bandung Wetan"
      },
      {
        "id": 2491,
        "kabkot_id": 179,
        "kecamatan": "Batununggal"
      },
      {
        "id": 2492,
        "kabkot_id": 179,
        "kecamatan": "Bojongloa Kaler"
      },
      {
        "id": 2493,
        "kabkot_id": 179,
        "kecamatan": "Bojongloa Kidul"
      },
      {
        "id": 2494,
        "kabkot_id": 179,
        "kecamatan": "Buahbatu (Margacinta)"
      },
      {
        "id": 2495,
        "kabkot_id": 179,
        "kecamatan": "Cibeunying Kaler"
      },
      {
        "id": 2496,
        "kabkot_id": 179,
        "kecamatan": "Cibeunying Kidul"
      },
      {
        "id": 2497,
        "kabkot_id": 179,
        "kecamatan": "Cibiru"
      },
      {
        "id": 2498,
        "kabkot_id": 179,
        "kecamatan": "Cicendo"
      },
      {
        "id": 2499,
        "kabkot_id": 179,
        "kecamatan": "Cidadap"
      },
      {
        "id": 2500,
        "kabkot_id": 179,
        "kecamatan": "Cinambo"
      },
      {
        "id": 2501,
        "kabkot_id": 179,
        "kecamatan": "Coblong"
      },
      {
        "id": 2502,
        "kabkot_id": 179,
        "kecamatan": "Gedebage"
      },
      {
        "id": 2503,
        "kabkot_id": 179,
        "kecamatan": "Kiaracondong"
      },
      {
        "id": 2504,
        "kabkot_id": 179,
        "kecamatan": "Lengkong"
      },
      {
        "id": 2505,
        "kabkot_id": 179,
        "kecamatan": "Mandalajati"
      },
      {
        "id": 2506,
        "kabkot_id": 179,
        "kecamatan": "Panyileukan"
      },
      {
        "id": 2507,
        "kabkot_id": 179,
        "kecamatan": "Rancasari"
      },
      {
        "id": 2508,
        "kabkot_id": 179,
        "kecamatan": "Regol"
      },
      {
        "id": 2509,
        "kabkot_id": 179,
        "kecamatan": "Sukajadi"
      },
      {
        "id": 2510,
        "kabkot_id": 179,
        "kecamatan": "Sukasari"
      },
      {
        "id": 2511,
        "kabkot_id": 179,
        "kecamatan": "Sumur Bandung"
      },
      {
        "id": 2512,
        "kabkot_id": 179,
        "kecamatan": "Ujung Berung"
      },
      {
        "id": 2513,
        "kabkot_id": 180,
        "kecamatan": "Banjar"
      },
      {
        "id": 2514,
        "kabkot_id": 180,
        "kecamatan": "Langensari"
      },
      {
        "id": 2515,
        "kabkot_id": 180,
        "kecamatan": "Pataruman"
      },
      {
        "id": 2516,
        "kabkot_id": 180,
        "kecamatan": "Purwaharja"
      },
      {
        "id": 2517,
        "kabkot_id": 181,
        "kecamatan": "Bantar Gebang"
      },
      {
        "id": 2518,
        "kabkot_id": 181,
        "kecamatan": "Bekasi Barat"
      },
      {
        "id": 2519,
        "kabkot_id": 181,
        "kecamatan": "Bekasi Selatan"
      },
      {
        "id": 2520,
        "kabkot_id": 181,
        "kecamatan": "Bekasi Timur"
      },
      {
        "id": 2521,
        "kabkot_id": 181,
        "kecamatan": "Bekasi Utara"
      },
      {
        "id": 2522,
        "kabkot_id": 181,
        "kecamatan": "Jati Sampurna"
      },
      {
        "id": 2523,
        "kabkot_id": 181,
        "kecamatan": "Jatiasih"
      },
      {
        "id": 2524,
        "kabkot_id": 181,
        "kecamatan": "Medan Satria"
      },
      {
        "id": 2525,
        "kabkot_id": 181,
        "kecamatan": "Mustika Jaya"
      },
      {
        "id": 2526,
        "kabkot_id": 181,
        "kecamatan": "Pondok Gede"
      },
      {
        "id": 2527,
        "kabkot_id": 181,
        "kecamatan": "Pondok Melati"
      },
      {
        "id": 2528,
        "kabkot_id": 181,
        "kecamatan": "Rawalumbu"
      },
      {
        "id": 2529,
        "kabkot_id": 182,
        "kecamatan": "Bogor Barat - Kota"
      },
      {
        "id": 2530,
        "kabkot_id": 182,
        "kecamatan": "Bogor Selatan - Kota"
      },
      {
        "id": 2531,
        "kabkot_id": 182,
        "kecamatan": "Bogor Tengah - Kota"
      },
      {
        "id": 2532,
        "kabkot_id": 182,
        "kecamatan": "Bogor Timur - Kota"
      },
      {
        "id": 2533,
        "kabkot_id": 182,
        "kecamatan": "Bogor Utara - Kota"
      },
      {
        "id": 2534,
        "kabkot_id": 182,
        "kecamatan": "Tanah Sereal"
      },
      {
        "id": 2535,
        "kabkot_id": 183,
        "kecamatan": "Cimahi Selatan"
      },
      {
        "id": 2536,
        "kabkot_id": 183,
        "kecamatan": "Cimahi Tengah"
      },
      {
        "id": 2537,
        "kabkot_id": 183,
        "kecamatan": "Cimahi Utara"
      },
      {
        "id": 2538,
        "kabkot_id": 184,
        "kecamatan": "Harjamukti"
      },
      {
        "id": 2539,
        "kabkot_id": 184,
        "kecamatan": "Kejaksan"
      },
      {
        "id": 2540,
        "kabkot_id": 184,
        "kecamatan": "Kesambi"
      },
      {
        "id": 2541,
        "kabkot_id": 184,
        "kecamatan": "Lemahwungkuk"
      },
      {
        "id": 2542,
        "kabkot_id": 184,
        "kecamatan": "Pekalipan"
      },
      {
        "id": 2543,
        "kabkot_id": 185,
        "kecamatan": "Beji"
      },
      {
        "id": 2544,
        "kabkot_id": 185,
        "kecamatan": "Bojongsari"
      },
      {
        "id": 2545,
        "kabkot_id": 185,
        "kecamatan": "Cilodong"
      },
      {
        "id": 2546,
        "kabkot_id": 185,
        "kecamatan": "Cimanggis"
      },
      {
        "id": 2547,
        "kabkot_id": 185,
        "kecamatan": "Cinere"
      },
      {
        "id": 2548,
        "kabkot_id": 185,
        "kecamatan": "Cipayung"
      },
      {
        "id": 2549,
        "kabkot_id": 185,
        "kecamatan": "Limo"
      },
      {
        "id": 2550,
        "kabkot_id": 185,
        "kecamatan": "Pancoran Mas"
      },
      {
        "id": 2551,
        "kabkot_id": 185,
        "kecamatan": "Sawangan"
      },
      {
        "id": 2552,
        "kabkot_id": 185,
        "kecamatan": "Sukmajaya"
      },
      {
        "id": 2553,
        "kabkot_id": 185,
        "kecamatan": "Tapos"
      },
      {
        "id": 2554,
        "kabkot_id": 186,
        "kecamatan": "Baros"
      },
      {
        "id": 2555,
        "kabkot_id": 186,
        "kecamatan": "Cibeureum"
      },
      {
        "id": 2556,
        "kabkot_id": 186,
        "kecamatan": "Cikole"
      },
      {
        "id": 2557,
        "kabkot_id": 186,
        "kecamatan": "Citamiang"
      },
      {
        "id": 2558,
        "kabkot_id": 186,
        "kecamatan": "Gunung Puyuh"
      },
      {
        "id": 2559,
        "kabkot_id": 186,
        "kecamatan": "Lembursitu"
      },
      {
        "id": 2560,
        "kabkot_id": 186,
        "kecamatan": "Warudoyong"
      },
      {
        "id": 2561,
        "kabkot_id": 187,
        "kecamatan": "Bungursari"
      },
      {
        "id": 2562,
        "kabkot_id": 187,
        "kecamatan": "Cibeureum"
      },
      {
        "id": 2563,
        "kabkot_id": 187,
        "kecamatan": "Cihideung"
      },
      {
        "id": 2564,
        "kabkot_id": 187,
        "kecamatan": "Cipedes"
      },
      {
        "id": 2565,
        "kabkot_id": 187,
        "kecamatan": "Indihiang"
      },
      {
        "id": 2566,
        "kabkot_id": 187,
        "kecamatan": "Kawalu"
      },
      {
        "id": 2567,
        "kabkot_id": 187,
        "kecamatan": "Mangkubumi"
      },
      {
        "id": 2568,
        "kabkot_id": 187,
        "kecamatan": "Purbaratu"
      },
      {
        "id": 2569,
        "kabkot_id": 187,
        "kecamatan": "Tamansari"
      },
      {
        "id": 2570,
        "kabkot_id": 187,
        "kecamatan": "Tawang"
      },
      {
        "id": 2571,
        "kabkot_id": 188,
        "kecamatan": "Banjarmangu"
      },
      {
        "id": 2572,
        "kabkot_id": 188,
        "kecamatan": "Banjarnegara"
      },
      {
        "id": 2573,
        "kabkot_id": 188,
        "kecamatan": "Batur"
      },
      {
        "id": 2574,
        "kabkot_id": 188,
        "kecamatan": "Bawang"
      },
      {
        "id": 2575,
        "kabkot_id": 188,
        "kecamatan": "Kalibening"
      },
      {
        "id": 2576,
        "kabkot_id": 188,
        "kecamatan": "Karangkobar"
      },
      {
        "id": 2577,
        "kabkot_id": 188,
        "kecamatan": "Madukara"
      },
      {
        "id": 2578,
        "kabkot_id": 188,
        "kecamatan": "Mandiraja"
      },
      {
        "id": 2579,
        "kabkot_id": 188,
        "kecamatan": "Pagedongan"
      },
      {
        "id": 2580,
        "kabkot_id": 188,
        "kecamatan": "Pagentan"
      },
      {
        "id": 2581,
        "kabkot_id": 188,
        "kecamatan": "Pandanarum"
      },
      {
        "id": 2582,
        "kabkot_id": 188,
        "kecamatan": "Pejawaran"
      },
      {
        "id": 2583,
        "kabkot_id": 188,
        "kecamatan": "Punggelan"
      },
      {
        "id": 2584,
        "kabkot_id": 188,
        "kecamatan": "Purwonegoro"
      },
      {
        "id": 2585,
        "kabkot_id": 188,
        "kecamatan": "Purworejo Klampok"
      },
      {
        "id": 2586,
        "kabkot_id": 188,
        "kecamatan": "Rakit"
      },
      {
        "id": 2587,
        "kabkot_id": 188,
        "kecamatan": "Sigaluh"
      },
      {
        "id": 2588,
        "kabkot_id": 188,
        "kecamatan": "Susukan"
      },
      {
        "id": 2589,
        "kabkot_id": 188,
        "kecamatan": "Wanadadi (Wonodadi)"
      },
      {
        "id": 2590,
        "kabkot_id": 188,
        "kecamatan": "Wanayasa"
      },
      {
        "id": 2591,
        "kabkot_id": 189,
        "kecamatan": "Ajibarang"
      },
      {
        "id": 2592,
        "kabkot_id": 189,
        "kecamatan": "Banyumas"
      },
      {
        "id": 2593,
        "kabkot_id": 189,
        "kecamatan": "Baturaden"
      },
      {
        "id": 2594,
        "kabkot_id": 189,
        "kecamatan": "Cilongok"
      },
      {
        "id": 2595,
        "kabkot_id": 189,
        "kecamatan": "Gumelar"
      },
      {
        "id": 2596,
        "kabkot_id": 189,
        "kecamatan": "Jatilawang"
      },
      {
        "id": 2597,
        "kabkot_id": 189,
        "kecamatan": "Kalibagor"
      },
      {
        "id": 2598,
        "kabkot_id": 189,
        "kecamatan": "Karanglewas"
      },
      {
        "id": 2599,
        "kabkot_id": 189,
        "kecamatan": "Kebasen"
      },
      {
        "id": 2600,
        "kabkot_id": 189,
        "kecamatan": "Kedung Banteng"
      },
      {
        "id": 2601,
        "kabkot_id": 189,
        "kecamatan": "Kembaran"
      },
      {
        "id": 2602,
        "kabkot_id": 189,
        "kecamatan": "Kemranjen"
      },
      {
        "id": 2603,
        "kabkot_id": 189,
        "kecamatan": "Lumbir"
      },
      {
        "id": 2604,
        "kabkot_id": 189,
        "kecamatan": "Patikraja"
      },
      {
        "id": 2605,
        "kabkot_id": 189,
        "kecamatan": "Pekuncen"
      },
      {
        "id": 2606,
        "kabkot_id": 189,
        "kecamatan": "Purwojati"
      },
      {
        "id": 2607,
        "kabkot_id": 189,
        "kecamatan": "Purwokerto Barat"
      },
      {
        "id": 2608,
        "kabkot_id": 189,
        "kecamatan": "Purwokerto Selatan"
      },
      {
        "id": 2609,
        "kabkot_id": 189,
        "kecamatan": "Purwokerto Timur"
      },
      {
        "id": 2610,
        "kabkot_id": 189,
        "kecamatan": "Purwokerto Utara"
      },
      {
        "id": 2611,
        "kabkot_id": 189,
        "kecamatan": "Rawalo"
      },
      {
        "id": 2612,
        "kabkot_id": 189,
        "kecamatan": "Sokaraja"
      },
      {
        "id": 2613,
        "kabkot_id": 189,
        "kecamatan": "Somagede"
      },
      {
        "id": 2614,
        "kabkot_id": 189,
        "kecamatan": "Sumbang"
      },
      {
        "id": 2615,
        "kabkot_id": 189,
        "kecamatan": "Sumpiuh"
      },
      {
        "id": 2616,
        "kabkot_id": 189,
        "kecamatan": "Tambak"
      },
      {
        "id": 2617,
        "kabkot_id": 189,
        "kecamatan": "Wangon"
      },
      {
        "id": 2618,
        "kabkot_id": 190,
        "kecamatan": "Bandar"
      },
      {
        "id": 2619,
        "kabkot_id": 190,
        "kecamatan": "Banyuputih"
      },
      {
        "id": 2620,
        "kabkot_id": 190,
        "kecamatan": "Batang"
      },
      {
        "id": 2621,
        "kabkot_id": 190,
        "kecamatan": "Bawang"
      },
      {
        "id": 2622,
        "kabkot_id": 190,
        "kecamatan": "Blado"
      },
      {
        "id": 2623,
        "kabkot_id": 190,
        "kecamatan": "Gringsing"
      },
      {
        "id": 2624,
        "kabkot_id": 190,
        "kecamatan": "Kandeman"
      },
      {
        "id": 2625,
        "kabkot_id": 190,
        "kecamatan": "Limpung"
      },
      {
        "id": 2626,
        "kabkot_id": 190,
        "kecamatan": "Pecalungan"
      },
      {
        "id": 2627,
        "kabkot_id": 190,
        "kecamatan": "Reban"
      },
      {
        "id": 2628,
        "kabkot_id": 190,
        "kecamatan": "Subah"
      },
      {
        "id": 2629,
        "kabkot_id": 190,
        "kecamatan": "Tersono"
      },
      {
        "id": 2630,
        "kabkot_id": 190,
        "kecamatan": "Tulis"
      },
      {
        "id": 2631,
        "kabkot_id": 190,
        "kecamatan": "Warungasem"
      },
      {
        "id": 2632,
        "kabkot_id": 190,
        "kecamatan": "Wonotunggal"
      },
      {
        "id": 2633,
        "kabkot_id": 191,
        "kecamatan": "Banjarejo"
      },
      {
        "id": 2634,
        "kabkot_id": 191,
        "kecamatan": "Blora kota"
      },
      {
        "id": 2635,
        "kabkot_id": 191,
        "kecamatan": "Bogorejo"
      },
      {
        "id": 2636,
        "kabkot_id": 191,
        "kecamatan": "Cepu"
      },
      {
        "id": 2637,
        "kabkot_id": 191,
        "kecamatan": "Japah"
      },
      {
        "id": 2638,
        "kabkot_id": 191,
        "kecamatan": "Jati"
      },
      {
        "id": 2639,
        "kabkot_id": 191,
        "kecamatan": "Jepon"
      },
      {
        "id": 2640,
        "kabkot_id": 191,
        "kecamatan": "Jiken"
      },
      {
        "id": 2641,
        "kabkot_id": 191,
        "kecamatan": "Kedungtuban"
      },
      {
        "id": 2642,
        "kabkot_id": 191,
        "kecamatan": "Kradenan"
      },
      {
        "id": 2643,
        "kabkot_id": 191,
        "kecamatan": "Kunduran"
      },
      {
        "id": 2644,
        "kabkot_id": 191,
        "kecamatan": "Ngawen"
      },
      {
        "id": 2645,
        "kabkot_id": 191,
        "kecamatan": "Randublatung"
      },
      {
        "id": 2646,
        "kabkot_id": 191,
        "kecamatan": "Sambong"
      },
      {
        "id": 2647,
        "kabkot_id": 191,
        "kecamatan": "Todanan"
      },
      {
        "id": 2648,
        "kabkot_id": 191,
        "kecamatan": "Tunjungan"
      },
      {
        "id": 2649,
        "kabkot_id": 192,
        "kecamatan": "Ampel"
      },
      {
        "id": 2650,
        "kabkot_id": 192,
        "kecamatan": "Andong"
      },
      {
        "id": 2651,
        "kabkot_id": 192,
        "kecamatan": "Banyudono"
      },
      {
        "id": 2652,
        "kabkot_id": 192,
        "kecamatan": "Boyolali"
      },
      {
        "id": 2653,
        "kabkot_id": 192,
        "kecamatan": "Cepogo"
      },
      {
        "id": 2654,
        "kabkot_id": 192,
        "kecamatan": "Juwangi"
      },
      {
        "id": 2655,
        "kabkot_id": 192,
        "kecamatan": "Karanggede"
      },
      {
        "id": 2656,
        "kabkot_id": 192,
        "kecamatan": "Kemusu"
      },
      {
        "id": 2657,
        "kabkot_id": 192,
        "kecamatan": "Klego"
      },
      {
        "id": 2658,
        "kabkot_id": 192,
        "kecamatan": "Mojosongo"
      },
      {
        "id": 2659,
        "kabkot_id": 192,
        "kecamatan": "Musuk"
      },
      {
        "id": 2660,
        "kabkot_id": 192,
        "kecamatan": "Ngemplak"
      },
      {
        "id": 2661,
        "kabkot_id": 192,
        "kecamatan": "Nogosari"
      },
      {
        "id": 2662,
        "kabkot_id": 192,
        "kecamatan": "Sambi"
      },
      {
        "id": 2663,
        "kabkot_id": 192,
        "kecamatan": "Sawit"
      },
      {
        "id": 2664,
        "kabkot_id": 192,
        "kecamatan": "Selo"
      },
      {
        "id": 2665,
        "kabkot_id": 192,
        "kecamatan": "Simo"
      },
      {
        "id": 2666,
        "kabkot_id": 192,
        "kecamatan": "Teras"
      },
      {
        "id": 2667,
        "kabkot_id": 192,
        "kecamatan": "Wonosegoro"
      },
      {
        "id": 2668,
        "kabkot_id": 193,
        "kecamatan": "Banjarharjo"
      },
      {
        "id": 2669,
        "kabkot_id": 193,
        "kecamatan": "Bantarkawung"
      },
      {
        "id": 2670,
        "kabkot_id": 193,
        "kecamatan": "Brebes"
      },
      {
        "id": 2671,
        "kabkot_id": 193,
        "kecamatan": "Bulakamba"
      },
      {
        "id": 2672,
        "kabkot_id": 193,
        "kecamatan": "Bumiayu"
      },
      {
        "id": 2673,
        "kabkot_id": 193,
        "kecamatan": "Jatibarang"
      },
      {
        "id": 2674,
        "kabkot_id": 193,
        "kecamatan": "Kersana"
      },
      {
        "id": 2675,
        "kabkot_id": 193,
        "kecamatan": "Ketanggungan"
      },
      {
        "id": 2676,
        "kabkot_id": 193,
        "kecamatan": "Larangan"
      },
      {
        "id": 2677,
        "kabkot_id": 193,
        "kecamatan": "Losari"
      },
      {
        "id": 2678,
        "kabkot_id": 193,
        "kecamatan": "Paguyangan"
      },
      {
        "id": 2679,
        "kabkot_id": 193,
        "kecamatan": "Salem"
      },
      {
        "id": 2680,
        "kabkot_id": 193,
        "kecamatan": "Sirampog"
      },
      {
        "id": 2681,
        "kabkot_id": 193,
        "kecamatan": "Songgom"
      },
      {
        "id": 2682,
        "kabkot_id": 193,
        "kecamatan": "Tanjung"
      },
      {
        "id": 2683,
        "kabkot_id": 193,
        "kecamatan": "Tonjong"
      },
      {
        "id": 2684,
        "kabkot_id": 193,
        "kecamatan": "Wanasari"
      },
      {
        "id": 2685,
        "kabkot_id": 194,
        "kecamatan": "Adipala"
      },
      {
        "id": 2686,
        "kabkot_id": 194,
        "kecamatan": "Bantarsari"
      },
      {
        "id": 2687,
        "kabkot_id": 194,
        "kecamatan": "Binangun"
      },
      {
        "id": 2688,
        "kabkot_id": 194,
        "kecamatan": "Cilacap Selatan"
      },
      {
        "id": 2689,
        "kabkot_id": 194,
        "kecamatan": "Cilacap Tengah"
      },
      {
        "id": 2690,
        "kabkot_id": 194,
        "kecamatan": "Cilacap Utara"
      },
      {
        "id": 2691,
        "kabkot_id": 194,
        "kecamatan": "Cimanggu"
      },
      {
        "id": 2692,
        "kabkot_id": 194,
        "kecamatan": "Cipari"
      },
      {
        "id": 2693,
        "kabkot_id": 194,
        "kecamatan": "Dayeuhluhur"
      },
      {
        "id": 2694,
        "kabkot_id": 194,
        "kecamatan": "Gandrungmangu"
      },
      {
        "id": 2695,
        "kabkot_id": 194,
        "kecamatan": "Jeruklegi"
      },
      {
        "id": 2696,
        "kabkot_id": 194,
        "kecamatan": "Kampung Laut"
      },
      {
        "id": 2697,
        "kabkot_id": 194,
        "kecamatan": "Karangpucung"
      },
      {
        "id": 2698,
        "kabkot_id": 194,
        "kecamatan": "Kawunganten"
      },
      {
        "id": 2699,
        "kabkot_id": 194,
        "kecamatan": "Kedungreja"
      },
      {
        "id": 2700,
        "kabkot_id": 194,
        "kecamatan": "Kesugihan"
      },
      {
        "id": 2701,
        "kabkot_id": 194,
        "kecamatan": "Kroya"
      },
      {
        "id": 2702,
        "kabkot_id": 194,
        "kecamatan": "Majenang"
      },
      {
        "id": 2703,
        "kabkot_id": 194,
        "kecamatan": "Maos"
      },
      {
        "id": 2704,
        "kabkot_id": 194,
        "kecamatan": "Nusawungu"
      },
      {
        "id": 2705,
        "kabkot_id": 194,
        "kecamatan": "Patimuan"
      },
      {
        "id": 2706,
        "kabkot_id": 194,
        "kecamatan": "Sampang"
      },
      {
        "id": 2707,
        "kabkot_id": 194,
        "kecamatan": "Sidareja"
      },
      {
        "id": 2708,
        "kabkot_id": 194,
        "kecamatan": "Wanareja"
      },
      {
        "id": 2709,
        "kabkot_id": 195,
        "kecamatan": "Bonang"
      },
      {
        "id": 2710,
        "kabkot_id": 195,
        "kecamatan": "Demak"
      },
      {
        "id": 2711,
        "kabkot_id": 195,
        "kecamatan": "Dempet"
      },
      {
        "id": 2712,
        "kabkot_id": 195,
        "kecamatan": "Gajah"
      },
      {
        "id": 2713,
        "kabkot_id": 195,
        "kecamatan": "Guntur"
      },
      {
        "id": 2714,
        "kabkot_id": 195,
        "kecamatan": "Karang Tengah"
      },
      {
        "id": 2715,
        "kabkot_id": 195,
        "kecamatan": "Karanganyar"
      },
      {
        "id": 2716,
        "kabkot_id": 195,
        "kecamatan": "Karangawen"
      },
      {
        "id": 2717,
        "kabkot_id": 195,
        "kecamatan": "Kebonagung"
      },
      {
        "id": 2718,
        "kabkot_id": 195,
        "kecamatan": "Mijen"
      },
      {
        "id": 2719,
        "kabkot_id": 195,
        "kecamatan": "Mranggen"
      },
      {
        "id": 2720,
        "kabkot_id": 195,
        "kecamatan": "Sayung"
      },
      {
        "id": 2721,
        "kabkot_id": 195,
        "kecamatan": "Wedung"
      },
      {
        "id": 2722,
        "kabkot_id": 195,
        "kecamatan": "Wonosalam"
      },
      {
        "id": 2723,
        "kabkot_id": 196,
        "kecamatan": "Brati"
      },
      {
        "id": 2724,
        "kabkot_id": 196,
        "kecamatan": "Gabus"
      },
      {
        "id": 2725,
        "kabkot_id": 196,
        "kecamatan": "Geyer"
      },
      {
        "id": 2726,
        "kabkot_id": 196,
        "kecamatan": "Godong"
      },
      {
        "id": 2727,
        "kabkot_id": 196,
        "kecamatan": "Grobogan"
      },
      {
        "id": 2728,
        "kabkot_id": 196,
        "kecamatan": "Gubug"
      },
      {
        "id": 2729,
        "kabkot_id": 196,
        "kecamatan": "Karangrayung"
      },
      {
        "id": 2730,
        "kabkot_id": 196,
        "kecamatan": "Kedungjati"
      },
      {
        "id": 2731,
        "kabkot_id": 196,
        "kecamatan": "Klambu"
      },
      {
        "id": 2732,
        "kabkot_id": 196,
        "kecamatan": "Kradenan"
      },
      {
        "id": 2733,
        "kabkot_id": 196,
        "kecamatan": "Ngaringan"
      },
      {
        "id": 2734,
        "kabkot_id": 196,
        "kecamatan": "Penawangan"
      },
      {
        "id": 2735,
        "kabkot_id": 196,
        "kecamatan": "Pulokulon"
      },
      {
        "id": 2736,
        "kabkot_id": 196,
        "kecamatan": "Purwodadi"
      },
      {
        "id": 2737,
        "kabkot_id": 196,
        "kecamatan": "Tanggungharjo"
      },
      {
        "id": 2738,
        "kabkot_id": 196,
        "kecamatan": "Tawangharjo"
      },
      {
        "id": 2739,
        "kabkot_id": 196,
        "kecamatan": "Tegowanu"
      },
      {
        "id": 2740,
        "kabkot_id": 196,
        "kecamatan": "Toroh"
      },
      {
        "id": 2741,
        "kabkot_id": 196,
        "kecamatan": "Wirosari"
      },
      {
        "id": 2742,
        "kabkot_id": 197,
        "kecamatan": "Bangsri"
      },
      {
        "id": 2743,
        "kabkot_id": 197,
        "kecamatan": "Batealit"
      },
      {
        "id": 2744,
        "kabkot_id": 197,
        "kecamatan": "Donorojo"
      },
      {
        "id": 2745,
        "kabkot_id": 197,
        "kecamatan": "Jepara"
      },
      {
        "id": 2746,
        "kabkot_id": 197,
        "kecamatan": "Kalinyamatan"
      },
      {
        "id": 2747,
        "kabkot_id": 197,
        "kecamatan": "Karimunjawa"
      },
      {
        "id": 2748,
        "kabkot_id": 197,
        "kecamatan": "Kedung"
      },
      {
        "id": 2749,
        "kabkot_id": 197,
        "kecamatan": "Keling"
      },
      {
        "id": 2750,
        "kabkot_id": 197,
        "kecamatan": "Kembang"
      },
      {
        "id": 2751,
        "kabkot_id": 197,
        "kecamatan": "Mayong"
      },
      {
        "id": 2752,
        "kabkot_id": 197,
        "kecamatan": "Mlonggo"
      },
      {
        "id": 2753,
        "kabkot_id": 197,
        "kecamatan": "Nalumsari"
      },
      {
        "id": 2754,
        "kabkot_id": 197,
        "kecamatan": "Pakis Aji"
      },
      {
        "id": 2755,
        "kabkot_id": 197,
        "kecamatan": "Pecangaan"
      },
      {
        "id": 2756,
        "kabkot_id": 197,
        "kecamatan": "Tahunan"
      },
      {
        "id": 2757,
        "kabkot_id": 197,
        "kecamatan": "Welahan"
      },
      {
        "id": 2758,
        "kabkot_id": 198,
        "kecamatan": "Colomadu"
      },
      {
        "id": 2759,
        "kabkot_id": 198,
        "kecamatan": "Gondangrejo"
      },
      {
        "id": 2760,
        "kabkot_id": 198,
        "kecamatan": "Jaten"
      },
      {
        "id": 2761,
        "kabkot_id": 198,
        "kecamatan": "Jatipuro"
      },
      {
        "id": 2762,
        "kabkot_id": 198,
        "kecamatan": "Jatiyoso"
      },
      {
        "id": 2763,
        "kabkot_id": 198,
        "kecamatan": "Jenawi"
      },
      {
        "id": 2764,
        "kabkot_id": 198,
        "kecamatan": "Jumantono"
      },
      {
        "id": 2765,
        "kabkot_id": 198,
        "kecamatan": "Jumapolo"
      },
      {
        "id": 2766,
        "kabkot_id": 198,
        "kecamatan": "Karanganyar"
      },
      {
        "id": 2767,
        "kabkot_id": 198,
        "kecamatan": "Karangpandan"
      },
      {
        "id": 2768,
        "kabkot_id": 198,
        "kecamatan": "Kebakkramat"
      },
      {
        "id": 2769,
        "kabkot_id": 198,
        "kecamatan": "Kerjo"
      },
      {
        "id": 2770,
        "kabkot_id": 198,
        "kecamatan": "Matesih"
      },
      {
        "id": 2771,
        "kabkot_id": 198,
        "kecamatan": "Mojogedang"
      },
      {
        "id": 2772,
        "kabkot_id": 198,
        "kecamatan": "Ngargoyoso"
      },
      {
        "id": 2773,
        "kabkot_id": 198,
        "kecamatan": "Tasikmadu"
      },
      {
        "id": 2774,
        "kabkot_id": 198,
        "kecamatan": "Tawangmangu"
      },
      {
        "id": 2775,
        "kabkot_id": 199,
        "kecamatan": "Adimulyo"
      },
      {
        "id": 2776,
        "kabkot_id": 199,
        "kecamatan": "Alian/Aliyan"
      },
      {
        "id": 2777,
        "kabkot_id": 199,
        "kecamatan": "Ambal"
      },
      {
        "id": 2778,
        "kabkot_id": 199,
        "kecamatan": "Ayah"
      },
      {
        "id": 2779,
        "kabkot_id": 199,
        "kecamatan": "Bonorowo"
      },
      {
        "id": 2780,
        "kabkot_id": 199,
        "kecamatan": "Buayan"
      },
      {
        "id": 2781,
        "kabkot_id": 199,
        "kecamatan": "Buluspesantren"
      },
      {
        "id": 2782,
        "kabkot_id": 199,
        "kecamatan": "Gombong"
      },
      {
        "id": 2783,
        "kabkot_id": 199,
        "kecamatan": "Karanganyar"
      },
      {
        "id": 2784,
        "kabkot_id": 199,
        "kecamatan": "Karanggayam"
      },
      {
        "id": 2785,
        "kabkot_id": 199,
        "kecamatan": "Karangsambung"
      },
      {
        "id": 2786,
        "kabkot_id": 199,
        "kecamatan": "Kebumen"
      },
      {
        "id": 2787,
        "kabkot_id": 199,
        "kecamatan": "Klirong"
      },
      {
        "id": 2788,
        "kabkot_id": 199,
        "kecamatan": "Kutowinangun"
      },
      {
        "id": 2789,
        "kabkot_id": 199,
        "kecamatan": "Kuwarasan"
      },
      {
        "id": 2790,
        "kabkot_id": 199,
        "kecamatan": "Mirit"
      },
      {
        "id": 2791,
        "kabkot_id": 199,
        "kecamatan": "Padureso"
      },
      {
        "id": 2792,
        "kabkot_id": 199,
        "kecamatan": "Pejagoan"
      },
      {
        "id": 2793,
        "kabkot_id": 199,
        "kecamatan": "Petanahan"
      },
      {
        "id": 2794,
        "kabkot_id": 199,
        "kecamatan": "Poncowarno"
      },
      {
        "id": 2795,
        "kabkot_id": 199,
        "kecamatan": "Prembun"
      },
      {
        "id": 2796,
        "kabkot_id": 199,
        "kecamatan": "Puring"
      },
      {
        "id": 2797,
        "kabkot_id": 199,
        "kecamatan": "Rowokele"
      },
      {
        "id": 2798,
        "kabkot_id": 199,
        "kecamatan": "Sadang"
      },
      {
        "id": 2799,
        "kabkot_id": 199,
        "kecamatan": "Sempor"
      },
      {
        "id": 2800,
        "kabkot_id": 199,
        "kecamatan": "Sruweng"
      },
      {
        "id": 2801,
        "kabkot_id": 200,
        "kecamatan": "Boja"
      },
      {
        "id": 2802,
        "kabkot_id": 200,
        "kecamatan": "Brangsong"
      },
      {
        "id": 2803,
        "kabkot_id": 200,
        "kecamatan": "Cepiring"
      },
      {
        "id": 2804,
        "kabkot_id": 200,
        "kecamatan": "Gemuh"
      },
      {
        "id": 2805,
        "kabkot_id": 200,
        "kecamatan": "Kaliwungu"
      },
      {
        "id": 2806,
        "kabkot_id": 200,
        "kecamatan": "Kaliwungu Selatan"
      },
      {
        "id": 2807,
        "kabkot_id": 200,
        "kecamatan": "Kangkung"
      },
      {
        "id": 2808,
        "kabkot_id": 200,
        "kecamatan": "Kendal"
      },
      {
        "id": 2809,
        "kabkot_id": 200,
        "kecamatan": "Limbangan"
      },
      {
        "id": 2810,
        "kabkot_id": 200,
        "kecamatan": "Ngampel"
      },
      {
        "id": 2811,
        "kabkot_id": 200,
        "kecamatan": "Pagerruyung"
      },
      {
        "id": 2812,
        "kabkot_id": 200,
        "kecamatan": "Patean"
      },
      {
        "id": 2813,
        "kabkot_id": 200,
        "kecamatan": "Patebon"
      },
      {
        "id": 2814,
        "kabkot_id": 200,
        "kecamatan": "Pegandon"
      },
      {
        "id": 2815,
        "kabkot_id": 200,
        "kecamatan": "Plantungan"
      },
      {
        "id": 2816,
        "kabkot_id": 200,
        "kecamatan": "Ringinarum"
      },
      {
        "id": 2817,
        "kabkot_id": 200,
        "kecamatan": "Rowosari"
      },
      {
        "id": 2818,
        "kabkot_id": 200,
        "kecamatan": "Singorojo"
      },
      {
        "id": 2819,
        "kabkot_id": 200,
        "kecamatan": "Sukorejo"
      },
      {
        "id": 2820,
        "kabkot_id": 200,
        "kecamatan": "Weleri"
      },
      {
        "id": 2821,
        "kabkot_id": 201,
        "kecamatan": "Bayat"
      },
      {
        "id": 2822,
        "kabkot_id": 201,
        "kecamatan": "Cawas"
      },
      {
        "id": 2823,
        "kabkot_id": 201,
        "kecamatan": "Ceper"
      },
      {
        "id": 2824,
        "kabkot_id": 201,
        "kecamatan": "Delanggu"
      },
      {
        "id": 2825,
        "kabkot_id": 201,
        "kecamatan": "Gantiwarno"
      },
      {
        "id": 2826,
        "kabkot_id": 201,
        "kecamatan": "Jatinom"
      },
      {
        "id": 2827,
        "kabkot_id": 201,
        "kecamatan": "Jogonalan"
      },
      {
        "id": 2828,
        "kabkot_id": 201,
        "kecamatan": "Juwiring"
      },
      {
        "id": 2829,
        "kabkot_id": 201,
        "kecamatan": "Kalikotes"
      },
      {
        "id": 2830,
        "kabkot_id": 201,
        "kecamatan": "Karanganom"
      },
      {
        "id": 2831,
        "kabkot_id": 201,
        "kecamatan": "Karangdowo"
      },
      {
        "id": 2832,
        "kabkot_id": 201,
        "kecamatan": "Karangnongko"
      },
      {
        "id": 2833,
        "kabkot_id": 201,
        "kecamatan": "Kebonarum"
      },
      {
        "id": 2834,
        "kabkot_id": 201,
        "kecamatan": "Kemalang"
      },
      {
        "id": 2835,
        "kabkot_id": 201,
        "kecamatan": "Klaten Selatan"
      },
      {
        "id": 2836,
        "kabkot_id": 201,
        "kecamatan": "Klaten Tengah"
      },
      {
        "id": 2837,
        "kabkot_id": 201,
        "kecamatan": "Klaten Utara"
      },
      {
        "id": 2838,
        "kabkot_id": 201,
        "kecamatan": "Manisrenggo"
      },
      {
        "id": 2839,
        "kabkot_id": 201,
        "kecamatan": "Ngawen"
      },
      {
        "id": 2840,
        "kabkot_id": 201,
        "kecamatan": "Pedan"
      },
      {
        "id": 2841,
        "kabkot_id": 201,
        "kecamatan": "Polanharjo"
      },
      {
        "id": 2842,
        "kabkot_id": 201,
        "kecamatan": "Prambanan"
      },
      {
        "id": 2843,
        "kabkot_id": 201,
        "kecamatan": "Trucuk"
      },
      {
        "id": 2844,
        "kabkot_id": 201,
        "kecamatan": "Tulung"
      },
      {
        "id": 2845,
        "kabkot_id": 201,
        "kecamatan": "Wedi"
      },
      {
        "id": 2846,
        "kabkot_id": 201,
        "kecamatan": "Wonosari"
      },
      {
        "id": 2847,
        "kabkot_id": 202,
        "kecamatan": "Bae"
      },
      {
        "id": 2848,
        "kabkot_id": 202,
        "kecamatan": "Dawe"
      },
      {
        "id": 2849,
        "kabkot_id": 202,
        "kecamatan": "Gebog"
      },
      {
        "id": 2850,
        "kabkot_id": 202,
        "kecamatan": "Jati"
      },
      {
        "id": 2851,
        "kabkot_id": 202,
        "kecamatan": "Jekulo"
      },
      {
        "id": 2852,
        "kabkot_id": 202,
        "kecamatan": "Kaliwungu"
      },
      {
        "id": 2853,
        "kabkot_id": 202,
        "kecamatan": "Kudus Kota"
      },
      {
        "id": 2854,
        "kabkot_id": 202,
        "kecamatan": "Mejobo"
      },
      {
        "id": 2855,
        "kabkot_id": 202,
        "kecamatan": "Undaan"
      },
      {
        "id": 2856,
        "kabkot_id": 203,
        "kecamatan": "Bandongan"
      },
      {
        "id": 2857,
        "kabkot_id": 203,
        "kecamatan": "Borobudur"
      },
      {
        "id": 2858,
        "kabkot_id": 203,
        "kecamatan": "Candimulyo"
      },
      {
        "id": 2859,
        "kabkot_id": 203,
        "kecamatan": "Dukun"
      },
      {
        "id": 2860,
        "kabkot_id": 203,
        "kecamatan": "Grabag"
      },
      {
        "id": 2861,
        "kabkot_id": 203,
        "kecamatan": "Kajoran"
      },
      {
        "id": 2862,
        "kabkot_id": 203,
        "kecamatan": "Kaliangkrik"
      },
      {
        "id": 2863,
        "kabkot_id": 203,
        "kecamatan": "Mertoyudan"
      },
      {
        "id": 2864,
        "kabkot_id": 203,
        "kecamatan": "Mungkid"
      },
      {
        "id": 2865,
        "kabkot_id": 203,
        "kecamatan": "Muntilan"
      },
      {
        "id": 2866,
        "kabkot_id": 203,
        "kecamatan": "Ngablak"
      },
      {
        "id": 2867,
        "kabkot_id": 203,
        "kecamatan": "Ngluwar"
      },
      {
        "id": 2868,
        "kabkot_id": 203,
        "kecamatan": "Pakis"
      },
      {
        "id": 2869,
        "kabkot_id": 203,
        "kecamatan": "Salam"
      },
      {
        "id": 2870,
        "kabkot_id": 203,
        "kecamatan": "Salaman"
      },
      {
        "id": 2871,
        "kabkot_id": 203,
        "kecamatan": "Sawangan"
      },
      {
        "id": 2872,
        "kabkot_id": 203,
        "kecamatan": "Secang"
      },
      {
        "id": 2873,
        "kabkot_id": 203,
        "kecamatan": "Srumbung"
      },
      {
        "id": 2874,
        "kabkot_id": 203,
        "kecamatan": "Tegalrejo"
      },
      {
        "id": 2875,
        "kabkot_id": 203,
        "kecamatan": "Tempuran"
      },
      {
        "id": 2876,
        "kabkot_id": 203,
        "kecamatan": "Windusari"
      },
      {
        "id": 2877,
        "kabkot_id": 204,
        "kecamatan": "Batangan"
      },
      {
        "id": 2878,
        "kabkot_id": 204,
        "kecamatan": "Cluwak"
      },
      {
        "id": 2879,
        "kabkot_id": 204,
        "kecamatan": "Dukuhseti"
      },
      {
        "id": 2880,
        "kabkot_id": 204,
        "kecamatan": "Gabus"
      },
      {
        "id": 2881,
        "kabkot_id": 204,
        "kecamatan": "Gembong"
      },
      {
        "id": 2882,
        "kabkot_id": 204,
        "kecamatan": "Gunungwungkal"
      },
      {
        "id": 2883,
        "kabkot_id": 204,
        "kecamatan": "Jaken"
      },
      {
        "id": 2884,
        "kabkot_id": 204,
        "kecamatan": "Jakenan"
      },
      {
        "id": 2885,
        "kabkot_id": 204,
        "kecamatan": "Juwana"
      },
      {
        "id": 2886,
        "kabkot_id": 204,
        "kecamatan": "Kayen"
      },
      {
        "id": 2887,
        "kabkot_id": 204,
        "kecamatan": "Margorejo"
      },
      {
        "id": 2888,
        "kabkot_id": 204,
        "kecamatan": "Margoyoso"
      },
      {
        "id": 2889,
        "kabkot_id": 204,
        "kecamatan": "Pati"
      },
      {
        "id": 2890,
        "kabkot_id": 204,
        "kecamatan": "Pucakwangi"
      },
      {
        "id": 2891,
        "kabkot_id": 204,
        "kecamatan": "Sukolilo"
      },
      {
        "id": 2892,
        "kabkot_id": 204,
        "kecamatan": "Tambakromo"
      },
      {
        "id": 2893,
        "kabkot_id": 204,
        "kecamatan": "Tayu"
      },
      {
        "id": 2894,
        "kabkot_id": 204,
        "kecamatan": "Tlogowungu"
      },
      {
        "id": 2895,
        "kabkot_id": 204,
        "kecamatan": "Trangkil"
      },
      {
        "id": 2896,
        "kabkot_id": 204,
        "kecamatan": "Wedarijaksa"
      },
      {
        "id": 2897,
        "kabkot_id": 204,
        "kecamatan": "Winong"
      },
      {
        "id": 2898,
        "kabkot_id": 205,
        "kecamatan": "Bojong"
      },
      {
        "id": 2899,
        "kabkot_id": 205,
        "kecamatan": "Buaran"
      },
      {
        "id": 2900,
        "kabkot_id": 205,
        "kecamatan": "Doro"
      },
      {
        "id": 2901,
        "kabkot_id": 205,
        "kecamatan": "Kajen"
      },
      {
        "id": 2902,
        "kabkot_id": 205,
        "kecamatan": "Kandangserang"
      },
      {
        "id": 2903,
        "kabkot_id": 205,
        "kecamatan": "Karanganyar"
      },
      {
        "id": 2904,
        "kabkot_id": 205,
        "kecamatan": "Karangdadap"
      },
      {
        "id": 2905,
        "kabkot_id": 205,
        "kecamatan": "Kedungwuni"
      },
      {
        "id": 2906,
        "kabkot_id": 205,
        "kecamatan": "Kesesi"
      },
      {
        "id": 2907,
        "kabkot_id": 205,
        "kecamatan": "Lebakbarang"
      },
      {
        "id": 2908,
        "kabkot_id": 205,
        "kecamatan": "Paninggaran"
      },
      {
        "id": 2909,
        "kabkot_id": 205,
        "kecamatan": "Petungkriono/Petungkriyono"
      },
      {
        "id": 2910,
        "kabkot_id": 205,
        "kecamatan": "Siwalan"
      },
      {
        "id": 2911,
        "kabkot_id": 205,
        "kecamatan": "Sragi"
      },
      {
        "id": 2912,
        "kabkot_id": 205,
        "kecamatan": "Talun"
      },
      {
        "id": 2913,
        "kabkot_id": 205,
        "kecamatan": "Tirto"
      },
      {
        "id": 2914,
        "kabkot_id": 205,
        "kecamatan": "Wiradesa"
      },
      {
        "id": 2915,
        "kabkot_id": 205,
        "kecamatan": "Wonokerto"
      },
      {
        "id": 2916,
        "kabkot_id": 205,
        "kecamatan": "Wonopringgo"
      },
      {
        "id": 2917,
        "kabkot_id": 206,
        "kecamatan": "Ampelgading"
      },
      {
        "id": 2918,
        "kabkot_id": 206,
        "kecamatan": "Bantarbolang"
      },
      {
        "id": 2919,
        "kabkot_id": 206,
        "kecamatan": "Belik"
      },
      {
        "id": 2920,
        "kabkot_id": 206,
        "kecamatan": "Bodeh"
      },
      {
        "id": 2921,
        "kabkot_id": 206,
        "kecamatan": "Comal"
      },
      {
        "id": 2922,
        "kabkot_id": 206,
        "kecamatan": "Moga"
      },
      {
        "id": 2923,
        "kabkot_id": 206,
        "kecamatan": "Pemalang"
      },
      {
        "id": 2924,
        "kabkot_id": 206,
        "kecamatan": "Petarukan"
      },
      {
        "id": 2925,
        "kabkot_id": 206,
        "kecamatan": "Pulosari"
      },
      {
        "id": 2926,
        "kabkot_id": 206,
        "kecamatan": "Randudongkal"
      },
      {
        "id": 2927,
        "kabkot_id": 206,
        "kecamatan": "Taman"
      },
      {
        "id": 2928,
        "kabkot_id": 206,
        "kecamatan": "Ulujami"
      },
      {
        "id": 2929,
        "kabkot_id": 206,
        "kecamatan": "Warungpring"
      },
      {
        "id": 2930,
        "kabkot_id": 206,
        "kecamatan": "Watukumpul"
      },
      {
        "id": 2931,
        "kabkot_id": 207,
        "kecamatan": "Bobotsari"
      },
      {
        "id": 2932,
        "kabkot_id": 207,
        "kecamatan": "Bojongsari"
      },
      {
        "id": 2933,
        "kabkot_id": 207,
        "kecamatan": "Bukateja"
      },
      {
        "id": 2934,
        "kabkot_id": 207,
        "kecamatan": "Kaligondang"
      },
      {
        "id": 2935,
        "kabkot_id": 207,
        "kecamatan": "Kalimanah"
      },
      {
        "id": 2936,
        "kabkot_id": 207,
        "kecamatan": "Karanganyar"
      },
      {
        "id": 2937,
        "kabkot_id": 207,
        "kecamatan": "Karangjambu"
      },
      {
        "id": 2938,
        "kabkot_id": 207,
        "kecamatan": "Karangmoncol"
      },
      {
        "id": 2939,
        "kabkot_id": 207,
        "kecamatan": "Karangreja"
      },
      {
        "id": 2940,
        "kabkot_id": 207,
        "kecamatan": "Kejobong"
      },
      {
        "id": 2941,
        "kabkot_id": 207,
        "kecamatan": "Kemangkon"
      },
      {
        "id": 2942,
        "kabkot_id": 207,
        "kecamatan": "Kertanegara"
      },
      {
        "id": 2943,
        "kabkot_id": 207,
        "kecamatan": "Kutasari"
      },
      {
        "id": 2944,
        "kabkot_id": 207,
        "kecamatan": "Mrebet"
      },
      {
        "id": 2945,
        "kabkot_id": 207,
        "kecamatan": "Padamara"
      },
      {
        "id": 2946,
        "kabkot_id": 207,
        "kecamatan": "Pengadegan"
      },
      {
        "id": 2947,
        "kabkot_id": 207,
        "kecamatan": "Purbalingga"
      },
      {
        "id": 2948,
        "kabkot_id": 207,
        "kecamatan": "Rembang"
      },
      {
        "id": 2949,
        "kabkot_id": 208,
        "kecamatan": "Bagelen"
      },
      {
        "id": 2950,
        "kabkot_id": 208,
        "kecamatan": "Banyuurip"
      },
      {
        "id": 2951,
        "kabkot_id": 208,
        "kecamatan": "Bayan"
      },
      {
        "id": 2952,
        "kabkot_id": 208,
        "kecamatan": "Bener"
      },
      {
        "id": 2953,
        "kabkot_id": 208,
        "kecamatan": "Bruno"
      },
      {
        "id": 2954,
        "kabkot_id": 208,
        "kecamatan": "Butuh"
      },
      {
        "id": 2955,
        "kabkot_id": 208,
        "kecamatan": "Gebang"
      },
      {
        "id": 2956,
        "kabkot_id": 208,
        "kecamatan": "Grabag"
      },
      {
        "id": 2957,
        "kabkot_id": 208,
        "kecamatan": "Kaligesing"
      },
      {
        "id": 2958,
        "kabkot_id": 208,
        "kecamatan": "Kemiri"
      },
      {
        "id": 2959,
        "kabkot_id": 208,
        "kecamatan": "Kutoarjo"
      },
      {
        "id": 2960,
        "kabkot_id": 208,
        "kecamatan": "Loano"
      },
      {
        "id": 2961,
        "kabkot_id": 208,
        "kecamatan": "Ngombol"
      },
      {
        "id": 2962,
        "kabkot_id": 208,
        "kecamatan": "Pituruh"
      },
      {
        "id": 2963,
        "kabkot_id": 208,
        "kecamatan": "Purwodadi"
      },
      {
        "id": 2964,
        "kabkot_id": 208,
        "kecamatan": "Purworejo"
      },
      {
        "id": 2965,
        "kabkot_id": 209,
        "kecamatan": "Bulu"
      },
      {
        "id": 2966,
        "kabkot_id": 209,
        "kecamatan": "Gunem"
      },
      {
        "id": 2967,
        "kabkot_id": 209,
        "kecamatan": "Kaliori"
      },
      {
        "id": 2968,
        "kabkot_id": 209,
        "kecamatan": "Kragan"
      },
      {
        "id": 2969,
        "kabkot_id": 209,
        "kecamatan": "Lasem"
      },
      {
        "id": 2970,
        "kabkot_id": 209,
        "kecamatan": "Pamotan"
      },
      {
        "id": 2971,
        "kabkot_id": 209,
        "kecamatan": "Pancur"
      },
      {
        "id": 2972,
        "kabkot_id": 209,
        "kecamatan": "Rembang"
      },
      {
        "id": 2973,
        "kabkot_id": 209,
        "kecamatan": "Sale"
      },
      {
        "id": 2974,
        "kabkot_id": 209,
        "kecamatan": "Sarang"
      },
      {
        "id": 2975,
        "kabkot_id": 209,
        "kecamatan": "Sedan"
      },
      {
        "id": 2976,
        "kabkot_id": 209,
        "kecamatan": "Sluke"
      },
      {
        "id": 2977,
        "kabkot_id": 209,
        "kecamatan": "Sulang"
      },
      {
        "id": 2978,
        "kabkot_id": 209,
        "kecamatan": "Sumber"
      },
      {
        "id": 2979,
        "kabkot_id": 210,
        "kecamatan": "Ambarawa"
      },
      {
        "id": 2980,
        "kabkot_id": 210,
        "kecamatan": "Bancak"
      },
      {
        "id": 2981,
        "kabkot_id": 210,
        "kecamatan": "Bandungan"
      },
      {
        "id": 2982,
        "kabkot_id": 210,
        "kecamatan": "Banyubiru"
      },
      {
        "id": 2983,
        "kabkot_id": 210,
        "kecamatan": "Bawen"
      },
      {
        "id": 2984,
        "kabkot_id": 210,
        "kecamatan": "Bergas"
      },
      {
        "id": 2985,
        "kabkot_id": 210,
        "kecamatan": "Bringin"
      },
      {
        "id": 2986,
        "kabkot_id": 210,
        "kecamatan": "Getasan"
      },
      {
        "id": 2987,
        "kabkot_id": 210,
        "kecamatan": "Jambu"
      },
      {
        "id": 2988,
        "kabkot_id": 210,
        "kecamatan": "Kaliwungu"
      },
      {
        "id": 2989,
        "kabkot_id": 210,
        "kecamatan": "Pabelan"
      },
      {
        "id": 2990,
        "kabkot_id": 210,
        "kecamatan": "Pringapus"
      },
      {
        "id": 2991,
        "kabkot_id": 210,
        "kecamatan": "Sumowono"
      },
      {
        "id": 2992,
        "kabkot_id": 210,
        "kecamatan": "Suruh"
      },
      {
        "id": 2993,
        "kabkot_id": 210,
        "kecamatan": "Susukan"
      },
      {
        "id": 2994,
        "kabkot_id": 210,
        "kecamatan": "Tengaran"
      },
      {
        "id": 2995,
        "kabkot_id": 210,
        "kecamatan": "Tuntang"
      },
      {
        "id": 2996,
        "kabkot_id": 210,
        "kecamatan": "Ungaran Barat"
      },
      {
        "id": 2997,
        "kabkot_id": 210,
        "kecamatan": "Ungaran Timur"
      },
      {
        "id": 2998,
        "kabkot_id": 211,
        "kecamatan": "Gemolong"
      },
      {
        "id": 2999,
        "kabkot_id": 211,
        "kecamatan": "Gesi"
      },
      {
        "id": 3000,
        "kabkot_id": 211,
        "kecamatan": "Gondang"
      },
      {
        "id": 3001,
        "kabkot_id": 211,
        "kecamatan": "Jenar"
      },
      {
        "id": 3002,
        "kabkot_id": 211,
        "kecamatan": "Kalijambe"
      },
      {
        "id": 3003,
        "kabkot_id": 211,
        "kecamatan": "Karangmalang"
      },
      {
        "id": 3004,
        "kabkot_id": 211,
        "kecamatan": "Kedawung"
      },
      {
        "id": 3005,
        "kabkot_id": 211,
        "kecamatan": "Masaran"
      },
      {
        "id": 3006,
        "kabkot_id": 211,
        "kecamatan": "Miri"
      },
      {
        "id": 3007,
        "kabkot_id": 211,
        "kecamatan": "Mondokan"
      },
      {
        "id": 3008,
        "kabkot_id": 211,
        "kecamatan": "Ngrampal"
      },
      {
        "id": 3009,
        "kabkot_id": 211,
        "kecamatan": "Plupuh"
      },
      {
        "id": 3010,
        "kabkot_id": 211,
        "kecamatan": "Sambirejo"
      },
      {
        "id": 3011,
        "kabkot_id": 211,
        "kecamatan": "Sambung Macan"
      },
      {
        "id": 3012,
        "kabkot_id": 211,
        "kecamatan": "Sidoharjo"
      },
      {
        "id": 3013,
        "kabkot_id": 211,
        "kecamatan": "Sragen"
      },
      {
        "id": 3014,
        "kabkot_id": 211,
        "kecamatan": "Sukodono"
      },
      {
        "id": 3015,
        "kabkot_id": 211,
        "kecamatan": "Sumberlawang"
      },
      {
        "id": 3016,
        "kabkot_id": 211,
        "kecamatan": "Tangen"
      },
      {
        "id": 3017,
        "kabkot_id": 211,
        "kecamatan": "Tanon"
      },
      {
        "id": 3018,
        "kabkot_id": 212,
        "kecamatan": "Baki"
      },
      {
        "id": 3019,
        "kabkot_id": 212,
        "kecamatan": "Bendosari"
      },
      {
        "id": 3020,
        "kabkot_id": 212,
        "kecamatan": "Bulu"
      },
      {
        "id": 3021,
        "kabkot_id": 212,
        "kecamatan": "Gatak"
      },
      {
        "id": 3022,
        "kabkot_id": 212,
        "kecamatan": "Grogol"
      },
      {
        "id": 3023,
        "kabkot_id": 212,
        "kecamatan": "Kartasura"
      },
      {
        "id": 3024,
        "kabkot_id": 212,
        "kecamatan": "Mojolaban"
      },
      {
        "id": 3025,
        "kabkot_id": 212,
        "kecamatan": "Nguter"
      },
      {
        "id": 3026,
        "kabkot_id": 212,
        "kecamatan": "Polokarto"
      },
      {
        "id": 3027,
        "kabkot_id": 212,
        "kecamatan": "Sukoharjo"
      },
      {
        "id": 3028,
        "kabkot_id": 212,
        "kecamatan": "Tawangsari"
      },
      {
        "id": 3029,
        "kabkot_id": 212,
        "kecamatan": "Weru"
      },
      {
        "id": 3030,
        "kabkot_id": 213,
        "kecamatan": "Adiwerna"
      },
      {
        "id": 3031,
        "kabkot_id": 213,
        "kecamatan": "Balapulang"
      },
      {
        "id": 3032,
        "kabkot_id": 213,
        "kecamatan": "Bojong"
      },
      {
        "id": 3033,
        "kabkot_id": 213,
        "kecamatan": "Bumijawa"
      },
      {
        "id": 3034,
        "kabkot_id": 213,
        "kecamatan": "Dukuhturi"
      },
      {
        "id": 3035,
        "kabkot_id": 213,
        "kecamatan": "Dukuhwaru"
      },
      {
        "id": 3036,
        "kabkot_id": 213,
        "kecamatan": "Jatinegara"
      },
      {
        "id": 3037,
        "kabkot_id": 213,
        "kecamatan": "Kedung Banteng"
      },
      {
        "id": 3038,
        "kabkot_id": 213,
        "kecamatan": "Kramat"
      },
      {
        "id": 3039,
        "kabkot_id": 213,
        "kecamatan": "Lebaksiu"
      },
      {
        "id": 3040,
        "kabkot_id": 213,
        "kecamatan": "Margasari"
      },
      {
        "id": 3041,
        "kabkot_id": 213,
        "kecamatan": "Pagerbarang"
      },
      {
        "id": 3042,
        "kabkot_id": 213,
        "kecamatan": "Pangkah"
      },
      {
        "id": 3043,
        "kabkot_id": 213,
        "kecamatan": "Slawi"
      },
      {
        "id": 3044,
        "kabkot_id": 213,
        "kecamatan": "Surodadi"
      },
      {
        "id": 3045,
        "kabkot_id": 213,
        "kecamatan": "Talang"
      },
      {
        "id": 3046,
        "kabkot_id": 213,
        "kecamatan": "Tarub"
      },
      {
        "id": 3047,
        "kabkot_id": 213,
        "kecamatan": "Warurejo"
      },
      {
        "id": 3048,
        "kabkot_id": 214,
        "kecamatan": "Bansari"
      },
      {
        "id": 3049,
        "kabkot_id": 214,
        "kecamatan": "Bejen"
      },
      {
        "id": 3050,
        "kabkot_id": 214,
        "kecamatan": "Bulu"
      },
      {
        "id": 3051,
        "kabkot_id": 214,
        "kecamatan": "Candiroto"
      },
      {
        "id": 3052,
        "kabkot_id": 214,
        "kecamatan": "Gemawang"
      },
      {
        "id": 3053,
        "kabkot_id": 214,
        "kecamatan": "Jumo"
      },
      {
        "id": 3054,
        "kabkot_id": 214,
        "kecamatan": "Kaloran"
      },
      {
        "id": 3055,
        "kabkot_id": 214,
        "kecamatan": "Kandangan"
      },
      {
        "id": 3056,
        "kabkot_id": 214,
        "kecamatan": "Kedu"
      },
      {
        "id": 3057,
        "kabkot_id": 214,
        "kecamatan": "Kledung"
      },
      {
        "id": 3058,
        "kabkot_id": 214,
        "kecamatan": "Kranggan"
      },
      {
        "id": 3059,
        "kabkot_id": 214,
        "kecamatan": "Ngadirejo"
      },
      {
        "id": 3060,
        "kabkot_id": 214,
        "kecamatan": "Parakan"
      },
      {
        "id": 3061,
        "kabkot_id": 214,
        "kecamatan": "Pringsurat"
      },
      {
        "id": 3062,
        "kabkot_id": 214,
        "kecamatan": "Selopampang"
      },
      {
        "id": 3063,
        "kabkot_id": 214,
        "kecamatan": "Temanggung"
      },
      {
        "id": 3064,
        "kabkot_id": 214,
        "kecamatan": "Tembarak"
      },
      {
        "id": 3065,
        "kabkot_id": 214,
        "kecamatan": "Tlogomulyo"
      },
      {
        "id": 3066,
        "kabkot_id": 214,
        "kecamatan": "Tretep"
      },
      {
        "id": 3067,
        "kabkot_id": 214,
        "kecamatan": "Wonoboyo"
      },
      {
        "id": 3068,
        "kabkot_id": 215,
        "kecamatan": "Baturetno"
      },
      {
        "id": 3069,
        "kabkot_id": 215,
        "kecamatan": "Batuwarno"
      },
      {
        "id": 3070,
        "kabkot_id": 215,
        "kecamatan": "Bulukerto"
      },
      {
        "id": 3071,
        "kabkot_id": 215,
        "kecamatan": "Eromoko"
      },
      {
        "id": 3072,
        "kabkot_id": 215,
        "kecamatan": "Girimarto"
      },
      {
        "id": 3073,
        "kabkot_id": 215,
        "kecamatan": "Giritontro"
      },
      {
        "id": 3074,
        "kabkot_id": 215,
        "kecamatan": "Giriwoyo"
      },
      {
        "id": 3075,
        "kabkot_id": 215,
        "kecamatan": "Jatipurno"
      },
      {
        "id": 3076,
        "kabkot_id": 215,
        "kecamatan": "Jatiroto"
      },
      {
        "id": 3077,
        "kabkot_id": 215,
        "kecamatan": "Jatisrono"
      },
      {
        "id": 3078,
        "kabkot_id": 215,
        "kecamatan": "Karangtengah"
      },
      {
        "id": 3079,
        "kabkot_id": 215,
        "kecamatan": "Kismantoro"
      },
      {
        "id": 3080,
        "kabkot_id": 215,
        "kecamatan": "Manyaran"
      },
      {
        "id": 3081,
        "kabkot_id": 215,
        "kecamatan": "Ngadirojo"
      },
      {
        "id": 3082,
        "kabkot_id": 215,
        "kecamatan": "Nguntoronadi"
      },
      {
        "id": 3083,
        "kabkot_id": 215,
        "kecamatan": "Paranggupito"
      },
      {
        "id": 3084,
        "kabkot_id": 215,
        "kecamatan": "Pracimantoro"
      },
      {
        "id": 3085,
        "kabkot_id": 215,
        "kecamatan": "Puhpelem"
      },
      {
        "id": 3086,
        "kabkot_id": 215,
        "kecamatan": "Purwantoro"
      },
      {
        "id": 3087,
        "kabkot_id": 215,
        "kecamatan": "Selogiri"
      },
      {
        "id": 3088,
        "kabkot_id": 215,
        "kecamatan": "Sidoharjo"
      },
      {
        "id": 3089,
        "kabkot_id": 215,
        "kecamatan": "Slogohimo"
      },
      {
        "id": 3090,
        "kabkot_id": 215,
        "kecamatan": "Tirtomoyo"
      },
      {
        "id": 3091,
        "kabkot_id": 215,
        "kecamatan": "Wonogiri"
      },
      {
        "id": 3092,
        "kabkot_id": 215,
        "kecamatan": "Wuryantoro"
      },
      {
        "id": 3093,
        "kabkot_id": 216,
        "kecamatan": "Garung"
      },
      {
        "id": 3094,
        "kabkot_id": 216,
        "kecamatan": "Kalibawang"
      },
      {
        "id": 3095,
        "kabkot_id": 216,
        "kecamatan": "Kalikajar"
      },
      {
        "id": 3096,
        "kabkot_id": 216,
        "kecamatan": "Kaliwiro"
      },
      {
        "id": 3097,
        "kabkot_id": 216,
        "kecamatan": "Kejajar"
      },
      {
        "id": 3098,
        "kabkot_id": 216,
        "kecamatan": "Kepil"
      },
      {
        "id": 3099,
        "kabkot_id": 216,
        "kecamatan": "Kertek"
      },
      {
        "id": 3100,
        "kabkot_id": 216,
        "kecamatan": "Leksono"
      },
      {
        "id": 3101,
        "kabkot_id": 216,
        "kecamatan": "Mojotengah"
      },
      {
        "id": 3102,
        "kabkot_id": 216,
        "kecamatan": "Sapuran"
      },
      {
        "id": 3103,
        "kabkot_id": 216,
        "kecamatan": "Selomerto"
      },
      {
        "id": 3104,
        "kabkot_id": 216,
        "kecamatan": "Sukoharjo"
      },
      {
        "id": 3105,
        "kabkot_id": 216,
        "kecamatan": "Wadaslintang"
      },
      {
        "id": 3106,
        "kabkot_id": 216,
        "kecamatan": "Watumalang"
      },
      {
        "id": 3107,
        "kabkot_id": 216,
        "kecamatan": "Wonosobo"
      },
      {
        "id": 3108,
        "kabkot_id": 217,
        "kecamatan": "Magelang Selatan"
      },
      {
        "id": 3109,
        "kabkot_id": 217,
        "kecamatan": "Magelang Tengah"
      },
      {
        "id": 3110,
        "kabkot_id": 217,
        "kecamatan": "Magelang Utara"
      },
      {
        "id": 3111,
        "kabkot_id": 218,
        "kecamatan": "Pekalongan Barat"
      },
      {
        "id": 3112,
        "kabkot_id": 218,
        "kecamatan": "Pekalongan Selatan"
      },
      {
        "id": 3113,
        "kabkot_id": 218,
        "kecamatan": "Pekalongan Timur"
      },
      {
        "id": 3114,
        "kabkot_id": 218,
        "kecamatan": "Pekalongan Utara"
      },
      {
        "id": 3115,
        "kabkot_id": 219,
        "kecamatan": "Argomulyo"
      },
      {
        "id": 3116,
        "kabkot_id": 219,
        "kecamatan": "Sidomukti"
      },
      {
        "id": 3117,
        "kabkot_id": 219,
        "kecamatan": "Sidorejo"
      },
      {
        "id": 3118,
        "kabkot_id": 219,
        "kecamatan": "Tingkir"
      },
      {
        "id": 3119,
        "kabkot_id": 220,
        "kecamatan": "Banyumanik"
      },
      {
        "id": 3120,
        "kabkot_id": 220,
        "kecamatan": "Candisari"
      },
      {
        "id": 3121,
        "kabkot_id": 220,
        "kecamatan": "Gajah Mungkur"
      },
      {
        "id": 3122,
        "kabkot_id": 220,
        "kecamatan": "Gayamsari"
      },
      {
        "id": 3123,
        "kabkot_id": 220,
        "kecamatan": "Genuk"
      },
      {
        "id": 3124,
        "kabkot_id": 220,
        "kecamatan": "Gunungpati"
      },
      {
        "id": 3125,
        "kabkot_id": 220,
        "kecamatan": "Mijen"
      },
      {
        "id": 3126,
        "kabkot_id": 220,
        "kecamatan": "Ngaliyan"
      },
      {
        "id": 3127,
        "kabkot_id": 220,
        "kecamatan": "Pedurungan"
      },
      {
        "id": 3128,
        "kabkot_id": 220,
        "kecamatan": "Semarang Barat"
      },
      {
        "id": 3129,
        "kabkot_id": 220,
        "kecamatan": "Semarang Selatan"
      },
      {
        "id": 3130,
        "kabkot_id": 220,
        "kecamatan": "Semarang Tengah"
      },
      {
        "id": 3131,
        "kabkot_id": 220,
        "kecamatan": "Semarang Timur"
      },
      {
        "id": 3132,
        "kabkot_id": 220,
        "kecamatan": "Semarang Utara"
      },
      {
        "id": 3133,
        "kabkot_id": 220,
        "kecamatan": "Tembalang"
      },
      {
        "id": 3134,
        "kabkot_id": 220,
        "kecamatan": "Tugu"
      },
      {
        "id": 3135,
        "kabkot_id": 221,
        "kecamatan": "Banjarsari"
      },
      {
        "id": 3136,
        "kabkot_id": 221,
        "kecamatan": "Jebres"
      },
      {
        "id": 3137,
        "kabkot_id": 221,
        "kecamatan": "Laweyan"
      },
      {
        "id": 3138,
        "kabkot_id": 221,
        "kecamatan": "Pasar Kliwon"
      },
      {
        "id": 3139,
        "kabkot_id": 221,
        "kecamatan": "Serengan"
      },
      {
        "id": 3140,
        "kabkot_id": 222,
        "kecamatan": "Margadana"
      },
      {
        "id": 3141,
        "kabkot_id": 222,
        "kecamatan": "Tegal Barat"
      },
      {
        "id": 3142,
        "kabkot_id": 222,
        "kecamatan": "Tegal Selatan"
      },
      {
        "id": 3143,
        "kabkot_id": 222,
        "kecamatan": "Tegal Timur"
      },
      {
        "id": 3144,
        "kabkot_id": 223,
        "kecamatan": "Bambang Lipuro"
      },
      {
        "id": 3145,
        "kabkot_id": 223,
        "kecamatan": "Banguntapan"
      },
      {
        "id": 3146,
        "kabkot_id": 223,
        "kecamatan": "Bantul"
      },
      {
        "id": 3147,
        "kabkot_id": 223,
        "kecamatan": "Dlingo"
      },
      {
        "id": 3148,
        "kabkot_id": 223,
        "kecamatan": "Imogiri"
      },
      {
        "id": 3149,
        "kabkot_id": 223,
        "kecamatan": "Jetis"
      },
      {
        "id": 3150,
        "kabkot_id": 223,
        "kecamatan": "Kasihan"
      },
      {
        "id": 3151,
        "kabkot_id": 223,
        "kecamatan": "Kretek"
      },
      {
        "id": 3152,
        "kabkot_id": 223,
        "kecamatan": "Pajangan"
      },
      {
        "id": 3153,
        "kabkot_id": 223,
        "kecamatan": "Pandak"
      },
      {
        "id": 3154,
        "kabkot_id": 223,
        "kecamatan": "Piyungan"
      },
      {
        "id": 3155,
        "kabkot_id": 223,
        "kecamatan": "Pleret"
      },
      {
        "id": 3156,
        "kabkot_id": 223,
        "kecamatan": "Pundong"
      },
      {
        "id": 3157,
        "kabkot_id": 223,
        "kecamatan": "Sanden"
      },
      {
        "id": 3158,
        "kabkot_id": 223,
        "kecamatan": "Sedayu"
      },
      {
        "id": 3159,
        "kabkot_id": 223,
        "kecamatan": "Sewon"
      },
      {
        "id": 3160,
        "kabkot_id": 223,
        "kecamatan": "Srandakan"
      },
      {
        "id": 3161,
        "kabkot_id": 224,
        "kecamatan": "Gedang Sari"
      },
      {
        "id": 3162,
        "kabkot_id": 224,
        "kecamatan": "Girisubo"
      },
      {
        "id": 3163,
        "kabkot_id": 224,
        "kecamatan": "Karangmojo"
      },
      {
        "id": 3164,
        "kabkot_id": 224,
        "kecamatan": "Ngawen"
      },
      {
        "id": 3165,
        "kabkot_id": 224,
        "kecamatan": "Nglipar"
      },
      {
        "id": 3166,
        "kabkot_id": 224,
        "kecamatan": "Paliyan"
      },
      {
        "id": 3167,
        "kabkot_id": 224,
        "kecamatan": "Panggang"
      },
      {
        "id": 3168,
        "kabkot_id": 224,
        "kecamatan": "Patuk"
      },
      {
        "id": 3169,
        "kabkot_id": 224,
        "kecamatan": "Playen"
      },
      {
        "id": 3170,
        "kabkot_id": 224,
        "kecamatan": "Ponjong"
      },
      {
        "id": 3171,
        "kabkot_id": 224,
        "kecamatan": "Purwosari"
      },
      {
        "id": 3172,
        "kabkot_id": 224,
        "kecamatan": "Rongkop"
      },
      {
        "id": 3173,
        "kabkot_id": 224,
        "kecamatan": "Sapto Sari"
      },
      {
        "id": 3174,
        "kabkot_id": 224,
        "kecamatan": "Semanu"
      },
      {
        "id": 3175,
        "kabkot_id": 224,
        "kecamatan": "Semin"
      },
      {
        "id": 3176,
        "kabkot_id": 224,
        "kecamatan": "Tanjungsari"
      },
      {
        "id": 3177,
        "kabkot_id": 224,
        "kecamatan": "Tepus"
      },
      {
        "id": 3178,
        "kabkot_id": 224,
        "kecamatan": "Wonosari"
      },
      {
        "id": 3179,
        "kabkot_id": 225,
        "kecamatan": "Galur"
      },
      {
        "id": 3180,
        "kabkot_id": 225,
        "kecamatan": "Girimulyo"
      },
      {
        "id": 3181,
        "kabkot_id": 225,
        "kecamatan": "Kalibawang"
      },
      {
        "id": 3182,
        "kabkot_id": 225,
        "kecamatan": "Kokap"
      },
      {
        "id": 3183,
        "kabkot_id": 225,
        "kecamatan": "Lendah"
      },
      {
        "id": 3184,
        "kabkot_id": 225,
        "kecamatan": "Nanggulan"
      },
      {
        "id": 3185,
        "kabkot_id": 225,
        "kecamatan": "Panjatan"
      },
      {
        "id": 3186,
        "kabkot_id": 225,
        "kecamatan": "Pengasih"
      },
      {
        "id": 3187,
        "kabkot_id": 225,
        "kecamatan": "Samigaluh"
      },
      {
        "id": 3188,
        "kabkot_id": 225,
        "kecamatan": "Sentolo"
      },
      {
        "id": 3189,
        "kabkot_id": 225,
        "kecamatan": "Temon"
      },
      {
        "id": 3190,
        "kabkot_id": 225,
        "kecamatan": "Wates"
      },
      {
        "id": 3191,
        "kabkot_id": 226,
        "kecamatan": "Berbah"
      },
      {
        "id": 3192,
        "kabkot_id": 226,
        "kecamatan": "Cangkringan"
      },
      {
        "id": 3193,
        "kabkot_id": 226,
        "kecamatan": "Depok"
      },
      {
        "id": 3194,
        "kabkot_id": 226,
        "kecamatan": "Gamping"
      },
      {
        "id": 3195,
        "kabkot_id": 226,
        "kecamatan": "Godean"
      },
      {
        "id": 3196,
        "kabkot_id": 226,
        "kecamatan": "Kalasan"
      },
      {
        "id": 3197,
        "kabkot_id": 226,
        "kecamatan": "Minggir"
      },
      {
        "id": 3198,
        "kabkot_id": 226,
        "kecamatan": "Mlati"
      },
      {
        "id": 3199,
        "kabkot_id": 226,
        "kecamatan": "Moyudan"
      },
      {
        "id": 3200,
        "kabkot_id": 226,
        "kecamatan": "Ngaglik"
      },
      {
        "id": 3201,
        "kabkot_id": 226,
        "kecamatan": "Ngemplak"
      },
      {
        "id": 3202,
        "kabkot_id": 226,
        "kecamatan": "Pakem"
      },
      {
        "id": 3203,
        "kabkot_id": 226,
        "kecamatan": "Prambanan"
      },
      {
        "id": 3204,
        "kabkot_id": 226,
        "kecamatan": "Seyegan"
      },
      {
        "id": 3205,
        "kabkot_id": 226,
        "kecamatan": "Sleman"
      },
      {
        "id": 3206,
        "kabkot_id": 226,
        "kecamatan": "Tempel"
      },
      {
        "id": 3207,
        "kabkot_id": 226,
        "kecamatan": "Turi"
      },
      {
        "id": 3208,
        "kabkot_id": 227,
        "kecamatan": "Danurejan"
      },
      {
        "id": 3209,
        "kabkot_id": 227,
        "kecamatan": "Gedong Tengen"
      },
      {
        "id": 3210,
        "kabkot_id": 227,
        "kecamatan": "Gondokusuman"
      },
      {
        "id": 3211,
        "kabkot_id": 227,
        "kecamatan": "Gondomanan"
      },
      {
        "id": 3212,
        "kabkot_id": 227,
        "kecamatan": "Jetis"
      },
      {
        "id": 3213,
        "kabkot_id": 227,
        "kecamatan": "Kotagede"
      },
      {
        "id": 3214,
        "kabkot_id": 227,
        "kecamatan": "Kraton"
      },
      {
        "id": 3215,
        "kabkot_id": 227,
        "kecamatan": "Mantrijeron"
      },
      {
        "id": 3216,
        "kabkot_id": 227,
        "kecamatan": "Mergangsan"
      },
      {
        "id": 3217,
        "kabkot_id": 227,
        "kecamatan": "Ngampilan"
      },
      {
        "id": 3218,
        "kabkot_id": 227,
        "kecamatan": "Pakualaman"
      },
      {
        "id": 3219,
        "kabkot_id": 227,
        "kecamatan": "Tegalrejo"
      },
      {
        "id": 3220,
        "kabkot_id": 227,
        "kecamatan": "Umbulharjo"
      },
      {
        "id": 3221,
        "kabkot_id": 227,
        "kecamatan": "Wirobrajan"
      },
      {
        "id": 3222,
        "kabkot_id": 228,
        "kecamatan": "Arosbaya"
      },
      {
        "id": 3223,
        "kabkot_id": 228,
        "kecamatan": "Bangkalan"
      },
      {
        "id": 3224,
        "kabkot_id": 228,
        "kecamatan": "Blega"
      },
      {
        "id": 3225,
        "kabkot_id": 228,
        "kecamatan": "Burneh"
      },
      {
        "id": 3226,
        "kabkot_id": 228,
        "kecamatan": "Galis"
      },
      {
        "id": 3227,
        "kabkot_id": 228,
        "kecamatan": "Geger"
      },
      {
        "id": 3228,
        "kabkot_id": 228,
        "kecamatan": "Kamal"
      },
      {
        "id": 3229,
        "kabkot_id": 228,
        "kecamatan": "Klampis"
      },
      {
        "id": 3230,
        "kabkot_id": 228,
        "kecamatan": "Kokop"
      },
      {
        "id": 3231,
        "kabkot_id": 228,
        "kecamatan": "Konang"
      },
      {
        "id": 3232,
        "kabkot_id": 228,
        "kecamatan": "Kwanyar"
      },
      {
        "id": 3233,
        "kabkot_id": 228,
        "kecamatan": "Labang"
      },
      {
        "id": 3234,
        "kabkot_id": 228,
        "kecamatan": "Modung"
      },
      {
        "id": 3235,
        "kabkot_id": 228,
        "kecamatan": "Sepulu"
      },
      {
        "id": 3236,
        "kabkot_id": 228,
        "kecamatan": "Socah"
      },
      {
        "id": 3237,
        "kabkot_id": 228,
        "kecamatan": "Tanah Merah"
      },
      {
        "id": 3238,
        "kabkot_id": 228,
        "kecamatan": "Tanjungbumi"
      },
      {
        "id": 3239,
        "kabkot_id": 228,
        "kecamatan": "Tragah"
      },
      {
        "id": 3240,
        "kabkot_id": 229,
        "kecamatan": "Bangorejo"
      },
      {
        "id": 3241,
        "kabkot_id": 229,
        "kecamatan": "Banyuwangi"
      },
      {
        "id": 3242,
        "kabkot_id": 229,
        "kecamatan": "Cluring"
      },
      {
        "id": 3243,
        "kabkot_id": 229,
        "kecamatan": "Gambiran"
      },
      {
        "id": 3244,
        "kabkot_id": 229,
        "kecamatan": "Genteng"
      },
      {
        "id": 3245,
        "kabkot_id": 229,
        "kecamatan": "Giri"
      },
      {
        "id": 3246,
        "kabkot_id": 229,
        "kecamatan": "Glagah"
      },
      {
        "id": 3247,
        "kabkot_id": 229,
        "kecamatan": "Glenmore"
      },
      {
        "id": 3248,
        "kabkot_id": 229,
        "kecamatan": "Kabat"
      },
      {
        "id": 3249,
        "kabkot_id": 229,
        "kecamatan": "Kalibaru"
      },
      {
        "id": 3250,
        "kabkot_id": 229,
        "kecamatan": "Kalipuro"
      },
      {
        "id": 3251,
        "kabkot_id": 229,
        "kecamatan": "Licin"
      },
      {
        "id": 3252,
        "kabkot_id": 229,
        "kecamatan": "Muncar"
      },
      {
        "id": 3253,
        "kabkot_id": 229,
        "kecamatan": "Pesanggaran"
      },
      {
        "id": 3254,
        "kabkot_id": 229,
        "kecamatan": "Purwoharjo"
      },
      {
        "id": 3255,
        "kabkot_id": 229,
        "kecamatan": "Rogojampi"
      },
      {
        "id": 3256,
        "kabkot_id": 229,
        "kecamatan": "Sempu"
      },
      {
        "id": 3257,
        "kabkot_id": 229,
        "kecamatan": "Siliragung"
      },
      {
        "id": 3258,
        "kabkot_id": 229,
        "kecamatan": "Singojuruh"
      },
      {
        "id": 3259,
        "kabkot_id": 229,
        "kecamatan": "Songgon"
      },
      {
        "id": 3260,
        "kabkot_id": 229,
        "kecamatan": "Srono"
      },
      {
        "id": 3261,
        "kabkot_id": 229,
        "kecamatan": "Tegaldlimo"
      },
      {
        "id": 3262,
        "kabkot_id": 229,
        "kecamatan": "Tegalsari"
      },
      {
        "id": 3263,
        "kabkot_id": 229,
        "kecamatan": "Wongsorejo"
      },
      {
        "id": 3264,
        "kabkot_id": 230,
        "kecamatan": "Bakung"
      },
      {
        "id": 3265,
        "kabkot_id": 230,
        "kecamatan": "Binangun"
      },
      {
        "id": 3266,
        "kabkot_id": 230,
        "kecamatan": "Doko"
      },
      {
        "id": 3267,
        "kabkot_id": 230,
        "kecamatan": "Gandusari"
      },
      {
        "id": 3268,
        "kabkot_id": 230,
        "kecamatan": "Garum"
      },
      {
        "id": 3269,
        "kabkot_id": 230,
        "kecamatan": "Kademangan"
      },
      {
        "id": 3270,
        "kabkot_id": 230,
        "kecamatan": "Kanigoro"
      },
      {
        "id": 3271,
        "kabkot_id": 230,
        "kecamatan": "Kesamben"
      },
      {
        "id": 3272,
        "kabkot_id": 230,
        "kecamatan": "Nglegok"
      },
      {
        "id": 3273,
        "kabkot_id": 230,
        "kecamatan": "Panggungrejo"
      },
      {
        "id": 3274,
        "kabkot_id": 230,
        "kecamatan": "Ponggok"
      },
      {
        "id": 3275,
        "kabkot_id": 230,
        "kecamatan": "Sanan Kulon"
      },
      {
        "id": 3276,
        "kabkot_id": 230,
        "kecamatan": "Selopuro"
      },
      {
        "id": 3277,
        "kabkot_id": 230,
        "kecamatan": "Selorejo"
      },
      {
        "id": 3278,
        "kabkot_id": 230,
        "kecamatan": "Srengat"
      },
      {
        "id": 3279,
        "kabkot_id": 230,
        "kecamatan": "Sutojayan"
      },
      {
        "id": 3280,
        "kabkot_id": 230,
        "kecamatan": "Talun"
      },
      {
        "id": 3281,
        "kabkot_id": 230,
        "kecamatan": "Udanawu"
      },
      {
        "id": 3282,
        "kabkot_id": 230,
        "kecamatan": "Wates"
      },
      {
        "id": 3283,
        "kabkot_id": 230,
        "kecamatan": "Wlingi"
      },
      {
        "id": 3284,
        "kabkot_id": 230,
        "kecamatan": "Wonodadi"
      },
      {
        "id": 3285,
        "kabkot_id": 230,
        "kecamatan": "Wonotirto"
      },
      {
        "id": 3286,
        "kabkot_id": 231,
        "kecamatan": "Balen"
      },
      {
        "id": 3287,
        "kabkot_id": 231,
        "kecamatan": "Baureno"
      },
      {
        "id": 3288,
        "kabkot_id": 231,
        "kecamatan": "Bojonegoro"
      },
      {
        "id": 3289,
        "kabkot_id": 231,
        "kecamatan": "Bubulan"
      },
      {
        "id": 3290,
        "kabkot_id": 231,
        "kecamatan": "Dander"
      },
      {
        "id": 3291,
        "kabkot_id": 231,
        "kecamatan": "Gayam"
      },
      {
        "id": 3292,
        "kabkot_id": 231,
        "kecamatan": "Gondang"
      },
      {
        "id": 3293,
        "kabkot_id": 231,
        "kecamatan": "Kalitidu"
      },
      {
        "id": 3294,
        "kabkot_id": 231,
        "kecamatan": "Kanor"
      },
      {
        "id": 3295,
        "kabkot_id": 231,
        "kecamatan": "Kapas"
      },
      {
        "id": 3296,
        "kabkot_id": 231,
        "kecamatan": "Kasiman"
      },
      {
        "id": 3297,
        "kabkot_id": 231,
        "kecamatan": "Kedewan"
      },
      {
        "id": 3298,
        "kabkot_id": 231,
        "kecamatan": "Kedungadem"
      },
      {
        "id": 3299,
        "kabkot_id": 231,
        "kecamatan": "Kepoh Baru"
      },
      {
        "id": 3300,
        "kabkot_id": 231,
        "kecamatan": "Malo"
      },
      {
        "id": 3301,
        "kabkot_id": 231,
        "kecamatan": "Margomulyo"
      },
      {
        "id": 3302,
        "kabkot_id": 231,
        "kecamatan": "Ngambon"
      },
      {
        "id": 3303,
        "kabkot_id": 231,
        "kecamatan": "Ngasem"
      },
      {
        "id": 3304,
        "kabkot_id": 231,
        "kecamatan": "Ngraho"
      },
      {
        "id": 3305,
        "kabkot_id": 231,
        "kecamatan": "Padangan"
      },
      {
        "id": 3306,
        "kabkot_id": 231,
        "kecamatan": "Purwosari"
      },
      {
        "id": 3307,
        "kabkot_id": 231,
        "kecamatan": "Sekar"
      },
      {
        "id": 3308,
        "kabkot_id": 231,
        "kecamatan": "Sugihwaras"
      },
      {
        "id": 3309,
        "kabkot_id": 231,
        "kecamatan": "Sukosewu"
      },
      {
        "id": 3310,
        "kabkot_id": 231,
        "kecamatan": "Sumberrejo"
      },
      {
        "id": 3311,
        "kabkot_id": 231,
        "kecamatan": "Tambakrejo"
      },
      {
        "id": 3312,
        "kabkot_id": 231,
        "kecamatan": "Temayang"
      },
      {
        "id": 3313,
        "kabkot_id": 231,
        "kecamatan": "Trucuk"
      },
      {
        "id": 3314,
        "kabkot_id": 232,
        "kecamatan": "Binakal"
      },
      {
        "id": 3315,
        "kabkot_id": 232,
        "kecamatan": "Bondowoso"
      },
      {
        "id": 3316,
        "kabkot_id": 232,
        "kecamatan": "Botolinggo"
      },
      {
        "id": 3317,
        "kabkot_id": 232,
        "kecamatan": "Cermee"
      },
      {
        "id": 3318,
        "kabkot_id": 232,
        "kecamatan": "Curahdami"
      },
      {
        "id": 3319,
        "kabkot_id": 232,
        "kecamatan": "Grujugan"
      },
      {
        "id": 3320,
        "kabkot_id": 232,
        "kecamatan": "Jambe Sari Darus Sholah"
      },
      {
        "id": 3321,
        "kabkot_id": 232,
        "kecamatan": "Klabang"
      },
      {
        "id": 3322,
        "kabkot_id": 232,
        "kecamatan": "Maesan"
      },
      {
        "id": 3323,
        "kabkot_id": 232,
        "kecamatan": "Pakem"
      },
      {
        "id": 3324,
        "kabkot_id": 232,
        "kecamatan": "Prajekan"
      },
      {
        "id": 3325,
        "kabkot_id": 232,
        "kecamatan": "Pujer"
      },
      {
        "id": 3326,
        "kabkot_id": 232,
        "kecamatan": "Sempol"
      },
      {
        "id": 3327,
        "kabkot_id": 232,
        "kecamatan": "Sukosari"
      },
      {
        "id": 3328,
        "kabkot_id": 232,
        "kecamatan": "Sumber Wringin"
      },
      {
        "id": 3329,
        "kabkot_id": 232,
        "kecamatan": "Taman Krocok"
      },
      {
        "id": 3330,
        "kabkot_id": 232,
        "kecamatan": "Tamanan"
      },
      {
        "id": 3331,
        "kabkot_id": 232,
        "kecamatan": "Tapen"
      },
      {
        "id": 3332,
        "kabkot_id": 232,
        "kecamatan": "Tegalampel"
      },
      {
        "id": 3333,
        "kabkot_id": 232,
        "kecamatan": "Tenggarang"
      },
      {
        "id": 3334,
        "kabkot_id": 232,
        "kecamatan": "Tlogosari"
      },
      {
        "id": 3335,
        "kabkot_id": 232,
        "kecamatan": "Wonosari"
      },
      {
        "id": 3336,
        "kabkot_id": 232,
        "kecamatan": "Wringin"
      },
      {
        "id": 3337,
        "kabkot_id": 233,
        "kecamatan": "Balong Panggang"
      },
      {
        "id": 3338,
        "kabkot_id": 233,
        "kecamatan": "Benjeng"
      },
      {
        "id": 3339,
        "kabkot_id": 233,
        "kecamatan": "Bungah"
      },
      {
        "id": 3340,
        "kabkot_id": 233,
        "kecamatan": "Cerme"
      },
      {
        "id": 3341,
        "kabkot_id": 233,
        "kecamatan": "Driyorejo"
      },
      {
        "id": 3342,
        "kabkot_id": 233,
        "kecamatan": "Duduk Sampeyan"
      },
      {
        "id": 3343,
        "kabkot_id": 233,
        "kecamatan": "Dukun"
      },
      {
        "id": 3344,
        "kabkot_id": 233,
        "kecamatan": "Gresik"
      },
      {
        "id": 3345,
        "kabkot_id": 233,
        "kecamatan": "Kebomas"
      },
      {
        "id": 3346,
        "kabkot_id": 233,
        "kecamatan": "Kedamean"
      },
      {
        "id": 3347,
        "kabkot_id": 233,
        "kecamatan": "Manyar"
      },
      {
        "id": 3348,
        "kabkot_id": 233,
        "kecamatan": "Menganti"
      },
      {
        "id": 3349,
        "kabkot_id": 233,
        "kecamatan": "Panceng"
      },
      {
        "id": 3350,
        "kabkot_id": 233,
        "kecamatan": "Sangkapura"
      },
      {
        "id": 3351,
        "kabkot_id": 233,
        "kecamatan": "Sidayu"
      },
      {
        "id": 3352,
        "kabkot_id": 233,
        "kecamatan": "Tambak"
      },
      {
        "id": 3353,
        "kabkot_id": 233,
        "kecamatan": "Ujung Pangkah"
      },
      {
        "id": 3354,
        "kabkot_id": 233,
        "kecamatan": "Wringin Anom"
      },
      {
        "id": 3355,
        "kabkot_id": 234,
        "kecamatan": "Ajung"
      },
      {
        "id": 3356,
        "kabkot_id": 234,
        "kecamatan": "Ambulu"
      },
      {
        "id": 3357,
        "kabkot_id": 234,
        "kecamatan": "Arjasa"
      },
      {
        "id": 3358,
        "kabkot_id": 234,
        "kecamatan": "Balung"
      },
      {
        "id": 3359,
        "kabkot_id": 234,
        "kecamatan": "Bangsalsari"
      },
      {
        "id": 3360,
        "kabkot_id": 234,
        "kecamatan": "Gumuk Mas"
      },
      {
        "id": 3361,
        "kabkot_id": 234,
        "kecamatan": "Jelbuk"
      },
      {
        "id": 3362,
        "kabkot_id": 234,
        "kecamatan": "Jenggawah"
      },
      {
        "id": 3363,
        "kabkot_id": 234,
        "kecamatan": "Jombang"
      },
      {
        "id": 3364,
        "kabkot_id": 234,
        "kecamatan": "Kalisat"
      },
      {
        "id": 3365,
        "kabkot_id": 234,
        "kecamatan": "Kaliwates"
      },
      {
        "id": 3366,
        "kabkot_id": 234,
        "kecamatan": "Kencong"
      },
      {
        "id": 3367,
        "kabkot_id": 234,
        "kecamatan": "Ledokombo"
      },
      {
        "id": 3368,
        "kabkot_id": 234,
        "kecamatan": "Mayang"
      },
      {
        "id": 3369,
        "kabkot_id": 234,
        "kecamatan": "Mumbulsari"
      },
      {
        "id": 3370,
        "kabkot_id": 234,
        "kecamatan": "Pakusari"
      },
      {
        "id": 3371,
        "kabkot_id": 234,
        "kecamatan": "Panti"
      },
      {
        "id": 3372,
        "kabkot_id": 234,
        "kecamatan": "Patrang"
      },
      {
        "id": 3373,
        "kabkot_id": 234,
        "kecamatan": "Puger"
      },
      {
        "id": 3374,
        "kabkot_id": 234,
        "kecamatan": "Rambipuji"
      },
      {
        "id": 3375,
        "kabkot_id": 234,
        "kecamatan": "Semboro"
      },
      {
        "id": 3376,
        "kabkot_id": 234,
        "kecamatan": "Silo"
      },
      {
        "id": 3377,
        "kabkot_id": 234,
        "kecamatan": "Sukorambi"
      },
      {
        "id": 3378,
        "kabkot_id": 234,
        "kecamatan": "Sukowono"
      },
      {
        "id": 3379,
        "kabkot_id": 234,
        "kecamatan": "Sumber Baru"
      },
      {
        "id": 3380,
        "kabkot_id": 234,
        "kecamatan": "Sumber Jambe"
      },
      {
        "id": 3381,
        "kabkot_id": 234,
        "kecamatan": "Sumber Sari"
      },
      {
        "id": 3382,
        "kabkot_id": 234,
        "kecamatan": "Tanggul"
      },
      {
        "id": 3383,
        "kabkot_id": 234,
        "kecamatan": "Tempurejo"
      },
      {
        "id": 3384,
        "kabkot_id": 234,
        "kecamatan": "Umbulsari"
      },
      {
        "id": 3385,
        "kabkot_id": 234,
        "kecamatan": "Wuluhan"
      },
      {
        "id": 3386,
        "kabkot_id": 235,
        "kecamatan": "Bandar Kedung Mulyo"
      },
      {
        "id": 3387,
        "kabkot_id": 235,
        "kecamatan": "Bareng"
      },
      {
        "id": 3388,
        "kabkot_id": 235,
        "kecamatan": "Diwek"
      },
      {
        "id": 3389,
        "kabkot_id": 235,
        "kecamatan": "Gudo"
      },
      {
        "id": 3390,
        "kabkot_id": 235,
        "kecamatan": "Jogoroto"
      },
      {
        "id": 3391,
        "kabkot_id": 235,
        "kecamatan": "Jombang"
      },
      {
        "id": 3392,
        "kabkot_id": 235,
        "kecamatan": "Kabuh"
      },
      {
        "id": 3393,
        "kabkot_id": 235,
        "kecamatan": "Kesamben"
      },
      {
        "id": 3394,
        "kabkot_id": 235,
        "kecamatan": "Kudu"
      },
      {
        "id": 3395,
        "kabkot_id": 235,
        "kecamatan": "Megaluh"
      },
      {
        "id": 3396,
        "kabkot_id": 235,
        "kecamatan": "Mojoagung"
      },
      {
        "id": 3397,
        "kabkot_id": 235,
        "kecamatan": "Mojowarno"
      },
      {
        "id": 3398,
        "kabkot_id": 235,
        "kecamatan": "Ngoro"
      },
      {
        "id": 3399,
        "kabkot_id": 235,
        "kecamatan": "Ngusikan"
      },
      {
        "id": 3400,
        "kabkot_id": 235,
        "kecamatan": "Perak"
      },
      {
        "id": 3401,
        "kabkot_id": 235,
        "kecamatan": "Peterongan"
      },
      {
        "id": 3402,
        "kabkot_id": 235,
        "kecamatan": "Plandaan"
      },
      {
        "id": 3403,
        "kabkot_id": 235,
        "kecamatan": "Ploso"
      },
      {
        "id": 3404,
        "kabkot_id": 235,
        "kecamatan": "Sumobito"
      },
      {
        "id": 3405,
        "kabkot_id": 235,
        "kecamatan": "Tembelang"
      },
      {
        "id": 3406,
        "kabkot_id": 235,
        "kecamatan": "Wonosalam"
      },
      {
        "id": 3407,
        "kabkot_id": 236,
        "kecamatan": "Badas"
      },
      {
        "id": 3408,
        "kabkot_id": 236,
        "kecamatan": "Banyakan"
      },
      {
        "id": 3409,
        "kabkot_id": 236,
        "kecamatan": "Gampengrejo"
      },
      {
        "id": 3410,
        "kabkot_id": 236,
        "kecamatan": "Grogol"
      },
      {
        "id": 3411,
        "kabkot_id": 236,
        "kecamatan": "Gurah"
      },
      {
        "id": 3412,
        "kabkot_id": 236,
        "kecamatan": "Kandangan"
      },
      {
        "id": 3413,
        "kabkot_id": 236,
        "kecamatan": "Kandat"
      },
      {
        "id": 3414,
        "kabkot_id": 236,
        "kecamatan": "Kayen Kidul"
      },
      {
        "id": 3415,
        "kabkot_id": 236,
        "kecamatan": "Kepung"
      },
      {
        "id": 3416,
        "kabkot_id": 236,
        "kecamatan": "Kras"
      },
      {
        "id": 3417,
        "kabkot_id": 236,
        "kecamatan": "Kunjang"
      },
      {
        "id": 3418,
        "kabkot_id": 236,
        "kecamatan": "Mojo"
      },
      {
        "id": 3419,
        "kabkot_id": 236,
        "kecamatan": "Ngadiluwih"
      },
      {
        "id": 3420,
        "kabkot_id": 236,
        "kecamatan": "Ngancar"
      },
      {
        "id": 3421,
        "kabkot_id": 236,
        "kecamatan": "Ngasem"
      },
      {
        "id": 3422,
        "kabkot_id": 236,
        "kecamatan": "Pagu"
      },
      {
        "id": 3423,
        "kabkot_id": 236,
        "kecamatan": "Papar"
      },
      {
        "id": 3424,
        "kabkot_id": 236,
        "kecamatan": "Pare"
      },
      {
        "id": 3425,
        "kabkot_id": 236,
        "kecamatan": "Plemahan"
      },
      {
        "id": 3426,
        "kabkot_id": 236,
        "kecamatan": "Plosoklaten"
      },
      {
        "id": 3427,
        "kabkot_id": 236,
        "kecamatan": "Puncu"
      },
      {
        "id": 3428,
        "kabkot_id": 236,
        "kecamatan": "Purwoasri"
      },
      {
        "id": 3429,
        "kabkot_id": 236,
        "kecamatan": "Ringinrejo"
      },
      {
        "id": 3430,
        "kabkot_id": 236,
        "kecamatan": "Semen"
      },
      {
        "id": 3431,
        "kabkot_id": 236,
        "kecamatan": "Tarokan"
      },
      {
        "id": 3432,
        "kabkot_id": 236,
        "kecamatan": "Wates"
      },
      {
        "id": 3433,
        "kabkot_id": 237,
        "kecamatan": "Babat"
      },
      {
        "id": 3434,
        "kabkot_id": 237,
        "kecamatan": "Bluluk"
      },
      {
        "id": 3435,
        "kabkot_id": 237,
        "kecamatan": "Brondong"
      },
      {
        "id": 3436,
        "kabkot_id": 237,
        "kecamatan": "Deket"
      },
      {
        "id": 3437,
        "kabkot_id": 237,
        "kecamatan": "Glagah"
      },
      {
        "id": 3438,
        "kabkot_id": 237,
        "kecamatan": "Kalitengah"
      },
      {
        "id": 3439,
        "kabkot_id": 237,
        "kecamatan": "Karang Geneng"
      },
      {
        "id": 3440,
        "kabkot_id": 237,
        "kecamatan": "Karangbinangun"
      },
      {
        "id": 3441,
        "kabkot_id": 237,
        "kecamatan": "Kedungpring"
      },
      {
        "id": 3442,
        "kabkot_id": 237,
        "kecamatan": "Kembangbahu"
      },
      {
        "id": 3443,
        "kabkot_id": 237,
        "kecamatan": "Lamongan"
      },
      {
        "id": 3444,
        "kabkot_id": 237,
        "kecamatan": "Laren"
      },
      {
        "id": 3445,
        "kabkot_id": 237,
        "kecamatan": "Maduran"
      },
      {
        "id": 3446,
        "kabkot_id": 237,
        "kecamatan": "Mantup"
      },
      {
        "id": 3447,
        "kabkot_id": 237,
        "kecamatan": "Modo"
      },
      {
        "id": 3448,
        "kabkot_id": 237,
        "kecamatan": "Ngimbang"
      },
      {
        "id": 3449,
        "kabkot_id": 237,
        "kecamatan": "Paciran"
      },
      {
        "id": 3450,
        "kabkot_id": 237,
        "kecamatan": "Pucuk"
      },
      {
        "id": 3451,
        "kabkot_id": 237,
        "kecamatan": "Sambeng"
      },
      {
        "id": 3452,
        "kabkot_id": 237,
        "kecamatan": "Sarirejo"
      },
      {
        "id": 3453,
        "kabkot_id": 237,
        "kecamatan": "Sekaran"
      },
      {
        "id": 3454,
        "kabkot_id": 237,
        "kecamatan": "Solokuro"
      },
      {
        "id": 3455,
        "kabkot_id": 237,
        "kecamatan": "Sugio"
      },
      {
        "id": 3456,
        "kabkot_id": 237,
        "kecamatan": "Sukodadi"
      },
      {
        "id": 3457,
        "kabkot_id": 237,
        "kecamatan": "Sukorame"
      },
      {
        "id": 3458,
        "kabkot_id": 237,
        "kecamatan": "Tikung"
      },
      {
        "id": 3459,
        "kabkot_id": 237,
        "kecamatan": "Turi"
      },
      {
        "id": 3460,
        "kabkot_id": 238,
        "kecamatan": "Candipuro"
      },
      {
        "id": 3461,
        "kabkot_id": 238,
        "kecamatan": "Gucialit"
      },
      {
        "id": 3462,
        "kabkot_id": 238,
        "kecamatan": "Jatiroto"
      },
      {
        "id": 3463,
        "kabkot_id": 238,
        "kecamatan": "Kedungjajang"
      },
      {
        "id": 3464,
        "kabkot_id": 238,
        "kecamatan": "Klakah"
      },
      {
        "id": 3465,
        "kabkot_id": 238,
        "kecamatan": "Kunir"
      },
      {
        "id": 3466,
        "kabkot_id": 238,
        "kecamatan": "Lumajang"
      },
      {
        "id": 3467,
        "kabkot_id": 238,
        "kecamatan": "Padang"
      },
      {
        "id": 3468,
        "kabkot_id": 238,
        "kecamatan": "Pasirian"
      },
      {
        "id": 3469,
        "kabkot_id": 238,
        "kecamatan": "Pasrujambe/Pasujambe"
      },
      {
        "id": 3470,
        "kabkot_id": 238,
        "kecamatan": "Pronojiwo"
      },
      {
        "id": 3471,
        "kabkot_id": 238,
        "kecamatan": "Randuagung"
      },
      {
        "id": 3472,
        "kabkot_id": 238,
        "kecamatan": "Ranuyoso"
      },
      {
        "id": 3473,
        "kabkot_id": 238,
        "kecamatan": "Rowokangkung"
      },
      {
        "id": 3474,
        "kabkot_id": 238,
        "kecamatan": "Senduro"
      },
      {
        "id": 3475,
        "kabkot_id": 238,
        "kecamatan": "Sukodono"
      },
      {
        "id": 3476,
        "kabkot_id": 238,
        "kecamatan": "Sumbersuko"
      },
      {
        "id": 3477,
        "kabkot_id": 238,
        "kecamatan": "Tekung"
      },
      {
        "id": 3478,
        "kabkot_id": 238,
        "kecamatan": "Tempeh"
      },
      {
        "id": 3479,
        "kabkot_id": 238,
        "kecamatan": "Tempursari"
      },
      {
        "id": 3480,
        "kabkot_id": 238,
        "kecamatan": "Yosowilangun"
      },
      {
        "id": 3481,
        "kabkot_id": 239,
        "kecamatan": "Balerejo"
      },
      {
        "id": 3482,
        "kabkot_id": 239,
        "kecamatan": "Dagangan"
      },
      {
        "id": 3483,
        "kabkot_id": 239,
        "kecamatan": "Dolopo"
      },
      {
        "id": 3484,
        "kabkot_id": 239,
        "kecamatan": "Geger"
      },
      {
        "id": 3485,
        "kabkot_id": 239,
        "kecamatan": "Gemarang"
      },
      {
        "id": 3486,
        "kabkot_id": 239,
        "kecamatan": "Jiwan"
      },
      {
        "id": 3487,
        "kabkot_id": 239,
        "kecamatan": "Kare"
      },
      {
        "id": 3488,
        "kabkot_id": 239,
        "kecamatan": "Kebonsari"
      },
      {
        "id": 3489,
        "kabkot_id": 239,
        "kecamatan": "Madiun"
      },
      {
        "id": 3490,
        "kabkot_id": 239,
        "kecamatan": "Mejayan"
      },
      {
        "id": 3491,
        "kabkot_id": 239,
        "kecamatan": "Pilangkenceng"
      },
      {
        "id": 3492,
        "kabkot_id": 239,
        "kecamatan": "Saradan"
      },
      {
        "id": 3493,
        "kabkot_id": 239,
        "kecamatan": "Sawahan"
      },
      {
        "id": 3494,
        "kabkot_id": 239,
        "kecamatan": "Wonoasri"
      },
      {
        "id": 3495,
        "kabkot_id": 239,
        "kecamatan": "Wungu"
      },
      {
        "id": 3496,
        "kabkot_id": 240,
        "kecamatan": "Barat"
      },
      {
        "id": 3497,
        "kabkot_id": 240,
        "kecamatan": "Bendo"
      },
      {
        "id": 3498,
        "kabkot_id": 240,
        "kecamatan": "Karangrejo"
      },
      {
        "id": 3499,
        "kabkot_id": 240,
        "kecamatan": "Karas"
      },
      {
        "id": 3500,
        "kabkot_id": 240,
        "kecamatan": "Kartoharjo (Kertoharjo)"
      },
      {
        "id": 3501,
        "kabkot_id": 240,
        "kecamatan": "Kawedanan"
      },
      {
        "id": 3502,
        "kabkot_id": 240,
        "kecamatan": "Lembeyan"
      },
      {
        "id": 3503,
        "kabkot_id": 240,
        "kecamatan": "Magetan"
      },
      {
        "id": 3504,
        "kabkot_id": 240,
        "kecamatan": "Maospati"
      },
      {
        "id": 3505,
        "kabkot_id": 240,
        "kecamatan": "Ngariboyo"
      },
      {
        "id": 3506,
        "kabkot_id": 240,
        "kecamatan": "Nguntoronadi"
      },
      {
        "id": 3507,
        "kabkot_id": 240,
        "kecamatan": "Panekan"
      },
      {
        "id": 3508,
        "kabkot_id": 240,
        "kecamatan": "Parang"
      },
      {
        "id": 3509,
        "kabkot_id": 240,
        "kecamatan": "Plaosan"
      },
      {
        "id": 3510,
        "kabkot_id": 240,
        "kecamatan": "Poncol"
      },
      {
        "id": 3511,
        "kabkot_id": 240,
        "kecamatan": "Sidorejo"
      },
      {
        "id": 3512,
        "kabkot_id": 240,
        "kecamatan": "Sukomoro"
      },
      {
        "id": 3513,
        "kabkot_id": 240,
        "kecamatan": "Takeran"
      },
      {
        "id": 3514,
        "kabkot_id": 241,
        "kecamatan": "Ampelgading"
      },
      {
        "id": 3515,
        "kabkot_id": 241,
        "kecamatan": "Bantur"
      },
      {
        "id": 3516,
        "kabkot_id": 241,
        "kecamatan": "Bululawang"
      },
      {
        "id": 3517,
        "kabkot_id": 241,
        "kecamatan": "Dampit"
      },
      {
        "id": 3518,
        "kabkot_id": 241,
        "kecamatan": "Dau"
      },
      {
        "id": 3519,
        "kabkot_id": 241,
        "kecamatan": "Donomulyo"
      },
      {
        "id": 3520,
        "kabkot_id": 241,
        "kecamatan": "Gedangan"
      },
      {
        "id": 3521,
        "kabkot_id": 241,
        "kecamatan": "Gondanglegi"
      },
      {
        "id": 3522,
        "kabkot_id": 241,
        "kecamatan": "Jabung"
      },
      {
        "id": 3523,
        "kabkot_id": 241,
        "kecamatan": "Kalipare"
      },
      {
        "id": 3524,
        "kabkot_id": 241,
        "kecamatan": "Karangploso"
      },
      {
        "id": 3525,
        "kabkot_id": 241,
        "kecamatan": "Kasembon"
      },
      {
        "id": 3526,
        "kabkot_id": 241,
        "kecamatan": "Kepanjen"
      },
      {
        "id": 3527,
        "kabkot_id": 241,
        "kecamatan": "Kromengan"
      },
      {
        "id": 3528,
        "kabkot_id": 241,
        "kecamatan": "Lawang"
      },
      {
        "id": 3529,
        "kabkot_id": 241,
        "kecamatan": "Ngajung (Ngajum)"
      },
      {
        "id": 3530,
        "kabkot_id": 241,
        "kecamatan": "Ngantang"
      },
      {
        "id": 3531,
        "kabkot_id": 241,
        "kecamatan": "Pagak"
      },
      {
        "id": 3532,
        "kabkot_id": 241,
        "kecamatan": "Pagelaran"
      },
      {
        "id": 3533,
        "kabkot_id": 241,
        "kecamatan": "Pakis"
      },
      {
        "id": 3534,
        "kabkot_id": 241,
        "kecamatan": "Pakisaji"
      },
      {
        "id": 3535,
        "kabkot_id": 241,
        "kecamatan": "Poncokusumo"
      },
      {
        "id": 3536,
        "kabkot_id": 241,
        "kecamatan": "Pujon"
      },
      {
        "id": 3537,
        "kabkot_id": 241,
        "kecamatan": "Singosari"
      },
      {
        "id": 3538,
        "kabkot_id": 241,
        "kecamatan": "Sumbermanjing Wetan"
      },
      {
        "id": 3539,
        "kabkot_id": 241,
        "kecamatan": "Sumberpucung"
      },
      {
        "id": 3540,
        "kabkot_id": 241,
        "kecamatan": "Tajinan"
      },
      {
        "id": 3541,
        "kabkot_id": 241,
        "kecamatan": "Tirtoyudo"
      },
      {
        "id": 3542,
        "kabkot_id": 241,
        "kecamatan": "Tumpang"
      },
      {
        "id": 3543,
        "kabkot_id": 241,
        "kecamatan": "Turen"
      },
      {
        "id": 3544,
        "kabkot_id": 241,
        "kecamatan": "Wagir"
      },
      {
        "id": 3545,
        "kabkot_id": 241,
        "kecamatan": "Wajak"
      },
      {
        "id": 3546,
        "kabkot_id": 241,
        "kecamatan": "Wonosari"
      },
      {
        "id": 3547,
        "kabkot_id": 242,
        "kecamatan": "Bangsal"
      },
      {
        "id": 3548,
        "kabkot_id": 242,
        "kecamatan": "Dawar Blandong"
      },
      {
        "id": 3549,
        "kabkot_id": 242,
        "kecamatan": "Dlanggu"
      },
      {
        "id": 3550,
        "kabkot_id": 242,
        "kecamatan": "Gedeg"
      },
      {
        "id": 3551,
        "kabkot_id": 242,
        "kecamatan": "Gondang"
      },
      {
        "id": 3552,
        "kabkot_id": 242,
        "kecamatan": "Jatirejo"
      },
      {
        "id": 3553,
        "kabkot_id": 242,
        "kecamatan": "Jetis"
      },
      {
        "id": 3554,
        "kabkot_id": 242,
        "kecamatan": "Kemlagi"
      },
      {
        "id": 3555,
        "kabkot_id": 242,
        "kecamatan": "Kutorejo"
      },
      {
        "id": 3556,
        "kabkot_id": 242,
        "kecamatan": "Mojoanyar"
      },
      {
        "id": 3557,
        "kabkot_id": 242,
        "kecamatan": "Mojosari"
      },
      {
        "id": 3558,
        "kabkot_id": 242,
        "kecamatan": "Ngoro"
      },
      {
        "id": 3559,
        "kabkot_id": 242,
        "kecamatan": "Pacet"
      },
      {
        "id": 3560,
        "kabkot_id": 242,
        "kecamatan": "Pungging"
      },
      {
        "id": 3561,
        "kabkot_id": 242,
        "kecamatan": "Puri"
      },
      {
        "id": 3562,
        "kabkot_id": 242,
        "kecamatan": "Sooko"
      },
      {
        "id": 3563,
        "kabkot_id": 242,
        "kecamatan": "Trawas"
      },
      {
        "id": 3564,
        "kabkot_id": 242,
        "kecamatan": "Trowulan"
      },
      {
        "id": 3565,
        "kabkot_id": 243,
        "kecamatan": "Bagor"
      },
      {
        "id": 3566,
        "kabkot_id": 243,
        "kecamatan": "Baron"
      },
      {
        "id": 3567,
        "kabkot_id": 243,
        "kecamatan": "Berbek"
      },
      {
        "id": 3568,
        "kabkot_id": 243,
        "kecamatan": "Gondang"
      },
      {
        "id": 3569,
        "kabkot_id": 243,
        "kecamatan": "Jatikalen"
      },
      {
        "id": 3570,
        "kabkot_id": 243,
        "kecamatan": "Kertosono"
      },
      {
        "id": 3571,
        "kabkot_id": 243,
        "kecamatan": "Lengkong"
      },
      {
        "id": 3572,
        "kabkot_id": 243,
        "kecamatan": "Loceret"
      },
      {
        "id": 3573,
        "kabkot_id": 243,
        "kecamatan": "Nganjuk"
      },
      {
        "id": 3574,
        "kabkot_id": 243,
        "kecamatan": "Ngetos"
      },
      {
        "id": 3575,
        "kabkot_id": 243,
        "kecamatan": "Ngluyu"
      },
      {
        "id": 3576,
        "kabkot_id": 243,
        "kecamatan": "Ngronggot"
      },
      {
        "id": 3577,
        "kabkot_id": 243,
        "kecamatan": "Pace"
      },
      {
        "id": 3578,
        "kabkot_id": 243,
        "kecamatan": "Patianrowo"
      },
      {
        "id": 3579,
        "kabkot_id": 243,
        "kecamatan": "Prambon"
      },
      {
        "id": 3580,
        "kabkot_id": 243,
        "kecamatan": "Rejoso"
      },
      {
        "id": 3581,
        "kabkot_id": 243,
        "kecamatan": "Sawahan"
      },
      {
        "id": 3582,
        "kabkot_id": 243,
        "kecamatan": "Sukomoro"
      },
      {
        "id": 3583,
        "kabkot_id": 243,
        "kecamatan": "Tanjunganom"
      },
      {
        "id": 3584,
        "kabkot_id": 243,
        "kecamatan": "Wilangan"
      },
      {
        "id": 3585,
        "kabkot_id": 244,
        "kecamatan": "Bringin"
      },
      {
        "id": 3586,
        "kabkot_id": 244,
        "kecamatan": "Geneng"
      },
      {
        "id": 3587,
        "kabkot_id": 244,
        "kecamatan": "Gerih"
      },
      {
        "id": 3588,
        "kabkot_id": 244,
        "kecamatan": "Jogorogo"
      },
      {
        "id": 3589,
        "kabkot_id": 244,
        "kecamatan": "Karanganyar"
      },
      {
        "id": 3590,
        "kabkot_id": 244,
        "kecamatan": "Karangjati"
      },
      {
        "id": 3591,
        "kabkot_id": 244,
        "kecamatan": "Kasreman"
      },
      {
        "id": 3592,
        "kabkot_id": 244,
        "kecamatan": "Kedunggalar"
      },
      {
        "id": 3593,
        "kabkot_id": 244,
        "kecamatan": "Kendal"
      },
      {
        "id": 3594,
        "kabkot_id": 244,
        "kecamatan": "Kwadungan"
      },
      {
        "id": 3595,
        "kabkot_id": 244,
        "kecamatan": "Mantingan"
      },
      {
        "id": 3596,
        "kabkot_id": 244,
        "kecamatan": "Ngawi"
      },
      {
        "id": 3597,
        "kabkot_id": 244,
        "kecamatan": "Ngrambe"
      },
      {
        "id": 3598,
        "kabkot_id": 244,
        "kecamatan": "Padas"
      },
      {
        "id": 3599,
        "kabkot_id": 244,
        "kecamatan": "Pangkur"
      },
      {
        "id": 3600,
        "kabkot_id": 244,
        "kecamatan": "Paron"
      },
      {
        "id": 3601,
        "kabkot_id": 244,
        "kecamatan": "Pitu"
      },
      {
        "id": 3602,
        "kabkot_id": 244,
        "kecamatan": "Sine"
      },
      {
        "id": 3603,
        "kabkot_id": 244,
        "kecamatan": "Widodaren"
      },
      {
        "id": 3604,
        "kabkot_id": 245,
        "kecamatan": "Arjosari"
      },
      {
        "id": 3605,
        "kabkot_id": 245,
        "kecamatan": "Bandar"
      },
      {
        "id": 3606,
        "kabkot_id": 245,
        "kecamatan": "Donorojo"
      },
      {
        "id": 3607,
        "kabkot_id": 245,
        "kecamatan": "Kebon Agung"
      },
      {
        "id": 3608,
        "kabkot_id": 245,
        "kecamatan": "Nawangan"
      },
      {
        "id": 3609,
        "kabkot_id": 245,
        "kecamatan": "Ngadirojo"
      },
      {
        "id": 3610,
        "kabkot_id": 245,
        "kecamatan": "Pacitan"
      },
      {
        "id": 3611,
        "kabkot_id": 245,
        "kecamatan": "Pringkuku"
      },
      {
        "id": 3612,
        "kabkot_id": 245,
        "kecamatan": "Punung"
      },
      {
        "id": 3613,
        "kabkot_id": 245,
        "kecamatan": "Sudimoro"
      },
      {
        "id": 3614,
        "kabkot_id": 245,
        "kecamatan": "Tegalombo"
      },
      {
        "id": 3615,
        "kabkot_id": 245,
        "kecamatan": "Tulakan"
      },
      {
        "id": 3616,
        "kabkot_id": 246,
        "kecamatan": "Batumarmar"
      },
      {
        "id": 3617,
        "kabkot_id": 246,
        "kecamatan": "Galis"
      },
      {
        "id": 3618,
        "kabkot_id": 246,
        "kecamatan": "Kadur"
      },
      {
        "id": 3619,
        "kabkot_id": 246,
        "kecamatan": "Larangan"
      },
      {
        "id": 3620,
        "kabkot_id": 246,
        "kecamatan": "Pademawu"
      },
      {
        "id": 3621,
        "kabkot_id": 246,
        "kecamatan": "Pakong"
      },
      {
        "id": 3622,
        "kabkot_id": 246,
        "kecamatan": "Palenga'an"
      },
      {
        "id": 3623,
        "kabkot_id": 246,
        "kecamatan": "Pamekasan"
      },
      {
        "id": 3624,
        "kabkot_id": 246,
        "kecamatan": "Pasean"
      },
      {
        "id": 3625,
        "kabkot_id": 246,
        "kecamatan": "Pegantenan"
      },
      {
        "id": 3626,
        "kabkot_id": 246,
        "kecamatan": "Proppo"
      },
      {
        "id": 3627,
        "kabkot_id": 246,
        "kecamatan": "Tlanakan"
      },
      {
        "id": 3628,
        "kabkot_id": 246,
        "kecamatan": "Waru"
      },
      {
        "id": 3629,
        "kabkot_id": 247,
        "kecamatan": "Bangil"
      },
      {
        "id": 3630,
        "kabkot_id": 247,
        "kecamatan": "Beji"
      },
      {
        "id": 3631,
        "kabkot_id": 247,
        "kecamatan": "Gempol"
      },
      {
        "id": 3632,
        "kabkot_id": 247,
        "kecamatan": "Gondang Wetan"
      },
      {
        "id": 3633,
        "kabkot_id": 247,
        "kecamatan": "Grati"
      },
      {
        "id": 3634,
        "kabkot_id": 247,
        "kecamatan": "Kejayan"
      },
      {
        "id": 3635,
        "kabkot_id": 247,
        "kecamatan": "Kraton"
      },
      {
        "id": 3636,
        "kabkot_id": 247,
        "kecamatan": "Lekok"
      },
      {
        "id": 3637,
        "kabkot_id": 247,
        "kecamatan": "Lumbang"
      },
      {
        "id": 3638,
        "kabkot_id": 247,
        "kecamatan": "Nguling"
      },
      {
        "id": 3639,
        "kabkot_id": 247,
        "kecamatan": "Pandaan"
      },
      {
        "id": 3640,
        "kabkot_id": 247,
        "kecamatan": "Pasrepan"
      },
      {
        "id": 3641,
        "kabkot_id": 247,
        "kecamatan": "Pohjentrek"
      },
      {
        "id": 3642,
        "kabkot_id": 247,
        "kecamatan": "Prigen"
      },
      {
        "id": 3643,
        "kabkot_id": 247,
        "kecamatan": "Purwodadi"
      },
      {
        "id": 3644,
        "kabkot_id": 247,
        "kecamatan": "Purwosari"
      },
      {
        "id": 3645,
        "kabkot_id": 247,
        "kecamatan": "Puspo"
      },
      {
        "id": 3646,
        "kabkot_id": 247,
        "kecamatan": "Rejoso"
      },
      {
        "id": 3647,
        "kabkot_id": 247,
        "kecamatan": "Rembang"
      },
      {
        "id": 3648,
        "kabkot_id": 247,
        "kecamatan": "Sukorejo"
      },
      {
        "id": 3649,
        "kabkot_id": 247,
        "kecamatan": "Tosari"
      },
      {
        "id": 3650,
        "kabkot_id": 247,
        "kecamatan": "Tutur"
      },
      {
        "id": 3651,
        "kabkot_id": 247,
        "kecamatan": "Winongan"
      },
      {
        "id": 3652,
        "kabkot_id": 247,
        "kecamatan": "Wonorejo"
      },
      {
        "id": 3653,
        "kabkot_id": 248,
        "kecamatan": "Babadan"
      },
      {
        "id": 3654,
        "kabkot_id": 248,
        "kecamatan": "Badegan"
      },
      {
        "id": 3655,
        "kabkot_id": 248,
        "kecamatan": "Balong"
      },
      {
        "id": 3656,
        "kabkot_id": 248,
        "kecamatan": "Bungkal"
      },
      {
        "id": 3657,
        "kabkot_id": 248,
        "kecamatan": "Jambon"
      },
      {
        "id": 3658,
        "kabkot_id": 248,
        "kecamatan": "Jenangan"
      },
      {
        "id": 3659,
        "kabkot_id": 248,
        "kecamatan": "Jetis"
      },
      {
        "id": 3660,
        "kabkot_id": 248,
        "kecamatan": "Kauman"
      },
      {
        "id": 3661,
        "kabkot_id": 248,
        "kecamatan": "Mlarak"
      },
      {
        "id": 3662,
        "kabkot_id": 248,
        "kecamatan": "Ngebel"
      },
      {
        "id": 3663,
        "kabkot_id": 248,
        "kecamatan": "Ngrayun"
      },
      {
        "id": 3664,
        "kabkot_id": 248,
        "kecamatan": "Ponorogo"
      },
      {
        "id": 3665,
        "kabkot_id": 248,
        "kecamatan": "Pudak"
      },
      {
        "id": 3666,
        "kabkot_id": 248,
        "kecamatan": "Pulung"
      },
      {
        "id": 3667,
        "kabkot_id": 248,
        "kecamatan": "Sambit"
      },
      {
        "id": 3668,
        "kabkot_id": 248,
        "kecamatan": "Sampung"
      },
      {
        "id": 3669,
        "kabkot_id": 248,
        "kecamatan": "Sawoo"
      },
      {
        "id": 3670,
        "kabkot_id": 248,
        "kecamatan": "Siman"
      },
      {
        "id": 3671,
        "kabkot_id": 248,
        "kecamatan": "Slahung"
      },
      {
        "id": 3672,
        "kabkot_id": 248,
        "kecamatan": "Sooko"
      },
      {
        "id": 3673,
        "kabkot_id": 248,
        "kecamatan": "Sukorejo"
      },
      {
        "id": 3674,
        "kabkot_id": 249,
        "kecamatan": "Bantaran"
      },
      {
        "id": 3675,
        "kabkot_id": 249,
        "kecamatan": "Banyu Anyar"
      },
      {
        "id": 3676,
        "kabkot_id": 249,
        "kecamatan": "Besuk"
      },
      {
        "id": 3677,
        "kabkot_id": 249,
        "kecamatan": "Dringu"
      },
      {
        "id": 3678,
        "kabkot_id": 249,
        "kecamatan": "Gading"
      },
      {
        "id": 3679,
        "kabkot_id": 249,
        "kecamatan": "Gending"
      },
      {
        "id": 3680,
        "kabkot_id": 249,
        "kecamatan": "Kota Anyar"
      },
      {
        "id": 3681,
        "kabkot_id": 249,
        "kecamatan": "Kraksaan"
      },
      {
        "id": 3682,
        "kabkot_id": 249,
        "kecamatan": "Krejengan"
      },
      {
        "id": 3683,
        "kabkot_id": 249,
        "kecamatan": "Krucil"
      },
      {
        "id": 3684,
        "kabkot_id": 249,
        "kecamatan": "Kuripan"
      },
      {
        "id": 3685,
        "kabkot_id": 249,
        "kecamatan": "Leces"
      },
      {
        "id": 3686,
        "kabkot_id": 249,
        "kecamatan": "Lumbang"
      },
      {
        "id": 3687,
        "kabkot_id": 249,
        "kecamatan": "Maron"
      },
      {
        "id": 3688,
        "kabkot_id": 249,
        "kecamatan": "Paiton"
      },
      {
        "id": 3689,
        "kabkot_id": 249,
        "kecamatan": "Pajarakan"
      },
      {
        "id": 3690,
        "kabkot_id": 249,
        "kecamatan": "Pakuniran"
      },
      {
        "id": 3691,
        "kabkot_id": 249,
        "kecamatan": "Sukapura"
      },
      {
        "id": 3692,
        "kabkot_id": 249,
        "kecamatan": "Sumber"
      },
      {
        "id": 3693,
        "kabkot_id": 249,
        "kecamatan": "Sumberasih"
      },
      {
        "id": 3694,
        "kabkot_id": 249,
        "kecamatan": "Tegal Siwalan"
      },
      {
        "id": 3695,
        "kabkot_id": 249,
        "kecamatan": "Tiris"
      },
      {
        "id": 3696,
        "kabkot_id": 249,
        "kecamatan": "Tongas"
      },
      {
        "id": 3697,
        "kabkot_id": 249,
        "kecamatan": "Wonomerto"
      },
      {
        "id": 3698,
        "kabkot_id": 250,
        "kecamatan": "Banyuates"
      },
      {
        "id": 3699,
        "kabkot_id": 250,
        "kecamatan": "Camplong"
      },
      {
        "id": 3700,
        "kabkot_id": 250,
        "kecamatan": "Jrengik"
      },
      {
        "id": 3701,
        "kabkot_id": 250,
        "kecamatan": "Karang Penang"
      },
      {
        "id": 3702,
        "kabkot_id": 250,
        "kecamatan": "Kedungdung"
      },
      {
        "id": 3703,
        "kabkot_id": 250,
        "kecamatan": "Ketapang"
      },
      {
        "id": 3704,
        "kabkot_id": 250,
        "kecamatan": "Omben"
      },
      {
        "id": 3705,
        "kabkot_id": 250,
        "kecamatan": "Pangarengan"
      },
      {
        "id": 3706,
        "kabkot_id": 250,
        "kecamatan": "Robatal"
      },
      {
        "id": 3707,
        "kabkot_id": 250,
        "kecamatan": "Sampang"
      },
      {
        "id": 3708,
        "kabkot_id": 250,
        "kecamatan": "Sokobanah"
      },
      {
        "id": 3709,
        "kabkot_id": 250,
        "kecamatan": "Sreseh"
      },
      {
        "id": 3710,
        "kabkot_id": 250,
        "kecamatan": "Tambelangan"
      },
      {
        "id": 3711,
        "kabkot_id": 250,
        "kecamatan": "Torjun"
      },
      {
        "id": 3712,
        "kabkot_id": 251,
        "kecamatan": "Balongbendo"
      },
      {
        "id": 3713,
        "kabkot_id": 251,
        "kecamatan": "Buduran"
      },
      {
        "id": 3714,
        "kabkot_id": 251,
        "kecamatan": "Candi"
      },
      {
        "id": 3715,
        "kabkot_id": 251,
        "kecamatan": "Gedangan"
      },
      {
        "id": 3716,
        "kabkot_id": 251,
        "kecamatan": "Jabon"
      },
      {
        "id": 3717,
        "kabkot_id": 251,
        "kecamatan": "Krembung"
      },
      {
        "id": 3718,
        "kabkot_id": 251,
        "kecamatan": "Krian"
      },
      {
        "id": 3719,
        "kabkot_id": 251,
        "kecamatan": "Porong"
      },
      {
        "id": 3720,
        "kabkot_id": 251,
        "kecamatan": "Prambon"
      },
      {
        "id": 3721,
        "kabkot_id": 251,
        "kecamatan": "Sedati"
      },
      {
        "id": 3722,
        "kabkot_id": 251,
        "kecamatan": "Sidoarjo"
      },
      {
        "id": 3723,
        "kabkot_id": 251,
        "kecamatan": "Sukodono"
      },
      {
        "id": 3724,
        "kabkot_id": 251,
        "kecamatan": "Taman"
      },
      {
        "id": 3725,
        "kabkot_id": 251,
        "kecamatan": "Tanggulangin"
      },
      {
        "id": 3726,
        "kabkot_id": 251,
        "kecamatan": "Tarik"
      },
      {
        "id": 3727,
        "kabkot_id": 251,
        "kecamatan": "Tulangan"
      },
      {
        "id": 3728,
        "kabkot_id": 251,
        "kecamatan": "Waru"
      },
      {
        "id": 3729,
        "kabkot_id": 251,
        "kecamatan": "Wonoayu"
      },
      {
        "id": 3730,
        "kabkot_id": 252,
        "kecamatan": "Arjasa"
      },
      {
        "id": 3731,
        "kabkot_id": 252,
        "kecamatan": "Asembagus"
      },
      {
        "id": 3732,
        "kabkot_id": 252,
        "kecamatan": "Banyuglugur"
      },
      {
        "id": 3733,
        "kabkot_id": 252,
        "kecamatan": "Banyuputih"
      },
      {
        "id": 3734,
        "kabkot_id": 252,
        "kecamatan": "Besuki"
      },
      {
        "id": 3735,
        "kabkot_id": 252,
        "kecamatan": "Bungatan"
      },
      {
        "id": 3736,
        "kabkot_id": 252,
        "kecamatan": "Jangkar"
      },
      {
        "id": 3737,
        "kabkot_id": 252,
        "kecamatan": "Jatibanteng"
      },
      {
        "id": 3738,
        "kabkot_id": 252,
        "kecamatan": "Kapongan"
      },
      {
        "id": 3739,
        "kabkot_id": 252,
        "kecamatan": "Kendit"
      },
      {
        "id": 3740,
        "kabkot_id": 252,
        "kecamatan": "Mangaran"
      },
      {
        "id": 3741,
        "kabkot_id": 252,
        "kecamatan": "Mlandingan"
      },
      {
        "id": 3742,
        "kabkot_id": 252,
        "kecamatan": "Panarukan"
      },
      {
        "id": 3743,
        "kabkot_id": 252,
        "kecamatan": "Panji"
      },
      {
        "id": 3744,
        "kabkot_id": 252,
        "kecamatan": "Situbondo"
      },
      {
        "id": 3745,
        "kabkot_id": 252,
        "kecamatan": "Suboh"
      },
      {
        "id": 3746,
        "kabkot_id": 252,
        "kecamatan": "Sumbermalang"
      },
      {
        "id": 3747,
        "kabkot_id": 253,
        "kecamatan": "Ambunten"
      },
      {
        "id": 3748,
        "kabkot_id": 253,
        "kecamatan": "Arjasa"
      },
      {
        "id": 3749,
        "kabkot_id": 253,
        "kecamatan": "Batang Batang"
      },
      {
        "id": 3750,
        "kabkot_id": 253,
        "kecamatan": "Batuan"
      },
      {
        "id": 3751,
        "kabkot_id": 253,
        "kecamatan": "Batuputih"
      },
      {
        "id": 3752,
        "kabkot_id": 253,
        "kecamatan": "Bluto"
      },
      {
        "id": 3753,
        "kabkot_id": 253,
        "kecamatan": "Dasuk"
      },
      {
        "id": 3754,
        "kabkot_id": 253,
        "kecamatan": "Dungkek"
      },
      {
        "id": 3755,
        "kabkot_id": 253,
        "kecamatan": "Ganding"
      },
      {
        "id": 3756,
        "kabkot_id": 253,
        "kecamatan": "Gapura"
      },
      {
        "id": 3757,
        "kabkot_id": 253,
        "kecamatan": "Gayam"
      },
      {
        "id": 3758,
        "kabkot_id": 253,
        "kecamatan": "Gili Ginting"
      },
      {
        "id": 3759,
        "kabkot_id": 253,
        "kecamatan": "Guluk Guluk"
      },
      {
        "id": 3760,
        "kabkot_id": 253,
        "kecamatan": "Kalianget"
      },
      {
        "id": 3761,
        "kabkot_id": 253,
        "kecamatan": "Kangayan"
      },
      {
        "id": 3762,
        "kabkot_id": 253,
        "kecamatan": "Kota Sumenep"
      },
      {
        "id": 3763,
        "kabkot_id": 253,
        "kecamatan": "Lenteng"
      },
      {
        "id": 3764,
        "kabkot_id": 253,
        "kecamatan": "Manding"
      },
      {
        "id": 3765,
        "kabkot_id": 253,
        "kecamatan": "Masalembu"
      },
      {
        "id": 3766,
        "kabkot_id": 253,
        "kecamatan": "Nonggunong"
      },
      {
        "id": 3767,
        "kabkot_id": 253,
        "kecamatan": "Pasongsongan"
      },
      {
        "id": 3768,
        "kabkot_id": 253,
        "kecamatan": "Pragaan"
      },
      {
        "id": 3769,
        "kabkot_id": 253,
        "kecamatan": "Ra'as"
      },
      {
        "id": 3770,
        "kabkot_id": 253,
        "kecamatan": "Rubaru"
      },
      {
        "id": 3771,
        "kabkot_id": 253,
        "kecamatan": "Sapeken"
      },
      {
        "id": 3772,
        "kabkot_id": 253,
        "kecamatan": "Saronggi"
      },
      {
        "id": 3773,
        "kabkot_id": 253,
        "kecamatan": "Talango"
      },
      {
        "id": 3774,
        "kabkot_id": 254,
        "kecamatan": "Bendungan"
      },
      {
        "id": 3775,
        "kabkot_id": 254,
        "kecamatan": "Dongko"
      },
      {
        "id": 3776,
        "kabkot_id": 254,
        "kecamatan": "Durenan"
      },
      {
        "id": 3777,
        "kabkot_id": 254,
        "kecamatan": "Gandusari"
      },
      {
        "id": 3778,
        "kabkot_id": 254,
        "kecamatan": "Kampak"
      },
      {
        "id": 3779,
        "kabkot_id": 254,
        "kecamatan": "Karangan"
      },
      {
        "id": 3780,
        "kabkot_id": 254,
        "kecamatan": "Munjungan"
      },
      {
        "id": 3781,
        "kabkot_id": 254,
        "kecamatan": "Panggul"
      },
      {
        "id": 3782,
        "kabkot_id": 254,
        "kecamatan": "Pogalan"
      },
      {
        "id": 3783,
        "kabkot_id": 254,
        "kecamatan": "Pule"
      },
      {
        "id": 3784,
        "kabkot_id": 254,
        "kecamatan": "Suruh"
      },
      {
        "id": 3785,
        "kabkot_id": 254,
        "kecamatan": "Trenggalek"
      },
      {
        "id": 3786,
        "kabkot_id": 254,
        "kecamatan": "Tugu"
      },
      {
        "id": 3787,
        "kabkot_id": 254,
        "kecamatan": "Watulimo"
      },
      {
        "id": 3788,
        "kabkot_id": 255,
        "kecamatan": "Bancar"
      },
      {
        "id": 3789,
        "kabkot_id": 255,
        "kecamatan": "Bangilan"
      },
      {
        "id": 3790,
        "kabkot_id": 255,
        "kecamatan": "Grabagan"
      },
      {
        "id": 3791,
        "kabkot_id": 255,
        "kecamatan": "Jatirogo"
      },
      {
        "id": 3792,
        "kabkot_id": 255,
        "kecamatan": "Jenu"
      },
      {
        "id": 3793,
        "kabkot_id": 255,
        "kecamatan": "Kenduruan"
      },
      {
        "id": 3794,
        "kabkot_id": 255,
        "kecamatan": "Kerek"
      },
      {
        "id": 3795,
        "kabkot_id": 255,
        "kecamatan": "Merakurak"
      },
      {
        "id": 3796,
        "kabkot_id": 255,
        "kecamatan": "Montong"
      },
      {
        "id": 3797,
        "kabkot_id": 255,
        "kecamatan": "Palang"
      },
      {
        "id": 3798,
        "kabkot_id": 255,
        "kecamatan": "Parengan"
      },
      {
        "id": 3799,
        "kabkot_id": 255,
        "kecamatan": "Plumpang"
      },
      {
        "id": 3800,
        "kabkot_id": 255,
        "kecamatan": "Rengel"
      },
      {
        "id": 3801,
        "kabkot_id": 255,
        "kecamatan": "Semanding"
      },
      {
        "id": 3802,
        "kabkot_id": 255,
        "kecamatan": "Senori"
      },
      {
        "id": 3803,
        "kabkot_id": 255,
        "kecamatan": "Singgahan"
      },
      {
        "id": 3804,
        "kabkot_id": 255,
        "kecamatan": "Soko"
      },
      {
        "id": 3805,
        "kabkot_id": 255,
        "kecamatan": "Tambakboyo"
      },
      {
        "id": 3806,
        "kabkot_id": 255,
        "kecamatan": "Tuban"
      },
      {
        "id": 3807,
        "kabkot_id": 255,
        "kecamatan": "Widang"
      },
      {
        "id": 3808,
        "kabkot_id": 256,
        "kecamatan": "Bandung"
      },
      {
        "id": 3809,
        "kabkot_id": 256,
        "kecamatan": "Besuki"
      },
      {
        "id": 3810,
        "kabkot_id": 256,
        "kecamatan": "Boyolangu"
      },
      {
        "id": 3811,
        "kabkot_id": 256,
        "kecamatan": "Campur Darat"
      },
      {
        "id": 3812,
        "kabkot_id": 256,
        "kecamatan": "Gondang"
      },
      {
        "id": 3813,
        "kabkot_id": 256,
        "kecamatan": "Kalidawir"
      },
      {
        "id": 3814,
        "kabkot_id": 256,
        "kecamatan": "Karang Rejo"
      },
      {
        "id": 3815,
        "kabkot_id": 256,
        "kecamatan": "Kauman"
      },
      {
        "id": 3816,
        "kabkot_id": 256,
        "kecamatan": "Kedungwaru"
      },
      {
        "id": 3817,
        "kabkot_id": 256,
        "kecamatan": "Ngantru"
      },
      {
        "id": 3818,
        "kabkot_id": 256,
        "kecamatan": "Ngunut"
      },
      {
        "id": 3819,
        "kabkot_id": 256,
        "kecamatan": "Pagerwojo"
      },
      {
        "id": 3820,
        "kabkot_id": 256,
        "kecamatan": "Pakel"
      },
      {
        "id": 3821,
        "kabkot_id": 256,
        "kecamatan": "Pucanglaban"
      },
      {
        "id": 3822,
        "kabkot_id": 256,
        "kecamatan": "Rejotangan"
      },
      {
        "id": 3823,
        "kabkot_id": 256,
        "kecamatan": "Sendang"
      },
      {
        "id": 3824,
        "kabkot_id": 256,
        "kecamatan": "Sumbergempol"
      },
      {
        "id": 3825,
        "kabkot_id": 256,
        "kecamatan": "Tanggung Gunung"
      },
      {
        "id": 3826,
        "kabkot_id": 256,
        "kecamatan": "Tulungagung"
      },
      {
        "id": 3827,
        "kabkot_id": 257,
        "kecamatan": "Batu"
      },
      {
        "id": 3828,
        "kabkot_id": 257,
        "kecamatan": "Bumiaji"
      },
      {
        "id": 3829,
        "kabkot_id": 257,
        "kecamatan": "Junrejo"
      },
      {
        "id": 3830,
        "kabkot_id": 258,
        "kecamatan": "Kepanjen Kidul"
      },
      {
        "id": 3831,
        "kabkot_id": 258,
        "kecamatan": "Sanan Wetan"
      },
      {
        "id": 3832,
        "kabkot_id": 258,
        "kecamatan": "Sukorejo"
      },
      {
        "id": 3833,
        "kabkot_id": 259,
        "kecamatan": "Kediri Kota"
      },
      {
        "id": 3834,
        "kabkot_id": 259,
        "kecamatan": "Mojoroto"
      },
      {
        "id": 3835,
        "kabkot_id": 259,
        "kecamatan": "Pesantren"
      },
      {
        "id": 3836,
        "kabkot_id": 260,
        "kecamatan": "Kartoharjo"
      },
      {
        "id": 3837,
        "kabkot_id": 260,
        "kecamatan": "Manguharjo"
      },
      {
        "id": 3838,
        "kabkot_id": 260,
        "kecamatan": "Taman"
      },
      {
        "id": 3839,
        "kabkot_id": 261,
        "kecamatan": "Blimbing"
      },
      {
        "id": 3840,
        "kabkot_id": 261,
        "kecamatan": "Kedungkandang"
      },
      {
        "id": 3841,
        "kabkot_id": 261,
        "kecamatan": "Klojen"
      },
      {
        "id": 3842,
        "kabkot_id": 261,
        "kecamatan": "Lowokwaru"
      },
      {
        "id": 3843,
        "kabkot_id": 261,
        "kecamatan": "Sukun"
      },
      {
        "id": 3844,
        "kabkot_id": 262,
        "kecamatan": "Magersari"
      },
      {
        "id": 3845,
        "kabkot_id": 262,
        "kecamatan": "Prajurit Kulon"
      },
      {
        "id": 3846,
        "kabkot_id": 263,
        "kecamatan": "Bugul Kidul"
      },
      {
        "id": 3847,
        "kabkot_id": 263,
        "kecamatan": "Gadingrejo"
      },
      {
        "id": 3848,
        "kabkot_id": 263,
        "kecamatan": "Panggungrejo"
      },
      {
        "id": 3849,
        "kabkot_id": 263,
        "kecamatan": "Purworejo"
      },
      {
        "id": 3850,
        "kabkot_id": 264,
        "kecamatan": "Kademangan"
      },
      {
        "id": 3851,
        "kabkot_id": 264,
        "kecamatan": "Kanigaran"
      },
      {
        "id": 3852,
        "kabkot_id": 264,
        "kecamatan": "Kedopok (Kedopak)"
      },
      {
        "id": 3853,
        "kabkot_id": 264,
        "kecamatan": "Mayangan"
      },
      {
        "id": 3854,
        "kabkot_id": 264,
        "kecamatan": "Wonoasih"
      },
      {
        "id": 3855,
        "kabkot_id": 265,
        "kecamatan": "Asemrowo"
      },
      {
        "id": 3856,
        "kabkot_id": 265,
        "kecamatan": "Benowo"
      },
      {
        "id": 3857,
        "kabkot_id": 265,
        "kecamatan": "Bubutan"
      },
      {
        "id": 3858,
        "kabkot_id": 265,
        "kecamatan": "Bulak"
      },
      {
        "id": 3859,
        "kabkot_id": 265,
        "kecamatan": "Dukuh Pakis"
      },
      {
        "id": 3860,
        "kabkot_id": 265,
        "kecamatan": "Gayungan"
      },
      {
        "id": 3861,
        "kabkot_id": 265,
        "kecamatan": "Genteng"
      },
      {
        "id": 3862,
        "kabkot_id": 265,
        "kecamatan": "Gubeng"
      },
      {
        "id": 3863,
        "kabkot_id": 265,
        "kecamatan": "Gununganyar"
      },
      {
        "id": 3864,
        "kabkot_id": 265,
        "kecamatan": "Jambangan"
      },
      {
        "id": 3865,
        "kabkot_id": 265,
        "kecamatan": "Karangpilang"
      },
      {
        "id": 3866,
        "kabkot_id": 265,
        "kecamatan": "Kenjeran"
      },
      {
        "id": 3867,
        "kabkot_id": 265,
        "kecamatan": "Krembangan"
      },
      {
        "id": 3868,
        "kabkot_id": 265,
        "kecamatan": "Lakarsantri"
      },
      {
        "id": 3869,
        "kabkot_id": 265,
        "kecamatan": "Mulyorejo"
      },
      {
        "id": 3870,
        "kabkot_id": 265,
        "kecamatan": "Pabean Cantikan"
      },
      {
        "id": 3871,
        "kabkot_id": 265,
        "kecamatan": "Pakal"
      },
      {
        "id": 3872,
        "kabkot_id": 265,
        "kecamatan": "Rungkut"
      },
      {
        "id": 3873,
        "kabkot_id": 265,
        "kecamatan": "Sambikerep"
      },
      {
        "id": 3874,
        "kabkot_id": 265,
        "kecamatan": "Sawahan"
      },
      {
        "id": 3875,
        "kabkot_id": 265,
        "kecamatan": "Semampir"
      },
      {
        "id": 3876,
        "kabkot_id": 265,
        "kecamatan": "Simokerto"
      },
      {
        "id": 3877,
        "kabkot_id": 265,
        "kecamatan": "Sukolilo"
      },
      {
        "id": 3878,
        "kabkot_id": 265,
        "kecamatan": "Sukomanunggal"
      },
      {
        "id": 3879,
        "kabkot_id": 265,
        "kecamatan": "Tambaksari"
      },
      {
        "id": 3880,
        "kabkot_id": 265,
        "kecamatan": "Tandes"
      },
      {
        "id": 3881,
        "kabkot_id": 265,
        "kecamatan": "Tegalsari"
      },
      {
        "id": 3882,
        "kabkot_id": 265,
        "kecamatan": "Tenggilis Mejoyo"
      },
      {
        "id": 3883,
        "kabkot_id": 265,
        "kecamatan": "Wiyung"
      },
      {
        "id": 3884,
        "kabkot_id": 265,
        "kecamatan": "Wonocolo"
      },
      {
        "id": 3885,
        "kabkot_id": 265,
        "kecamatan": "Wonokromo"
      },
      {
        "id": 3886,
        "kabkot_id": 266,
        "kecamatan": "Banjarsari"
      },
      {
        "id": 3887,
        "kabkot_id": 266,
        "kecamatan": "Bayah"
      },
      {
        "id": 3888,
        "kabkot_id": 266,
        "kecamatan": "Bojongmanik"
      },
      {
        "id": 3889,
        "kabkot_id": 266,
        "kecamatan": "Cibadak"
      },
      {
        "id": 3890,
        "kabkot_id": 266,
        "kecamatan": "Cibeber"
      },
      {
        "id": 3891,
        "kabkot_id": 266,
        "kecamatan": "Cigemblong"
      },
      {
        "id": 3892,
        "kabkot_id": 266,
        "kecamatan": "Cihara"
      },
      {
        "id": 3893,
        "kabkot_id": 266,
        "kecamatan": "Cijaku"
      },
      {
        "id": 3894,
        "kabkot_id": 266,
        "kecamatan": "Cikulur"
      },
      {
        "id": 3895,
        "kabkot_id": 266,
        "kecamatan": "Cileles"
      },
      {
        "id": 3896,
        "kabkot_id": 266,
        "kecamatan": "Cilograng"
      },
      {
        "id": 3897,
        "kabkot_id": 266,
        "kecamatan": "Cimarga"
      },
      {
        "id": 3898,
        "kabkot_id": 266,
        "kecamatan": "Cipanas"
      },
      {
        "id": 3899,
        "kabkot_id": 266,
        "kecamatan": "Cirinten"
      },
      {
        "id": 3900,
        "kabkot_id": 266,
        "kecamatan": "Curugbitung"
      },
      {
        "id": 3901,
        "kabkot_id": 266,
        "kecamatan": "Gunung Kencana"
      },
      {
        "id": 3902,
        "kabkot_id": 266,
        "kecamatan": "Kalanganyar"
      },
      {
        "id": 3903,
        "kabkot_id": 266,
        "kecamatan": "Lebakgedong"
      },
      {
        "id": 3904,
        "kabkot_id": 266,
        "kecamatan": "Leuwidamar"
      },
      {
        "id": 3905,
        "kabkot_id": 266,
        "kecamatan": "Maja"
      },
      {
        "id": 3906,
        "kabkot_id": 266,
        "kecamatan": "Malingping"
      },
      {
        "id": 3907,
        "kabkot_id": 266,
        "kecamatan": "Muncang"
      },
      {
        "id": 3908,
        "kabkot_id": 266,
        "kecamatan": "Panggarangan"
      },
      {
        "id": 3909,
        "kabkot_id": 266,
        "kecamatan": "Rangkasbitung"
      },
      {
        "id": 3910,
        "kabkot_id": 266,
        "kecamatan": "Sajira"
      },
      {
        "id": 3911,
        "kabkot_id": 266,
        "kecamatan": "Sobang"
      },
      {
        "id": 3912,
        "kabkot_id": 266,
        "kecamatan": "Wanasalam"
      },
      {
        "id": 3913,
        "kabkot_id": 266,
        "kecamatan": "Warunggunung"
      },
      {
        "id": 3914,
        "kabkot_id": 267,
        "kecamatan": "Angsana"
      },
      {
        "id": 3915,
        "kabkot_id": 267,
        "kecamatan": "Banjar"
      },
      {
        "id": 3916,
        "kabkot_id": 267,
        "kecamatan": "Bojong"
      },
      {
        "id": 3917,
        "kabkot_id": 267,
        "kecamatan": "Cadasari"
      },
      {
        "id": 3918,
        "kabkot_id": 267,
        "kecamatan": "Carita"
      },
      {
        "id": 3919,
        "kabkot_id": 267,
        "kecamatan": "Cibaliung"
      },
      {
        "id": 3920,
        "kabkot_id": 267,
        "kecamatan": "Cibitung"
      },
      {
        "id": 3921,
        "kabkot_id": 267,
        "kecamatan": "Cigeulis"
      },
      {
        "id": 3922,
        "kabkot_id": 267,
        "kecamatan": "Cikeudal (Cikedal)"
      },
      {
        "id": 3923,
        "kabkot_id": 267,
        "kecamatan": "Cikeusik"
      },
      {
        "id": 3924,
        "kabkot_id": 267,
        "kecamatan": "Cimanggu"
      },
      {
        "id": 3925,
        "kabkot_id": 267,
        "kecamatan": "Cimanuk"
      },
      {
        "id": 3926,
        "kabkot_id": 267,
        "kecamatan": "Cipeucang"
      },
      {
        "id": 3927,
        "kabkot_id": 267,
        "kecamatan": "Cisata"
      },
      {
        "id": 3928,
        "kabkot_id": 267,
        "kecamatan": "Jiput"
      },
      {
        "id": 3929,
        "kabkot_id": 267,
        "kecamatan": "Kaduhejo"
      },
      {
        "id": 3930,
        "kabkot_id": 267,
        "kecamatan": "Karang Tanjung"
      },
      {
        "id": 3931,
        "kabkot_id": 267,
        "kecamatan": "Koroncong"
      },
      {
        "id": 3932,
        "kabkot_id": 267,
        "kecamatan": "Labuan"
      },
      {
        "id": 3933,
        "kabkot_id": 267,
        "kecamatan": "Majasari"
      },
      {
        "id": 3934,
        "kabkot_id": 267,
        "kecamatan": "Mandalawangi"
      },
      {
        "id": 3935,
        "kabkot_id": 267,
        "kecamatan": "Mekarjaya"
      },
      {
        "id": 3936,
        "kabkot_id": 267,
        "kecamatan": "Menes"
      },
      {
        "id": 3937,
        "kabkot_id": 267,
        "kecamatan": "Munjul"
      },
      {
        "id": 3938,
        "kabkot_id": 267,
        "kecamatan": "Pagelaran"
      },
      {
        "id": 3939,
        "kabkot_id": 267,
        "kecamatan": "Pandeglang"
      },
      {
        "id": 3940,
        "kabkot_id": 267,
        "kecamatan": "Panimbang"
      },
      {
        "id": 3941,
        "kabkot_id": 267,
        "kecamatan": "Patia"
      },
      {
        "id": 3942,
        "kabkot_id": 267,
        "kecamatan": "Picung"
      },
      {
        "id": 3943,
        "kabkot_id": 267,
        "kecamatan": "Pulosari"
      },
      {
        "id": 3944,
        "kabkot_id": 267,
        "kecamatan": "Saketi"
      },
      {
        "id": 3945,
        "kabkot_id": 267,
        "kecamatan": "Sindangresmi"
      },
      {
        "id": 3946,
        "kabkot_id": 267,
        "kecamatan": "Sobang"
      },
      {
        "id": 3947,
        "kabkot_id": 267,
        "kecamatan": "Sukaresmi"
      },
      {
        "id": 3948,
        "kabkot_id": 267,
        "kecamatan": "Sumur"
      },
      {
        "id": 3949,
        "kabkot_id": 268,
        "kecamatan": "Anyar"
      },
      {
        "id": 3950,
        "kabkot_id": 268,
        "kecamatan": "Bandung"
      },
      {
        "id": 3951,
        "kabkot_id": 268,
        "kecamatan": "Baros"
      },
      {
        "id": 3952,
        "kabkot_id": 268,
        "kecamatan": "Binuang"
      },
      {
        "id": 3953,
        "kabkot_id": 268,
        "kecamatan": "Bojonegara"
      },
      {
        "id": 3954,
        "kabkot_id": 268,
        "kecamatan": "Carenang (Cerenang)"
      },
      {
        "id": 3955,
        "kabkot_id": 268,
        "kecamatan": "Cikande"
      },
      {
        "id": 3956,
        "kabkot_id": 268,
        "kecamatan": "Cikeusal"
      },
      {
        "id": 3957,
        "kabkot_id": 268,
        "kecamatan": "Cinangka"
      },
      {
        "id": 3958,
        "kabkot_id": 268,
        "kecamatan": "Ciomas"
      },
      {
        "id": 3959,
        "kabkot_id": 268,
        "kecamatan": "Ciruas"
      },
      {
        "id": 3960,
        "kabkot_id": 268,
        "kecamatan": "Gunungsari"
      },
      {
        "id": 3961,
        "kabkot_id": 268,
        "kecamatan": "Jawilan"
      },
      {
        "id": 3962,
        "kabkot_id": 268,
        "kecamatan": "Kibin"
      },
      {
        "id": 3963,
        "kabkot_id": 268,
        "kecamatan": "Kopo"
      },
      {
        "id": 3964,
        "kabkot_id": 268,
        "kecamatan": "Kragilan"
      },
      {
        "id": 3965,
        "kabkot_id": 268,
        "kecamatan": "Kramatwatu"
      },
      {
        "id": 3966,
        "kabkot_id": 268,
        "kecamatan": "Lebak Wangi"
      },
      {
        "id": 3967,
        "kabkot_id": 268,
        "kecamatan": "Mancak"
      },
      {
        "id": 3968,
        "kabkot_id": 268,
        "kecamatan": "Pabuaran"
      },
      {
        "id": 3969,
        "kabkot_id": 268,
        "kecamatan": "Padarincang"
      },
      {
        "id": 3970,
        "kabkot_id": 268,
        "kecamatan": "Pamarayan"
      },
      {
        "id": 3971,
        "kabkot_id": 268,
        "kecamatan": "Petir"
      },
      {
        "id": 3972,
        "kabkot_id": 268,
        "kecamatan": "Pontang"
      },
      {
        "id": 3973,
        "kabkot_id": 268,
        "kecamatan": "Pulo Ampel"
      },
      {
        "id": 3974,
        "kabkot_id": 268,
        "kecamatan": "Tanara"
      },
      {
        "id": 3975,
        "kabkot_id": 268,
        "kecamatan": "Tirtayasa"
      },
      {
        "id": 3976,
        "kabkot_id": 268,
        "kecamatan": "Tunjung Teja"
      },
      {
        "id": 3977,
        "kabkot_id": 268,
        "kecamatan": "Waringin Kurung"
      },
      {
        "id": 3978,
        "kabkot_id": 269,
        "kecamatan": "Balaraja"
      },
      {
        "id": 3979,
        "kabkot_id": 269,
        "kecamatan": "Cikupa"
      },
      {
        "id": 3980,
        "kabkot_id": 269,
        "kecamatan": "Cisauk"
      },
      {
        "id": 3981,
        "kabkot_id": 269,
        "kecamatan": "Cisoka"
      },
      {
        "id": 3982,
        "kabkot_id": 269,
        "kecamatan": "Curug"
      },
      {
        "id": 3983,
        "kabkot_id": 269,
        "kecamatan": "Gunung Kaler"
      },
      {
        "id": 3984,
        "kabkot_id": 269,
        "kecamatan": "Jambe"
      },
      {
        "id": 3985,
        "kabkot_id": 269,
        "kecamatan": "Jayanti"
      },
      {
        "id": 3986,
        "kabkot_id": 269,
        "kecamatan": "Kelapa Dua"
      },
      {
        "id": 3987,
        "kabkot_id": 269,
        "kecamatan": "Kemiri"
      },
      {
        "id": 3988,
        "kabkot_id": 269,
        "kecamatan": "Kosambi"
      },
      {
        "id": 3989,
        "kabkot_id": 269,
        "kecamatan": "Kresek"
      },
      {
        "id": 3990,
        "kabkot_id": 269,
        "kecamatan": "Kronjo"
      },
      {
        "id": 3991,
        "kabkot_id": 269,
        "kecamatan": "Legok"
      },
      {
        "id": 3992,
        "kabkot_id": 269,
        "kecamatan": "Mauk"
      },
      {
        "id": 3993,
        "kabkot_id": 269,
        "kecamatan": "Mekar Baru"
      },
      {
        "id": 3994,
        "kabkot_id": 269,
        "kecamatan": "Pagedangan"
      },
      {
        "id": 3995,
        "kabkot_id": 269,
        "kecamatan": "Pakuhaji"
      },
      {
        "id": 3996,
        "kabkot_id": 269,
        "kecamatan": "Panongan"
      },
      {
        "id": 3997,
        "kabkot_id": 269,
        "kecamatan": "Pasar Kemis"
      },
      {
        "id": 3998,
        "kabkot_id": 269,
        "kecamatan": "Rajeg"
      },
      {
        "id": 3999,
        "kabkot_id": 269,
        "kecamatan": "Sepatan"
      },
      {
        "id": 4000,
        "kabkot_id": 269,
        "kecamatan": "Sepatan Timur"
      },
      {
        "id": 4001,
        "kabkot_id": 269,
        "kecamatan": "Sindang Jaya"
      },
      {
        "id": 4002,
        "kabkot_id": 269,
        "kecamatan": "Solear"
      },
      {
        "id": 4003,
        "kabkot_id": 269,
        "kecamatan": "Sukadiri"
      },
      {
        "id": 4004,
        "kabkot_id": 269,
        "kecamatan": "Sukamulya"
      },
      {
        "id": 4005,
        "kabkot_id": 269,
        "kecamatan": "Teluknaga"
      },
      {
        "id": 4006,
        "kabkot_id": 269,
        "kecamatan": "Tigaraksa"
      },
      {
        "id": 4007,
        "kabkot_id": 270,
        "kecamatan": "Cibeber"
      },
      {
        "id": 4008,
        "kabkot_id": 270,
        "kecamatan": "Cilegon"
      },
      {
        "id": 4009,
        "kabkot_id": 270,
        "kecamatan": "Citangkil"
      },
      {
        "id": 4010,
        "kabkot_id": 270,
        "kecamatan": "Ciwandan"
      },
      {
        "id": 4011,
        "kabkot_id": 270,
        "kecamatan": "Gerogol"
      },
      {
        "id": 4012,
        "kabkot_id": 270,
        "kecamatan": "Jombang"
      },
      {
        "id": 4013,
        "kabkot_id": 270,
        "kecamatan": "Pulomerak"
      },
      {
        "id": 4014,
        "kabkot_id": 270,
        "kecamatan": "Purwakarta"
      },
      {
        "id": 4015,
        "kabkot_id": 271,
        "kecamatan": "Cipocok Jaya"
      },
      {
        "id": 4016,
        "kabkot_id": 271,
        "kecamatan": "Curug"
      },
      {
        "id": 4017,
        "kabkot_id": 271,
        "kecamatan": "Kasemen"
      },
      {
        "id": 4018,
        "kabkot_id": 271,
        "kecamatan": "Serang"
      },
      {
        "id": 4019,
        "kabkot_id": 271,
        "kecamatan": "Taktakan"
      },
      {
        "id": 4020,
        "kabkot_id": 271,
        "kecamatan": "Walantaka"
      },
      {
        "id": 4021,
        "kabkot_id": 272,
        "kecamatan": "Batuceper"
      },
      {
        "id": 4022,
        "kabkot_id": 272,
        "kecamatan": "Benda"
      },
      {
        "id": 4023,
        "kabkot_id": 272,
        "kecamatan": "Cibodas"
      },
      {
        "id": 4024,
        "kabkot_id": 272,
        "kecamatan": "Ciledug"
      },
      {
        "id": 4025,
        "kabkot_id": 272,
        "kecamatan": "Cipondoh"
      },
      {
        "id": 4026,
        "kabkot_id": 272,
        "kecamatan": "Jatiuwung"
      },
      {
        "id": 4027,
        "kabkot_id": 272,
        "kecamatan": "Karang Tengah"
      },
      {
        "id": 4028,
        "kabkot_id": 272,
        "kecamatan": "Karawaci"
      },
      {
        "id": 4029,
        "kabkot_id": 272,
        "kecamatan": "Larangan"
      },
      {
        "id": 4030,
        "kabkot_id": 272,
        "kecamatan": "Neglasari"
      },
      {
        "id": 4031,
        "kabkot_id": 272,
        "kecamatan": "Periuk"
      },
      {
        "id": 4032,
        "kabkot_id": 272,
        "kecamatan": "Pinang (Penang)"
      },
      {
        "id": 4033,
        "kabkot_id": 272,
        "kecamatan": "Tangerang"
      },
      {
        "id": 4034,
        "kabkot_id": 273,
        "kecamatan": "Ciputat"
      },
      {
        "id": 4035,
        "kabkot_id": 273,
        "kecamatan": "Ciputat Timur"
      },
      {
        "id": 4036,
        "kabkot_id": 273,
        "kecamatan": "Pamulang"
      },
      {
        "id": 4037,
        "kabkot_id": 273,
        "kecamatan": "Pondok Aren"
      },
      {
        "id": 4038,
        "kabkot_id": 273,
        "kecamatan": "Serpong"
      },
      {
        "id": 4039,
        "kabkot_id": 273,
        "kecamatan": "Serpong Utara"
      },
      {
        "id": 4040,
        "kabkot_id": 273,
        "kecamatan": "Setu"
      },
      {
        "id": 4041,
        "kabkot_id": 274,
        "kecamatan": "Abiansemal"
      },
      {
        "id": 4042,
        "kabkot_id": 274,
        "kecamatan": "Kuta"
      },
      {
        "id": 4043,
        "kabkot_id": 274,
        "kecamatan": "Kuta Selatan"
      },
      {
        "id": 4044,
        "kabkot_id": 274,
        "kecamatan": "Kuta Utara"
      },
      {
        "id": 4045,
        "kabkot_id": 274,
        "kecamatan": "Mengwi"
      },
      {
        "id": 4046,
        "kabkot_id": 274,
        "kecamatan": "Petang"
      },
      {
        "id": 4047,
        "kabkot_id": 275,
        "kecamatan": "Bangli"
      },
      {
        "id": 4048,
        "kabkot_id": 275,
        "kecamatan": "Kintamani"
      },
      {
        "id": 4049,
        "kabkot_id": 275,
        "kecamatan": "Susut"
      },
      {
        "id": 4050,
        "kabkot_id": 275,
        "kecamatan": "Tembuku"
      },
      {
        "id": 4051,
        "kabkot_id": 276,
        "kecamatan": "Banjar"
      },
      {
        "id": 4052,
        "kabkot_id": 276,
        "kecamatan": "Buleleng"
      },
      {
        "id": 4053,
        "kabkot_id": 276,
        "kecamatan": "Busungbiu"
      },
      {
        "id": 4054,
        "kabkot_id": 276,
        "kecamatan": "Gerokgak"
      },
      {
        "id": 4055,
        "kabkot_id": 276,
        "kecamatan": "Kubutambahan"
      },
      {
        "id": 4056,
        "kabkot_id": 276,
        "kecamatan": "Sawan"
      },
      {
        "id": 4057,
        "kabkot_id": 276,
        "kecamatan": "Seririt"
      },
      {
        "id": 4058,
        "kabkot_id": 276,
        "kecamatan": "Sukasada"
      },
      {
        "id": 4059,
        "kabkot_id": 276,
        "kecamatan": "Tejakula"
      },
      {
        "id": 4060,
        "kabkot_id": 277,
        "kecamatan": "Belah Batuh (Blahbatuh)"
      },
      {
        "id": 4061,
        "kabkot_id": 277,
        "kecamatan": "Gianyar"
      },
      {
        "id": 4062,
        "kabkot_id": 277,
        "kecamatan": "Payangan"
      },
      {
        "id": 4063,
        "kabkot_id": 277,
        "kecamatan": "Sukawati"
      },
      {
        "id": 4064,
        "kabkot_id": 277,
        "kecamatan": "Tampak Siring"
      },
      {
        "id": 4065,
        "kabkot_id": 277,
        "kecamatan": "Tegallalang"
      },
      {
        "id": 4066,
        "kabkot_id": 277,
        "kecamatan": "Ubud"
      },
      {
        "id": 4067,
        "kabkot_id": 278,
        "kecamatan": "Jembrana"
      },
      {
        "id": 4068,
        "kabkot_id": 278,
        "kecamatan": "Melaya"
      },
      {
        "id": 4069,
        "kabkot_id": 278,
        "kecamatan": "Mendoyo"
      },
      {
        "id": 4070,
        "kabkot_id": 278,
        "kecamatan": "Negara"
      },
      {
        "id": 4071,
        "kabkot_id": 278,
        "kecamatan": "Pekutatan"
      },
      {
        "id": 4072,
        "kabkot_id": 279,
        "kecamatan": "Abang"
      },
      {
        "id": 4073,
        "kabkot_id": 279,
        "kecamatan": "Bebandem"
      },
      {
        "id": 4074,
        "kabkot_id": 279,
        "kecamatan": "Karang Asem"
      },
      {
        "id": 4075,
        "kabkot_id": 279,
        "kecamatan": "Kubu"
      },
      {
        "id": 4076,
        "kabkot_id": 279,
        "kecamatan": "Manggis"
      },
      {
        "id": 4077,
        "kabkot_id": 279,
        "kecamatan": "Rendang"
      },
      {
        "id": 4078,
        "kabkot_id": 279,
        "kecamatan": "Selat"
      },
      {
        "id": 4079,
        "kabkot_id": 279,
        "kecamatan": "Sidemen"
      },
      {
        "id": 4080,
        "kabkot_id": 280,
        "kecamatan": "Banjarangkan"
      },
      {
        "id": 4081,
        "kabkot_id": 280,
        "kecamatan": "Dawan"
      },
      {
        "id": 4082,
        "kabkot_id": 280,
        "kecamatan": "Klungkung"
      },
      {
        "id": 4083,
        "kabkot_id": 280,
        "kecamatan": "Nusapenida"
      },
      {
        "id": 4084,
        "kabkot_id": 281,
        "kecamatan": "Baturiti"
      },
      {
        "id": 4085,
        "kabkot_id": 281,
        "kecamatan": "Kediri"
      },
      {
        "id": 4086,
        "kabkot_id": 281,
        "kecamatan": "Kerambitan"
      },
      {
        "id": 4087,
        "kabkot_id": 281,
        "kecamatan": "Marga"
      },
      {
        "id": 4088,
        "kabkot_id": 281,
        "kecamatan": "Penebel"
      },
      {
        "id": 4089,
        "kabkot_id": 281,
        "kecamatan": "Pupuan"
      },
      {
        "id": 4090,
        "kabkot_id": 281,
        "kecamatan": "Salemadeg Barat"
      },
      {
        "id": 4091,
        "kabkot_id": 281,
        "kecamatan": "Salemadeg Timur"
      },
      {
        "id": 4092,
        "kabkot_id": 281,
        "kecamatan": "Selemadeg"
      },
      {
        "id": 4093,
        "kabkot_id": 281,
        "kecamatan": "Tabanan"
      },
      {
        "id": 4094,
        "kabkot_id": 282,
        "kecamatan": "Denpasar Barat"
      },
      {
        "id": 4095,
        "kabkot_id": 282,
        "kecamatan": "Denpasar Selatan"
      },
      {
        "id": 4096,
        "kabkot_id": 282,
        "kecamatan": "Denpasar Timur"
      },
      {
        "id": 4097,
        "kabkot_id": 282,
        "kecamatan": "Denpasar Utara"
      },
      {
        "id": 4098,
        "kabkot_id": 283,
        "kecamatan": "Ambalawi"
      },
      {
        "id": 4099,
        "kabkot_id": 283,
        "kecamatan": "Belo"
      },
      {
        "id": 4100,
        "kabkot_id": 283,
        "kecamatan": "Bolo"
      },
      {
        "id": 4101,
        "kabkot_id": 283,
        "kecamatan": "Donggo"
      },
      {
        "id": 4102,
        "kabkot_id": 283,
        "kecamatan": "Lambitu"
      },
      {
        "id": 4103,
        "kabkot_id": 283,
        "kecamatan": "Lambu"
      },
      {
        "id": 4104,
        "kabkot_id": 283,
        "kecamatan": "Langgudu"
      },
      {
        "id": 4105,
        "kabkot_id": 283,
        "kecamatan": "Madapangga"
      },
      {
        "id": 4106,
        "kabkot_id": 283,
        "kecamatan": "Monta"
      },
      {
        "id": 4107,
        "kabkot_id": 283,
        "kecamatan": "Palibelo"
      },
      {
        "id": 4108,
        "kabkot_id": 283,
        "kecamatan": "Parado"
      },
      {
        "id": 4109,
        "kabkot_id": 283,
        "kecamatan": "Sanggar"
      },
      {
        "id": 4110,
        "kabkot_id": 283,
        "kecamatan": "Sape"
      },
      {
        "id": 4111,
        "kabkot_id": 283,
        "kecamatan": "Soromandi"
      },
      {
        "id": 4112,
        "kabkot_id": 283,
        "kecamatan": "Tambora"
      },
      {
        "id": 4113,
        "kabkot_id": 283,
        "kecamatan": "Wawo"
      },
      {
        "id": 4114,
        "kabkot_id": 283,
        "kecamatan": "Wera"
      },
      {
        "id": 4115,
        "kabkot_id": 283,
        "kecamatan": "Woha"
      },
      {
        "id": 4116,
        "kabkot_id": 284,
        "kecamatan": "Dompu"
      },
      {
        "id": 4117,
        "kabkot_id": 284,
        "kecamatan": "Hu'u"
      },
      {
        "id": 4118,
        "kabkot_id": 284,
        "kecamatan": "Kempo"
      },
      {
        "id": 4119,
        "kabkot_id": 284,
        "kecamatan": "Kilo"
      },
      {
        "id": 4120,
        "kabkot_id": 284,
        "kecamatan": "Manggalewa"
      },
      {
        "id": 4121,
        "kabkot_id": 284,
        "kecamatan": "Pajo"
      },
      {
        "id": 4122,
        "kabkot_id": 284,
        "kecamatan": "Pekat"
      },
      {
        "id": 4123,
        "kabkot_id": 284,
        "kecamatan": "Woja"
      },
      {
        "id": 4124,
        "kabkot_id": 285,
        "kecamatan": "Batu Layar"
      },
      {
        "id": 4125,
        "kabkot_id": 285,
        "kecamatan": "Gerung"
      },
      {
        "id": 4126,
        "kabkot_id": 285,
        "kecamatan": "Gunungsari"
      },
      {
        "id": 4127,
        "kabkot_id": 285,
        "kecamatan": "Kediri"
      },
      {
        "id": 4128,
        "kabkot_id": 285,
        "kecamatan": "Kuripan"
      },
      {
        "id": 4129,
        "kabkot_id": 285,
        "kecamatan": "Labuapi"
      },
      {
        "id": 4130,
        "kabkot_id": 285,
        "kecamatan": "Lembar"
      },
      {
        "id": 4131,
        "kabkot_id": 285,
        "kecamatan": "Lingsar"
      },
      {
        "id": 4132,
        "kabkot_id": 285,
        "kecamatan": "Narmada"
      },
      {
        "id": 4133,
        "kabkot_id": 285,
        "kecamatan": "Sekotong"
      },
      {
        "id": 4134,
        "kabkot_id": 286,
        "kecamatan": "Batukliang"
      },
      {
        "id": 4135,
        "kabkot_id": 286,
        "kecamatan": "Batukliang Utara"
      },
      {
        "id": 4136,
        "kabkot_id": 286,
        "kecamatan": "Janapria"
      },
      {
        "id": 4137,
        "kabkot_id": 286,
        "kecamatan": "Jonggat"
      },
      {
        "id": 4138,
        "kabkot_id": 286,
        "kecamatan": "Kopang"
      },
      {
        "id": 4139,
        "kabkot_id": 286,
        "kecamatan": "Praya"
      },
      {
        "id": 4140,
        "kabkot_id": 286,
        "kecamatan": "Praya Barat"
      },
      {
        "id": 4141,
        "kabkot_id": 286,
        "kecamatan": "Praya Barat Daya"
      },
      {
        "id": 4142,
        "kabkot_id": 286,
        "kecamatan": "Praya Tengah"
      },
      {
        "id": 4143,
        "kabkot_id": 286,
        "kecamatan": "Praya Timur"
      },
      {
        "id": 4144,
        "kabkot_id": 286,
        "kecamatan": "Pringgarata"
      },
      {
        "id": 4145,
        "kabkot_id": 286,
        "kecamatan": "Pujut"
      },
      {
        "id": 4146,
        "kabkot_id": 287,
        "kecamatan": "Aikmel"
      },
      {
        "id": 4147,
        "kabkot_id": 287,
        "kecamatan": "Jerowaru"
      },
      {
        "id": 4148,
        "kabkot_id": 287,
        "kecamatan": "Keruak"
      },
      {
        "id": 4149,
        "kabkot_id": 287,
        "kecamatan": "Labuhan Haji"
      },
      {
        "id": 4150,
        "kabkot_id": 287,
        "kecamatan": "Masbagik"
      },
      {
        "id": 4151,
        "kabkot_id": 287,
        "kecamatan": "Montong Gading"
      },
      {
        "id": 4152,
        "kabkot_id": 287,
        "kecamatan": "Pringgabaya"
      },
      {
        "id": 4153,
        "kabkot_id": 287,
        "kecamatan": "Pringgasela"
      },
      {
        "id": 4154,
        "kabkot_id": 287,
        "kecamatan": "Sakra"
      },
      {
        "id": 4155,
        "kabkot_id": 287,
        "kecamatan": "Sakra Barat"
      },
      {
        "id": 4156,
        "kabkot_id": 287,
        "kecamatan": "Sakra Timur"
      },
      {
        "id": 4157,
        "kabkot_id": 287,
        "kecamatan": "Sambalia (Sambelia)"
      },
      {
        "id": 4158,
        "kabkot_id": 287,
        "kecamatan": "Selong"
      },
      {
        "id": 4159,
        "kabkot_id": 287,
        "kecamatan": "Sembalun"
      },
      {
        "id": 4160,
        "kabkot_id": 287,
        "kecamatan": "Sikur"
      },
      {
        "id": 4161,
        "kabkot_id": 287,
        "kecamatan": "Suela (Suwela)"
      },
      {
        "id": 4162,
        "kabkot_id": 287,
        "kecamatan": "Sukamulia"
      },
      {
        "id": 4163,
        "kabkot_id": 287,
        "kecamatan": "Suralaga"
      },
      {
        "id": 4164,
        "kabkot_id": 287,
        "kecamatan": "Terara"
      },
      {
        "id": 4165,
        "kabkot_id": 287,
        "kecamatan": "Wanasaba"
      },
      {
        "id": 4166,
        "kabkot_id": 288,
        "kecamatan": "Bayan"
      },
      {
        "id": 4167,
        "kabkot_id": 288,
        "kecamatan": "Gangga"
      },
      {
        "id": 4168,
        "kabkot_id": 288,
        "kecamatan": "Kayangan"
      },
      {
        "id": 4169,
        "kabkot_id": 288,
        "kecamatan": "Pemenang"
      },
      {
        "id": 4170,
        "kabkot_id": 288,
        "kecamatan": "Tanjung"
      },
      {
        "id": 4171,
        "kabkot_id": 289,
        "kecamatan": "Alas"
      },
      {
        "id": 4172,
        "kabkot_id": 289,
        "kecamatan": "Alas Barat"
      },
      {
        "id": 4173,
        "kabkot_id": 289,
        "kecamatan": "Batulanteh"
      },
      {
        "id": 4174,
        "kabkot_id": 289,
        "kecamatan": "Buer"
      },
      {
        "id": 4175,
        "kabkot_id": 289,
        "kecamatan": "Empang"
      },
      {
        "id": 4176,
        "kabkot_id": 289,
        "kecamatan": "Labangka"
      },
      {
        "id": 4177,
        "kabkot_id": 289,
        "kecamatan": "Labuhan Badas"
      },
      {
        "id": 4178,
        "kabkot_id": 289,
        "kecamatan": "Lantung"
      },
      {
        "id": 4179,
        "kabkot_id": 289,
        "kecamatan": "Lape (Lape Lopok)"
      },
      {
        "id": 4180,
        "kabkot_id": 289,
        "kecamatan": "Lenangguar"
      },
      {
        "id": 4181,
        "kabkot_id": 289,
        "kecamatan": "Lopok"
      },
      {
        "id": 4182,
        "kabkot_id": 289,
        "kecamatan": "Lunyuk"
      },
      {
        "id": 4183,
        "kabkot_id": 289,
        "kecamatan": "Maronge"
      },
      {
        "id": 4184,
        "kabkot_id": 289,
        "kecamatan": "Moyo Hilir"
      },
      {
        "id": 4185,
        "kabkot_id": 289,
        "kecamatan": "Moyo Hulu"
      },
      {
        "id": 4186,
        "kabkot_id": 289,
        "kecamatan": "Moyo Utara"
      },
      {
        "id": 4187,
        "kabkot_id": 289,
        "kecamatan": "Orong Telu"
      },
      {
        "id": 4188,
        "kabkot_id": 289,
        "kecamatan": "Plampang"
      },
      {
        "id": 4189,
        "kabkot_id": 289,
        "kecamatan": "Rhee"
      },
      {
        "id": 4190,
        "kabkot_id": 289,
        "kecamatan": "Ropang"
      },
      {
        "id": 4191,
        "kabkot_id": 289,
        "kecamatan": "Sumbawa"
      },
      {
        "id": 4192,
        "kabkot_id": 289,
        "kecamatan": "Tarano"
      },
      {
        "id": 4193,
        "kabkot_id": 289,
        "kecamatan": "Unter Iwes (Unterwiris)"
      },
      {
        "id": 4194,
        "kabkot_id": 289,
        "kecamatan": "Utan"
      },
      {
        "id": 4195,
        "kabkot_id": 290,
        "kecamatan": "Brang Ene"
      },
      {
        "id": 4196,
        "kabkot_id": 290,
        "kecamatan": "Brang Rea"
      },
      {
        "id": 4197,
        "kabkot_id": 290,
        "kecamatan": "Jereweh"
      },
      {
        "id": 4198,
        "kabkot_id": 290,
        "kecamatan": "Maluk"
      },
      {
        "id": 4199,
        "kabkot_id": 290,
        "kecamatan": "Poto Tano"
      },
      {
        "id": 4200,
        "kabkot_id": 290,
        "kecamatan": "Sateluk (Seteluk)"
      },
      {
        "id": 4201,
        "kabkot_id": 290,
        "kecamatan": "Sekongkang"
      },
      {
        "id": 4202,
        "kabkot_id": 290,
        "kecamatan": "Taliwang"
      },
      {
        "id": 4203,
        "kabkot_id": 291,
        "kecamatan": "Asakota"
      },
      {
        "id": 4204,
        "kabkot_id": 291,
        "kecamatan": "Mpunda"
      },
      {
        "id": 4205,
        "kabkot_id": 291,
        "kecamatan": "Raba"
      },
      {
        "id": 4206,
        "kabkot_id": 291,
        "kecamatan": "Rasanae Barat"
      },
      {
        "id": 4207,
        "kabkot_id": 291,
        "kecamatan": "Rasanae Timur"
      },
      {
        "id": 4208,
        "kabkot_id": 292,
        "kecamatan": "Ampenan"
      },
      {
        "id": 4209,
        "kabkot_id": 292,
        "kecamatan": "Cakranegara"
      },
      {
        "id": 4210,
        "kabkot_id": 292,
        "kecamatan": "Mataram"
      },
      {
        "id": 4211,
        "kabkot_id": 292,
        "kecamatan": "Sandubaya (Sandujaya)"
      },
      {
        "id": 4212,
        "kabkot_id": 292,
        "kecamatan": "Sekarbela"
      },
      {
        "id": 4213,
        "kabkot_id": 292,
        "kecamatan": "Selaparang (Selaprang)"
      },
      {
        "id": 4214,
        "kabkot_id": 293,
        "kecamatan": "Alor Barat Daya"
      },
      {
        "id": 4215,
        "kabkot_id": 293,
        "kecamatan": "Alor Barat Laut"
      },
      {
        "id": 4216,
        "kabkot_id": 293,
        "kecamatan": "Alor Selatan"
      },
      {
        "id": 4217,
        "kabkot_id": 293,
        "kecamatan": "Alor Tengah Utara"
      },
      {
        "id": 4218,
        "kabkot_id": 293,
        "kecamatan": "Alor Timur"
      },
      {
        "id": 4219,
        "kabkot_id": 293,
        "kecamatan": "Alor Timur Laut"
      },
      {
        "id": 4220,
        "kabkot_id": 293,
        "kecamatan": "Kabola"
      },
      {
        "id": 4221,
        "kabkot_id": 293,
        "kecamatan": "Lembur"
      },
      {
        "id": 4222,
        "kabkot_id": 293,
        "kecamatan": "Mataru"
      },
      {
        "id": 4223,
        "kabkot_id": 293,
        "kecamatan": "Pantar"
      },
      {
        "id": 4224,
        "kabkot_id": 293,
        "kecamatan": "Pantar Barat"
      },
      {
        "id": 4225,
        "kabkot_id": 293,
        "kecamatan": "Pantar Barat Laut"
      },
      {
        "id": 4226,
        "kabkot_id": 293,
        "kecamatan": "Pantar Tengah"
      },
      {
        "id": 4227,
        "kabkot_id": 293,
        "kecamatan": "Pantar Timur"
      },
      {
        "id": 4228,
        "kabkot_id": 293,
        "kecamatan": "Pulau Pura"
      },
      {
        "id": 4229,
        "kabkot_id": 293,
        "kecamatan": "Pureman"
      },
      {
        "id": 4230,
        "kabkot_id": 293,
        "kecamatan": "Teluk Mutiara"
      },
      {
        "id": 4231,
        "kabkot_id": 294,
        "kecamatan": "Atambua Barat"
      },
      {
        "id": 4232,
        "kabkot_id": 294,
        "kecamatan": "Atambua Kota"
      },
      {
        "id": 4233,
        "kabkot_id": 294,
        "kecamatan": "Atambua Selatan"
      },
      {
        "id": 4234,
        "kabkot_id": 294,
        "kecamatan": "Kakuluk Mesak"
      },
      {
        "id": 4235,
        "kabkot_id": 294,
        "kecamatan": "Lamaknen"
      },
      {
        "id": 4236,
        "kabkot_id": 294,
        "kecamatan": "Lamaknen Selatan"
      },
      {
        "id": 4237,
        "kabkot_id": 294,
        "kecamatan": "Lasiolat"
      },
      {
        "id": 4238,
        "kabkot_id": 294,
        "kecamatan": "Nanaet Duabesi"
      },
      {
        "id": 4239,
        "kabkot_id": 294,
        "kecamatan": "Raihat"
      },
      {
        "id": 4240,
        "kabkot_id": 294,
        "kecamatan": "Raimanuk"
      },
      {
        "id": 4241,
        "kabkot_id": 294,
        "kecamatan": "Tasifeto Barat"
      },
      {
        "id": 4242,
        "kabkot_id": 294,
        "kecamatan": "Tasifeto Timur"
      },
      {
        "id": 4243,
        "kabkot_id": 295,
        "kecamatan": "Detukeli"
      },
      {
        "id": 4244,
        "kabkot_id": 295,
        "kecamatan": "Detusoko"
      },
      {
        "id": 4245,
        "kabkot_id": 295,
        "kecamatan": "Ende"
      },
      {
        "id": 4246,
        "kabkot_id": 295,
        "kecamatan": "Ende Selatan"
      },
      {
        "id": 4247,
        "kabkot_id": 295,
        "kecamatan": "Ende Tengah"
      },
      {
        "id": 4248,
        "kabkot_id": 295,
        "kecamatan": "Ende Timur"
      },
      {
        "id": 4249,
        "kabkot_id": 295,
        "kecamatan": "Ende Utara"
      },
      {
        "id": 4250,
        "kabkot_id": 295,
        "kecamatan": "Kelimutu"
      },
      {
        "id": 4251,
        "kabkot_id": 295,
        "kecamatan": "Kota Baru"
      },
      {
        "id": 4252,
        "kabkot_id": 295,
        "kecamatan": "Lepembusu Kelisoke"
      },
      {
        "id": 4253,
        "kabkot_id": 295,
        "kecamatan": "Lio Timur"
      },
      {
        "id": 4254,
        "kabkot_id": 295,
        "kecamatan": "Maukaro"
      },
      {
        "id": 4255,
        "kabkot_id": 295,
        "kecamatan": "Maurole"
      },
      {
        "id": 4256,
        "kabkot_id": 295,
        "kecamatan": "Nangapanda"
      },
      {
        "id": 4257,
        "kabkot_id": 295,
        "kecamatan": "Ndona"
      },
      {
        "id": 4258,
        "kabkot_id": 295,
        "kecamatan": "Ndona Timur"
      },
      {
        "id": 4259,
        "kabkot_id": 295,
        "kecamatan": "Ndori"
      },
      {
        "id": 4260,
        "kabkot_id": 295,
        "kecamatan": "Pulau Ende"
      },
      {
        "id": 4261,
        "kabkot_id": 295,
        "kecamatan": "Wewaria"
      },
      {
        "id": 4262,
        "kabkot_id": 295,
        "kecamatan": "Wolojita"
      },
      {
        "id": 4263,
        "kabkot_id": 295,
        "kecamatan": "Wolowaru"
      },
      {
        "id": 4264,
        "kabkot_id": 296,
        "kecamatan": "Adonara"
      },
      {
        "id": 4265,
        "kabkot_id": 296,
        "kecamatan": "Adonara Barat"
      },
      {
        "id": 4266,
        "kabkot_id": 296,
        "kecamatan": "Adonara Tengah"
      },
      {
        "id": 4267,
        "kabkot_id": 296,
        "kecamatan": "Adonara Timur"
      },
      {
        "id": 4268,
        "kabkot_id": 296,
        "kecamatan": "Demon Pagong"
      },
      {
        "id": 4269,
        "kabkot_id": 296,
        "kecamatan": "Ile Boleng"
      },
      {
        "id": 4270,
        "kabkot_id": 296,
        "kecamatan": "Ile Bura"
      },
      {
        "id": 4271,
        "kabkot_id": 296,
        "kecamatan": "Ile Mandiri"
      },
      {
        "id": 4272,
        "kabkot_id": 296,
        "kecamatan": "Kelubagolit"
      },
      {
        "id": 4273,
        "kabkot_id": 296,
        "kecamatan": "Larantuka"
      },
      {
        "id": 4274,
        "kabkot_id": 296,
        "kecamatan": "Lewolema"
      },
      {
        "id": 4275,
        "kabkot_id": 296,
        "kecamatan": "Solor Barat"
      },
      {
        "id": 4276,
        "kabkot_id": 296,
        "kecamatan": "Solor Selatan"
      },
      {
        "id": 4277,
        "kabkot_id": 296,
        "kecamatan": "Solor Timur"
      },
      {
        "id": 4278,
        "kabkot_id": 296,
        "kecamatan": "Tanjung Bunga"
      },
      {
        "id": 4279,
        "kabkot_id": 296,
        "kecamatan": "Titehena"
      },
      {
        "id": 4280,
        "kabkot_id": 296,
        "kecamatan": "Witihama"
      },
      {
        "id": 4281,
        "kabkot_id": 296,
        "kecamatan": "Wotan Ulumando"
      },
      {
        "id": 4282,
        "kabkot_id": 296,
        "kecamatan": "Wulanggitang"
      },
      {
        "id": 4283,
        "kabkot_id": 297,
        "kecamatan": "Amabi Oefeto"
      },
      {
        "id": 4284,
        "kabkot_id": 297,
        "kecamatan": "Amabi Oefeto Timur"
      },
      {
        "id": 4285,
        "kabkot_id": 297,
        "kecamatan": "Amarasi"
      },
      {
        "id": 4286,
        "kabkot_id": 297,
        "kecamatan": "Amarasi Barat"
      },
      {
        "id": 4287,
        "kabkot_id": 297,
        "kecamatan": "Amarasi Selatan"
      },
      {
        "id": 4288,
        "kabkot_id": 297,
        "kecamatan": "Amarasi Timur"
      },
      {
        "id": 4289,
        "kabkot_id": 297,
        "kecamatan": "Amfoang Barat Daya"
      },
      {
        "id": 4290,
        "kabkot_id": 297,
        "kecamatan": "Amfoang Barat Laut"
      },
      {
        "id": 4291,
        "kabkot_id": 297,
        "kecamatan": "Amfoang Selatan"
      },
      {
        "id": 4292,
        "kabkot_id": 297,
        "kecamatan": "Amfoang Tengah"
      },
      {
        "id": 4293,
        "kabkot_id": 297,
        "kecamatan": "Amfoang Timur"
      },
      {
        "id": 4294,
        "kabkot_id": 297,
        "kecamatan": "Amfoang Utara"
      },
      {
        "id": 4295,
        "kabkot_id": 297,
        "kecamatan": "Fatuleu"
      },
      {
        "id": 4296,
        "kabkot_id": 297,
        "kecamatan": "Fatuleu Barat"
      },
      {
        "id": 4297,
        "kabkot_id": 297,
        "kecamatan": "Fatuleu Tengah"
      },
      {
        "id": 4298,
        "kabkot_id": 297,
        "kecamatan": "Kupang Barat"
      },
      {
        "id": 4299,
        "kabkot_id": 297,
        "kecamatan": "Kupang Tengah"
      },
      {
        "id": 4300,
        "kabkot_id": 297,
        "kecamatan": "Kupang Timur"
      },
      {
        "id": 4301,
        "kabkot_id": 297,
        "kecamatan": "Nekamese"
      },
      {
        "id": 4302,
        "kabkot_id": 297,
        "kecamatan": "Semau"
      },
      {
        "id": 4303,
        "kabkot_id": 297,
        "kecamatan": "Semau Selatan"
      },
      {
        "id": 4304,
        "kabkot_id": 297,
        "kecamatan": "Sulamu"
      },
      {
        "id": 4305,
        "kabkot_id": 297,
        "kecamatan": "Taebenu"
      },
      {
        "id": 4306,
        "kabkot_id": 297,
        "kecamatan": "Takari"
      },
      {
        "id": 4307,
        "kabkot_id": 298,
        "kecamatan": "Atadei"
      },
      {
        "id": 4308,
        "kabkot_id": 298,
        "kecamatan": "Buyasuri"
      },
      {
        "id": 4309,
        "kabkot_id": 298,
        "kecamatan": "Ile Ape"
      },
      {
        "id": 4310,
        "kabkot_id": 298,
        "kecamatan": "Ile Ape Timur"
      },
      {
        "id": 4311,
        "kabkot_id": 298,
        "kecamatan": "Lebatukan"
      },
      {
        "id": 4312,
        "kabkot_id": 298,
        "kecamatan": "Naga Wutung"
      },
      {
        "id": 4313,
        "kabkot_id": 298,
        "kecamatan": "Nubatukan"
      },
      {
        "id": 4314,
        "kabkot_id": 298,
        "kecamatan": "Omesuri"
      },
      {
        "id": 4315,
        "kabkot_id": 298,
        "kecamatan": "Wulandoni"
      },
      {
        "id": 4316,
        "kabkot_id": 299,
        "kecamatan": "Botin Leobele"
      },
      {
        "id": 4317,
        "kabkot_id": 299,
        "kecamatan": "Io Kufeu"
      },
      {
        "id": 4318,
        "kabkot_id": 299,
        "kecamatan": "Kobalima"
      },
      {
        "id": 4319,
        "kabkot_id": 299,
        "kecamatan": "Kobalima Timur"
      },
      {
        "id": 4320,
        "kabkot_id": 299,
        "kecamatan": "Laenmanen"
      },
      {
        "id": 4321,
        "kabkot_id": 299,
        "kecamatan": "Malaka Barat"
      },
      {
        "id": 4322,
        "kabkot_id": 299,
        "kecamatan": "Malaka Tengah"
      },
      {
        "id": 4323,
        "kabkot_id": 299,
        "kecamatan": "Malaka Timur"
      },
      {
        "id": 4324,
        "kabkot_id": 299,
        "kecamatan": "Rinhat"
      },
      {
        "id": 4325,
        "kabkot_id": 299,
        "kecamatan": "Sasitamean"
      },
      {
        "id": 4326,
        "kabkot_id": 299,
        "kecamatan": "Weliman"
      },
      {
        "id": 4327,
        "kabkot_id": 299,
        "kecamatan": "Wewiku"
      },
      {
        "id": 4328,
        "kabkot_id": 300,
        "kecamatan": "Cibal"
      },
      {
        "id": 4329,
        "kabkot_id": 300,
        "kecamatan": "Cibal Barat"
      },
      {
        "id": 4330,
        "kabkot_id": 300,
        "kecamatan": "Langke Rembong"
      },
      {
        "id": 4331,
        "kabkot_id": 300,
        "kecamatan": "Lelak"
      },
      {
        "id": 4332,
        "kabkot_id": 300,
        "kecamatan": "Rahong Utara"
      },
      {
        "id": 4333,
        "kabkot_id": 300,
        "kecamatan": "Reok"
      },
      {
        "id": 4334,
        "kabkot_id": 300,
        "kecamatan": "Reok Barat"
      },
      {
        "id": 4335,
        "kabkot_id": 300,
        "kecamatan": "Ruteng"
      },
      {
        "id": 4336,
        "kabkot_id": 300,
        "kecamatan": "Satar Mese"
      },
      {
        "id": 4337,
        "kabkot_id": 300,
        "kecamatan": "Satar Mese Barat"
      },
      {
        "id": 4338,
        "kabkot_id": 300,
        "kecamatan": "Wae Rii"
      },
      {
        "id": 4339,
        "kabkot_id": 301,
        "kecamatan": "Boleng"
      },
      {
        "id": 4340,
        "kabkot_id": 301,
        "kecamatan": "Komodo"
      },
      {
        "id": 4341,
        "kabkot_id": 301,
        "kecamatan": "Kuwus"
      },
      {
        "id": 4342,
        "kabkot_id": 301,
        "kecamatan": "Lembor"
      },
      {
        "id": 4343,
        "kabkot_id": 301,
        "kecamatan": "Lembor Selatan"
      },
      {
        "id": 4344,
        "kabkot_id": 301,
        "kecamatan": "Macang Pacar"
      },
      {
        "id": 4345,
        "kabkot_id": 301,
        "kecamatan": "Mbeliling"
      },
      {
        "id": 4346,
        "kabkot_id": 301,
        "kecamatan": "Ndoso"
      },
      {
        "id": 4347,
        "kabkot_id": 301,
        "kecamatan": "Sano Nggoang"
      },
      {
        "id": 4348,
        "kabkot_id": 301,
        "kecamatan": "Welak"
      },
      {
        "id": 4349,
        "kabkot_id": 302,
        "kecamatan": "Borong"
      },
      {
        "id": 4350,
        "kabkot_id": 302,
        "kecamatan": "Elar"
      },
      {
        "id": 4351,
        "kabkot_id": 302,
        "kecamatan": "Elar Selatan"
      },
      {
        "id": 4352,
        "kabkot_id": 302,
        "kecamatan": "Kota Komba"
      },
      {
        "id": 4353,
        "kabkot_id": 302,
        "kecamatan": "Lamba Leda"
      },
      {
        "id": 4354,
        "kabkot_id": 302,
        "kecamatan": "Poco Ranaka"
      },
      {
        "id": 4355,
        "kabkot_id": 302,
        "kecamatan": "Poco Ranaka Timur"
      },
      {
        "id": 4356,
        "kabkot_id": 302,
        "kecamatan": "Rana Mese"
      },
      {
        "id": 4357,
        "kabkot_id": 302,
        "kecamatan": "Sambi Rampas"
      },
      {
        "id": 4358,
        "kabkot_id": 303,
        "kecamatan": "Aesesa"
      },
      {
        "id": 4359,
        "kabkot_id": 303,
        "kecamatan": "Aesesa Selatan"
      },
      {
        "id": 4360,
        "kabkot_id": 303,
        "kecamatan": "Boawae"
      },
      {
        "id": 4361,
        "kabkot_id": 303,
        "kecamatan": "Keo Tengah"
      },
      {
        "id": 4362,
        "kabkot_id": 303,
        "kecamatan": "Mauponggo"
      },
      {
        "id": 4363,
        "kabkot_id": 303,
        "kecamatan": "Nangaroro"
      },
      {
        "id": 4364,
        "kabkot_id": 303,
        "kecamatan": "Wolowae"
      },
      {
        "id": 4365,
        "kabkot_id": 304,
        "kecamatan": "Aimere"
      },
      {
        "id": 4366,
        "kabkot_id": 304,
        "kecamatan": "Bajawa"
      },
      {
        "id": 4367,
        "kabkot_id": 304,
        "kecamatan": "Bajawa Utara"
      },
      {
        "id": 4368,
        "kabkot_id": 304,
        "kecamatan": "Golewa"
      },
      {
        "id": 4369,
        "kabkot_id": 304,
        "kecamatan": "Golewa Barat"
      },
      {
        "id": 4370,
        "kabkot_id": 304,
        "kecamatan": "Golewa Selatan"
      },
      {
        "id": 4371,
        "kabkot_id": 304,
        "kecamatan": "Inerie"
      },
      {
        "id": 4372,
        "kabkot_id": 304,
        "kecamatan": "Jerebuu"
      },
      {
        "id": 4373,
        "kabkot_id": 304,
        "kecamatan": "Riung"
      },
      {
        "id": 4374,
        "kabkot_id": 304,
        "kecamatan": "Riung Barat"
      },
      {
        "id": 4375,
        "kabkot_id": 304,
        "kecamatan": "Soa"
      },
      {
        "id": 4376,
        "kabkot_id": 304,
        "kecamatan": "Wolomeze (Riung Selatan)"
      },
      {
        "id": 4377,
        "kabkot_id": 305,
        "kecamatan": "Landu Leko"
      },
      {
        "id": 4378,
        "kabkot_id": 305,
        "kecamatan": "Lobalain"
      },
      {
        "id": 4379,
        "kabkot_id": 305,
        "kecamatan": "Ndao Nuse"
      },
      {
        "id": 4380,
        "kabkot_id": 305,
        "kecamatan": "Pantai Baru"
      },
      {
        "id": 4381,
        "kabkot_id": 305,
        "kecamatan": "Rote Barat"
      },
      {
        "id": 4382,
        "kabkot_id": 305,
        "kecamatan": "Rote Barat Daya"
      },
      {
        "id": 4383,
        "kabkot_id": 305,
        "kecamatan": "Rote Barat Laut"
      },
      {
        "id": 4384,
        "kabkot_id": 305,
        "kecamatan": "Rote Selatan"
      },
      {
        "id": 4385,
        "kabkot_id": 305,
        "kecamatan": "Rote Tengah"
      },
      {
        "id": 4386,
        "kabkot_id": 305,
        "kecamatan": "Rote Timur"
      },
      {
        "id": 4387,
        "kabkot_id": 306,
        "kecamatan": "Hawu Mehara"
      },
      {
        "id": 4388,
        "kabkot_id": 306,
        "kecamatan": "Raijua"
      },
      {
        "id": 4389,
        "kabkot_id": 306,
        "kecamatan": "Sabu Barat"
      },
      {
        "id": 4390,
        "kabkot_id": 306,
        "kecamatan": "Sabu Liae"
      },
      {
        "id": 4391,
        "kabkot_id": 306,
        "kecamatan": "Sabu Tengah"
      },
      {
        "id": 4392,
        "kabkot_id": 306,
        "kecamatan": "Sabu Timur"
      },
      {
        "id": 4393,
        "kabkot_id": 307,
        "kecamatan": "Alok"
      },
      {
        "id": 4394,
        "kabkot_id": 307,
        "kecamatan": "Alok Barat"
      },
      {
        "id": 4395,
        "kabkot_id": 307,
        "kecamatan": "Alok Timur"
      },
      {
        "id": 4396,
        "kabkot_id": 307,
        "kecamatan": "Bola"
      },
      {
        "id": 4397,
        "kabkot_id": 307,
        "kecamatan": "Doreng"
      },
      {
        "id": 4398,
        "kabkot_id": 307,
        "kecamatan": "Hewokloang"
      },
      {
        "id": 4399,
        "kabkot_id": 307,
        "kecamatan": "Kangae"
      },
      {
        "id": 4400,
        "kabkot_id": 307,
        "kecamatan": "Kewapante"
      },
      {
        "id": 4401,
        "kabkot_id": 307,
        "kecamatan": "Koting"
      },
      {
        "id": 4402,
        "kabkot_id": 307,
        "kecamatan": "Lela"
      },
      {
        "id": 4403,
        "kabkot_id": 307,
        "kecamatan": "Magepanda"
      },
      {
        "id": 4404,
        "kabkot_id": 307,
        "kecamatan": "Mapitara"
      },
      {
        "id": 4405,
        "kabkot_id": 307,
        "kecamatan": "Mego"
      },
      {
        "id": 4406,
        "kabkot_id": 307,
        "kecamatan": "Nelle (Maumerei)"
      },
      {
        "id": 4407,
        "kabkot_id": 307,
        "kecamatan": "Nita"
      },
      {
        "id": 4408,
        "kabkot_id": 307,
        "kecamatan": "Paga"
      },
      {
        "id": 4409,
        "kabkot_id": 307,
        "kecamatan": "Palue"
      },
      {
        "id": 4410,
        "kabkot_id": 307,
        "kecamatan": "Talibura"
      },
      {
        "id": 4411,
        "kabkot_id": 307,
        "kecamatan": "Tana Wawo"
      },
      {
        "id": 4412,
        "kabkot_id": 307,
        "kecamatan": "Waiblama"
      },
      {
        "id": 4413,
        "kabkot_id": 307,
        "kecamatan": "Waigete"
      },
      {
        "id": 4414,
        "kabkot_id": 308,
        "kecamatan": "Kota Waikabubak"
      },
      {
        "id": 4415,
        "kabkot_id": 308,
        "kecamatan": "Lamboya"
      },
      {
        "id": 4416,
        "kabkot_id": 308,
        "kecamatan": "Lamboya Barat"
      },
      {
        "id": 4417,
        "kabkot_id": 308,
        "kecamatan": "Loli"
      },
      {
        "id": 4418,
        "kabkot_id": 308,
        "kecamatan": "Tana Righu"
      },
      {
        "id": 4419,
        "kabkot_id": 308,
        "kecamatan": "Wanokaka"
      },
      {
        "id": 4420,
        "kabkot_id": 309,
        "kecamatan": "Kodi"
      },
      {
        "id": 4421,
        "kabkot_id": 309,
        "kecamatan": "Kodi Balaghar"
      },
      {
        "id": 4422,
        "kabkot_id": 309,
        "kecamatan": "Kodi Bangedo"
      },
      {
        "id": 4423,
        "kabkot_id": 309,
        "kecamatan": "Kodi Utara"
      },
      {
        "id": 4424,
        "kabkot_id": 309,
        "kecamatan": "Kota Tambolaka"
      },
      {
        "id": 4425,
        "kabkot_id": 309,
        "kecamatan": "Loura (Laura)"
      },
      {
        "id": 4426,
        "kabkot_id": 309,
        "kecamatan": "Wewewa Barat"
      },
      {
        "id": 4427,
        "kabkot_id": 309,
        "kecamatan": "Wewewa Selatan"
      },
      {
        "id": 4428,
        "kabkot_id": 309,
        "kecamatan": "Wewewa Tengah (Wewera Tengah)"
      },
      {
        "id": 4429,
        "kabkot_id": 309,
        "kecamatan": "Wewewa Timur"
      },
      {
        "id": 4430,
        "kabkot_id": 309,
        "kecamatan": "Wewewa Utara"
      },
      {
        "id": 4431,
        "kabkot_id": 310,
        "kecamatan": "Katiku Tana"
      },
      {
        "id": 4432,
        "kabkot_id": 310,
        "kecamatan": "Katikutana Selatan"
      },
      {
        "id": 4433,
        "kabkot_id": 310,
        "kecamatan": "Mamboro"
      },
      {
        "id": 4434,
        "kabkot_id": 310,
        "kecamatan": "Umbu Ratu Nggay"
      },
      {
        "id": 4435,
        "kabkot_id": 310,
        "kecamatan": "Umbu Ratu Nggay Barat"
      },
      {
        "id": 4436,
        "kabkot_id": 311,
        "kecamatan": "Haharu"
      },
      {
        "id": 4437,
        "kabkot_id": 311,
        "kecamatan": "Kahaunguweti (Kahaungu Eti)"
      },
      {
        "id": 4438,
        "kabkot_id": 311,
        "kecamatan": "Kambata Mapambuhang"
      },
      {
        "id": 4439,
        "kabkot_id": 311,
        "kecamatan": "Kambera"
      },
      {
        "id": 4440,
        "kabkot_id": 311,
        "kecamatan": "Kanatang"
      },
      {
        "id": 4441,
        "kabkot_id": 311,
        "kecamatan": "Karera"
      },
      {
        "id": 4442,
        "kabkot_id": 311,
        "kecamatan": "Katala Hamu Lingu"
      },
      {
        "id": 4443,
        "kabkot_id": 311,
        "kecamatan": "Kota Waingapu"
      },
      {
        "id": 4444,
        "kabkot_id": 311,
        "kecamatan": "Lewa"
      },
      {
        "id": 4445,
        "kabkot_id": 311,
        "kecamatan": "Lewa Tidahu"
      },
      {
        "id": 4446,
        "kabkot_id": 311,
        "kecamatan": "Mahu"
      },
      {
        "id": 4447,
        "kabkot_id": 311,
        "kecamatan": "Matawai Lappau (La Pawu)"
      },
      {
        "id": 4448,
        "kabkot_id": 311,
        "kecamatan": "Ngadu Ngala"
      },
      {
        "id": 4449,
        "kabkot_id": 311,
        "kecamatan": "Nggaha Oriangu"
      },
      {
        "id": 4450,
        "kabkot_id": 311,
        "kecamatan": "Paberiwai"
      },
      {
        "id": 4451,
        "kabkot_id": 311,
        "kecamatan": "Pahunga Lodu"
      },
      {
        "id": 4452,
        "kabkot_id": 311,
        "kecamatan": "Pandawai"
      },
      {
        "id": 4453,
        "kabkot_id": 311,
        "kecamatan": "Pinupahar (Pirapahar)"
      },
      {
        "id": 4454,
        "kabkot_id": 311,
        "kecamatan": "Rindi"
      },
      {
        "id": 4455,
        "kabkot_id": 311,
        "kecamatan": "Tabundung"
      },
      {
        "id": 4456,
        "kabkot_id": 311,
        "kecamatan": "Umalulu"
      },
      {
        "id": 4457,
        "kabkot_id": 311,
        "kecamatan": "Wula Waijelu"
      },
      {
        "id": 4458,
        "kabkot_id": 312,
        "kecamatan": "Amanatun Selatan"
      },
      {
        "id": 4459,
        "kabkot_id": 312,
        "kecamatan": "Amanatun Utara"
      },
      {
        "id": 4460,
        "kabkot_id": 312,
        "kecamatan": "Amanuban Barat"
      },
      {
        "id": 4461,
        "kabkot_id": 312,
        "kecamatan": "Amanuban Selatan"
      },
      {
        "id": 4462,
        "kabkot_id": 312,
        "kecamatan": "Amanuban Tengah"
      },
      {
        "id": 4463,
        "kabkot_id": 312,
        "kecamatan": "Amanuban Timur"
      },
      {
        "id": 4464,
        "kabkot_id": 312,
        "kecamatan": "Batu Putih"
      },
      {
        "id": 4465,
        "kabkot_id": 312,
        "kecamatan": "Boking"
      },
      {
        "id": 4466,
        "kabkot_id": 312,
        "kecamatan": "Fatukopa"
      },
      {
        "id": 4467,
        "kabkot_id": 312,
        "kecamatan": "Fatumnasi"
      },
      {
        "id": 4468,
        "kabkot_id": 312,
        "kecamatan": "Fautmolo"
      },
      {
        "id": 4469,
        "kabkot_id": 312,
        "kecamatan": "Kie (Ki'e)"
      },
      {
        "id": 4470,
        "kabkot_id": 312,
        "kecamatan": "Kok Baun"
      },
      {
        "id": 4471,
        "kabkot_id": 312,
        "kecamatan": "Kolbano"
      },
      {
        "id": 4472,
        "kabkot_id": 312,
        "kecamatan": "Kot Olin"
      },
      {
        "id": 4473,
        "kabkot_id": 312,
        "kecamatan": "Kota Soe"
      },
      {
        "id": 4474,
        "kabkot_id": 312,
        "kecamatan": "Kualin"
      },
      {
        "id": 4475,
        "kabkot_id": 312,
        "kecamatan": "Kuanfatu"
      },
      {
        "id": 4476,
        "kabkot_id": 312,
        "kecamatan": "Kuatnana"
      },
      {
        "id": 4477,
        "kabkot_id": 312,
        "kecamatan": "Mollo Barat"
      },
      {
        "id": 4478,
        "kabkot_id": 312,
        "kecamatan": "Mollo Selatan"
      },
      {
        "id": 4479,
        "kabkot_id": 312,
        "kecamatan": "Mollo Tengah"
      },
      {
        "id": 4480,
        "kabkot_id": 312,
        "kecamatan": "Mollo Utara"
      },
      {
        "id": 4481,
        "kabkot_id": 312,
        "kecamatan": "Noebana"
      },
      {
        "id": 4482,
        "kabkot_id": 312,
        "kecamatan": "Noebeba"
      },
      {
        "id": 4483,
        "kabkot_id": 312,
        "kecamatan": "Nunbena"
      },
      {
        "id": 4484,
        "kabkot_id": 312,
        "kecamatan": "Nunkolo"
      },
      {
        "id": 4485,
        "kabkot_id": 312,
        "kecamatan": "Oenino"
      },
      {
        "id": 4486,
        "kabkot_id": 312,
        "kecamatan": "Polen"
      },
      {
        "id": 4487,
        "kabkot_id": 312,
        "kecamatan": "Santian"
      },
      {
        "id": 4488,
        "kabkot_id": 312,
        "kecamatan": "Tobu"
      },
      {
        "id": 4489,
        "kabkot_id": 312,
        "kecamatan": "Toianas"
      },
      {
        "id": 4490,
        "kabkot_id": 313,
        "kecamatan": "Biboki Anleu"
      },
      {
        "id": 4491,
        "kabkot_id": 313,
        "kecamatan": "Biboki Feotleu"
      },
      {
        "id": 4492,
        "kabkot_id": 313,
        "kecamatan": "Biboki Moenleu"
      },
      {
        "id": 4493,
        "kabkot_id": 313,
        "kecamatan": "Biboki Selatan"
      },
      {
        "id": 4494,
        "kabkot_id": 313,
        "kecamatan": "Biboki Tan Pah"
      },
      {
        "id": 4495,
        "kabkot_id": 313,
        "kecamatan": "Biboki Utara"
      },
      {
        "id": 4496,
        "kabkot_id": 313,
        "kecamatan": "Bikomi Nilulat"
      },
      {
        "id": 4497,
        "kabkot_id": 313,
        "kecamatan": "Bikomi Selatan"
      },
      {
        "id": 4498,
        "kabkot_id": 313,
        "kecamatan": "Bikomi Tengah"
      },
      {
        "id": 4499,
        "kabkot_id": 313,
        "kecamatan": "Bikomi Utara"
      },
      {
        "id": 4500,
        "kabkot_id": 313,
        "kecamatan": "Insana"
      },
      {
        "id": 4501,
        "kabkot_id": 313,
        "kecamatan": "Insana Barat"
      },
      {
        "id": 4502,
        "kabkot_id": 313,
        "kecamatan": "Insana Fafinesu"
      },
      {
        "id": 4503,
        "kabkot_id": 313,
        "kecamatan": "Insana Tengah"
      },
      {
        "id": 4504,
        "kabkot_id": 313,
        "kecamatan": "Insana Utara"
      },
      {
        "id": 4505,
        "kabkot_id": 313,
        "kecamatan": "Kota Kefamenanu"
      },
      {
        "id": 4506,
        "kabkot_id": 313,
        "kecamatan": "Miomafo Barat"
      },
      {
        "id": 4507,
        "kabkot_id": 313,
        "kecamatan": "Miomafo Tengah"
      },
      {
        "id": 4508,
        "kabkot_id": 313,
        "kecamatan": "Miomafo Timur"
      },
      {
        "id": 4509,
        "kabkot_id": 313,
        "kecamatan": "Musi"
      },
      {
        "id": 4510,
        "kabkot_id": 313,
        "kecamatan": "Mutis"
      },
      {
        "id": 4511,
        "kabkot_id": 313,
        "kecamatan": "Naibenu"
      },
      {
        "id": 4512,
        "kabkot_id": 313,
        "kecamatan": "Noemuti"
      },
      {
        "id": 4513,
        "kabkot_id": 313,
        "kecamatan": "Noemuti Timur"
      },
      {
        "id": 4514,
        "kabkot_id": 314,
        "kecamatan": "Alak"
      },
      {
        "id": 4515,
        "kabkot_id": 314,
        "kecamatan": "Kelapa Lima"
      },
      {
        "id": 4516,
        "kabkot_id": 314,
        "kecamatan": "Kota Lama"
      },
      {
        "id": 4517,
        "kabkot_id": 314,
        "kecamatan": "Kota Raja"
      },
      {
        "id": 4518,
        "kabkot_id": 314,
        "kecamatan": "Maulafa"
      },
      {
        "id": 4519,
        "kabkot_id": 314,
        "kecamatan": "Oebobo"
      },
      {
        "id": 4520,
        "kabkot_id": 315,
        "kecamatan": "Bengkayang"
      },
      {
        "id": 4521,
        "kabkot_id": 315,
        "kecamatan": "Capkala"
      },
      {
        "id": 4522,
        "kabkot_id": 315,
        "kecamatan": "Jagoi Babang"
      },
      {
        "id": 4523,
        "kabkot_id": 315,
        "kecamatan": "Ledo"
      },
      {
        "id": 4524,
        "kabkot_id": 315,
        "kecamatan": "Lembah Bawang"
      },
      {
        "id": 4525,
        "kabkot_id": 315,
        "kecamatan": "Lumar"
      },
      {
        "id": 4526,
        "kabkot_id": 315,
        "kecamatan": "Monterado"
      },
      {
        "id": 4527,
        "kabkot_id": 315,
        "kecamatan": "Samalantan"
      },
      {
        "id": 4528,
        "kabkot_id": 315,
        "kecamatan": "Sanggau Ledo"
      },
      {
        "id": 4529,
        "kabkot_id": 315,
        "kecamatan": "Seluas"
      },
      {
        "id": 4530,
        "kabkot_id": 315,
        "kecamatan": "Siding"
      },
      {
        "id": 4531,
        "kabkot_id": 315,
        "kecamatan": "Sungai Betung"
      },
      {
        "id": 4532,
        "kabkot_id": 315,
        "kecamatan": "Sungai Raya"
      },
      {
        "id": 4533,
        "kabkot_id": 315,
        "kecamatan": "Sungai Raya Kepulauan"
      },
      {
        "id": 4534,
        "kabkot_id": 315,
        "kecamatan": "Suti Semarang"
      },
      {
        "id": 4535,
        "kabkot_id": 315,
        "kecamatan": "Teriak"
      },
      {
        "id": 4536,
        "kabkot_id": 315,
        "kecamatan": "Tujuh Belas"
      },
      {
        "id": 4537,
        "kabkot_id": 316,
        "kecamatan": "Badau"
      },
      {
        "id": 4538,
        "kabkot_id": 316,
        "kecamatan": "Batang Lupar"
      },
      {
        "id": 4539,
        "kabkot_id": 316,
        "kecamatan": "Bika"
      },
      {
        "id": 4540,
        "kabkot_id": 316,
        "kecamatan": "Boyan Tanjung"
      },
      {
        "id": 4541,
        "kabkot_id": 316,
        "kecamatan": "Bunut Hilir"
      },
      {
        "id": 4542,
        "kabkot_id": 316,
        "kecamatan": "Bunut Hulu"
      },
      {
        "id": 4543,
        "kabkot_id": 316,
        "kecamatan": "Embaloh Hilir"
      },
      {
        "id": 4544,
        "kabkot_id": 316,
        "kecamatan": "Embaloh Hulu"
      },
      {
        "id": 4545,
        "kabkot_id": 316,
        "kecamatan": "Empanang"
      },
      {
        "id": 4546,
        "kabkot_id": 316,
        "kecamatan": "Hulu Gurung"
      },
      {
        "id": 4547,
        "kabkot_id": 316,
        "kecamatan": "Jongkong (Jengkong)"
      },
      {
        "id": 4548,
        "kabkot_id": 316,
        "kecamatan": "Kalis"
      },
      {
        "id": 4549,
        "kabkot_id": 316,
        "kecamatan": "Mentebah"
      },
      {
        "id": 4550,
        "kabkot_id": 316,
        "kecamatan": "Pengkadan (Batu Datu)"
      },
      {
        "id": 4551,
        "kabkot_id": 316,
        "kecamatan": "Puring Kencana"
      },
      {
        "id": 4552,
        "kabkot_id": 316,
        "kecamatan": "Putussibau Selatan"
      },
      {
        "id": 4553,
        "kabkot_id": 316,
        "kecamatan": "Putussibau Utara"
      },
      {
        "id": 4554,
        "kabkot_id": 316,
        "kecamatan": "Seberuang"
      },
      {
        "id": 4555,
        "kabkot_id": 316,
        "kecamatan": "Selimbau"
      },
      {
        "id": 4556,
        "kabkot_id": 316,
        "kecamatan": "Semitau"
      },
      {
        "id": 4557,
        "kabkot_id": 316,
        "kecamatan": "Silat Hilir"
      },
      {
        "id": 4558,
        "kabkot_id": 316,
        "kecamatan": "Silat Hulu"
      },
      {
        "id": 4559,
        "kabkot_id": 316,
        "kecamatan": "Suhaid"
      },
      {
        "id": 4560,
        "kabkot_id": 317,
        "kecamatan": "Kepulauan Karimata"
      },
      {
        "id": 4561,
        "kabkot_id": 317,
        "kecamatan": "Pulau Maya (Pulau Maya Karimata)"
      },
      {
        "id": 4562,
        "kabkot_id": 317,
        "kecamatan": "Seponti"
      },
      {
        "id": 4563,
        "kabkot_id": 317,
        "kecamatan": "Simpang Hilir"
      },
      {
        "id": 4564,
        "kabkot_id": 317,
        "kecamatan": "Sukadana"
      },
      {
        "id": 4565,
        "kabkot_id": 317,
        "kecamatan": "Teluk Batang"
      },
      {
        "id": 4566,
        "kabkot_id": 318,
        "kecamatan": "Air Upas"
      },
      {
        "id": 4567,
        "kabkot_id": 318,
        "kecamatan": "Benua Kayong"
      },
      {
        "id": 4568,
        "kabkot_id": 318,
        "kecamatan": "Delta Pawan"
      },
      {
        "id": 4569,
        "kabkot_id": 318,
        "kecamatan": "Hulu Sungai"
      },
      {
        "id": 4570,
        "kabkot_id": 318,
        "kecamatan": "Jelai Hulu"
      },
      {
        "id": 4571,
        "kabkot_id": 318,
        "kecamatan": "Kendawangan"
      },
      {
        "id": 4572,
        "kabkot_id": 318,
        "kecamatan": "Manis Mata"
      },
      {
        "id": 4573,
        "kabkot_id": 318,
        "kecamatan": "Marau"
      },
      {
        "id": 4574,
        "kabkot_id": 318,
        "kecamatan": "Matan Hilir Selatan"
      },
      {
        "id": 4575,
        "kabkot_id": 318,
        "kecamatan": "Matan Hilir Utara"
      },
      {
        "id": 4576,
        "kabkot_id": 318,
        "kecamatan": "Muara Pawan"
      },
      {
        "id": 4577,
        "kabkot_id": 318,
        "kecamatan": "Nanga Tayap"
      },
      {
        "id": 4578,
        "kabkot_id": 318,
        "kecamatan": "Pemahan"
      },
      {
        "id": 4579,
        "kabkot_id": 318,
        "kecamatan": "Sandai"
      },
      {
        "id": 4580,
        "kabkot_id": 318,
        "kecamatan": "Simpang Dua"
      },
      {
        "id": 4581,
        "kabkot_id": 318,
        "kecamatan": "Simpang Hulu"
      },
      {
        "id": 4582,
        "kabkot_id": 318,
        "kecamatan": "Singkup"
      },
      {
        "id": 4583,
        "kabkot_id": 318,
        "kecamatan": "Sungai Laur"
      },
      {
        "id": 4584,
        "kabkot_id": 318,
        "kecamatan": "Sungai Melayu Rayak"
      },
      {
        "id": 4585,
        "kabkot_id": 318,
        "kecamatan": "Tumbang Titi"
      },
      {
        "id": 4586,
        "kabkot_id": 319,
        "kecamatan": "Batu Ampar"
      },
      {
        "id": 4587,
        "kabkot_id": 319,
        "kecamatan": "Kuala Mandor B"
      },
      {
        "id": 4588,
        "kabkot_id": 319,
        "kecamatan": "Kubu"
      },
      {
        "id": 4589,
        "kabkot_id": 319,
        "kecamatan": "Rasau Jaya"
      },
      {
        "id": 4590,
        "kabkot_id": 319,
        "kecamatan": "Sungai Ambawang"
      },
      {
        "id": 4591,
        "kabkot_id": 319,
        "kecamatan": "Sungai Kakap"
      },
      {
        "id": 4592,
        "kabkot_id": 319,
        "kecamatan": "Sungai Raya"
      },
      {
        "id": 4593,
        "kabkot_id": 319,
        "kecamatan": "Teluk Pakedai"
      },
      {
        "id": 4594,
        "kabkot_id": 319,
        "kecamatan": "Terentang"
      },
      {
        "id": 4595,
        "kabkot_id": 320,
        "kecamatan": "Air Besar"
      },
      {
        "id": 4596,
        "kabkot_id": 320,
        "kecamatan": "Banyuke Hulu"
      },
      {
        "id": 4597,
        "kabkot_id": 320,
        "kecamatan": "Jelimpo"
      },
      {
        "id": 4598,
        "kabkot_id": 320,
        "kecamatan": "Kuala Behe"
      },
      {
        "id": 4599,
        "kabkot_id": 320,
        "kecamatan": "Mandor"
      },
      {
        "id": 4600,
        "kabkot_id": 320,
        "kecamatan": "Mempawah Hulu"
      },
      {
        "id": 4601,
        "kabkot_id": 320,
        "kecamatan": "Menjalin"
      },
      {
        "id": 4602,
        "kabkot_id": 320,
        "kecamatan": "Menyuke"
      },
      {
        "id": 4603,
        "kabkot_id": 320,
        "kecamatan": "Meranti"
      },
      {
        "id": 4604,
        "kabkot_id": 320,
        "kecamatan": "Ngabang"
      },
      {
        "id": 4605,
        "kabkot_id": 320,
        "kecamatan": "Sebangki"
      },
      {
        "id": 4606,
        "kabkot_id": 320,
        "kecamatan": "Sengah Temila"
      },
      {
        "id": 4607,
        "kabkot_id": 320,
        "kecamatan": "Sompak"
      },
      {
        "id": 4608,
        "kabkot_id": 321,
        "kecamatan": "Belimbing"
      },
      {
        "id": 4609,
        "kabkot_id": 321,
        "kecamatan": "Belimbing Hulu"
      },
      {
        "id": 4610,
        "kabkot_id": 321,
        "kecamatan": "Ella Hilir"
      },
      {
        "id": 4611,
        "kabkot_id": 321,
        "kecamatan": "Menukung"
      },
      {
        "id": 4612,
        "kabkot_id": 321,
        "kecamatan": "Nanga Pinoh"
      },
      {
        "id": 4613,
        "kabkot_id": 321,
        "kecamatan": "Pinoh Selatan"
      },
      {
        "id": 4614,
        "kabkot_id": 321,
        "kecamatan": "Pinoh Utara"
      },
      {
        "id": 4615,
        "kabkot_id": 321,
        "kecamatan": "Sayan"
      },
      {
        "id": 4616,
        "kabkot_id": 321,
        "kecamatan": "Sokan"
      },
      {
        "id": 4617,
        "kabkot_id": 321,
        "kecamatan": "Tanah Pinoh"
      },
      {
        "id": 4618,
        "kabkot_id": 321,
        "kecamatan": "Tanah Pinoh Barat"
      },
      {
        "id": 4619,
        "kabkot_id": 322,
        "kecamatan": "Anjongan"
      },
      {
        "id": 4620,
        "kabkot_id": 322,
        "kecamatan": "Mempawah Hilir"
      },
      {
        "id": 4621,
        "kabkot_id": 322,
        "kecamatan": "Mempawah Timur"
      },
      {
        "id": 4622,
        "kabkot_id": 322,
        "kecamatan": "Sadaniang"
      },
      {
        "id": 4623,
        "kabkot_id": 322,
        "kecamatan": "Segedong"
      },
      {
        "id": 4624,
        "kabkot_id": 322,
        "kecamatan": "Sei/Sungai Kunyit"
      },
      {
        "id": 4625,
        "kabkot_id": 322,
        "kecamatan": "Sei/Sungai Pinyuh"
      },
      {
        "id": 4626,
        "kabkot_id": 322,
        "kecamatan": "Siantan"
      },
      {
        "id": 4627,
        "kabkot_id": 322,
        "kecamatan": "Toho"
      },
      {
        "id": 4628,
        "kabkot_id": 323,
        "kecamatan": "Galing"
      },
      {
        "id": 4629,
        "kabkot_id": 323,
        "kecamatan": "Jawai"
      },
      {
        "id": 4630,
        "kabkot_id": 323,
        "kecamatan": "Jawai Selatan"
      },
      {
        "id": 4631,
        "kabkot_id": 323,
        "kecamatan": "Paloh"
      },
      {
        "id": 4632,
        "kabkot_id": 323,
        "kecamatan": "Pemangkat"
      },
      {
        "id": 4633,
        "kabkot_id": 323,
        "kecamatan": "Sajad"
      },
      {
        "id": 4634,
        "kabkot_id": 323,
        "kecamatan": "Sajingan Besar"
      },
      {
        "id": 4635,
        "kabkot_id": 323,
        "kecamatan": "Salatiga"
      },
      {
        "id": 4636,
        "kabkot_id": 323,
        "kecamatan": "Sambas"
      },
      {
        "id": 4637,
        "kabkot_id": 323,
        "kecamatan": "Sebawi"
      },
      {
        "id": 4638,
        "kabkot_id": 323,
        "kecamatan": "Sejangkung"
      },
      {
        "id": 4639,
        "kabkot_id": 323,
        "kecamatan": "Selakau"
      },
      {
        "id": 4640,
        "kabkot_id": 323,
        "kecamatan": "Selakau Timur"
      },
      {
        "id": 4641,
        "kabkot_id": 323,
        "kecamatan": "Semparuk"
      },
      {
        "id": 4642,
        "kabkot_id": 323,
        "kecamatan": "Subah"
      },
      {
        "id": 4643,
        "kabkot_id": 323,
        "kecamatan": "Tangaran"
      },
      {
        "id": 4644,
        "kabkot_id": 323,
        "kecamatan": "Tebas"
      },
      {
        "id": 4645,
        "kabkot_id": 323,
        "kecamatan": "Tekarang"
      },
      {
        "id": 4646,
        "kabkot_id": 323,
        "kecamatan": "Teluk Keramat"
      },
      {
        "id": 4647,
        "kabkot_id": 324,
        "kecamatan": "Balai"
      },
      {
        "id": 4648,
        "kabkot_id": 324,
        "kecamatan": "Beduai (Beduwai)"
      },
      {
        "id": 4649,
        "kabkot_id": 324,
        "kecamatan": "Bonti"
      },
      {
        "id": 4650,
        "kabkot_id": 324,
        "kecamatan": "Entikong"
      },
      {
        "id": 4651,
        "kabkot_id": 324,
        "kecamatan": "Jangkang"
      },
      {
        "id": 4652,
        "kabkot_id": 324,
        "kecamatan": "Kapuas (Sanggau Kapuas)"
      },
      {
        "id": 4653,
        "kabkot_id": 324,
        "kecamatan": "Kembayan"
      },
      {
        "id": 4654,
        "kabkot_id": 324,
        "kecamatan": "Meliau"
      },
      {
        "id": 4655,
        "kabkot_id": 324,
        "kecamatan": "Mukok"
      },
      {
        "id": 4656,
        "kabkot_id": 324,
        "kecamatan": "Noyan"
      },
      {
        "id": 4657,
        "kabkot_id": 324,
        "kecamatan": "Parindu"
      },
      {
        "id": 4658,
        "kabkot_id": 324,
        "kecamatan": "Sekayam"
      },
      {
        "id": 4659,
        "kabkot_id": 324,
        "kecamatan": "Tayan Hilir"
      },
      {
        "id": 4660,
        "kabkot_id": 324,
        "kecamatan": "Tayan Hulu"
      },
      {
        "id": 4661,
        "kabkot_id": 324,
        "kecamatan": "Toba"
      },
      {
        "id": 4662,
        "kabkot_id": 325,
        "kecamatan": "Belitang"
      },
      {
        "id": 4663,
        "kabkot_id": 325,
        "kecamatan": "Belitang Hilir"
      },
      {
        "id": 4664,
        "kabkot_id": 325,
        "kecamatan": "Belitang Hulu"
      },
      {
        "id": 4665,
        "kabkot_id": 325,
        "kecamatan": "Nanga Mahap"
      },
      {
        "id": 4666,
        "kabkot_id": 325,
        "kecamatan": "Nanga Taman"
      },
      {
        "id": 4667,
        "kabkot_id": 325,
        "kecamatan": "Sekadau Hilir"
      },
      {
        "id": 4668,
        "kabkot_id": 325,
        "kecamatan": "Sekadau Hulu"
      },
      {
        "id": 4669,
        "kabkot_id": 326,
        "kecamatan": "Ambalau"
      },
      {
        "id": 4670,
        "kabkot_id": 326,
        "kecamatan": "Binjai Hulu"
      },
      {
        "id": 4671,
        "kabkot_id": 326,
        "kecamatan": "Dedai"
      },
      {
        "id": 4672,
        "kabkot_id": 326,
        "kecamatan": "Kayan Hilir"
      },
      {
        "id": 4673,
        "kabkot_id": 326,
        "kecamatan": "Kayan Hulu"
      },
      {
        "id": 4674,
        "kabkot_id": 326,
        "kecamatan": "Kelam Permai"
      },
      {
        "id": 4675,
        "kabkot_id": 326,
        "kecamatan": "Ketungau Hilir"
      },
      {
        "id": 4676,
        "kabkot_id": 326,
        "kecamatan": "Ketungau Hulu"
      },
      {
        "id": 4677,
        "kabkot_id": 326,
        "kecamatan": "Ketungau Tengah"
      },
      {
        "id": 4678,
        "kabkot_id": 326,
        "kecamatan": "Sepauk"
      },
      {
        "id": 4679,
        "kabkot_id": 326,
        "kecamatan": "Serawai (Nanga Serawai)"
      },
      {
        "id": 4680,
        "kabkot_id": 326,
        "kecamatan": "Sintang"
      },
      {
        "id": 4681,
        "kabkot_id": 326,
        "kecamatan": "Sungai Tebelian"
      },
      {
        "id": 4682,
        "kabkot_id": 326,
        "kecamatan": "Tempunak"
      },
      {
        "id": 4683,
        "kabkot_id": 327,
        "kecamatan": "Pontianak Barat"
      },
      {
        "id": 4684,
        "kabkot_id": 327,
        "kecamatan": "Pontianak Kota"
      },
      {
        "id": 4685,
        "kabkot_id": 327,
        "kecamatan": "Pontianak Selatan"
      },
      {
        "id": 4686,
        "kabkot_id": 327,
        "kecamatan": "Pontianak Tenggara"
      },
      {
        "id": 4687,
        "kabkot_id": 327,
        "kecamatan": "Pontianak Timur"
      },
      {
        "id": 4688,
        "kabkot_id": 327,
        "kecamatan": "Pontianak Utara"
      },
      {
        "id": 4689,
        "kabkot_id": 328,
        "kecamatan": "Singkawang Barat"
      },
      {
        "id": 4690,
        "kabkot_id": 328,
        "kecamatan": "Singkawang Selatan"
      },
      {
        "id": 4691,
        "kabkot_id": 328,
        "kecamatan": "Singkawang Tengah"
      },
      {
        "id": 4692,
        "kabkot_id": 328,
        "kecamatan": "Singkawang Timur"
      },
      {
        "id": 4693,
        "kabkot_id": 328,
        "kecamatan": "Singkawang Utara"
      },
      {
        "id": 4694,
        "kabkot_id": 329,
        "kecamatan": "Dusun Hilir"
      },
      {
        "id": 4695,
        "kabkot_id": 329,
        "kecamatan": "Dusun Selatan"
      },
      {
        "id": 4696,
        "kabkot_id": 329,
        "kecamatan": "Dusun Utara"
      },
      {
        "id": 4697,
        "kabkot_id": 329,
        "kecamatan": "Gunung Bintang Awai"
      },
      {
        "id": 4698,
        "kabkot_id": 329,
        "kecamatan": "Jenamas"
      },
      {
        "id": 4699,
        "kabkot_id": 329,
        "kecamatan": "Karau Kuala"
      },
      {
        "id": 4700,
        "kabkot_id": 330,
        "kecamatan": "Awang"
      },
      {
        "id": 4701,
        "kabkot_id": 330,
        "kecamatan": "Benua Lima"
      },
      {
        "id": 4702,
        "kabkot_id": 330,
        "kecamatan": "Dusun Tengah"
      },
      {
        "id": 4703,
        "kabkot_id": 330,
        "kecamatan": "Dusun Timur"
      },
      {
        "id": 4704,
        "kabkot_id": 330,
        "kecamatan": "Karusen Janang"
      },
      {
        "id": 4705,
        "kabkot_id": 330,
        "kecamatan": "Paju Epat"
      },
      {
        "id": 4706,
        "kabkot_id": 330,
        "kecamatan": "Paku"
      },
      {
        "id": 4707,
        "kabkot_id": 330,
        "kecamatan": "Patangkep Tutui"
      },
      {
        "id": 4708,
        "kabkot_id": 330,
        "kecamatan": "Pematang Karau"
      },
      {
        "id": 4709,
        "kabkot_id": 330,
        "kecamatan": "Raren Batuah"
      },
      {
        "id": 4710,
        "kabkot_id": 331,
        "kecamatan": "Gunung Purei"
      },
      {
        "id": 4711,
        "kabkot_id": 331,
        "kecamatan": "Gunung Timang"
      },
      {
        "id": 4712,
        "kabkot_id": 331,
        "kecamatan": "Lahei"
      },
      {
        "id": 4713,
        "kabkot_id": 331,
        "kecamatan": "Lahei Barat"
      },
      {
        "id": 4714,
        "kabkot_id": 331,
        "kecamatan": "Montallat (Montalat)"
      },
      {
        "id": 4715,
        "kabkot_id": 331,
        "kecamatan": "Teweh Baru"
      },
      {
        "id": 4716,
        "kabkot_id": 331,
        "kecamatan": "Teweh Selatan"
      },
      {
        "id": 4717,
        "kabkot_id": 331,
        "kecamatan": "Teweh Tengah"
      },
      {
        "id": 4718,
        "kabkot_id": 331,
        "kecamatan": "Teweh Timur"
      },
      {
        "id": 4719,
        "kabkot_id": 332,
        "kecamatan": "Damang Batu"
      },
      {
        "id": 4720,
        "kabkot_id": 332,
        "kecamatan": "Kahayan Hulu Utara"
      },
      {
        "id": 4721,
        "kabkot_id": 332,
        "kecamatan": "Kurun"
      },
      {
        "id": 4722,
        "kabkot_id": 332,
        "kecamatan": "Manuhing"
      },
      {
        "id": 4723,
        "kabkot_id": 332,
        "kecamatan": "Manuhing Raya"
      },
      {
        "id": 4724,
        "kabkot_id": 332,
        "kecamatan": "Mihing Raya"
      },
      {
        "id": 4725,
        "kabkot_id": 332,
        "kecamatan": "Miri Manasa"
      },
      {
        "id": 4726,
        "kabkot_id": 332,
        "kecamatan": "Rungan"
      },
      {
        "id": 4727,
        "kabkot_id": 332,
        "kecamatan": "Rungan Barat"
      },
      {
        "id": 4728,
        "kabkot_id": 332,
        "kecamatan": "Rungan Hulu"
      },
      {
        "id": 4729,
        "kabkot_id": 332,
        "kecamatan": "Sepang (Sepang Simin)"
      },
      {
        "id": 4730,
        "kabkot_id": 332,
        "kecamatan": "Tewah"
      },
      {
        "id": 4731,
        "kabkot_id": 333,
        "kecamatan": "Basarang"
      },
      {
        "id": 4732,
        "kabkot_id": 333,
        "kecamatan": "Bataguh"
      },
      {
        "id": 4733,
        "kabkot_id": 333,
        "kecamatan": "Dadahup"
      },
      {
        "id": 4734,
        "kabkot_id": 333,
        "kecamatan": "Kapuas Barat"
      },
      {
        "id": 4735,
        "kabkot_id": 333,
        "kecamatan": "Kapuas Hilir"
      },
      {
        "id": 4736,
        "kabkot_id": 333,
        "kecamatan": "Kapuas Hulu"
      },
      {
        "id": 4737,
        "kabkot_id": 333,
        "kecamatan": "Kapuas Kuala"
      },
      {
        "id": 4738,
        "kabkot_id": 333,
        "kecamatan": "Kapuas Murung"
      },
      {
        "id": 4739,
        "kabkot_id": 333,
        "kecamatan": "Kapuas Tengah"
      },
      {
        "id": 4740,
        "kabkot_id": 333,
        "kecamatan": "Kapuas Timur"
      },
      {
        "id": 4741,
        "kabkot_id": 333,
        "kecamatan": "Mandau Talawang"
      },
      {
        "id": 4742,
        "kabkot_id": 333,
        "kecamatan": "Mantangai"
      },
      {
        "id": 4743,
        "kabkot_id": 333,
        "kecamatan": "Pasak Talawang"
      },
      {
        "id": 4744,
        "kabkot_id": 333,
        "kecamatan": "Pulau Petak"
      },
      {
        "id": 4745,
        "kabkot_id": 333,
        "kecamatan": "Selat"
      },
      {
        "id": 4746,
        "kabkot_id": 333,
        "kecamatan": "Tamban Catur"
      },
      {
        "id": 4747,
        "kabkot_id": 333,
        "kecamatan": "Timpah"
      },
      {
        "id": 4748,
        "kabkot_id": 334,
        "kecamatan": "Bukit Raya"
      },
      {
        "id": 4749,
        "kabkot_id": 334,
        "kecamatan": "Kamipang"
      },
      {
        "id": 4750,
        "kabkot_id": 334,
        "kecamatan": "Katingan Hilir"
      },
      {
        "id": 4751,
        "kabkot_id": 334,
        "kecamatan": "Katingan Hulu"
      },
      {
        "id": 4752,
        "kabkot_id": 334,
        "kecamatan": "Katingan Kuala"
      },
      {
        "id": 4753,
        "kabkot_id": 334,
        "kecamatan": "Katingan Tengah"
      },
      {
        "id": 4754,
        "kabkot_id": 334,
        "kecamatan": "Marikit"
      },
      {
        "id": 4755,
        "kabkot_id": 334,
        "kecamatan": "Mendawai"
      },
      {
        "id": 4756,
        "kabkot_id": 334,
        "kecamatan": "Petak Malai"
      },
      {
        "id": 4757,
        "kabkot_id": 334,
        "kecamatan": "Pulau Malan"
      },
      {
        "id": 4758,
        "kabkot_id": 334,
        "kecamatan": "Sanaman Mantikei (Senamang Mantikei)"
      },
      {
        "id": 4759,
        "kabkot_id": 334,
        "kecamatan": "Tasik Payawan"
      },
      {
        "id": 4760,
        "kabkot_id": 334,
        "kecamatan": "Tewang Sanggalang Garing (Sangalang)"
      },
      {
        "id": 4761,
        "kabkot_id": 335,
        "kecamatan": "Arut Selatan"
      },
      {
        "id": 4762,
        "kabkot_id": 335,
        "kecamatan": "Arut Utara"
      },
      {
        "id": 4763,
        "kabkot_id": 335,
        "kecamatan": "Kotawaringin Lama"
      },
      {
        "id": 4764,
        "kabkot_id": 335,
        "kecamatan": "Kumai"
      },
      {
        "id": 4765,
        "kabkot_id": 335,
        "kecamatan": "Pangkalan Banteng"
      },
      {
        "id": 4766,
        "kabkot_id": 335,
        "kecamatan": "Pangkalan Lada"
      },
      {
        "id": 4767,
        "kabkot_id": 336,
        "kecamatan": "Antang Kalang"
      },
      {
        "id": 4768,
        "kabkot_id": 336,
        "kecamatan": "Baamang"
      },
      {
        "id": 4769,
        "kabkot_id": 336,
        "kecamatan": "Bukit Santuei"
      },
      {
        "id": 4770,
        "kabkot_id": 336,
        "kecamatan": "Cempaga"
      },
      {
        "id": 4771,
        "kabkot_id": 336,
        "kecamatan": "Cempaga Hulu"
      },
      {
        "id": 4772,
        "kabkot_id": 336,
        "kecamatan": "Kota Besi"
      },
      {
        "id": 4773,
        "kabkot_id": 336,
        "kecamatan": "Mentawa Baru Ketapang"
      },
      {
        "id": 4774,
        "kabkot_id": 336,
        "kecamatan": "Mentaya Hilir Selatan"
      },
      {
        "id": 4775,
        "kabkot_id": 336,
        "kecamatan": "Mentaya Hilir Utara"
      },
      {
        "id": 4776,
        "kabkot_id": 336,
        "kecamatan": "Mentaya Hulu"
      },
      {
        "id": 4777,
        "kabkot_id": 336,
        "kecamatan": "Parenggean"
      },
      {
        "id": 4778,
        "kabkot_id": 336,
        "kecamatan": "Pulau Hanaut"
      },
      {
        "id": 4779,
        "kabkot_id": 336,
        "kecamatan": "Seranau"
      },
      {
        "id": 4780,
        "kabkot_id": 336,
        "kecamatan": "Telaga Antang"
      },
      {
        "id": 4781,
        "kabkot_id": 336,
        "kecamatan": "Telawang"
      },
      {
        "id": 4782,
        "kabkot_id": 336,
        "kecamatan": "Teluk Sampit"
      },
      {
        "id": 4783,
        "kabkot_id": 336,
        "kecamatan": "Tualan Hulu"
      },
      {
        "id": 4784,
        "kabkot_id": 337,
        "kecamatan": "Batang Kawa"
      },
      {
        "id": 4785,
        "kabkot_id": 337,
        "kecamatan": "Belantikan Raya"
      },
      {
        "id": 4786,
        "kabkot_id": 337,
        "kecamatan": "Bulik"
      },
      {
        "id": 4787,
        "kabkot_id": 337,
        "kecamatan": "Bulik Timur"
      },
      {
        "id": 4788,
        "kabkot_id": 337,
        "kecamatan": "Delang"
      },
      {
        "id": 4789,
        "kabkot_id": 337,
        "kecamatan": "Lamandau"
      },
      {
        "id": 4790,
        "kabkot_id": 337,
        "kecamatan": "Menthobi Raya"
      },
      {
        "id": 4791,
        "kabkot_id": 337,
        "kecamatan": "Sematu Jaya"
      },
      {
        "id": 4792,
        "kabkot_id": 338,
        "kecamatan": "Barito Tuhup Raya"
      },
      {
        "id": 4793,
        "kabkot_id": 338,
        "kecamatan": "Laung Tuhup"
      },
      {
        "id": 4794,
        "kabkot_id": 338,
        "kecamatan": "Murung"
      },
      {
        "id": 4795,
        "kabkot_id": 338,
        "kecamatan": "Permata Intan"
      },
      {
        "id": 4796,
        "kabkot_id": 338,
        "kecamatan": "Seribu Riam"
      },
      {
        "id": 4797,
        "kabkot_id": 338,
        "kecamatan": "Sumber Barito"
      },
      {
        "id": 4798,
        "kabkot_id": 338,
        "kecamatan": "Sungai Babuat"
      },
      {
        "id": 4799,
        "kabkot_id": 338,
        "kecamatan": "Tanah Siang"
      },
      {
        "id": 4800,
        "kabkot_id": 338,
        "kecamatan": "Tanah Siang Selatan"
      },
      {
        "id": 4801,
        "kabkot_id": 338,
        "kecamatan": "Uut Murung"
      },
      {
        "id": 4802,
        "kabkot_id": 339,
        "kecamatan": "Banama Tingang"
      },
      {
        "id": 4803,
        "kabkot_id": 339,
        "kecamatan": "Jabiren Raya"
      },
      {
        "id": 4804,
        "kabkot_id": 339,
        "kecamatan": "Kahayan Hilir"
      },
      {
        "id": 4805,
        "kabkot_id": 339,
        "kecamatan": "Kahayan Kuala"
      },
      {
        "id": 4806,
        "kabkot_id": 339,
        "kecamatan": "Kahayan Tengah"
      },
      {
        "id": 4807,
        "kabkot_id": 339,
        "kecamatan": "Maliku"
      },
      {
        "id": 4808,
        "kabkot_id": 339,
        "kecamatan": "Pandih Batu"
      },
      {
        "id": 4809,
        "kabkot_id": 339,
        "kecamatan": "Sebangau Kuala"
      },
      {
        "id": 4810,
        "kabkot_id": 340,
        "kecamatan": "Batu Ampar"
      },
      {
        "id": 4811,
        "kabkot_id": 340,
        "kecamatan": "Danau Seluluk"
      },
      {
        "id": 4812,
        "kabkot_id": 340,
        "kecamatan": "Danau Sembuluh"
      },
      {
        "id": 4813,
        "kabkot_id": 340,
        "kecamatan": "Hanau"
      },
      {
        "id": 4814,
        "kabkot_id": 340,
        "kecamatan": "Seruyan Hilir"
      },
      {
        "id": 4815,
        "kabkot_id": 340,
        "kecamatan": "Seruyan Hilir Timur"
      },
      {
        "id": 4816,
        "kabkot_id": 340,
        "kecamatan": "Seruyan Hulu"
      },
      {
        "id": 4817,
        "kabkot_id": 340,
        "kecamatan": "Seruyan Raya"
      },
      {
        "id": 4818,
        "kabkot_id": 340,
        "kecamatan": "Seruyan Tengah"
      },
      {
        "id": 4819,
        "kabkot_id": 340,
        "kecamatan": "Suling Tambun"
      },
      {
        "id": 4820,
        "kabkot_id": 341,
        "kecamatan": "Balai Riam"
      },
      {
        "id": 4821,
        "kabkot_id": 341,
        "kecamatan": "Jelai"
      },
      {
        "id": 4822,
        "kabkot_id": 341,
        "kecamatan": "Pantai Lunci"
      },
      {
        "id": 4823,
        "kabkot_id": 341,
        "kecamatan": "Permata Kecubung"
      },
      {
        "id": 4824,
        "kabkot_id": 341,
        "kecamatan": "Sukamara"
      },
      {
        "id": 4825,
        "kabkot_id": 342,
        "kecamatan": "Bukit Batu"
      },
      {
        "id": 4826,
        "kabkot_id": 342,
        "kecamatan": "Jekan Raya"
      },
      {
        "id": 4827,
        "kabkot_id": 342,
        "kecamatan": "Pahandut"
      },
      {
        "id": 4828,
        "kabkot_id": 342,
        "kecamatan": "Rakumpit"
      },
      {
        "id": 4829,
        "kabkot_id": 342,
        "kecamatan": "Sebangau"
      },
      {
        "id": 4830,
        "kabkot_id": 343,
        "kecamatan": "Awayan"
      },
      {
        "id": 4831,
        "kabkot_id": 343,
        "kecamatan": "Batu Mandi"
      },
      {
        "id": 4832,
        "kabkot_id": 343,
        "kecamatan": "Halong"
      },
      {
        "id": 4833,
        "kabkot_id": 343,
        "kecamatan": "Juai"
      },
      {
        "id": 4834,
        "kabkot_id": 343,
        "kecamatan": "Lampihong"
      },
      {
        "id": 4835,
        "kabkot_id": 343,
        "kecamatan": "Paringin"
      },
      {
        "id": 4836,
        "kabkot_id": 343,
        "kecamatan": "Paringin Selatan"
      },
      {
        "id": 4837,
        "kabkot_id": 343,
        "kecamatan": "Tebing Tinggi"
      },
      {
        "id": 4838,
        "kabkot_id": 344,
        "kecamatan": "Aluh-Aluh"
      },
      {
        "id": 4839,
        "kabkot_id": 344,
        "kecamatan": "Aranio"
      },
      {
        "id": 4840,
        "kabkot_id": 344,
        "kecamatan": "Astambul"
      },
      {
        "id": 4841,
        "kabkot_id": 344,
        "kecamatan": "Beruntung Baru"
      },
      {
        "id": 4842,
        "kabkot_id": 344,
        "kecamatan": "Gambut"
      },
      {
        "id": 4843,
        "kabkot_id": 344,
        "kecamatan": "Karang Intan"
      },
      {
        "id": 4844,
        "kabkot_id": 344,
        "kecamatan": "Kertak Hanyar"
      },
      {
        "id": 4845,
        "kabkot_id": 344,
        "kecamatan": "Martapura Barat"
      },
      {
        "id": 4846,
        "kabkot_id": 344,
        "kecamatan": "Martapura Kota"
      },
      {
        "id": 4847,
        "kabkot_id": 344,
        "kecamatan": "Martapura Timur"
      },
      {
        "id": 4848,
        "kabkot_id": 344,
        "kecamatan": "Mataraman"
      },
      {
        "id": 4849,
        "kabkot_id": 344,
        "kecamatan": "Pengaron"
      },
      {
        "id": 4850,
        "kabkot_id": 344,
        "kecamatan": "Peramasan"
      },
      {
        "id": 4851,
        "kabkot_id": 344,
        "kecamatan": "Sambung Makmur"
      },
      {
        "id": 4852,
        "kabkot_id": 344,
        "kecamatan": "Sei/Sungai Pinang"
      },
      {
        "id": 4853,
        "kabkot_id": 344,
        "kecamatan": "Sei/Sungai Tabuk"
      },
      {
        "id": 4854,
        "kabkot_id": 344,
        "kecamatan": "Simpang Empat"
      },
      {
        "id": 4855,
        "kabkot_id": 344,
        "kecamatan": "Tatah Makmur"
      },
      {
        "id": 4856,
        "kabkot_id": 344,
        "kecamatan": "Telaga Bauntung"
      },
      {
        "id": 4857,
        "kabkot_id": 345,
        "kecamatan": "Alalak"
      },
      {
        "id": 4858,
        "kabkot_id": 345,
        "kecamatan": "Anjir Muara"
      },
      {
        "id": 4859,
        "kabkot_id": 345,
        "kecamatan": "Anjir Pasar"
      },
      {
        "id": 4860,
        "kabkot_id": 345,
        "kecamatan": "Bakumpai"
      },
      {
        "id": 4861,
        "kabkot_id": 345,
        "kecamatan": "Barambai"
      },
      {
        "id": 4862,
        "kabkot_id": 345,
        "kecamatan": "Belawang"
      },
      {
        "id": 4863,
        "kabkot_id": 345,
        "kecamatan": "Cerbon"
      },
      {
        "id": 4864,
        "kabkot_id": 345,
        "kecamatan": "Jejangkit"
      },
      {
        "id": 4865,
        "kabkot_id": 345,
        "kecamatan": "Kuripan"
      },
      {
        "id": 4866,
        "kabkot_id": 345,
        "kecamatan": "Mandastana"
      },
      {
        "id": 4867,
        "kabkot_id": 345,
        "kecamatan": "Marabahan"
      },
      {
        "id": 4868,
        "kabkot_id": 345,
        "kecamatan": "Mekar Sari"
      },
      {
        "id": 4869,
        "kabkot_id": 345,
        "kecamatan": "Rantau Badauh"
      },
      {
        "id": 4870,
        "kabkot_id": 345,
        "kecamatan": "Tabukan"
      },
      {
        "id": 4871,
        "kabkot_id": 345,
        "kecamatan": "Tabunganen"
      },
      {
        "id": 4872,
        "kabkot_id": 345,
        "kecamatan": "Tamban"
      },
      {
        "id": 4873,
        "kabkot_id": 345,
        "kecamatan": "Wanaraya"
      },
      {
        "id": 4874,
        "kabkot_id": 346,
        "kecamatan": "Angkinang"
      },
      {
        "id": 4875,
        "kabkot_id": 346,
        "kecamatan": "Daha Barat"
      },
      {
        "id": 4876,
        "kabkot_id": 346,
        "kecamatan": "Daha Selatan"
      },
      {
        "id": 4877,
        "kabkot_id": 346,
        "kecamatan": "Daha Utara"
      },
      {
        "id": 4878,
        "kabkot_id": 346,
        "kecamatan": "Kalumpang (Kelumpang)"
      },
      {
        "id": 4879,
        "kabkot_id": 346,
        "kecamatan": "Kandangan"
      },
      {
        "id": 4880,
        "kabkot_id": 346,
        "kecamatan": "Loksado"
      },
      {
        "id": 4881,
        "kabkot_id": 346,
        "kecamatan": "Padang Batung"
      },
      {
        "id": 4882,
        "kabkot_id": 346,
        "kecamatan": "Simpur"
      },
      {
        "id": 4883,
        "kabkot_id": 346,
        "kecamatan": "Sungai Raya"
      },
      {
        "id": 4884,
        "kabkot_id": 346,
        "kecamatan": "Telaga Langsat"
      },
      {
        "id": 4885,
        "kabkot_id": 347,
        "kecamatan": "Barabai"
      },
      {
        "id": 4886,
        "kabkot_id": 347,
        "kecamatan": "Batang Alai Selatan"
      },
      {
        "id": 4887,
        "kabkot_id": 347,
        "kecamatan": "Batang Alai Timur"
      },
      {
        "id": 4888,
        "kabkot_id": 347,
        "kecamatan": "Batang Alai Utara"
      },
      {
        "id": 4889,
        "kabkot_id": 347,
        "kecamatan": "Batu Benawa"
      },
      {
        "id": 4890,
        "kabkot_id": 347,
        "kecamatan": "Hantakan"
      },
      {
        "id": 4891,
        "kabkot_id": 347,
        "kecamatan": "Haruyan"
      },
      {
        "id": 4892,
        "kabkot_id": 347,
        "kecamatan": "Labuan Amas Selatan"
      },
      {
        "id": 4893,
        "kabkot_id": 347,
        "kecamatan": "Labuan Amas Utara"
      },
      {
        "id": 4894,
        "kabkot_id": 347,
        "kecamatan": "Limpasu"
      },
      {
        "id": 4895,
        "kabkot_id": 347,
        "kecamatan": "Pandawan"
      },
      {
        "id": 4896,
        "kabkot_id": 348,
        "kecamatan": "Amuntai Selatan"
      },
      {
        "id": 4897,
        "kabkot_id": 348,
        "kecamatan": "Amuntai Tengah"
      },
      {
        "id": 4898,
        "kabkot_id": 348,
        "kecamatan": "Amuntai Utara"
      },
      {
        "id": 4899,
        "kabkot_id": 348,
        "kecamatan": "Babirik"
      },
      {
        "id": 4900,
        "kabkot_id": 348,
        "kecamatan": "Banjang"
      },
      {
        "id": 4901,
        "kabkot_id": 348,
        "kecamatan": "Danau Panggang"
      },
      {
        "id": 4902,
        "kabkot_id": 348,
        "kecamatan": "Haur Gading"
      },
      {
        "id": 4903,
        "kabkot_id": 348,
        "kecamatan": "Paminggir"
      },
      {
        "id": 4904,
        "kabkot_id": 348,
        "kecamatan": "Sungai Pandan"
      },
      {
        "id": 4905,
        "kabkot_id": 348,
        "kecamatan": "Sungai Tabukan"
      },
      {
        "id": 4906,
        "kabkot_id": 349,
        "kecamatan": "Hampang"
      },
      {
        "id": 4907,
        "kabkot_id": 349,
        "kecamatan": "Kelumpang Barat"
      },
      {
        "id": 4908,
        "kabkot_id": 349,
        "kecamatan": "Kelumpang Hilir"
      },
      {
        "id": 4909,
        "kabkot_id": 349,
        "kecamatan": "Kelumpang Hulu"
      },
      {
        "id": 4910,
        "kabkot_id": 349,
        "kecamatan": "Kelumpang Selatan"
      },
      {
        "id": 4911,
        "kabkot_id": 349,
        "kecamatan": "Kelumpang Tengah"
      },
      {
        "id": 4912,
        "kabkot_id": 349,
        "kecamatan": "Kelumpang Utara"
      },
      {
        "id": 4913,
        "kabkot_id": 349,
        "kecamatan": "Pamukan Barat"
      },
      {
        "id": 4914,
        "kabkot_id": 349,
        "kecamatan": "Pamukan Selatan"
      },
      {
        "id": 4915,
        "kabkot_id": 349,
        "kecamatan": "Pamukan Utara"
      },
      {
        "id": 4916,
        "kabkot_id": 349,
        "kecamatan": "Pulau Laut Barat"
      },
      {
        "id": 4917,
        "kabkot_id": 349,
        "kecamatan": "Pulau Laut Kepulauan"
      },
      {
        "id": 4918,
        "kabkot_id": 349,
        "kecamatan": "Pulau Laut Selatan"
      },
      {
        "id": 4919,
        "kabkot_id": 349,
        "kecamatan": "Pulau Laut Tanjung Selayar"
      },
      {
        "id": 4920,
        "kabkot_id": 349,
        "kecamatan": "Pulau Laut Tengah"
      },
      {
        "id": 4921,
        "kabkot_id": 349,
        "kecamatan": "Pulau Laut Timur"
      },
      {
        "id": 4922,
        "kabkot_id": 349,
        "kecamatan": "Pulau Laut Utara"
      },
      {
        "id": 4923,
        "kabkot_id": 349,
        "kecamatan": "Pulau Sebuku"
      },
      {
        "id": 4924,
        "kabkot_id": 349,
        "kecamatan": "Pulau Sembilan"
      },
      {
        "id": 4925,
        "kabkot_id": 349,
        "kecamatan": "Sampanahan"
      },
      {
        "id": 4926,
        "kabkot_id": 349,
        "kecamatan": "Sungai Durian"
      },
      {
        "id": 4927,
        "kabkot_id": 350,
        "kecamatan": "Banua Lawas"
      },
      {
        "id": 4928,
        "kabkot_id": 350,
        "kecamatan": "Bintang Ara"
      },
      {
        "id": 4929,
        "kabkot_id": 350,
        "kecamatan": "Haruai"
      },
      {
        "id": 4930,
        "kabkot_id": 350,
        "kecamatan": "Jaro"
      },
      {
        "id": 4931,
        "kabkot_id": 350,
        "kecamatan": "Kelua (Klua)"
      },
      {
        "id": 4932,
        "kabkot_id": 350,
        "kecamatan": "Muara Harus"
      },
      {
        "id": 4933,
        "kabkot_id": 350,
        "kecamatan": "Muara Uya"
      },
      {
        "id": 4934,
        "kabkot_id": 350,
        "kecamatan": "Murung Pudak"
      },
      {
        "id": 4935,
        "kabkot_id": 350,
        "kecamatan": "Pugaan"
      },
      {
        "id": 4936,
        "kabkot_id": 350,
        "kecamatan": "Tanjung"
      },
      {
        "id": 4937,
        "kabkot_id": 350,
        "kecamatan": "Tanta"
      },
      {
        "id": 4938,
        "kabkot_id": 350,
        "kecamatan": "Upau"
      },
      {
        "id": 4939,
        "kabkot_id": 351,
        "kecamatan": "Angsana"
      },
      {
        "id": 4940,
        "kabkot_id": 351,
        "kecamatan": "Batulicin"
      },
      {
        "id": 4941,
        "kabkot_id": 351,
        "kecamatan": "Karang Bintang"
      },
      {
        "id": 4942,
        "kabkot_id": 351,
        "kecamatan": "Kuranji"
      },
      {
        "id": 4943,
        "kabkot_id": 351,
        "kecamatan": "Kusan Hilir"
      },
      {
        "id": 4944,
        "kabkot_id": 351,
        "kecamatan": "Kusan Hulu"
      },
      {
        "id": 4945,
        "kabkot_id": 351,
        "kecamatan": "Mantewe"
      },
      {
        "id": 4946,
        "kabkot_id": 351,
        "kecamatan": "Satui"
      },
      {
        "id": 4947,
        "kabkot_id": 351,
        "kecamatan": "Simpang Empat"
      },
      {
        "id": 4948,
        "kabkot_id": 351,
        "kecamatan": "Sungai Loban"
      },
      {
        "id": 4949,
        "kabkot_id": 352,
        "kecamatan": "Bajuin"
      },
      {
        "id": 4950,
        "kabkot_id": 352,
        "kecamatan": "Bati-Bati"
      },
      {
        "id": 4951,
        "kabkot_id": 352,
        "kecamatan": "Batu Ampar"
      },
      {
        "id": 4952,
        "kabkot_id": 352,
        "kecamatan": "Bumi Makmur"
      },
      {
        "id": 4953,
        "kabkot_id": 352,
        "kecamatan": "Jorong"
      },
      {
        "id": 4954,
        "kabkot_id": 352,
        "kecamatan": "Kintap"
      },
      {
        "id": 4955,
        "kabkot_id": 352,
        "kecamatan": "Kurau"
      },
      {
        "id": 4956,
        "kabkot_id": 352,
        "kecamatan": "Panyipatan"
      },
      {
        "id": 4957,
        "kabkot_id": 352,
        "kecamatan": "Pelaihari"
      },
      {
        "id": 4958,
        "kabkot_id": 352,
        "kecamatan": "Takisung"
      },
      {
        "id": 4959,
        "kabkot_id": 352,
        "kecamatan": "Tambang Ulang"
      },
      {
        "id": 4960,
        "kabkot_id": 353,
        "kecamatan": "Bakarangan"
      },
      {
        "id": 4961,
        "kabkot_id": 353,
        "kecamatan": "Binuang"
      },
      {
        "id": 4962,
        "kabkot_id": 353,
        "kecamatan": "Bungur"
      },
      {
        "id": 4963,
        "kabkot_id": 353,
        "kecamatan": "Candi Laras Selatan"
      },
      {
        "id": 4964,
        "kabkot_id": 353,
        "kecamatan": "Candi Laras Utara"
      },
      {
        "id": 4965,
        "kabkot_id": 353,
        "kecamatan": "Hatungun"
      },
      {
        "id": 4966,
        "kabkot_id": 353,
        "kecamatan": "Lokpaikat"
      },
      {
        "id": 4967,
        "kabkot_id": 353,
        "kecamatan": "Piani"
      },
      {
        "id": 4968,
        "kabkot_id": 353,
        "kecamatan": "Salam Babaris"
      },
      {
        "id": 4969,
        "kabkot_id": 353,
        "kecamatan": "Tapin Selatan"
      },
      {
        "id": 4970,
        "kabkot_id": 353,
        "kecamatan": "Tapin Tengah"
      },
      {
        "id": 4971,
        "kabkot_id": 353,
        "kecamatan": "Tapin Utara"
      },
      {
        "id": 4972,
        "kabkot_id": 354,
        "kecamatan": "Banjar Baru Selatan"
      },
      {
        "id": 4973,
        "kabkot_id": 354,
        "kecamatan": "Banjar Baru Utara"
      },
      {
        "id": 4974,
        "kabkot_id": 354,
        "kecamatan": "Cempaka"
      },
      {
        "id": 4975,
        "kabkot_id": 354,
        "kecamatan": "Landasan Ulin"
      },
      {
        "id": 4976,
        "kabkot_id": 354,
        "kecamatan": "Liang Anggang"
      },
      {
        "id": 4977,
        "kabkot_id": 355,
        "kecamatan": "Banjarmasin Barat"
      },
      {
        "id": 4978,
        "kabkot_id": 355,
        "kecamatan": "Banjarmasin Selatan"
      },
      {
        "id": 4979,
        "kabkot_id": 355,
        "kecamatan": "Banjarmasin Tengah"
      },
      {
        "id": 4980,
        "kabkot_id": 355,
        "kecamatan": "Banjarmasin Timur"
      },
      {
        "id": 4981,
        "kabkot_id": 355,
        "kecamatan": "Banjarmasin Utara"
      },
      {
        "id": 4982,
        "kabkot_id": 356,
        "kecamatan": "Batu Putih"
      },
      {
        "id": 4983,
        "kabkot_id": 356,
        "kecamatan": "Biatan"
      },
      {
        "id": 4984,
        "kabkot_id": 356,
        "kecamatan": "Biduk-Biduk"
      },
      {
        "id": 4985,
        "kabkot_id": 356,
        "kecamatan": "Derawan (Pulau Derawan)"
      },
      {
        "id": 4986,
        "kabkot_id": 356,
        "kecamatan": "Gunung Tabur"
      },
      {
        "id": 4987,
        "kabkot_id": 356,
        "kecamatan": "Kelay"
      },
      {
        "id": 4988,
        "kabkot_id": 356,
        "kecamatan": "Maratua"
      },
      {
        "id": 4989,
        "kabkot_id": 356,
        "kecamatan": "Sambaliung"
      },
      {
        "id": 4990,
        "kabkot_id": 356,
        "kecamatan": "Segah"
      },
      {
        "id": 4991,
        "kabkot_id": 356,
        "kecamatan": "Tabalar"
      },
      {
        "id": 4992,
        "kabkot_id": 356,
        "kecamatan": "Talisayan"
      },
      {
        "id": 4993,
        "kabkot_id": 356,
        "kecamatan": "Tanjung Redeb"
      },
      {
        "id": 4994,
        "kabkot_id": 356,
        "kecamatan": "Teluk Bayur"
      },
      {
        "id": 4995,
        "kabkot_id": 357,
        "kecamatan": "Barong Tongkok"
      },
      {
        "id": 4996,
        "kabkot_id": 357,
        "kecamatan": "Bentian Besar"
      },
      {
        "id": 4997,
        "kabkot_id": 357,
        "kecamatan": "Bongan"
      },
      {
        "id": 4998,
        "kabkot_id": 357,
        "kecamatan": "Damai"
      },
      {
        "id": 4999,
        "kabkot_id": 357,
        "kecamatan": "Jempang"
      },
      {
        "id": 5000,
        "kabkot_id": 357,
        "kecamatan": "Linggang Bigung"
      },
      {
        "id": 5001,
        "kabkot_id": 357,
        "kecamatan": "Long Iram"
      },
      {
        "id": 5002,
        "kabkot_id": 357,
        "kecamatan": "Melak"
      },
      {
        "id": 5003,
        "kabkot_id": 357,
        "kecamatan": "Mook Manaar Bulatn"
      },
      {
        "id": 5004,
        "kabkot_id": 357,
        "kecamatan": "Muara Lawa"
      },
      {
        "id": 5005,
        "kabkot_id": 357,
        "kecamatan": "Muara Pahu"
      },
      {
        "id": 5006,
        "kabkot_id": 357,
        "kecamatan": "Nyuatan"
      },
      {
        "id": 5007,
        "kabkot_id": 357,
        "kecamatan": "Penyinggahan"
      },
      {
        "id": 5008,
        "kabkot_id": 357,
        "kecamatan": "Sekolaq Darat"
      },
      {
        "id": 5009,
        "kabkot_id": 357,
        "kecamatan": "Siluq Ngurai"
      },
      {
        "id": 5010,
        "kabkot_id": 357,
        "kecamatan": "Tering"
      },
      {
        "id": 5011,
        "kabkot_id": 358,
        "kecamatan": "Anggana"
      },
      {
        "id": 5012,
        "kabkot_id": 358,
        "kecamatan": "Kembang Janggut"
      },
      {
        "id": 5013,
        "kabkot_id": 358,
        "kecamatan": "Kenohan"
      },
      {
        "id": 5014,
        "kabkot_id": 358,
        "kecamatan": "Kota Bangun"
      },
      {
        "id": 5015,
        "kabkot_id": 358,
        "kecamatan": "Loa Janan"
      },
      {
        "id": 5016,
        "kabkot_id": 358,
        "kecamatan": "Loa Kulu"
      },
      {
        "id": 5017,
        "kabkot_id": 358,
        "kecamatan": "Marang Kayu"
      },
      {
        "id": 5018,
        "kabkot_id": 358,
        "kecamatan": "Muara Badak"
      },
      {
        "id": 5019,
        "kabkot_id": 358,
        "kecamatan": "Muara Jawa"
      },
      {
        "id": 5020,
        "kabkot_id": 358,
        "kecamatan": "Muara Kaman"
      },
      {
        "id": 5021,
        "kabkot_id": 358,
        "kecamatan": "Muara Muntai"
      },
      {
        "id": 5022,
        "kabkot_id": 358,
        "kecamatan": "Muara Wis"
      },
      {
        "id": 5023,
        "kabkot_id": 358,
        "kecamatan": "Samboja (Semboja)"
      },
      {
        "id": 5024,
        "kabkot_id": 358,
        "kecamatan": "Sanga-Sanga"
      },
      {
        "id": 5025,
        "kabkot_id": 358,
        "kecamatan": "Sebulu"
      },
      {
        "id": 5026,
        "kabkot_id": 358,
        "kecamatan": "Tabang"
      },
      {
        "id": 5027,
        "kabkot_id": 358,
        "kecamatan": "Tenggarong"
      },
      {
        "id": 5028,
        "kabkot_id": 358,
        "kecamatan": "Tenggarong Seberang"
      },
      {
        "id": 5029,
        "kabkot_id": 359,
        "kecamatan": "Batu Ampar"
      },
      {
        "id": 5030,
        "kabkot_id": 359,
        "kecamatan": "Bengalon"
      },
      {
        "id": 5031,
        "kabkot_id": 359,
        "kecamatan": "Busang"
      },
      {
        "id": 5032,
        "kabkot_id": 359,
        "kecamatan": "Kaliorang"
      },
      {
        "id": 5033,
        "kabkot_id": 359,
        "kecamatan": "Karangan"
      },
      {
        "id": 5034,
        "kabkot_id": 359,
        "kecamatan": "Kaubun"
      },
      {
        "id": 5035,
        "kabkot_id": 359,
        "kecamatan": "Kongbeng"
      },
      {
        "id": 5036,
        "kabkot_id": 359,
        "kecamatan": "Long Mesangat (Mesengat)"
      },
      {
        "id": 5037,
        "kabkot_id": 359,
        "kecamatan": "Muara Ancalong"
      },
      {
        "id": 5038,
        "kabkot_id": 359,
        "kecamatan": "Muara Bengkal"
      },
      {
        "id": 5039,
        "kabkot_id": 359,
        "kecamatan": "Muara Wahau"
      },
      {
        "id": 5040,
        "kabkot_id": 359,
        "kecamatan": "Rantau Pulung"
      },
      {
        "id": 5041,
        "kabkot_id": 359,
        "kecamatan": "Sandaran"
      },
      {
        "id": 5042,
        "kabkot_id": 359,
        "kecamatan": "Sangatta Selatan"
      },
      {
        "id": 5043,
        "kabkot_id": 359,
        "kecamatan": "Sangatta Utara"
      },
      {
        "id": 5044,
        "kabkot_id": 359,
        "kecamatan": "Sangkulirang"
      },
      {
        "id": 5045,
        "kabkot_id": 359,
        "kecamatan": "Telen"
      },
      {
        "id": 5046,
        "kabkot_id": 359,
        "kecamatan": "Teluk Pandan"
      },
      {
        "id": 5047,
        "kabkot_id": 360,
        "kecamatan": "Laham"
      },
      {
        "id": 5048,
        "kabkot_id": 360,
        "kecamatan": "Long Apari"
      },
      {
        "id": 5049,
        "kabkot_id": 360,
        "kecamatan": "Long Bagun"
      },
      {
        "id": 5050,
        "kabkot_id": 360,
        "kecamatan": "Long Hubung"
      },
      {
        "id": 5051,
        "kabkot_id": 360,
        "kecamatan": "Long Pahangai"
      },
      {
        "id": 5052,
        "kabkot_id": 361,
        "kecamatan": "Batu Engau"
      },
      {
        "id": 5053,
        "kabkot_id": 361,
        "kecamatan": "Batu Sopang"
      },
      {
        "id": 5054,
        "kabkot_id": 361,
        "kecamatan": "Kuaro"
      },
      {
        "id": 5055,
        "kabkot_id": 361,
        "kecamatan": "Long Ikis"
      },
      {
        "id": 5056,
        "kabkot_id": 361,
        "kecamatan": "Long Kali"
      },
      {
        "id": 5057,
        "kabkot_id": 361,
        "kecamatan": "Muara Komam"
      },
      {
        "id": 5058,
        "kabkot_id": 361,
        "kecamatan": "Muara Samu"
      },
      {
        "id": 5059,
        "kabkot_id": 361,
        "kecamatan": "Pasir Belengkong"
      },
      {
        "id": 5060,
        "kabkot_id": 361,
        "kecamatan": "Tanah Grogot"
      },
      {
        "id": 5061,
        "kabkot_id": 361,
        "kecamatan": "Tanjung Harapan"
      },
      {
        "id": 5062,
        "kabkot_id": 362,
        "kecamatan": "Babulu"
      },
      {
        "id": 5063,
        "kabkot_id": 362,
        "kecamatan": "Penajam"
      },
      {
        "id": 5064,
        "kabkot_id": 362,
        "kecamatan": "Sepaku"
      },
      {
        "id": 5065,
        "kabkot_id": 362,
        "kecamatan": "Waru"
      },
      {
        "id": 5066,
        "kabkot_id": 363,
        "kecamatan": "Balikpapan Barat"
      },
      {
        "id": 5067,
        "kabkot_id": 363,
        "kecamatan": "Balikpapan Kota"
      },
      {
        "id": 5068,
        "kabkot_id": 363,
        "kecamatan": "Balikpapan Selatan"
      },
      {
        "id": 5069,
        "kabkot_id": 363,
        "kecamatan": "Balikpapan Tengah"
      },
      {
        "id": 5070,
        "kabkot_id": 363,
        "kecamatan": "Balikpapan Timur"
      },
      {
        "id": 5071,
        "kabkot_id": 363,
        "kecamatan": "Balikpapan Utara"
      },
      {
        "id": 5072,
        "kabkot_id": 364,
        "kecamatan": "Bontang Barat"
      },
      {
        "id": 5073,
        "kabkot_id": 364,
        "kecamatan": "Bontang Selatan"
      },
      {
        "id": 5074,
        "kabkot_id": 364,
        "kecamatan": "Bontang Utara"
      },
      {
        "id": 5075,
        "kabkot_id": 365,
        "kecamatan": "Loa Janan Ilir"
      },
      {
        "id": 5076,
        "kabkot_id": 365,
        "kecamatan": "Palaran"
      },
      {
        "id": 5077,
        "kabkot_id": 365,
        "kecamatan": "Samarinda Ilir"
      },
      {
        "id": 5078,
        "kabkot_id": 365,
        "kecamatan": "Samarinda Kota"
      },
      {
        "id": 5079,
        "kabkot_id": 365,
        "kecamatan": "Samarinda Seberang"
      },
      {
        "id": 5080,
        "kabkot_id": 365,
        "kecamatan": "Samarinda Ulu"
      },
      {
        "id": 5081,
        "kabkot_id": 365,
        "kecamatan": "Samarinda Utara"
      },
      {
        "id": 5082,
        "kabkot_id": 365,
        "kecamatan": "Sambutan"
      },
      {
        "id": 5083,
        "kabkot_id": 365,
        "kecamatan": "Sungai Kunjang"
      },
      {
        "id": 5084,
        "kabkot_id": 365,
        "kecamatan": "Sungai Pinang"
      },
      {
        "id": 5085,
        "kabkot_id": 366,
        "kecamatan": "Peso"
      },
      {
        "id": 5086,
        "kabkot_id": 366,
        "kecamatan": "Peso Hilir/Ilir"
      },
      {
        "id": 5087,
        "kabkot_id": 366,
        "kecamatan": "Pulau Bunyu"
      },
      {
        "id": 5088,
        "kabkot_id": 366,
        "kecamatan": "Sekatak"
      },
      {
        "id": 5089,
        "kabkot_id": 366,
        "kecamatan": "Tanjung Palas"
      },
      {
        "id": 5090,
        "kabkot_id": 366,
        "kecamatan": "Tanjung Palas Barat"
      },
      {
        "id": 5091,
        "kabkot_id": 366,
        "kecamatan": "Tanjung Palas Tengah"
      },
      {
        "id": 5092,
        "kabkot_id": 366,
        "kecamatan": "Tanjung Palas Timur"
      },
      {
        "id": 5093,
        "kabkot_id": 366,
        "kecamatan": "Tanjung Palas Utara"
      },
      {
        "id": 5094,
        "kabkot_id": 366,
        "kecamatan": "Tanjung Selor"
      },
      {
        "id": 5095,
        "kabkot_id": 367,
        "kecamatan": "Bahau Hulu"
      },
      {
        "id": 5096,
        "kabkot_id": 367,
        "kecamatan": "Kayan Hilir"
      },
      {
        "id": 5097,
        "kabkot_id": 367,
        "kecamatan": "Kayan Hulu"
      },
      {
        "id": 5098,
        "kabkot_id": 367,
        "kecamatan": "Kayan Selatan"
      },
      {
        "id": 5099,
        "kabkot_id": 367,
        "kecamatan": "Malinau Barat"
      },
      {
        "id": 5100,
        "kabkot_id": 367,
        "kecamatan": "Malinau Kota"
      },
      {
        "id": 5101,
        "kabkot_id": 367,
        "kecamatan": "Malinau Selatan"
      },
      {
        "id": 5102,
        "kabkot_id": 367,
        "kecamatan": "Malinau Selatan Hilir"
      },
      {
        "id": 5103,
        "kabkot_id": 367,
        "kecamatan": "Malinau Selatan Hulu"
      },
      {
        "id": 5104,
        "kabkot_id": 367,
        "kecamatan": "Malinau Utara"
      },
      {
        "id": 5105,
        "kabkot_id": 367,
        "kecamatan": "Mentarang"
      },
      {
        "id": 5106,
        "kabkot_id": 367,
        "kecamatan": "Mentarang Hulu"
      },
      {
        "id": 5107,
        "kabkot_id": 367,
        "kecamatan": "Pujungan"
      },
      {
        "id": 5108,
        "kabkot_id": 367,
        "kecamatan": "Sungai Boh"
      },
      {
        "id": 5109,
        "kabkot_id": 367,
        "kecamatan": "Sungai Tubu"
      },
      {
        "id": 5110,
        "kabkot_id": 368,
        "kecamatan": "Krayan"
      },
      {
        "id": 5111,
        "kabkot_id": 368,
        "kecamatan": "Krayan Selatan"
      },
      {
        "id": 5112,
        "kabkot_id": 368,
        "kecamatan": "Lumbis"
      },
      {
        "id": 5113,
        "kabkot_id": 368,
        "kecamatan": "Lumbis Ogong"
      },
      {
        "id": 5114,
        "kabkot_id": 368,
        "kecamatan": "Nunukan"
      },
      {
        "id": 5115,
        "kabkot_id": 368,
        "kecamatan": "Nunukan Selatan"
      },
      {
        "id": 5116,
        "kabkot_id": 368,
        "kecamatan": "Sebatik"
      },
      {
        "id": 5117,
        "kabkot_id": 368,
        "kecamatan": "Sebatik Barat"
      },
      {
        "id": 5118,
        "kabkot_id": 368,
        "kecamatan": "Sebatik Tengah"
      },
      {
        "id": 5119,
        "kabkot_id": 368,
        "kecamatan": "Sebatik Timur"
      },
      {
        "id": 5120,
        "kabkot_id": 368,
        "kecamatan": "Sebatik Utara"
      },
      {
        "id": 5121,
        "kabkot_id": 368,
        "kecamatan": "Sebuku"
      },
      {
        "id": 5122,
        "kabkot_id": 368,
        "kecamatan": "Sei Menggaris"
      },
      {
        "id": 5123,
        "kabkot_id": 368,
        "kecamatan": "Sembakung"
      },
      {
        "id": 5124,
        "kabkot_id": 368,
        "kecamatan": "Sembakung Atulai"
      },
      {
        "id": 5125,
        "kabkot_id": 368,
        "kecamatan": "Tulin Onsoi"
      },
      {
        "id": 5126,
        "kabkot_id": 369,
        "kecamatan": "Betayau"
      },
      {
        "id": 5127,
        "kabkot_id": 369,
        "kecamatan": "Muruk Rian"
      },
      {
        "id": 5128,
        "kabkot_id": 369,
        "kecamatan": "Sesayap"
      },
      {
        "id": 5129,
        "kabkot_id": 369,
        "kecamatan": "Sesayap Hilir"
      },
      {
        "id": 5130,
        "kabkot_id": 369,
        "kecamatan": "Tana Lia"
      },
      {
        "id": 5131,
        "kabkot_id": 370,
        "kecamatan": "Tarakan Barat"
      },
      {
        "id": 5132,
        "kabkot_id": 370,
        "kecamatan": "Tarakan Tengah"
      },
      {
        "id": 5133,
        "kabkot_id": 370,
        "kecamatan": "Tarakan Timur"
      },
      {
        "id": 5134,
        "kabkot_id": 370,
        "kecamatan": "Tarakan Utara"
      },
      {
        "id": 5135,
        "kabkot_id": 371,
        "kecamatan": "Bilalang"
      },
      {
        "id": 5136,
        "kabkot_id": 371,
        "kecamatan": "Bolaang"
      },
      {
        "id": 5137,
        "kabkot_id": 371,
        "kecamatan": "Bolaang Timur"
      },
      {
        "id": 5138,
        "kabkot_id": 371,
        "kecamatan": "Dumoga"
      },
      {
        "id": 5139,
        "kabkot_id": 371,
        "kecamatan": "Dumoga Barat"
      },
      {
        "id": 5140,
        "kabkot_id": 371,
        "kecamatan": "Dumoga Tengah"
      },
      {
        "id": 5141,
        "kabkot_id": 371,
        "kecamatan": "Dumoga Tenggara"
      },
      {
        "id": 5142,
        "kabkot_id": 371,
        "kecamatan": "Dumoga Timur"
      },
      {
        "id": 5143,
        "kabkot_id": 371,
        "kecamatan": "Dumoga Utara"
      },
      {
        "id": 5144,
        "kabkot_id": 371,
        "kecamatan": "Lolak"
      },
      {
        "id": 5145,
        "kabkot_id": 371,
        "kecamatan": "Lolayan"
      },
      {
        "id": 5146,
        "kabkot_id": 371,
        "kecamatan": "Passi Barat"
      },
      {
        "id": 5147,
        "kabkot_id": 371,
        "kecamatan": "Passi Timur"
      },
      {
        "id": 5148,
        "kabkot_id": 371,
        "kecamatan": "Poigar"
      },
      {
        "id": 5149,
        "kabkot_id": 371,
        "kecamatan": "Sang Tombolang"
      },
      {
        "id": 5150,
        "kabkot_id": 372,
        "kecamatan": "Bolaang Uki"
      },
      {
        "id": 5151,
        "kabkot_id": 372,
        "kecamatan": "Pinolosian"
      },
      {
        "id": 5152,
        "kabkot_id": 372,
        "kecamatan": "Pinolosian Tengah"
      },
      {
        "id": 5153,
        "kabkot_id": 372,
        "kecamatan": "Pinolosian Timur"
      },
      {
        "id": 5154,
        "kabkot_id": 372,
        "kecamatan": "Posigadan"
      },
      {
        "id": 5155,
        "kabkot_id": 373,
        "kecamatan": "Kotabunan"
      },
      {
        "id": 5156,
        "kabkot_id": 373,
        "kecamatan": "Modayag"
      },
      {
        "id": 5157,
        "kabkot_id": 373,
        "kecamatan": "Modayag Barat"
      },
      {
        "id": 5158,
        "kabkot_id": 373,
        "kecamatan": "Nuangan"
      },
      {
        "id": 5159,
        "kabkot_id": 373,
        "kecamatan": "Tutuyan"
      },
      {
        "id": 5160,
        "kabkot_id": 374,
        "kecamatan": "Bintauna"
      },
      {
        "id": 5161,
        "kabkot_id": 374,
        "kecamatan": "Bolang Itang Barat"
      },
      {
        "id": 5162,
        "kabkot_id": 374,
        "kecamatan": "Bolang Itang Timur"
      },
      {
        "id": 5163,
        "kabkot_id": 374,
        "kecamatan": "Kaidipang"
      },
      {
        "id": 5164,
        "kabkot_id": 374,
        "kecamatan": "Pinogaluman"
      },
      {
        "id": 5165,
        "kabkot_id": 374,
        "kecamatan": "Sangkub"
      },
      {
        "id": 5166,
        "kabkot_id": 375,
        "kecamatan": "Kendahe"
      },
      {
        "id": 5167,
        "kabkot_id": 375,
        "kecamatan": "Kepulauan Marore"
      },
      {
        "id": 5168,
        "kabkot_id": 375,
        "kecamatan": "Manganitu"
      },
      {
        "id": 5169,
        "kabkot_id": 375,
        "kecamatan": "Manganitu Selatan"
      },
      {
        "id": 5170,
        "kabkot_id": 375,
        "kecamatan": "Nusa Tabukan"
      },
      {
        "id": 5171,
        "kabkot_id": 375,
        "kecamatan": "Tabukan Selatan"
      },
      {
        "id": 5172,
        "kabkot_id": 375,
        "kecamatan": "Tabukan Selatan Tengah"
      },
      {
        "id": 5173,
        "kabkot_id": 375,
        "kecamatan": "Tabukan Selatan Tenggara"
      },
      {
        "id": 5174,
        "kabkot_id": 375,
        "kecamatan": "Tabukan Tengah"
      },
      {
        "id": 5175,
        "kabkot_id": 375,
        "kecamatan": "Tabukan Utara"
      },
      {
        "id": 5176,
        "kabkot_id": 375,
        "kecamatan": "Tahuna"
      },
      {
        "id": 5177,
        "kabkot_id": 375,
        "kecamatan": "Tahuna Barat"
      },
      {
        "id": 5178,
        "kabkot_id": 375,
        "kecamatan": "Tahuna Timur"
      },
      {
        "id": 5179,
        "kabkot_id": 375,
        "kecamatan": "Tamako"
      },
      {
        "id": 5180,
        "kabkot_id": 375,
        "kecamatan": "Tatoareng"
      },
      {
        "id": 5181,
        "kabkot_id": 376,
        "kecamatan": "Biaro"
      },
      {
        "id": 5182,
        "kabkot_id": 376,
        "kecamatan": "Siau Barat"
      },
      {
        "id": 5183,
        "kabkot_id": 376,
        "kecamatan": "Siau Barat Selatan"
      },
      {
        "id": 5184,
        "kabkot_id": 376,
        "kecamatan": "Siau Barat Utara"
      },
      {
        "id": 5185,
        "kabkot_id": 376,
        "kecamatan": "Siau Tengah"
      },
      {
        "id": 5186,
        "kabkot_id": 376,
        "kecamatan": "Siau Timur"
      },
      {
        "id": 5187,
        "kabkot_id": 376,
        "kecamatan": "Siau Timur Selatan"
      },
      {
        "id": 5188,
        "kabkot_id": 376,
        "kecamatan": "Tagulandang"
      },
      {
        "id": 5189,
        "kabkot_id": 376,
        "kecamatan": "Tagulandang Selatan"
      },
      {
        "id": 5190,
        "kabkot_id": 376,
        "kecamatan": "Tagulandang Utara"
      },
      {
        "id": 5191,
        "kabkot_id": 377,
        "kecamatan": "Beo"
      },
      {
        "id": 5192,
        "kabkot_id": 377,
        "kecamatan": "Beo Selatan"
      },
      {
        "id": 5193,
        "kabkot_id": 377,
        "kecamatan": "Beo Utara"
      },
      {
        "id": 5194,
        "kabkot_id": 377,
        "kecamatan": "Damao (Damau)"
      },
      {
        "id": 5195,
        "kabkot_id": 377,
        "kecamatan": "Essang"
      },
      {
        "id": 5196,
        "kabkot_id": 377,
        "kecamatan": "Essang Selatan"
      },
      {
        "id": 5197,
        "kabkot_id": 377,
        "kecamatan": "Gemeh"
      },
      {
        "id": 5198,
        "kabkot_id": 377,
        "kecamatan": "Kabaruan"
      },
      {
        "id": 5199,
        "kabkot_id": 377,
        "kecamatan": "Kalongan"
      },
      {
        "id": 5200,
        "kabkot_id": 377,
        "kecamatan": "Lirung"
      },
      {
        "id": 5201,
        "kabkot_id": 377,
        "kecamatan": "Melonguane"
      },
      {
        "id": 5202,
        "kabkot_id": 377,
        "kecamatan": "Melonguane Timur"
      },
      {
        "id": 5203,
        "kabkot_id": 377,
        "kecamatan": "Miangas"
      },
      {
        "id": 5204,
        "kabkot_id": 377,
        "kecamatan": "Moronge"
      },
      {
        "id": 5205,
        "kabkot_id": 377,
        "kecamatan": "Nanusa"
      },
      {
        "id": 5206,
        "kabkot_id": 377,
        "kecamatan": "Pulutan"
      },
      {
        "id": 5207,
        "kabkot_id": 377,
        "kecamatan": "Rainis"
      },
      {
        "id": 5208,
        "kabkot_id": 377,
        "kecamatan": "Salibabu"
      },
      {
        "id": 5209,
        "kabkot_id": 377,
        "kecamatan": "Tampan Amma"
      },
      {
        "id": 5210,
        "kabkot_id": 378,
        "kecamatan": "Eris"
      },
      {
        "id": 5211,
        "kabkot_id": 378,
        "kecamatan": "Kakas"
      },
      {
        "id": 5212,
        "kabkot_id": 378,
        "kecamatan": "Kakas Barat"
      },
      {
        "id": 5213,
        "kabkot_id": 378,
        "kecamatan": "Kawangkoan"
      },
      {
        "id": 5214,
        "kabkot_id": 378,
        "kecamatan": "Kawangkoan Barat"
      },
      {
        "id": 5215,
        "kabkot_id": 378,
        "kecamatan": "Kawangkoan Utara"
      },
      {
        "id": 5216,
        "kabkot_id": 378,
        "kecamatan": "Kombi"
      },
      {
        "id": 5217,
        "kabkot_id": 378,
        "kecamatan": "Langowan Barat"
      },
      {
        "id": 5218,
        "kabkot_id": 378,
        "kecamatan": "Langowan Selatan"
      },
      {
        "id": 5219,
        "kabkot_id": 378,
        "kecamatan": "Langowan Timur"
      },
      {
        "id": 5220,
        "kabkot_id": 378,
        "kecamatan": "Langowan Utara"
      },
      {
        "id": 5221,
        "kabkot_id": 378,
        "kecamatan": "Lembean Timur"
      },
      {
        "id": 5222,
        "kabkot_id": 378,
        "kecamatan": "Mandolang"
      },
      {
        "id": 5223,
        "kabkot_id": 378,
        "kecamatan": "Pineleng"
      },
      {
        "id": 5224,
        "kabkot_id": 378,
        "kecamatan": "Remboken"
      },
      {
        "id": 5225,
        "kabkot_id": 378,
        "kecamatan": "Sonder"
      },
      {
        "id": 5226,
        "kabkot_id": 378,
        "kecamatan": "Tombariri"
      },
      {
        "id": 5227,
        "kabkot_id": 378,
        "kecamatan": "Tombariri Timur"
      },
      {
        "id": 5228,
        "kabkot_id": 378,
        "kecamatan": "Tombulu"
      },
      {
        "id": 5229,
        "kabkot_id": 378,
        "kecamatan": "Tompaso"
      },
      {
        "id": 5230,
        "kabkot_id": 378,
        "kecamatan": "Tompaso Barat"
      },
      {
        "id": 5231,
        "kabkot_id": 378,
        "kecamatan": "Tondano Barat"
      },
      {
        "id": 5232,
        "kabkot_id": 378,
        "kecamatan": "Tondano Selatan"
      },
      {
        "id": 5233,
        "kabkot_id": 378,
        "kecamatan": "Tondano Timur"
      },
      {
        "id": 5234,
        "kabkot_id": 378,
        "kecamatan": "Tondano Utara"
      },
      {
        "id": 5235,
        "kabkot_id": 379,
        "kecamatan": "Amurang"
      },
      {
        "id": 5236,
        "kabkot_id": 379,
        "kecamatan": "Amurang Barat"
      },
      {
        "id": 5237,
        "kabkot_id": 379,
        "kecamatan": "Amurang Timur"
      },
      {
        "id": 5238,
        "kabkot_id": 379,
        "kecamatan": "Kumelembuai"
      },
      {
        "id": 5239,
        "kabkot_id": 379,
        "kecamatan": "Maesaan"
      },
      {
        "id": 5240,
        "kabkot_id": 379,
        "kecamatan": "Modoinding"
      },
      {
        "id": 5241,
        "kabkot_id": 379,
        "kecamatan": "Motoling"
      },
      {
        "id": 5242,
        "kabkot_id": 379,
        "kecamatan": "Motoling Barat"
      },
      {
        "id": 5243,
        "kabkot_id": 379,
        "kecamatan": "Motoling Timur"
      },
      {
        "id": 5244,
        "kabkot_id": 379,
        "kecamatan": "Ranoyapo"
      },
      {
        "id": 5245,
        "kabkot_id": 379,
        "kecamatan": "Sinonsayang"
      },
      {
        "id": 5246,
        "kabkot_id": 379,
        "kecamatan": "Suluun Tareran"
      },
      {
        "id": 5247,
        "kabkot_id": 379,
        "kecamatan": "Tareran"
      },
      {
        "id": 5248,
        "kabkot_id": 379,
        "kecamatan": "Tatapaan"
      },
      {
        "id": 5249,
        "kabkot_id": 379,
        "kecamatan": "Tenga"
      },
      {
        "id": 5250,
        "kabkot_id": 379,
        "kecamatan": "Tompaso Baru"
      },
      {
        "id": 5251,
        "kabkot_id": 379,
        "kecamatan": "Tumpaan"
      },
      {
        "id": 5252,
        "kabkot_id": 380,
        "kecamatan": "Belang"
      },
      {
        "id": 5253,
        "kabkot_id": 380,
        "kecamatan": "Pasan"
      },
      {
        "id": 5254,
        "kabkot_id": 380,
        "kecamatan": "Pusomaen"
      },
      {
        "id": 5255,
        "kabkot_id": 380,
        "kecamatan": "Ratahan"
      },
      {
        "id": 5256,
        "kabkot_id": 380,
        "kecamatan": "Ratahan Timur"
      },
      {
        "id": 5257,
        "kabkot_id": 380,
        "kecamatan": "Ratatotok"
      },
      {
        "id": 5258,
        "kabkot_id": 380,
        "kecamatan": "Silian Raya"
      },
      {
        "id": 5259,
        "kabkot_id": 380,
        "kecamatan": "Tombatu"
      },
      {
        "id": 5260,
        "kabkot_id": 380,
        "kecamatan": "Tombatu Timur"
      },
      {
        "id": 5261,
        "kabkot_id": 380,
        "kecamatan": "Tombatu Utara"
      },
      {
        "id": 5262,
        "kabkot_id": 380,
        "kecamatan": "Touluaan"
      },
      {
        "id": 5263,
        "kabkot_id": 380,
        "kecamatan": "Touluaan Selatan"
      },
      {
        "id": 5264,
        "kabkot_id": 381,
        "kecamatan": "Airmadidi"
      },
      {
        "id": 5265,
        "kabkot_id": 381,
        "kecamatan": "Dimembe"
      },
      {
        "id": 5266,
        "kabkot_id": 381,
        "kecamatan": "Kalawat"
      },
      {
        "id": 5267,
        "kabkot_id": 381,
        "kecamatan": "Kauditan"
      },
      {
        "id": 5268,
        "kabkot_id": 381,
        "kecamatan": "Kema"
      },
      {
        "id": 5269,
        "kabkot_id": 381,
        "kecamatan": "Likupang Barat"
      },
      {
        "id": 5270,
        "kabkot_id": 381,
        "kecamatan": "Likupang Selatan"
      },
      {
        "id": 5271,
        "kabkot_id": 381,
        "kecamatan": "Likupang Timur"
      },
      {
        "id": 5272,
        "kabkot_id": 381,
        "kecamatan": "Talawaan"
      },
      {
        "id": 5273,
        "kabkot_id": 381,
        "kecamatan": "Wori"
      },
      {
        "id": 5274,
        "kabkot_id": 382,
        "kecamatan": "Aertembaga (Bitung Timur)"
      },
      {
        "id": 5275,
        "kabkot_id": 382,
        "kecamatan": "Girian"
      },
      {
        "id": 5276,
        "kabkot_id": 382,
        "kecamatan": "Lembeh Selatan (Bitung Selatan)"
      },
      {
        "id": 5277,
        "kabkot_id": 382,
        "kecamatan": "Lembeh Utara"
      },
      {
        "id": 5278,
        "kabkot_id": 382,
        "kecamatan": "Madidir (Bitung Tengah)"
      },
      {
        "id": 5279,
        "kabkot_id": 382,
        "kecamatan": "Maesa"
      },
      {
        "id": 5280,
        "kabkot_id": 382,
        "kecamatan": "Matuari (Bitung Barat)"
      },
      {
        "id": 5281,
        "kabkot_id": 382,
        "kecamatan": "Ranowulu (Bitung Utara)"
      },
      {
        "id": 5282,
        "kabkot_id": 383,
        "kecamatan": "Kotamobagu Barat"
      },
      {
        "id": 5283,
        "kabkot_id": 383,
        "kecamatan": "Kotamobagu Selatan"
      },
      {
        "id": 5284,
        "kabkot_id": 383,
        "kecamatan": "Kotamobagu Timur"
      },
      {
        "id": 5285,
        "kabkot_id": 383,
        "kecamatan": "Kotamobagu Utara"
      },
      {
        "id": 5286,
        "kabkot_id": 384,
        "kecamatan": "Bunaken"
      },
      {
        "id": 5287,
        "kabkot_id": 384,
        "kecamatan": "Bunaken Kepulauan"
      },
      {
        "id": 5288,
        "kabkot_id": 384,
        "kecamatan": "Malalayang"
      },
      {
        "id": 5289,
        "kabkot_id": 384,
        "kecamatan": "Mapanget"
      },
      {
        "id": 5290,
        "kabkot_id": 384,
        "kecamatan": "Paal Dua"
      },
      {
        "id": 5291,
        "kabkot_id": 384,
        "kecamatan": "Sario"
      },
      {
        "id": 5292,
        "kabkot_id": 384,
        "kecamatan": "Singkil"
      },
      {
        "id": 5293,
        "kabkot_id": 384,
        "kecamatan": "Tikala"
      },
      {
        "id": 5294,
        "kabkot_id": 384,
        "kecamatan": "Tuminiting"
      },
      {
        "id": 5295,
        "kabkot_id": 384,
        "kecamatan": "Wanea"
      },
      {
        "id": 5296,
        "kabkot_id": 384,
        "kecamatan": "Wenang"
      },
      {
        "id": 5297,
        "kabkot_id": 385,
        "kecamatan": "Tomohon Barat"
      },
      {
        "id": 5298,
        "kabkot_id": 385,
        "kecamatan": "Tomohon Selatan"
      },
      {
        "id": 5299,
        "kabkot_id": 385,
        "kecamatan": "Tomohon Tengah"
      },
      {
        "id": 5300,
        "kabkot_id": 385,
        "kecamatan": "Tomohon Timur"
      },
      {
        "id": 5301,
        "kabkot_id": 385,
        "kecamatan": "Tomohon Utara"
      },
      {
        "id": 5302,
        "kabkot_id": 386,
        "kecamatan": "Balantak"
      },
      {
        "id": 5303,
        "kabkot_id": 386,
        "kecamatan": "Balantak Selatan"
      },
      {
        "id": 5304,
        "kabkot_id": 386,
        "kecamatan": "Balantak Utara"
      },
      {
        "id": 5305,
        "kabkot_id": 386,
        "kecamatan": "Batui"
      },
      {
        "id": 5306,
        "kabkot_id": 386,
        "kecamatan": "Batui Selatan"
      },
      {
        "id": 5307,
        "kabkot_id": 386,
        "kecamatan": "Bualemo (Boalemo)"
      },
      {
        "id": 5308,
        "kabkot_id": 386,
        "kecamatan": "Bunta"
      },
      {
        "id": 5309,
        "kabkot_id": 386,
        "kecamatan": "Kintom"
      },
      {
        "id": 5310,
        "kabkot_id": 386,
        "kecamatan": "Lamala"
      },
      {
        "id": 5311,
        "kabkot_id": 386,
        "kecamatan": "Lobu"
      },
      {
        "id": 5312,
        "kabkot_id": 386,
        "kecamatan": "Luwuk"
      },
      {
        "id": 5313,
        "kabkot_id": 386,
        "kecamatan": "Luwuk Selatan"
      },
      {
        "id": 5314,
        "kabkot_id": 386,
        "kecamatan": "Luwuk Timur"
      },
      {
        "id": 5315,
        "kabkot_id": 386,
        "kecamatan": "Luwuk Utara"
      },
      {
        "id": 5316,
        "kabkot_id": 386,
        "kecamatan": "Mantoh"
      },
      {
        "id": 5317,
        "kabkot_id": 386,
        "kecamatan": "Masama"
      },
      {
        "id": 5318,
        "kabkot_id": 386,
        "kecamatan": "Moilong"
      },
      {
        "id": 5319,
        "kabkot_id": 386,
        "kecamatan": "Nambo"
      },
      {
        "id": 5320,
        "kabkot_id": 386,
        "kecamatan": "Nuhon"
      },
      {
        "id": 5321,
        "kabkot_id": 386,
        "kecamatan": "Pagimana"
      },
      {
        "id": 5322,
        "kabkot_id": 386,
        "kecamatan": "Simpang Raya"
      },
      {
        "id": 5323,
        "kabkot_id": 386,
        "kecamatan": "Toili"
      },
      {
        "id": 5324,
        "kabkot_id": 386,
        "kecamatan": "Toili Barat"
      },
      {
        "id": 5325,
        "kabkot_id": 387,
        "kecamatan": "Buko"
      },
      {
        "id": 5326,
        "kabkot_id": 387,
        "kecamatan": "Buko Selatan"
      },
      {
        "id": 5327,
        "kabkot_id": 387,
        "kecamatan": "Bulagi"
      },
      {
        "id": 5328,
        "kabkot_id": 387,
        "kecamatan": "Bulagi Selatan"
      },
      {
        "id": 5329,
        "kabkot_id": 387,
        "kecamatan": "Bulagi Utara"
      },
      {
        "id": 5330,
        "kabkot_id": 387,
        "kecamatan": "Liang"
      },
      {
        "id": 5331,
        "kabkot_id": 387,
        "kecamatan": "Peling Tengah"
      },
      {
        "id": 5332,
        "kabkot_id": 387,
        "kecamatan": "Tinangkung"
      },
      {
        "id": 5333,
        "kabkot_id": 387,
        "kecamatan": "Tinangkung Selatan"
      },
      {
        "id": 5334,
        "kabkot_id": 387,
        "kecamatan": "Tinangkung Utara"
      },
      {
        "id": 5335,
        "kabkot_id": 387,
        "kecamatan": "Totikum (Totikung)"
      },
      {
        "id": 5336,
        "kabkot_id": 387,
        "kecamatan": "Totikum Selatan"
      },
      {
        "id": 5337,
        "kabkot_id": 388,
        "kecamatan": "Banggai"
      },
      {
        "id": 5338,
        "kabkot_id": 388,
        "kecamatan": "Banggai Selatan"
      },
      {
        "id": 5339,
        "kabkot_id": 388,
        "kecamatan": "Banggai Tengah"
      },
      {
        "id": 5340,
        "kabkot_id": 388,
        "kecamatan": "Banggai Utara"
      },
      {
        "id": 5341,
        "kabkot_id": 388,
        "kecamatan": "Bangkurung"
      },
      {
        "id": 5342,
        "kabkot_id": 388,
        "kecamatan": "Bokan Kepulauan"
      },
      {
        "id": 5343,
        "kabkot_id": 388,
        "kecamatan": "Labobo"
      },
      {
        "id": 5344,
        "kabkot_id": 389,
        "kecamatan": "Biau"
      },
      {
        "id": 5345,
        "kabkot_id": 389,
        "kecamatan": "Bokat"
      },
      {
        "id": 5346,
        "kabkot_id": 389,
        "kecamatan": "Bukal"
      },
      {
        "id": 5347,
        "kabkot_id": 389,
        "kecamatan": "Bunobogu"
      },
      {
        "id": 5348,
        "kabkot_id": 389,
        "kecamatan": "Gadung"
      },
      {
        "id": 5349,
        "kabkot_id": 389,
        "kecamatan": "Karamat"
      },
      {
        "id": 5350,
        "kabkot_id": 389,
        "kecamatan": "Lakea (Lipunoto)"
      },
      {
        "id": 5351,
        "kabkot_id": 389,
        "kecamatan": "Momunu"
      },
      {
        "id": 5352,
        "kabkot_id": 389,
        "kecamatan": "Paleleh"
      },
      {
        "id": 5353,
        "kabkot_id": 389,
        "kecamatan": "Paleleh Barat"
      },
      {
        "id": 5354,
        "kabkot_id": 389,
        "kecamatan": "Tiloan"
      },
      {
        "id": 5355,
        "kabkot_id": 390,
        "kecamatan": "Balaesang"
      },
      {
        "id": 5356,
        "kabkot_id": 390,
        "kecamatan": "Balaesang Tanjung"
      },
      {
        "id": 5357,
        "kabkot_id": 390,
        "kecamatan": "Banawa"
      },
      {
        "id": 5358,
        "kabkot_id": 390,
        "kecamatan": "Banawa Selatan"
      },
      {
        "id": 5359,
        "kabkot_id": 390,
        "kecamatan": "Banawa Tengah"
      },
      {
        "id": 5360,
        "kabkot_id": 390,
        "kecamatan": "Dampelas"
      },
      {
        "id": 5361,
        "kabkot_id": 390,
        "kecamatan": "Labuan"
      },
      {
        "id": 5362,
        "kabkot_id": 390,
        "kecamatan": "Panembani"
      },
      {
        "id": 5363,
        "kabkot_id": 390,
        "kecamatan": "Rio Pakava"
      },
      {
        "id": 5364,
        "kabkot_id": 390,
        "kecamatan": "Sindue"
      },
      {
        "id": 5365,
        "kabkot_id": 390,
        "kecamatan": "Sindue Tobata"
      },
      {
        "id": 5366,
        "kabkot_id": 390,
        "kecamatan": "Sindue Tombusabora"
      },
      {
        "id": 5367,
        "kabkot_id": 390,
        "kecamatan": "Sirenja"
      },
      {
        "id": 5368,
        "kabkot_id": 390,
        "kecamatan": "Sojol"
      },
      {
        "id": 5369,
        "kabkot_id": 390,
        "kecamatan": "Sojol Utara"
      },
      {
        "id": 5370,
        "kabkot_id": 390,
        "kecamatan": "Tanantovea"
      },
      {
        "id": 5371,
        "kabkot_id": 391,
        "kecamatan": "Bahodopi"
      },
      {
        "id": 5372,
        "kabkot_id": 391,
        "kecamatan": "Bumi Raya"
      },
      {
        "id": 5373,
        "kabkot_id": 391,
        "kecamatan": "Bungku Barat"
      },
      {
        "id": 5374,
        "kabkot_id": 391,
        "kecamatan": "Bungku Pesisir"
      },
      {
        "id": 5375,
        "kabkot_id": 391,
        "kecamatan": "Bungku Selatan"
      },
      {
        "id": 5376,
        "kabkot_id": 391,
        "kecamatan": "Bungku Tengah"
      },
      {
        "id": 5377,
        "kabkot_id": 391,
        "kecamatan": "Bungku Timur"
      },
      {
        "id": 5378,
        "kabkot_id": 391,
        "kecamatan": "Menui Kepulauan"
      },
      {
        "id": 5379,
        "kabkot_id": 391,
        "kecamatan": "Petasia Barat"
      },
      {
        "id": 5380,
        "kabkot_id": 391,
        "kecamatan": "Wita Ponda"
      },
      {
        "id": 5381,
        "kabkot_id": 392,
        "kecamatan": "Bungku Utara"
      },
      {
        "id": 5382,
        "kabkot_id": 392,
        "kecamatan": "Lembo"
      },
      {
        "id": 5383,
        "kabkot_id": 392,
        "kecamatan": "Lembo Raya"
      },
      {
        "id": 5384,
        "kabkot_id": 392,
        "kecamatan": "Mamosalato"
      },
      {
        "id": 5385,
        "kabkot_id": 392,
        "kecamatan": "Mori Atas"
      },
      {
        "id": 5386,
        "kabkot_id": 392,
        "kecamatan": "Mori Utara"
      },
      {
        "id": 5387,
        "kabkot_id": 392,
        "kecamatan": "Petasia"
      },
      {
        "id": 5388,
        "kabkot_id": 392,
        "kecamatan": "Petasia Timur"
      },
      {
        "id": 5389,
        "kabkot_id": 392,
        "kecamatan": "Soyo Jaya"
      },
      {
        "id": 5390,
        "kabkot_id": 393,
        "kecamatan": "Ampibabo"
      },
      {
        "id": 5391,
        "kabkot_id": 393,
        "kecamatan": "Balinggi"
      },
      {
        "id": 5392,
        "kabkot_id": 393,
        "kecamatan": "Bolano"
      },
      {
        "id": 5393,
        "kabkot_id": 393,
        "kecamatan": "Bolano Lambunu"
      },
      {
        "id": 5394,
        "kabkot_id": 393,
        "kecamatan": "Kasimbar"
      },
      {
        "id": 5395,
        "kabkot_id": 393,
        "kecamatan": "Mepanga"
      },
      {
        "id": 5396,
        "kabkot_id": 393,
        "kecamatan": "Moutong"
      },
      {
        "id": 5397,
        "kabkot_id": 393,
        "kecamatan": "Ongka Malino"
      },
      {
        "id": 5398,
        "kabkot_id": 393,
        "kecamatan": "Palasa"
      },
      {
        "id": 5399,
        "kabkot_id": 393,
        "kecamatan": "Parigi"
      },
      {
        "id": 5400,
        "kabkot_id": 393,
        "kecamatan": "Parigi Barat"
      },
      {
        "id": 5401,
        "kabkot_id": 393,
        "kecamatan": "Parigi Selatan"
      },
      {
        "id": 5402,
        "kabkot_id": 393,
        "kecamatan": "Parigi Tengah"
      },
      {
        "id": 5403,
        "kabkot_id": 393,
        "kecamatan": "Parigi Utara"
      },
      {
        "id": 5404,
        "kabkot_id": 393,
        "kecamatan": "Sausu"
      },
      {
        "id": 5405,
        "kabkot_id": 393,
        "kecamatan": "Sidoan"
      },
      {
        "id": 5406,
        "kabkot_id": 393,
        "kecamatan": "Siniu"
      },
      {
        "id": 5407,
        "kabkot_id": 393,
        "kecamatan": "Taopa"
      },
      {
        "id": 5408,
        "kabkot_id": 393,
        "kecamatan": "Tinombo"
      },
      {
        "id": 5409,
        "kabkot_id": 393,
        "kecamatan": "Tinombo Selatan"
      },
      {
        "id": 5410,
        "kabkot_id": 393,
        "kecamatan": "Tomini"
      },
      {
        "id": 5411,
        "kabkot_id": 393,
        "kecamatan": "Toribulu"
      },
      {
        "id": 5412,
        "kabkot_id": 393,
        "kecamatan": "Torue"
      },
      {
        "id": 5413,
        "kabkot_id": 394,
        "kecamatan": "Lage"
      },
      {
        "id": 5414,
        "kabkot_id": 394,
        "kecamatan": "Lore Barat"
      },
      {
        "id": 5415,
        "kabkot_id": 394,
        "kecamatan": "Lore Piore"
      },
      {
        "id": 5416,
        "kabkot_id": 394,
        "kecamatan": "Lore Selatan"
      },
      {
        "id": 5417,
        "kabkot_id": 394,
        "kecamatan": "Lore Tengah"
      },
      {
        "id": 5418,
        "kabkot_id": 394,
        "kecamatan": "Lore Timur"
      },
      {
        "id": 5419,
        "kabkot_id": 394,
        "kecamatan": "Lore Utara"
      },
      {
        "id": 5420,
        "kabkot_id": 394,
        "kecamatan": "Pamona Barat"
      },
      {
        "id": 5421,
        "kabkot_id": 394,
        "kecamatan": "Pamona Puselemba"
      },
      {
        "id": 5422,
        "kabkot_id": 394,
        "kecamatan": "Pamona Selatan"
      },
      {
        "id": 5423,
        "kabkot_id": 394,
        "kecamatan": "Pamona Tenggara"
      },
      {
        "id": 5424,
        "kabkot_id": 394,
        "kecamatan": "Pamona Timur"
      },
      {
        "id": 5425,
        "kabkot_id": 394,
        "kecamatan": "Pamona Utara"
      },
      {
        "id": 5426,
        "kabkot_id": 394,
        "kecamatan": "Poso Kota"
      },
      {
        "id": 5427,
        "kabkot_id": 394,
        "kecamatan": "Poso Kota Selatan"
      },
      {
        "id": 5428,
        "kabkot_id": 394,
        "kecamatan": "Poso Kota Utara"
      },
      {
        "id": 5429,
        "kabkot_id": 394,
        "kecamatan": "Poso Pesisir"
      },
      {
        "id": 5430,
        "kabkot_id": 394,
        "kecamatan": "Poso Pesisir Selatan"
      },
      {
        "id": 5431,
        "kabkot_id": 394,
        "kecamatan": "Poso Pesisir Utara"
      },
      {
        "id": 5432,
        "kabkot_id": 395,
        "kecamatan": "Dolo"
      },
      {
        "id": 5433,
        "kabkot_id": 395,
        "kecamatan": "Dolo Barat"
      },
      {
        "id": 5434,
        "kabkot_id": 395,
        "kecamatan": "Dolo Selatan"
      },
      {
        "id": 5435,
        "kabkot_id": 395,
        "kecamatan": "Gumbasa"
      },
      {
        "id": 5436,
        "kabkot_id": 395,
        "kecamatan": "Kinovaro"
      },
      {
        "id": 5437,
        "kabkot_id": 395,
        "kecamatan": "Kinovaru"
      },
      {
        "id": 5438,
        "kabkot_id": 395,
        "kecamatan": "Kulawi"
      },
      {
        "id": 5439,
        "kabkot_id": 395,
        "kecamatan": "Kulawi Selatan"
      },
      {
        "id": 5440,
        "kabkot_id": 395,
        "kecamatan": "Lindu"
      },
      {
        "id": 5441,
        "kabkot_id": 395,
        "kecamatan": "Marawola"
      },
      {
        "id": 5442,
        "kabkot_id": 395,
        "kecamatan": "Marawola Barat"
      },
      {
        "id": 5443,
        "kabkot_id": 395,
        "kecamatan": "Nokilalaki"
      },
      {
        "id": 5444,
        "kabkot_id": 395,
        "kecamatan": "Palolo"
      },
      {
        "id": 5445,
        "kabkot_id": 395,
        "kecamatan": "Pipikoro"
      },
      {
        "id": 5446,
        "kabkot_id": 395,
        "kecamatan": "Sigi Biromaru"
      },
      {
        "id": 5447,
        "kabkot_id": 395,
        "kecamatan": "Tanambulava"
      },
      {
        "id": 5448,
        "kabkot_id": 396,
        "kecamatan": "Ampana Kota"
      },
      {
        "id": 5449,
        "kabkot_id": 396,
        "kecamatan": "Ampana Tete"
      },
      {
        "id": 5450,
        "kabkot_id": 396,
        "kecamatan": "Batudaka"
      },
      {
        "id": 5451,
        "kabkot_id": 396,
        "kecamatan": "Ratolindo"
      },
      {
        "id": 5452,
        "kabkot_id": 396,
        "kecamatan": "Talatako"
      },
      {
        "id": 5453,
        "kabkot_id": 396,
        "kecamatan": "Togean"
      },
      {
        "id": 5454,
        "kabkot_id": 396,
        "kecamatan": "Tojo"
      },
      {
        "id": 5455,
        "kabkot_id": 396,
        "kecamatan": "Tojo Barat"
      },
      {
        "id": 5456,
        "kabkot_id": 396,
        "kecamatan": "Ulubongka"
      },
      {
        "id": 5457,
        "kabkot_id": 396,
        "kecamatan": "Una Una"
      },
      {
        "id": 5458,
        "kabkot_id": 396,
        "kecamatan": "Walea Besar"
      },
      {
        "id": 5459,
        "kabkot_id": 396,
        "kecamatan": "Walea Kepulauan"
      },
      {
        "id": 5460,
        "kabkot_id": 397,
        "kecamatan": "Baolan"
      },
      {
        "id": 5461,
        "kabkot_id": 397,
        "kecamatan": "Basidondo"
      },
      {
        "id": 5462,
        "kabkot_id": 397,
        "kecamatan": "Dako Pamean"
      },
      {
        "id": 5463,
        "kabkot_id": 397,
        "kecamatan": "Dampal Selatan"
      },
      {
        "id": 5464,
        "kabkot_id": 397,
        "kecamatan": "Dampal Utara"
      },
      {
        "id": 5465,
        "kabkot_id": 397,
        "kecamatan": "Dondo"
      },
      {
        "id": 5466,
        "kabkot_id": 397,
        "kecamatan": "Galang"
      },
      {
        "id": 5467,
        "kabkot_id": 397,
        "kecamatan": "Lampasio"
      },
      {
        "id": 5468,
        "kabkot_id": 397,
        "kecamatan": "Ogodeide"
      },
      {
        "id": 5469,
        "kabkot_id": 397,
        "kecamatan": "Tolitoli Utara"
      },
      {
        "id": 5470,
        "kabkot_id": 398,
        "kecamatan": "Mantikulore"
      },
      {
        "id": 5471,
        "kabkot_id": 398,
        "kecamatan": "Palu Barat"
      },
      {
        "id": 5472,
        "kabkot_id": 398,
        "kecamatan": "Palu Selatan"
      },
      {
        "id": 5473,
        "kabkot_id": 398,
        "kecamatan": "Palu Timur"
      },
      {
        "id": 5474,
        "kabkot_id": 398,
        "kecamatan": "Palu Utara"
      },
      {
        "id": 5475,
        "kabkot_id": 398,
        "kecamatan": "Tatanga"
      },
      {
        "id": 5476,
        "kabkot_id": 398,
        "kecamatan": "Tawaeli"
      },
      {
        "id": 5477,
        "kabkot_id": 398,
        "kecamatan": "Ulujadi"
      },
      {
        "id": 5478,
        "kabkot_id": 399,
        "kecamatan": "Bantaeng"
      },
      {
        "id": 5479,
        "kabkot_id": 399,
        "kecamatan": "Bissappu"
      },
      {
        "id": 5480,
        "kabkot_id": 399,
        "kecamatan": "Eremerasa"
      },
      {
        "id": 5481,
        "kabkot_id": 399,
        "kecamatan": "Gantarang Keke (Gantareng Keke)"
      },
      {
        "id": 5482,
        "kabkot_id": 399,
        "kecamatan": "Pajukukang"
      },
      {
        "id": 5483,
        "kabkot_id": 399,
        "kecamatan": "Sinoa"
      },
      {
        "id": 5484,
        "kabkot_id": 399,
        "kecamatan": "Tompobulu"
      },
      {
        "id": 5485,
        "kabkot_id": 399,
        "kecamatan": "Uluere"
      },
      {
        "id": 5486,
        "kabkot_id": 400,
        "kecamatan": "Balusu"
      },
      {
        "id": 5487,
        "kabkot_id": 400,
        "kecamatan": "Barru"
      },
      {
        "id": 5488,
        "kabkot_id": 400,
        "kecamatan": "Mallusetasi"
      },
      {
        "id": 5489,
        "kabkot_id": 400,
        "kecamatan": "Pujananting"
      },
      {
        "id": 5490,
        "kabkot_id": 400,
        "kecamatan": "Soppeng Riaja"
      },
      {
        "id": 5491,
        "kabkot_id": 400,
        "kecamatan": "Tanete Riaja"
      },
      {
        "id": 5492,
        "kabkot_id": 400,
        "kecamatan": "Tanete Rilau"
      },
      {
        "id": 5493,
        "kabkot_id": 401,
        "kecamatan": "Ajangale"
      },
      {
        "id": 5494,
        "kabkot_id": 401,
        "kecamatan": "Amali"
      },
      {
        "id": 5495,
        "kabkot_id": 401,
        "kecamatan": "Awangpone"
      },
      {
        "id": 5496,
        "kabkot_id": 401,
        "kecamatan": "Barebbo"
      },
      {
        "id": 5497,
        "kabkot_id": 401,
        "kecamatan": "Bengo"
      },
      {
        "id": 5498,
        "kabkot_id": 401,
        "kecamatan": "Bontocani"
      },
      {
        "id": 5499,
        "kabkot_id": 401,
        "kecamatan": "Cenrana"
      },
      {
        "id": 5500,
        "kabkot_id": 401,
        "kecamatan": "Cina"
      },
      {
        "id": 5501,
        "kabkot_id": 401,
        "kecamatan": "Dua Boccoe"
      },
      {
        "id": 5502,
        "kabkot_id": 401,
        "kecamatan": "Kahu"
      },
      {
        "id": 5503,
        "kabkot_id": 401,
        "kecamatan": "Kajuara"
      },
      {
        "id": 5504,
        "kabkot_id": 401,
        "kecamatan": "Lamuru"
      },
      {
        "id": 5505,
        "kabkot_id": 401,
        "kecamatan": "Lappariaja"
      },
      {
        "id": 5506,
        "kabkot_id": 401,
        "kecamatan": "Libureng"
      },
      {
        "id": 5507,
        "kabkot_id": 401,
        "kecamatan": "Mare"
      },
      {
        "id": 5508,
        "kabkot_id": 401,
        "kecamatan": "Palakka"
      },
      {
        "id": 5509,
        "kabkot_id": 401,
        "kecamatan": "Patimpeng"
      },
      {
        "id": 5510,
        "kabkot_id": 401,
        "kecamatan": "Ponre"
      },
      {
        "id": 5511,
        "kabkot_id": 401,
        "kecamatan": "Salomekko"
      },
      {
        "id": 5512,
        "kabkot_id": 401,
        "kecamatan": "Sibulue"
      },
      {
        "id": 5513,
        "kabkot_id": 401,
        "kecamatan": "Tanete Riattang"
      },
      {
        "id": 5514,
        "kabkot_id": 401,
        "kecamatan": "Tanete Riattang Barat"
      },
      {
        "id": 5515,
        "kabkot_id": 401,
        "kecamatan": "Tanete Riattang Timur"
      },
      {
        "id": 5516,
        "kabkot_id": 401,
        "kecamatan": "Tellu Limpoe"
      },
      {
        "id": 5517,
        "kabkot_id": 401,
        "kecamatan": "Tellu Siattinge"
      },
      {
        "id": 5518,
        "kabkot_id": 401,
        "kecamatan": "Tonra"
      },
      {
        "id": 5519,
        "kabkot_id": 401,
        "kecamatan": "Ulaweng"
      },
      {
        "id": 5520,
        "kabkot_id": 402,
        "kecamatan": "Bonto Bahari"
      },
      {
        "id": 5521,
        "kabkot_id": 402,
        "kecamatan": "Bontotiro"
      },
      {
        "id": 5522,
        "kabkot_id": 402,
        "kecamatan": "Bulukumba (Bulukumpa)"
      },
      {
        "id": 5523,
        "kabkot_id": 402,
        "kecamatan": "Gantorang/Gantarang (Gangking)"
      },
      {
        "id": 5524,
        "kabkot_id": 402,
        "kecamatan": "Hero Lange-Lange (Herlang)"
      },
      {
        "id": 5525,
        "kabkot_id": 402,
        "kecamatan": "Kajang"
      },
      {
        "id": 5526,
        "kabkot_id": 402,
        "kecamatan": "Kindang"
      },
      {
        "id": 5527,
        "kabkot_id": 402,
        "kecamatan": "Rilau Ale"
      },
      {
        "id": 5528,
        "kabkot_id": 402,
        "kecamatan": "Ujung Bulu"
      },
      {
        "id": 5529,
        "kabkot_id": 402,
        "kecamatan": "Ujung Loe"
      },
      {
        "id": 5530,
        "kabkot_id": 403,
        "kecamatan": "Alla"
      },
      {
        "id": 5531,
        "kabkot_id": 403,
        "kecamatan": "Anggeraja"
      },
      {
        "id": 5532,
        "kabkot_id": 403,
        "kecamatan": "Baraka"
      },
      {
        "id": 5533,
        "kabkot_id": 403,
        "kecamatan": "Baroko"
      },
      {
        "id": 5534,
        "kabkot_id": 403,
        "kecamatan": "Bungin"
      },
      {
        "id": 5535,
        "kabkot_id": 403,
        "kecamatan": "Buntu Batu"
      },
      {
        "id": 5536,
        "kabkot_id": 403,
        "kecamatan": "Cendana"
      },
      {
        "id": 5537,
        "kabkot_id": 403,
        "kecamatan": "Curio"
      },
      {
        "id": 5538,
        "kabkot_id": 403,
        "kecamatan": "Enrekang"
      },
      {
        "id": 5539,
        "kabkot_id": 403,
        "kecamatan": "Maiwa"
      },
      {
        "id": 5540,
        "kabkot_id": 403,
        "kecamatan": "Malua"
      },
      {
        "id": 5541,
        "kabkot_id": 403,
        "kecamatan": "Masalle"
      },
      {
        "id": 5542,
        "kabkot_id": 404,
        "kecamatan": "Bajeng"
      },
      {
        "id": 5543,
        "kabkot_id": 404,
        "kecamatan": "Bajeng Barat"
      },
      {
        "id": 5544,
        "kabkot_id": 404,
        "kecamatan": "Barombong"
      },
      {
        "id": 5545,
        "kabkot_id": 404,
        "kecamatan": "Biringbulu"
      },
      {
        "id": 5546,
        "kabkot_id": 404,
        "kecamatan": "Bontolempangang"
      },
      {
        "id": 5547,
        "kabkot_id": 404,
        "kecamatan": "Bontomarannu"
      },
      {
        "id": 5548,
        "kabkot_id": 404,
        "kecamatan": "Bontonompo"
      },
      {
        "id": 5549,
        "kabkot_id": 404,
        "kecamatan": "Bontonompo Selatan"
      },
      {
        "id": 5550,
        "kabkot_id": 404,
        "kecamatan": "Bungaya"
      },
      {
        "id": 5551,
        "kabkot_id": 404,
        "kecamatan": "Manuju"
      },
      {
        "id": 5552,
        "kabkot_id": 404,
        "kecamatan": "Pallangga"
      },
      {
        "id": 5553,
        "kabkot_id": 404,
        "kecamatan": "Parangloe"
      },
      {
        "id": 5554,
        "kabkot_id": 404,
        "kecamatan": "Parigi"
      },
      {
        "id": 5555,
        "kabkot_id": 404,
        "kecamatan": "Pattallassang"
      },
      {
        "id": 5556,
        "kabkot_id": 404,
        "kecamatan": "Somba Opu (Upu)"
      },
      {
        "id": 5557,
        "kabkot_id": 404,
        "kecamatan": "Tinggimoncong"
      },
      {
        "id": 5558,
        "kabkot_id": 404,
        "kecamatan": "Tombolo Pao"
      },
      {
        "id": 5559,
        "kabkot_id": 404,
        "kecamatan": "Tompobulu"
      },
      {
        "id": 5560,
        "kabkot_id": 405,
        "kecamatan": "Arungkeke"
      },
      {
        "id": 5561,
        "kabkot_id": 405,
        "kecamatan": "Bangkala"
      },
      {
        "id": 5562,
        "kabkot_id": 405,
        "kecamatan": "Bangkala Barat"
      },
      {
        "id": 5563,
        "kabkot_id": 405,
        "kecamatan": "Batang"
      },
      {
        "id": 5564,
        "kabkot_id": 405,
        "kecamatan": "Binamu"
      },
      {
        "id": 5565,
        "kabkot_id": 405,
        "kecamatan": "Bontoramba"
      },
      {
        "id": 5566,
        "kabkot_id": 405,
        "kecamatan": "Kelara"
      },
      {
        "id": 5567,
        "kabkot_id": 405,
        "kecamatan": "Rumbia"
      },
      {
        "id": 5568,
        "kabkot_id": 405,
        "kecamatan": "Tamalatea"
      },
      {
        "id": 5569,
        "kabkot_id": 405,
        "kecamatan": "Tarowang"
      },
      {
        "id": 5570,
        "kabkot_id": 405,
        "kecamatan": "Turatea"
      },
      {
        "id": 5571,
        "kabkot_id": 406,
        "kecamatan": "Benteng"
      },
      {
        "id": 5572,
        "kabkot_id": 406,
        "kecamatan": "Bontoharu"
      },
      {
        "id": 5573,
        "kabkot_id": 406,
        "kecamatan": "Bontomanai"
      },
      {
        "id": 5574,
        "kabkot_id": 406,
        "kecamatan": "Bontomatene"
      },
      {
        "id": 5575,
        "kabkot_id": 406,
        "kecamatan": "Bontosikuyu"
      },
      {
        "id": 5576,
        "kabkot_id": 406,
        "kecamatan": "Buki"
      },
      {
        "id": 5577,
        "kabkot_id": 406,
        "kecamatan": "Pasilambena"
      },
      {
        "id": 5578,
        "kabkot_id": 406,
        "kecamatan": "Pasimarannu"
      },
      {
        "id": 5579,
        "kabkot_id": 406,
        "kecamatan": "Pasimassunggu"
      },
      {
        "id": 5580,
        "kabkot_id": 406,
        "kecamatan": "Pasimasunggu Timur"
      },
      {
        "id": 5581,
        "kabkot_id": 406,
        "kecamatan": "Takabonerate"
      },
      {
        "id": 5582,
        "kabkot_id": 407,
        "kecamatan": "Bajo"
      },
      {
        "id": 5583,
        "kabkot_id": 407,
        "kecamatan": "Bajo Barat"
      },
      {
        "id": 5584,
        "kabkot_id": 407,
        "kecamatan": "Basse Sangtempe Utara"
      },
      {
        "id": 5585,
        "kabkot_id": 407,
        "kecamatan": "Bassesang Tempe (Bastem)"
      },
      {
        "id": 5586,
        "kabkot_id": 407,
        "kecamatan": "Belopa"
      },
      {
        "id": 5587,
        "kabkot_id": 407,
        "kecamatan": "Belopa Utara"
      },
      {
        "id": 5588,
        "kabkot_id": 407,
        "kecamatan": "Bua"
      },
      {
        "id": 5589,
        "kabkot_id": 407,
        "kecamatan": "Bua Ponrang (Bupon)"
      },
      {
        "id": 5590,
        "kabkot_id": 407,
        "kecamatan": "Kamanre"
      },
      {
        "id": 5591,
        "kabkot_id": 407,
        "kecamatan": "Lamasi"
      },
      {
        "id": 5592,
        "kabkot_id": 407,
        "kecamatan": "Lamasi Timur"
      },
      {
        "id": 5593,
        "kabkot_id": 407,
        "kecamatan": "Larompong"
      },
      {
        "id": 5594,
        "kabkot_id": 407,
        "kecamatan": "Larompong Selatan"
      },
      {
        "id": 5595,
        "kabkot_id": 407,
        "kecamatan": "Latimojong"
      },
      {
        "id": 5596,
        "kabkot_id": 407,
        "kecamatan": "Ponrang"
      },
      {
        "id": 5597,
        "kabkot_id": 407,
        "kecamatan": "Ponrang Selatan"
      },
      {
        "id": 5598,
        "kabkot_id": 407,
        "kecamatan": "Suli"
      },
      {
        "id": 5599,
        "kabkot_id": 407,
        "kecamatan": "Suli Barat"
      },
      {
        "id": 5600,
        "kabkot_id": 407,
        "kecamatan": "Walenrang"
      },
      {
        "id": 5601,
        "kabkot_id": 407,
        "kecamatan": "Walenrang Barat"
      },
      {
        "id": 5602,
        "kabkot_id": 407,
        "kecamatan": "Walenrang Timur"
      },
      {
        "id": 5603,
        "kabkot_id": 407,
        "kecamatan": "Walenrang Utara"
      },
      {
        "id": 5604,
        "kabkot_id": 408,
        "kecamatan": "Angkona"
      },
      {
        "id": 5605,
        "kabkot_id": 408,
        "kecamatan": "Burau"
      },
      {
        "id": 5606,
        "kabkot_id": 408,
        "kecamatan": "Kalaena"
      },
      {
        "id": 5607,
        "kabkot_id": 408,
        "kecamatan": "Malili"
      },
      {
        "id": 5608,
        "kabkot_id": 408,
        "kecamatan": "Mangkutana"
      },
      {
        "id": 5609,
        "kabkot_id": 408,
        "kecamatan": "Nuha"
      },
      {
        "id": 5610,
        "kabkot_id": 408,
        "kecamatan": "Tomoni"
      },
      {
        "id": 5611,
        "kabkot_id": 408,
        "kecamatan": "Tomoni Timur"
      },
      {
        "id": 5612,
        "kabkot_id": 408,
        "kecamatan": "Towuti"
      },
      {
        "id": 5613,
        "kabkot_id": 408,
        "kecamatan": "Wasuponda"
      },
      {
        "id": 5614,
        "kabkot_id": 408,
        "kecamatan": "Wotu"
      },
      {
        "id": 5615,
        "kabkot_id": 409,
        "kecamatan": "Baebunta"
      },
      {
        "id": 5616,
        "kabkot_id": 409,
        "kecamatan": "Bone-Bone"
      },
      {
        "id": 5617,
        "kabkot_id": 409,
        "kecamatan": "Limbong"
      },
      {
        "id": 5618,
        "kabkot_id": 409,
        "kecamatan": "Malangke"
      },
      {
        "id": 5619,
        "kabkot_id": 409,
        "kecamatan": "Malangke Barat"
      },
      {
        "id": 5620,
        "kabkot_id": 409,
        "kecamatan": "Mappedeceng"
      },
      {
        "id": 5621,
        "kabkot_id": 409,
        "kecamatan": "Masamba"
      },
      {
        "id": 5622,
        "kabkot_id": 409,
        "kecamatan": "Rampi"
      },
      {
        "id": 5623,
        "kabkot_id": 409,
        "kecamatan": "Sabbang"
      },
      {
        "id": 5624,
        "kabkot_id": 409,
        "kecamatan": "Seko"
      },
      {
        "id": 5625,
        "kabkot_id": 409,
        "kecamatan": "Sukamaju"
      },
      {
        "id": 5626,
        "kabkot_id": 409,
        "kecamatan": "Tana Lili"
      },
      {
        "id": 5627,
        "kabkot_id": 410,
        "kecamatan": "Bantimurung"
      },
      {
        "id": 5628,
        "kabkot_id": 410,
        "kecamatan": "Bontoa (Maros Utara)"
      },
      {
        "id": 5629,
        "kabkot_id": 410,
        "kecamatan": "Camba"
      },
      {
        "id": 5630,
        "kabkot_id": 410,
        "kecamatan": "Cenrana"
      },
      {
        "id": 5631,
        "kabkot_id": 410,
        "kecamatan": "Lau"
      },
      {
        "id": 5632,
        "kabkot_id": 410,
        "kecamatan": "Mallawa"
      },
      {
        "id": 5633,
        "kabkot_id": 410,
        "kecamatan": "Mandai"
      },
      {
        "id": 5634,
        "kabkot_id": 410,
        "kecamatan": "Maros Baru"
      },
      {
        "id": 5635,
        "kabkot_id": 410,
        "kecamatan": "Marusu"
      },
      {
        "id": 5636,
        "kabkot_id": 410,
        "kecamatan": "Moncongloe"
      },
      {
        "id": 5637,
        "kabkot_id": 410,
        "kecamatan": "Simbang"
      },
      {
        "id": 5638,
        "kabkot_id": 410,
        "kecamatan": "Tanralili"
      },
      {
        "id": 5639,
        "kabkot_id": 410,
        "kecamatan": "Tompu Bulu"
      },
      {
        "id": 5640,
        "kabkot_id": 410,
        "kecamatan": "Turikale"
      },
      {
        "id": 5641,
        "kabkot_id": 411,
        "kecamatan": "Balocci"
      },
      {
        "id": 5642,
        "kabkot_id": 411,
        "kecamatan": "Bungoro"
      },
      {
        "id": 5643,
        "kabkot_id": 411,
        "kecamatan": "Labakkang"
      },
      {
        "id": 5644,
        "kabkot_id": 411,
        "kecamatan": "Liukang Kalmas (Kalukuang Masalima)"
      },
      {
        "id": 5645,
        "kabkot_id": 411,
        "kecamatan": "Liukang Tangaya"
      },
      {
        "id": 5646,
        "kabkot_id": 411,
        "kecamatan": "Liukang Tupabbiring"
      },
      {
        "id": 5647,
        "kabkot_id": 411,
        "kecamatan": "Liukang Tupabbiring Utara"
      },
      {
        "id": 5648,
        "kabkot_id": 411,
        "kecamatan": "Mandalle"
      },
      {
        "id": 5649,
        "kabkot_id": 411,
        "kecamatan": "Marang (Ma Rang)"
      },
      {
        "id": 5650,
        "kabkot_id": 411,
        "kecamatan": "Minasa Tene"
      },
      {
        "id": 5651,
        "kabkot_id": 411,
        "kecamatan": "Pangkajene"
      },
      {
        "id": 5652,
        "kabkot_id": 411,
        "kecamatan": "Segeri"
      },
      {
        "id": 5653,
        "kabkot_id": 411,
        "kecamatan": "Tondong Tallasa"
      },
      {
        "id": 5654,
        "kabkot_id": 412,
        "kecamatan": "Batulappa"
      },
      {
        "id": 5655,
        "kabkot_id": 412,
        "kecamatan": "Cempa"
      },
      {
        "id": 5656,
        "kabkot_id": 412,
        "kecamatan": "Duampanua"
      },
      {
        "id": 5657,
        "kabkot_id": 412,
        "kecamatan": "Lanrisang"
      },
      {
        "id": 5658,
        "kabkot_id": 412,
        "kecamatan": "Lembang"
      },
      {
        "id": 5659,
        "kabkot_id": 412,
        "kecamatan": "Mattiro Bulu"
      },
      {
        "id": 5660,
        "kabkot_id": 412,
        "kecamatan": "Mattiro Sompe"
      },
      {
        "id": 5661,
        "kabkot_id": 412,
        "kecamatan": "Paleteang"
      },
      {
        "id": 5662,
        "kabkot_id": 412,
        "kecamatan": "Patampanua"
      },
      {
        "id": 5663,
        "kabkot_id": 412,
        "kecamatan": "Suppa"
      },
      {
        "id": 5664,
        "kabkot_id": 412,
        "kecamatan": "Tiroang"
      },
      {
        "id": 5665,
        "kabkot_id": 412,
        "kecamatan": "Watang Sawitto"
      },
      {
        "id": 5666,
        "kabkot_id": 413,
        "kecamatan": "Baranti"
      },
      {
        "id": 5667,
        "kabkot_id": 413,
        "kecamatan": "Dua Pitue"
      },
      {
        "id": 5668,
        "kabkot_id": 413,
        "kecamatan": "Kulo"
      },
      {
        "id": 5669,
        "kabkot_id": 413,
        "kecamatan": "Maritengngae"
      },
      {
        "id": 5670,
        "kabkot_id": 413,
        "kecamatan": "Panca Lautan (Lautang)"
      },
      {
        "id": 5671,
        "kabkot_id": 413,
        "kecamatan": "Panca Rijang"
      },
      {
        "id": 5672,
        "kabkot_id": 413,
        "kecamatan": "Pitu Raise/Riase"
      },
      {
        "id": 5673,
        "kabkot_id": 413,
        "kecamatan": "Pitu Riawa"
      },
      {
        "id": 5674,
        "kabkot_id": 413,
        "kecamatan": "Tellu Limpoe"
      },
      {
        "id": 5675,
        "kabkot_id": 413,
        "kecamatan": "Watang Pulu"
      },
      {
        "id": 5676,
        "kabkot_id": 413,
        "kecamatan": "Wattang Sidenreng (Watang Sidenreng)"
      },
      {
        "id": 5677,
        "kabkot_id": 414,
        "kecamatan": "Bulupoddo"
      },
      {
        "id": 5678,
        "kabkot_id": 414,
        "kecamatan": "Pulau Sembilan"
      },
      {
        "id": 5679,
        "kabkot_id": 414,
        "kecamatan": "Sinjai Barat"
      },
      {
        "id": 5680,
        "kabkot_id": 414,
        "kecamatan": "Sinjai Borong"
      },
      {
        "id": 5681,
        "kabkot_id": 414,
        "kecamatan": "Sinjai Selatan"
      },
      {
        "id": 5682,
        "kabkot_id": 414,
        "kecamatan": "Sinjai Tengah"
      },
      {
        "id": 5683,
        "kabkot_id": 414,
        "kecamatan": "Sinjai Timur"
      },
      {
        "id": 5684,
        "kabkot_id": 414,
        "kecamatan": "Sinjai Utara"
      },
      {
        "id": 5685,
        "kabkot_id": 414,
        "kecamatan": "Tellu Limpoe"
      },
      {
        "id": 5686,
        "kabkot_id": 415,
        "kecamatan": "Citta"
      },
      {
        "id": 5687,
        "kabkot_id": 415,
        "kecamatan": "Donri-Donri"
      },
      {
        "id": 5688,
        "kabkot_id": 415,
        "kecamatan": "Ganra"
      },
      {
        "id": 5689,
        "kabkot_id": 415,
        "kecamatan": "Lalabata"
      },
      {
        "id": 5690,
        "kabkot_id": 415,
        "kecamatan": "Lili Rilau"
      },
      {
        "id": 5691,
        "kabkot_id": 415,
        "kecamatan": "Liliraja (Lili Riaja)"
      },
      {
        "id": 5692,
        "kabkot_id": 415,
        "kecamatan": "Mario Riawa"
      },
      {
        "id": 5693,
        "kabkot_id": 415,
        "kecamatan": "Mario Riwawo"
      },
      {
        "id": 5694,
        "kabkot_id": 416,
        "kecamatan": "Galesong"
      },
      {
        "id": 5695,
        "kabkot_id": 416,
        "kecamatan": "Galesong Selatan"
      },
      {
        "id": 5696,
        "kabkot_id": 416,
        "kecamatan": "Galesong Utara"
      },
      {
        "id": 5697,
        "kabkot_id": 416,
        "kecamatan": "Mangara Bombang"
      },
      {
        "id": 5698,
        "kabkot_id": 416,
        "kecamatan": "Mappakasunggu"
      },
      {
        "id": 5699,
        "kabkot_id": 416,
        "kecamatan": "Patallassang"
      },
      {
        "id": 5700,
        "kabkot_id": 416,
        "kecamatan": "Polombangkeng Selatan (Polobangkeng)"
      },
      {
        "id": 5701,
        "kabkot_id": 416,
        "kecamatan": "Polombangkeng Utara (Polobangkeng)"
      },
      {
        "id": 5702,
        "kabkot_id": 416,
        "kecamatan": "Sanrobone"
      },
      {
        "id": 5703,
        "kabkot_id": 417,
        "kecamatan": "Bittuang"
      },
      {
        "id": 5704,
        "kabkot_id": 417,
        "kecamatan": "Bonggakaradeng"
      },
      {
        "id": 5705,
        "kabkot_id": 417,
        "kecamatan": "Gandang Batu Sillanan"
      },
      {
        "id": 5706,
        "kabkot_id": 417,
        "kecamatan": "Kurra"
      },
      {
        "id": 5707,
        "kabkot_id": 417,
        "kecamatan": "Makale"
      },
      {
        "id": 5708,
        "kabkot_id": 417,
        "kecamatan": "Makale Selatan"
      },
      {
        "id": 5709,
        "kabkot_id": 417,
        "kecamatan": "Makale Utara"
      },
      {
        "id": 5710,
        "kabkot_id": 417,
        "kecamatan": "Malimbong Balepe"
      },
      {
        "id": 5711,
        "kabkot_id": 417,
        "kecamatan": "Mappak"
      },
      {
        "id": 5712,
        "kabkot_id": 417,
        "kecamatan": "Masanda"
      },
      {
        "id": 5713,
        "kabkot_id": 417,
        "kecamatan": "Mengkendek"
      },
      {
        "id": 5714,
        "kabkot_id": 417,
        "kecamatan": "Rano"
      },
      {
        "id": 5715,
        "kabkot_id": 417,
        "kecamatan": "Rantetayo"
      },
      {
        "id": 5716,
        "kabkot_id": 417,
        "kecamatan": "Rembon"
      },
      {
        "id": 5717,
        "kabkot_id": 417,
        "kecamatan": "Saluputti"
      },
      {
        "id": 5718,
        "kabkot_id": 417,
        "kecamatan": "Sangalla (Sanggala)"
      },
      {
        "id": 5719,
        "kabkot_id": 417,
        "kecamatan": "Sangalla Selatan"
      },
      {
        "id": 5720,
        "kabkot_id": 417,
        "kecamatan": "Sangalla Utara"
      },
      {
        "id": 5721,
        "kabkot_id": 417,
        "kecamatan": "Simbuang"
      },
      {
        "id": 5722,
        "kabkot_id": 418,
        "kecamatan": "Awan Rante Karua"
      },
      {
        "id": 5723,
        "kabkot_id": 418,
        "kecamatan": "Balusu"
      },
      {
        "id": 5724,
        "kabkot_id": 418,
        "kecamatan": "Bangkelekila"
      },
      {
        "id": 5725,
        "kabkot_id": 418,
        "kecamatan": "Baruppu"
      },
      {
        "id": 5726,
        "kabkot_id": 418,
        "kecamatan": "Buntao"
      },
      {
        "id": 5727,
        "kabkot_id": 418,
        "kecamatan": "Buntu Pepasan"
      },
      {
        "id": 5728,
        "kabkot_id": 418,
        "kecamatan": "Dende' Piongan Napo"
      },
      {
        "id": 5729,
        "kabkot_id": 418,
        "kecamatan": "Kapalla Pitu (Kapala Pitu)"
      },
      {
        "id": 5730,
        "kabkot_id": 418,
        "kecamatan": "Kesu"
      },
      {
        "id": 5731,
        "kabkot_id": 418,
        "kecamatan": "Nanggala"
      },
      {
        "id": 5732,
        "kabkot_id": 418,
        "kecamatan": "Rantebua"
      },
      {
        "id": 5733,
        "kabkot_id": 418,
        "kecamatan": "Rantepao"
      },
      {
        "id": 5734,
        "kabkot_id": 418,
        "kecamatan": "Rindingallo"
      },
      {
        "id": 5735,
        "kabkot_id": 418,
        "kecamatan": "Sa'dan"
      },
      {
        "id": 5736,
        "kabkot_id": 418,
        "kecamatan": "Sanggalangi"
      },
      {
        "id": 5737,
        "kabkot_id": 418,
        "kecamatan": "Sesean"
      },
      {
        "id": 5738,
        "kabkot_id": 418,
        "kecamatan": "Sesean Suloara"
      },
      {
        "id": 5739,
        "kabkot_id": 418,
        "kecamatan": "Sopai"
      },
      {
        "id": 5740,
        "kabkot_id": 418,
        "kecamatan": "Tallunglipu"
      },
      {
        "id": 5741,
        "kabkot_id": 418,
        "kecamatan": "Tikala"
      },
      {
        "id": 5742,
        "kabkot_id": 418,
        "kecamatan": "Tondon"
      },
      {
        "id": 5743,
        "kabkot_id": 419,
        "kecamatan": "Belawa"
      },
      {
        "id": 5744,
        "kabkot_id": 419,
        "kecamatan": "Bola"
      },
      {
        "id": 5745,
        "kabkot_id": 419,
        "kecamatan": "Gilireng"
      },
      {
        "id": 5746,
        "kabkot_id": 419,
        "kecamatan": "Keera"
      },
      {
        "id": 5747,
        "kabkot_id": 419,
        "kecamatan": "Majauleng"
      },
      {
        "id": 5748,
        "kabkot_id": 419,
        "kecamatan": "Maniangpajo"
      },
      {
        "id": 5749,
        "kabkot_id": 419,
        "kecamatan": "Pammana"
      },
      {
        "id": 5750,
        "kabkot_id": 419,
        "kecamatan": "Penrang"
      },
      {
        "id": 5751,
        "kabkot_id": 419,
        "kecamatan": "Pitumpanua"
      },
      {
        "id": 5752,
        "kabkot_id": 419,
        "kecamatan": "Sabangparu"
      },
      {
        "id": 5753,
        "kabkot_id": 419,
        "kecamatan": "Sajoanging"
      },
      {
        "id": 5754,
        "kabkot_id": 419,
        "kecamatan": "Takkalalla"
      },
      {
        "id": 5755,
        "kabkot_id": 419,
        "kecamatan": "Tanasitolo"
      },
      {
        "id": 5756,
        "kabkot_id": 419,
        "kecamatan": "Tempe"
      },
      {
        "id": 5757,
        "kabkot_id": 420,
        "kecamatan": "Biring Kanaya"
      },
      {
        "id": 5758,
        "kabkot_id": 420,
        "kecamatan": "Bontoala"
      },
      {
        "id": 5759,
        "kabkot_id": 420,
        "kecamatan": "Makassar"
      },
      {
        "id": 5760,
        "kabkot_id": 420,
        "kecamatan": "Mamajang"
      },
      {
        "id": 5761,
        "kabkot_id": 420,
        "kecamatan": "Manggala"
      },
      {
        "id": 5762,
        "kabkot_id": 420,
        "kecamatan": "Mariso"
      },
      {
        "id": 5763,
        "kabkot_id": 420,
        "kecamatan": "Panakkukang"
      },
      {
        "id": 5764,
        "kabkot_id": 420,
        "kecamatan": "Rappocini"
      },
      {
        "id": 5765,
        "kabkot_id": 420,
        "kecamatan": "Tallo"
      },
      {
        "id": 5766,
        "kabkot_id": 420,
        "kecamatan": "Tamalanrea"
      },
      {
        "id": 5767,
        "kabkot_id": 420,
        "kecamatan": "Tamalate"
      },
      {
        "id": 5768,
        "kabkot_id": 420,
        "kecamatan": "Ujung Pandang"
      },
      {
        "id": 5769,
        "kabkot_id": 420,
        "kecamatan": "Ujung Tanah"
      },
      {
        "id": 5770,
        "kabkot_id": 420,
        "kecamatan": "Wajo"
      },
      {
        "id": 5771,
        "kabkot_id": 421,
        "kecamatan": "Bara"
      },
      {
        "id": 5772,
        "kabkot_id": 421,
        "kecamatan": "Mungkajang"
      },
      {
        "id": 5773,
        "kabkot_id": 421,
        "kecamatan": "Sendana"
      },
      {
        "id": 5774,
        "kabkot_id": 421,
        "kecamatan": "Telluwanua"
      },
      {
        "id": 5775,
        "kabkot_id": 421,
        "kecamatan": "Wara"
      },
      {
        "id": 5776,
        "kabkot_id": 421,
        "kecamatan": "Wara Barat"
      },
      {
        "id": 5777,
        "kabkot_id": 421,
        "kecamatan": "Wara Selatan"
      },
      {
        "id": 5778,
        "kabkot_id": 421,
        "kecamatan": "Wara Timur"
      },
      {
        "id": 5779,
        "kabkot_id": 421,
        "kecamatan": "Wara Utara"
      },
      {
        "id": 5780,
        "kabkot_id": 422,
        "kecamatan": "Bacukiki"
      },
      {
        "id": 5781,
        "kabkot_id": 422,
        "kecamatan": "Bacukiki Barat"
      },
      {
        "id": 5782,
        "kabkot_id": 422,
        "kecamatan": "Soreang"
      },
      {
        "id": 5783,
        "kabkot_id": 422,
        "kecamatan": "Ujung"
      },
      {
        "id": 5784,
        "kabkot_id": 423,
        "kecamatan": "Kabaena"
      },
      {
        "id": 5785,
        "kabkot_id": 423,
        "kecamatan": "Kabaena Barat"
      },
      {
        "id": 5786,
        "kabkot_id": 423,
        "kecamatan": "Kabaena Selatan"
      },
      {
        "id": 5787,
        "kabkot_id": 423,
        "kecamatan": "Kabaena Tengah"
      },
      {
        "id": 5788,
        "kabkot_id": 423,
        "kecamatan": "Kabaena Timur"
      },
      {
        "id": 5789,
        "kabkot_id": 423,
        "kecamatan": "Kabaena Utara"
      },
      {
        "id": 5790,
        "kabkot_id": 423,
        "kecamatan": "Kepulauan Masaloka Raya"
      },
      {
        "id": 5791,
        "kabkot_id": 423,
        "kecamatan": "Lentarai Jaya S. (Lantari Jaya)"
      },
      {
        "id": 5792,
        "kabkot_id": 423,
        "kecamatan": "Mata Oleo"
      },
      {
        "id": 5793,
        "kabkot_id": 423,
        "kecamatan": "Mata Usu"
      },
      {
        "id": 5794,
        "kabkot_id": 423,
        "kecamatan": "Poleang"
      },
      {
        "id": 5795,
        "kabkot_id": 423,
        "kecamatan": "Poleang Barat"
      },
      {
        "id": 5796,
        "kabkot_id": 423,
        "kecamatan": "Poleang Selatan"
      },
      {
        "id": 5797,
        "kabkot_id": 423,
        "kecamatan": "Poleang Tengah"
      },
      {
        "id": 5798,
        "kabkot_id": 423,
        "kecamatan": "Poleang Tenggara"
      },
      {
        "id": 5799,
        "kabkot_id": 423,
        "kecamatan": "Poleang Timur"
      },
      {
        "id": 5800,
        "kabkot_id": 423,
        "kecamatan": "Poleang Utara"
      },
      {
        "id": 5801,
        "kabkot_id": 423,
        "kecamatan": "Rarowatu"
      },
      {
        "id": 5802,
        "kabkot_id": 423,
        "kecamatan": "Rarowatu Utara"
      },
      {
        "id": 5803,
        "kabkot_id": 423,
        "kecamatan": "Rumbia"
      },
      {
        "id": 5804,
        "kabkot_id": 423,
        "kecamatan": "Rumbia Tengah"
      },
      {
        "id": 5805,
        "kabkot_id": 423,
        "kecamatan": "Tontonunu (Tontonuwu)"
      },
      {
        "id": 5806,
        "kabkot_id": 424,
        "kecamatan": "Kapontori"
      },
      {
        "id": 5807,
        "kabkot_id": 424,
        "kecamatan": "Lasalimu"
      },
      {
        "id": 5808,
        "kabkot_id": 424,
        "kecamatan": "Lasalimu Selatan"
      },
      {
        "id": 5809,
        "kabkot_id": 424,
        "kecamatan": "Pasar Wajo"
      },
      {
        "id": 5810,
        "kabkot_id": 424,
        "kecamatan": "Siontapia (Siontapina)"
      },
      {
        "id": 5811,
        "kabkot_id": 424,
        "kecamatan": "Wabula"
      },
      {
        "id": 5812,
        "kabkot_id": 424,
        "kecamatan": "Wolowa"
      },
      {
        "id": 5813,
        "kabkot_id": 425,
        "kecamatan": "Batauga"
      },
      {
        "id": 5814,
        "kabkot_id": 425,
        "kecamatan": "Batu Atas"
      },
      {
        "id": 5815,
        "kabkot_id": 425,
        "kecamatan": "Kadatua"
      },
      {
        "id": 5816,
        "kabkot_id": 425,
        "kecamatan": "Lapandewa"
      },
      {
        "id": 5817,
        "kabkot_id": 425,
        "kecamatan": "Sampolawa"
      },
      {
        "id": 5818,
        "kabkot_id": 425,
        "kecamatan": "Siompu"
      },
      {
        "id": 5819,
        "kabkot_id": 425,
        "kecamatan": "Siompu Barat"
      },
      {
        "id": 5820,
        "kabkot_id": 426,
        "kecamatan": "Gu"
      },
      {
        "id": 5821,
        "kabkot_id": 426,
        "kecamatan": "Lakudo"
      },
      {
        "id": 5822,
        "kabkot_id": 426,
        "kecamatan": "Mawasangka"
      },
      {
        "id": 5823,
        "kabkot_id": 426,
        "kecamatan": "Mawasangka Tengah"
      },
      {
        "id": 5824,
        "kabkot_id": 426,
        "kecamatan": "Mawasangka Timur"
      },
      {
        "id": 5825,
        "kabkot_id": 426,
        "kecamatan": "Sangia Wambulu"
      },
      {
        "id": 5826,
        "kabkot_id": 426,
        "kecamatan": "Talaga Raya"
      },
      {
        "id": 5827,
        "kabkot_id": 427,
        "kecamatan": "Bonegunu"
      },
      {
        "id": 5828,
        "kabkot_id": 427,
        "kecamatan": "Kambowa"
      },
      {
        "id": 5829,
        "kabkot_id": 427,
        "kecamatan": "Kulisusu (Kalingsusu/Kalisusu)"
      },
      {
        "id": 5830,
        "kabkot_id": 427,
        "kecamatan": "Kulisusu Barat"
      },
      {
        "id": 5831,
        "kabkot_id": 427,
        "kecamatan": "Kulisusu Utara"
      },
      {
        "id": 5832,
        "kabkot_id": 427,
        "kecamatan": "Wakorumba Utara"
      },
      {
        "id": 5833,
        "kabkot_id": 428,
        "kecamatan": "Baula"
      },
      {
        "id": 5834,
        "kabkot_id": 428,
        "kecamatan": "Iwoimendaa"
      },
      {
        "id": 5835,
        "kabkot_id": 428,
        "kecamatan": "Kolaka"
      },
      {
        "id": 5836,
        "kabkot_id": 428,
        "kecamatan": "Latambaga"
      },
      {
        "id": 5837,
        "kabkot_id": 428,
        "kecamatan": "Polinggona"
      },
      {
        "id": 5838,
        "kabkot_id": 428,
        "kecamatan": "Pomalaa"
      },
      {
        "id": 5839,
        "kabkot_id": 428,
        "kecamatan": "Samaturu"
      },
      {
        "id": 5840,
        "kabkot_id": 428,
        "kecamatan": "Tanggetada"
      },
      {
        "id": 5841,
        "kabkot_id": 428,
        "kecamatan": "Toari"
      },
      {
        "id": 5842,
        "kabkot_id": 428,
        "kecamatan": "Watubangga"
      },
      {
        "id": 5843,
        "kabkot_id": 428,
        "kecamatan": "Wolo"
      },
      {
        "id": 5844,
        "kabkot_id": 428,
        "kecamatan": "Wundulako"
      },
      {
        "id": 5845,
        "kabkot_id": 429,
        "kecamatan": "Aere"
      },
      {
        "id": 5846,
        "kabkot_id": 429,
        "kecamatan": "Dangia"
      },
      {
        "id": 5847,
        "kabkot_id": 429,
        "kecamatan": "Ladongi"
      },
      {
        "id": 5848,
        "kabkot_id": 429,
        "kecamatan": "Lalolae"
      },
      {
        "id": 5849,
        "kabkot_id": 429,
        "kecamatan": "Lambandia"
      },
      {
        "id": 5850,
        "kabkot_id": 429,
        "kecamatan": "Loea"
      },
      {
        "id": 5851,
        "kabkot_id": 429,
        "kecamatan": "Mowewe"
      },
      {
        "id": 5852,
        "kabkot_id": 429,
        "kecamatan": "Poli Polia"
      },
      {
        "id": 5853,
        "kabkot_id": 429,
        "kecamatan": "Tinondo"
      },
      {
        "id": 5854,
        "kabkot_id": 429,
        "kecamatan": "Tirawuta"
      },
      {
        "id": 5855,
        "kabkot_id": 429,
        "kecamatan": "Ueesi"
      },
      {
        "id": 5856,
        "kabkot_id": 429,
        "kecamatan": "Uluiwoi"
      },
      {
        "id": 5857,
        "kabkot_id": 430,
        "kecamatan": "Batu Putih"
      },
      {
        "id": 5858,
        "kabkot_id": 430,
        "kecamatan": "Katoi"
      },
      {
        "id": 5859,
        "kabkot_id": 430,
        "kecamatan": "Kodeoha"
      },
      {
        "id": 5860,
        "kabkot_id": 430,
        "kecamatan": "Lambai"
      },
      {
        "id": 5861,
        "kabkot_id": 430,
        "kecamatan": "Lasusua"
      },
      {
        "id": 5862,
        "kabkot_id": 430,
        "kecamatan": "Ngapa"
      },
      {
        "id": 5863,
        "kabkot_id": 430,
        "kecamatan": "Pakue"
      },
      {
        "id": 5864,
        "kabkot_id": 430,
        "kecamatan": "Pakue Tengah"
      },
      {
        "id": 5865,
        "kabkot_id": 430,
        "kecamatan": "Pakue Utara"
      },
      {
        "id": 5866,
        "kabkot_id": 430,
        "kecamatan": "Porehu"
      },
      {
        "id": 5867,
        "kabkot_id": 430,
        "kecamatan": "Rante Angin"
      },
      {
        "id": 5868,
        "kabkot_id": 430,
        "kecamatan": "Tiwu"
      },
      {
        "id": 5869,
        "kabkot_id": 430,
        "kecamatan": "Tolala"
      },
      {
        "id": 5870,
        "kabkot_id": 430,
        "kecamatan": "Watunohu"
      },
      {
        "id": 5871,
        "kabkot_id": 430,
        "kecamatan": "Wawo"
      },
      {
        "id": 5872,
        "kabkot_id": 431,
        "kecamatan": "Abuki"
      },
      {
        "id": 5873,
        "kabkot_id": 431,
        "kecamatan": "Amonggedo"
      },
      {
        "id": 5874,
        "kabkot_id": 431,
        "kecamatan": "Anggaberi"
      },
      {
        "id": 5875,
        "kabkot_id": 431,
        "kecamatan": "Asinua"
      },
      {
        "id": 5876,
        "kabkot_id": 431,
        "kecamatan": "Besulutu"
      },
      {
        "id": 5877,
        "kabkot_id": 431,
        "kecamatan": "Bondoala"
      },
      {
        "id": 5878,
        "kabkot_id": 431,
        "kecamatan": "Kapoiala (Kapoyala)"
      },
      {
        "id": 5879,
        "kabkot_id": 431,
        "kecamatan": "Konawe"
      },
      {
        "id": 5880,
        "kabkot_id": 431,
        "kecamatan": "Lalonggasumeeto"
      },
      {
        "id": 5881,
        "kabkot_id": 431,
        "kecamatan": "Lambuya"
      },
      {
        "id": 5882,
        "kabkot_id": 431,
        "kecamatan": "Latoma"
      },
      {
        "id": 5883,
        "kabkot_id": 431,
        "kecamatan": "Meluhu"
      },
      {
        "id": 5884,
        "kabkot_id": 431,
        "kecamatan": "Onembute"
      },
      {
        "id": 5885,
        "kabkot_id": 431,
        "kecamatan": "Pondidaha"
      },
      {
        "id": 5886,
        "kabkot_id": 431,
        "kecamatan": "Puriala"
      },
      {
        "id": 5887,
        "kabkot_id": 431,
        "kecamatan": "Routa"
      },
      {
        "id": 5888,
        "kabkot_id": 431,
        "kecamatan": "Sampara"
      },
      {
        "id": 5889,
        "kabkot_id": 431,
        "kecamatan": "Soropia"
      },
      {
        "id": 5890,
        "kabkot_id": 431,
        "kecamatan": "Tongauna"
      },
      {
        "id": 5891,
        "kabkot_id": 431,
        "kecamatan": "Uepai (Uwepai)"
      },
      {
        "id": 5892,
        "kabkot_id": 431,
        "kecamatan": "Unaaha"
      },
      {
        "id": 5893,
        "kabkot_id": 431,
        "kecamatan": "Wawotobi"
      },
      {
        "id": 5894,
        "kabkot_id": 431,
        "kecamatan": "Wonggeduku"
      },
      {
        "id": 5895,
        "kabkot_id": 432,
        "kecamatan": "Wawonii Barat"
      },
      {
        "id": 5896,
        "kabkot_id": 432,
        "kecamatan": "Wawonii Selatan"
      },
      {
        "id": 5897,
        "kabkot_id": 432,
        "kecamatan": "Wawonii Tengah"
      },
      {
        "id": 5898,
        "kabkot_id": 432,
        "kecamatan": "Wawonii Tenggara"
      },
      {
        "id": 5899,
        "kabkot_id": 432,
        "kecamatan": "Wawonii Timur"
      },
      {
        "id": 5900,
        "kabkot_id": 432,
        "kecamatan": "Wawonii Timur Laut"
      },
      {
        "id": 5901,
        "kabkot_id": 432,
        "kecamatan": "Wawonii Utara"
      },
      {
        "id": 5902,
        "kabkot_id": 433,
        "kecamatan": "Andoolo"
      },
      {
        "id": 5903,
        "kabkot_id": 433,
        "kecamatan": "Angata"
      },
      {
        "id": 5904,
        "kabkot_id": 433,
        "kecamatan": "Baito"
      },
      {
        "id": 5905,
        "kabkot_id": 433,
        "kecamatan": "Basala"
      },
      {
        "id": 5906,
        "kabkot_id": 433,
        "kecamatan": "Benua"
      },
      {
        "id": 5907,
        "kabkot_id": 433,
        "kecamatan": "Buke"
      },
      {
        "id": 5908,
        "kabkot_id": 433,
        "kecamatan": "Kolono"
      },
      {
        "id": 5909,
        "kabkot_id": 433,
        "kecamatan": "Konda"
      },
      {
        "id": 5910,
        "kabkot_id": 433,
        "kecamatan": "Laeya"
      },
      {
        "id": 5911,
        "kabkot_id": 433,
        "kecamatan": "Lainea"
      },
      {
        "id": 5912,
        "kabkot_id": 433,
        "kecamatan": "Lalembuu"
      },
      {
        "id": 5913,
        "kabkot_id": 433,
        "kecamatan": "Landono"
      },
      {
        "id": 5914,
        "kabkot_id": 433,
        "kecamatan": "Laonti"
      },
      {
        "id": 5915,
        "kabkot_id": 433,
        "kecamatan": "Moramo"
      },
      {
        "id": 5916,
        "kabkot_id": 433,
        "kecamatan": "Moramo Utara"
      },
      {
        "id": 5917,
        "kabkot_id": 433,
        "kecamatan": "Mowila"
      },
      {
        "id": 5918,
        "kabkot_id": 433,
        "kecamatan": "Palangga"
      },
      {
        "id": 5919,
        "kabkot_id": 433,
        "kecamatan": "Palangga Selatan"
      },
      {
        "id": 5920,
        "kabkot_id": 433,
        "kecamatan": "Ranomeeto"
      },
      {
        "id": 5921,
        "kabkot_id": 433,
        "kecamatan": "Ranomeeto Barat"
      },
      {
        "id": 5922,
        "kabkot_id": 433,
        "kecamatan": "Tinanggea"
      },
      {
        "id": 5923,
        "kabkot_id": 433,
        "kecamatan": "Wolasi"
      },
      {
        "id": 5924,
        "kabkot_id": 434,
        "kecamatan": "Andowia"
      },
      {
        "id": 5925,
        "kabkot_id": 434,
        "kecamatan": "Asera"
      },
      {
        "id": 5926,
        "kabkot_id": 434,
        "kecamatan": "Langgikima"
      },
      {
        "id": 5927,
        "kabkot_id": 434,
        "kecamatan": "Lasolo"
      },
      {
        "id": 5928,
        "kabkot_id": 434,
        "kecamatan": "Lembo"
      },
      {
        "id": 5929,
        "kabkot_id": 434,
        "kecamatan": "Molawe"
      },
      {
        "id": 5930,
        "kabkot_id": 434,
        "kecamatan": "Motui"
      },
      {
        "id": 5931,
        "kabkot_id": 434,
        "kecamatan": "Oheo"
      },
      {
        "id": 5932,
        "kabkot_id": 434,
        "kecamatan": "Sawa"
      },
      {
        "id": 5933,
        "kabkot_id": 434,
        "kecamatan": "Wiwirano"
      },
      {
        "id": 5934,
        "kabkot_id": 435,
        "kecamatan": "Batalaiwaru (Batalaiworu)"
      },
      {
        "id": 5935,
        "kabkot_id": 435,
        "kecamatan": "Batukara"
      },
      {
        "id": 5936,
        "kabkot_id": 435,
        "kecamatan": "Bone (Bone Tondo)"
      },
      {
        "id": 5937,
        "kabkot_id": 435,
        "kecamatan": "Duruka"
      },
      {
        "id": 5938,
        "kabkot_id": 435,
        "kecamatan": "Kabangka"
      },
      {
        "id": 5939,
        "kabkot_id": 435,
        "kecamatan": "Kabawo"
      },
      {
        "id": 5940,
        "kabkot_id": 435,
        "kecamatan": "Katobu"
      },
      {
        "id": 5941,
        "kabkot_id": 435,
        "kecamatan": "Kontu Kowuna"
      },
      {
        "id": 5942,
        "kabkot_id": 435,
        "kecamatan": "Kontunaga"
      },
      {
        "id": 5943,
        "kabkot_id": 435,
        "kecamatan": "Lasalepa"
      },
      {
        "id": 5944,
        "kabkot_id": 435,
        "kecamatan": "Lohia"
      },
      {
        "id": 5945,
        "kabkot_id": 435,
        "kecamatan": "Maligano"
      },
      {
        "id": 5946,
        "kabkot_id": 435,
        "kecamatan": "Marobo"
      },
      {
        "id": 5947,
        "kabkot_id": 435,
        "kecamatan": "Napabalano"
      },
      {
        "id": 5948,
        "kabkot_id": 435,
        "kecamatan": "Parigi"
      },
      {
        "id": 5949,
        "kabkot_id": 435,
        "kecamatan": "Pasi Kolaga"
      },
      {
        "id": 5950,
        "kabkot_id": 435,
        "kecamatan": "Pasir Putih"
      },
      {
        "id": 5951,
        "kabkot_id": 435,
        "kecamatan": "Tongkuno"
      },
      {
        "id": 5952,
        "kabkot_id": 435,
        "kecamatan": "Tongkuno Selatan"
      },
      {
        "id": 5953,
        "kabkot_id": 435,
        "kecamatan": "Towea"
      },
      {
        "id": 5954,
        "kabkot_id": 435,
        "kecamatan": "Wakorumba Selatan"
      },
      {
        "id": 5955,
        "kabkot_id": 435,
        "kecamatan": "Watopute"
      },
      {
        "id": 5956,
        "kabkot_id": 436,
        "kecamatan": "Barangka"
      },
      {
        "id": 5957,
        "kabkot_id": 436,
        "kecamatan": "Kusambi"
      },
      {
        "id": 5958,
        "kabkot_id": 436,
        "kecamatan": "Lawa"
      },
      {
        "id": 5959,
        "kabkot_id": 436,
        "kecamatan": "Maginti"
      },
      {
        "id": 5960,
        "kabkot_id": 436,
        "kecamatan": "Napano Kusambi"
      },
      {
        "id": 5961,
        "kabkot_id": 436,
        "kecamatan": "Sawerigadi"
      },
      {
        "id": 5962,
        "kabkot_id": 436,
        "kecamatan": "Tiworo Kepulauan"
      },
      {
        "id": 5963,
        "kabkot_id": 436,
        "kecamatan": "Tiworo Selatan"
      },
      {
        "id": 5964,
        "kabkot_id": 436,
        "kecamatan": "Tiworo Tengah"
      },
      {
        "id": 5965,
        "kabkot_id": 436,
        "kecamatan": "Tiworo Utara"
      },
      {
        "id": 5966,
        "kabkot_id": 436,
        "kecamatan": "Wadaga"
      },
      {
        "id": 5967,
        "kabkot_id": 437,
        "kecamatan": "Binongko"
      },
      {
        "id": 5968,
        "kabkot_id": 437,
        "kecamatan": "Kaledupa"
      },
      {
        "id": 5969,
        "kabkot_id": 437,
        "kecamatan": "Kaledupa Selatan"
      },
      {
        "id": 5970,
        "kabkot_id": 437,
        "kecamatan": "Togo Binongko"
      },
      {
        "id": 5971,
        "kabkot_id": 437,
        "kecamatan": "Tomia"
      },
      {
        "id": 5972,
        "kabkot_id": 437,
        "kecamatan": "Tomia Timur"
      },
      {
        "id": 5973,
        "kabkot_id": 437,
        "kecamatan": "Wangi-Wangi"
      },
      {
        "id": 5974,
        "kabkot_id": 437,
        "kecamatan": "Wangi-Wangi Selatan"
      },
      {
        "id": 5975,
        "kabkot_id": 438,
        "kecamatan": "Batupoaro"
      },
      {
        "id": 5976,
        "kabkot_id": 438,
        "kecamatan": "Betoambari"
      },
      {
        "id": 5977,
        "kabkot_id": 438,
        "kecamatan": "Bungi"
      },
      {
        "id": 5978,
        "kabkot_id": 438,
        "kecamatan": "Kokalukuna"
      },
      {
        "id": 5979,
        "kabkot_id": 438,
        "kecamatan": "Lea-Lea"
      },
      {
        "id": 5980,
        "kabkot_id": 438,
        "kecamatan": "Murhum"
      },
      {
        "id": 5981,
        "kabkot_id": 438,
        "kecamatan": "Sora Walio (Sorowalio)"
      },
      {
        "id": 5982,
        "kabkot_id": 438,
        "kecamatan": "Wolio"
      },
      {
        "id": 5983,
        "kabkot_id": 439,
        "kecamatan": "Abeli"
      },
      {
        "id": 5984,
        "kabkot_id": 439,
        "kecamatan": "Baruga"
      },
      {
        "id": 5985,
        "kabkot_id": 439,
        "kecamatan": "Kadia"
      },
      {
        "id": 5986,
        "kabkot_id": 439,
        "kecamatan": "Kambu"
      },
      {
        "id": 5987,
        "kabkot_id": 439,
        "kecamatan": "Kendari"
      },
      {
        "id": 5988,
        "kabkot_id": 439,
        "kecamatan": "Kendari Barat"
      },
      {
        "id": 5989,
        "kabkot_id": 439,
        "kecamatan": "Mandonga"
      },
      {
        "id": 5990,
        "kabkot_id": 439,
        "kecamatan": "Poasia"
      },
      {
        "id": 5991,
        "kabkot_id": 439,
        "kecamatan": "Puuwatu"
      },
      {
        "id": 5992,
        "kabkot_id": 439,
        "kecamatan": "Wua-Wua"
      },
      {
        "id": 5993,
        "kabkot_id": 440,
        "kecamatan": "Botumoita"
      },
      {
        "id": 5994,
        "kabkot_id": 440,
        "kecamatan": "Dulupi"
      },
      {
        "id": 5995,
        "kabkot_id": 440,
        "kecamatan": "Mananggu"
      },
      {
        "id": 5996,
        "kabkot_id": 440,
        "kecamatan": "Paguyaman"
      },
      {
        "id": 5997,
        "kabkot_id": 440,
        "kecamatan": "Paguyaman Pantai"
      },
      {
        "id": 5998,
        "kabkot_id": 440,
        "kecamatan": "Tilamuta"
      },
      {
        "id": 5999,
        "kabkot_id": 440,
        "kecamatan": "Wonosari"
      },
      {
        "id": 6000,
        "kabkot_id": 441,
        "kecamatan": "Bone"
      },
      {
        "id": 6001,
        "kabkot_id": 441,
        "kecamatan": "Bone Raya"
      },
      {
        "id": 6002,
        "kabkot_id": 441,
        "kecamatan": "Bonepantai"
      },
      {
        "id": 6003,
        "kabkot_id": 441,
        "kecamatan": "Botu Pingge"
      },
      {
        "id": 6004,
        "kabkot_id": 441,
        "kecamatan": "Bulango Selatan"
      },
      {
        "id": 6005,
        "kabkot_id": 441,
        "kecamatan": "Bulango Timur"
      },
      {
        "id": 6006,
        "kabkot_id": 441,
        "kecamatan": "Bulango Ulu"
      },
      {
        "id": 6007,
        "kabkot_id": 441,
        "kecamatan": "Bulango Utara"
      },
      {
        "id": 6008,
        "kabkot_id": 441,
        "kecamatan": "Bulawa"
      },
      {
        "id": 6009,
        "kabkot_id": 441,
        "kecamatan": "Kabila"
      },
      {
        "id": 6010,
        "kabkot_id": 441,
        "kecamatan": "Kabila Bone"
      },
      {
        "id": 6011,
        "kabkot_id": 441,
        "kecamatan": "Pinogu"
      },
      {
        "id": 6012,
        "kabkot_id": 441,
        "kecamatan": "Suwawa"
      },
      {
        "id": 6013,
        "kabkot_id": 441,
        "kecamatan": "Suwawa Selatan"
      },
      {
        "id": 6014,
        "kabkot_id": 441,
        "kecamatan": "Suwawa Tengah"
      },
      {
        "id": 6015,
        "kabkot_id": 441,
        "kecamatan": "Suwawa Timur"
      },
      {
        "id": 6016,
        "kabkot_id": 441,
        "kecamatan": "Tapa"
      },
      {
        "id": 6017,
        "kabkot_id": 441,
        "kecamatan": "Tilongkabila"
      },
      {
        "id": 6018,
        "kabkot_id": 442,
        "kecamatan": "Asparaga"
      },
      {
        "id": 6019,
        "kabkot_id": 442,
        "kecamatan": "Batudaa"
      },
      {
        "id": 6020,
        "kabkot_id": 442,
        "kecamatan": "Batudaa Pantai"
      },
      {
        "id": 6021,
        "kabkot_id": 442,
        "kecamatan": "Bilato"
      },
      {
        "id": 6022,
        "kabkot_id": 442,
        "kecamatan": "Biluhu"
      },
      {
        "id": 6023,
        "kabkot_id": 442,
        "kecamatan": "Boliohuto (Boliyohuto)"
      },
      {
        "id": 6024,
        "kabkot_id": 442,
        "kecamatan": "Bongomeme"
      },
      {
        "id": 6025,
        "kabkot_id": 442,
        "kecamatan": "Dungaliyo"
      },
      {
        "id": 6026,
        "kabkot_id": 442,
        "kecamatan": "Limboto"
      },
      {
        "id": 6027,
        "kabkot_id": 442,
        "kecamatan": "Limboto Barat"
      },
      {
        "id": 6028,
        "kabkot_id": 442,
        "kecamatan": "Mootilango"
      },
      {
        "id": 6029,
        "kabkot_id": 442,
        "kecamatan": "Pulubala"
      },
      {
        "id": 6030,
        "kabkot_id": 442,
        "kecamatan": "Tabongo"
      },
      {
        "id": 6031,
        "kabkot_id": 442,
        "kecamatan": "Telaga"
      },
      {
        "id": 6032,
        "kabkot_id": 442,
        "kecamatan": "Telaga Biru"
      },
      {
        "id": 6033,
        "kabkot_id": 442,
        "kecamatan": "Telaga Jaya"
      },
      {
        "id": 6034,
        "kabkot_id": 442,
        "kecamatan": "Tibawa"
      },
      {
        "id": 6035,
        "kabkot_id": 442,
        "kecamatan": "Tilango"
      },
      {
        "id": 6036,
        "kabkot_id": 442,
        "kecamatan": "Tolangohula"
      },
      {
        "id": 6037,
        "kabkot_id": 443,
        "kecamatan": "Anggrek"
      },
      {
        "id": 6038,
        "kabkot_id": 443,
        "kecamatan": "Atinggola"
      },
      {
        "id": 6039,
        "kabkot_id": 443,
        "kecamatan": "Biau"
      },
      {
        "id": 6040,
        "kabkot_id": 443,
        "kecamatan": "Gentuma Raya"
      },
      {
        "id": 6041,
        "kabkot_id": 443,
        "kecamatan": "Kwandang"
      },
      {
        "id": 6042,
        "kabkot_id": 443,
        "kecamatan": "Monano"
      },
      {
        "id": 6043,
        "kabkot_id": 443,
        "kecamatan": "Ponelo Kepulauan"
      },
      {
        "id": 6044,
        "kabkot_id": 443,
        "kecamatan": "Sumalata"
      },
      {
        "id": 6045,
        "kabkot_id": 443,
        "kecamatan": "Sumalata Timur"
      },
      {
        "id": 6046,
        "kabkot_id": 443,
        "kecamatan": "Tolinggula"
      },
      {
        "id": 6047,
        "kabkot_id": 443,
        "kecamatan": "Tomolito"
      },
      {
        "id": 6048,
        "kabkot_id": 444,
        "kecamatan": "Buntulia"
      },
      {
        "id": 6049,
        "kabkot_id": 444,
        "kecamatan": "Dengilo"
      },
      {
        "id": 6050,
        "kabkot_id": 444,
        "kecamatan": "Duhiadaa"
      },
      {
        "id": 6051,
        "kabkot_id": 444,
        "kecamatan": "Lemito"
      },
      {
        "id": 6052,
        "kabkot_id": 444,
        "kecamatan": "Marisa"
      },
      {
        "id": 6053,
        "kabkot_id": 444,
        "kecamatan": "Paguat"
      },
      {
        "id": 6054,
        "kabkot_id": 444,
        "kecamatan": "Patilanggio"
      },
      {
        "id": 6055,
        "kabkot_id": 444,
        "kecamatan": "Popayato"
      },
      {
        "id": 6056,
        "kabkot_id": 444,
        "kecamatan": "Popayato Barat"
      },
      {
        "id": 6057,
        "kabkot_id": 444,
        "kecamatan": "Popayato Timur"
      },
      {
        "id": 6058,
        "kabkot_id": 444,
        "kecamatan": "Randangan"
      },
      {
        "id": 6059,
        "kabkot_id": 444,
        "kecamatan": "Taluditi (Taluduti)"
      },
      {
        "id": 6060,
        "kabkot_id": 444,
        "kecamatan": "Wanggarasi"
      },
      {
        "id": 6061,
        "kabkot_id": 445,
        "kecamatan": "Dumbo Raya"
      },
      {
        "id": 6062,
        "kabkot_id": 445,
        "kecamatan": "Dungingi"
      },
      {
        "id": 6063,
        "kabkot_id": 445,
        "kecamatan": "Hulonthalangi"
      },
      {
        "id": 6064,
        "kabkot_id": 445,
        "kecamatan": "Kota Barat"
      },
      {
        "id": 6065,
        "kabkot_id": 445,
        "kecamatan": "Kota Selatan"
      },
      {
        "id": 6066,
        "kabkot_id": 445,
        "kecamatan": "Kota Tengah"
      },
      {
        "id": 6067,
        "kabkot_id": 445,
        "kecamatan": "Kota Timur"
      },
      {
        "id": 6068,
        "kabkot_id": 445,
        "kecamatan": "Kota Utara"
      },
      {
        "id": 6069,
        "kabkot_id": 445,
        "kecamatan": "Sipatana"
      },
      {
        "id": 6070,
        "kabkot_id": 446,
        "kecamatan": "Banggae"
      },
      {
        "id": 6071,
        "kabkot_id": 446,
        "kecamatan": "Banggae Timur"
      },
      {
        "id": 6072,
        "kabkot_id": 446,
        "kecamatan": "Malunda"
      },
      {
        "id": 6073,
        "kabkot_id": 446,
        "kecamatan": "Pamboang"
      },
      {
        "id": 6074,
        "kabkot_id": 446,
        "kecamatan": "Sendana"
      },
      {
        "id": 6075,
        "kabkot_id": 446,
        "kecamatan": "Tammeredo Sendana"
      },
      {
        "id": 6076,
        "kabkot_id": 446,
        "kecamatan": "Tubo (Tubo Sendana)"
      },
      {
        "id": 6077,
        "kabkot_id": 446,
        "kecamatan": "Ulumunda"
      },
      {
        "id": 6078,
        "kabkot_id": 447,
        "kecamatan": "Aralle"
      },
      {
        "id": 6079,
        "kabkot_id": 447,
        "kecamatan": "Balla"
      },
      {
        "id": 6080,
        "kabkot_id": 447,
        "kecamatan": "Bambang"
      },
      {
        "id": 6081,
        "kabkot_id": 447,
        "kecamatan": "Buntumalangka"
      },
      {
        "id": 6082,
        "kabkot_id": 447,
        "kecamatan": "Mamasa"
      },
      {
        "id": 6083,
        "kabkot_id": 447,
        "kecamatan": "Mambi"
      },
      {
        "id": 6084,
        "kabkot_id": 447,
        "kecamatan": "Mehalaan"
      },
      {
        "id": 6085,
        "kabkot_id": 447,
        "kecamatan": "Messawa"
      },
      {
        "id": 6086,
        "kabkot_id": 447,
        "kecamatan": "Nosu"
      },
      {
        "id": 6087,
        "kabkot_id": 447,
        "kecamatan": "Pana"
      },
      {
        "id": 6088,
        "kabkot_id": 447,
        "kecamatan": "Rantebulahan Timur"
      },
      {
        "id": 6089,
        "kabkot_id": 447,
        "kecamatan": "Sesenapadang"
      },
      {
        "id": 6090,
        "kabkot_id": 447,
        "kecamatan": "Sumarorong"
      },
      {
        "id": 6091,
        "kabkot_id": 447,
        "kecamatan": "Tabang"
      },
      {
        "id": 6092,
        "kabkot_id": 447,
        "kecamatan": "Tabulahan"
      },
      {
        "id": 6093,
        "kabkot_id": 447,
        "kecamatan": "Tanduk Kalua"
      },
      {
        "id": 6094,
        "kabkot_id": 447,
        "kecamatan": "Tawalian"
      },
      {
        "id": 6095,
        "kabkot_id": 448,
        "kecamatan": "Bonehau"
      },
      {
        "id": 6096,
        "kabkot_id": 448,
        "kecamatan": "Kalukku"
      },
      {
        "id": 6097,
        "kabkot_id": 448,
        "kecamatan": "Kalumpang"
      },
      {
        "id": 6098,
        "kabkot_id": 448,
        "kecamatan": "Kep. Bala Balakang"
      },
      {
        "id": 6099,
        "kabkot_id": 448,
        "kecamatan": "Mamuju"
      },
      {
        "id": 6100,
        "kabkot_id": 448,
        "kecamatan": "Papalang"
      },
      {
        "id": 6101,
        "kabkot_id": 448,
        "kecamatan": "Sampaga"
      },
      {
        "id": 6102,
        "kabkot_id": 448,
        "kecamatan": "Simboro dan Kepulauan"
      },
      {
        "id": 6103,
        "kabkot_id": 448,
        "kecamatan": "Tapalang"
      },
      {
        "id": 6104,
        "kabkot_id": 448,
        "kecamatan": "Tapalang Barat"
      },
      {
        "id": 6105,
        "kabkot_id": 448,
        "kecamatan": "Tommo"
      },
      {
        "id": 6106,
        "kabkot_id": 449,
        "kecamatan": "Budong-Budong"
      },
      {
        "id": 6107,
        "kabkot_id": 449,
        "kecamatan": "Karossa"
      },
      {
        "id": 6108,
        "kabkot_id": 449,
        "kecamatan": "Pangale"
      },
      {
        "id": 6109,
        "kabkot_id": 449,
        "kecamatan": "Tobadak"
      },
      {
        "id": 6110,
        "kabkot_id": 449,
        "kecamatan": "Topoyo"
      },
      {
        "id": 6111,
        "kabkot_id": 450,
        "kecamatan": "Bambaira"
      },
      {
        "id": 6112,
        "kabkot_id": 450,
        "kecamatan": "Bambalamotu"
      },
      {
        "id": 6113,
        "kabkot_id": 450,
        "kecamatan": "Baras"
      },
      {
        "id": 6114,
        "kabkot_id": 450,
        "kecamatan": "Bulu Taba"
      },
      {
        "id": 6115,
        "kabkot_id": 450,
        "kecamatan": "Dapurang"
      },
      {
        "id": 6116,
        "kabkot_id": 450,
        "kecamatan": "Duripoku"
      },
      {
        "id": 6117,
        "kabkot_id": 450,
        "kecamatan": "Lariang"
      },
      {
        "id": 6118,
        "kabkot_id": 450,
        "kecamatan": "Pasangkayu"
      },
      {
        "id": 6119,
        "kabkot_id": 450,
        "kecamatan": "Pedongga"
      },
      {
        "id": 6120,
        "kabkot_id": 450,
        "kecamatan": "Sarjo"
      },
      {
        "id": 6121,
        "kabkot_id": 450,
        "kecamatan": "Sarudu"
      },
      {
        "id": 6122,
        "kabkot_id": 450,
        "kecamatan": "Tikke Raya"
      },
      {
        "id": 6123,
        "kabkot_id": 451,
        "kecamatan": "Alu (Allu)"
      },
      {
        "id": 6124,
        "kabkot_id": 451,
        "kecamatan": "Anreapi"
      },
      {
        "id": 6125,
        "kabkot_id": 451,
        "kecamatan": "Balanipa"
      },
      {
        "id": 6126,
        "kabkot_id": 451,
        "kecamatan": "Binuang"
      },
      {
        "id": 6127,
        "kabkot_id": 451,
        "kecamatan": "Bulo"
      },
      {
        "id": 6128,
        "kabkot_id": 451,
        "kecamatan": "Campalagian"
      },
      {
        "id": 6129,
        "kabkot_id": 451,
        "kecamatan": "Limboro"
      },
      {
        "id": 6130,
        "kabkot_id": 451,
        "kecamatan": "Luyo"
      },
      {
        "id": 6131,
        "kabkot_id": 451,
        "kecamatan": "Mapilli"
      },
      {
        "id": 6132,
        "kabkot_id": 451,
        "kecamatan": "Matakali"
      },
      {
        "id": 6133,
        "kabkot_id": 451,
        "kecamatan": "Matangnga"
      },
      {
        "id": 6134,
        "kabkot_id": 451,
        "kecamatan": "Polewali"
      },
      {
        "id": 6135,
        "kabkot_id": 451,
        "kecamatan": "Tapango"
      },
      {
        "id": 6136,
        "kabkot_id": 451,
        "kecamatan": "Tinambung"
      },
      {
        "id": 6137,
        "kabkot_id": 451,
        "kecamatan": "Tubbi Taramanu (Tutar/Tutallu)"
      },
      {
        "id": 6138,
        "kabkot_id": 451,
        "kecamatan": "Wonomulyo"
      },
      {
        "id": 6139,
        "kabkot_id": 452,
        "kecamatan": "Airbuaya"
      },
      {
        "id": 6140,
        "kabkot_id": 452,
        "kecamatan": "Batabual"
      },
      {
        "id": 6141,
        "kabkot_id": 452,
        "kecamatan": "Fena Leisela"
      },
      {
        "id": 6142,
        "kabkot_id": 452,
        "kecamatan": "Lilialy"
      },
      {
        "id": 6143,
        "kabkot_id": 452,
        "kecamatan": "Lolong Guba"
      },
      {
        "id": 6144,
        "kabkot_id": 452,
        "kecamatan": "Namlea"
      },
      {
        "id": 6145,
        "kabkot_id": 452,
        "kecamatan": "Teluk Kaiely"
      },
      {
        "id": 6146,
        "kabkot_id": 452,
        "kecamatan": "Waeapo"
      },
      {
        "id": 6147,
        "kabkot_id": 452,
        "kecamatan": "Waelata"
      },
      {
        "id": 6148,
        "kabkot_id": 452,
        "kecamatan": "Waplau"
      },
      {
        "id": 6149,
        "kabkot_id": 453,
        "kecamatan": "Ambalau"
      },
      {
        "id": 6150,
        "kabkot_id": 453,
        "kecamatan": "Fena Fafan"
      },
      {
        "id": 6151,
        "kabkot_id": 453,
        "kecamatan": "Kepala Madan"
      },
      {
        "id": 6152,
        "kabkot_id": 453,
        "kecamatan": "Leksula"
      },
      {
        "id": 6153,
        "kabkot_id": 453,
        "kecamatan": "Namrole"
      },
      {
        "id": 6154,
        "kabkot_id": 453,
        "kecamatan": "Waesama"
      },
      {
        "id": 6155,
        "kabkot_id": 454,
        "kecamatan": "Aru Selatan"
      },
      {
        "id": 6156,
        "kabkot_id": 454,
        "kecamatan": "Aru Selatan Timur"
      },
      {
        "id": 6157,
        "kabkot_id": 454,
        "kecamatan": "Aru Selatan Utara"
      },
      {
        "id": 6158,
        "kabkot_id": 454,
        "kecamatan": "Aru Tengah"
      },
      {
        "id": 6159,
        "kabkot_id": 454,
        "kecamatan": "Aru Tengah Selatan"
      },
      {
        "id": 6160,
        "kabkot_id": 454,
        "kecamatan": "Aru Tengah Timur"
      },
      {
        "id": 6161,
        "kabkot_id": 454,
        "kecamatan": "Aru Utara"
      },
      {
        "id": 6162,
        "kabkot_id": 454,
        "kecamatan": "Aru Utara Timur Batuley"
      },
      {
        "id": 6163,
        "kabkot_id": 454,
        "kecamatan": "Pulau-Pulau Aru"
      },
      {
        "id": 6164,
        "kabkot_id": 454,
        "kecamatan": "Sir-Sir"
      },
      {
        "id": 6165,
        "kabkot_id": 455,
        "kecamatan": "Damer"
      },
      {
        "id": 6166,
        "kabkot_id": 455,
        "kecamatan": "Dawelor Dawera"
      },
      {
        "id": 6167,
        "kabkot_id": 455,
        "kecamatan": "Kepulauan Romang"
      },
      {
        "id": 6168,
        "kabkot_id": 455,
        "kecamatan": "Kisar Utara"
      },
      {
        "id": 6169,
        "kabkot_id": 455,
        "kecamatan": "Mdona Hyera/Hiera"
      },
      {
        "id": 6170,
        "kabkot_id": 455,
        "kecamatan": "Moa Lakor"
      },
      {
        "id": 6171,
        "kabkot_id": 455,
        "kecamatan": "Pulau Lakor"
      },
      {
        "id": 6172,
        "kabkot_id": 455,
        "kecamatan": "Pulau Letti (Leti Moa Lakor)"
      },
      {
        "id": 6173,
        "kabkot_id": 455,
        "kecamatan": "Pulau Masela"
      },
      {
        "id": 6174,
        "kabkot_id": 455,
        "kecamatan": "Pulau Pulau Babar"
      },
      {
        "id": 6175,
        "kabkot_id": 455,
        "kecamatan": "Pulau Pulau Terselatan"
      },
      {
        "id": 6176,
        "kabkot_id": 455,
        "kecamatan": "Pulau Wetang"
      },
      {
        "id": 6177,
        "kabkot_id": 455,
        "kecamatan": "Pulau-Pulau Babar Timur"
      },
      {
        "id": 6178,
        "kabkot_id": 455,
        "kecamatan": "Wetar"
      },
      {
        "id": 6179,
        "kabkot_id": 455,
        "kecamatan": "Wetar Barat"
      },
      {
        "id": 6180,
        "kabkot_id": 455,
        "kecamatan": "Wetar Timur"
      },
      {
        "id": 6181,
        "kabkot_id": 455,
        "kecamatan": "Wetar Utara"
      },
      {
        "id": 6182,
        "kabkot_id": 456,
        "kecamatan": "Amahai"
      },
      {
        "id": 6183,
        "kabkot_id": 456,
        "kecamatan": "Banda"
      },
      {
        "id": 6184,
        "kabkot_id": 456,
        "kecamatan": "Kota Masohi"
      },
      {
        "id": 6185,
        "kabkot_id": 456,
        "kecamatan": "Leihitu"
      },
      {
        "id": 6186,
        "kabkot_id": 456,
        "kecamatan": "Leihitu Barat"
      },
      {
        "id": 6187,
        "kabkot_id": 456,
        "kecamatan": "Nusa Laut"
      },
      {
        "id": 6188,
        "kabkot_id": 456,
        "kecamatan": "Pulau Haruku"
      },
      {
        "id": 6189,
        "kabkot_id": 456,
        "kecamatan": "Salahutu"
      },
      {
        "id": 6190,
        "kabkot_id": 456,
        "kecamatan": "Saparua"
      },
      {
        "id": 6191,
        "kabkot_id": 456,
        "kecamatan": "Saparua Timur"
      },
      {
        "id": 6192,
        "kabkot_id": 456,
        "kecamatan": "Seram Utara"
      },
      {
        "id": 6193,
        "kabkot_id": 456,
        "kecamatan": "Seram Utara Barat"
      },
      {
        "id": 6194,
        "kabkot_id": 456,
        "kecamatan": "Seram Utara Timur Kobi"
      },
      {
        "id": 6195,
        "kabkot_id": 456,
        "kecamatan": "Seram Utara Timur Seti"
      },
      {
        "id": 6196,
        "kabkot_id": 456,
        "kecamatan": "Tehoru"
      },
      {
        "id": 6197,
        "kabkot_id": 456,
        "kecamatan": "Teluk Elpaputih"
      },
      {
        "id": 6198,
        "kabkot_id": 456,
        "kecamatan": "Telutih"
      },
      {
        "id": 6199,
        "kabkot_id": 456,
        "kecamatan": "Teon Nila Serua"
      },
      {
        "id": 6200,
        "kabkot_id": 457,
        "kecamatan": "Hoat Sorbay"
      },
      {
        "id": 6201,
        "kabkot_id": 457,
        "kecamatan": "Kei Besar"
      },
      {
        "id": 6202,
        "kabkot_id": 457,
        "kecamatan": "Kei Besar Selatan"
      },
      {
        "id": 6203,
        "kabkot_id": 457,
        "kecamatan": "Kei Besar Selatan Barat"
      },
      {
        "id": 6204,
        "kabkot_id": 457,
        "kecamatan": "Kei Besar Utara Barat"
      },
      {
        "id": 6205,
        "kabkot_id": 457,
        "kecamatan": "Kei Besar Utara Timur"
      },
      {
        "id": 6206,
        "kabkot_id": 457,
        "kecamatan": "Kei Kecil"
      },
      {
        "id": 6207,
        "kabkot_id": 457,
        "kecamatan": "Kei Kecil Barat"
      },
      {
        "id": 6208,
        "kabkot_id": 457,
        "kecamatan": "Kei Kecil Timur"
      },
      {
        "id": 6209,
        "kabkot_id": 457,
        "kecamatan": "Kei Kecil Timur Selatan"
      },
      {
        "id": 6210,
        "kabkot_id": 457,
        "kecamatan": "Manyeuw"
      },
      {
        "id": 6211,
        "kabkot_id": 458,
        "kecamatan": "Kormomolin"
      },
      {
        "id": 6212,
        "kabkot_id": 458,
        "kecamatan": "Molu Maru"
      },
      {
        "id": 6213,
        "kabkot_id": 458,
        "kecamatan": "Nirunmas"
      },
      {
        "id": 6214,
        "kabkot_id": 458,
        "kecamatan": "Selaru"
      },
      {
        "id": 6215,
        "kabkot_id": 458,
        "kecamatan": "Tanimbar Selatan"
      },
      {
        "id": 6216,
        "kabkot_id": 458,
        "kecamatan": "Tanimbar Utara"
      },
      {
        "id": 6217,
        "kabkot_id": 458,
        "kecamatan": "Wer Maktian"
      },
      {
        "id": 6218,
        "kabkot_id": 458,
        "kecamatan": "Wer Tamrian"
      },
      {
        "id": 6219,
        "kabkot_id": 458,
        "kecamatan": "Wuar Labobar"
      },
      {
        "id": 6220,
        "kabkot_id": 458,
        "kecamatan": "Yaru"
      },
      {
        "id": 6221,
        "kabkot_id": 459,
        "kecamatan": "Amalatu"
      },
      {
        "id": 6222,
        "kabkot_id": 459,
        "kecamatan": "Elpaputih"
      },
      {
        "id": 6223,
        "kabkot_id": 459,
        "kecamatan": "Huamual"
      },
      {
        "id": 6224,
        "kabkot_id": 459,
        "kecamatan": "Huamual Belakang"
      },
      {
        "id": 6225,
        "kabkot_id": 459,
        "kecamatan": "Inamosol"
      },
      {
        "id": 6226,
        "kabkot_id": 459,
        "kecamatan": "Kairatu"
      },
      {
        "id": 6227,
        "kabkot_id": 459,
        "kecamatan": "Kairatu Barat"
      },
      {
        "id": 6228,
        "kabkot_id": 459,
        "kecamatan": "Kepulauan Manipa"
      },
      {
        "id": 6229,
        "kabkot_id": 459,
        "kecamatan": "Seram Barat"
      },
      {
        "id": 6230,
        "kabkot_id": 459,
        "kecamatan": "Taniwel"
      },
      {
        "id": 6231,
        "kabkot_id": 459,
        "kecamatan": "Taniwel Timur"
      },
      {
        "id": 6232,
        "kabkot_id": 460,
        "kecamatan": "Bula"
      },
      {
        "id": 6233,
        "kabkot_id": 460,
        "kecamatan": "Bula Barat"
      },
      {
        "id": 6234,
        "kabkot_id": 460,
        "kecamatan": "Gorom Timur"
      },
      {
        "id": 6235,
        "kabkot_id": 460,
        "kecamatan": "Kian Darat"
      },
      {
        "id": 6236,
        "kabkot_id": 460,
        "kecamatan": "Kilmury"
      },
      {
        "id": 6237,
        "kabkot_id": 460,
        "kecamatan": "Pulau Gorom"
      },
      {
        "id": 6238,
        "kabkot_id": 460,
        "kecamatan": "Pulau Panjang"
      },
      {
        "id": 6239,
        "kabkot_id": 460,
        "kecamatan": "Seram Timur"
      },
      {
        "id": 6240,
        "kabkot_id": 460,
        "kecamatan": "Siritaun Wida Timur"
      },
      {
        "id": 6241,
        "kabkot_id": 460,
        "kecamatan": "Siwalalat"
      },
      {
        "id": 6242,
        "kabkot_id": 460,
        "kecamatan": "Teluk Waru"
      },
      {
        "id": 6243,
        "kabkot_id": 460,
        "kecamatan": "Teor"
      },
      {
        "id": 6244,
        "kabkot_id": 460,
        "kecamatan": "Tutuk Tolu"
      },
      {
        "id": 6245,
        "kabkot_id": 460,
        "kecamatan": "Wakate"
      },
      {
        "id": 6246,
        "kabkot_id": 460,
        "kecamatan": "Werinama"
      },
      {
        "id": 6247,
        "kabkot_id": 461,
        "kecamatan": "Baguala"
      },
      {
        "id": 6248,
        "kabkot_id": 461,
        "kecamatan": "Leitimur Selatan"
      },
      {
        "id": 6249,
        "kabkot_id": 461,
        "kecamatan": "Nusaniwe (Nusanive)"
      },
      {
        "id": 6250,
        "kabkot_id": 461,
        "kecamatan": "Sirimau"
      },
      {
        "id": 6251,
        "kabkot_id": 461,
        "kecamatan": "Teluk Ambon"
      },
      {
        "id": 6252,
        "kabkot_id": 462,
        "kecamatan": "Kur Selatan"
      },
      {
        "id": 6253,
        "kabkot_id": 462,
        "kecamatan": "Pulau Dullah Selatan"
      },
      {
        "id": 6254,
        "kabkot_id": 462,
        "kecamatan": "Pulau Dullah Utara"
      },
      {
        "id": 6255,
        "kabkot_id": 462,
        "kecamatan": "Pulau Tayando Tam"
      },
      {
        "id": 6256,
        "kabkot_id": 462,
        "kecamatan": "Pulau-Pulau Kur"
      },
      {
        "id": 6257,
        "kabkot_id": 463,
        "kecamatan": "Ibu"
      },
      {
        "id": 6258,
        "kabkot_id": 463,
        "kecamatan": "Ibu Selatan"
      },
      {
        "id": 6259,
        "kabkot_id": 463,
        "kecamatan": "Ibu Utara"
      },
      {
        "id": 6260,
        "kabkot_id": 463,
        "kecamatan": "Jailolo"
      },
      {
        "id": 6261,
        "kabkot_id": 463,
        "kecamatan": "Jailolo Selatan"
      },
      {
        "id": 6262,
        "kabkot_id": 463,
        "kecamatan": "Loloda"
      },
      {
        "id": 6263,
        "kabkot_id": 463,
        "kecamatan": "Sahu"
      },
      {
        "id": 6264,
        "kabkot_id": 463,
        "kecamatan": "Sahu Timur"
      },
      {
        "id": 6265,
        "kabkot_id": 464,
        "kecamatan": "Bacan"
      },
      {
        "id": 6266,
        "kabkot_id": 464,
        "kecamatan": "Bacan Barat"
      },
      {
        "id": 6267,
        "kabkot_id": 464,
        "kecamatan": "Bacan Barat Utara"
      },
      {
        "id": 6268,
        "kabkot_id": 464,
        "kecamatan": "Bacan Selatan"
      },
      {
        "id": 6269,
        "kabkot_id": 464,
        "kecamatan": "Bacan Timur"
      },
      {
        "id": 6270,
        "kabkot_id": 464,
        "kecamatan": "Bacan Timur Selatan"
      },
      {
        "id": 6271,
        "kabkot_id": 464,
        "kecamatan": "Bacan Timur Tengah"
      },
      {
        "id": 6272,
        "kabkot_id": 464,
        "kecamatan": "Gane Barat"
      },
      {
        "id": 6273,
        "kabkot_id": 464,
        "kecamatan": "Gane Barat Selatan"
      },
      {
        "id": 6274,
        "kabkot_id": 464,
        "kecamatan": "Gane Barat Utara"
      },
      {
        "id": 6275,
        "kabkot_id": 464,
        "kecamatan": "Gane Timur"
      },
      {
        "id": 6276,
        "kabkot_id": 464,
        "kecamatan": "Gane Timur Selatan"
      },
      {
        "id": 6277,
        "kabkot_id": 464,
        "kecamatan": "Gane Timur Tengah"
      },
      {
        "id": 6278,
        "kabkot_id": 464,
        "kecamatan": "Kasiruta Barat"
      },
      {
        "id": 6279,
        "kabkot_id": 464,
        "kecamatan": "Kasiruta Timur"
      },
      {
        "id": 6280,
        "kabkot_id": 464,
        "kecamatan": "Kayoa"
      },
      {
        "id": 6281,
        "kabkot_id": 464,
        "kecamatan": "Kayoa Barat"
      },
      {
        "id": 6282,
        "kabkot_id": 464,
        "kecamatan": "Kayoa Selatan"
      },
      {
        "id": 6283,
        "kabkot_id": 464,
        "kecamatan": "Kayoa Utara"
      },
      {
        "id": 6284,
        "kabkot_id": 464,
        "kecamatan": "Kepulauan Botanglomang"
      },
      {
        "id": 6285,
        "kabkot_id": 464,
        "kecamatan": "Kepulauan Joronga"
      },
      {
        "id": 6286,
        "kabkot_id": 464,
        "kecamatan": "Makian Barat (Pulau Makian)"
      },
      {
        "id": 6287,
        "kabkot_id": 464,
        "kecamatan": "Mandioli Selatan"
      },
      {
        "id": 6288,
        "kabkot_id": 464,
        "kecamatan": "Mandioli Utara"
      },
      {
        "id": 6289,
        "kabkot_id": 464,
        "kecamatan": "Obi"
      },
      {
        "id": 6290,
        "kabkot_id": 464,
        "kecamatan": "Obi Barat"
      },
      {
        "id": 6291,
        "kabkot_id": 464,
        "kecamatan": "Obi Selatan"
      },
      {
        "id": 6292,
        "kabkot_id": 464,
        "kecamatan": "Obi Timur"
      },
      {
        "id": 6293,
        "kabkot_id": 464,
        "kecamatan": "Obi Utara"
      },
      {
        "id": 6294,
        "kabkot_id": 464,
        "kecamatan": "Pulau Makian"
      },
      {
        "id": 6295,
        "kabkot_id": 465,
        "kecamatan": "Patani"
      },
      {
        "id": 6296,
        "kabkot_id": 465,
        "kecamatan": "Patani Barat"
      },
      {
        "id": 6297,
        "kabkot_id": 465,
        "kecamatan": "Patani Utara"
      },
      {
        "id": 6298,
        "kabkot_id": 465,
        "kecamatan": "Pulau Gebe"
      },
      {
        "id": 6299,
        "kabkot_id": 465,
        "kecamatan": "Weda"
      },
      {
        "id": 6300,
        "kabkot_id": 465,
        "kecamatan": "Weda Selatan"
      },
      {
        "id": 6301,
        "kabkot_id": 465,
        "kecamatan": "Weda Tengah"
      },
      {
        "id": 6302,
        "kabkot_id": 465,
        "kecamatan": "Weda Utara"
      },
      {
        "id": 6303,
        "kabkot_id": 466,
        "kecamatan": "Kota Maba"
      },
      {
        "id": 6304,
        "kabkot_id": 466,
        "kecamatan": "Maba"
      },
      {
        "id": 6305,
        "kabkot_id": 466,
        "kecamatan": "Maba Selatan"
      },
      {
        "id": 6306,
        "kabkot_id": 466,
        "kecamatan": "Maba Tengah"
      },
      {
        "id": 6307,
        "kabkot_id": 466,
        "kecamatan": "Maba Utara"
      },
      {
        "id": 6308,
        "kabkot_id": 466,
        "kecamatan": "Wasile"
      },
      {
        "id": 6309,
        "kabkot_id": 466,
        "kecamatan": "Wasile Selatan"
      },
      {
        "id": 6310,
        "kabkot_id": 466,
        "kecamatan": "Wasile Tengah"
      },
      {
        "id": 6311,
        "kabkot_id": 466,
        "kecamatan": "Wasile Timur"
      },
      {
        "id": 6312,
        "kabkot_id": 466,
        "kecamatan": "Wasile Utara"
      },
      {
        "id": 6313,
        "kabkot_id": 467,
        "kecamatan": "Galela"
      },
      {
        "id": 6314,
        "kabkot_id": 467,
        "kecamatan": "Galela Barat"
      },
      {
        "id": 6315,
        "kabkot_id": 467,
        "kecamatan": "Galela Selatan"
      },
      {
        "id": 6316,
        "kabkot_id": 467,
        "kecamatan": "Galela Utara"
      },
      {
        "id": 6317,
        "kabkot_id": 467,
        "kecamatan": "Kao"
      },
      {
        "id": 6318,
        "kabkot_id": 467,
        "kecamatan": "Kao Barat"
      },
      {
        "id": 6319,
        "kabkot_id": 467,
        "kecamatan": "Kao Teluk"
      },
      {
        "id": 6320,
        "kabkot_id": 467,
        "kecamatan": "Kao Utara"
      },
      {
        "id": 6321,
        "kabkot_id": 467,
        "kecamatan": "Loloda Kepulauan"
      },
      {
        "id": 6322,
        "kabkot_id": 467,
        "kecamatan": "Loloda Utara"
      },
      {
        "id": 6323,
        "kabkot_id": 467,
        "kecamatan": "Malifut"
      },
      {
        "id": 6324,
        "kabkot_id": 467,
        "kecamatan": "Tobelo"
      },
      {
        "id": 6325,
        "kabkot_id": 467,
        "kecamatan": "Tobelo Barat"
      },
      {
        "id": 6326,
        "kabkot_id": 467,
        "kecamatan": "Tobelo Selatan"
      },
      {
        "id": 6327,
        "kabkot_id": 467,
        "kecamatan": "Tobelo Tengah"
      },
      {
        "id": 6328,
        "kabkot_id": 467,
        "kecamatan": "Tobelo Timur"
      },
      {
        "id": 6329,
        "kabkot_id": 467,
        "kecamatan": "Tobelo Utara"
      },
      {
        "id": 6330,
        "kabkot_id": 468,
        "kecamatan": "Mangoli Barat"
      },
      {
        "id": 6331,
        "kabkot_id": 468,
        "kecamatan": "Mangoli Selatan"
      },
      {
        "id": 6332,
        "kabkot_id": 468,
        "kecamatan": "Mangoli Tengah"
      },
      {
        "id": 6333,
        "kabkot_id": 468,
        "kecamatan": "Mangoli Timur"
      },
      {
        "id": 6334,
        "kabkot_id": 468,
        "kecamatan": "Mangoli Utara"
      },
      {
        "id": 6335,
        "kabkot_id": 468,
        "kecamatan": "Mangoli Utara Timur"
      },
      {
        "id": 6336,
        "kabkot_id": 468,
        "kecamatan": "Sanana"
      },
      {
        "id": 6337,
        "kabkot_id": 468,
        "kecamatan": "Sanana Utara"
      },
      {
        "id": 6338,
        "kabkot_id": 468,
        "kecamatan": "Sulabesi Barat"
      },
      {
        "id": 6339,
        "kabkot_id": 468,
        "kecamatan": "Sulabesi Selatan"
      },
      {
        "id": 6340,
        "kabkot_id": 468,
        "kecamatan": "Sulabesi Tengah"
      },
      {
        "id": 6341,
        "kabkot_id": 468,
        "kecamatan": "Sulabesi Timur"
      },
      {
        "id": 6342,
        "kabkot_id": 469,
        "kecamatan": "Morotai Jaya"
      },
      {
        "id": 6343,
        "kabkot_id": 469,
        "kecamatan": "Morotai Selatan"
      },
      {
        "id": 6344,
        "kabkot_id": 469,
        "kecamatan": "Morotai Selatan Barat"
      },
      {
        "id": 6345,
        "kabkot_id": 469,
        "kecamatan": "Morotai Timur"
      },
      {
        "id": 6346,
        "kabkot_id": 469,
        "kecamatan": "Morotai Utara"
      },
      {
        "id": 6347,
        "kabkot_id": 470,
        "kecamatan": "Lede"
      },
      {
        "id": 6348,
        "kabkot_id": 470,
        "kecamatan": "Tabona"
      },
      {
        "id": 6349,
        "kabkot_id": 470,
        "kecamatan": "Taliabu Barat"
      },
      {
        "id": 6350,
        "kabkot_id": 470,
        "kecamatan": "Taliabu Barat Laut"
      },
      {
        "id": 6351,
        "kabkot_id": 470,
        "kecamatan": "Taliabu Selatan"
      },
      {
        "id": 6352,
        "kabkot_id": 470,
        "kecamatan": "Taliabu Timur"
      },
      {
        "id": 6353,
        "kabkot_id": 470,
        "kecamatan": "Taliabu Timur Selatan"
      },
      {
        "id": 6354,
        "kabkot_id": 470,
        "kecamatan": "Taliabu Utara"
      },
      {
        "id": 6355,
        "kabkot_id": 471,
        "kecamatan": "Moti (Pulau Moti)"
      },
      {
        "id": 6356,
        "kabkot_id": 471,
        "kecamatan": "Pulau Batang Dua"
      },
      {
        "id": 6357,
        "kabkot_id": 471,
        "kecamatan": "Pulau Hiri"
      },
      {
        "id": 6358,
        "kabkot_id": 471,
        "kecamatan": "Pulau Ternate"
      },
      {
        "id": 6359,
        "kabkot_id": 471,
        "kecamatan": "Ternate Selatan (Kota)"
      },
      {
        "id": 6360,
        "kabkot_id": 471,
        "kecamatan": "Ternate Tengah (Kota)"
      },
      {
        "id": 6361,
        "kabkot_id": 471,
        "kecamatan": "Ternate Utara (Kota)"
      },
      {
        "id": 6362,
        "kabkot_id": 472,
        "kecamatan": "Oba"
      },
      {
        "id": 6363,
        "kabkot_id": 472,
        "kecamatan": "Oba Selatan"
      },
      {
        "id": 6364,
        "kabkot_id": 472,
        "kecamatan": "Oba Tengah"
      },
      {
        "id": 6365,
        "kabkot_id": 472,
        "kecamatan": "Oba Utara"
      },
      {
        "id": 6366,
        "kabkot_id": 472,
        "kecamatan": "Tidore"
      },
      {
        "id": 6367,
        "kabkot_id": 472,
        "kecamatan": "Tidore (Pulau Tidore)"
      },
      {
        "id": 6368,
        "kabkot_id": 472,
        "kecamatan": "Tidore Selatan"
      },
      {
        "id": 6369,
        "kabkot_id": 472,
        "kecamatan": "Tidore Timur"
      },
      {
        "id": 6370,
        "kabkot_id": 472,
        "kecamatan": "Tidore Utara"
      },
      {
        "id": 6371,
        "kabkot_id": 473,
        "kecamatan": "Agats"
      },
      {
        "id": 6372,
        "kabkot_id": 473,
        "kecamatan": "Akat"
      },
      {
        "id": 6373,
        "kabkot_id": 473,
        "kecamatan": "Atsy / Atsj"
      },
      {
        "id": 6374,
        "kabkot_id": 473,
        "kecamatan": "Ayip"
      },
      {
        "id": 6375,
        "kabkot_id": 473,
        "kecamatan": "Betcbamu"
      },
      {
        "id": 6376,
        "kabkot_id": 473,
        "kecamatan": "Der Koumur"
      },
      {
        "id": 6377,
        "kabkot_id": 473,
        "kecamatan": "Fayit"
      },
      {
        "id": 6378,
        "kabkot_id": 473,
        "kecamatan": "Jetsy"
      },
      {
        "id": 6379,
        "kabkot_id": 473,
        "kecamatan": "Joerat"
      },
      {
        "id": 6380,
        "kabkot_id": 473,
        "kecamatan": "Kolf Braza"
      },
      {
        "id": 6381,
        "kabkot_id": 473,
        "kecamatan": "Kopay"
      },
      {
        "id": 6382,
        "kabkot_id": 473,
        "kecamatan": "Pantai Kasuari"
      },
      {
        "id": 6383,
        "kabkot_id": 473,
        "kecamatan": "Pulau Tiga"
      },
      {
        "id": 6384,
        "kabkot_id": 473,
        "kecamatan": "Safan"
      },
      {
        "id": 6385,
        "kabkot_id": 473,
        "kecamatan": "Sawa Erma"
      },
      {
        "id": 6386,
        "kabkot_id": 473,
        "kecamatan": "Sirets"
      },
      {
        "id": 6387,
        "kabkot_id": 473,
        "kecamatan": "Suator"
      },
      {
        "id": 6388,
        "kabkot_id": 473,
        "kecamatan": "Suru-suru"
      },
      {
        "id": 6389,
        "kabkot_id": 473,
        "kecamatan": "Unir Sirau"
      },
      {
        "id": 6390,
        "kabkot_id": 474,
        "kecamatan": "Aimando Padaido"
      },
      {
        "id": 6391,
        "kabkot_id": 474,
        "kecamatan": "Andey"
      },
      {
        "id": 6392,
        "kabkot_id": 474,
        "kecamatan": "Biak Barat"
      },
      {
        "id": 6393,
        "kabkot_id": 474,
        "kecamatan": "Biak Kota"
      },
      {
        "id": 6394,
        "kabkot_id": 474,
        "kecamatan": "Biak Timur"
      },
      {
        "id": 6395,
        "kabkot_id": 474,
        "kecamatan": "Biak Utara"
      },
      {
        "id": 6396,
        "kabkot_id": 474,
        "kecamatan": "Bondifuar"
      },
      {
        "id": 6397,
        "kabkot_id": 474,
        "kecamatan": "Bruyadori"
      },
      {
        "id": 6398,
        "kabkot_id": 474,
        "kecamatan": "Numfor Barat"
      },
      {
        "id": 6399,
        "kabkot_id": 474,
        "kecamatan": "Numfor Timur"
      },
      {
        "id": 6400,
        "kabkot_id": 474,
        "kecamatan": "Oridek"
      },
      {
        "id": 6401,
        "kabkot_id": 474,
        "kecamatan": "Orkeri"
      },
      {
        "id": 6402,
        "kabkot_id": 474,
        "kecamatan": "Padaido"
      },
      {
        "id": 6403,
        "kabkot_id": 474,
        "kecamatan": "Poiru"
      },
      {
        "id": 6404,
        "kabkot_id": 474,
        "kecamatan": "Samofa"
      },
      {
        "id": 6405,
        "kabkot_id": 474,
        "kecamatan": "Swandiwe"
      },
      {
        "id": 6406,
        "kabkot_id": 474,
        "kecamatan": "Warsa"
      },
      {
        "id": 6407,
        "kabkot_id": 474,
        "kecamatan": "Yawosi"
      },
      {
        "id": 6408,
        "kabkot_id": 474,
        "kecamatan": "Yendidori"
      },
      {
        "id": 6409,
        "kabkot_id": 475,
        "kecamatan": "Ambatkwi (Ambatkui)"
      },
      {
        "id": 6410,
        "kabkot_id": 475,
        "kecamatan": "Arimop"
      },
      {
        "id": 6411,
        "kabkot_id": 475,
        "kecamatan": "Bomakia"
      },
      {
        "id": 6412,
        "kabkot_id": 475,
        "kecamatan": "Firiwage"
      },
      {
        "id": 6413,
        "kabkot_id": 475,
        "kecamatan": "Fofi"
      },
      {
        "id": 6414,
        "kabkot_id": 475,
        "kecamatan": "Iniyandit"
      },
      {
        "id": 6415,
        "kabkot_id": 475,
        "kecamatan": "Jair"
      },
      {
        "id": 6416,
        "kabkot_id": 475,
        "kecamatan": "Kawagit"
      },
      {
        "id": 6417,
        "kabkot_id": 475,
        "kecamatan": "Ki"
      },
      {
        "id": 6418,
        "kabkot_id": 475,
        "kecamatan": "Kombay"
      },
      {
        "id": 6419,
        "kabkot_id": 475,
        "kecamatan": "Kombut"
      },
      {
        "id": 6420,
        "kabkot_id": 475,
        "kecamatan": "Kouh"
      },
      {
        "id": 6421,
        "kabkot_id": 475,
        "kecamatan": "Mandobo"
      },
      {
        "id": 6422,
        "kabkot_id": 475,
        "kecamatan": "Manggelum"
      },
      {
        "id": 6423,
        "kabkot_id": 475,
        "kecamatan": "Mindiptana"
      },
      {
        "id": 6424,
        "kabkot_id": 475,
        "kecamatan": "Ninati"
      },
      {
        "id": 6425,
        "kabkot_id": 475,
        "kecamatan": "Sesnuk"
      },
      {
        "id": 6426,
        "kabkot_id": 475,
        "kecamatan": "Subur"
      },
      {
        "id": 6427,
        "kabkot_id": 475,
        "kecamatan": "Waropko"
      },
      {
        "id": 6428,
        "kabkot_id": 475,
        "kecamatan": "Yaniruma"
      },
      {
        "id": 6429,
        "kabkot_id": 476,
        "kecamatan": "Bowobado"
      },
      {
        "id": 6430,
        "kabkot_id": 476,
        "kecamatan": "Kapiraya"
      },
      {
        "id": 6431,
        "kabkot_id": 476,
        "kecamatan": "Tigi"
      },
      {
        "id": 6432,
        "kabkot_id": 476,
        "kecamatan": "Tigi Barat"
      },
      {
        "id": 6433,
        "kabkot_id": 476,
        "kecamatan": "Tigi Timur"
      },
      {
        "id": 6434,
        "kabkot_id": 477,
        "kecamatan": "Dogiyai"
      },
      {
        "id": 6435,
        "kabkot_id": 477,
        "kecamatan": "Kamu"
      },
      {
        "id": 6436,
        "kabkot_id": 477,
        "kecamatan": "Kamu Selatan"
      },
      {
        "id": 6437,
        "kabkot_id": 477,
        "kecamatan": "Kamu Timur"
      },
      {
        "id": 6438,
        "kabkot_id": 477,
        "kecamatan": "Kamu Utara (Ikrar/Ikrat)"
      },
      {
        "id": 6439,
        "kabkot_id": 477,
        "kecamatan": "Mapia"
      },
      {
        "id": 6440,
        "kabkot_id": 477,
        "kecamatan": "Mapia Barat"
      },
      {
        "id": 6441,
        "kabkot_id": 477,
        "kecamatan": "Mapia Tengah"
      },
      {
        "id": 6442,
        "kabkot_id": 477,
        "kecamatan": "Piyaiye (Sukikai)"
      },
      {
        "id": 6443,
        "kabkot_id": 477,
        "kecamatan": "Sukikai Selatan"
      },
      {
        "id": 6444,
        "kabkot_id": 478,
        "kecamatan": "Agisiga"
      },
      {
        "id": 6445,
        "kabkot_id": 478,
        "kecamatan": "Biandoga"
      },
      {
        "id": 6446,
        "kabkot_id": 478,
        "kecamatan": "Hitadipa"
      },
      {
        "id": 6447,
        "kabkot_id": 478,
        "kecamatan": "Homeyo"
      },
      {
        "id": 6448,
        "kabkot_id": 478,
        "kecamatan": "Sugapa"
      },
      {
        "id": 6449,
        "kabkot_id": 478,
        "kecamatan": "Tomosiga"
      },
      {
        "id": 6450,
        "kabkot_id": 478,
        "kecamatan": "Ugimba"
      },
      {
        "id": 6451,
        "kabkot_id": 478,
        "kecamatan": "Wandai"
      },
      {
        "id": 6452,
        "kabkot_id": 479,
        "kecamatan": "Airu"
      },
      {
        "id": 6453,
        "kabkot_id": 479,
        "kecamatan": "Demta"
      },
      {
        "id": 6454,
        "kabkot_id": 479,
        "kecamatan": "Depapre"
      },
      {
        "id": 6455,
        "kabkot_id": 479,
        "kecamatan": "Ebungfau (Ebungfa)"
      },
      {
        "id": 6456,
        "kabkot_id": 479,
        "kecamatan": "Gresi Selatan"
      },
      {
        "id": 6457,
        "kabkot_id": 479,
        "kecamatan": "Kaureh"
      },
      {
        "id": 6458,
        "kabkot_id": 479,
        "kecamatan": "Kemtuk"
      },
      {
        "id": 6459,
        "kabkot_id": 479,
        "kecamatan": "Kemtuk Gresi"
      },
      {
        "id": 6460,
        "kabkot_id": 479,
        "kecamatan": "Nambluong"
      },
      {
        "id": 6461,
        "kabkot_id": 479,
        "kecamatan": "Nimbokrang"
      },
      {
        "id": 6462,
        "kabkot_id": 479,
        "kecamatan": "Nimboran"
      },
      {
        "id": 6463,
        "kabkot_id": 479,
        "kecamatan": "Ravenirara"
      },
      {
        "id": 6464,
        "kabkot_id": 479,
        "kecamatan": "Sentani"
      },
      {
        "id": 6465,
        "kabkot_id": 479,
        "kecamatan": "Sentani Barat"
      },
      {
        "id": 6466,
        "kabkot_id": 479,
        "kecamatan": "Sentani Timur"
      },
      {
        "id": 6467,
        "kabkot_id": 479,
        "kecamatan": "Unurum Guay"
      },
      {
        "id": 6468,
        "kabkot_id": 479,
        "kecamatan": "Waibu"
      },
      {
        "id": 6469,
        "kabkot_id": 479,
        "kecamatan": "Yapsi"
      },
      {
        "id": 6470,
        "kabkot_id": 479,
        "kecamatan": "Yokari"
      },
      {
        "id": 6471,
        "kabkot_id": 480,
        "kecamatan": "Asologaima (Asalogaima)"
      },
      {
        "id": 6472,
        "kabkot_id": 480,
        "kecamatan": "Asolokobal"
      },
      {
        "id": 6473,
        "kabkot_id": 480,
        "kecamatan": "Asotipo"
      },
      {
        "id": 6474,
        "kabkot_id": 480,
        "kecamatan": "Bolakme"
      },
      {
        "id": 6475,
        "kabkot_id": 480,
        "kecamatan": "Bpiri"
      },
      {
        "id": 6476,
        "kabkot_id": 480,
        "kecamatan": "Bugi"
      },
      {
        "id": 6477,
        "kabkot_id": 480,
        "kecamatan": "Hubikiak"
      },
      {
        "id": 6478,
        "kabkot_id": 480,
        "kecamatan": "Hubikosi (Hobikosi)"
      },
      {
        "id": 6479,
        "kabkot_id": 480,
        "kecamatan": "Ibele"
      },
      {
        "id": 6480,
        "kabkot_id": 480,
        "kecamatan": "Itlay Hisage"
      },
      {
        "id": 6481,
        "kabkot_id": 480,
        "kecamatan": "Koragi"
      },
      {
        "id": 6482,
        "kabkot_id": 480,
        "kecamatan": "Kurulu"
      },
      {
        "id": 6483,
        "kabkot_id": 480,
        "kecamatan": "Libarek"
      },
      {
        "id": 6484,
        "kabkot_id": 480,
        "kecamatan": "Maima"
      },
      {
        "id": 6485,
        "kabkot_id": 480,
        "kecamatan": "Molagalome"
      },
      {
        "id": 6486,
        "kabkot_id": 480,
        "kecamatan": "Muliama"
      },
      {
        "id": 6487,
        "kabkot_id": 480,
        "kecamatan": "Musatfak"
      },
      {
        "id": 6488,
        "kabkot_id": 480,
        "kecamatan": "Napua"
      },
      {
        "id": 6489,
        "kabkot_id": 480,
        "kecamatan": "Pelebaga"
      },
      {
        "id": 6490,
        "kabkot_id": 480,
        "kecamatan": "Piramid"
      },
      {
        "id": 6491,
        "kabkot_id": 480,
        "kecamatan": "Pisugi"
      },
      {
        "id": 6492,
        "kabkot_id": 480,
        "kecamatan": "Popugoba"
      },
      {
        "id": 6493,
        "kabkot_id": 480,
        "kecamatan": "Siepkosi"
      },
      {
        "id": 6494,
        "kabkot_id": 480,
        "kecamatan": "Silo Karno Doga"
      },
      {
        "id": 6495,
        "kabkot_id": 480,
        "kecamatan": "Taelarek"
      },
      {
        "id": 6496,
        "kabkot_id": 480,
        "kecamatan": "Tagime"
      },
      {
        "id": 6497,
        "kabkot_id": 480,
        "kecamatan": "Tagineri"
      },
      {
        "id": 6498,
        "kabkot_id": 480,
        "kecamatan": "Trikora"
      },
      {
        "id": 6499,
        "kabkot_id": 480,
        "kecamatan": "Usilimo"
      },
      {
        "id": 6500,
        "kabkot_id": 480,
        "kecamatan": "Wadangku"
      },
      {
        "id": 6501,
        "kabkot_id": 480,
        "kecamatan": "Walaik"
      },
      {
        "id": 6502,
        "kabkot_id": 480,
        "kecamatan": "Walelagama"
      },
      {
        "id": 6503,
        "kabkot_id": 480,
        "kecamatan": "Wame"
      },
      {
        "id": 6504,
        "kabkot_id": 480,
        "kecamatan": "Wamena"
      },
      {
        "id": 6505,
        "kabkot_id": 480,
        "kecamatan": "Welesi"
      },
      {
        "id": 6506,
        "kabkot_id": 480,
        "kecamatan": "Wesaput"
      },
      {
        "id": 6507,
        "kabkot_id": 480,
        "kecamatan": "Wita Waya"
      },
      {
        "id": 6508,
        "kabkot_id": 480,
        "kecamatan": "Wollo (Wolo)"
      },
      {
        "id": 6509,
        "kabkot_id": 480,
        "kecamatan": "Wouma"
      },
      {
        "id": 6510,
        "kabkot_id": 480,
        "kecamatan": "Yalengga"
      },
      {
        "id": 6511,
        "kabkot_id": 481,
        "kecamatan": "Arso"
      },
      {
        "id": 6512,
        "kabkot_id": 481,
        "kecamatan": "Arso Timur"
      },
      {
        "id": 6513,
        "kabkot_id": 481,
        "kecamatan": "Senggi"
      },
      {
        "id": 6514,
        "kabkot_id": 481,
        "kecamatan": "Skanto"
      },
      {
        "id": 6515,
        "kabkot_id": 481,
        "kecamatan": "Towe"
      },
      {
        "id": 6516,
        "kabkot_id": 481,
        "kecamatan": "Waris"
      },
      {
        "id": 6517,
        "kabkot_id": 481,
        "kecamatan": "Web"
      },
      {
        "id": 6518,
        "kabkot_id": 482,
        "kecamatan": "Angkaisera"
      },
      {
        "id": 6519,
        "kabkot_id": 482,
        "kecamatan": "Kepulauan Ambai"
      },
      {
        "id": 6520,
        "kabkot_id": 482,
        "kecamatan": "Kosiwo"
      },
      {
        "id": 6521,
        "kabkot_id": 482,
        "kecamatan": "Poom"
      },
      {
        "id": 6522,
        "kabkot_id": 482,
        "kecamatan": "Pulau Kurudu"
      },
      {
        "id": 6523,
        "kabkot_id": 482,
        "kecamatan": "Pulau Yerui"
      },
      {
        "id": 6524,
        "kabkot_id": 482,
        "kecamatan": "Raimbawi"
      },
      {
        "id": 6525,
        "kabkot_id": 482,
        "kecamatan": "Teluk Ampimoi"
      },
      {
        "id": 6526,
        "kabkot_id": 482,
        "kecamatan": "Windesi"
      },
      {
        "id": 6527,
        "kabkot_id": 482,
        "kecamatan": "Wonawa"
      },
      {
        "id": 6528,
        "kabkot_id": 482,
        "kecamatan": "Yapen Barat"
      },
      {
        "id": 6529,
        "kabkot_id": 482,
        "kecamatan": "Yapen Selatan"
      },
      {
        "id": 6530,
        "kabkot_id": 482,
        "kecamatan": "Yapen Timur"
      },
      {
        "id": 6531,
        "kabkot_id": 482,
        "kecamatan": "Yapen Utara"
      },
      {
        "id": 6532,
        "kabkot_id": 483,
        "kecamatan": "Awina"
      },
      {
        "id": 6533,
        "kabkot_id": 483,
        "kecamatan": "Ayumnati"
      },
      {
        "id": 6534,
        "kabkot_id": 483,
        "kecamatan": "Balingga"
      },
      {
        "id": 6535,
        "kabkot_id": 483,
        "kecamatan": "Balingga Barat"
      },
      {
        "id": 6536,
        "kabkot_id": 483,
        "kecamatan": "Bruwa"
      },
      {
        "id": 6537,
        "kabkot_id": 483,
        "kecamatan": "Buguk Gona"
      },
      {
        "id": 6538,
        "kabkot_id": 483,
        "kecamatan": "Dimba"
      },
      {
        "id": 6539,
        "kabkot_id": 483,
        "kecamatan": "Gamelia"
      },
      {
        "id": 6540,
        "kabkot_id": 483,
        "kecamatan": "Gelok Beam"
      },
      {
        "id": 6541,
        "kabkot_id": 483,
        "kecamatan": "Goa Balim"
      },
      {
        "id": 6542,
        "kabkot_id": 483,
        "kecamatan": "Gollo"
      },
      {
        "id": 6543,
        "kabkot_id": 483,
        "kecamatan": "Guna"
      },
      {
        "id": 6544,
        "kabkot_id": 483,
        "kecamatan": "Gupura"
      },
      {
        "id": 6545,
        "kabkot_id": 483,
        "kecamatan": "Karu"
      },
      {
        "id": 6546,
        "kabkot_id": 483,
        "kecamatan": "Kelulome"
      },
      {
        "id": 6547,
        "kabkot_id": 483,
        "kecamatan": "Kolawa"
      },
      {
        "id": 6548,
        "kabkot_id": 483,
        "kecamatan": "Kuly Lanny"
      },
      {
        "id": 6549,
        "kabkot_id": 483,
        "kecamatan": "Kuyawage"
      },
      {
        "id": 6550,
        "kabkot_id": 483,
        "kecamatan": "Lannyna"
      },
      {
        "id": 6551,
        "kabkot_id": 483,
        "kecamatan": "Makki"
      },
      {
        "id": 6552,
        "kabkot_id": 483,
        "kecamatan": "Melagi"
      },
      {
        "id": 6553,
        "kabkot_id": 483,
        "kecamatan": "Melagineri"
      },
      {
        "id": 6554,
        "kabkot_id": 483,
        "kecamatan": "Milimbo"
      },
      {
        "id": 6555,
        "kabkot_id": 483,
        "kecamatan": "Mokoni"
      },
      {
        "id": 6556,
        "kabkot_id": 483,
        "kecamatan": "Muara"
      },
      {
        "id": 6557,
        "kabkot_id": 483,
        "kecamatan": "Nikogwe"
      },
      {
        "id": 6558,
        "kabkot_id": 483,
        "kecamatan": "Niname"
      },
      {
        "id": 6559,
        "kabkot_id": 483,
        "kecamatan": "Nogi"
      },
      {
        "id": 6560,
        "kabkot_id": 483,
        "kecamatan": "Pirime"
      },
      {
        "id": 6561,
        "kabkot_id": 483,
        "kecamatan": "Poga"
      },
      {
        "id": 6562,
        "kabkot_id": 483,
        "kecamatan": "Tiom"
      },
      {
        "id": 6563,
        "kabkot_id": 483,
        "kecamatan": "Tiom Ollo"
      },
      {
        "id": 6564,
        "kabkot_id": 483,
        "kecamatan": "Tiomneri"
      },
      {
        "id": 6565,
        "kabkot_id": 483,
        "kecamatan": "Wano Barat"
      },
      {
        "id": 6566,
        "kabkot_id": 483,
        "kecamatan": "Wereka"
      },
      {
        "id": 6567,
        "kabkot_id": 483,
        "kecamatan": "Wiringgambut"
      },
      {
        "id": 6568,
        "kabkot_id": 483,
        "kecamatan": "Yiginua"
      },
      {
        "id": 6569,
        "kabkot_id": 483,
        "kecamatan": "Yiluk"
      },
      {
        "id": 6570,
        "kabkot_id": 483,
        "kecamatan": "Yugungwi"
      },
      {
        "id": 6571,
        "kabkot_id": 484,
        "kecamatan": "Benuki"
      },
      {
        "id": 6572,
        "kabkot_id": 484,
        "kecamatan": "Mamberamo Hilir/Ilir"
      },
      {
        "id": 6573,
        "kabkot_id": 484,
        "kecamatan": "Mamberamo Hulu"
      },
      {
        "id": 6574,
        "kabkot_id": 484,
        "kecamatan": "Mamberamo Tengah"
      },
      {
        "id": 6575,
        "kabkot_id": 484,
        "kecamatan": "Mamberamo Tengah Timur"
      },
      {
        "id": 6576,
        "kabkot_id": 484,
        "kecamatan": "Rufaer"
      },
      {
        "id": 6577,
        "kabkot_id": 484,
        "kecamatan": "Sawai"
      },
      {
        "id": 6578,
        "kabkot_id": 484,
        "kecamatan": "Waropen Atas"
      },
      {
        "id": 6579,
        "kabkot_id": 485,
        "kecamatan": "Eragayam"
      },
      {
        "id": 6580,
        "kabkot_id": 485,
        "kecamatan": "Ilugwa"
      },
      {
        "id": 6581,
        "kabkot_id": 485,
        "kecamatan": "Kelila"
      },
      {
        "id": 6582,
        "kabkot_id": 485,
        "kecamatan": "Kobakma"
      },
      {
        "id": 6583,
        "kabkot_id": 485,
        "kecamatan": "Megabilis (Megambilis)"
      },
      {
        "id": 6584,
        "kabkot_id": 486,
        "kecamatan": "Assue"
      },
      {
        "id": 6585,
        "kabkot_id": 486,
        "kecamatan": "Bamgi"
      },
      {
        "id": 6586,
        "kabkot_id": 486,
        "kecamatan": "Citakmitak"
      },
      {
        "id": 6587,
        "kabkot_id": 486,
        "kecamatan": "Edera"
      },
      {
        "id": 6588,
        "kabkot_id": 486,
        "kecamatan": "Haju"
      },
      {
        "id": 6589,
        "kabkot_id": 486,
        "kecamatan": "Kaibar"
      },
      {
        "id": 6590,
        "kabkot_id": 486,
        "kecamatan": "Minyamur"
      },
      {
        "id": 6591,
        "kabkot_id": 486,
        "kecamatan": "Nambioman Bapai (Mambioman)"
      },
      {
        "id": 6592,
        "kabkot_id": 486,
        "kecamatan": "Obaa"
      },
      {
        "id": 6593,
        "kabkot_id": 486,
        "kecamatan": "Passue"
      },
      {
        "id": 6594,
        "kabkot_id": 486,
        "kecamatan": "Passue Bawah"
      },
      {
        "id": 6595,
        "kabkot_id": 486,
        "kecamatan": "Syahcame"
      },
      {
        "id": 6596,
        "kabkot_id": 486,
        "kecamatan": "Ti Zain"
      },
      {
        "id": 6597,
        "kabkot_id": 486,
        "kecamatan": "Venaha"
      },
      {
        "id": 6598,
        "kabkot_id": 486,
        "kecamatan": "Yakomi"
      },
      {
        "id": 6599,
        "kabkot_id": 487,
        "kecamatan": "Animha"
      },
      {
        "id": 6600,
        "kabkot_id": 487,
        "kecamatan": "Elikobal"
      },
      {
        "id": 6601,
        "kabkot_id": 487,
        "kecamatan": "Ilyawab"
      },
      {
        "id": 6602,
        "kabkot_id": 487,
        "kecamatan": "Jagebob"
      },
      {
        "id": 6603,
        "kabkot_id": 487,
        "kecamatan": "Kaptel"
      },
      {
        "id": 6604,
        "kabkot_id": 487,
        "kecamatan": "Kimaam"
      },
      {
        "id": 6605,
        "kabkot_id": 487,
        "kecamatan": "Kurik"
      },
      {
        "id": 6606,
        "kabkot_id": 487,
        "kecamatan": "Malind"
      },
      {
        "id": 6607,
        "kabkot_id": 487,
        "kecamatan": "Merauke"
      },
      {
        "id": 6608,
        "kabkot_id": 487,
        "kecamatan": "Muting"
      },
      {
        "id": 6609,
        "kabkot_id": 487,
        "kecamatan": "Naukenjerai"
      },
      {
        "id": 6610,
        "kabkot_id": 487,
        "kecamatan": "Ngguti"
      },
      {
        "id": 6611,
        "kabkot_id": 487,
        "kecamatan": "Okaba"
      },
      {
        "id": 6612,
        "kabkot_id": 487,
        "kecamatan": "Semangga"
      },
      {
        "id": 6613,
        "kabkot_id": 487,
        "kecamatan": "Sota"
      },
      {
        "id": 6614,
        "kabkot_id": 487,
        "kecamatan": "Tabonji"
      },
      {
        "id": 6615,
        "kabkot_id": 487,
        "kecamatan": "Tanah Miring"
      },
      {
        "id": 6616,
        "kabkot_id": 487,
        "kecamatan": "Tubang"
      },
      {
        "id": 6617,
        "kabkot_id": 487,
        "kecamatan": "Ulilin"
      },
      {
        "id": 6618,
        "kabkot_id": 487,
        "kecamatan": "Waan"
      },
      {
        "id": 6619,
        "kabkot_id": 488,
        "kecamatan": "Agimuga"
      },
      {
        "id": 6620,
        "kabkot_id": 488,
        "kecamatan": "Alama"
      },
      {
        "id": 6621,
        "kabkot_id": 488,
        "kecamatan": "Amar"
      },
      {
        "id": 6622,
        "kabkot_id": 488,
        "kecamatan": "Hoya"
      },
      {
        "id": 6623,
        "kabkot_id": 488,
        "kecamatan": "Iwaka"
      },
      {
        "id": 6624,
        "kabkot_id": 488,
        "kecamatan": "Jila"
      },
      {
        "id": 6625,
        "kabkot_id": 488,
        "kecamatan": "Jita"
      },
      {
        "id": 6626,
        "kabkot_id": 488,
        "kecamatan": "Kuala Kencana"
      },
      {
        "id": 6627,
        "kabkot_id": 488,
        "kecamatan": "Kwamki Narama"
      },
      {
        "id": 6628,
        "kabkot_id": 488,
        "kecamatan": "Mimika Barat"
      },
      {
        "id": 6629,
        "kabkot_id": 488,
        "kecamatan": "Mimika Barat Jauh"
      },
      {
        "id": 6630,
        "kabkot_id": 488,
        "kecamatan": "Mimika Barat Tengah"
      },
      {
        "id": 6631,
        "kabkot_id": 488,
        "kecamatan": "Mimika Baru"
      },
      {
        "id": 6632,
        "kabkot_id": 488,
        "kecamatan": "Mimika Tengah"
      },
      {
        "id": 6633,
        "kabkot_id": 488,
        "kecamatan": "Mimika Timur"
      },
      {
        "id": 6634,
        "kabkot_id": 488,
        "kecamatan": "Mimika Timur Jauh"
      },
      {
        "id": 6635,
        "kabkot_id": 488,
        "kecamatan": "Tembagapura"
      },
      {
        "id": 6636,
        "kabkot_id": 488,
        "kecamatan": "Wania"
      },
      {
        "id": 6637,
        "kabkot_id": 489,
        "kecamatan": "Dipa"
      },
      {
        "id": 6638,
        "kabkot_id": 489,
        "kecamatan": "Makimi"
      },
      {
        "id": 6639,
        "kabkot_id": 489,
        "kecamatan": "Menou"
      },
      {
        "id": 6640,
        "kabkot_id": 489,
        "kecamatan": "Moora"
      },
      {
        "id": 6641,
        "kabkot_id": 489,
        "kecamatan": "Nabire"
      },
      {
        "id": 6642,
        "kabkot_id": 489,
        "kecamatan": "Nabire Barat"
      },
      {
        "id": 6643,
        "kabkot_id": 489,
        "kecamatan": "Napan"
      },
      {
        "id": 6644,
        "kabkot_id": 489,
        "kecamatan": "Siriwo"
      },
      {
        "id": 6645,
        "kabkot_id": 489,
        "kecamatan": "Teluk Kimi"
      },
      {
        "id": 6646,
        "kabkot_id": 489,
        "kecamatan": "Teluk Umar"
      },
      {
        "id": 6647,
        "kabkot_id": 489,
        "kecamatan": "Uwapa"
      },
      {
        "id": 6648,
        "kabkot_id": 489,
        "kecamatan": "Wanggar"
      },
      {
        "id": 6649,
        "kabkot_id": 489,
        "kecamatan": "Wapoga"
      },
      {
        "id": 6650,
        "kabkot_id": 489,
        "kecamatan": "Yaro (Yaro Kabisay)"
      },
      {
        "id": 6651,
        "kabkot_id": 489,
        "kecamatan": "Yaur"
      },
      {
        "id": 6652,
        "kabkot_id": 490,
        "kecamatan": "Alama"
      },
      {
        "id": 6653,
        "kabkot_id": 490,
        "kecamatan": "Dal"
      },
      {
        "id": 6654,
        "kabkot_id": 490,
        "kecamatan": "Embetpen"
      },
      {
        "id": 6655,
        "kabkot_id": 490,
        "kecamatan": "Gearek"
      },
      {
        "id": 6656,
        "kabkot_id": 490,
        "kecamatan": "Geselma (Geselema)"
      },
      {
        "id": 6657,
        "kabkot_id": 490,
        "kecamatan": "Inikgal"
      },
      {
        "id": 6658,
        "kabkot_id": 490,
        "kecamatan": "Iniye"
      },
      {
        "id": 6659,
        "kabkot_id": 490,
        "kecamatan": "Kegayem"
      },
      {
        "id": 6660,
        "kabkot_id": 490,
        "kecamatan": "Kenyam"
      },
      {
        "id": 6661,
        "kabkot_id": 490,
        "kecamatan": "Kilmid"
      },
      {
        "id": 6662,
        "kabkot_id": 490,
        "kecamatan": "Kora"
      },
      {
        "id": 6663,
        "kabkot_id": 490,
        "kecamatan": "Koroptak"
      },
      {
        "id": 6664,
        "kabkot_id": 490,
        "kecamatan": "Krepkuri"
      },
      {
        "id": 6665,
        "kabkot_id": 490,
        "kecamatan": "Mam"
      },
      {
        "id": 6666,
        "kabkot_id": 490,
        "kecamatan": "Mapenduma"
      },
      {
        "id": 6667,
        "kabkot_id": 490,
        "kecamatan": "Mbua (Mbuga)"
      },
      {
        "id": 6668,
        "kabkot_id": 490,
        "kecamatan": "Mbua Tengah"
      },
      {
        "id": 6669,
        "kabkot_id": 490,
        "kecamatan": "Mbulmu Yalma"
      },
      {
        "id": 6670,
        "kabkot_id": 490,
        "kecamatan": "Mebarok"
      },
      {
        "id": 6671,
        "kabkot_id": 490,
        "kecamatan": "Moba"
      },
      {
        "id": 6672,
        "kabkot_id": 490,
        "kecamatan": "Mugi"
      },
      {
        "id": 6673,
        "kabkot_id": 490,
        "kecamatan": "Nenggeagin"
      },
      {
        "id": 6674,
        "kabkot_id": 490,
        "kecamatan": "Nirkuri"
      },
      {
        "id": 6675,
        "kabkot_id": 490,
        "kecamatan": "Paro"
      },
      {
        "id": 6676,
        "kabkot_id": 490,
        "kecamatan": "Pasir Putih"
      },
      {
        "id": 6677,
        "kabkot_id": 490,
        "kecamatan": "Pija"
      },
      {
        "id": 6678,
        "kabkot_id": 490,
        "kecamatan": "Wosak"
      },
      {
        "id": 6679,
        "kabkot_id": 490,
        "kecamatan": "Wusi"
      },
      {
        "id": 6680,
        "kabkot_id": 490,
        "kecamatan": "Wutpaga"
      },
      {
        "id": 6681,
        "kabkot_id": 490,
        "kecamatan": "Yal"
      },
      {
        "id": 6682,
        "kabkot_id": 490,
        "kecamatan": "Yenggelo"
      },
      {
        "id": 6683,
        "kabkot_id": 490,
        "kecamatan": "Yigi"
      },
      {
        "id": 6684,
        "kabkot_id": 491,
        "kecamatan": "Aradide"
      },
      {
        "id": 6685,
        "kabkot_id": 491,
        "kecamatan": "Bibida"
      },
      {
        "id": 6686,
        "kabkot_id": 491,
        "kecamatan": "Bogobaida"
      },
      {
        "id": 6687,
        "kabkot_id": 491,
        "kecamatan": "Dumadama"
      },
      {
        "id": 6688,
        "kabkot_id": 491,
        "kecamatan": "Ekadide"
      },
      {
        "id": 6689,
        "kabkot_id": 491,
        "kecamatan": "Kebo"
      },
      {
        "id": 6690,
        "kabkot_id": 491,
        "kecamatan": "Paniai Barat"
      },
      {
        "id": 6691,
        "kabkot_id": 491,
        "kecamatan": "Paniai Timur"
      },
      {
        "id": 6692,
        "kabkot_id": 491,
        "kecamatan": "Siriwo"
      },
      {
        "id": 6693,
        "kabkot_id": 491,
        "kecamatan": "Yatamo"
      },
      {
        "id": 6694,
        "kabkot_id": 492,
        "kecamatan": "Aboy"
      },
      {
        "id": 6695,
        "kabkot_id": 492,
        "kecamatan": "Alemsom"
      },
      {
        "id": 6696,
        "kabkot_id": 492,
        "kecamatan": "Awinbon"
      },
      {
        "id": 6697,
        "kabkot_id": 492,
        "kecamatan": "Batani"
      },
      {
        "id": 6698,
        "kabkot_id": 492,
        "kecamatan": "Batom"
      },
      {
        "id": 6699,
        "kabkot_id": 492,
        "kecamatan": "Bime"
      },
      {
        "id": 6700,
        "kabkot_id": 492,
        "kecamatan": "Borme"
      },
      {
        "id": 6701,
        "kabkot_id": 492,
        "kecamatan": "Eipumek"
      },
      {
        "id": 6702,
        "kabkot_id": 492,
        "kecamatan": "Iwur (Okiwur)"
      },
      {
        "id": 6703,
        "kabkot_id": 492,
        "kecamatan": "Jetfa"
      },
      {
        "id": 6704,
        "kabkot_id": 492,
        "kecamatan": "Kalomdol"
      },
      {
        "id": 6705,
        "kabkot_id": 492,
        "kecamatan": "Kawor"
      },
      {
        "id": 6706,
        "kabkot_id": 492,
        "kecamatan": "Kiwirok"
      },
      {
        "id": 6707,
        "kabkot_id": 492,
        "kecamatan": "Kiwirok Timur"
      },
      {
        "id": 6708,
        "kabkot_id": 492,
        "kecamatan": "Mofinop"
      },
      {
        "id": 6709,
        "kabkot_id": 492,
        "kecamatan": "Murkim"
      },
      {
        "id": 6710,
        "kabkot_id": 492,
        "kecamatan": "Nongme"
      },
      {
        "id": 6711,
        "kabkot_id": 492,
        "kecamatan": "Ok Aom"
      },
      {
        "id": 6712,
        "kabkot_id": 492,
        "kecamatan": "Okbab"
      },
      {
        "id": 6713,
        "kabkot_id": 492,
        "kecamatan": "Okbape"
      },
      {
        "id": 6714,
        "kabkot_id": 492,
        "kecamatan": "Okbemtau"
      },
      {
        "id": 6715,
        "kabkot_id": 492,
        "kecamatan": "Okbibab"
      },
      {
        "id": 6716,
        "kabkot_id": 492,
        "kecamatan": "Okhika"
      },
      {
        "id": 6717,
        "kabkot_id": 492,
        "kecamatan": "Oklip"
      },
      {
        "id": 6718,
        "kabkot_id": 492,
        "kecamatan": "Oksamol"
      },
      {
        "id": 6719,
        "kabkot_id": 492,
        "kecamatan": "Oksebang"
      },
      {
        "id": 6720,
        "kabkot_id": 492,
        "kecamatan": "Oksibil"
      },
      {
        "id": 6721,
        "kabkot_id": 492,
        "kecamatan": "Oksop"
      },
      {
        "id": 6722,
        "kabkot_id": 492,
        "kecamatan": "Pamek"
      },
      {
        "id": 6723,
        "kabkot_id": 492,
        "kecamatan": "Pepera"
      },
      {
        "id": 6724,
        "kabkot_id": 492,
        "kecamatan": "Serambakon"
      },
      {
        "id": 6725,
        "kabkot_id": 492,
        "kecamatan": "Tarup"
      },
      {
        "id": 6726,
        "kabkot_id": 492,
        "kecamatan": "Teiraplu"
      },
      {
        "id": 6727,
        "kabkot_id": 492,
        "kecamatan": "Weime"
      },
      {
        "id": 6728,
        "kabkot_id": 493,
        "kecamatan": "Agadugume"
      },
      {
        "id": 6729,
        "kabkot_id": 493,
        "kecamatan": "Beoga"
      },
      {
        "id": 6730,
        "kabkot_id": 493,
        "kecamatan": "Doufu"
      },
      {
        "id": 6731,
        "kabkot_id": 493,
        "kecamatan": "Gome"
      },
      {
        "id": 6732,
        "kabkot_id": 493,
        "kecamatan": "Ilaga"
      },
      {
        "id": 6733,
        "kabkot_id": 493,
        "kecamatan": "Pogoma"
      },
      {
        "id": 6734,
        "kabkot_id": 493,
        "kecamatan": "Sinak"
      },
      {
        "id": 6735,
        "kabkot_id": 493,
        "kecamatan": "Wangbe"
      },
      {
        "id": 6736,
        "kabkot_id": 494,
        "kecamatan": "Dagai"
      },
      {
        "id": 6737,
        "kabkot_id": 494,
        "kecamatan": "Dokome"
      },
      {
        "id": 6738,
        "kabkot_id": 494,
        "kecamatan": "Fawi"
      },
      {
        "id": 6739,
        "kabkot_id": 494,
        "kecamatan": "Gubume"
      },
      {
        "id": 6740,
        "kabkot_id": 494,
        "kecamatan": "Gurage"
      },
      {
        "id": 6741,
        "kabkot_id": 494,
        "kecamatan": "Ilamburawi"
      },
      {
        "id": 6742,
        "kabkot_id": 494,
        "kecamatan": "Ilu"
      },
      {
        "id": 6743,
        "kabkot_id": 494,
        "kecamatan": "Irimuli"
      },
      {
        "id": 6744,
        "kabkot_id": 494,
        "kecamatan": "Kalome"
      },
      {
        "id": 6745,
        "kabkot_id": 494,
        "kecamatan": "Kiyage"
      },
      {
        "id": 6746,
        "kabkot_id": 494,
        "kecamatan": "Lumo"
      },
      {
        "id": 6747,
        "kabkot_id": 494,
        "kecamatan": "Mewoluk"
      },
      {
        "id": 6748,
        "kabkot_id": 494,
        "kecamatan": "Molanikime"
      },
      {
        "id": 6749,
        "kabkot_id": 494,
        "kecamatan": "Muara"
      },
      {
        "id": 6750,
        "kabkot_id": 494,
        "kecamatan": "Mulia"
      },
      {
        "id": 6751,
        "kabkot_id": 494,
        "kecamatan": "Nioga"
      },
      {
        "id": 6752,
        "kabkot_id": 494,
        "kecamatan": "Nume"
      },
      {
        "id": 6753,
        "kabkot_id": 494,
        "kecamatan": "Pagaleme"
      },
      {
        "id": 6754,
        "kabkot_id": 494,
        "kecamatan": "Taganombak"
      },
      {
        "id": 6755,
        "kabkot_id": 494,
        "kecamatan": "Tingginambut"
      },
      {
        "id": 6756,
        "kabkot_id": 494,
        "kecamatan": "Torere"
      },
      {
        "id": 6757,
        "kabkot_id": 494,
        "kecamatan": "Waegi"
      },
      {
        "id": 6758,
        "kabkot_id": 494,
        "kecamatan": "Wanwi"
      },
      {
        "id": 6759,
        "kabkot_id": 494,
        "kecamatan": "Yambi"
      },
      {
        "id": 6760,
        "kabkot_id": 494,
        "kecamatan": "Yamo"
      },
      {
        "id": 6761,
        "kabkot_id": 494,
        "kecamatan": "Yamoneri"
      },
      {
        "id": 6762,
        "kabkot_id": 495,
        "kecamatan": "Apawer Hulu"
      },
      {
        "id": 6763,
        "kabkot_id": 495,
        "kecamatan": "Bonggo"
      },
      {
        "id": 6764,
        "kabkot_id": 495,
        "kecamatan": "Bonggo Timur"
      },
      {
        "id": 6765,
        "kabkot_id": 495,
        "kecamatan": "Pantai Barat"
      },
      {
        "id": 6766,
        "kabkot_id": 495,
        "kecamatan": "Pantai Timur"
      },
      {
        "id": 6767,
        "kabkot_id": 495,
        "kecamatan": "Pantai Timur Bagian Barat"
      },
      {
        "id": 6768,
        "kabkot_id": 495,
        "kecamatan": "Sarmi"
      },
      {
        "id": 6769,
        "kabkot_id": 495,
        "kecamatan": "Sarmi Selatan"
      },
      {
        "id": 6770,
        "kabkot_id": 495,
        "kecamatan": "Sarmi Timur"
      },
      {
        "id": 6771,
        "kabkot_id": 495,
        "kecamatan": "Tor Atas"
      },
      {
        "id": 6772,
        "kabkot_id": 496,
        "kecamatan": "Kepulauan Aruri"
      },
      {
        "id": 6773,
        "kabkot_id": 496,
        "kecamatan": "Supiori Barat"
      },
      {
        "id": 6774,
        "kabkot_id": 496,
        "kecamatan": "Supiori Selatan"
      },
      {
        "id": 6775,
        "kabkot_id": 496,
        "kecamatan": "Supiori Timur"
      },
      {
        "id": 6776,
        "kabkot_id": 496,
        "kecamatan": "Supiori Utara"
      },
      {
        "id": 6777,
        "kabkot_id": 497,
        "kecamatan": "Airgaram"
      },
      {
        "id": 6778,
        "kabkot_id": 497,
        "kecamatan": "Anawi"
      },
      {
        "id": 6779,
        "kabkot_id": 497,
        "kecamatan": "Aweku"
      },
      {
        "id": 6780,
        "kabkot_id": 497,
        "kecamatan": "Bewani"
      },
      {
        "id": 6781,
        "kabkot_id": 497,
        "kecamatan": "Biuk"
      },
      {
        "id": 6782,
        "kabkot_id": 497,
        "kecamatan": "Bogonuk"
      },
      {
        "id": 6783,
        "kabkot_id": 497,
        "kecamatan": "Bokondini"
      },
      {
        "id": 6784,
        "kabkot_id": 497,
        "kecamatan": "Bokoneri"
      },
      {
        "id": 6785,
        "kabkot_id": 497,
        "kecamatan": "Danime"
      },
      {
        "id": 6786,
        "kabkot_id": 497,
        "kecamatan": "Dow"
      },
      {
        "id": 6787,
        "kabkot_id": 497,
        "kecamatan": "Dundu (Ndundu)"
      },
      {
        "id": 6788,
        "kabkot_id": 497,
        "kecamatan": "Egiam"
      },
      {
        "id": 6789,
        "kabkot_id": 497,
        "kecamatan": "Geya"
      },
      {
        "id": 6790,
        "kabkot_id": 497,
        "kecamatan": "Gika"
      },
      {
        "id": 6791,
        "kabkot_id": 497,
        "kecamatan": "Gilubandu (Gilumbandu/Gilimbandu)"
      },
      {
        "id": 6792,
        "kabkot_id": 497,
        "kecamatan": "Goyage"
      },
      {
        "id": 6793,
        "kabkot_id": 497,
        "kecamatan": "Gundagi (Gudage)"
      },
      {
        "id": 6794,
        "kabkot_id": 497,
        "kecamatan": "Kai"
      },
      {
        "id": 6795,
        "kabkot_id": 497,
        "kecamatan": "Kamboneri"
      },
      {
        "id": 6796,
        "kabkot_id": 497,
        "kecamatan": "Kanggime (Kanggima )"
      },
      {
        "id": 6797,
        "kabkot_id": 497,
        "kecamatan": "Karubaga"
      },
      {
        "id": 6798,
        "kabkot_id": 497,
        "kecamatan": "Kembu"
      },
      {
        "id": 6799,
        "kabkot_id": 497,
        "kecamatan": "Kondaga (Konda)"
      },
      {
        "id": 6800,
        "kabkot_id": 497,
        "kecamatan": "Kuari"
      },
      {
        "id": 6801,
        "kabkot_id": 497,
        "kecamatan": "Kubu"
      },
      {
        "id": 6802,
        "kabkot_id": 497,
        "kecamatan": "Li Anogomma"
      },
      {
        "id": 6803,
        "kabkot_id": 497,
        "kecamatan": "Nabunage"
      },
      {
        "id": 6804,
        "kabkot_id": 497,
        "kecamatan": "Nelawi"
      },
      {
        "id": 6805,
        "kabkot_id": 497,
        "kecamatan": "Numba"
      },
      {
        "id": 6806,
        "kabkot_id": 497,
        "kecamatan": "Nunggawi (Munggawi)"
      },
      {
        "id": 6807,
        "kabkot_id": 497,
        "kecamatan": "Panaga"
      },
      {
        "id": 6808,
        "kabkot_id": 497,
        "kecamatan": "Poganeri"
      },
      {
        "id": 6809,
        "kabkot_id": 497,
        "kecamatan": "Tagime"
      },
      {
        "id": 6810,
        "kabkot_id": 497,
        "kecamatan": "Tagineri"
      },
      {
        "id": 6811,
        "kabkot_id": 497,
        "kecamatan": "Telenggeme"
      },
      {
        "id": 6812,
        "kabkot_id": 497,
        "kecamatan": "Timori"
      },
      {
        "id": 6813,
        "kabkot_id": 497,
        "kecamatan": "Umagi"
      },
      {
        "id": 6814,
        "kabkot_id": 497,
        "kecamatan": "Wakuwo"
      },
      {
        "id": 6815,
        "kabkot_id": 497,
        "kecamatan": "Wari (Taiyeve)"
      },
      {
        "id": 6816,
        "kabkot_id": 497,
        "kecamatan": "Wenam"
      },
      {
        "id": 6817,
        "kabkot_id": 497,
        "kecamatan": "Wina"
      },
      {
        "id": 6818,
        "kabkot_id": 497,
        "kecamatan": "Wonoki (Woniki)"
      },
      {
        "id": 6819,
        "kabkot_id": 497,
        "kecamatan": "Wugi"
      },
      {
        "id": 6820,
        "kabkot_id": 497,
        "kecamatan": "Wunin (Wumin)"
      },
      {
        "id": 6821,
        "kabkot_id": 497,
        "kecamatan": "Yuko"
      },
      {
        "id": 6822,
        "kabkot_id": 497,
        "kecamatan": "Yuneri"
      },
      {
        "id": 6823,
        "kabkot_id": 498,
        "kecamatan": "Demba"
      },
      {
        "id": 6824,
        "kabkot_id": 498,
        "kecamatan": "Inggerus"
      },
      {
        "id": 6825,
        "kabkot_id": 498,
        "kecamatan": "Kirihi"
      },
      {
        "id": 6826,
        "kabkot_id": 498,
        "kecamatan": "Masirei"
      },
      {
        "id": 6827,
        "kabkot_id": 498,
        "kecamatan": "Oudate"
      },
      {
        "id": 6828,
        "kabkot_id": 498,
        "kecamatan": "Risei Sayati"
      },
      {
        "id": 6829,
        "kabkot_id": 498,
        "kecamatan": "Soyoi Mambai"
      },
      {
        "id": 6830,
        "kabkot_id": 498,
        "kecamatan": "Urei Faisei"
      },
      {
        "id": 6831,
        "kabkot_id": 498,
        "kecamatan": "Wapoga"
      },
      {
        "id": 6832,
        "kabkot_id": 498,
        "kecamatan": "Waropen Bawah"
      },
      {
        "id": 6833,
        "kabkot_id": 498,
        "kecamatan": "Wonti"
      },
      {
        "id": 6834,
        "kabkot_id": 499,
        "kecamatan": "Amuma"
      },
      {
        "id": 6835,
        "kabkot_id": 499,
        "kecamatan": "Anggruk"
      },
      {
        "id": 6836,
        "kabkot_id": 499,
        "kecamatan": "Bomela"
      },
      {
        "id": 6837,
        "kabkot_id": 499,
        "kecamatan": "Dekai"
      },
      {
        "id": 6838,
        "kabkot_id": 499,
        "kecamatan": "Dirwemna (Diruwena)"
      },
      {
        "id": 6839,
        "kabkot_id": 499,
        "kecamatan": "Duram"
      },
      {
        "id": 6840,
        "kabkot_id": 499,
        "kecamatan": "Endomen"
      },
      {
        "id": 6841,
        "kabkot_id": 499,
        "kecamatan": "Hereapini (Hereanini)"
      },
      {
        "id": 6842,
        "kabkot_id": 499,
        "kecamatan": "Hilipuk"
      },
      {
        "id": 6843,
        "kabkot_id": 499,
        "kecamatan": "Hogio (Hugio)"
      },
      {
        "id": 6844,
        "kabkot_id": 499,
        "kecamatan": "Holuon"
      },
      {
        "id": 6845,
        "kabkot_id": 499,
        "kecamatan": "Kabianggama (Kabianggema)"
      },
      {
        "id": 6846,
        "kabkot_id": 499,
        "kecamatan": "Kayo"
      },
      {
        "id": 6847,
        "kabkot_id": 499,
        "kecamatan": "Kona"
      },
      {
        "id": 6848,
        "kabkot_id": 499,
        "kecamatan": "Koropun (Korupun)"
      },
      {
        "id": 6849,
        "kabkot_id": 499,
        "kecamatan": "Kosarek"
      },
      {
        "id": 6850,
        "kabkot_id": 499,
        "kecamatan": "Kurima"
      },
      {
        "id": 6851,
        "kabkot_id": 499,
        "kecamatan": "Kwelemdua (Kwelamdua)"
      },
      {
        "id": 6852,
        "kabkot_id": 499,
        "kecamatan": "Kwikma"
      },
      {
        "id": 6853,
        "kabkot_id": 499,
        "kecamatan": "Langda"
      },
      {
        "id": 6854,
        "kabkot_id": 499,
        "kecamatan": "Lolat"
      },
      {
        "id": 6855,
        "kabkot_id": 499,
        "kecamatan": "Mugi"
      },
      {
        "id": 6856,
        "kabkot_id": 499,
        "kecamatan": "Musaik"
      },
      {
        "id": 6857,
        "kabkot_id": 499,
        "kecamatan": "Nalca"
      },
      {
        "id": 6858,
        "kabkot_id": 499,
        "kecamatan": "Ninia"
      },
      {
        "id": 6859,
        "kabkot_id": 499,
        "kecamatan": "Nipsan"
      },
      {
        "id": 6860,
        "kabkot_id": 499,
        "kecamatan": "Obio"
      },
      {
        "id": 6861,
        "kabkot_id": 499,
        "kecamatan": "Panggema"
      },
      {
        "id": 6862,
        "kabkot_id": 499,
        "kecamatan": "Pasema"
      },
      {
        "id": 6863,
        "kabkot_id": 499,
        "kecamatan": "Pronggoli (Proggoli)"
      },
      {
        "id": 6864,
        "kabkot_id": 499,
        "kecamatan": "Puldama"
      },
      {
        "id": 6865,
        "kabkot_id": 499,
        "kecamatan": "Samenage"
      },
      {
        "id": 6866,
        "kabkot_id": 499,
        "kecamatan": "Sela"
      },
      {
        "id": 6867,
        "kabkot_id": 499,
        "kecamatan": "Seredela (Seredala)"
      },
      {
        "id": 6868,
        "kabkot_id": 499,
        "kecamatan": "Silimo"
      },
      {
        "id": 6869,
        "kabkot_id": 499,
        "kecamatan": "Soba"
      },
      {
        "id": 6870,
        "kabkot_id": 499,
        "kecamatan": "Sobaham"
      },
      {
        "id": 6871,
        "kabkot_id": 499,
        "kecamatan": "Soloikma"
      },
      {
        "id": 6872,
        "kabkot_id": 499,
        "kecamatan": "Sumo"
      },
      {
        "id": 6873,
        "kabkot_id": 499,
        "kecamatan": "Suntamon"
      },
      {
        "id": 6874,
        "kabkot_id": 499,
        "kecamatan": "Suru Suru"
      },
      {
        "id": 6875,
        "kabkot_id": 499,
        "kecamatan": "Talambo"
      },
      {
        "id": 6876,
        "kabkot_id": 499,
        "kecamatan": "Tangma"
      },
      {
        "id": 6877,
        "kabkot_id": 499,
        "kecamatan": "Ubahak"
      },
      {
        "id": 6878,
        "kabkot_id": 499,
        "kecamatan": "Ubalihi"
      },
      {
        "id": 6879,
        "kabkot_id": 499,
        "kecamatan": "Ukha"
      },
      {
        "id": 6880,
        "kabkot_id": 499,
        "kecamatan": "Walma"
      },
      {
        "id": 6881,
        "kabkot_id": 499,
        "kecamatan": "Werima"
      },
      {
        "id": 6882,
        "kabkot_id": 499,
        "kecamatan": "Wusuma"
      },
      {
        "id": 6883,
        "kabkot_id": 499,
        "kecamatan": "Yahuliambut"
      },
      {
        "id": 6884,
        "kabkot_id": 499,
        "kecamatan": "Yogosem"
      },
      {
        "id": 6885,
        "kabkot_id": 500,
        "kecamatan": "Abenaho"
      },
      {
        "id": 6886,
        "kabkot_id": 500,
        "kecamatan": "Apalapsili"
      },
      {
        "id": 6887,
        "kabkot_id": 500,
        "kecamatan": "Benawa"
      },
      {
        "id": 6888,
        "kabkot_id": 500,
        "kecamatan": "Elelim"
      },
      {
        "id": 6889,
        "kabkot_id": 500,
        "kecamatan": "Welarek"
      },
      {
        "id": 6890,
        "kabkot_id": 501,
        "kecamatan": "Abepura"
      },
      {
        "id": 6891,
        "kabkot_id": 501,
        "kecamatan": "Heram"
      },
      {
        "id": 6892,
        "kabkot_id": 501,
        "kecamatan": "Jayapura Selatan"
      },
      {
        "id": 6893,
        "kabkot_id": 501,
        "kecamatan": "Jayapura Utara"
      },
      {
        "id": 6894,
        "kabkot_id": 501,
        "kecamatan": "Muara Tami"
      },
      {
        "id": 6895,
        "kabkot_id": 502,
        "kecamatan": "Arguni"
      },
      {
        "id": 6896,
        "kabkot_id": 502,
        "kecamatan": "Bomberay"
      },
      {
        "id": 6897,
        "kabkot_id": 502,
        "kecamatan": "Fakfak"
      },
      {
        "id": 6898,
        "kabkot_id": 502,
        "kecamatan": "Fakfak Barat"
      },
      {
        "id": 6899,
        "kabkot_id": 502,
        "kecamatan": "Fakfak Tengah"
      },
      {
        "id": 6900,
        "kabkot_id": 502,
        "kecamatan": "Fakfak Timur"
      },
      {
        "id": 6901,
        "kabkot_id": 502,
        "kecamatan": "Fakfak Timur Tengah"
      },
      {
        "id": 6902,
        "kabkot_id": 502,
        "kecamatan": "Furwagi"
      },
      {
        "id": 6903,
        "kabkot_id": 502,
        "kecamatan": "Karas"
      },
      {
        "id": 6904,
        "kabkot_id": 502,
        "kecamatan": "Kayauni"
      },
      {
        "id": 6905,
        "kabkot_id": 502,
        "kecamatan": "Kokas"
      },
      {
        "id": 6906,
        "kabkot_id": 502,
        "kecamatan": "Kramongmongga"
      },
      {
        "id": 6907,
        "kabkot_id": 502,
        "kecamatan": "Mbahamdandara"
      },
      {
        "id": 6908,
        "kabkot_id": 502,
        "kecamatan": "Pariwari"
      },
      {
        "id": 6909,
        "kabkot_id": 502,
        "kecamatan": "Teluk Patipi"
      },
      {
        "id": 6910,
        "kabkot_id": 502,
        "kecamatan": "Tomage"
      },
      {
        "id": 6911,
        "kabkot_id": 502,
        "kecamatan": "Wartutin"
      },
      {
        "id": 6912,
        "kabkot_id": 503,
        "kecamatan": "Buruway"
      },
      {
        "id": 6913,
        "kabkot_id": 503,
        "kecamatan": "Kaimana"
      },
      {
        "id": 6914,
        "kabkot_id": 503,
        "kecamatan": "Kambraw (Kamberau)"
      },
      {
        "id": 6915,
        "kabkot_id": 503,
        "kecamatan": "Teluk Arguni Atas"
      },
      {
        "id": 6916,
        "kabkot_id": 503,
        "kecamatan": "Teluk Arguni Bawah (Yerusi)"
      },
      {
        "id": 6917,
        "kabkot_id": 503,
        "kecamatan": "Teluk Etna"
      },
      {
        "id": 6918,
        "kabkot_id": 503,
        "kecamatan": "Yamor"
      },
      {
        "id": 6919,
        "kabkot_id": 504,
        "kecamatan": "Manokwari Barat"
      },
      {
        "id": 6920,
        "kabkot_id": 504,
        "kecamatan": "Manokwari Selatan"
      },
      {
        "id": 6921,
        "kabkot_id": 504,
        "kecamatan": "Manokwari Timur"
      },
      {
        "id": 6922,
        "kabkot_id": 504,
        "kecamatan": "Manokwari Utara"
      },
      {
        "id": 6923,
        "kabkot_id": 504,
        "kecamatan": "Masni"
      },
      {
        "id": 6924,
        "kabkot_id": 504,
        "kecamatan": "Prafi"
      },
      {
        "id": 6925,
        "kabkot_id": 504,
        "kecamatan": "Sidey"
      },
      {
        "id": 6926,
        "kabkot_id": 504,
        "kecamatan": "Tanah Rubuh"
      },
      {
        "id": 6927,
        "kabkot_id": 504,
        "kecamatan": "Warmare"
      },
      {
        "id": 6928,
        "kabkot_id": 505,
        "kecamatan": "Dataran Isim"
      },
      {
        "id": 6929,
        "kabkot_id": 505,
        "kecamatan": "Momi Waren"
      },
      {
        "id": 6930,
        "kabkot_id": 505,
        "kecamatan": "Neney"
      },
      {
        "id": 6931,
        "kabkot_id": 505,
        "kecamatan": "Oransbari"
      },
      {
        "id": 6932,
        "kabkot_id": 505,
        "kecamatan": "Ransiki"
      },
      {
        "id": 6933,
        "kabkot_id": 505,
        "kecamatan": "Tahota"
      },
      {
        "id": 6934,
        "kabkot_id": 506,
        "kecamatan": "Aifat"
      },
      {
        "id": 6935,
        "kabkot_id": 506,
        "kecamatan": "Aifat Selatan"
      },
      {
        "id": 6936,
        "kabkot_id": 506,
        "kecamatan": "Aifat Timur"
      },
      {
        "id": 6937,
        "kabkot_id": 506,
        "kecamatan": "Aifat Timur Jauh"
      },
      {
        "id": 6938,
        "kabkot_id": 506,
        "kecamatan": "Aifat Timur Selatan"
      },
      {
        "id": 6939,
        "kabkot_id": 506,
        "kecamatan": "Aifat Timur Tengah"
      },
      {
        "id": 6940,
        "kabkot_id": 506,
        "kecamatan": "Aifat Utara"
      },
      {
        "id": 6941,
        "kabkot_id": 506,
        "kecamatan": "Aitinyo"
      },
      {
        "id": 6942,
        "kabkot_id": 506,
        "kecamatan": "Aitinyo Barat"
      },
      {
        "id": 6943,
        "kabkot_id": 506,
        "kecamatan": "Aitinyo Raya"
      },
      {
        "id": 6944,
        "kabkot_id": 506,
        "kecamatan": "Aitinyo Tengah"
      },
      {
        "id": 6945,
        "kabkot_id": 506,
        "kecamatan": "Aitinyo Utara"
      },
      {
        "id": 6946,
        "kabkot_id": 506,
        "kecamatan": "Ayamaru"
      },
      {
        "id": 6947,
        "kabkot_id": 506,
        "kecamatan": "Ayamaru Barat"
      },
      {
        "id": 6948,
        "kabkot_id": 506,
        "kecamatan": "Ayamaru Jaya"
      },
      {
        "id": 6949,
        "kabkot_id": 506,
        "kecamatan": "Ayamaru Selatan"
      },
      {
        "id": 6950,
        "kabkot_id": 506,
        "kecamatan": "Ayamaru Selatan Jaya"
      },
      {
        "id": 6951,
        "kabkot_id": 506,
        "kecamatan": "Ayamaru Tengah"
      },
      {
        "id": 6952,
        "kabkot_id": 506,
        "kecamatan": "Ayamaru Timur"
      },
      {
        "id": 6953,
        "kabkot_id": 506,
        "kecamatan": "Ayamaru Timur Selatan"
      },
      {
        "id": 6954,
        "kabkot_id": 506,
        "kecamatan": "Ayamaru Utara"
      },
      {
        "id": 6955,
        "kabkot_id": 506,
        "kecamatan": "Ayamaru Utara Timur"
      },
      {
        "id": 6956,
        "kabkot_id": 506,
        "kecamatan": "Mare"
      },
      {
        "id": 6957,
        "kabkot_id": 506,
        "kecamatan": "Mare Selatan"
      },
      {
        "id": 6958,
        "kabkot_id": 507,
        "kecamatan": "Anggi"
      },
      {
        "id": 6959,
        "kabkot_id": 507,
        "kecamatan": "Anggi Gida"
      },
      {
        "id": 6960,
        "kabkot_id": 507,
        "kecamatan": "Catubouw"
      },
      {
        "id": 6961,
        "kabkot_id": 507,
        "kecamatan": "Didohu"
      },
      {
        "id": 6962,
        "kabkot_id": 507,
        "kecamatan": "Hingk"
      },
      {
        "id": 6963,
        "kabkot_id": 507,
        "kecamatan": "Membey"
      },
      {
        "id": 6964,
        "kabkot_id": 507,
        "kecamatan": "Minyambaouw"
      },
      {
        "id": 6965,
        "kabkot_id": 507,
        "kecamatan": "Sururey"
      },
      {
        "id": 6966,
        "kabkot_id": 507,
        "kecamatan": "Taige"
      },
      {
        "id": 6967,
        "kabkot_id": 507,
        "kecamatan": "Testega"
      },
      {
        "id": 6968,
        "kabkot_id": 508,
        "kecamatan": "Ayau"
      },
      {
        "id": 6969,
        "kabkot_id": 508,
        "kecamatan": "Batanta Selatan"
      },
      {
        "id": 6970,
        "kabkot_id": 508,
        "kecamatan": "Batanta Utara"
      },
      {
        "id": 6971,
        "kabkot_id": 508,
        "kecamatan": "Kepulauan Ayau"
      },
      {
        "id": 6972,
        "kabkot_id": 508,
        "kecamatan": "Kepulauan Sembilan"
      },
      {
        "id": 6973,
        "kabkot_id": 508,
        "kecamatan": "Kofiau"
      },
      {
        "id": 6974,
        "kabkot_id": 508,
        "kecamatan": "Kota Waisai"
      },
      {
        "id": 6975,
        "kabkot_id": 508,
        "kecamatan": "Meos Mansar"
      },
      {
        "id": 6976,
        "kabkot_id": 508,
        "kecamatan": "Misool (Misool Utara)"
      },
      {
        "id": 6977,
        "kabkot_id": 508,
        "kecamatan": "Misool Barat"
      },
      {
        "id": 6978,
        "kabkot_id": 508,
        "kecamatan": "Misool Selatan"
      },
      {
        "id": 6979,
        "kabkot_id": 508,
        "kecamatan": "Misool Timur"
      },
      {
        "id": 6980,
        "kabkot_id": 508,
        "kecamatan": "Salawati Barat"
      },
      {
        "id": 6981,
        "kabkot_id": 508,
        "kecamatan": "Salawati Tengah"
      },
      {
        "id": 6982,
        "kabkot_id": 508,
        "kecamatan": "Salawati Utara (Samate)"
      },
      {
        "id": 6983,
        "kabkot_id": 508,
        "kecamatan": "Supnin"
      },
      {
        "id": 6984,
        "kabkot_id": 508,
        "kecamatan": "Teluk Mayalibit"
      },
      {
        "id": 6985,
        "kabkot_id": 508,
        "kecamatan": "Tiplol Mayalibit"
      },
      {
        "id": 6986,
        "kabkot_id": 508,
        "kecamatan": "Waigeo Barat"
      },
      {
        "id": 6987,
        "kabkot_id": 508,
        "kecamatan": "Waigeo Barat Kepulauan"
      },
      {
        "id": 6988,
        "kabkot_id": 508,
        "kecamatan": "Waigeo Selatan"
      },
      {
        "id": 6989,
        "kabkot_id": 508,
        "kecamatan": "Waigeo Timur"
      },
      {
        "id": 6990,
        "kabkot_id": 508,
        "kecamatan": "Waigeo Utara"
      },
      {
        "id": 6991,
        "kabkot_id": 508,
        "kecamatan": "Warwabomi"
      },
      {
        "id": 6992,
        "kabkot_id": 509,
        "kecamatan": "Aimas"
      },
      {
        "id": 6993,
        "kabkot_id": 509,
        "kecamatan": "Beraur"
      },
      {
        "id": 6994,
        "kabkot_id": 509,
        "kecamatan": "Klabot"
      },
      {
        "id": 6995,
        "kabkot_id": 509,
        "kecamatan": "Klamono"
      },
      {
        "id": 6996,
        "kabkot_id": 509,
        "kecamatan": "Klaso"
      },
      {
        "id": 6997,
        "kabkot_id": 509,
        "kecamatan": "Klawak"
      },
      {
        "id": 6998,
        "kabkot_id": 509,
        "kecamatan": "Klayili"
      },
      {
        "id": 6999,
        "kabkot_id": 509,
        "kecamatan": "Makbon"
      },
      {
        "id": 7000,
        "kabkot_id": 509,
        "kecamatan": "Mariat"
      },
      {
        "id": 7001,
        "kabkot_id": 509,
        "kecamatan": "Maudus"
      },
      {
        "id": 7002,
        "kabkot_id": 509,
        "kecamatan": "Mayamuk"
      },
      {
        "id": 7003,
        "kabkot_id": 509,
        "kecamatan": "Moisegen"
      },
      {
        "id": 7004,
        "kabkot_id": 509,
        "kecamatan": "Salawati"
      },
      {
        "id": 7005,
        "kabkot_id": 509,
        "kecamatan": "Salawati Selatan"
      },
      {
        "id": 7006,
        "kabkot_id": 509,
        "kecamatan": "Sayosa"
      },
      {
        "id": 7007,
        "kabkot_id": 509,
        "kecamatan": "Seget"
      },
      {
        "id": 7008,
        "kabkot_id": 509,
        "kecamatan": "Segun"
      },
      {
        "id": 7009,
        "kabkot_id": 510,
        "kecamatan": "Fokour"
      },
      {
        "id": 7010,
        "kabkot_id": 510,
        "kecamatan": "Inanwatan (Inawatan)"
      },
      {
        "id": 7011,
        "kabkot_id": 510,
        "kecamatan": "Kais (Matemani Kais)"
      },
      {
        "id": 7012,
        "kabkot_id": 510,
        "kecamatan": "Kokoda"
      },
      {
        "id": 7013,
        "kabkot_id": 510,
        "kecamatan": "Kokoda Utara"
      },
      {
        "id": 7014,
        "kabkot_id": 510,
        "kecamatan": "Konda"
      },
      {
        "id": 7015,
        "kabkot_id": 510,
        "kecamatan": "Matemani"
      },
      {
        "id": 7016,
        "kabkot_id": 510,
        "kecamatan": "Moswaren"
      },
      {
        "id": 7017,
        "kabkot_id": 510,
        "kecamatan": "Saifi"
      },
      {
        "id": 7018,
        "kabkot_id": 510,
        "kecamatan": "Sawiat"
      },
      {
        "id": 7019,
        "kabkot_id": 510,
        "kecamatan": "Seremuk"
      },
      {
        "id": 7020,
        "kabkot_id": 510,
        "kecamatan": "Teminabuan"
      },
      {
        "id": 7021,
        "kabkot_id": 510,
        "kecamatan": "Wayer"
      },
      {
        "id": 7022,
        "kabkot_id": 511,
        "kecamatan": "Abun"
      },
      {
        "id": 7023,
        "kabkot_id": 511,
        "kecamatan": "Amberbaken"
      },
      {
        "id": 7024,
        "kabkot_id": 511,
        "kecamatan": "Amberbaken Barat"
      },
      {
        "id": 7025,
        "kabkot_id": 511,
        "kecamatan": "Ases"
      },
      {
        "id": 7026,
        "kabkot_id": 511,
        "kecamatan": "Bamusbama"
      },
      {
        "id": 7027,
        "kabkot_id": 511,
        "kecamatan": "Bikar"
      },
      {
        "id": 7028,
        "kabkot_id": 511,
        "kecamatan": "Fef"
      },
      {
        "id": 7029,
        "kabkot_id": 511,
        "kecamatan": "Ireres"
      },
      {
        "id": 7030,
        "kabkot_id": 511,
        "kecamatan": "Kasi"
      },
      {
        "id": 7031,
        "kabkot_id": 511,
        "kecamatan": "Kebar"
      },
      {
        "id": 7032,
        "kabkot_id": 511,
        "kecamatan": "Kebar Selatan"
      },
      {
        "id": 7033,
        "kabkot_id": 511,
        "kecamatan": "Kebar Timur"
      },
      {
        "id": 7034,
        "kabkot_id": 511,
        "kecamatan": "Kwesefo"
      },
      {
        "id": 7035,
        "kabkot_id": 511,
        "kecamatan": "Kwoor"
      },
      {
        "id": 7036,
        "kabkot_id": 511,
        "kecamatan": "Manekar"
      },
      {
        "id": 7037,
        "kabkot_id": 511,
        "kecamatan": "Mawabuan"
      },
      {
        "id": 7038,
        "kabkot_id": 511,
        "kecamatan": "Miyah"
      },
      {
        "id": 7039,
        "kabkot_id": 511,
        "kecamatan": "Miyah Selatan"
      },
      {
        "id": 7040,
        "kabkot_id": 511,
        "kecamatan": "Moraid"
      },
      {
        "id": 7041,
        "kabkot_id": 511,
        "kecamatan": "Mpur"
      },
      {
        "id": 7042,
        "kabkot_id": 511,
        "kecamatan": "Mubrani"
      },
      {
        "id": 7043,
        "kabkot_id": 511,
        "kecamatan": "Sausapor"
      },
      {
        "id": 7044,
        "kabkot_id": 511,
        "kecamatan": "Selemkai"
      },
      {
        "id": 7045,
        "kabkot_id": 511,
        "kecamatan": "Senopi"
      },
      {
        "id": 7046,
        "kabkot_id": 511,
        "kecamatan": "Syujak"
      },
      {
        "id": 7047,
        "kabkot_id": 511,
        "kecamatan": "Tinggouw"
      },
      {
        "id": 7048,
        "kabkot_id": 511,
        "kecamatan": "Tobouw"
      },
      {
        "id": 7049,
        "kabkot_id": 511,
        "kecamatan": "Wilhem Roumbouts"
      },
      {
        "id": 7050,
        "kabkot_id": 511,
        "kecamatan": "Yembun"
      },
      {
        "id": 7051,
        "kabkot_id": 512,
        "kecamatan": "Aranday"
      },
      {
        "id": 7052,
        "kabkot_id": 512,
        "kecamatan": "Aroba"
      },
      {
        "id": 7053,
        "kabkot_id": 512,
        "kecamatan": "Babo"
      },
      {
        "id": 7054,
        "kabkot_id": 512,
        "kecamatan": "Bintuni"
      },
      {
        "id": 7055,
        "kabkot_id": 512,
        "kecamatan": "Biscoop"
      },
      {
        "id": 7056,
        "kabkot_id": 512,
        "kecamatan": "Dataran Beimes"
      },
      {
        "id": 7057,
        "kabkot_id": 512,
        "kecamatan": "Fafurwar (Irorutu)"
      },
      {
        "id": 7058,
        "kabkot_id": 512,
        "kecamatan": "Kaitaro"
      },
      {
        "id": 7059,
        "kabkot_id": 512,
        "kecamatan": "Kamundan"
      },
      {
        "id": 7060,
        "kabkot_id": 512,
        "kecamatan": "Kuri"
      },
      {
        "id": 7061,
        "kabkot_id": 512,
        "kecamatan": "Manimeri"
      },
      {
        "id": 7062,
        "kabkot_id": 512,
        "kecamatan": "Masyeta"
      },
      {
        "id": 7063,
        "kabkot_id": 512,
        "kecamatan": "Mayado"
      },
      {
        "id": 7064,
        "kabkot_id": 512,
        "kecamatan": "Merdey"
      },
      {
        "id": 7065,
        "kabkot_id": 512,
        "kecamatan": "Moskona Barat"
      },
      {
        "id": 7066,
        "kabkot_id": 512,
        "kecamatan": "Moskona Selatan"
      },
      {
        "id": 7067,
        "kabkot_id": 512,
        "kecamatan": "Moskona Timur"
      },
      {
        "id": 7068,
        "kabkot_id": 512,
        "kecamatan": "Moskona Utara"
      },
      {
        "id": 7069,
        "kabkot_id": 512,
        "kecamatan": "Sumuri (Simuri)"
      },
      {
        "id": 7070,
        "kabkot_id": 512,
        "kecamatan": "Tembuni"
      },
      {
        "id": 7071,
        "kabkot_id": 512,
        "kecamatan": "Tomu"
      },
      {
        "id": 7072,
        "kabkot_id": 512,
        "kecamatan": "Tuhiba"
      },
      {
        "id": 7073,
        "kabkot_id": 512,
        "kecamatan": "Wamesa (Idoor)"
      },
      {
        "id": 7074,
        "kabkot_id": 512,
        "kecamatan": "Weriagar"
      },
      {
        "id": 7075,
        "kabkot_id": 513,
        "kecamatan": "Kuri Wamesa"
      },
      {
        "id": 7076,
        "kabkot_id": 513,
        "kecamatan": "Naikere (Wasior Barat)"
      },
      {
        "id": 7077,
        "kabkot_id": 513,
        "kecamatan": "Nikiwar"
      },
      {
        "id": 7078,
        "kabkot_id": 513,
        "kecamatan": "Rasiei"
      },
      {
        "id": 7079,
        "kabkot_id": 513,
        "kecamatan": "Roon"
      },
      {
        "id": 7080,
        "kabkot_id": 513,
        "kecamatan": "Roswar"
      },
      {
        "id": 7081,
        "kabkot_id": 513,
        "kecamatan": "Rumberpon"
      },
      {
        "id": 7082,
        "kabkot_id": 513,
        "kecamatan": "Soug Jaya"
      },
      {
        "id": 7083,
        "kabkot_id": 513,
        "kecamatan": "Teluk Duairi (Wasior Utara)"
      },
      {
        "id": 7084,
        "kabkot_id": 513,
        "kecamatan": "Wamesa"
      },
      {
        "id": 7085,
        "kabkot_id": 513,
        "kecamatan": "Wasior"
      },
      {
        "id": 7086,
        "kabkot_id": 513,
        "kecamatan": "Windesi"
      },
      {
        "id": 7087,
        "kabkot_id": 513,
        "kecamatan": "Wondiboy (Wasior Selatan)"
      },
      {
        "id": 7088,
        "kabkot_id": 514,
        "kecamatan": "Klaurung"
      },
      {
        "id": 7089,
        "kabkot_id": 514,
        "kecamatan": "Maladum Mes"
      },
      {
        "id": 7090,
        "kabkot_id": 514,
        "kecamatan": "Malaimsimsa"
      },
      {
        "id": 7091,
        "kabkot_id": 514,
        "kecamatan": "Sorong"
      },
      {
        "id": 7092,
        "kabkot_id": 514,
        "kecamatan": "Sorong Barat"
      },
      {
        "id": 7093,
        "kabkot_id": 514,
        "kecamatan": "Sorong Kepulauan"
      },
      {
        "id": 7094,
        "kabkot_id": 514,
        "kecamatan": "Sorong Kota"
      },
      {
        "id": 7095,
        "kabkot_id": 514,
        "kecamatan": "Sorong Manoi"
      },
      {
        "id": 7096,
        "kabkot_id": 514,
        "kecamatan": "Sorong Timur"
      },
      {
        "id": 7097,
        "kabkot_id": 514,
        "kecamatan": "Sorong Utara"
      }
    ]
    
    let result = []

    list.forEach((data) => {
      data.createdAt = new Date()
      data.updatedAt = new Date()
      result.push(data)
    })
  
    await queryInterface.bulkInsert('Districts', result, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Districts', null, {});
  }
};
