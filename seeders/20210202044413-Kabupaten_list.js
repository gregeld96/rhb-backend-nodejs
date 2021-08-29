'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let list = [
      {
        "id": 1,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Barat",
        "ibukota": "Meulaboh",
        "k_bsni": "MBO"
      },
      {
        "id": 2,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Barat Daya",
        "ibukota": "Blangpidie",
        "k_bsni": "BPD"
      },
      {
        "id": 3,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Besar",
        "ibukota": "Jantho",
        "k_bsni": "JTH"
      },
      {
        "id": 4,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Jaya",
        "ibukota": "Calang",
        "k_bsni": "CAG"
      },
      {
        "id": 5,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Selatan",
        "ibukota": "Tapak Tuan",
        "k_bsni": "TTN"
      },
      {
        "id": 6,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Singkil",
        "ibukota": "Singkil",
        "k_bsni": "SKL"
      },
      {
        "id": 7,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Tamiang",
        "ibukota": "Karang Baru",
        "k_bsni": "KRB"
      },
      {
        "id": 8,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Tengah",
        "ibukota": "Takengon",
        "k_bsni": "TKN"
      },
      {
        "id": 9,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Tenggara",
        "ibukota": "Kutacane",
        "k_bsni": "KTN"
      },
      {
        "id": 10,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Timur",
        "ibukota": "Langsa",
        "k_bsni": "LGS"
      },
      {
        "id": 11,
        "provinsi_id": 1,
        "kabupaten_kota": "Aceh Utara",
        "ibukota": "Lhoksukon",
        "k_bsni": "LSK"
      },
      {
        "id": 12,
        "provinsi_id": 1,
        "kabupaten_kota": "Bener Meriah",
        "ibukota": "Simpang Tiga Redelong",
        "k_bsni": "STR"
      },
      {
        "id": 13,
        "provinsi_id": 1,
        "kabupaten_kota": "Bireuen",
        "ibukota": "Bireuen",
        "k_bsni": "BIR"
      },
      {
        "id": 14,
        "provinsi_id": 1,
        "kabupaten_kota": "Gayo Lues",
        "ibukota": "Blangkejeren",
        "k_bsni": "BKJ"
      },
      {
        "id": 15,
        "provinsi_id": 1,
        "kabupaten_kota": "Nagan Raya",
        "ibukota": "Suka Makmue",
        "k_bsni": "SKM"
      },
      {
        "id": 16,
        "provinsi_id": 1,
        "kabupaten_kota": "Pidie",
        "ibukota": "Sigli",
        "k_bsni": "SGI"
      },
      {
        "id": 17,
        "provinsi_id": 1,
        "kabupaten_kota": "Pidie Jaya",
        "ibukota": "Meureundu",
        "k_bsni": "MRN"
      },
      {
        "id": 18,
        "provinsi_id": 1,
        "kabupaten_kota": "Simeulue",
        "ibukota": "Sinabang",
        "k_bsni": "SNB"
      },
      {
        "id": 19,
        "provinsi_id": 1,
        "kabupaten_kota": "Kota Banda Aceh",
        "ibukota": "Banda Aceh",
        "k_bsni": "BNA"
      },
      {
        "id": 20,
        "provinsi_id": 1,
        "kabupaten_kota": "Kota Langsa",
        "ibukota": "Langsa",
        "k_bsni": "LGS"
      },
      {
        "id": 21,
        "provinsi_id": 1,
        "kabupaten_kota": "Kota Lhokseumawe",
        "ibukota": "Lhokseumawe",
        "k_bsni": "LSM"
      },
      {
        "id": 22,
        "provinsi_id": 1,
        "kabupaten_kota": "Kota Sabang",
        "ibukota": "Sabang",
        "k_bsni": "SAB"
      },
      {
        "id": 23,
        "provinsi_id": 1,
        "kabupaten_kota": "Kota Subulussalam",
        "ibukota": "Subulussalam",
        "k_bsni": "SUS"
      },
      {
        "id": 24,
        "provinsi_id": 2,
        "kabupaten_kota": "Asahan",
        "ibukota": "Kisaran",
        "k_bsni": "KIS"
      },
      {
        "id": 25,
        "provinsi_id": 2,
        "kabupaten_kota": "Batu Bara",
        "ibukota": "Lima Puluh",
        "k_bsni": "LMP"
      },
      {
        "id": 26,
        "provinsi_id": 2,
        "kabupaten_kota": "Dairi",
        "ibukota": "Sidikalang",
        "k_bsni": "SDK"
      },
      {
        "id": 27,
        "provinsi_id": 2,
        "kabupaten_kota": "Deli Serdang",
        "ibukota": "Lubuk Pakam",
        "k_bsni": "LBP"
      },
      {
        "id": 28,
        "provinsi_id": 2,
        "kabupaten_kota": "Humbang Hasundutan",
        "ibukota": "Dolok Sanggul",
        "k_bsni": "DLS"
      },
      {
        "id": 29,
        "provinsi_id": 2,
        "kabupaten_kota": "Karo",
        "ibukota": "Kabanjahe",
        "k_bsni": "KBJ"
      },
      {
        "id": 30,
        "provinsi_id": 2,
        "kabupaten_kota": "Labuhanbatu",
        "ibukota": "Rantau Prapat",
        "k_bsni": "RAP"
      },
      {
        "id": 31,
        "provinsi_id": 2,
        "kabupaten_kota": "Labuhanbatu Selatan",
        "ibukota": "Kota Pinang",
        "k_bsni": "KPI"
      },
      {
        "id": 32,
        "provinsi_id": 2,
        "kabupaten_kota": "Labuhanbatu Utara",
        "ibukota": "Aek Kanopan",
        "k_bsni": "AKK"
      },
      {
        "id": 33,
        "provinsi_id": 2,
        "kabupaten_kota": "Langkat",
        "ibukota": "Stabat",
        "k_bsni": "STB"
      },
      {
        "id": 34,
        "provinsi_id": 2,
        "kabupaten_kota": "Mandailing Natal",
        "ibukota": "Panyabungan",
        "k_bsni": "PYB"
      },
      {
        "id": 35,
        "provinsi_id": 2,
        "kabupaten_kota": "Nias",
        "ibukota": "Gunungsitoli",
        "k_bsni": "GST"
      },
      {
        "id": 36,
        "provinsi_id": 2,
        "kabupaten_kota": "Nias Barat",
        "ibukota": "Lahomi",
        "k_bsni": "LHM"
      },
      {
        "id": 37,
        "provinsi_id": 2,
        "kabupaten_kota": "Nias Selatan",
        "ibukota": "Teluk Dalam",
        "k_bsni": "TLD"
      },
      {
        "id": 38,
        "provinsi_id": 2,
        "kabupaten_kota": "Nias Utara",
        "ibukota": "Lotu",
        "k_bsni": "LTU"
      },
      {
        "id": 39,
        "provinsi_id": 2,
        "kabupaten_kota": "Padang Lawas",
        "ibukota": "Sibuhuan",
        "k_bsni": "SBH"
      },
      {
        "id": 40,
        "provinsi_id": 2,
        "kabupaten_kota": "Padang Lawas Utara",
        "ibukota": "Gunung Tua",
        "k_bsni": "GNT"
      },
      {
        "id": 41,
        "provinsi_id": 2,
        "kabupaten_kota": "Pakpak Bharat",
        "ibukota": "Salak",
        "k_bsni": "SAL"
      },
      {
        "id": 42,
        "provinsi_id": 2,
        "kabupaten_kota": "Samosir",
        "ibukota": "Pangururan",
        "k_bsni": "PRR"
      },
      {
        "id": 43,
        "provinsi_id": 2,
        "kabupaten_kota": "Serdang Bedagai",
        "ibukota": "Sei Rampah",
        "k_bsni": "SRH"
      },
      {
        "id": 44,
        "provinsi_id": 2,
        "kabupaten_kota": "Simalungun",
        "ibukota": "Pematang Siantar",
        "k_bsni": "PMS"
      },
      {
        "id": 45,
        "provinsi_id": 2,
        "kabupaten_kota": "Tapanuli Selatan",
        "ibukota": "Padang Sidempuan",
        "k_bsni": "PSP"
      },
      {
        "id": 46,
        "provinsi_id": 2,
        "kabupaten_kota": "Tapanuli Tengah",
        "ibukota": "Sibolga",
        "k_bsni": "SBG"
      },
      {
        "id": 47,
        "provinsi_id": 2,
        "kabupaten_kota": "Tapanuli Utara",
        "ibukota": "Tarutung",
        "k_bsni": "TRT"
      },
      {
        "id": 48,
        "provinsi_id": 2,
        "kabupaten_kota": "Toba Samosir",
        "ibukota": "Balige",
        "k_bsni": "BLG"
      },
      {
        "id": 49,
        "provinsi_id": 2,
        "kabupaten_kota": "Kota Binjai",
        "ibukota": "Binjai",
        "k_bsni": "BNJ"
      },
      {
        "id": 50,
        "provinsi_id": 2,
        "kabupaten_kota": "Kota Gunungsitoli",
        "ibukota": "Gunungsitoli",
        "k_bsni": "GST"
      },
      {
        "id": 51,
        "provinsi_id": 2,
        "kabupaten_kota": "Kota Medan",
        "ibukota": "Medan",
        "k_bsni": "MDN"
      },
      {
        "id": 52,
        "provinsi_id": 2,
        "kabupaten_kota": "Kota Padang Sidempuan",
        "ibukota": "Padang Sidempuan",
        "k_bsni": "PSP"
      },
      {
        "id": 53,
        "provinsi_id": 2,
        "kabupaten_kota": "Kota Pematangsiantar",
        "ibukota": "Pematangsiantar",
        "k_bsni": "PMS"
      },
      {
        "id": 54,
        "provinsi_id": 2,
        "kabupaten_kota": "Kota Sibolga",
        "ibukota": "Sibolga",
        "k_bsni": "SBG"
      },
      {
        "id": 55,
        "provinsi_id": 2,
        "kabupaten_kota": "Kota Tanjung Balai",
        "ibukota": "Tanjung Balai",
        "k_bsni": "TJB"
      },
      {
        "id": 56,
        "provinsi_id": 2,
        "kabupaten_kota": "Kota Tebing Tinggi",
        "ibukota": "Tebing Tinggi",
        "k_bsni": "TBT"
      },
      {
        "id": 57,
        "provinsi_id": 3,
        "kabupaten_kota": "Agam",
        "ibukota": "Lubuk Basung",
        "k_bsni": "LBB"
      },
      {
        "id": 58,
        "provinsi_id": 3,
        "kabupaten_kota": "Dharmasraya",
        "ibukota": "Pulau Punjung",
        "k_bsni": "PLJ"
      },
      {
        "id": 59,
        "provinsi_id": 3,
        "kabupaten_kota": "Kepulauan Mentawai",
        "ibukota": "Tuapejat",
        "k_bsni": "TPT"
      },
      {
        "id": 60,
        "provinsi_id": 3,
        "kabupaten_kota": "Lima Puluh Kota",
        "ibukota": "Sarilamak",
        "k_bsni": "SRK"
      },
      {
        "id": 61,
        "provinsi_id": 3,
        "kabupaten_kota": "Padang Pariaman",
        "ibukota": "Nagari Parit Malintang",
        "k_bsni": "NPM"
      },
      {
        "id": 62,
        "provinsi_id": 3,
        "kabupaten_kota": "Pasaman",
        "ibukota": "Lubuk Sikaping",
        "k_bsni": "LBS"
      },
      {
        "id": 63,
        "provinsi_id": 3,
        "kabupaten_kota": "Pasaman Barat",
        "ibukota": "Simpang Empat",
        "k_bsni": "SPE"
      },
      {
        "id": 64,
        "provinsi_id": 3,
        "kabupaten_kota": "Pesisir Selatan",
        "ibukota": "Painan",
        "k_bsni": "PNN"
      },
      {
        "id": 65,
        "provinsi_id": 3,
        "kabupaten_kota": "Sijunjung (Sawah Lunto Sijunjung)",
        "ibukota": "Muaro Sijunjung",
        "k_bsni": "MRJ"
      },
      {
        "id": 66,
        "provinsi_id": 3,
        "kabupaten_kota": "Solok",
        "ibukota": "Arosuka",
        "k_bsni": "ARS"
      },
      {
        "id": 67,
        "provinsi_id": 3,
        "kabupaten_kota": "Solok Selatan",
        "ibukota": "Padang Aro",
        "k_bsni": "PDA"
      },
      {
        "id": 68,
        "provinsi_id": 3,
        "kabupaten_kota": "Tanah Datar",
        "ibukota": "Batusangkar",
        "k_bsni": "BSK"
      },
      {
        "id": 69,
        "provinsi_id": 3,
        "kabupaten_kota": "Kota Bukittinggi",
        "ibukota": "Bukittinggi",
        "k_bsni": "BKT"
      },
      {
        "id": 70,
        "provinsi_id": 3,
        "kabupaten_kota": "Kota Padang",
        "ibukota": "Padang",
        "k_bsni": "PAD"
      },
      {
        "id": 71,
        "provinsi_id": 3,
        "kabupaten_kota": "Kota Padang Panjang",
        "ibukota": "Padang Panjang",
        "k_bsni": "PDP"
      },
      {
        "id": 72,
        "provinsi_id": 3,
        "kabupaten_kota": "Kota Pariaman",
        "ibukota": "Pariaman",
        "k_bsni": "PMN"
      },
      {
        "id": 73,
        "provinsi_id": 3,
        "kabupaten_kota": "Kota Payakumbuh",
        "ibukota": "Payakumbuh",
        "k_bsni": "PYH"
      },
      {
        "id": 74,
        "provinsi_id": 3,
        "kabupaten_kota": "Kota Sawahlunto",
        "ibukota": "Sawahlunto",
        "k_bsni": "SWL"
      },
      {
        "id": 75,
        "provinsi_id": 3,
        "kabupaten_kota": "Kota Solok",
        "ibukota": "Solok",
        "k_bsni": "SLK"
      },
      {
        "id": 76,
        "provinsi_id": 4,
        "kabupaten_kota": "Bengkalis",
        "ibukota": "Bengkalis",
        "k_bsni": "BLS"
      },
      {
        "id": 77,
        "provinsi_id": 4,
        "kabupaten_kota": "Indragiri Hilir",
        "ibukota": "Tembilahan",
        "k_bsni": "TBH"
      },
      {
        "id": 78,
        "provinsi_id": 4,
        "kabupaten_kota": "Indragiri Hulu",
        "ibukota": "Rengat",
        "k_bsni": "RGT"
      },
      {
        "id": 79,
        "provinsi_id": 4,
        "kabupaten_kota": "Kampar",
        "ibukota": "Bangkinang",
        "k_bsni": "BKN"
      },
      {
        "id": 80,
        "provinsi_id": 4,
        "kabupaten_kota": "Kepulauan Meranti",
        "ibukota": "Tebing Tinggi",
        "k_bsni": "TTG"
      },
      {
        "id": 81,
        "provinsi_id": 4,
        "kabupaten_kota": "Kuantan Singingi",
        "ibukota": "Teluk Kuantan",
        "k_bsni": "TLK"
      },
      {
        "id": 82,
        "provinsi_id": 4,
        "kabupaten_kota": "Pelalawan",
        "ibukota": "Pangkalan Kerinci",
        "k_bsni": "PKK"
      },
      {
        "id": 83,
        "provinsi_id": 4,
        "kabupaten_kota": "Rokan Hilir",
        "ibukota": "Ujung Tanjung",
        "k_bsni": "UJT"
      },
      {
        "id": 84,
        "provinsi_id": 4,
        "kabupaten_kota": "Rokan Hulu",
        "ibukota": "Pasir Pengarairan",
        "k_bsni": "PRP"
      },
      {
        "id": 85,
        "provinsi_id": 4,
        "kabupaten_kota": "Siak",
        "ibukota": "Siak Sriindrapura",
        "k_bsni": "SAK"
      },
      {
        "id": 86,
        "provinsi_id": 4,
        "kabupaten_kota": "Kota Dumai",
        "ibukota": "Dumai",
        "k_bsni": "DUM"
      },
      {
        "id": 87,
        "provinsi_id": 4,
        "kabupaten_kota": "Kota Pekanbaru",
        "ibukota": "Pekanbaru",
        "k_bsni": "PBR"
      },
      {
        "id": 88,
        "provinsi_id": 5,
        "kabupaten_kota": "Batanghari",
        "ibukota": "Muara Bulian",
        "k_bsni": "MBN"
      },
      {
        "id": 89,
        "provinsi_id": 5,
        "kabupaten_kota": "Bungo",
        "ibukota": "Muara Bungo",
        "k_bsni": "MRB"
      },
      {
        "id": 90,
        "provinsi_id": 5,
        "kabupaten_kota": "Kerinci",
        "ibukota": "Sungai Penuh",
        "k_bsni": "SPN"
      },
      {
        "id": 91,
        "provinsi_id": 5,
        "kabupaten_kota": "Merangin",
        "ibukota": "Bangko",
        "k_bsni": "BKO"
      },
      {
        "id": 92,
        "provinsi_id": 5,
        "kabupaten_kota": "Muaro Jambi",
        "ibukota": "Sengeti",
        "k_bsni": "SNT"
      },
      {
        "id": 93,
        "provinsi_id": 5,
        "kabupaten_kota": "Sarolangun",
        "ibukota": "Sarolangun",
        "k_bsni": "SRL"
      },
      {
        "id": 94,
        "provinsi_id": 5,
        "kabupaten_kota": "Tanjung Jabung Barat",
        "ibukota": "Kuala Tungkal",
        "k_bsni": "KLT"
      },
      {
        "id": 95,
        "provinsi_id": 5,
        "kabupaten_kota": "Tanjung Jabung Timur",
        "ibukota": "Muara Sabak",
        "k_bsni": "MSK"
      },
      {
        "id": 96,
        "provinsi_id": 5,
        "kabupaten_kota": "Tebo",
        "ibukota": "Muara Tebo",
        "k_bsni": "MRT"
      },
      {
        "id": 97,
        "provinsi_id": 5,
        "kabupaten_kota": "Kota Jambi",
        "ibukota": "Jambi",
        "k_bsni": "JMB"
      },
      {
        "id": 98,
        "provinsi_id": 5,
        "kabupaten_kota": "Kota Sungai Penuh",
        "ibukota": "Sungai Penuh",
        "k_bsni": "SPN"
      },
      {
        "id": 99,
        "provinsi_id": 6,
        "kabupaten_kota": "Banyuasin",
        "ibukota": "Pangkalan Balai",
        "k_bsni": "PKB"
      },
      {
        "id": 100,
        "provinsi_id": 6,
        "kabupaten_kota": "Empat Lawang",
        "ibukota": "Tebing Tinggi",
        "k_bsni": "TBG"
      },
      {
        "id": 101,
        "provinsi_id": 6,
        "kabupaten_kota": "Lahat",
        "ibukota": "Lahat",
        "k_bsni": "LHT"
      },
      {
        "id": 102,
        "provinsi_id": 6,
        "kabupaten_kota": "Muara Enim",
        "ibukota": "Muara Enim",
        "k_bsni": "MRE"
      },
      {
        "id": 103,
        "provinsi_id": 6,
        "kabupaten_kota": "Musi Banyuasin",
        "ibukota": "Sekayu",
        "k_bsni": "SKY"
      },
      {
        "id": 104,
        "provinsi_id": 6,
        "kabupaten_kota": "Musi Rawas",
        "ibukota": "Muarabeliti",
        "k_bsni": "MBL"
      },
      {
        "id": 105,
        "provinsi_id": 6,
        "kabupaten_kota": "Musi Rawas Utara",
        "ibukota": "Rupit",
        "k_bsni": "RPT"
      },
      {
        "id": 106,
        "provinsi_id": 6,
        "kabupaten_kota": "Ogan Ilir",
        "ibukota": "Indralaya",
        "k_bsni": "IDL"
      },
      {
        "id": 107,
        "provinsi_id": 6,
        "kabupaten_kota": "Ogan Komering Ilir",
        "ibukota": "Kayu Agung",
        "k_bsni": "KAG"
      },
      {
        "id": 108,
        "provinsi_id": 6,
        "kabupaten_kota": "Ogan Komering Ulu",
        "ibukota": "Baturaja",
        "k_bsni": "BTA"
      },
      {
        "id": 109,
        "provinsi_id": 6,
        "kabupaten_kota": "Ogan Komering Ulu Selatan (Oku Selatan)",
        "ibukota": "Muaradua",
        "k_bsni": "MRD"
      },
      {
        "id": 110,
        "provinsi_id": 6,
        "kabupaten_kota": "Ogan Komering Ulu Timur (Oku Timur)",
        "ibukota": "Martapura",
        "k_bsni": "MPR"
      },
      {
        "id": 111,
        "provinsi_id": 6,
        "kabupaten_kota": "Penukal Abab Lematang Ilir",
        "ibukota": "Talang Ubi",
        "k_bsni": "TLB"
      },
      {
        "id": 112,
        "provinsi_id": 6,
        "kabupaten_kota": "Kota Lubuk Linggau",
        "ibukota": "Lubuk Linggau",
        "k_bsni": "LLG"
      },
      {
        "id": 113,
        "provinsi_id": 6,
        "kabupaten_kota": "Kota Pagar Alam",
        "ibukota": "Pagar Alam",
        "k_bsni": "PGA"
      },
      {
        "id": 114,
        "provinsi_id": 6,
        "kabupaten_kota": "Kota Palembang",
        "ibukota": "Pelembang",
        "k_bsni": "PLG"
      },
      {
        "id": 115,
        "provinsi_id": 6,
        "kabupaten_kota": "Kota Prabumulih",
        "ibukota": "Prabumulih",
        "k_bsni": "PBM"
      },
      {
        "id": 116,
        "provinsi_id": 7,
        "kabupaten_kota": "Bengkulu Selatan",
        "ibukota": "Manna",
        "k_bsni": "MNA"
      },
      {
        "id": 117,
        "provinsi_id": 7,
        "kabupaten_kota": "Bengkulu Tengah",
        "ibukota": "Karang Tinggi",
        "k_bsni": "KRT"
      },
      {
        "id": 118,
        "provinsi_id": 7,
        "kabupaten_kota": "Bengkulu Utara",
        "ibukota": "Arga Makmur",
        "k_bsni": "AGM"
      },
      {
        "id": 119,
        "provinsi_id": 7,
        "kabupaten_kota": "Kaur",
        "ibukota": "Bintuhan",
        "k_bsni": "BHN"
      },
      {
        "id": 120,
        "provinsi_id": 7,
        "kabupaten_kota": "Kepahiang",
        "ibukota": "Kepahiang",
        "k_bsni": "KPH"
      },
      {
        "id": 121,
        "provinsi_id": 7,
        "kabupaten_kota": "Lebong",
        "ibukota": "Tubei",
        "k_bsni": "TUB"
      },
      {
        "id": 122,
        "provinsi_id": 7,
        "kabupaten_kota": "Muko Muko",
        "ibukota": "Mukomuko",
        "k_bsni": "MKM"
      },
      {
        "id": 123,
        "provinsi_id": 7,
        "kabupaten_kota": "Rejang Lebong",
        "ibukota": "Curup",
        "k_bsni": "CRP"
      },
      {
        "id": 124,
        "provinsi_id": 7,
        "kabupaten_kota": "Seluma",
        "ibukota": "Tais",
        "k_bsni": "TAS"
      },
      {
        "id": 125,
        "provinsi_id": 7,
        "kabupaten_kota": "Kota Bengkulu",
        "ibukota": "Bengkulu",
        "k_bsni": "BGL"
      },
      {
        "id": 126,
        "provinsi_id": 8,
        "kabupaten_kota": "Lampung Barat",
        "ibukota": "Liwa",
        "k_bsni": "LIW"
      },
      {
        "id": 127,
        "provinsi_id": 8,
        "kabupaten_kota": "Lampung Selatan",
        "ibukota": "Kalianda",
        "k_bsni": "KLA"
      },
      {
        "id": 128,
        "provinsi_id": 8,
        "kabupaten_kota": "Lampung Tengah",
        "ibukota": "Gunung Sugih",
        "k_bsni": "GNS"
      },
      {
        "id": 129,
        "provinsi_id": 8,
        "kabupaten_kota": "Lampung Timur",
        "ibukota": "Sukadana",
        "k_bsni": "SDN"
      },
      {
        "id": 130,
        "provinsi_id": 8,
        "kabupaten_kota": "Lampung Utara",
        "ibukota": "Kotabumi",
        "k_bsni": "KTB"
      },
      {
        "id": 131,
        "provinsi_id": 8,
        "kabupaten_kota": "Mesuji",
        "ibukota": "Mesuji",
        "k_bsni": "MSJ"
      },
      {
        "id": 132,
        "provinsi_id": 8,
        "kabupaten_kota": "Pesawaran",
        "ibukota": "Gedong Tataan",
        "k_bsni": "GDT"
      },
      {
        "id": 133,
        "provinsi_id": 8,
        "kabupaten_kota": "Pesisir Barat",
        "ibukota": "Krui",
        "k_bsni": "KRU"
      },
      {
        "id": 134,
        "provinsi_id": 8,
        "kabupaten_kota": "Pringsewu",
        "ibukota": "Pringsewu",
        "k_bsni": "PRW"
      },
      {
        "id": 135,
        "provinsi_id": 8,
        "kabupaten_kota": "Tanggamus",
        "ibukota": "Kota Agung",
        "k_bsni": "KOT"
      },
      {
        "id": 136,
        "provinsi_id": 8,
        "kabupaten_kota": "Tulang Bawang",
        "ibukota": "Menggala",
        "k_bsni": "MGL"
      },
      {
        "id": 137,
        "provinsi_id": 8,
        "kabupaten_kota": "Tulang Bawang Barat",
        "ibukota": "Tulang Bawang Tengah",
        "k_bsni": "TWG"
      },
      {
        "id": 138,
        "provinsi_id": 8,
        "kabupaten_kota": "Way Kanan",
        "ibukota": "Blambangan Umpu",
        "k_bsni": "BBU"
      },
      {
        "id": 139,
        "provinsi_id": 8,
        "kabupaten_kota": "Kota Bandar Lampung",
        "ibukota": "Bandar Lampung",
        "k_bsni": "BDL"
      },
      {
        "id": 140,
        "provinsi_id": 8,
        "kabupaten_kota": "Kota Metro",
        "ibukota": "Metro",
        "k_bsni": "MET"
      },
      {
        "id": 141,
        "provinsi_id": 9,
        "kabupaten_kota": "Bangka",
        "ibukota": "Sungai Liat",
        "k_bsni": "SGL"
      },
      {
        "id": 142,
        "provinsi_id": 9,
        "kabupaten_kota": "Bangka Barat",
        "ibukota": "Mentok",
        "k_bsni": "MTK"
      },
      {
        "id": 143,
        "provinsi_id": 9,
        "kabupaten_kota": "Bangka Selatan",
        "ibukota": "Toboali",
        "k_bsni": "TBL"
      },
      {
        "id": 144,
        "provinsi_id": 9,
        "kabupaten_kota": "Bangka Tengah",
        "ibukota": "Koba",
        "k_bsni": "KBA"
      },
      {
        "id": 145,
        "provinsi_id": 9,
        "kabupaten_kota": "Belitung",
        "ibukota": "Tanjung Pandan",
        "k_bsni": "TDN"
      },
      {
        "id": 146,
        "provinsi_id": 9,
        "kabupaten_kota": "Belitung Timur",
        "ibukota": "Manggar",
        "k_bsni": "MGR"
      },
      {
        "id": 147,
        "provinsi_id": 9,
        "kabupaten_kota": "Kota Pangkal Pinang",
        "ibukota": "Pangkal Pinang",
        "k_bsni": "PGP"
      },
      {
        "id": 148,
        "provinsi_id": 10,
        "kabupaten_kota": "Bintan",
        "ibukota": "Bandar Seri Bentan",
        "k_bsni": "BSB"
      },
      {
        "id": 149,
        "provinsi_id": 10,
        "kabupaten_kota": "Karimun",
        "ibukota": "Tanjung Balai Karimun",
        "k_bsni": "TBK"
      },
      {
        "id": 150,
        "provinsi_id": 10,
        "kabupaten_kota": "Kepulauan Anambas",
        "ibukota": "Tarempa",
        "k_bsni": "TRP"
      },
      {
        "id": 151,
        "provinsi_id": 10,
        "kabupaten_kota": "Lingga",
        "ibukota": "Daik Lingga",
        "k_bsni": "DKL"
      },
      {
        "id": 152,
        "provinsi_id": 10,
        "kabupaten_kota": "Natuna",
        "ibukota": "Ranai",
        "k_bsni": "RAN"
      },
      {
        "id": 153,
        "provinsi_id": 10,
        "kabupaten_kota": "Kota Batam",
        "ibukota": "Batam",
        "k_bsni": "BTM"
      },
      {
        "id": 154,
        "provinsi_id": 10,
        "kabupaten_kota": "Kota Tanjung Pinang",
        "ibukota": "Tanjung Pinang",
        "k_bsni": "TPG"
      },
      {
        "id": 155,
        "provinsi_id": 11,
        "kabupaten_kota": "Kepulauan Seribu",
        "ibukota": "Kepulauan Seribu Utara",
        "k_bsni": "KSU"
      },
      {
        "id": 156,
        "provinsi_id": 11,
        "kabupaten_kota": "Jakarta Barat",
        "ibukota": "Grogol Petamburan",
        "k_bsni": "GGP"
      },
      {
        "id": 157,
        "provinsi_id": 11,
        "kabupaten_kota": "Jakarta Pusat",
        "ibukota": "Tanah Abang",
        "k_bsni": "TNA"
      },
      {
        "id": 158,
        "provinsi_id": 11,
        "kabupaten_kota": "Jakarta Selatan",
        "ibukota": "Kebayoran Baru",
        "k_bsni": "KYB"
      },
      {
        "id": 159,
        "provinsi_id": 11,
        "kabupaten_kota": "Jakarta Timur",
        "ibukota": "Cakung",
        "k_bsni": "CKG"
      },
      {
        "id": 160,
        "provinsi_id": 11,
        "kabupaten_kota": "Jakarta Utara",
        "ibukota": "Tanjung Priok",
        "k_bsni": "TJP"
      },
      {
        "id": 161,
        "provinsi_id": 12,
        "kabupaten_kota": "Bandung",
        "ibukota": "Soreang",
        "k_bsni": "SOR"
      },
      {
        "id": 162,
        "provinsi_id": 12,
        "kabupaten_kota": "Bandung Barat",
        "ibukota": "Ngamprah",
        "k_bsni": "NPH"
      },
      {
        "id": 163,
        "provinsi_id": 12,
        "kabupaten_kota": "Bekasi",
        "ibukota": "Cikarang",
        "k_bsni": "CKR"
      },
      {
        "id": 164,
        "provinsi_id": 12,
        "kabupaten_kota": "Bogor",
        "ibukota": "Cibinong",
        "k_bsni": "CBI"
      },
      {
        "id": 165,
        "provinsi_id": 12,
        "kabupaten_kota": "Ciamis",
        "ibukota": "Ciamis",
        "k_bsni": "CMS"
      },
      {
        "id": 166,
        "provinsi_id": 12,
        "kabupaten_kota": "Cianjur",
        "ibukota": "Cianjur",
        "k_bsni": "CJR"
      },
      {
        "id": 167,
        "provinsi_id": 12,
        "kabupaten_kota": "Cirebon",
        "ibukota": "Sumber",
        "k_bsni": "SBR"
      },
      {
        "id": 168,
        "provinsi_id": 12,
        "kabupaten_kota": "Garut",
        "ibukota": "Garut",
        "k_bsni": "GRT"
      },
      {
        "id": 169,
        "provinsi_id": 12,
        "kabupaten_kota": "Indramayu",
        "ibukota": "Indramayu",
        "k_bsni": "IDM"
      },
      {
        "id": 170,
        "provinsi_id": 12,
        "kabupaten_kota": "Karawang",
        "ibukota": "Karawang",
        "k_bsni": "KWG"
      },
      {
        "id": 171,
        "provinsi_id": 12,
        "kabupaten_kota": "Kuningan",
        "ibukota": "Kuningan",
        "k_bsni": "KNG"
      },
      {
        "id": 172,
        "provinsi_id": 12,
        "kabupaten_kota": "Majalengka",
        "ibukota": "Majalengka",
        "k_bsni": "MJL"
      },
      {
        "id": 173,
        "provinsi_id": 12,
        "kabupaten_kota": "Pangandaran",
        "ibukota": "Parigi",
        "k_bsni": "PAG"
      },
      {
        "id": 174,
        "provinsi_id": 12,
        "kabupaten_kota": "Purwakarta",
        "ibukota": "Purwakarta",
        "k_bsni": "PWK"
      },
      {
        "id": 175,
        "provinsi_id": 12,
        "kabupaten_kota": "Subang",
        "ibukota": "Subang",
        "k_bsni": "SNG"
      },
      {
        "id": 176,
        "provinsi_id": 12,
        "kabupaten_kota": "Sukabumi",
        "ibukota": "Sukabumi",
        "k_bsni": "SBM"
      },
      {
        "id": 177,
        "provinsi_id": 12,
        "kabupaten_kota": "Sumedang",
        "ibukota": "Sumedang",
        "k_bsni": "SMD"
      },
      {
        "id": 178,
        "provinsi_id": 12,
        "kabupaten_kota": "Tasikmalaya",
        "ibukota": "Singaparna",
        "k_bsni": "SPA"
      },
      {
        "id": 179,
        "provinsi_id": 12,
        "kabupaten_kota": "Kota Bandung",
        "ibukota": "Bandung",
        "k_bsni": "BDG"
      },
      {
        "id": 180,
        "provinsi_id": 12,
        "kabupaten_kota": "Kota Banjar",
        "ibukota": "Banjar",
        "k_bsni": "BJR"
      },
      {
        "id": 181,
        "provinsi_id": 12,
        "kabupaten_kota": "Kota Bekasi",
        "ibukota": "Bekasi",
        "k_bsni": "BKS"
      },
      {
        "id": 182,
        "provinsi_id": 12,
        "kabupaten_kota": "Kota Bogor",
        "ibukota": "Bogor",
        "k_bsni": "BGR"
      },
      {
        "id": 183,
        "provinsi_id": 12,
        "kabupaten_kota": "Kota Cimahi",
        "ibukota": "Cimahi",
        "k_bsni": "CMH"
      },
      {
        "id": 184,
        "provinsi_id": 12,
        "kabupaten_kota": "Kota Cirebon",
        "ibukota": "Cirebon",
        "k_bsni": "CBN"
      },
      {
        "id": 185,
        "provinsi_id": 12,
        "kabupaten_kota": "Kota Depok",
        "ibukota": "Depok",
        "k_bsni": "DPK"
      },
      {
        "id": 186,
        "provinsi_id": 12,
        "kabupaten_kota": "Kota Sukabumi",
        "ibukota": "Sukabumi",
        "k_bsni": "SKB"
      },
      {
        "id": 187,
        "provinsi_id": 12,
        "kabupaten_kota": "Kota Tasikmalaya",
        "ibukota": "Tasikmalaya",
        "k_bsni": "TSM"
      },
      {
        "id": 188,
        "provinsi_id": 13,
        "kabupaten_kota": "Banjarnegara",
        "ibukota": "Banjarnegara",
        "k_bsni": "BNR"
      },
      {
        "id": 189,
        "provinsi_id": 13,
        "kabupaten_kota": "Banyumas",
        "ibukota": "Purwokerto",
        "k_bsni": "PWT"
      },
      {
        "id": 190,
        "provinsi_id": 13,
        "kabupaten_kota": "Batang",
        "ibukota": "Batang",
        "k_bsni": "BTG"
      },
      {
        "id": 191,
        "provinsi_id": 13,
        "kabupaten_kota": "Blora",
        "ibukota": "Blora",
        "k_bsni": "BLA"
      },
      {
        "id": 192,
        "provinsi_id": 13,
        "kabupaten_kota": "Boyolali",
        "ibukota": "Boyolali",
        "k_bsni": "BYL"
      },
      {
        "id": 193,
        "provinsi_id": 13,
        "kabupaten_kota": "Brebes",
        "ibukota": "Brebes",
        "k_bsni": "BBS"
      },
      {
        "id": 194,
        "provinsi_id": 13,
        "kabupaten_kota": "Cilacap",
        "ibukota": "Cilacap",
        "k_bsni": "CLP"
      },
      {
        "id": 195,
        "provinsi_id": 13,
        "kabupaten_kota": "Demak",
        "ibukota": "Demak",
        "k_bsni": "DMK"
      },
      {
        "id": 196,
        "provinsi_id": 13,
        "kabupaten_kota": "Grobogan",
        "ibukota": "Purwodadi",
        "k_bsni": "PWD"
      },
      {
        "id": 197,
        "provinsi_id": 13,
        "kabupaten_kota": "Jepara",
        "ibukota": "Jepara",
        "k_bsni": "JPA"
      },
      {
        "id": 198,
        "provinsi_id": 13,
        "kabupaten_kota": "Karanganyar",
        "ibukota": "Karanganyar",
        "k_bsni": "KRG"
      },
      {
        "id": 199,
        "provinsi_id": 13,
        "kabupaten_kota": "Kebumen",
        "ibukota": "Kebumen",
        "k_bsni": "KBM"
      },
      {
        "id": 200,
        "provinsi_id": 13,
        "kabupaten_kota": "Kendal",
        "ibukota": "Kendal",
        "k_bsni": "KDL"
      },
      {
        "id": 201,
        "provinsi_id": 13,
        "kabupaten_kota": "Klaten",
        "ibukota": "Klaten",
        "k_bsni": "KLN"
      },
      {
        "id": 202,
        "provinsi_id": 13,
        "kabupaten_kota": "Kudus",
        "ibukota": "Kudus",
        "k_bsni": "KDS"
      },
      {
        "id": 203,
        "provinsi_id": 13,
        "kabupaten_kota": "Magelang",
        "ibukota": "Mungkid",
        "k_bsni": "MKD"
      },
      {
        "id": 204,
        "provinsi_id": 13,
        "kabupaten_kota": "Pati",
        "ibukota": "Pati",
        "k_bsni": "PTI"
      },
      {
        "id": 205,
        "provinsi_id": 13,
        "kabupaten_kota": "Pekalongan",
        "ibukota": "Kajen",
        "k_bsni": "KJN"
      },
      {
        "id": 206,
        "provinsi_id": 13,
        "kabupaten_kota": "Pemalang",
        "ibukota": "Pemalang",
        "k_bsni": "PML"
      },
      {
        "id": 207,
        "provinsi_id": 13,
        "kabupaten_kota": "Purbalingga",
        "ibukota": "Purbalingga",
        "k_bsni": "PBG"
      },
      {
        "id": 208,
        "provinsi_id": 13,
        "kabupaten_kota": "Purworejo",
        "ibukota": "Purworejo",
        "k_bsni": "PWR"
      },
      {
        "id": 209,
        "provinsi_id": 13,
        "kabupaten_kota": "Rembang",
        "ibukota": "Rembang",
        "k_bsni": "RBG"
      },
      {
        "id": 210,
        "provinsi_id": 13,
        "kabupaten_kota": "Semarang",
        "ibukota": "Ungaran",
        "k_bsni": "UNR"
      },
      {
        "id": 211,
        "provinsi_id": 13,
        "kabupaten_kota": "Sragen",
        "ibukota": "Sragen",
        "k_bsni": "SGN"
      },
      {
        "id": 212,
        "provinsi_id": 13,
        "kabupaten_kota": "Sukoharjo",
        "ibukota": "Sukoharjo",
        "k_bsni": "SKH"
      },
      {
        "id": 213,
        "provinsi_id": 13,
        "kabupaten_kota": "Tegal",
        "ibukota": "Slawi",
        "k_bsni": "SLW"
      },
      {
        "id": 214,
        "provinsi_id": 13,
        "kabupaten_kota": "Temanggung",
        "ibukota": "Temanggung",
        "k_bsni": "TMG"
      },
      {
        "id": 215,
        "provinsi_id": 13,
        "kabupaten_kota": "Wonogiri",
        "ibukota": "Wonogiri",
        "k_bsni": "WNG"
      },
      {
        "id": 216,
        "provinsi_id": 13,
        "kabupaten_kota": "Wonosobo",
        "ibukota": "Wonosobo",
        "k_bsni": "WSB"
      },
      {
        "id": 217,
        "provinsi_id": 13,
        "kabupaten_kota": "Kota Magelang",
        "ibukota": "Magelang",
        "k_bsni": "MGG"
      },
      {
        "id": 218,
        "provinsi_id": 13,
        "kabupaten_kota": "Kota Pekalongan",
        "ibukota": "Pekalongan",
        "k_bsni": "PKL"
      },
      {
        "id": 219,
        "provinsi_id": 13,
        "kabupaten_kota": "Kota Salatiga",
        "ibukota": "Salatiga",
        "k_bsni": "SLT"
      },
      {
        "id": 220,
        "provinsi_id": 13,
        "kabupaten_kota": "Kota Semarang",
        "ibukota": "Semarang",
        "k_bsni": "SMG"
      },
      {
        "id": 221,
        "provinsi_id": 13,
        "kabupaten_kota": "Kota Surakarta (Solo)",
        "ibukota": "Surakarta",
        "k_bsni": "SKT"
      },
      {
        "id": 222,
        "provinsi_id": 13,
        "kabupaten_kota": "Kota Tegal",
        "ibukota": "Tegal",
        "k_bsni": "TGL"
      },
      {
        "id": 223,
        "provinsi_id": 14,
        "kabupaten_kota": "Bantul",
        "ibukota": "Bantul",
        "k_bsni": "BTL"
      },
      {
        "id": 224,
        "provinsi_id": 14,
        "kabupaten_kota": "Gunung Kidul",
        "ibukota": "Wonosari",
        "k_bsni": "WNO"
      },
      {
        "id": 225,
        "provinsi_id": 14,
        "kabupaten_kota": "Kulon Progo",
        "ibukota": "Wates",
        "k_bsni": "WAT"
      },
      {
        "id": 226,
        "provinsi_id": 14,
        "kabupaten_kota": "Sleman",
        "ibukota": "Sleman",
        "k_bsni": "SMN"
      },
      {
        "id": 227,
        "provinsi_id": 14,
        "kabupaten_kota": "Kota Yogyakarta",
        "ibukota": "Yogyakarta",
        "k_bsni": "YYK"
      },
      {
        "id": 228,
        "provinsi_id": 15,
        "kabupaten_kota": "Bangkalan",
        "ibukota": "Bangkalan",
        "k_bsni": "BKL"
      },
      {
        "id": 229,
        "provinsi_id": 15,
        "kabupaten_kota": "Banyuwangi",
        "ibukota": "Banyuwangi",
        "k_bsni": "BYW"
      },
      {
        "id": 230,
        "provinsi_id": 15,
        "kabupaten_kota": "Blitar",
        "ibukota": "Kanigoro",
        "k_bsni": "KNR"
      },
      {
        "id": 231,
        "provinsi_id": 15,
        "kabupaten_kota": "Bojonegoro",
        "ibukota": "Bojonegoro",
        "k_bsni": "BJN"
      },
      {
        "id": 232,
        "provinsi_id": 15,
        "kabupaten_kota": "Bondowoso",
        "ibukota": "Bondowoso",
        "k_bsni": "BDW"
      },
      {
        "id": 233,
        "provinsi_id": 15,
        "kabupaten_kota": "Gresik",
        "ibukota": "Gresik",
        "k_bsni": "GSK"
      },
      {
        "id": 234,
        "provinsi_id": 15,
        "kabupaten_kota": "Jember",
        "ibukota": "Jember",
        "k_bsni": "JMR"
      },
      {
        "id": 235,
        "provinsi_id": 15,
        "kabupaten_kota": "Jombang",
        "ibukota": "Jombang",
        "k_bsni": "JBG"
      },
      {
        "id": 236,
        "provinsi_id": 15,
        "kabupaten_kota": "Kediri",
        "ibukota": "Kediri",
        "k_bsni": "KDR"
      },
      {
        "id": 237,
        "provinsi_id": 15,
        "kabupaten_kota": "Lamongan",
        "ibukota": "Lamongan",
        "k_bsni": "LMG"
      },
      {
        "id": 238,
        "provinsi_id": 15,
        "kabupaten_kota": "Lumajang",
        "ibukota": "Lumajang",
        "k_bsni": "LMJ"
      },
      {
        "id": 239,
        "provinsi_id": 15,
        "kabupaten_kota": "Madiun",
        "ibukota": "Mejayan",
        "k_bsni": "MJY"
      },
      {
        "id": 240,
        "provinsi_id": 15,
        "kabupaten_kota": "Magetan",
        "ibukota": "Magetan",
        "k_bsni": "MGT"
      },
      {
        "id": 241,
        "provinsi_id": 15,
        "kabupaten_kota": "Malang",
        "ibukota": "Kepanjen",
        "k_bsni": "KPN"
      },
      {
        "id": 242,
        "provinsi_id": 15,
        "kabupaten_kota": "Mojokerto",
        "ibukota": "Mojokerto",
        "k_bsni": "MJK"
      },
      {
        "id": 243,
        "provinsi_id": 15,
        "kabupaten_kota": "Nganjuk",
        "ibukota": "Nganjuk",
        "k_bsni": "NJK"
      },
      {
        "id": 244,
        "provinsi_id": 15,
        "kabupaten_kota": "Ngawi",
        "ibukota": "Ngawi",
        "k_bsni": "NGW"
      },
      {
        "id": 245,
        "provinsi_id": 15,
        "kabupaten_kota": "Pacitan",
        "ibukota": "Pacitan",
        "k_bsni": "PCT"
      },
      {
        "id": 246,
        "provinsi_id": 15,
        "kabupaten_kota": "Pamekasan",
        "ibukota": "Pamekasan",
        "k_bsni": "PMK"
      },
      {
        "id": 247,
        "provinsi_id": 15,
        "kabupaten_kota": "Pasuruan",
        "ibukota": "Pasuruan",
        "k_bsni": "PSR"
      },
      {
        "id": 248,
        "provinsi_id": 15,
        "kabupaten_kota": "Ponorogo",
        "ibukota": "Ponorogo",
        "k_bsni": "PNG"
      },
      {
        "id": 249,
        "provinsi_id": 15,
        "kabupaten_kota": "Probolinggo",
        "ibukota": "Kraksaan",
        "k_bsni": "KRS"
      },
      {
        "id": 250,
        "provinsi_id": 15,
        "kabupaten_kota": "Sampang",
        "ibukota": "Sampang",
        "k_bsni": "SPG"
      },
      {
        "id": 251,
        "provinsi_id": 15,
        "kabupaten_kota": "Sidoarjo",
        "ibukota": "Sidoarjo",
        "k_bsni": "SDA"
      },
      {
        "id": 252,
        "provinsi_id": 15,
        "kabupaten_kota": "Situbondo",
        "ibukota": "Situbondo",
        "k_bsni": "SIT"
      },
      {
        "id": 253,
        "provinsi_id": 15,
        "kabupaten_kota": "Sumenep",
        "ibukota": "Sumenep",
        "k_bsni": "SMP"
      },
      {
        "id": 254,
        "provinsi_id": 15,
        "kabupaten_kota": "Trenggalek",
        "ibukota": "Trenggalek",
        "k_bsni": "TRK"
      },
      {
        "id": 255,
        "provinsi_id": 15,
        "kabupaten_kota": "Tuban",
        "ibukota": "Tuban",
        "k_bsni": "TBN"
      },
      {
        "id": 256,
        "provinsi_id": 15,
        "kabupaten_kota": "Tulungagung",
        "ibukota": "Tulungagung",
        "k_bsni": "TLG"
      },
      {
        "id": 257,
        "provinsi_id": 15,
        "kabupaten_kota": "Kota Batu",
        "ibukota": "Batu",
        "k_bsni": "BTU"
      },
      {
        "id": 258,
        "provinsi_id": 15,
        "kabupaten_kota": "Kota Blitar",
        "ibukota": "Blitar",
        "k_bsni": "BLT"
      },
      {
        "id": 259,
        "provinsi_id": 15,
        "kabupaten_kota": "Kota Kediri",
        "ibukota": "Kediri",
        "k_bsni": "KDR"
      },
      {
        "id": 260,
        "provinsi_id": 15,
        "kabupaten_kota": "Kota Madiun",
        "ibukota": "Madiun",
        "k_bsni": "MAD"
      },
      {
        "id": 261,
        "provinsi_id": 15,
        "kabupaten_kota": "Kota Malang",
        "ibukota": "Malang",
        "k_bsni": "MLG"
      },
      {
        "id": 262,
        "provinsi_id": 15,
        "kabupaten_kota": "Kota Mojokerto",
        "ibukota": "Mojokerto",
        "k_bsni": "MJK"
      },
      {
        "id": 263,
        "provinsi_id": 15,
        "kabupaten_kota": "Kota Pasuruan",
        "ibukota": "Pasuruan",
        "k_bsni": "PSN"
      },
      {
        "id": 264,
        "provinsi_id": 15,
        "kabupaten_kota": "Kota Probolinggo",
        "ibukota": "Probolinggo",
        "k_bsni": "PBL"
      },
      {
        "id": 265,
        "provinsi_id": 15,
        "kabupaten_kota": "Kota Surabaya",
        "ibukota": "Surabaya",
        "k_bsni": "SBY"
      },
      {
        "id": 266,
        "provinsi_id": 16,
        "kabupaten_kota": "Lebak",
        "ibukota": "Rangkas Bitung",
        "k_bsni": "RKB"
      },
      {
        "id": 267,
        "provinsi_id": 16,
        "kabupaten_kota": "Pandeglang",
        "ibukota": "Pandeglang",
        "k_bsni": "PDG"
      },
      {
        "id": 268,
        "provinsi_id": 16,
        "kabupaten_kota": "Serang",
        "ibukota": "Serang",
        "k_bsni": "SRG"
      },
      {
        "id": 269,
        "provinsi_id": 16,
        "kabupaten_kota": "Tangerang",
        "ibukota": "Tigaraksa",
        "k_bsni": "TGR"
      },
      {
        "id": 270,
        "provinsi_id": 16,
        "kabupaten_kota": "Kota Cilegon",
        "ibukota": "Cilegon",
        "k_bsni": "CLG"
      },
      {
        "id": 271,
        "provinsi_id": 16,
        "kabupaten_kota": "Kota Serang",
        "ibukota": "Serang",
        "k_bsni": "SRG"
      },
      {
        "id": 272,
        "provinsi_id": 16,
        "kabupaten_kota": "Kota Tangerang",
        "ibukota": "Tangerang",
        "k_bsni": "TNG"
      },
      {
        "id": 273,
        "provinsi_id": 16,
        "kabupaten_kota": "Kota Tangerang Selatan",
        "ibukota": "Ciputat",
        "k_bsni": "CPT"
      },
      {
        "id": 274,
        "provinsi_id": 17,
        "kabupaten_kota": "Badung",
        "ibukota": "Mengwi",
        "k_bsni": "MGW"
      },
      {
        "id": 275,
        "provinsi_id": 17,
        "kabupaten_kota": "Bangli",
        "ibukota": "Bangli",
        "k_bsni": "BLI"
      },
      {
        "id": 276,
        "provinsi_id": 17,
        "kabupaten_kota": "Buleleng",
        "ibukota": "Singaraja",
        "k_bsni": "SGR"
      },
      {
        "id": 277,
        "provinsi_id": 17,
        "kabupaten_kota": "Gianyar",
        "ibukota": "Gianyar",
        "k_bsni": "GIN"
      },
      {
        "id": 278,
        "provinsi_id": 17,
        "kabupaten_kota": "Jembrana",
        "ibukota": "Negara",
        "k_bsni": "NGA"
      },
      {
        "id": 279,
        "provinsi_id": 17,
        "kabupaten_kota": "Karangasem",
        "ibukota": "Karangasem",
        "k_bsni": "KRA"
      },
      {
        "id": 280,
        "provinsi_id": 17,
        "kabupaten_kota": "Klungkung",
        "ibukota": "Semarapura",
        "k_bsni": "SRP"
      },
      {
        "id": 281,
        "provinsi_id": 17,
        "kabupaten_kota": "Tabanan",
        "ibukota": "Tabanan",
        "k_bsni": "TAB"
      },
      {
        "id": 282,
        "provinsi_id": 17,
        "kabupaten_kota": "Kota Denpasar",
        "ibukota": "Denpasar",
        "k_bsni": "DPR"
      },
      {
        "id": 283,
        "provinsi_id": 18,
        "kabupaten_kota": "Bima",
        "ibukota": "Woha",
        "k_bsni": "WHO"
      },
      {
        "id": 284,
        "provinsi_id": 18,
        "kabupaten_kota": "Dompu",
        "ibukota": "Dompu",
        "k_bsni": "DPU"
      },
      {
        "id": 285,
        "provinsi_id": 18,
        "kabupaten_kota": "Lombok Barat",
        "ibukota": "Gerung",
        "k_bsni": "GRG"
      },
      {
        "id": 286,
        "provinsi_id": 18,
        "kabupaten_kota": "Lombok Tengah",
        "ibukota": "Praya",
        "k_bsni": "PYA"
      },
      {
        "id": 287,
        "provinsi_id": 18,
        "kabupaten_kota": "Lombok Timur",
        "ibukota": "Selong",
        "k_bsni": "SEL"
      },
      {
        "id": 288,
        "provinsi_id": 18,
        "kabupaten_kota": "Lombok Utara",
        "ibukota": "Tanjung",
        "k_bsni": "TJN"
      },
      {
        "id": 289,
        "provinsi_id": 18,
        "kabupaten_kota": "Sumbawa",
        "ibukota": "Sumbawa Besar",
        "k_bsni": "SBW"
      },
      {
        "id": 290,
        "provinsi_id": 18,
        "kabupaten_kota": "Sumbawa Barat",
        "ibukota": "Taliwang",
        "k_bsni": "TLW"
      },
      {
        "id": 291,
        "provinsi_id": 18,
        "kabupaten_kota": "Kota Bima",
        "ibukota": "Bima",
        "k_bsni": "BIM"
      },
      {
        "id": 292,
        "provinsi_id": 18,
        "kabupaten_kota": "Kota Mataram",
        "ibukota": "Mataram",
        "k_bsni": "MTR"
      },
      {
        "id": 293,
        "provinsi_id": 19,
        "kabupaten_kota": "Alor",
        "ibukota": "Kalabahi",
        "k_bsni": "KLB"
      },
      {
        "id": 294,
        "provinsi_id": 19,
        "kabupaten_kota": "Belu",
        "ibukota": "Atambua",
        "k_bsni": "ATB"
      },
      {
        "id": 295,
        "provinsi_id": 19,
        "kabupaten_kota": "Ende",
        "ibukota": "Ende",
        "k_bsni": "END"
      },
      {
        "id": 296,
        "provinsi_id": 19,
        "kabupaten_kota": "Flores Timur",
        "ibukota": "Larantuka",
        "k_bsni": "LRT"
      },
      {
        "id": 297,
        "provinsi_id": 19,
        "kabupaten_kota": "Kupang",
        "ibukota": "Kupang",
        "k_bsni": "KPG"
      },
      {
        "id": 298,
        "provinsi_id": 19,
        "kabupaten_kota": "Lembata",
        "ibukota": "Lewoleba",
        "k_bsni": "LWB"
      },
      {
        "id": 299,
        "provinsi_id": 19,
        "kabupaten_kota": "Malaka",
        "ibukota": "Betun",
        "k_bsni": "BTN"
      },
      {
        "id": 300,
        "provinsi_id": 19,
        "kabupaten_kota": "Manggarai",
        "ibukota": "Ruteng",
        "k_bsni": "RTG"
      },
      {
        "id": 301,
        "provinsi_id": 19,
        "kabupaten_kota": "Manggarai Barat",
        "ibukota": "Labuan Bajo",
        "k_bsni": "LBJ"
      },
      {
        "id": 302,
        "provinsi_id": 19,
        "kabupaten_kota": "Manggarai Timur",
        "ibukota": "Borong",
        "k_bsni": "BRG"
      },
      {
        "id": 303,
        "provinsi_id": 19,
        "kabupaten_kota": "Nagekeo",
        "ibukota": "Mbay",
        "k_bsni": "MBY"
      },
      {
        "id": 304,
        "provinsi_id": 19,
        "kabupaten_kota": "Ngada",
        "ibukota": "Bajawa",
        "k_bsni": "BJW"
      },
      {
        "id": 305,
        "provinsi_id": 19,
        "kabupaten_kota": "Rote Ndao",
        "ibukota": "Baa",
        "k_bsni": "BAA"
      },
      {
        "id": 306,
        "provinsi_id": 19,
        "kabupaten_kota": "Sabu Raijua",
        "ibukota": "Sabu Barat",
        "k_bsni": "SBB"
      },
      {
        "id": 307,
        "provinsi_id": 19,
        "kabupaten_kota": "Sikka",
        "ibukota": "Maumere",
        "k_bsni": "MME"
      },
      {
        "id": 308,
        "provinsi_id": 19,
        "kabupaten_kota": "Sumba Barat",
        "ibukota": "Waikabubak",
        "k_bsni": "WKB"
      },
      {
        "id": 309,
        "provinsi_id": 19,
        "kabupaten_kota": "Sumba Barat Daya",
        "ibukota": "Tambolaka",
        "k_bsni": "TAM"
      },
      {
        "id": 310,
        "provinsi_id": 19,
        "kabupaten_kota": "Sumba Tengah",
        "ibukota": "Waibakul",
        "k_bsni": "WBL"
      },
      {
        "id": 311,
        "provinsi_id": 19,
        "kabupaten_kota": "Sumba Timur",
        "ibukota": "Waingapu",
        "k_bsni": "WGP"
      },
      {
        "id": 312,
        "provinsi_id": 19,
        "kabupaten_kota": "Timor Tengah Selatan",
        "ibukota": "Soe",
        "k_bsni": "SOE"
      },
      {
        "id": 313,
        "provinsi_id": 19,
        "kabupaten_kota": "Timor Tengah Utara",
        "ibukota": "Kefamenanu",
        "k_bsni": "KFM"
      },
      {
        "id": 314,
        "provinsi_id": 19,
        "kabupaten_kota": "Kota Kupang",
        "ibukota": "Kupang",
        "k_bsni": "KPG"
      },
      {
        "id": 315,
        "provinsi_id": 20,
        "kabupaten_kota": "Bengkayang",
        "ibukota": "Bengkayang",
        "k_bsni": "BEK"
      },
      {
        "id": 316,
        "provinsi_id": 20,
        "kabupaten_kota": "Kapuas Hulu",
        "ibukota": "Putussibau",
        "k_bsni": "PTS"
      },
      {
        "id": 317,
        "provinsi_id": 20,
        "kabupaten_kota": "Kayong Utara",
        "ibukota": "Sukadane",
        "k_bsni": "SKD"
      },
      {
        "id": 318,
        "provinsi_id": 20,
        "kabupaten_kota": "Ketapang",
        "ibukota": "Ketapang",
        "k_bsni": "KTP"
      },
      {
        "id": 319,
        "provinsi_id": 20,
        "kabupaten_kota": "Kubu Raya",
        "ibukota": "Sungai Raya",
        "k_bsni": "SRY"
      },
      {
        "id": 320,
        "provinsi_id": 20,
        "kabupaten_kota": "Landak",
        "ibukota": "Ngabang",
        "k_bsni": "NBA"
      },
      {
        "id": 321,
        "provinsi_id": 20,
        "kabupaten_kota": "Melawi",
        "ibukota": "Nanga Pinoh",
        "k_bsni": "NGP"
      },
      {
        "id": 322,
        "provinsi_id": 20,
        "kabupaten_kota": "Mempawah",
        "ibukota": "Mempawah",
        "k_bsni": "MPW"
      },
      {
        "id": 323,
        "provinsi_id": 20,
        "kabupaten_kota": "Sambas",
        "ibukota": "Sambas",
        "k_bsni": "SBS"
      },
      {
        "id": 324,
        "provinsi_id": 20,
        "kabupaten_kota": "Sanggau",
        "ibukota": "Sanggau",
        "k_bsni": "SAG"
      },
      {
        "id": 325,
        "provinsi_id": 20,
        "kabupaten_kota": "Sekadau",
        "ibukota": "Sekadau",
        "k_bsni": "SED"
      },
      {
        "id": 326,
        "provinsi_id": 20,
        "kabupaten_kota": "Sintang",
        "ibukota": "Sintang",
        "k_bsni": "STG"
      },
      {
        "id": 327,
        "provinsi_id": 20,
        "kabupaten_kota": "Kota Pontianak",
        "ibukota": "Pontianak",
        "k_bsni": "PTK"
      },
      {
        "id": 328,
        "provinsi_id": 20,
        "kabupaten_kota": "Kota Singkawang",
        "ibukota": "Singkawang",
        "k_bsni": "SKW"
      },
      {
        "id": 329,
        "provinsi_id": 21,
        "kabupaten_kota": "Barito Selatan",
        "ibukota": "Buntok",
        "k_bsni": "BNT"
      },
      {
        "id": 330,
        "provinsi_id": 21,
        "kabupaten_kota": "Barito Timur",
        "ibukota": "Tamiang Layang",
        "k_bsni": "TML"
      },
      {
        "id": 331,
        "provinsi_id": 21,
        "kabupaten_kota": "Barito Utara",
        "ibukota": "Muara Teweh",
        "k_bsni": "MTW"
      },
      {
        "id": 332,
        "provinsi_id": 21,
        "kabupaten_kota": "Gunung Mas",
        "ibukota": "Kuala Kurun",
        "k_bsni": "KKN"
      },
      {
        "id": 333,
        "provinsi_id": 21,
        "kabupaten_kota": "Kapuas",
        "ibukota": "Kuala Kapuas",
        "k_bsni": "KLK"
      },
      {
        "id": 334,
        "provinsi_id": 21,
        "kabupaten_kota": "Katingan",
        "ibukota": "Kasongan",
        "k_bsni": "KSN"
      },
      {
        "id": 335,
        "provinsi_id": 21,
        "kabupaten_kota": "Kotawaringin Barat",
        "ibukota": "Pangkalan Bun",
        "k_bsni": "PBU"
      },
      {
        "id": 336,
        "provinsi_id": 21,
        "kabupaten_kota": "Kotawaringin Timur",
        "ibukota": "Sampit",
        "k_bsni": "SPT"
      },
      {
        "id": 337,
        "provinsi_id": 21,
        "kabupaten_kota": "Lamandau",
        "ibukota": "Nanga Bulik",
        "k_bsni": "NGB"
      },
      {
        "id": 338,
        "provinsi_id": 21,
        "kabupaten_kota": "Murung Raya",
        "ibukota": "Puruk Cahu",
        "k_bsni": "PRC"
      },
      {
        "id": 339,
        "provinsi_id": 21,
        "kabupaten_kota": "Pulang Pisau",
        "ibukota": "Pulang Pisau",
        "k_bsni": "PPS"
      },
      {
        "id": 340,
        "provinsi_id": 21,
        "kabupaten_kota": "Seruyan",
        "ibukota": "Kuala Pembuang",
        "k_bsni": "KLP"
      },
      {
        "id": 341,
        "provinsi_id": 21,
        "kabupaten_kota": "Sukamara",
        "ibukota": "Sukamara",
        "k_bsni": "SKR"
      },
      {
        "id": 342,
        "provinsi_id": 21,
        "kabupaten_kota": "Kota Palangka Raya",
        "ibukota": "Palangkaraya",
        "k_bsni": "PLK"
      },
      {
        "id": 343,
        "provinsi_id": 22,
        "kabupaten_kota": "Balangan",
        "ibukota": "Paringin",
        "k_bsni": "PRN"
      },
      {
        "id": 344,
        "provinsi_id": 22,
        "kabupaten_kota": "Banjar",
        "ibukota": "Martapura",
        "k_bsni": "MTP"
      },
      {
        "id": 345,
        "provinsi_id": 22,
        "kabupaten_kota": "Barito Kuala",
        "ibukota": "Marabahan",
        "k_bsni": "MRH"
      },
      {
        "id": 346,
        "provinsi_id": 22,
        "kabupaten_kota": "Hulu Sungai Selatan",
        "ibukota": "Kandangan",
        "k_bsni": "KGN"
      },
      {
        "id": 347,
        "provinsi_id": 22,
        "kabupaten_kota": "Hulu Sungai Tengah",
        "ibukota": "Barabai",
        "k_bsni": "BRB"
      },
      {
        "id": 348,
        "provinsi_id": 22,
        "kabupaten_kota": "Hulu Sungai Utara",
        "ibukota": "Amuntai",
        "k_bsni": "AMT"
      },
      {
        "id": 349,
        "provinsi_id": 22,
        "kabupaten_kota": "Kotabaru",
        "ibukota": "Kotabaru",
        "k_bsni": "KBR"
      },
      {
        "id": 350,
        "provinsi_id": 22,
        "kabupaten_kota": "Tabalong",
        "ibukota": "Tanjung",
        "k_bsni": "TJG"
      },
      {
        "id": 351,
        "provinsi_id": 22,
        "kabupaten_kota": "Tanah Bumbu",
        "ibukota": "Batulicin",
        "k_bsni": "BLN"
      },
      {
        "id": 352,
        "provinsi_id": 22,
        "kabupaten_kota": "Tanah Laut",
        "ibukota": "Pelaihari",
        "k_bsni": "PLI"
      },
      {
        "id": 353,
        "provinsi_id": 22,
        "kabupaten_kota": "Tapin",
        "ibukota": "Rantau",
        "k_bsni": "RTA"
      },
      {
        "id": 354,
        "provinsi_id": 22,
        "kabupaten_kota": "Kota Banjarbaru",
        "ibukota": "Banjarbaru",
        "k_bsni": "BJB"
      },
      {
        "id": 355,
        "provinsi_id": 22,
        "kabupaten_kota": "Kota Banjarmasin",
        "ibukota": "Banjarmasin",
        "k_bsni": "BJM"
      },
      {
        "id": 356,
        "provinsi_id": 23,
        "kabupaten_kota": "Berau",
        "ibukota": "Tanjung Redeb",
        "k_bsni": "TNR"
      },
      {
        "id": 357,
        "provinsi_id": 23,
        "kabupaten_kota": "Kutai Barat",
        "ibukota": "Sendawar",
        "k_bsni": "SDW"
      },
      {
        "id": 358,
        "provinsi_id": 23,
        "kabupaten_kota": "Kutai Kartanegara",
        "ibukota": "Tenggarong",
        "k_bsni": "TRG"
      },
      {
        "id": 359,
        "provinsi_id": 23,
        "kabupaten_kota": "Kutai Timur",
        "ibukota": "Sanggatta",
        "k_bsni": "SGT"
      },
      {
        "id": 360,
        "provinsi_id": 23,
        "kabupaten_kota": "Mahakam Ulu",
        "ibukota": "Ujoh Bilang",
        "k_bsni": "UJB"
      },
      {
        "id": 361,
        "provinsi_id": 23,
        "kabupaten_kota": "Paser",
        "ibukota": "Tanah Grogot",
        "k_bsni": "TGT"
      },
      {
        "id": 362,
        "provinsi_id": 23,
        "kabupaten_kota": "Penajam Paser Utara",
        "ibukota": "Penajam",
        "k_bsni": "PNJ"
      },
      {
        "id": 363,
        "provinsi_id": 23,
        "kabupaten_kota": "Kota Balikpapan",
        "ibukota": "Balikpapan",
        "k_bsni": "BPP"
      },
      {
        "id": 364,
        "provinsi_id": 23,
        "kabupaten_kota": "Kota Bontang",
        "ibukota": "Bontang",
        "k_bsni": "BON"
      },
      {
        "id": 365,
        "provinsi_id": 23,
        "kabupaten_kota": "Kota Samarinda",
        "ibukota": "Samarinda",
        "k_bsni": "SMR"
      },
      {
        "id": 366,
        "provinsi_id": 24,
        "kabupaten_kota": "Bulungan (Bulongan)",
        "ibukota": "Tanjung Selor",
        "k_bsni": "TJS"
      },
      {
        "id": 367,
        "provinsi_id": 24,
        "kabupaten_kota": "Malinau",
        "ibukota": "Malinau",
        "k_bsni": "MLN"
      },
      {
        "id": 368,
        "provinsi_id": 24,
        "kabupaten_kota": "Nunukan",
        "ibukota": "Nunukan",
        "k_bsni": "NNK"
      },
      {
        "id": 369,
        "provinsi_id": 24,
        "kabupaten_kota": "Tana Tidung",
        "ibukota": "Tideng Pale",
        "k_bsni": "TDP"
      },
      {
        "id": 370,
        "provinsi_id": 24,
        "kabupaten_kota": "Kota Tarakan",
        "ibukota": "Tarakan",
        "k_bsni": "TAR"
      },
      {
        "id": 371,
        "provinsi_id": 25,
        "kabupaten_kota": "Bolaang Mongondow",
        "ibukota": "Lolak",
        "k_bsni": "LLK"
      },
      {
        "id": 372,
        "provinsi_id": 25,
        "kabupaten_kota": "Bolaang Mongondow Selatan",
        "ibukota": "Bolaang Uki",
        "k_bsni": "BLU"
      },
      {
        "id": 373,
        "provinsi_id": 25,
        "kabupaten_kota": "Bolaang Mongondow Timur",
        "ibukota": "Tutuyan",
        "k_bsni": "TTY"
      },
      {
        "id": 374,
        "provinsi_id": 25,
        "kabupaten_kota": "Bolaang Mongondow Utara",
        "ibukota": "Boroko",
        "k_bsni": "BRK"
      },
      {
        "id": 375,
        "provinsi_id": 25,
        "kabupaten_kota": "Kepulauan Sangihe",
        "ibukota": "Tahuna",
        "k_bsni": "THN"
      },
      {
        "id": 376,
        "provinsi_id": 25,
        "kabupaten_kota": "Kepulauan Siau Tagulandang Biaro (Sitaro)",
        "ibukota": "Ondong Siau",
        "k_bsni": "ODS"
      },
      {
        "id": 377,
        "provinsi_id": 25,
        "kabupaten_kota": "Kepulauan Talaud",
        "ibukota": "Melongguane",
        "k_bsni": "MGN"
      },
      {
        "id": 378,
        "provinsi_id": 25,
        "kabupaten_kota": "Minahasa",
        "ibukota": "Tondano",
        "k_bsni": "TNN"
      },
      {
        "id": 379,
        "provinsi_id": 25,
        "kabupaten_kota": "Minahasa Selatan",
        "ibukota": "Amurang",
        "k_bsni": "AMR"
      },
      {
        "id": 380,
        "provinsi_id": 25,
        "kabupaten_kota": "Minahasa Tenggara",
        "ibukota": "Ratahan",
        "k_bsni": "RTN"
      },
      {
        "id": 381,
        "provinsi_id": 25,
        "kabupaten_kota": "Minahasa Utara",
        "ibukota": "Air Madidi",
        "k_bsni": "ARM"
      },
      {
        "id": 382,
        "provinsi_id": 25,
        "kabupaten_kota": "Kota Bitung",
        "ibukota": "Bitung",
        "k_bsni": "BIT"
      },
      {
        "id": 383,
        "provinsi_id": 25,
        "kabupaten_kota": "Kota Kotamobagu",
        "ibukota": "Kotamobagu",
        "k_bsni": "KTG"
      },
      {
        "id": 384,
        "provinsi_id": 25,
        "kabupaten_kota": "Kota Manado",
        "ibukota": "Manado",
        "k_bsni": "MND"
      },
      {
        "id": 385,
        "provinsi_id": 25,
        "kabupaten_kota": "Kota Tomohon",
        "ibukota": "Tomohon",
        "k_bsni": "TMH"
      },
      {
        "id": 386,
        "provinsi_id": 26,
        "kabupaten_kota": "Banggai",
        "ibukota": "Luwuk",
        "k_bsni": "LWK"
      },
      {
        "id": 387,
        "provinsi_id": 26,
        "kabupaten_kota": "Banggai Kepulauan",
        "ibukota": "Salakan",
        "k_bsni": "SKN"
      },
      {
        "id": 388,
        "provinsi_id": 26,
        "kabupaten_kota": "Banggai Laut",
        "ibukota": "Banggai",
        "k_bsni": "BGI"
      },
      {
        "id": 389,
        "provinsi_id": 26,
        "kabupaten_kota": "Buol",
        "ibukota": "Buol",
        "k_bsni": "BUL"
      },
      {
        "id": 390,
        "provinsi_id": 26,
        "kabupaten_kota": "Donggala",
        "ibukota": "Donggala",
        "k_bsni": "DGL"
      },
      {
        "id": 391,
        "provinsi_id": 26,
        "kabupaten_kota": "Morowali",
        "ibukota": "Bungku",
        "k_bsni": "BGK"
      },
      {
        "id": 392,
        "provinsi_id": 26,
        "kabupaten_kota": "Morowali Utara",
        "ibukota": "Kolonodale",
        "k_bsni": "KND"
      },
      {
        "id": 393,
        "provinsi_id": 26,
        "kabupaten_kota": "Parigi Moutong",
        "ibukota": "Parigi",
        "k_bsni": "PRG"
      },
      {
        "id": 394,
        "provinsi_id": 26,
        "kabupaten_kota": "Poso",
        "ibukota": "Poso",
        "k_bsni": "PSO"
      },
      {
        "id": 395,
        "provinsi_id": 26,
        "kabupaten_kota": "Sigi",
        "ibukota": "Sigi Biromaru",
        "k_bsni": "SGB"
      },
      {
        "id": 396,
        "provinsi_id": 26,
        "kabupaten_kota": "Tojo Una-Una",
        "ibukota": "Ampana",
        "k_bsni": "APN"
      },
      {
        "id": 397,
        "provinsi_id": 26,
        "kabupaten_kota": "Toli-Toli",
        "ibukota": "Toli Toli",
        "k_bsni": "TLI"
      },
      {
        "id": 398,
        "provinsi_id": 26,
        "kabupaten_kota": "Kota Palu",
        "ibukota": "Palu",
        "k_bsni": "PAL"
      },
      {
        "id": 399,
        "provinsi_id": 27,
        "kabupaten_kota": "Bantaeng",
        "ibukota": "Bantaeng",
        "k_bsni": "BAN"
      },
      {
        "id": 400,
        "provinsi_id": 27,
        "kabupaten_kota": "Barru",
        "ibukota": "Barru",
        "k_bsni": "BAR"
      },
      {
        "id": 401,
        "provinsi_id": 27,
        "kabupaten_kota": "Bone",
        "ibukota": "Watampone",
        "k_bsni": "WTP"
      },
      {
        "id": 402,
        "provinsi_id": 27,
        "kabupaten_kota": "Bulukumba",
        "ibukota": "Bulukumba",
        "k_bsni": "BLK"
      },
      {
        "id": 403,
        "provinsi_id": 27,
        "kabupaten_kota": "Enrekang",
        "ibukota": "Enrekang",
        "k_bsni": "ENR"
      },
      {
        "id": 404,
        "provinsi_id": 27,
        "kabupaten_kota": "Gowa",
        "ibukota": "Sungguminasa",
        "k_bsni": "SGM"
      },
      {
        "id": 405,
        "provinsi_id": 27,
        "kabupaten_kota": "Jeneponto",
        "ibukota": "Jeneponto",
        "k_bsni": "JNP"
      },
      {
        "id": 406,
        "provinsi_id": 27,
        "kabupaten_kota": "Selayar (Kepulauan Selayar)",
        "ibukota": "Benteng",
        "k_bsni": "BEN"
      },
      {
        "id": 407,
        "provinsi_id": 27,
        "kabupaten_kota": "Luwu",
        "ibukota": "Palopo",
        "k_bsni": "PLP"
      },
      {
        "id": 408,
        "provinsi_id": 27,
        "kabupaten_kota": "Luwu Timur",
        "ibukota": "Malili",
        "k_bsni": "MLL"
      },
      {
        "id": 409,
        "provinsi_id": 27,
        "kabupaten_kota": "Luwu Utara",
        "ibukota": "Masamba",
        "k_bsni": "MSB"
      },
      {
        "id": 410,
        "provinsi_id": 27,
        "kabupaten_kota": "Maros",
        "ibukota": "Maros",
        "k_bsni": "MRS"
      },
      {
        "id": 411,
        "provinsi_id": 27,
        "kabupaten_kota": "Pangkajene Kepulauan",
        "ibukota": "Pangkajene",
        "k_bsni": "PKJ"
      },
      {
        "id": 412,
        "provinsi_id": 27,
        "kabupaten_kota": "Pinrang",
        "ibukota": "Pinrang",
        "k_bsni": "PIN"
      },
      {
        "id": 413,
        "provinsi_id": 27,
        "kabupaten_kota": "Sidenreng Rappang (Sidrap)",
        "ibukota": "Sidenreng",
        "k_bsni": "SDR"
      },
      {
        "id": 414,
        "provinsi_id": 27,
        "kabupaten_kota": "Sinjai",
        "ibukota": "Sinjai",
        "k_bsni": "SNJ"
      },
      {
        "id": 415,
        "provinsi_id": 27,
        "kabupaten_kota": "Soppeng",
        "ibukota": "Watan Soppeng",
        "k_bsni": "WNS"
      },
      {
        "id": 416,
        "provinsi_id": 27,
        "kabupaten_kota": "Takalar",
        "ibukota": "Takalar",
        "k_bsni": "TKA"
      },
      {
        "id": 417,
        "provinsi_id": 27,
        "kabupaten_kota": "Tana Toraja",
        "ibukota": "Makale",
        "k_bsni": "MAK"
      },
      {
        "id": 418,
        "provinsi_id": 27,
        "kabupaten_kota": "Toraja Utara",
        "ibukota": "Rantepao",
        "k_bsni": "RTP"
      },
      {
        "id": 419,
        "provinsi_id": 27,
        "kabupaten_kota": "Wajo",
        "ibukota": "Sengkang",
        "k_bsni": "SKG"
      },
      {
        "id": 420,
        "provinsi_id": 27,
        "kabupaten_kota": "Kota Makassar",
        "ibukota": "Makassar",
        "k_bsni": "MKS"
      },
      {
        "id": 421,
        "provinsi_id": 27,
        "kabupaten_kota": "Kota Palopo",
        "ibukota": "Palopo",
        "k_bsni": "PLP"
      },
      {
        "id": 422,
        "provinsi_id": 27,
        "kabupaten_kota": "Kota Parepare",
        "ibukota": "Pare Pare",
        "k_bsni": "PRE"
      },
      {
        "id": 423,
        "provinsi_id": 28,
        "kabupaten_kota": "Bombana",
        "ibukota": "Rumbia",
        "k_bsni": "RMB"
      },
      {
        "id": 424,
        "provinsi_id": 28,
        "kabupaten_kota": "Buton",
        "ibukota": "Pasar Wajo",
        "k_bsni": "PSW"
      },
      {
        "id": 425,
        "provinsi_id": 28,
        "kabupaten_kota": "Buton Selatan",
        "ibukota": "Batauga",
        "k_bsni": "BAG"
      },
      {
        "id": 426,
        "provinsi_id": 28,
        "kabupaten_kota": "Buton Tengah",
        "ibukota": "Labungkari",
        "k_bsni": "LBK"
      },
      {
        "id": 427,
        "provinsi_id": 28,
        "kabupaten_kota": "Buton Utara",
        "ibukota": "Buranga",
        "k_bsni": "BNG"
      },
      {
        "id": 428,
        "provinsi_id": 28,
        "kabupaten_kota": "Kolaka",
        "ibukota": "Kolaka",
        "k_bsni": "KKA"
      },
      {
        "id": 429,
        "provinsi_id": 28,
        "kabupaten_kota": "Kolaka Timur",
        "ibukota": "Tirawuta",
        "k_bsni": "TRW"
      },
      {
        "id": 430,
        "provinsi_id": 28,
        "kabupaten_kota": "Kolaka Utara",
        "ibukota": "Lasusua",
        "k_bsni": "LSS"
      },
      {
        "id": 431,
        "provinsi_id": 28,
        "kabupaten_kota": "Konawe",
        "ibukota": "Unaaha",
        "k_bsni": "UNH"
      },
      {
        "id": 432,
        "provinsi_id": 28,
        "kabupaten_kota": "Konawe Kepulauan",
        "ibukota": "Langara",
        "k_bsni": "LGR"
      },
      {
        "id": 433,
        "provinsi_id": 28,
        "kabupaten_kota": "Konawe Selatan",
        "ibukota": "Andoolo",
        "k_bsni": "ADL"
      },
      {
        "id": 434,
        "provinsi_id": 28,
        "kabupaten_kota": "Konawe Utara",
        "ibukota": "Wanggudu",
        "k_bsni": "WGD"
      },
      {
        "id": 435,
        "provinsi_id": 28,
        "kabupaten_kota": "Muna",
        "ibukota": "Raha",
        "k_bsni": "RAH"
      },
      {
        "id": 436,
        "provinsi_id": 28,
        "kabupaten_kota": "Muna Barat",
        "ibukota": "Sawerigadi",
        "k_bsni": "SWG"
      },
      {
        "id": 437,
        "provinsi_id": 28,
        "kabupaten_kota": "Wakatobi",
        "ibukota": "Wangi Wangi",
        "k_bsni": "WGW"
      },
      {
        "id": 438,
        "provinsi_id": 28,
        "kabupaten_kota": "Kota Baubau",
        "ibukota": "Bau-Bau",
        "k_bsni": "BAU"
      },
      {
        "id": 439,
        "provinsi_id": 28,
        "kabupaten_kota": "Kota Kendari",
        "ibukota": "Kendari",
        "k_bsni": "KDI"
      },
      {
        "id": 440,
        "provinsi_id": 29,
        "kabupaten_kota": "Boalemo",
        "ibukota": "Tilamuta",
        "k_bsni": "TMT"
      },
      {
        "id": 441,
        "provinsi_id": 29,
        "kabupaten_kota": "Bone Bolango",
        "ibukota": "Suwawa",
        "k_bsni": "SWW"
      },
      {
        "id": 442,
        "provinsi_id": 29,
        "kabupaten_kota": "Gorontalo",
        "ibukota": "Limboto",
        "k_bsni": "LBT"
      },
      {
        "id": 443,
        "provinsi_id": 29,
        "kabupaten_kota": "Gorontalo Utara",
        "ibukota": "Kwandang",
        "k_bsni": "KWD"
      },
      {
        "id": 444,
        "provinsi_id": 29,
        "kabupaten_kota": "Pohuwato",
        "ibukota": "Marisa",
        "k_bsni": "MAR"
      },
      {
        "id": 445,
        "provinsi_id": 29,
        "kabupaten_kota": "Kota Gorontalo",
        "ibukota": "Gorontalo",
        "k_bsni": "GTO"
      },
      {
        "id": 446,
        "provinsi_id": 30,
        "kabupaten_kota": "Majene",
        "ibukota": "Majene",
        "k_bsni": "MJN"
      },
      {
        "id": 447,
        "provinsi_id": 30,
        "kabupaten_kota": "Mamasa",
        "ibukota": "Mamasa",
        "k_bsni": "MMS"
      },
      {
        "id": 448,
        "provinsi_id": 30,
        "kabupaten_kota": "Mamuju",
        "ibukota": "Mamuju",
        "k_bsni": "MAM"
      },
      {
        "id": 449,
        "provinsi_id": 30,
        "kabupaten_kota": "Mamuju Tengah",
        "ibukota": "Tobadak",
        "k_bsni": "TBD"
      },
      {
        "id": 450,
        "provinsi_id": 30,
        "kabupaten_kota": "Mamuju Utara",
        "ibukota": "Pasangkayu",
        "k_bsni": "PKY"
      },
      {
        "id": 451,
        "provinsi_id": 30,
        "kabupaten_kota": "Polewali Mandar",
        "ibukota": "Polewali",
        "k_bsni": "PLW"
      },
      {
        "id": 452,
        "provinsi_id": 31,
        "kabupaten_kota": "Buru",
        "ibukota": "Namlea",
        "k_bsni": "NLA"
      },
      {
        "id": 453,
        "provinsi_id": 31,
        "kabupaten_kota": "Buru Selatan",
        "ibukota": "Namrole",
        "k_bsni": "NMR"
      },
      {
        "id": 454,
        "provinsi_id": 31,
        "kabupaten_kota": "Kepulauan Aru",
        "ibukota": "Dobo",
        "k_bsni": "DOB"
      },
      {
        "id": 455,
        "provinsi_id": 31,
        "kabupaten_kota": "Maluku Barat Daya",
        "ibukota": "Tiakur",
        "k_bsni": "TKR"
      },
      {
        "id": 456,
        "provinsi_id": 31,
        "kabupaten_kota": "Maluku Tengah",
        "ibukota": "Masohi",
        "k_bsni": "MSH"
      },
      {
        "id": 457,
        "provinsi_id": 31,
        "kabupaten_kota": "Maluku Tenggara",
        "ibukota": "Tual",
        "k_bsni": "TUL"
      },
      {
        "id": 458,
        "provinsi_id": 31,
        "kabupaten_kota": "Maluku Tenggara Barat",
        "ibukota": "Saumlaki",
        "k_bsni": "SML"
      },
      {
        "id": 459,
        "provinsi_id": 31,
        "kabupaten_kota": "Seram Bagian Barat",
        "ibukota": "Dataran Hunipopu",
        "k_bsni": "DRH"
      },
      {
        "id": 460,
        "provinsi_id": 31,
        "kabupaten_kota": "Seram Bagian Timur",
        "ibukota": "Dataran Hunimoa",
        "k_bsni": "DTH"
      },
      {
        "id": 461,
        "provinsi_id": 31,
        "kabupaten_kota": "Kota Ambon",
        "ibukota": "Ambon",
        "k_bsni": "AMB"
      },
      {
        "id": 462,
        "provinsi_id": 31,
        "kabupaten_kota": "Kota Tual",
        "ibukota": "Tual",
        "k_bsni": "TUL"
      },
      {
        "id": 463,
        "provinsi_id": 32,
        "kabupaten_kota": "Halmahera Barat",
        "ibukota": "Jailolo",
        "k_bsni": "JLL"
      },
      {
        "id": 464,
        "provinsi_id": 32,
        "kabupaten_kota": "Halmahera Selatan",
        "ibukota": "Labuha",
        "k_bsni": "LBA"
      },
      {
        "id": 465,
        "provinsi_id": 32,
        "kabupaten_kota": "Halmahera Tengah",
        "ibukota": "Weda",
        "k_bsni": "WED"
      },
      {
        "id": 466,
        "provinsi_id": 32,
        "kabupaten_kota": "Halmahera Timur",
        "ibukota": "Maba",
        "k_bsni": "MAB"
      },
      {
        "id": 467,
        "provinsi_id": 32,
        "kabupaten_kota": "Halmahera Utara",
        "ibukota": "Tobelo",
        "k_bsni": "TOB"
      },
      {
        "id": 468,
        "provinsi_id": 32,
        "kabupaten_kota": "Kepulauan Sula",
        "ibukota": "Sanana",
        "k_bsni": "SNN"
      },
      {
        "id": 469,
        "provinsi_id": 32,
        "kabupaten_kota": "Pulau Morotai",
        "ibukota": "Daruba",
        "k_bsni": "DRB"
      },
      {
        "id": 470,
        "provinsi_id": 32,
        "kabupaten_kota": "Pulau Taliabu",
        "ibukota": "Bobong",
        "k_bsni": "BOB"
      },
      {
        "id": 471,
        "provinsi_id": 32,
        "kabupaten_kota": "Kota Ternate",
        "ibukota": "Ternate",
        "k_bsni": "TTE"
      },
      {
        "id": 472,
        "provinsi_id": 32,
        "kabupaten_kota": "Kota Tidore Kepulauan",
        "ibukota": "Tidore",
        "k_bsni": "TDR"
      },
      {
        "id": 473,
        "provinsi_id": 33,
        "kabupaten_kota": "Asmat",
        "ibukota": "Agats",
        "k_bsni": "AGT"
      },
      {
        "id": 474,
        "provinsi_id": 33,
        "kabupaten_kota": "Biak Numfor",
        "ibukota": "Biak",
        "k_bsni": "BIK"
      },
      {
        "id": 475,
        "provinsi_id": 33,
        "kabupaten_kota": "Boven Digoel",
        "ibukota": "Tanah Merah",
        "k_bsni": "TMR"
      },
      {
        "id": 476,
        "provinsi_id": 33,
        "kabupaten_kota": "Deiyai (Deliyai)",
        "ibukota": "Tigi",
        "k_bsni": "TIG"
      },
      {
        "id": 477,
        "provinsi_id": 33,
        "kabupaten_kota": "Dogiyai",
        "ibukota": "Kigamani",
        "k_bsni": "KGM"
      },
      {
        "id": 478,
        "provinsi_id": 33,
        "kabupaten_kota": "Intan Jaya",
        "ibukota": "Sugapa",
        "k_bsni": "SGP"
      },
      {
        "id": 479,
        "provinsi_id": 33,
        "kabupaten_kota": "Jayapura",
        "ibukota": "Jayapura",
        "k_bsni": "JAP"
      },
      {
        "id": 480,
        "provinsi_id": 33,
        "kabupaten_kota": "Jayawijaya",
        "ibukota": "Wamena",
        "k_bsni": "WAM"
      },
      {
        "id": 481,
        "provinsi_id": 33,
        "kabupaten_kota": "Keerom",
        "ibukota": "Waris",
        "k_bsni": "WRS"
      },
      {
        "id": 482,
        "provinsi_id": 33,
        "kabupaten_kota": "Kepulauan Yapen (Yapen Waropen)",
        "ibukota": "Serui",
        "k_bsni": "SRU"
      },
      {
        "id": 483,
        "provinsi_id": 33,
        "kabupaten_kota": "Lanny Jaya",
        "ibukota": "Tiom",
        "k_bsni": "TOM"
      },
      {
        "id": 484,
        "provinsi_id": 33,
        "kabupaten_kota": "Mamberamo Raya",
        "ibukota": "Burmeso",
        "k_bsni": "BRM"
      },
      {
        "id": 485,
        "provinsi_id": 33,
        "kabupaten_kota": "Mamberamo Tengah",
        "ibukota": "Kobakma",
        "k_bsni": "KBK"
      },
      {
        "id": 486,
        "provinsi_id": 33,
        "kabupaten_kota": "Mappi",
        "ibukota": "Kepi",
        "k_bsni": "KEP"
      },
      {
        "id": 487,
        "provinsi_id": 33,
        "kabupaten_kota": "Merauke",
        "ibukota": "Merauke",
        "k_bsni": "MRK"
      },
      {
        "id": 488,
        "provinsi_id": 33,
        "kabupaten_kota": "Mimika",
        "ibukota": "Timika",
        "k_bsni": "TIM"
      },
      {
        "id": 489,
        "provinsi_id": 33,
        "kabupaten_kota": "Nabire",
        "ibukota": "Nabire",
        "k_bsni": "NAB"
      },
      {
        "id": 490,
        "provinsi_id": 33,
        "kabupaten_kota": "Nduga",
        "ibukota": "Kenyam",
        "k_bsni": "KYM"
      },
      {
        "id": 491,
        "provinsi_id": 33,
        "kabupaten_kota": "Paniai",
        "ibukota": "Enarotali",
        "k_bsni": "ERT"
      },
      {
        "id": 492,
        "provinsi_id": 33,
        "kabupaten_kota": "Pegunungan Bintang",
        "ibukota": "Oksibil",
        "k_bsni": "OSB"
      },
      {
        "id": 493,
        "provinsi_id": 33,
        "kabupaten_kota": "Puncak",
        "ibukota": "Ilaga",
        "k_bsni": "ILG"
      },
      {
        "id": 494,
        "provinsi_id": 33,
        "kabupaten_kota": "Puncak Jaya",
        "ibukota": "Mulia",
        "k_bsni": "MUL"
      },
      {
        "id": 495,
        "provinsi_id": 33,
        "kabupaten_kota": "Sarmi",
        "ibukota": "Sarmi",
        "k_bsni": "SMI"
      },
      {
        "id": 496,
        "provinsi_id": 33,
        "kabupaten_kota": "Supiori",
        "ibukota": "Sorendiweri",
        "k_bsni": "SRW"
      },
      {
        "id": 497,
        "provinsi_id": 33,
        "kabupaten_kota": "Tolikara",
        "ibukota": "Karubaga",
        "k_bsni": "KBG"
      },
      {
        "id": 498,
        "provinsi_id": 33,
        "kabupaten_kota": "Waropen",
        "ibukota": "Botawa",
        "k_bsni": "BTW"
      },
      {
        "id": 499,
        "provinsi_id": 33,
        "kabupaten_kota": "Yahukimo",
        "ibukota": "Sumohai",
        "k_bsni": "SMH"
      },
      {
        "id": 500,
        "provinsi_id": 33,
        "kabupaten_kota": "Yalimo",
        "ibukota": "Elelim",
        "k_bsni": "ELL"
      },
      {
        "id": 501,
        "provinsi_id": 33,
        "kabupaten_kota": "Kota Jayapura",
        "ibukota": "Jayapura",
        "k_bsni": "JAP"
      },
      {
        "id": 502,
        "provinsi_id": 34,
        "kabupaten_kota": "Fakfak",
        "ibukota": "Fak Fak",
        "k_bsni": "FFK"
      },
      {
        "id": 503,
        "provinsi_id": 34,
        "kabupaten_kota": "Kaimana",
        "ibukota": "Kaimana",
        "k_bsni": "KMN"
      },
      {
        "id": 504,
        "provinsi_id": 34,
        "kabupaten_kota": "Manokwari",
        "ibukota": "Manokwari",
        "k_bsni": "MNK"
      },
      {
        "id": 505,
        "provinsi_id": 34,
        "kabupaten_kota": "Manokwari Selatan",
        "ibukota": "Ransiki",
        "k_bsni": "RNK"
      },
      {
        "id": 506,
        "provinsi_id": 34,
        "kabupaten_kota": "Maybrat",
        "ibukota": "Aifat",
        "k_bsni": "AFT"
      },
      {
        "id": 507,
        "provinsi_id": 34,
        "kabupaten_kota": "Pegunungan Arfak",
        "ibukota": "Anggi",
        "k_bsni": "ANG"
      },
      {
        "id": 508,
        "provinsi_id": 34,
        "kabupaten_kota": "Raja Ampat",
        "ibukota": "Waisai",
        "k_bsni": "WAS"
      },
      {
        "id": 509,
        "provinsi_id": 34,
        "kabupaten_kota": "Sorong",
        "ibukota": "Aimas",
        "k_bsni": "AMS"
      },
      {
        "id": 510,
        "provinsi_id": 34,
        "kabupaten_kota": "Sorong Selatan",
        "ibukota": "Teminabuan",
        "k_bsni": "TMB"
      },
      {
        "id": 511,
        "provinsi_id": 34,
        "kabupaten_kota": "Tambrauw",
        "ibukota": "Fef",
        "k_bsni": "FEF"
      },
      {
        "id": 512,
        "provinsi_id": 34,
        "kabupaten_kota": "Teluk Bintuni",
        "ibukota": "Bintuni",
        "k_bsni": "BTI"
      },
      {
        "id": 513,
        "provinsi_id": 34,
        "kabupaten_kota": "Teluk Wondama",
        "ibukota": "Rasiei",
        "k_bsni": "RAS"
      },
      {
        "id": 514,
        "provinsi_id": 34,
        "kabupaten_kota": "Kota Sorong",
        "ibukota": "Sorong",
        "k_bsni": "SON"
      }
    ]

    let result = []

      list.forEach((data) => {
        data.createdAt = new Date()
        data.updatedAt = new Date()
        result.push(data)
      })
      

      await queryInterface.bulkInsert('Cities', result, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
