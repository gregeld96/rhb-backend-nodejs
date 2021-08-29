'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let list = [
      {
        "id": 80001,
        "kecamatan_id": 6840,
        "kelurahan": "Sentul",
        "kd_pos": 99582
      },
      {
        "id": 80002,
        "kecamatan_id": 6840,
        "kelurahan": "Suron",
        "kd_pos": 99582
      },
      {
        "id": 80003,
        "kecamatan_id": 6841,
        "kelurahan": "Hereapini (Heriapini)",
        "kd_pos": 99582
      },
      {
        "id": 80004,
        "kecamatan_id": 6841,
        "kelurahan": "Hoet",
        "kd_pos": 99582
      },
      {
        "id": 80005,
        "kecamatan_id": 6841,
        "kelurahan": "Homboki",
        "kd_pos": 99582
      },
      {
        "id": 80006,
        "kecamatan_id": 6841,
        "kelurahan": "Kabukal",
        "kd_pos": 99582
      },
      {
        "id": 80007,
        "kecamatan_id": 6841,
        "kelurahan": "Kinkun",
        "kd_pos": 99582
      },
      {
        "id": 80008,
        "kecamatan_id": 6841,
        "kelurahan": "Menetsing",
        "kd_pos": 99582
      },
      {
        "id": 80009,
        "kecamatan_id": 6841,
        "kelurahan": "Muhumu",
        "kd_pos": 99582
      },
      {
        "id": 80010,
        "kecamatan_id": 6841,
        "kelurahan": "Nelisa",
        "kd_pos": 99582
      },
      {
        "id": 80011,
        "kecamatan_id": 6841,
        "kelurahan": "Ohena",
        "kd_pos": 99582
      },
      {
        "id": 80012,
        "kecamatan_id": 6841,
        "kelurahan": "Pelentum (Palentum)",
        "kd_pos": 99582
      },
      {
        "id": 80013,
        "kecamatan_id": 6841,
        "kelurahan": "Pue",
        "kd_pos": 99582
      },
      {
        "id": 80014,
        "kecamatan_id": 6842,
        "kelurahan": "Dindok",
        "kd_pos": 99578
      },
      {
        "id": 80015,
        "kecamatan_id": 6842,
        "kelurahan": "Hilipuk",
        "kd_pos": 99578
      },
      {
        "id": 80016,
        "kecamatan_id": 6842,
        "kelurahan": "Homidipmu",
        "kd_pos": 99578
      },
      {
        "id": 80017,
        "kecamatan_id": 6842,
        "kelurahan": "Kini",
        "kd_pos": 99578
      },
      {
        "id": 80018,
        "kecamatan_id": 6842,
        "kelurahan": "Sohondipmu",
        "kd_pos": 99578
      },
      {
        "id": 80019,
        "kecamatan_id": 6842,
        "kelurahan": "Yamin",
        "kd_pos": 99578
      },
      {
        "id": 80020,
        "kecamatan_id": 6842,
        "kelurahan": "Yaruhuk",
        "kd_pos": 99578
      },
      {
        "id": 80021,
        "kecamatan_id": 6843,
        "kelurahan": "Dugumhad",
        "kd_pos": 99571
      },
      {
        "id": 80022,
        "kecamatan_id": 6843,
        "kelurahan": "Hogio Dua / II",
        "kd_pos": 99571
      },
      {
        "id": 80023,
        "kecamatan_id": 6843,
        "kelurahan": "Hogio Satu / I",
        "kd_pos": 99571
      },
      {
        "id": 80024,
        "kecamatan_id": 6843,
        "kelurahan": "Leleak",
        "kd_pos": 99571
      },
      {
        "id": 80025,
        "kecamatan_id": 6843,
        "kelurahan": "Paima",
        "kd_pos": 99571
      },
      {
        "id": 80026,
        "kecamatan_id": 6843,
        "kelurahan": "Sengsenagaik",
        "kd_pos": 99571
      },
      {
        "id": 80027,
        "kecamatan_id": 6843,
        "kelurahan": "Sipnidipmu",
        "kd_pos": 99571
      },
      {
        "id": 80028,
        "kecamatan_id": 6843,
        "kelurahan": "Subsal",
        "kd_pos": 99571
      },
      {
        "id": 80029,
        "kecamatan_id": 6844,
        "kelurahan": "Bineleruk",
        "kd_pos": 99578
      },
      {
        "id": 80030,
        "kecamatan_id": 6844,
        "kelurahan": "Danggema",
        "kd_pos": 99578
      },
      {
        "id": 80031,
        "kecamatan_id": 6844,
        "kelurahan": "Holuwon (Holuon)",
        "kd_pos": 99578
      },
      {
        "id": 80032,
        "kecamatan_id": 6844,
        "kelurahan": "Sia",
        "kd_pos": 99578
      },
      {
        "id": 80033,
        "kecamatan_id": 6844,
        "kelurahan": "Sohonggik",
        "kd_pos": 99578
      },
      {
        "id": 80034,
        "kecamatan_id": 6844,
        "kelurahan": "Sosi",
        "kd_pos": 99578
      },
      {
        "id": 80035,
        "kecamatan_id": 6844,
        "kelurahan": "Weni",
        "kd_pos": 99578
      },
      {
        "id": 80036,
        "kecamatan_id": 6845,
        "kelurahan": "Bahbolma",
        "kd_pos": 99578
      },
      {
        "id": 80037,
        "kecamatan_id": 6845,
        "kelurahan": "Buahun",
        "kd_pos": 99578
      },
      {
        "id": 80038,
        "kecamatan_id": 6845,
        "kelurahan": "Domul",
        "kd_pos": 99578
      },
      {
        "id": 80039,
        "kecamatan_id": 6845,
        "kelurahan": "Kabianggama",
        "kd_pos": 99578
      },
      {
        "id": 80040,
        "kecamatan_id": 6845,
        "kelurahan": "Sohal",
        "kd_pos": 99578
      },
      {
        "id": 80041,
        "kecamatan_id": 6845,
        "kelurahan": "Sohobma",
        "kd_pos": 99578
      },
      {
        "id": 80042,
        "kecamatan_id": 6845,
        "kelurahan": "Subayo",
        "kd_pos": 99578
      },
      {
        "id": 80043,
        "kecamatan_id": 6846,
        "kelurahan": "Alhai",
        "kd_pos": 99571
      },
      {
        "id": 80044,
        "kecamatan_id": 6846,
        "kelurahan": "Hombesaloma",
        "kd_pos": 99571
      },
      {
        "id": 80045,
        "kecamatan_id": 6846,
        "kelurahan": "Kayo",
        "kd_pos": 99571
      },
      {
        "id": 80046,
        "kecamatan_id": 6846,
        "kelurahan": "Molama",
        "kd_pos": 99571
      },
      {
        "id": 80047,
        "kecamatan_id": 6846,
        "kelurahan": "Sebu",
        "kd_pos": 99571
      },
      {
        "id": 80048,
        "kecamatan_id": 6846,
        "kelurahan": "Uase",
        "kd_pos": 99571
      },
      {
        "id": 80049,
        "kecamatan_id": 6846,
        "kelurahan": "Walet",
        "kd_pos": 99571
      },
      {
        "id": 80050,
        "kecamatan_id": 6847,
        "kelurahan": "Kalpok",
        "kd_pos": 99571
      },
      {
        "id": 80051,
        "kecamatan_id": 6847,
        "kelurahan": "Kona (Konda)",
        "kd_pos": 99582
      },
      {
        "id": 80052,
        "kecamatan_id": 6847,
        "kelurahan": "Kugun",
        "kd_pos": 99571
      },
      {
        "id": 80053,
        "kecamatan_id": 6847,
        "kelurahan": "Seklak",
        "kd_pos": 99571
      },
      {
        "id": 80054,
        "kecamatan_id": 6847,
        "kelurahan": "Wetmuk",
        "kd_pos": 99571
      },
      {
        "id": 80055,
        "kecamatan_id": 6848,
        "kelurahan": "Amdua",
        "kd_pos": 99578
      },
      {
        "id": 80056,
        "kecamatan_id": 6848,
        "kelurahan": "Basal",
        "kd_pos": 99578
      },
      {
        "id": 80057,
        "kecamatan_id": 6848,
        "kelurahan": "Batkuk",
        "kd_pos": 99578
      },
      {
        "id": 80058,
        "kecamatan_id": 6848,
        "kelurahan": "Dagi",
        "kd_pos": 99578
      },
      {
        "id": 80059,
        "kecamatan_id": 6848,
        "kelurahan": "Dildau",
        "kd_pos": 99578
      },
      {
        "id": 80060,
        "kecamatan_id": 6848,
        "kelurahan": "Koropun (Korupun)",
        "kd_pos": 99578
      },
      {
        "id": 80061,
        "kecamatan_id": 6848,
        "kelurahan": "Maldua",
        "kd_pos": 99578
      },
      {
        "id": 80062,
        "kecamatan_id": 6848,
        "kelurahan": "Moo",
        "kd_pos": 99578
      },
      {
        "id": 80063,
        "kecamatan_id": 6848,
        "kelurahan": "Morome",
        "kd_pos": 99578
      },
      {
        "id": 80064,
        "kecamatan_id": 6848,
        "kelurahan": "Somsek",
        "kd_pos": 99578
      },
      {
        "id": 80065,
        "kecamatan_id": 6848,
        "kelurahan": "Wemin",
        "kd_pos": 99578
      },
      {
        "id": 80066,
        "kecamatan_id": 6848,
        "kelurahan": "Yamdua",
        "kd_pos": 99578
      },
      {
        "id": 80067,
        "kecamatan_id": 6849,
        "kelurahan": "Hombuka",
        "kd_pos": 99582
      },
      {
        "id": 80068,
        "kecamatan_id": 6849,
        "kelurahan": "Illion",
        "kd_pos": 99582
      },
      {
        "id": 80069,
        "kecamatan_id": 6849,
        "kelurahan": "Konosa",
        "kd_pos": 99582
      },
      {
        "id": 80070,
        "kecamatan_id": 6849,
        "kelurahan": "Kosarek",
        "kd_pos": 99582
      },
      {
        "id": 80071,
        "kecamatan_id": 6849,
        "kelurahan": "Mine",
        "kd_pos": 99582
      },
      {
        "id": 80072,
        "kecamatan_id": 6849,
        "kelurahan": "Nahomas",
        "kd_pos": 99582
      },
      {
        "id": 80073,
        "kecamatan_id": 6849,
        "kelurahan": "Silkom",
        "kd_pos": 99582
      },
      {
        "id": 80074,
        "kecamatan_id": 6849,
        "kelurahan": "Tiple",
        "kd_pos": 99582
      },
      {
        "id": 80075,
        "kecamatan_id": 6849,
        "kelurahan": "Uldam",
        "kd_pos": 99582
      },
      {
        "id": 80076,
        "kecamatan_id": 6849,
        "kelurahan": "Wahe",
        "kd_pos": 99582
      },
      {
        "id": 80077,
        "kecamatan_id": 6849,
        "kelurahan": "Wesaltek",
        "kd_pos": 99582
      },
      {
        "id": 80078,
        "kecamatan_id": 6850,
        "kelurahan": "Air Garam",
        "kd_pos": 99571
      },
      {
        "id": 80079,
        "kecamatan_id": 6850,
        "kelurahan": "Anjelma",
        "kd_pos": 99571
      },
      {
        "id": 80080,
        "kecamatan_id": 6850,
        "kelurahan": "Eroma",
        "kd_pos": 99571
      },
      {
        "id": 80081,
        "kecamatan_id": 6850,
        "kelurahan": "Esalien",
        "kd_pos": 99571
      },
      {
        "id": 80082,
        "kecamatan_id": 6850,
        "kelurahan": "Hesmat",
        "kd_pos": 99571
      },
      {
        "id": 80083,
        "kecamatan_id": 6850,
        "kelurahan": "Hihundes",
        "kd_pos": 99571
      },
      {
        "id": 80084,
        "kecamatan_id": 6850,
        "kelurahan": "Huglot",
        "kd_pos": 99571
      },
      {
        "id": 80085,
        "kecamatan_id": 6850,
        "kelurahan": "Huguma",
        "kd_pos": 99571
      },
      {
        "id": 80086,
        "kecamatan_id": 6850,
        "kelurahan": "Huken",
        "kd_pos": 99571
      },
      {
        "id": 80087,
        "kecamatan_id": 6850,
        "kelurahan": "Huluagaima",
        "kd_pos": 99571
      },
      {
        "id": 80088,
        "kecamatan_id": 6850,
        "kelurahan": "Ibiroma",
        "kd_pos": 99571
      },
      {
        "id": 80089,
        "kecamatan_id": 6850,
        "kelurahan": "Kilise",
        "kd_pos": 99571
      },
      {
        "id": 80090,
        "kecamatan_id": 6850,
        "kelurahan": "Kima",
        "kd_pos": 99571
      },
      {
        "id": 80091,
        "kecamatan_id": 6850,
        "kelurahan": "Lukulema",
        "kd_pos": 99571
      },
      {
        "id": 80092,
        "kecamatan_id": 6850,
        "kelurahan": "Obolma",
        "kd_pos": 99571
      },
      {
        "id": 80093,
        "kecamatan_id": 6850,
        "kelurahan": "Parela",
        "kd_pos": 99571
      },
      {
        "id": 80094,
        "kecamatan_id": 6850,
        "kelurahan": "Pusuaga",
        "kd_pos": 99571
      },
      {
        "id": 80095,
        "kecamatan_id": 6850,
        "kelurahan": "Soroh",
        "kd_pos": 99571
      },
      {
        "id": 80096,
        "kecamatan_id": 6850,
        "kelurahan": "Tukuarek",
        "kd_pos": 99571
      },
      {
        "id": 80097,
        "kecamatan_id": 6850,
        "kelurahan": "Wakunyama",
        "kd_pos": 99571
      },
      {
        "id": 80098,
        "kecamatan_id": 6850,
        "kelurahan": "Wanem",
        "kd_pos": 99571
      },
      {
        "id": 80099,
        "kecamatan_id": 6850,
        "kelurahan": "Wulik Punua",
        "kd_pos": 99571
      },
      {
        "id": 80100,
        "kecamatan_id": 6850,
        "kelurahan": "Yagarelo",
        "kd_pos": 99571
      },
      {
        "id": 80101,
        "kecamatan_id": 6851,
        "kelurahan": "Baluk",
        "kd_pos": 99578
      },
      {
        "id": 80102,
        "kecamatan_id": 6851,
        "kelurahan": "Debula",
        "kd_pos": 99578
      },
      {
        "id": 80103,
        "kecamatan_id": 6851,
        "kelurahan": "Kabulan",
        "kd_pos": 99578
      },
      {
        "id": 80104,
        "kecamatan_id": 6851,
        "kelurahan": "Kemligin",
        "kd_pos": 99578
      },
      {
        "id": 80105,
        "kecamatan_id": 6851,
        "kelurahan": "Kubuk Dua",
        "kd_pos": 99578
      },
      {
        "id": 80106,
        "kecamatan_id": 6851,
        "kelurahan": "Kwelemdua",
        "kd_pos": 99578
      },
      {
        "id": 80107,
        "kecamatan_id": 6851,
        "kelurahan": "Obis",
        "kd_pos": 99578
      },
      {
        "id": 80108,
        "kecamatan_id": 6851,
        "kelurahan": "Senayom",
        "kd_pos": 99578
      },
      {
        "id": 80109,
        "kecamatan_id": 6851,
        "kelurahan": "Sesepne",
        "kd_pos": 99578
      },
      {
        "id": 80110,
        "kecamatan_id": 6851,
        "kelurahan": "Yalidamon",
        "kd_pos": 99578
      },
      {
        "id": 80111,
        "kecamatan_id": 6852,
        "kelurahan": "Enggelasue",
        "kd_pos": 99578
      },
      {
        "id": 80112,
        "kecamatan_id": 6852,
        "kelurahan": "Husmo",
        "kd_pos": 99578
      },
      {
        "id": 80113,
        "kecamatan_id": 6852,
        "kelurahan": "Karelma",
        "kd_pos": 99578
      },
      {
        "id": 80114,
        "kecamatan_id": 6852,
        "kelurahan": "Kenkeni",
        "kd_pos": 99578
      },
      {
        "id": 80115,
        "kecamatan_id": 6852,
        "kelurahan": "Momenggama",
        "kd_pos": 99578
      },
      {
        "id": 80116,
        "kecamatan_id": 6852,
        "kelurahan": "Monin",
        "kd_pos": 99578
      },
      {
        "id": 80117,
        "kecamatan_id": 6852,
        "kelurahan": "Oakbisik",
        "kd_pos": 99578
      },
      {
        "id": 80118,
        "kecamatan_id": 6852,
        "kelurahan": "Silakma",
        "kd_pos": 99578
      },
      {
        "id": 80119,
        "kecamatan_id": 6852,
        "kelurahan": "Soamrin",
        "kd_pos": 99578
      },
      {
        "id": 80120,
        "kecamatan_id": 6852,
        "kelurahan": "Usabini",
        "kd_pos": 99578
      },
      {
        "id": 80121,
        "kecamatan_id": 6853,
        "kelurahan": "Alirji",
        "kd_pos": 99578
      },
      {
        "id": 80122,
        "kecamatan_id": 6853,
        "kelurahan": "Bebekle",
        "kd_pos": 99578
      },
      {
        "id": 80123,
        "kecamatan_id": 6853,
        "kelurahan": "Kap-Kap",
        "kd_pos": 99578
      },
      {
        "id": 80124,
        "kecamatan_id": 6853,
        "kelurahan": "Kirabuk",
        "kd_pos": 99578
      },
      {
        "id": 80125,
        "kecamatan_id": 6853,
        "kelurahan": "Langda",
        "kd_pos": 99578
      },
      {
        "id": 80126,
        "kecamatan_id": 6853,
        "kelurahan": "Laryi",
        "kd_pos": 99578
      },
      {
        "id": 80127,
        "kecamatan_id": 6853,
        "kelurahan": "Lukun",
        "kd_pos": 99578
      },
      {
        "id": 80128,
        "kecamatan_id": 6853,
        "kelurahan": "Wasumurji",
        "kd_pos": 99578
      },
      {
        "id": 80129,
        "kecamatan_id": 6853,
        "kelurahan": "Yolar",
        "kd_pos": 99578
      },
      {
        "id": 80130,
        "kecamatan_id": 6854,
        "kelurahan": "Bunde",
        "kd_pos": 99578
      },
      {
        "id": 80131,
        "kecamatan_id": 6854,
        "kelurahan": "Denema",
        "kd_pos": 99578
      },
      {
        "id": 80132,
        "kecamatan_id": 6854,
        "kelurahan": "Dinggila",
        "kd_pos": 99578
      },
      {
        "id": 80133,
        "kecamatan_id": 6854,
        "kelurahan": "Esalek",
        "kd_pos": 99578
      },
      {
        "id": 80134,
        "kecamatan_id": 6854,
        "kelurahan": "Lolat",
        "kd_pos": 99578
      },
      {
        "id": 80135,
        "kecamatan_id": 6854,
        "kelurahan": "Serahak",
        "kd_pos": 99578
      },
      {
        "id": 80136,
        "kecamatan_id": 6854,
        "kelurahan": "Wanim",
        "kd_pos": 99578
      },
      {
        "id": 80137,
        "kecamatan_id": 6854,
        "kelurahan": "Webile",
        "kd_pos": 99578
      },
      {
        "id": 80138,
        "kecamatan_id": 6855,
        "kelurahan": "Hendag",
        "kd_pos": 99571
      },
      {
        "id": 80139,
        "kecamatan_id": 6855,
        "kelurahan": "Herawe",
        "kd_pos": 99571
      },
      {
        "id": 80140,
        "kecamatan_id": 6855,
        "kelurahan": "Hulesi",
        "kd_pos": 99571
      },
      {
        "id": 80141,
        "kecamatan_id": 6855,
        "kelurahan": "Hunenima",
        "kd_pos": 99571
      },
      {
        "id": 80142,
        "kecamatan_id": 6855,
        "kelurahan": "Ilokomo",
        "kd_pos": 99571
      },
      {
        "id": 80143,
        "kecamatan_id": 6855,
        "kelurahan": "Itlay Wopi",
        "kd_pos": 99571
      },
      {
        "id": 80144,
        "kecamatan_id": 6855,
        "kelurahan": "Kosihun",
        "kd_pos": 99571
      },
      {
        "id": 80145,
        "kecamatan_id": 6855,
        "kelurahan": "Lugulmu",
        "kd_pos": 99571
      },
      {
        "id": 80146,
        "kecamatan_id": 6855,
        "kelurahan": "Nyikinen",
        "kd_pos": 99571
      },
      {
        "id": 80147,
        "kecamatan_id": 6855,
        "kelurahan": "Olomisang",
        "kd_pos": 99571
      },
      {
        "id": 80148,
        "kecamatan_id": 6855,
        "kelurahan": "Panyoke",
        "kd_pos": 99571
      },
      {
        "id": 80149,
        "kecamatan_id": 6855,
        "kelurahan": "Seima",
        "kd_pos": 99571
      },
      {
        "id": 80150,
        "kecamatan_id": 6855,
        "kelurahan": "Togoluk",
        "kd_pos": 99571
      },
      {
        "id": 80151,
        "kecamatan_id": 6855,
        "kelurahan": "Ugem",
        "kd_pos": 99571
      },
      {
        "id": 80152,
        "kecamatan_id": 6855,
        "kelurahan": "Userem",
        "kd_pos": 99571
      },
      {
        "id": 80153,
        "kecamatan_id": 6855,
        "kelurahan": "Wanesi",
        "kd_pos": 99571
      },
      {
        "id": 80154,
        "kecamatan_id": 6855,
        "kelurahan": "Wemasili",
        "kd_pos": 99571
      },
      {
        "id": 80155,
        "kecamatan_id": 6855,
        "kelurahan": "Wesangma",
        "kd_pos": 99571
      },
      {
        "id": 80156,
        "kecamatan_id": 6855,
        "kelurahan": "Wusagasem",
        "kd_pos": 99571
      },
      {
        "id": 80157,
        "kecamatan_id": 6855,
        "kelurahan": "Yuarima",
        "kd_pos": 99571
      },
      {
        "id": 80158,
        "kecamatan_id": 6856,
        "kelurahan": "Bue",
        "kd_pos": 99571
      },
      {
        "id": 80159,
        "kecamatan_id": 6856,
        "kelurahan": "Dekbok",
        "kd_pos": 99571
      },
      {
        "id": 80160,
        "kecamatan_id": 6856,
        "kelurahan": "Esaikma",
        "kd_pos": 99571
      },
      {
        "id": 80161,
        "kecamatan_id": 6856,
        "kelurahan": "Haletuk",
        "kd_pos": 99571
      },
      {
        "id": 80162,
        "kecamatan_id": 6856,
        "kelurahan": "Hendikma",
        "kd_pos": 99571
      },
      {
        "id": 80163,
        "kecamatan_id": 6856,
        "kelurahan": "Lidipmu",
        "kd_pos": 99571
      },
      {
        "id": 80164,
        "kecamatan_id": 6856,
        "kelurahan": "Sumegen",
        "kd_pos": 99571
      },
      {
        "id": 80165,
        "kecamatan_id": 6856,
        "kelurahan": "Usaregeik (Usaragek)",
        "kd_pos": 99571
      },
      {
        "id": 80166,
        "kecamatan_id": 6856,
        "kelurahan": "Weleheikma",
        "kd_pos": 99571
      },
      {
        "id": 80167,
        "kecamatan_id": 6856,
        "kelurahan": "Yeriko",
        "kd_pos": 99571
      },
      {
        "id": 80168,
        "kecamatan_id": 6857,
        "kelurahan": "Bolda",
        "kd_pos": 99582
      },
      {
        "id": 80169,
        "kecamatan_id": 6857,
        "kelurahan": "Cenderawasih",
        "kd_pos": 99582
      },
      {
        "id": 80170,
        "kecamatan_id": 6857,
        "kelurahan": "Emm",
        "kd_pos": 99582
      },
      {
        "id": 80171,
        "kecamatan_id": 6857,
        "kelurahan": "Hein",
        "kd_pos": 99582
      },
      {
        "id": 80172,
        "kecamatan_id": 6857,
        "kelurahan": "Imsekla",
        "kd_pos": 99582
      },
      {
        "id": 80173,
        "kecamatan_id": 6857,
        "kelurahan": "Luwemna",
        "kd_pos": 99582
      },
      {
        "id": 80174,
        "kecamatan_id": 6857,
        "kelurahan": "Manggona",
        "kd_pos": 99582
      },
      {
        "id": 80175,
        "kecamatan_id": 6857,
        "kelurahan": "Nalca",
        "kd_pos": 99582
      },
      {
        "id": 80176,
        "kecamatan_id": 6858,
        "kelurahan": "Babet",
        "kd_pos": 99578
      },
      {
        "id": 80177,
        "kecamatan_id": 6858,
        "kelurahan": "Hwealoma",
        "kd_pos": 99578
      },
      {
        "id": 80178,
        "kecamatan_id": 6858,
        "kelurahan": "Kahul",
        "kd_pos": 99578
      },
      {
        "id": 80179,
        "kecamatan_id": 6858,
        "kelurahan": "Liligan",
        "kd_pos": 99578
      },
      {
        "id": 80180,
        "kecamatan_id": 6858,
        "kelurahan": "Liligan II",
        "kd_pos": 99578
      },
      {
        "id": 80181,
        "kecamatan_id": 6858,
        "kelurahan": "Ninia",
        "kd_pos": 99578
      },
      {
        "id": 80182,
        "kecamatan_id": 6858,
        "kelurahan": "Niniahan",
        "kd_pos": 99578
      },
      {
        "id": 80183,
        "kecamatan_id": 6858,
        "kelurahan": "Sohwal",
        "kd_pos": 99578
      },
      {
        "id": 80184,
        "kecamatan_id": 6858,
        "kelurahan": "Waerek",
        "kd_pos": 99578
      },
      {
        "id": 80185,
        "kecamatan_id": 6858,
        "kelurahan": "Wahaik",
        "kd_pos": 99578
      },
      {
        "id": 80186,
        "kecamatan_id": 6859,
        "kelurahan": "Biu",
        "kd_pos": 99582
      },
      {
        "id": 80187,
        "kecamatan_id": 6859,
        "kelurahan": "Ikmu",
        "kd_pos": 99582
      },
      {
        "id": 80188,
        "kecamatan_id": 6859,
        "kelurahan": "Ilukdamon",
        "kd_pos": 99582
      },
      {
        "id": 80189,
        "kecamatan_id": 6859,
        "kelurahan": "Nipsan",
        "kd_pos": 99582
      },
      {
        "id": 80190,
        "kecamatan_id": 6859,
        "kelurahan": "Serengan",
        "kd_pos": 99582
      },
      {
        "id": 80191,
        "kecamatan_id": 6859,
        "kelurahan": "Tapla",
        "kd_pos": 99582
      },
      {
        "id": 80192,
        "kecamatan_id": 6859,
        "kelurahan": "Walmak",
        "kd_pos": 99582
      },
      {
        "id": 80193,
        "kecamatan_id": 6859,
        "kelurahan": "Yalmun",
        "kd_pos": 99582
      },
      {
        "id": 80194,
        "kecamatan_id": 6860,
        "kelurahan": "Busupa",
        "kd_pos": 99571
      },
      {
        "id": 80195,
        "kecamatan_id": 6860,
        "kelurahan": "Homhom",
        "kd_pos": 99571
      },
      {
        "id": 80196,
        "kecamatan_id": 6860,
        "kelurahan": "Jibak",
        "kd_pos": 99571
      },
      {
        "id": 80197,
        "kecamatan_id": 6860,
        "kelurahan": "Kwakenoro",
        "kd_pos": 99571
      },
      {
        "id": 80198,
        "kecamatan_id": 6860,
        "kelurahan": "Munu",
        "kd_pos": 99571
      },
      {
        "id": 80199,
        "kecamatan_id": 6860,
        "kelurahan": "Obio",
        "kd_pos": 99571
      },
      {
        "id": 80200,
        "kecamatan_id": 6860,
        "kelurahan": "Patin",
        "kd_pos": 99571
      },
      {
        "id": 80201,
        "kecamatan_id": 6860,
        "kelurahan": "Penigik",
        "kd_pos": 99571
      },
      {
        "id": 80202,
        "kecamatan_id": 6860,
        "kelurahan": "Pugun",
        "kd_pos": 99571
      },
      {
        "id": 80203,
        "kecamatan_id": 6860,
        "kelurahan": "Ujin",
        "kd_pos": 99571
      },
      {
        "id": 80204,
        "kecamatan_id": 6860,
        "kelurahan": "Wendame",
        "kd_pos": 99571
      },
      {
        "id": 80205,
        "kecamatan_id": 6860,
        "kelurahan": "Yagabo",
        "kd_pos": 99571
      },
      {
        "id": 80206,
        "kecamatan_id": 6860,
        "kelurahan": "Yahufa",
        "kd_pos": 99571
      },
      {
        "id": 80207,
        "kecamatan_id": 6861,
        "kelurahan": "Bineluk",
        "kd_pos": 99582
      },
      {
        "id": 80208,
        "kecamatan_id": 6861,
        "kelurahan": "Homtongo",
        "kd_pos": 99582
      },
      {
        "id": 80209,
        "kecamatan_id": 6861,
        "kelurahan": "Kemumanggen",
        "kd_pos": 99582
      },
      {
        "id": 80210,
        "kecamatan_id": 6861,
        "kelurahan": "Kolu",
        "kd_pos": 99582
      },
      {
        "id": 80211,
        "kecamatan_id": 6861,
        "kelurahan": "Kuni",
        "kd_pos": 99582
      },
      {
        "id": 80212,
        "kecamatan_id": 6861,
        "kelurahan": "Masahan",
        "kd_pos": 99582
      },
      {
        "id": 80213,
        "kecamatan_id": 6861,
        "kelurahan": "Panggema",
        "kd_pos": 99582
      },
      {
        "id": 80214,
        "kecamatan_id": 6861,
        "kelurahan": "Potenikma (Pontenikma)",
        "kd_pos": 99582
      },
      {
        "id": 80215,
        "kecamatan_id": 6861,
        "kelurahan": "Susek",
        "kd_pos": 99582
      },
      {
        "id": 80216,
        "kecamatan_id": 6861,
        "kelurahan": "Tonggoi",
        "kd_pos": 99582
      },
      {
        "id": 80217,
        "kecamatan_id": 6861,
        "kelurahan": "Tukam",
        "kd_pos": 99582
      },
      {
        "id": 80218,
        "kecamatan_id": 6861,
        "kelurahan": "Weresili",
        "kd_pos": 99582
      },
      {
        "id": 80219,
        "kecamatan_id": 6861,
        "kelurahan": "Yangkali",
        "kd_pos": 99582
      },
      {
        "id": 80220,
        "kecamatan_id": 6862,
        "kelurahan": "Lemoko",
        "kd_pos": 99571
      },
      {
        "id": 80221,
        "kecamatan_id": 6862,
        "kelurahan": "Lowet",
        "kd_pos": 99571
      },
      {
        "id": 80222,
        "kecamatan_id": 6862,
        "kelurahan": "Pasema",
        "kd_pos": 99571
      },
      {
        "id": 80223,
        "kecamatan_id": 6862,
        "kelurahan": "Pupi",
        "kd_pos": 99571
      },
      {
        "id": 80224,
        "kecamatan_id": 6862,
        "kelurahan": "Sengangge",
        "kd_pos": 99571
      },
      {
        "id": 80225,
        "kecamatan_id": 6862,
        "kelurahan": "Wea",
        "kd_pos": 99571
      },
      {
        "id": 80226,
        "kecamatan_id": 6862,
        "kelurahan": "Wulin",
        "kd_pos": 99571
      },
      {
        "id": 80227,
        "kecamatan_id": 6863,
        "kelurahan": "Helapilik",
        "kd_pos": 99582
      },
      {
        "id": 80228,
        "kecamatan_id": 6863,
        "kelurahan": "Hiklahin",
        "kd_pos": 99582
      },
      {
        "id": 80229,
        "kecamatan_id": 6863,
        "kelurahan": "Huhulpunu",
        "kd_pos": 99582
      },
      {
        "id": 80230,
        "kecamatan_id": 6863,
        "kelurahan": "Lirutek",
        "kd_pos": 99582
      },
      {
        "id": 80231,
        "kecamatan_id": 6863,
        "kelurahan": "Piliam",
        "kd_pos": 99582
      },
      {
        "id": 80232,
        "kecamatan_id": 6863,
        "kelurahan": "Pontempilik (Pontenpelek)",
        "kd_pos": 99582
      },
      {
        "id": 80233,
        "kecamatan_id": 6863,
        "kelurahan": "Pronggoli",
        "kd_pos": 99582
      },
      {
        "id": 80234,
        "kecamatan_id": 6863,
        "kelurahan": "Siwikma",
        "kd_pos": 99582
      },
      {
        "id": 80235,
        "kecamatan_id": 6864,
        "kelurahan": "Bako",
        "kd_pos": 99582
      },
      {
        "id": 80236,
        "kecamatan_id": 6864,
        "kelurahan": "Balsek",
        "kd_pos": 99582
      },
      {
        "id": 80237,
        "kecamatan_id": 6864,
        "kelurahan": "Baru",
        "kd_pos": 99582
      },
      {
        "id": 80238,
        "kecamatan_id": 6864,
        "kelurahan": "Famek",
        "kd_pos": 99582
      },
      {
        "id": 80239,
        "kecamatan_id": 6864,
        "kelurahan": "Kasen",
        "kd_pos": 99582
      },
      {
        "id": 80240,
        "kecamatan_id": 6864,
        "kelurahan": "Manbolak",
        "kd_pos": 99582
      },
      {
        "id": 80241,
        "kecamatan_id": 6864,
        "kelurahan": "Puldama",
        "kd_pos": 99582
      },
      {
        "id": 80242,
        "kecamatan_id": 6864,
        "kelurahan": "Semlu",
        "kd_pos": 99582
      },
      {
        "id": 80243,
        "kecamatan_id": 6865,
        "kelurahan": "Asotapo",
        "kd_pos": 99571
      },
      {
        "id": 80244,
        "kecamatan_id": 6865,
        "kelurahan": "Haleroma",
        "kd_pos": 99571
      },
      {
        "id": 80245,
        "kecamatan_id": 6865,
        "kelurahan": "Hirin",
        "kd_pos": 99571
      },
      {
        "id": 80246,
        "kecamatan_id": 6865,
        "kelurahan": "Hugilokon",
        "kd_pos": 99571
      },
      {
        "id": 80247,
        "kecamatan_id": 6865,
        "kelurahan": "Ison",
        "kd_pos": 99571
      },
      {
        "id": 80248,
        "kecamatan_id": 6865,
        "kelurahan": "Muke",
        "kd_pos": 99571
      },
      {
        "id": 80249,
        "kecamatan_id": 6865,
        "kelurahan": "Notnarek",
        "kd_pos": 99571
      },
      {
        "id": 80250,
        "kecamatan_id": 6865,
        "kelurahan": "Pona",
        "kd_pos": 99571
      },
      {
        "id": 80251,
        "kecamatan_id": 6865,
        "kelurahan": "Samenage",
        "kd_pos": 99571
      },
      {
        "id": 80252,
        "kecamatan_id": 6866,
        "kelurahan": "Asok",
        "kd_pos": 99578
      },
      {
        "id": 80253,
        "kecamatan_id": 6866,
        "kelurahan": "Bera",
        "kd_pos": 99578
      },
      {
        "id": 80254,
        "kecamatan_id": 6866,
        "kelurahan": "Dolbol",
        "kd_pos": 99578
      },
      {
        "id": 80255,
        "kecamatan_id": 6866,
        "kelurahan": "Ejub",
        "kd_pos": 99578
      },
      {
        "id": 80256,
        "kecamatan_id": 6866,
        "kelurahan": "Hemuka",
        "kd_pos": 99578
      },
      {
        "id": 80257,
        "kecamatan_id": 6866,
        "kelurahan": "Holdomen",
        "kd_pos": 99578
      },
      {
        "id": 80258,
        "kecamatan_id": 6866,
        "kelurahan": "Horomon",
        "kd_pos": 99578
      },
      {
        "id": 80259,
        "kecamatan_id": 6866,
        "kelurahan": "Makero",
        "kd_pos": 99578
      },
      {
        "id": 80260,
        "kecamatan_id": 6866,
        "kelurahan": "Megom (Megon)",
        "kd_pos": 99578
      },
      {
        "id": 80261,
        "kecamatan_id": 6866,
        "kelurahan": "Mekdua",
        "kd_pos": 99578
      },
      {
        "id": 80262,
        "kecamatan_id": 6866,
        "kelurahan": "Monamna",
        "kd_pos": 99578
      },
      {
        "id": 80263,
        "kecamatan_id": 6866,
        "kelurahan": "Mondon",
        "kd_pos": 99578
      },
      {
        "id": 80264,
        "kecamatan_id": 6866,
        "kelurahan": "Orisin",
        "kd_pos": 99578
      },
      {
        "id": 80265,
        "kecamatan_id": 6866,
        "kelurahan": "Phoy",
        "kd_pos": 99578
      },
      {
        "id": 80266,
        "kecamatan_id": 6866,
        "kelurahan": "Sela",
        "kd_pos": 99578
      },
      {
        "id": 80267,
        "kecamatan_id": 6866,
        "kelurahan": "Sulda",
        "kd_pos": 99578
      },
      {
        "id": 80268,
        "kecamatan_id": 6867,
        "kelurahan": "Burupmakot",
        "kd_pos": 99571
      },
      {
        "id": 80269,
        "kecamatan_id": 6867,
        "kelurahan": "Koper",
        "kd_pos": 99571
      },
      {
        "id": 80270,
        "kecamatan_id": 6867,
        "kelurahan": "Moruf",
        "kd_pos": 99571
      },
      {
        "id": 80271,
        "kecamatan_id": 6867,
        "kelurahan": "Mosomduba",
        "kd_pos": 99571
      },
      {
        "id": 80272,
        "kecamatan_id": 6867,
        "kelurahan": "Samboga",
        "kd_pos": 99571
      },
      {
        "id": 80273,
        "kecamatan_id": 6867,
        "kelurahan": "Seredela",
        "kd_pos": 99571
      },
      {
        "id": 80274,
        "kecamatan_id": 6867,
        "kelurahan": "Teret",
        "kd_pos": 99571
      },
      {
        "id": 80275,
        "kecamatan_id": 6867,
        "kelurahan": "Tokuni",
        "kd_pos": 99571
      },
      {
        "id": 80276,
        "kecamatan_id": 6867,
        "kelurahan": "Yasip",
        "kd_pos": 99571
      },
      {
        "id": 80277,
        "kecamatan_id": 6868,
        "kelurahan": "Asia",
        "kd_pos": 99571
      },
      {
        "id": 80278,
        "kecamatan_id": 6868,
        "kelurahan": "Eksa",
        "kd_pos": 99571
      },
      {
        "id": 80279,
        "kecamatan_id": 6868,
        "kelurahan": "Eremnahom",
        "kd_pos": 99571
      },
      {
        "id": 80280,
        "kecamatan_id": 6868,
        "kelurahan": "Fabe",
        "kd_pos": 99571
      },
      {
        "id": 80281,
        "kecamatan_id": 6868,
        "kelurahan": "Hwesalemo",
        "kd_pos": 99571
      },
      {
        "id": 80282,
        "kecamatan_id": 6868,
        "kelurahan": "Momnowok (Momnowak)",
        "kd_pos": 99571
      },
      {
        "id": 80283,
        "kecamatan_id": 6868,
        "kelurahan": "Nekilei",
        "kd_pos": 99571
      },
      {
        "id": 80284,
        "kecamatan_id": 6868,
        "kelurahan": "Pinda",
        "kd_pos": 99571
      },
      {
        "id": 80285,
        "kecamatan_id": 6868,
        "kelurahan": "Sagaduk",
        "kd_pos": 99571
      },
      {
        "id": 80286,
        "kecamatan_id": 6868,
        "kelurahan": "Sebin",
        "kd_pos": 99571
      },
      {
        "id": 80287,
        "kecamatan_id": 6868,
        "kelurahan": "Sianele",
        "kd_pos": 99571
      },
      {
        "id": 80288,
        "kecamatan_id": 6868,
        "kelurahan": "Silimo",
        "kd_pos": 99571
      },
      {
        "id": 80289,
        "kecamatan_id": 6868,
        "kelurahan": "Siloma",
        "kd_pos": 99571
      },
      {
        "id": 80290,
        "kecamatan_id": 6868,
        "kelurahan": "Silon",
        "kd_pos": 99571
      },
      {
        "id": 80291,
        "kecamatan_id": 6868,
        "kelurahan": "Sodule",
        "kd_pos": 99571
      },
      {
        "id": 80292,
        "kecamatan_id": 6868,
        "kelurahan": "Suet",
        "kd_pos": 99571
      },
      {
        "id": 80293,
        "kecamatan_id": 6868,
        "kelurahan": "Suok",
        "kd_pos": 99571
      },
      {
        "id": 80294,
        "kecamatan_id": 6868,
        "kelurahan": "Walkruk",
        "kd_pos": 99571
      },
      {
        "id": 80295,
        "kecamatan_id": 6868,
        "kelurahan": "Weakma",
        "kd_pos": 99571
      },
      {
        "id": 80296,
        "kecamatan_id": 6868,
        "kelurahan": "Wubialo",
        "kd_pos": 99571
      },
      {
        "id": 80297,
        "kecamatan_id": 6869,
        "kelurahan": "Hepinis",
        "kd_pos": 99571
      },
      {
        "id": 80298,
        "kecamatan_id": 6869,
        "kelurahan": "Nilen",
        "kd_pos": 99571
      },
      {
        "id": 80299,
        "kecamatan_id": 6869,
        "kelurahan": "Soba",
        "kd_pos": 99571
      },
      {
        "id": 80300,
        "kecamatan_id": 6869,
        "kelurahan": "Surukmu",
        "kd_pos": 99571
      },
      {
        "id": 80301,
        "kecamatan_id": 6869,
        "kelurahan": "Tanda",
        "kd_pos": 99571
      },
      {
        "id": 80302,
        "kecamatan_id": 6869,
        "kelurahan": "Ugulintipmu",
        "kd_pos": 99571
      },
      {
        "id": 80303,
        "kecamatan_id": 6870,
        "kelurahan": "Balinggama",
        "kd_pos": 99578
      },
      {
        "id": 80304,
        "kecamatan_id": 6870,
        "kelurahan": "Benembia",
        "kd_pos": 99578
      },
      {
        "id": 80305,
        "kecamatan_id": 6870,
        "kelurahan": "Dohong",
        "kd_pos": 99578
      },
      {
        "id": 80306,
        "kecamatan_id": 6870,
        "kelurahan": "Hamik",
        "kd_pos": 99578
      },
      {
        "id": 80307,
        "kecamatan_id": 6870,
        "kelurahan": "Hubik",
        "kd_pos": 99578
      },
      {
        "id": 80308,
        "kecamatan_id": 6870,
        "kelurahan": "Kulahaik",
        "kd_pos": 99578
      },
      {
        "id": 80309,
        "kecamatan_id": 6870,
        "kelurahan": "Puahuun",
        "kd_pos": 99578
      },
      {
        "id": 80310,
        "kecamatan_id": 6870,
        "kelurahan": "Sele",
        "kd_pos": 99578
      },
      {
        "id": 80311,
        "kecamatan_id": 6870,
        "kelurahan": "Silak Pahabol",
        "kd_pos": 99578
      },
      {
        "id": 80312,
        "kecamatan_id": 6870,
        "kelurahan": "Simbuk",
        "kd_pos": 99578
      },
      {
        "id": 80313,
        "kecamatan_id": 6870,
        "kelurahan": "Sobaham",
        "kd_pos": 99578
      },
      {
        "id": 80314,
        "kecamatan_id": 6870,
        "kelurahan": "Yabi (Jabi)",
        "kd_pos": 99578
      },
      {
        "id": 80315,
        "kecamatan_id": 6870,
        "kelurahan": "Yalisomon",
        "kd_pos": 99578
      },
      {
        "id": 80316,
        "kecamatan_id": 6871,
        "kelurahan": "Banga",
        "kd_pos": 99578
      },
      {
        "id": 80317,
        "kecamatan_id": 6871,
        "kelurahan": "Erim",
        "kd_pos": 99578
      },
      {
        "id": 80318,
        "kecamatan_id": 6871,
        "kelurahan": "Kwelena",
        "kd_pos": 99578
      },
      {
        "id": 80319,
        "kecamatan_id": 6871,
        "kelurahan": "Musan",
        "kd_pos": 99578
      },
      {
        "id": 80320,
        "kecamatan_id": 6871,
        "kelurahan": "Salbi",
        "kd_pos": 99578
      },
      {
        "id": 80321,
        "kecamatan_id": 6871,
        "kelurahan": "Singokla",
        "kd_pos": 99578
      },
      {
        "id": 80322,
        "kecamatan_id": 6871,
        "kelurahan": "Soline",
        "kd_pos": 99578
      },
      {
        "id": 80323,
        "kecamatan_id": 6871,
        "kelurahan": "Weawen (Weanem)",
        "kd_pos": 99578
      },
      {
        "id": 80324,
        "kecamatan_id": 6872,
        "kelurahan": "Boor",
        "kd_pos": 99571
      },
      {
        "id": 80325,
        "kecamatan_id": 6872,
        "kelurahan": "Hunisi",
        "kd_pos": 99571
      },
      {
        "id": 80326,
        "kecamatan_id": 6872,
        "kelurahan": "Jibuk",
        "kd_pos": 99571
      },
      {
        "id": 80327,
        "kecamatan_id": 6872,
        "kelurahan": "Kwiriside",
        "kd_pos": 99571
      },
      {
        "id": 80328,
        "kecamatan_id": 6872,
        "kelurahan": "Maku",
        "kd_pos": 99571
      },
      {
        "id": 80329,
        "kecamatan_id": 6872,
        "kelurahan": "Muara Balim",
        "kd_pos": 99571
      },
      {
        "id": 80330,
        "kecamatan_id": 6872,
        "kelurahan": "Obokain",
        "kd_pos": 99571
      },
      {
        "id": 80331,
        "kecamatan_id": 6872,
        "kelurahan": "Sumo",
        "kd_pos": 99571
      },
      {
        "id": 80332,
        "kecamatan_id": 6872,
        "kelurahan": "Uam",
        "kd_pos": 99571
      },
      {
        "id": 80333,
        "kecamatan_id": 6872,
        "kelurahan": "Wenapong",
        "kd_pos": 99571
      },
      {
        "id": 80334,
        "kecamatan_id": 6872,
        "kelurahan": "Wirilu",
        "kd_pos": 99571
      },
      {
        "id": 80335,
        "kecamatan_id": 6873,
        "kelurahan": "Binalkon",
        "kd_pos": 99578
      },
      {
        "id": 80336,
        "kecamatan_id": 6873,
        "kelurahan": "Bongkok",
        "kd_pos": 99578
      },
      {
        "id": 80337,
        "kecamatan_id": 6873,
        "kelurahan": "Bulbul",
        "kd_pos": 99578
      },
      {
        "id": 80338,
        "kecamatan_id": 6873,
        "kelurahan": "Dirik",
        "kd_pos": 99578
      },
      {
        "id": 80339,
        "kecamatan_id": 6873,
        "kelurahan": "Masumkon",
        "kd_pos": 99578
      },
      {
        "id": 80340,
        "kecamatan_id": 6873,
        "kelurahan": "Suntamon",
        "kd_pos": 99578
      },
      {
        "id": 80341,
        "kecamatan_id": 6873,
        "kelurahan": "Tapasik",
        "kd_pos": 99578
      },
      {
        "id": 80342,
        "kecamatan_id": 6873,
        "kelurahan": "Yup",
        "kd_pos": 99578
      },
      {
        "id": 80343,
        "kecamatan_id": 6874,
        "kelurahan": "Gofa",
        "kd_pos": 99571
      },
      {
        "id": 80344,
        "kecamatan_id": 6874,
        "kelurahan": "Jinusugu",
        "kd_pos": 99571
      },
      {
        "id": 80345,
        "kecamatan_id": 6874,
        "kelurahan": "Rentis",
        "kd_pos": 99571
      },
      {
        "id": 80346,
        "kecamatan_id": 6874,
        "kelurahan": "Senipan",
        "kd_pos": 99571
      },
      {
        "id": 80347,
        "kecamatan_id": 6874,
        "kelurahan": "Solok",
        "kd_pos": 99571
      },
      {
        "id": 80348,
        "kecamatan_id": 6874,
        "kelurahan": "Worapi",
        "kd_pos": 99571
      },
      {
        "id": 80349,
        "kecamatan_id": 6874,
        "kelurahan": "Yosua",
        "kd_pos": 99571
      },
      {
        "id": 80350,
        "kecamatan_id": 6875,
        "kelurahan": "Bari",
        "kd_pos": 99582
      },
      {
        "id": 80351,
        "kecamatan_id": 6875,
        "kelurahan": "Kikila",
        "kd_pos": 99582
      },
      {
        "id": 80352,
        "kecamatan_id": 6875,
        "kelurahan": "Lelambo",
        "kd_pos": 99582
      },
      {
        "id": 80353,
        "kecamatan_id": 6875,
        "kelurahan": "Lelambo Dua (II)",
        "kd_pos": 99582
      },
      {
        "id": 80354,
        "kecamatan_id": 6875,
        "kelurahan": "Lulum",
        "kd_pos": 99582
      },
      {
        "id": 80355,
        "kecamatan_id": 6875,
        "kelurahan": "Paleroman",
        "kd_pos": 99582
      },
      {
        "id": 80356,
        "kecamatan_id": 6875,
        "kelurahan": "Palukae",
        "kd_pos": 99582
      },
      {
        "id": 80357,
        "kecamatan_id": 6875,
        "kelurahan": "Tibul (Timbul)",
        "kd_pos": 99582
      },
      {
        "id": 80358,
        "kecamatan_id": 6875,
        "kelurahan": "Wubri",
        "kd_pos": 99582
      },
      {
        "id": 80359,
        "kecamatan_id": 6876,
        "kelurahan": "Aleleng",
        "kd_pos": 99571
      },
      {
        "id": 80360,
        "kecamatan_id": 6876,
        "kelurahan": "Helo",
        "kd_pos": 99571
      },
      {
        "id": 80361,
        "kecamatan_id": 6876,
        "kelurahan": "Hipela",
        "kd_pos": 99571
      },
      {
        "id": 80362,
        "kecamatan_id": 6876,
        "kelurahan": "Huewi",
        "kd_pos": 99571
      },
      {
        "id": 80363,
        "kecamatan_id": 6876,
        "kelurahan": "Punno",
        "kd_pos": 99571
      },
      {
        "id": 80364,
        "kecamatan_id": 6876,
        "kelurahan": "Simeka",
        "kd_pos": 99571
      },
      {
        "id": 80365,
        "kecamatan_id": 6876,
        "kelurahan": "Tangma",
        "kd_pos": 99571
      },
      {
        "id": 80366,
        "kecamatan_id": 6876,
        "kelurahan": "Wamarek",
        "kd_pos": 99571
      },
      {
        "id": 80367,
        "kecamatan_id": 6876,
        "kelurahan": "Yalimo",
        "kd_pos": 99571
      },
      {
        "id": 80368,
        "kecamatan_id": 6876,
        "kelurahan": "Yeleas",
        "kd_pos": 99571
      },
      {
        "id": 80369,
        "kecamatan_id": 6877,
        "kelurahan": "Bisifak",
        "kd_pos": 99582
      },
      {
        "id": 80370,
        "kecamatan_id": 6877,
        "kelurahan": "Furuluk",
        "kd_pos": 99582
      },
      {
        "id": 80371,
        "kecamatan_id": 6877,
        "kelurahan": "Keleng",
        "kd_pos": 99582
      },
      {
        "id": 80372,
        "kecamatan_id": 6877,
        "kelurahan": "Kibianggen",
        "kd_pos": 99582
      },
      {
        "id": 80373,
        "kecamatan_id": 6877,
        "kelurahan": "Koluang",
        "kd_pos": 99582
      },
      {
        "id": 80374,
        "kecamatan_id": 6877,
        "kelurahan": "Mabien",
        "kd_pos": 99582
      },
      {
        "id": 80375,
        "kecamatan_id": 6877,
        "kelurahan": "Maniek",
        "kd_pos": 99582
      },
      {
        "id": 80376,
        "kecamatan_id": 6877,
        "kelurahan": "Nurap",
        "kd_pos": 99582
      },
      {
        "id": 80377,
        "kecamatan_id": 6877,
        "kelurahan": "Oblin",
        "kd_pos": 99582
      },
      {
        "id": 80378,
        "kecamatan_id": 6877,
        "kelurahan": "Pini",
        "kd_pos": 99582
      },
      {
        "id": 80379,
        "kecamatan_id": 6877,
        "kelurahan": "Saruk",
        "kd_pos": 99582
      },
      {
        "id": 80380,
        "kecamatan_id": 6877,
        "kelurahan": "Silong",
        "kd_pos": 99582
      },
      {
        "id": 80381,
        "kecamatan_id": 6877,
        "kelurahan": "Sosonikma (Sosomikma)",
        "kd_pos": 99582
      },
      {
        "id": 80382,
        "kecamatan_id": 6877,
        "kelurahan": "Suhuntek",
        "kd_pos": 99582
      },
      {
        "id": 80383,
        "kecamatan_id": 6877,
        "kelurahan": "Tolombing",
        "kd_pos": 99582
      },
      {
        "id": 80384,
        "kecamatan_id": 6877,
        "kelurahan": "Ubahak",
        "kd_pos": 99582
      },
      {
        "id": 80385,
        "kecamatan_id": 6877,
        "kelurahan": "Welile",
        "kd_pos": 99582
      },
      {
        "id": 80386,
        "kecamatan_id": 6878,
        "kelurahan": "Hereki (Hereky)",
        "kd_pos": 99582
      },
      {
        "id": 80387,
        "kecamatan_id": 6878,
        "kelurahan": "Letfet",
        "kd_pos": 99582
      },
      {
        "id": 80388,
        "kecamatan_id": 6878,
        "kelurahan": "Membaham (Mimbaham)",
        "kd_pos": 99582
      },
      {
        "id": 80389,
        "kecamatan_id": 6878,
        "kelurahan": "Salakma",
        "kd_pos": 99582
      },
      {
        "id": 80390,
        "kecamatan_id": 6878,
        "kelurahan": "Samiyul",
        "kd_pos": 99582
      },
      {
        "id": 80391,
        "kecamatan_id": 6878,
        "kelurahan": "Sehelu",
        "kd_pos": 99582
      },
      {
        "id": 80392,
        "kecamatan_id": 6878,
        "kelurahan": "Talambela (Talempela)",
        "kd_pos": 99582
      },
      {
        "id": 80393,
        "kecamatan_id": 6878,
        "kelurahan": "Ubalihion",
        "kd_pos": 99582
      },
      {
        "id": 80394,
        "kecamatan_id": 6878,
        "kelurahan": "Walahan",
        "kd_pos": 99582
      },
      {
        "id": 80395,
        "kecamatan_id": 6878,
        "kelurahan": "Wanan (Wanam)",
        "kd_pos": 99582
      },
      {
        "id": 80396,
        "kecamatan_id": 6878,
        "kelurahan": "Wisomy (Wisomi)",
        "kd_pos": 99582
      },
      {
        "id": 80397,
        "kecamatan_id": 6879,
        "kelurahan": "Amisangi",
        "kd_pos": 99571
      },
      {
        "id": 80398,
        "kecamatan_id": 6879,
        "kelurahan": "Eki",
        "kd_pos": 99571
      },
      {
        "id": 80399,
        "kecamatan_id": 6879,
        "kelurahan": "Kuleken",
        "kd_pos": 99571
      },
      {
        "id": 80400,
        "kecamatan_id": 6879,
        "kelurahan": "Lua",
        "kd_pos": 99571
      },
      {
        "id": 80401,
        "kecamatan_id": 6879,
        "kelurahan": "Musanarek",
        "kd_pos": 99571
      },
      {
        "id": 80402,
        "kecamatan_id": 6879,
        "kelurahan": "Siolorema",
        "kd_pos": 99571
      },
      {
        "id": 80403,
        "kecamatan_id": 6879,
        "kelurahan": "Ukha",
        "kd_pos": 99571
      },
      {
        "id": 80404,
        "kecamatan_id": 6879,
        "kelurahan": "Walialema",
        "kd_pos": 99571
      },
      {
        "id": 80405,
        "kecamatan_id": 6879,
        "kelurahan": "Wenapuk",
        "kd_pos": 99571
      },
      {
        "id": 80406,
        "kecamatan_id": 6879,
        "kelurahan": "Yelepunu",
        "kd_pos": 99571
      },
      {
        "id": 80407,
        "kecamatan_id": 6880,
        "kelurahan": "Honggoluk",
        "kd_pos": 99582
      },
      {
        "id": 80408,
        "kecamatan_id": 6880,
        "kelurahan": "Hontulun",
        "kd_pos": 99582
      },
      {
        "id": 80409,
        "kecamatan_id": 6880,
        "kelurahan": "Solinggul (Solingul)",
        "kd_pos": 99582
      },
      {
        "id": 80410,
        "kecamatan_id": 6880,
        "kelurahan": "Walma",
        "kd_pos": 99582
      },
      {
        "id": 80411,
        "kecamatan_id": 6880,
        "kelurahan": "Werene",
        "kd_pos": 99582
      },
      {
        "id": 80412,
        "kecamatan_id": 6880,
        "kelurahan": "Weri",
        "kd_pos": 99582
      },
      {
        "id": 80413,
        "kecamatan_id": 6880,
        "kelurahan": "Wewasi",
        "kd_pos": 99582
      },
      {
        "id": 80414,
        "kecamatan_id": 6880,
        "kelurahan": "Yetehup",
        "kd_pos": 99582
      },
      {
        "id": 80415,
        "kecamatan_id": 6881,
        "kelurahan": "Esema Husage",
        "kd_pos": 99571
      },
      {
        "id": 80416,
        "kecamatan_id": 6881,
        "kelurahan": "Hagawen",
        "kd_pos": 99571
      },
      {
        "id": 80417,
        "kecamatan_id": 6881,
        "kelurahan": "Hanoasuok",
        "kd_pos": 99571
      },
      {
        "id": 80418,
        "kecamatan_id": 6881,
        "kelurahan": "Hepia",
        "kd_pos": 99571
      },
      {
        "id": 80419,
        "kecamatan_id": 6881,
        "kelurahan": "Hesmat",
        "kd_pos": 99571
      },
      {
        "id": 80420,
        "kecamatan_id": 6881,
        "kelurahan": "Libuk",
        "kd_pos": 99571
      },
      {
        "id": 80421,
        "kecamatan_id": 6881,
        "kelurahan": "Lokon",
        "kd_pos": 99571
      },
      {
        "id": 80422,
        "kecamatan_id": 6881,
        "kelurahan": "Luarima",
        "kd_pos": 99571
      },
      {
        "id": 80423,
        "kecamatan_id": 6881,
        "kelurahan": "Nesuwen",
        "kd_pos": 99571
      },
      {
        "id": 80424,
        "kecamatan_id": 6881,
        "kelurahan": "Suesi",
        "kd_pos": 99571
      },
      {
        "id": 80425,
        "kecamatan_id": 6881,
        "kelurahan": "Weriaput",
        "kd_pos": 99571
      },
      {
        "id": 80426,
        "kecamatan_id": 6881,
        "kelurahan": "Werima",
        "kd_pos": 99571
      },
      {
        "id": 80427,
        "kecamatan_id": 6881,
        "kelurahan": "Wesagalep",
        "kd_pos": 99571
      },
      {
        "id": 80428,
        "kecamatan_id": 6881,
        "kelurahan": "Wesama",
        "kd_pos": 99571
      },
      {
        "id": 80429,
        "kecamatan_id": 6882,
        "kelurahan": "Apdagma (Apdakma)",
        "kd_pos": 99571
      },
      {
        "id": 80430,
        "kecamatan_id": 6882,
        "kelurahan": "Harap",
        "kd_pos": 99571
      },
      {
        "id": 80431,
        "kecamatan_id": 6882,
        "kelurahan": "Kolodoma",
        "kd_pos": 99571
      },
      {
        "id": 80432,
        "kecamatan_id": 6882,
        "kelurahan": "Mugi (Mogi)",
        "kd_pos": 99571
      },
      {
        "id": 80433,
        "kecamatan_id": 6882,
        "kelurahan": "Mul",
        "kd_pos": 99571
      },
      {
        "id": 80434,
        "kecamatan_id": 6882,
        "kelurahan": "Sabin",
        "kd_pos": 99571
      },
      {
        "id": 80435,
        "kecamatan_id": 6882,
        "kelurahan": "Sangatur",
        "kd_pos": 99571
      },
      {
        "id": 80436,
        "kecamatan_id": 6882,
        "kelurahan": "Sowaling",
        "kd_pos": 99571
      },
      {
        "id": 80437,
        "kecamatan_id": 6882,
        "kelurahan": "Suok",
        "kd_pos": 99571
      },
      {
        "id": 80438,
        "kecamatan_id": 6882,
        "kelurahan": "Walkuma",
        "kd_pos": 99571
      },
      {
        "id": 80439,
        "kecamatan_id": 6882,
        "kelurahan": "Yerekama",
        "kd_pos": 99571
      },
      {
        "id": 80440,
        "kecamatan_id": 6883,
        "kelurahan": "Amfulma",
        "kd_pos": 99578
      },
      {
        "id": 80441,
        "kecamatan_id": 6883,
        "kelurahan": "Linggisen",
        "kd_pos": 99578
      },
      {
        "id": 80442,
        "kecamatan_id": 6883,
        "kelurahan": "Subundalek",
        "kd_pos": 99578
      },
      {
        "id": 80443,
        "kecamatan_id": 6883,
        "kelurahan": "Suksale",
        "kd_pos": 99578
      },
      {
        "id": 80444,
        "kecamatan_id": 6883,
        "kelurahan": "Tanggeam",
        "kd_pos": 99578
      },
      {
        "id": 80445,
        "kecamatan_id": 6884,
        "kelurahan": "Esahapuk",
        "kd_pos": 99571
      },
      {
        "id": 80446,
        "kecamatan_id": 6884,
        "kelurahan": "Hokolekma",
        "kd_pos": 99571
      },
      {
        "id": 80447,
        "kecamatan_id": 6884,
        "kelurahan": "Kiroma",
        "kd_pos": 99571
      },
      {
        "id": 80448,
        "kecamatan_id": 6884,
        "kelurahan": "Mesahaput",
        "kd_pos": 99571
      },
      {
        "id": 80449,
        "kecamatan_id": 6884,
        "kelurahan": "Saikama",
        "kd_pos": 99571
      },
      {
        "id": 80450,
        "kecamatan_id": 6884,
        "kelurahan": "Sogasio",
        "kd_pos": 99571
      },
      {
        "id": 80451,
        "kecamatan_id": 6884,
        "kelurahan": "Yogosem",
        "kd_pos": 99571
      },
      {
        "id": 80452,
        "kecamatan_id": 6885,
        "kelurahan": "Abagima",
        "kd_pos": 99587
      },
      {
        "id": 80453,
        "kecamatan_id": 6885,
        "kelurahan": "Abenaho",
        "kd_pos": 99587
      },
      {
        "id": 80454,
        "kecamatan_id": 6885,
        "kelurahan": "Agris",
        "kd_pos": 99587
      },
      {
        "id": 80455,
        "kecamatan_id": 6885,
        "kelurahan": "Alugi",
        "kd_pos": 99587
      },
      {
        "id": 80456,
        "kecamatan_id": 6885,
        "kelurahan": "Amuki",
        "kd_pos": 99587
      },
      {
        "id": 80457,
        "kecamatan_id": 6885,
        "kelurahan": "Arikbalek",
        "kd_pos": 99587
      },
      {
        "id": 80458,
        "kecamatan_id": 6885,
        "kelurahan": "Babin",
        "kd_pos": 99587
      },
      {
        "id": 80459,
        "kecamatan_id": 6885,
        "kelurahan": "Beim",
        "kd_pos": 99587
      },
      {
        "id": 80460,
        "kecamatan_id": 6885,
        "kelurahan": "Bohum",
        "kd_pos": 99587
      },
      {
        "id": 80461,
        "kecamatan_id": 6885,
        "kelurahan": "Bonahik",
        "kd_pos": 99587
      },
      {
        "id": 80462,
        "kecamatan_id": 6885,
        "kelurahan": "Bonggi",
        "kd_pos": 99587
      },
      {
        "id": 80463,
        "kecamatan_id": 6885,
        "kelurahan": "Bukurik",
        "kd_pos": 99587
      },
      {
        "id": 80464,
        "kecamatan_id": 6885,
        "kelurahan": "Bumbum",
        "kd_pos": 99587
      },
      {
        "id": 80465,
        "kecamatan_id": 6885,
        "kelurahan": "Burim",
        "kd_pos": 99587
      },
      {
        "id": 80466,
        "kecamatan_id": 6885,
        "kelurahan": "Dahonaikma",
        "kd_pos": 99587
      },
      {
        "id": 80467,
        "kecamatan_id": 6885,
        "kelurahan": "Dama",
        "kd_pos": 99587
      },
      {
        "id": 80468,
        "kecamatan_id": 6885,
        "kelurahan": "Dombomi",
        "kd_pos": 99587
      },
      {
        "id": 80469,
        "kecamatan_id": 6885,
        "kelurahan": "Dosumo",
        "kd_pos": 99587
      },
      {
        "id": 80470,
        "kecamatan_id": 6885,
        "kelurahan": "Elesim",
        "kd_pos": 99587
      },
      {
        "id": 80471,
        "kecamatan_id": 6885,
        "kelurahan": "Eliekma",
        "kd_pos": 99587
      },
      {
        "id": 80472,
        "kecamatan_id": 6885,
        "kelurahan": "Fialem",
        "kd_pos": 99587
      },
      {
        "id": 80473,
        "kecamatan_id": 6885,
        "kelurahan": "Fuahe",
        "kd_pos": 99587
      },
      {
        "id": 80474,
        "kecamatan_id": 6885,
        "kelurahan": "Fuim",
        "kd_pos": 99587
      },
      {
        "id": 80475,
        "kecamatan_id": 6885,
        "kelurahan": "Gefindo",
        "kd_pos": 99587
      },
      {
        "id": 80476,
        "kecamatan_id": 6885,
        "kelurahan": "Halifur",
        "kd_pos": 99587
      },
      {
        "id": 80477,
        "kecamatan_id": 6885,
        "kelurahan": "Halisek",
        "kd_pos": 99587
      },
      {
        "id": 80478,
        "kecamatan_id": 6885,
        "kelurahan": "Heahobak",
        "kd_pos": 99587
      },
      {
        "id": 80479,
        "kecamatan_id": 6885,
        "kelurahan": "Helaksili",
        "kd_pos": 99587
      },
      {
        "id": 80480,
        "kecamatan_id": 6885,
        "kelurahan": "Hobualma",
        "kd_pos": 99587
      },
      {
        "id": 80481,
        "kecamatan_id": 6885,
        "kelurahan": "Hombanman",
        "kd_pos": 99587
      },
      {
        "id": 80482,
        "kecamatan_id": 6885,
        "kelurahan": "Horakia",
        "kd_pos": 99587
      },
      {
        "id": 80483,
        "kecamatan_id": 6885,
        "kelurahan": "Horenikma",
        "kd_pos": 99587
      },
      {
        "id": 80484,
        "kecamatan_id": 6885,
        "kelurahan": "Hubliki",
        "kd_pos": 99587
      },
      {
        "id": 80485,
        "kecamatan_id": 6885,
        "kelurahan": "Hulhule",
        "kd_pos": 99587
      },
      {
        "id": 80486,
        "kecamatan_id": 6885,
        "kelurahan": "Hulikma",
        "kd_pos": 99587
      },
      {
        "id": 80487,
        "kecamatan_id": 6885,
        "kelurahan": "Humalma",
        "kd_pos": 99587
      },
      {
        "id": 80488,
        "kecamatan_id": 6885,
        "kelurahan": "Hundilip",
        "kd_pos": 99587
      },
      {
        "id": 80489,
        "kecamatan_id": 6885,
        "kelurahan": "Hurualma",
        "kd_pos": 99587
      },
      {
        "id": 80490,
        "kecamatan_id": 6885,
        "kelurahan": "Jinggiwi",
        "kd_pos": 99587
      },
      {
        "id": 80491,
        "kecamatan_id": 6885,
        "kelurahan": "Kandibung",
        "kd_pos": 99587
      },
      {
        "id": 80492,
        "kecamatan_id": 6885,
        "kelurahan": "Kawokholik",
        "kd_pos": 99587
      },
      {
        "id": 80493,
        "kecamatan_id": 6885,
        "kelurahan": "Kesuwi",
        "kd_pos": 99587
      },
      {
        "id": 80494,
        "kecamatan_id": 6885,
        "kelurahan": "Kewi",
        "kd_pos": 99587
      },
      {
        "id": 80495,
        "kecamatan_id": 6885,
        "kelurahan": "Klesu",
        "kd_pos": 99587
      },
      {
        "id": 80496,
        "kecamatan_id": 6885,
        "kelurahan": "Kolaima",
        "kd_pos": 99587
      },
      {
        "id": 80497,
        "kecamatan_id": 6885,
        "kelurahan": "Kule",
        "kd_pos": 99587
      },
      {
        "id": 80498,
        "kecamatan_id": 6885,
        "kelurahan": "Landikma",
        "kd_pos": 99587
      },
      {
        "id": 80499,
        "kecamatan_id": 6885,
        "kelurahan": "Langongkok",
        "kd_pos": 99587
      },
      {
        "id": 80500,
        "kecamatan_id": 6885,
        "kelurahan": "Lasikma",
        "kd_pos": 99587
      },
      {
        "id": 80501,
        "kecamatan_id": 6885,
        "kelurahan": "Lilinmuhuk",
        "kd_pos": 99587
      },
      {
        "id": 80502,
        "kecamatan_id": 6885,
        "kelurahan": "Lilukikma",
        "kd_pos": 99587
      },
      {
        "id": 80503,
        "kecamatan_id": 6885,
        "kelurahan": "Lohomabel",
        "kd_pos": 99587
      },
      {
        "id": 80504,
        "kecamatan_id": 6885,
        "kelurahan": "Mahial",
        "kd_pos": 99587
      },
      {
        "id": 80505,
        "kecamatan_id": 6885,
        "kelurahan": "Maleo",
        "kd_pos": 99587
      },
      {
        "id": 80506,
        "kecamatan_id": 6885,
        "kelurahan": "Moban",
        "kd_pos": 99587
      },
      {
        "id": 80507,
        "kecamatan_id": 6885,
        "kelurahan": "Mulip",
        "kd_pos": 99587
      },
      {
        "id": 80508,
        "kecamatan_id": 6885,
        "kelurahan": "Musanahikma",
        "kd_pos": 99587
      },
      {
        "id": 80509,
        "kecamatan_id": 6885,
        "kelurahan": "Nenomani",
        "kd_pos": 99587
      },
      {
        "id": 80510,
        "kecamatan_id": 6885,
        "kelurahan": "Noholuok",
        "kd_pos": 99587
      },
      {
        "id": 80511,
        "kecamatan_id": 6885,
        "kelurahan": "Obabin",
        "kd_pos": 99587
      },
      {
        "id": 80512,
        "kecamatan_id": 6885,
        "kelurahan": "Pamumu",
        "kd_pos": 99587
      },
      {
        "id": 80513,
        "kecamatan_id": 6885,
        "kelurahan": "Pirikalem",
        "kd_pos": 99587
      },
      {
        "id": 80514,
        "kecamatan_id": 6885,
        "kelurahan": "Sabilironggo",
        "kd_pos": 99587
      },
      {
        "id": 80515,
        "kecamatan_id": 6885,
        "kelurahan": "Sahikma",
        "kd_pos": 99587
      },
      {
        "id": 80516,
        "kecamatan_id": 6885,
        "kelurahan": "Salo",
        "kd_pos": 99587
      },
      {
        "id": 80517,
        "kecamatan_id": 6885,
        "kelurahan": "Salohe",
        "kd_pos": 99587
      },
      {
        "id": 80518,
        "kecamatan_id": 6885,
        "kelurahan": "Sapiwarek",
        "kd_pos": 99587
      },
      {
        "id": 80519,
        "kecamatan_id": 6885,
        "kelurahan": "Sebi",
        "kd_pos": 99587
      },
      {
        "id": 80520,
        "kecamatan_id": 6885,
        "kelurahan": "Sohi",
        "kd_pos": 99587
      },
      {
        "id": 80521,
        "kecamatan_id": 6885,
        "kelurahan": "Sohombunu",
        "kd_pos": 99587
      },
      {
        "id": 80522,
        "kecamatan_id": 6885,
        "kelurahan": "Sombule",
        "kd_pos": 99587
      },
      {
        "id": 80523,
        "kecamatan_id": 6885,
        "kelurahan": "Suahe",
        "kd_pos": 99587
      },
      {
        "id": 80524,
        "kecamatan_id": 6885,
        "kelurahan": "Suele",
        "kd_pos": 99587
      },
      {
        "id": 80525,
        "kecamatan_id": 6885,
        "kelurahan": "Sumbul",
        "kd_pos": 99587
      },
      {
        "id": 80526,
        "kecamatan_id": 6885,
        "kelurahan": "Suminaikma",
        "kd_pos": 99587
      },
      {
        "id": 80527,
        "kecamatan_id": 6885,
        "kelurahan": "Tagabaga",
        "kd_pos": 99587
      },
      {
        "id": 80528,
        "kecamatan_id": 6885,
        "kelurahan": "Uluhufuk",
        "kd_pos": 99587
      },
      {
        "id": 80529,
        "kecamatan_id": 6885,
        "kelurahan": "Ulukhumi",
        "kd_pos": 99587
      },
      {
        "id": 80530,
        "kecamatan_id": 6885,
        "kelurahan": "Ulun",
        "kd_pos": 99587
      },
      {
        "id": 80531,
        "kecamatan_id": 6885,
        "kelurahan": "Ulusi",
        "kd_pos": 99587
      },
      {
        "id": 80532,
        "kecamatan_id": 6885,
        "kelurahan": "Usabiye",
        "kd_pos": 99587
      },
      {
        "id": 80533,
        "kecamatan_id": 6885,
        "kelurahan": "Wafuhuk",
        "kd_pos": 99587
      },
      {
        "id": 80534,
        "kecamatan_id": 6885,
        "kelurahan": "Waghasilimo",
        "kd_pos": 99587
      },
      {
        "id": 80535,
        "kecamatan_id": 6885,
        "kelurahan": "Walagima",
        "kd_pos": 99587
      },
      {
        "id": 80536,
        "kecamatan_id": 6885,
        "kelurahan": "Wambal",
        "kd_pos": 99587
      },
      {
        "id": 80537,
        "kecamatan_id": 6885,
        "kelurahan": "Wambalfak",
        "kd_pos": 99587
      },
      {
        "id": 80538,
        "kecamatan_id": 6885,
        "kelurahan": "Wambo",
        "kd_pos": 99587
      },
      {
        "id": 80539,
        "kecamatan_id": 6885,
        "kelurahan": "Wamhor",
        "kd_pos": 99587
      },
      {
        "id": 80540,
        "kecamatan_id": 6885,
        "kelurahan": "Wanam",
        "kd_pos": 99587
      },
      {
        "id": 80541,
        "kecamatan_id": 6885,
        "kelurahan": "Wanggibo",
        "kd_pos": 99587
      },
      {
        "id": 80542,
        "kecamatan_id": 6885,
        "kelurahan": "Wangkun",
        "kd_pos": 99587
      },
      {
        "id": 80543,
        "kecamatan_id": 6885,
        "kelurahan": "Wanmal",
        "kd_pos": 99587
      },
      {
        "id": 80544,
        "kecamatan_id": 6885,
        "kelurahan": "Waroham",
        "kd_pos": 99587
      },
      {
        "id": 80545,
        "kecamatan_id": 6885,
        "kelurahan": "Wilak",
        "kd_pos": 99587
      },
      {
        "id": 80546,
        "kecamatan_id": 6885,
        "kelurahan": "Wileroma",
        "kd_pos": 99587
      },
      {
        "id": 80547,
        "kecamatan_id": 6885,
        "kelurahan": "Wilofing",
        "kd_pos": 99587
      },
      {
        "id": 80548,
        "kecamatan_id": 6885,
        "kelurahan": "Wiltlanggo",
        "kd_pos": 99587
      },
      {
        "id": 80549,
        "kecamatan_id": 6885,
        "kelurahan": "Wiwulik",
        "kd_pos": 99587
      },
      {
        "id": 80550,
        "kecamatan_id": 6885,
        "kelurahan": "Worol",
        "kd_pos": 99587
      },
      {
        "id": 80551,
        "kecamatan_id": 6885,
        "kelurahan": "Wutlarin",
        "kd_pos": 99587
      },
      {
        "id": 80552,
        "kecamatan_id": 6885,
        "kelurahan": "Yabusup",
        "kd_pos": 99587
      },
      {
        "id": 80553,
        "kecamatan_id": 6885,
        "kelurahan": "Yahatma",
        "kd_pos": 99587
      },
      {
        "id": 80554,
        "kecamatan_id": 6885,
        "kelurahan": "Yama",
        "kd_pos": 99587
      },
      {
        "id": 80555,
        "kecamatan_id": 6885,
        "kelurahan": "Yambaikma",
        "kd_pos": 99587
      },
      {
        "id": 80556,
        "kecamatan_id": 6885,
        "kelurahan": "Yanamik",
        "kd_pos": 99587
      },
      {
        "id": 80557,
        "kecamatan_id": 6885,
        "kelurahan": "Yawan",
        "kd_pos": 99587
      },
      {
        "id": 80558,
        "kecamatan_id": 6885,
        "kelurahan": "Yutanggo",
        "kd_pos": 99587
      },
      {
        "id": 80559,
        "kecamatan_id": 6886,
        "kelurahan": "Alimuhuk",
        "kd_pos": 99586
      },
      {
        "id": 80560,
        "kecamatan_id": 6886,
        "kelurahan": "Apalapsili",
        "kd_pos": 99586
      },
      {
        "id": 80561,
        "kecamatan_id": 6886,
        "kelurahan": "Asiligma",
        "kd_pos": 99586
      },
      {
        "id": 80562,
        "kecamatan_id": 6886,
        "kelurahan": "Asilikma",
        "kd_pos": 99586
      },
      {
        "id": 80563,
        "kecamatan_id": 6886,
        "kelurahan": "Babtekma",
        "kd_pos": 99586
      },
      {
        "id": 80564,
        "kecamatan_id": 6886,
        "kelurahan": "Benyam",
        "kd_pos": 99586
      },
      {
        "id": 80565,
        "kecamatan_id": 6886,
        "kelurahan": "Eal",
        "kd_pos": 99586
      },
      {
        "id": 80566,
        "kecamatan_id": 6886,
        "kelurahan": "Falukwalilo",
        "kd_pos": 99586
      },
      {
        "id": 80567,
        "kecamatan_id": 6886,
        "kelurahan": "Fari",
        "kd_pos": 99586
      },
      {
        "id": 80568,
        "kecamatan_id": 6886,
        "kelurahan": "Filiyahik",
        "kd_pos": 99586
      },
      {
        "id": 80569,
        "kecamatan_id": 6886,
        "kelurahan": "Habalo",
        "kd_pos": 99586
      },
      {
        "id": 80570,
        "kecamatan_id": 6886,
        "kelurahan": "Hinongkoambut",
        "kd_pos": 99586
      },
      {
        "id": 80571,
        "kecamatan_id": 6886,
        "kelurahan": "Holuaogalma",
        "kd_pos": 99586
      },
      {
        "id": 80572,
        "kecamatan_id": 6886,
        "kelurahan": "Holuokalem",
        "kd_pos": 99586
      },
      {
        "id": 80573,
        "kecamatan_id": 6886,
        "kelurahan": "Hubliki",
        "kd_pos": 99586
      },
      {
        "id": 80574,
        "kecamatan_id": 6886,
        "kelurahan": "Hukalopunu",
        "kd_pos": 99586
      },
      {
        "id": 80575,
        "kecamatan_id": 6886,
        "kelurahan": "Humalen",
        "kd_pos": 99586
      },
      {
        "id": 80576,
        "kecamatan_id": 6886,
        "kelurahan": "Ilirek",
        "kd_pos": 99586
      },
      {
        "id": 80577,
        "kecamatan_id": 6886,
        "kelurahan": "Kelampurim",
        "kd_pos": 99586
      },
      {
        "id": 80578,
        "kecamatan_id": 6886,
        "kelurahan": "Kengggembun",
        "kd_pos": 99586
      },
      {
        "id": 80579,
        "kecamatan_id": 6886,
        "kelurahan": "Kilat",
        "kd_pos": 99586
      },
      {
        "id": 80580,
        "kecamatan_id": 6886,
        "kelurahan": "Kinhe",
        "kd_pos": 99586
      },
      {
        "id": 80581,
        "kecamatan_id": 6886,
        "kelurahan": "Kulet",
        "kd_pos": 99586
      },
      {
        "id": 80582,
        "kecamatan_id": 6886,
        "kelurahan": "Kundikele",
        "kd_pos": 99586
      },
      {
        "id": 80583,
        "kecamatan_id": 6886,
        "kelurahan": "Lambukmu",
        "kd_pos": 99586
      },
      {
        "id": 80584,
        "kecamatan_id": 6886,
        "kelurahan": "Lilinsaluk",
        "kd_pos": 99586
      },
      {
        "id": 80585,
        "kecamatan_id": 6886,
        "kelurahan": "Makrig",
        "kd_pos": 99586
      },
      {
        "id": 80586,
        "kecamatan_id": 6886,
        "kelurahan": "Moliyinggi",
        "kd_pos": 99586
      },
      {
        "id": 80587,
        "kecamatan_id": 6886,
        "kelurahan": "Nanahoruk",
        "kd_pos": 99586
      },
      {
        "id": 80588,
        "kecamatan_id": 6886,
        "kelurahan": "Nasinena",
        "kd_pos": 99586
      },
      {
        "id": 80589,
        "kecamatan_id": 6886,
        "kelurahan": "Natoksili",
        "kd_pos": 99586
      },
      {
        "id": 80590,
        "kecamatan_id": 6886,
        "kelurahan": "Nohonil",
        "kd_pos": 99586
      },
      {
        "id": 80591,
        "kecamatan_id": 6886,
        "kelurahan": "Orohon",
        "kd_pos": 99586
      },
      {
        "id": 80592,
        "kecamatan_id": 6886,
        "kelurahan": "Pipisim",
        "kd_pos": 99586
      },
      {
        "id": 80593,
        "kecamatan_id": 6886,
        "kelurahan": "Pong",
        "kd_pos": 99586
      },
      {
        "id": 80594,
        "kecamatan_id": 6886,
        "kelurahan": "Sabilikalem",
        "kd_pos": 99586
      },
      {
        "id": 80595,
        "kecamatan_id": 6886,
        "kelurahan": "Sabualo",
        "kd_pos": 99586
      },
      {
        "id": 80596,
        "kecamatan_id": 6886,
        "kelurahan": "Sien",
        "kd_pos": 99586
      },
      {
        "id": 80597,
        "kecamatan_id": 6886,
        "kelurahan": "Sobikambut",
        "kd_pos": 99586
      },
      {
        "id": 80598,
        "kecamatan_id": 6886,
        "kelurahan": "Suerelihim",
        "kd_pos": 99586
      },
      {
        "id": 80599,
        "kecamatan_id": 6886,
        "kelurahan": "Suweli",
        "kd_pos": 99586
      },
      {
        "id": 80600,
        "kecamatan_id": 6886,
        "kelurahan": "Tembut",
        "kd_pos": 99586
      },
      {
        "id": 80601,
        "kecamatan_id": 6886,
        "kelurahan": "Tikano",
        "kd_pos": 99586
      },
      {
        "id": 80602,
        "kecamatan_id": 6886,
        "kelurahan": "Wanamalo",
        "kd_pos": 99586
      },
      {
        "id": 80603,
        "kecamatan_id": 6886,
        "kelurahan": "Wasalalo",
        "kd_pos": 99586
      },
      {
        "id": 80604,
        "kecamatan_id": 6886,
        "kelurahan": "Wiralesili",
        "kd_pos": 99586
      },
      {
        "id": 80605,
        "kecamatan_id": 6886,
        "kelurahan": "Wiyukwilik",
        "kd_pos": 99586
      },
      {
        "id": 80606,
        "kecamatan_id": 6886,
        "kelurahan": "Yarema Satu",
        "kd_pos": 99586
      },
      {
        "id": 80607,
        "kecamatan_id": 6886,
        "kelurahan": "Yeftek",
        "kd_pos": 99586
      },
      {
        "id": 80608,
        "kecamatan_id": 6886,
        "kelurahan": "Yohul",
        "kd_pos": 99586
      },
      {
        "id": 80609,
        "kecamatan_id": 6887,
        "kelurahan": "Ampera",
        "kd_pos": 99583
      },
      {
        "id": 80610,
        "kecamatan_id": 6887,
        "kelurahan": "Dukunasi",
        "kd_pos": 99583
      },
      {
        "id": 80611,
        "kecamatan_id": 6887,
        "kelurahan": "Gilika",
        "kd_pos": 99583
      },
      {
        "id": 80612,
        "kecamatan_id": 6887,
        "kelurahan": "Himi",
        "kd_pos": 99583
      },
      {
        "id": 80613,
        "kecamatan_id": 6887,
        "kelurahan": "Ikon",
        "kd_pos": 99583
      },
      {
        "id": 80614,
        "kecamatan_id": 6887,
        "kelurahan": "Iyap",
        "kd_pos": 99583
      },
      {
        "id": 80615,
        "kecamatan_id": 6887,
        "kelurahan": "Kamika",
        "kd_pos": 99583
      },
      {
        "id": 80616,
        "kecamatan_id": 6887,
        "kelurahan": "Kapawa",
        "kd_pos": 99583
      },
      {
        "id": 80617,
        "kecamatan_id": 6887,
        "kelurahan": "Karamina",
        "kd_pos": 99583
      },
      {
        "id": 80618,
        "kecamatan_id": 6887,
        "kelurahan": "Key",
        "kd_pos": 99583
      },
      {
        "id": 80619,
        "kecamatan_id": 6887,
        "kelurahan": "Konobun",
        "kd_pos": 99583
      },
      {
        "id": 80620,
        "kecamatan_id": 6887,
        "kelurahan": "Kukdomol",
        "kd_pos": 99583
      },
      {
        "id": 80621,
        "kecamatan_id": 6887,
        "kelurahan": "Kutakuruk",
        "kd_pos": 99583
      },
      {
        "id": 80622,
        "kecamatan_id": 6887,
        "kelurahan": "Lawe",
        "kd_pos": 99583
      },
      {
        "id": 80623,
        "kecamatan_id": 6887,
        "kelurahan": "Lulum",
        "kd_pos": 99583
      },
      {
        "id": 80624,
        "kecamatan_id": 6887,
        "kelurahan": "Makrip",
        "kd_pos": 99583
      },
      {
        "id": 80625,
        "kecamatan_id": 6887,
        "kelurahan": "Martaru",
        "kd_pos": 99583
      },
      {
        "id": 80626,
        "kecamatan_id": 6887,
        "kelurahan": "Mihol",
        "kd_pos": 99583
      },
      {
        "id": 80627,
        "kecamatan_id": 6887,
        "kelurahan": "Mulia",
        "kd_pos": 99583
      },
      {
        "id": 80628,
        "kecamatan_id": 6887,
        "kelurahan": "Naira",
        "kd_pos": 99583
      },
      {
        "id": 80629,
        "kecamatan_id": 6887,
        "kelurahan": "Narau",
        "kd_pos": 99583
      },
      {
        "id": 80630,
        "kecamatan_id": 6887,
        "kelurahan": "Neigase",
        "kd_pos": 99583
      },
      {
        "id": 80631,
        "kecamatan_id": 6887,
        "kelurahan": "Niyawi",
        "kd_pos": 99583
      },
      {
        "id": 80632,
        "kecamatan_id": 6887,
        "kelurahan": "Nungkere",
        "kd_pos": 99583
      },
      {
        "id": 80633,
        "kecamatan_id": 6887,
        "kelurahan": "Paluke",
        "kd_pos": 99583
      },
      {
        "id": 80634,
        "kecamatan_id": 6887,
        "kelurahan": "Pensale",
        "kd_pos": 99583
      },
      {
        "id": 80635,
        "kecamatan_id": 6887,
        "kelurahan": "Pepera",
        "kd_pos": 99583
      },
      {
        "id": 80636,
        "kecamatan_id": 6887,
        "kelurahan": "Puruku",
        "kd_pos": 99583
      },
      {
        "id": 80637,
        "kecamatan_id": 6887,
        "kelurahan": "Siwa",
        "kd_pos": 99583
      },
      {
        "id": 80638,
        "kecamatan_id": 6887,
        "kelurahan": "Thamaksin",
        "kd_pos": 99583
      },
      {
        "id": 80639,
        "kecamatan_id": 6887,
        "kelurahan": "Tiwayi",
        "kd_pos": 99583
      },
      {
        "id": 80640,
        "kecamatan_id": 6887,
        "kelurahan": "Trikora",
        "kd_pos": 99583
      },
      {
        "id": 80641,
        "kecamatan_id": 6887,
        "kelurahan": "Uramburu",
        "kd_pos": 99583
      },
      {
        "id": 80642,
        "kecamatan_id": 6887,
        "kelurahan": "Wermas",
        "kd_pos": 99583
      },
      {
        "id": 80643,
        "kecamatan_id": 6887,
        "kelurahan": "Wibi",
        "kd_pos": 99583
      },
      {
        "id": 80644,
        "kecamatan_id": 6887,
        "kelurahan": "Wirsa",
        "kd_pos": 99583
      },
      {
        "id": 80645,
        "kecamatan_id": 6887,
        "kelurahan": "Yakwa",
        "kd_pos": 99583
      },
      {
        "id": 80646,
        "kecamatan_id": 6888,
        "kelurahan": "Aluis",
        "kd_pos": 99584
      },
      {
        "id": 80647,
        "kecamatan_id": 6888,
        "kelurahan": "Bulmu",
        "kd_pos": 99584
      },
      {
        "id": 80648,
        "kecamatan_id": 6888,
        "kelurahan": "Duwong",
        "kd_pos": 99584
      },
      {
        "id": 80649,
        "kecamatan_id": 6888,
        "kelurahan": "Elilem",
        "kd_pos": 99584
      },
      {
        "id": 80650,
        "kecamatan_id": 6888,
        "kelurahan": "Emon",
        "kd_pos": 99584
      },
      {
        "id": 80651,
        "kecamatan_id": 6888,
        "kelurahan": "Eregi",
        "kd_pos": 99584
      },
      {
        "id": 80652,
        "kecamatan_id": 6888,
        "kelurahan": "Fima",
        "kd_pos": 99584
      },
      {
        "id": 80653,
        "kecamatan_id": 6888,
        "kelurahan": "Helabu",
        "kd_pos": 99584
      },
      {
        "id": 80654,
        "kecamatan_id": 6888,
        "kelurahan": "Hesmat",
        "kd_pos": 99584
      },
      {
        "id": 80655,
        "kecamatan_id": 6888,
        "kelurahan": "Hiling",
        "kd_pos": 99584
      },
      {
        "id": 80656,
        "kecamatan_id": 6888,
        "kelurahan": "Hobakma",
        "kd_pos": 99584
      },
      {
        "id": 80657,
        "kecamatan_id": 6888,
        "kelurahan": "Honita",
        "kd_pos": 99584
      },
      {
        "id": 80658,
        "kecamatan_id": 6888,
        "kelurahan": "Isila",
        "kd_pos": 99584
      },
      {
        "id": 80659,
        "kecamatan_id": 6888,
        "kelurahan": "Kalak",
        "kd_pos": 99584
      },
      {
        "id": 80660,
        "kecamatan_id": 6888,
        "kelurahan": "Kwikma",
        "kd_pos": 99584
      },
      {
        "id": 80661,
        "kecamatan_id": 6888,
        "kelurahan": "Maribu",
        "kd_pos": 99584
      },
      {
        "id": 80662,
        "kecamatan_id": 6888,
        "kelurahan": "Molinggu",
        "kd_pos": 99584
      },
      {
        "id": 80663,
        "kecamatan_id": 6888,
        "kelurahan": "Momonhusi",
        "kd_pos": 99584
      },
      {
        "id": 80664,
        "kecamatan_id": 6888,
        "kelurahan": "Ohobam",
        "kd_pos": 99584
      },
      {
        "id": 80665,
        "kecamatan_id": 6888,
        "kelurahan": "Ohoniam",
        "kd_pos": 99584
      },
      {
        "id": 80666,
        "kecamatan_id": 6888,
        "kelurahan": "Olani",
        "kd_pos": 99584
      },
      {
        "id": 80667,
        "kecamatan_id": 6888,
        "kelurahan": "Pangkik",
        "kd_pos": 99584
      },
      {
        "id": 80668,
        "kecamatan_id": 6888,
        "kelurahan": "Pasimbolo",
        "kd_pos": 99584
      },
      {
        "id": 80669,
        "kecamatan_id": 6888,
        "kelurahan": "Pihel",
        "kd_pos": 99584
      },
      {
        "id": 80670,
        "kecamatan_id": 6888,
        "kelurahan": "Pirip",
        "kd_pos": 99584
      },
      {
        "id": 80671,
        "kecamatan_id": 6888,
        "kelurahan": "Pisireg",
        "kd_pos": 99584
      },
      {
        "id": 80672,
        "kecamatan_id": 6888,
        "kelurahan": "Pungkahik",
        "kd_pos": 99584
      },
      {
        "id": 80673,
        "kecamatan_id": 6888,
        "kelurahan": "Sili",
        "kd_pos": 99584
      },
      {
        "id": 80674,
        "kecamatan_id": 6888,
        "kelurahan": "Sipsoi",
        "kd_pos": 99584
      },
      {
        "id": 80675,
        "kecamatan_id": 6888,
        "kelurahan": "Sipson",
        "kd_pos": 99584
      },
      {
        "id": 80676,
        "kecamatan_id": 6888,
        "kelurahan": "Sira",
        "kd_pos": 99584
      },
      {
        "id": 80677,
        "kecamatan_id": 6888,
        "kelurahan": "Sohi",
        "kd_pos": 99584
      },
      {
        "id": 80678,
        "kecamatan_id": 6888,
        "kelurahan": "Sowi",
        "kd_pos": 99584
      },
      {
        "id": 80679,
        "kecamatan_id": 6888,
        "kelurahan": "Tanapasir",
        "kd_pos": 99584
      },
      {
        "id": 80680,
        "kecamatan_id": 6888,
        "kelurahan": "Ubi",
        "kd_pos": 99584
      },
      {
        "id": 80681,
        "kecamatan_id": 6888,
        "kelurahan": "Ulo",
        "kd_pos": 99584
      },
      {
        "id": 80682,
        "kecamatan_id": 6888,
        "kelurahan": "Wagagu",
        "kd_pos": 99584
      },
      {
        "id": 80683,
        "kecamatan_id": 6888,
        "kelurahan": "Walkep",
        "kd_pos": 99584
      },
      {
        "id": 80684,
        "kecamatan_id": 6888,
        "kelurahan": "Warikma",
        "kd_pos": 99584
      },
      {
        "id": 80685,
        "kecamatan_id": 6888,
        "kelurahan": "Wasua",
        "kd_pos": 99584
      },
      {
        "id": 80686,
        "kecamatan_id": 6888,
        "kelurahan": "Wekolani",
        "kd_pos": 99584
      },
      {
        "id": 80687,
        "kecamatan_id": 6888,
        "kelurahan": "Werekma",
        "kd_pos": 99584
      },
      {
        "id": 80688,
        "kecamatan_id": 6888,
        "kelurahan": "Yabema",
        "kd_pos": 99584
      },
      {
        "id": 80689,
        "kecamatan_id": 6888,
        "kelurahan": "Yakikma",
        "kd_pos": 99584
      },
      {
        "id": 80690,
        "kecamatan_id": 6889,
        "kelurahan": "Ambiliki",
        "kd_pos": 99585
      },
      {
        "id": 80691,
        "kecamatan_id": 6889,
        "kelurahan": "Ampolongsili",
        "kd_pos": 99585
      },
      {
        "id": 80692,
        "kecamatan_id": 6889,
        "kelurahan": "Amuluk",
        "kd_pos": 99585
      },
      {
        "id": 80693,
        "kecamatan_id": 6889,
        "kelurahan": "Dikohobari",
        "kd_pos": 99585
      },
      {
        "id": 80694,
        "kecamatan_id": 6889,
        "kelurahan": "Feingkama",
        "kd_pos": 99585
      },
      {
        "id": 80695,
        "kecamatan_id": 6889,
        "kelurahan": "Fikfak",
        "kd_pos": 99585
      },
      {
        "id": 80696,
        "kecamatan_id": 6889,
        "kelurahan": "Folongsili",
        "kd_pos": 99585
      },
      {
        "id": 80697,
        "kecamatan_id": 6889,
        "kelurahan": "Funui",
        "kd_pos": 99585
      },
      {
        "id": 80698,
        "kecamatan_id": 6889,
        "kelurahan": "Halialo",
        "kd_pos": 99585
      },
      {
        "id": 80699,
        "kecamatan_id": 6889,
        "kelurahan": "Halisek",
        "kd_pos": 99585
      },
      {
        "id": 80700,
        "kecamatan_id": 6889,
        "kelurahan": "Hamboik",
        "kd_pos": 99585
      },
      {
        "id": 80701,
        "kecamatan_id": 6889,
        "kelurahan": "Helebol",
        "kd_pos": 99585
      },
      {
        "id": 80702,
        "kecamatan_id": 6889,
        "kelurahan": "Hilariki",
        "kd_pos": 99585
      },
      {
        "id": 80703,
        "kecamatan_id": 6889,
        "kelurahan": "Hindalimukuk",
        "kd_pos": 99585
      },
      {
        "id": 80704,
        "kecamatan_id": 6889,
        "kelurahan": "Hobut",
        "kd_pos": 99585
      },
      {
        "id": 80705,
        "kecamatan_id": 6889,
        "kelurahan": "Holowi",
        "kd_pos": 99585
      },
      {
        "id": 80706,
        "kecamatan_id": 6889,
        "kelurahan": "Irarek",
        "kd_pos": 99585
      },
      {
        "id": 80707,
        "kecamatan_id": 6889,
        "kelurahan": "Kampol",
        "kd_pos": 99585
      },
      {
        "id": 80708,
        "kecamatan_id": 6889,
        "kelurahan": "Kayalem",
        "kd_pos": 99585
      },
      {
        "id": 80709,
        "kecamatan_id": 6889,
        "kelurahan": "Kayo",
        "kd_pos": 99585
      },
      {
        "id": 80710,
        "kecamatan_id": 6889,
        "kelurahan": "Koum",
        "kd_pos": 99585
      },
      {
        "id": 80711,
        "kecamatan_id": 6889,
        "kelurahan": "Langam",
        "kd_pos": 99585
      },
      {
        "id": 80712,
        "kecamatan_id": 6889,
        "kelurahan": "Lasik",
        "kd_pos": 99585
      },
      {
        "id": 80713,
        "kecamatan_id": 6889,
        "kelurahan": "Mabualem",
        "kd_pos": 99585
      },
      {
        "id": 80714,
        "kecamatan_id": 6889,
        "kelurahan": "Mamioan",
        "kd_pos": 99585
      },
      {
        "id": 80715,
        "kecamatan_id": 6889,
        "kelurahan": "Menepini",
        "kd_pos": 99585
      },
      {
        "id": 80716,
        "kecamatan_id": 6889,
        "kelurahan": "Mohobiye",
        "kd_pos": 99585
      },
      {
        "id": 80717,
        "kecamatan_id": 6889,
        "kelurahan": "Mohonu",
        "kd_pos": 99585
      },
      {
        "id": 80718,
        "kecamatan_id": 6889,
        "kelurahan": "Montek",
        "kd_pos": 99585
      },
      {
        "id": 80719,
        "kecamatan_id": 6889,
        "kelurahan": "Nohonil",
        "kd_pos": 99585
      },
      {
        "id": 80720,
        "kecamatan_id": 6889,
        "kelurahan": "Pami",
        "kd_pos": 99585
      },
      {
        "id": 80721,
        "kecamatan_id": 6889,
        "kelurahan": "Panal",
        "kd_pos": 99585
      },
      {
        "id": 80722,
        "kecamatan_id": 6889,
        "kelurahan": "Panalulun",
        "kd_pos": 99585
      },
      {
        "id": 80723,
        "kecamatan_id": 6889,
        "kelurahan": "Pirang",
        "kd_pos": 99585
      },
      {
        "id": 80724,
        "kecamatan_id": 6889,
        "kelurahan": "Pisanggo",
        "kd_pos": 99585
      },
      {
        "id": 80725,
        "kecamatan_id": 6889,
        "kelurahan": "Poholanggen",
        "kd_pos": 99585
      },
      {
        "id": 80726,
        "kecamatan_id": 6889,
        "kelurahan": "Poik Satu",
        "kd_pos": 99585
      },
      {
        "id": 80727,
        "kecamatan_id": 6889,
        "kelurahan": "Sakam",
        "kd_pos": 99585
      },
      {
        "id": 80728,
        "kecamatan_id": 6889,
        "kelurahan": "Salema",
        "kd_pos": 99585
      },
      {
        "id": 80729,
        "kecamatan_id": 6889,
        "kelurahan": "Saly",
        "kd_pos": 99585
      },
      {
        "id": 80730,
        "kecamatan_id": 6889,
        "kelurahan": "Samaria",
        "kd_pos": 99585
      },
      {
        "id": 80731,
        "kecamatan_id": 6889,
        "kelurahan": "Seherek",
        "kd_pos": 99585
      },
      {
        "id": 80732,
        "kecamatan_id": 6889,
        "kelurahan": "Selebi",
        "kd_pos": 99585
      },
      {
        "id": 80733,
        "kecamatan_id": 6889,
        "kelurahan": "Selek",
        "kd_pos": 99585
      },
      {
        "id": 80734,
        "kecamatan_id": 6889,
        "kelurahan": "Silfal",
        "kd_pos": 99585
      },
      {
        "id": 80735,
        "kecamatan_id": 6889,
        "kelurahan": "Sinahal",
        "kd_pos": 99585
      },
      {
        "id": 80736,
        "kecamatan_id": 6889,
        "kelurahan": "Soharam",
        "kd_pos": 99585
      },
      {
        "id": 80737,
        "kecamatan_id": 6889,
        "kelurahan": "Sukalimi",
        "kd_pos": 99585
      },
      {
        "id": 80738,
        "kecamatan_id": 6889,
        "kelurahan": "Suntam",
        "kd_pos": 99585
      },
      {
        "id": 80739,
        "kecamatan_id": 6889,
        "kelurahan": "Tahamak",
        "kd_pos": 99585
      },
      {
        "id": 80740,
        "kecamatan_id": 6889,
        "kelurahan": "Tinmuhuk",
        "kd_pos": 99585
      },
      {
        "id": 80741,
        "kecamatan_id": 6889,
        "kelurahan": "Ubalihi",
        "kd_pos": 99585
      },
      {
        "id": 80742,
        "kecamatan_id": 6889,
        "kelurahan": "Ulum",
        "kd_pos": 99585
      },
      {
        "id": 80743,
        "kecamatan_id": 6889,
        "kelurahan": "Walingkapma",
        "kd_pos": 99585
      },
      {
        "id": 80744,
        "kecamatan_id": 6889,
        "kelurahan": "Wangkulamsafiang",
        "kd_pos": 99585
      },
      {
        "id": 80745,
        "kecamatan_id": 6889,
        "kelurahan": "Wasupahik",
        "kd_pos": 99585
      },
      {
        "id": 80746,
        "kecamatan_id": 6889,
        "kelurahan": "Welarek",
        "kd_pos": 99585
      },
      {
        "id": 80747,
        "kecamatan_id": 6889,
        "kelurahan": "Welearekpunu",
        "kd_pos": 99585
      },
      {
        "id": 80748,
        "kecamatan_id": 6889,
        "kelurahan": "Werenggik",
        "kd_pos": 99585
      },
      {
        "id": 80749,
        "kecamatan_id": 6889,
        "kelurahan": "Wompoli",
        "kd_pos": 99585
      },
      {
        "id": 80750,
        "kecamatan_id": 6889,
        "kelurahan": "Yahamer",
        "kd_pos": 99585
      },
      {
        "id": 80751,
        "kecamatan_id": 6890,
        "kelurahan": "Abepantai",
        "kd_pos": 99351
      },
      {
        "id": 80752,
        "kecamatan_id": 6890,
        "kelurahan": "Asano",
        "kd_pos": 99351
      },
      {
        "id": 80753,
        "kecamatan_id": 6890,
        "kelurahan": "Awiyo",
        "kd_pos": 99351
      },
      {
        "id": 80754,
        "kecamatan_id": 6890,
        "kelurahan": "Engros (Enggros)",
        "kd_pos": 99351
      },
      {
        "id": 80755,
        "kecamatan_id": 6890,
        "kelurahan": "Kota Baru",
        "kd_pos": 99351
      },
      {
        "id": 80756,
        "kecamatan_id": 6890,
        "kelurahan": "Koya Koso",
        "kd_pos": 99351
      },
      {
        "id": 80757,
        "kecamatan_id": 6890,
        "kelurahan": "Nafri",
        "kd_pos": 99351
      },
      {
        "id": 80758,
        "kecamatan_id": 6890,
        "kelurahan": "Waena",
        "kd_pos": 99221
      },
      {
        "id": 80759,
        "kecamatan_id": 6890,
        "kelurahan": "Yobe",
        "kd_pos": 99351
      },
      {
        "id": 80760,
        "kecamatan_id": 6891,
        "kelurahan": "Hedam",
        "kd_pos": 99351
      },
      {
        "id": 80761,
        "kecamatan_id": 6891,
        "kelurahan": "Waena",
        "kd_pos": 99351
      },
      {
        "id": 80762,
        "kecamatan_id": 6891,
        "kelurahan": "Yabansai",
        "kd_pos": 99351
      },
      {
        "id": 80763,
        "kecamatan_id": 6891,
        "kelurahan": "Yoka",
        "kd_pos": 99351
      },
      {
        "id": 80764,
        "kecamatan_id": 6892,
        "kelurahan": "Ardipura",
        "kd_pos": 99223
      },
      {
        "id": 80765,
        "kecamatan_id": 6892,
        "kelurahan": "Argapura",
        "kd_pos": 99222
      },
      {
        "id": 80766,
        "kecamatan_id": 6892,
        "kelurahan": "Entrop",
        "kd_pos": 99224
      },
      {
        "id": 80767,
        "kecamatan_id": 6892,
        "kelurahan": "Hamadi",
        "kd_pos": 99221
      },
      {
        "id": 80768,
        "kecamatan_id": 6892,
        "kelurahan": "Numbai (Numbay)",
        "kd_pos": 99221
      },
      {
        "id": 80769,
        "kecamatan_id": 6892,
        "kelurahan": "Tahima Sorama",
        "kd_pos": 99221
      },
      {
        "id": 80770,
        "kecamatan_id": 6892,
        "kelurahan": "Tobati",
        "kd_pos": 99221
      },
      {
        "id": 80771,
        "kecamatan_id": 6892,
        "kelurahan": "Vim",
        "kd_pos": 99225
      },
      {
        "id": 80772,
        "kecamatan_id": 6892,
        "kelurahan": "Wahno",
        "kd_pos": 99226
      },
      {
        "id": 80773,
        "kecamatan_id": 6892,
        "kelurahan": "Way Mhorock",
        "kd_pos": 99221
      },
      {
        "id": 80774,
        "kecamatan_id": 6893,
        "kelurahan": "Angkasapura",
        "kd_pos": 99113
      },
      {
        "id": 80775,
        "kecamatan_id": 6893,
        "kelurahan": "Bhayangkara (Bayangkara)",
        "kd_pos": 99112
      },
      {
        "id": 80776,
        "kecamatan_id": 6893,
        "kelurahan": "Gurabesi",
        "kd_pos": 99111
      },
      {
        "id": 80777,
        "kecamatan_id": 6893,
        "kelurahan": "Imbi",
        "kd_pos": 99116
      },
      {
        "id": 80778,
        "kecamatan_id": 6893,
        "kelurahan": "Mandala",
        "kd_pos": 99115
      },
      {
        "id": 80779,
        "kecamatan_id": 6893,
        "kelurahan": "Tanjung Ria",
        "kd_pos": 99117
      },
      {
        "id": 80780,
        "kecamatan_id": 6893,
        "kelurahan": "Trikora",
        "kd_pos": 99114
      },
      {
        "id": 80781,
        "kecamatan_id": 6894,
        "kelurahan": "Holtekamp",
        "kd_pos": 99351
      },
      {
        "id": 80782,
        "kecamatan_id": 6894,
        "kelurahan": "Koya Barat",
        "kd_pos": 99351
      },
      {
        "id": 80783,
        "kecamatan_id": 6894,
        "kelurahan": "Koya Tengah",
        "kd_pos": 99351
      },
      {
        "id": 80784,
        "kecamatan_id": 6894,
        "kelurahan": "Koya Timur",
        "kd_pos": 99351
      },
      {
        "id": 80785,
        "kecamatan_id": 6894,
        "kelurahan": "Mosso",
        "kd_pos": 99351
      },
      {
        "id": 80786,
        "kecamatan_id": 6894,
        "kelurahan": "Skow Mabo (Skouw Mabo )",
        "kd_pos": 99351
      },
      {
        "id": 80787,
        "kecamatan_id": 6894,
        "kelurahan": "Skow Sae (Skouw Sae)",
        "kd_pos": 99351
      },
      {
        "id": 80788,
        "kecamatan_id": 6894,
        "kelurahan": "Skow Yambe (Skouw Yambe)",
        "kd_pos": 99351
      },
      {
        "id": 80789,
        "kecamatan_id": 6895,
        "kelurahan": "Andamata",
        "kd_pos": 98652
      },
      {
        "id": 80790,
        "kecamatan_id": 6895,
        "kelurahan": "Arguni",
        "kd_pos": 98652
      },
      {
        "id": 80791,
        "kecamatan_id": 6895,
        "kelurahan": "Fior",
        "kd_pos": 98652
      },
      {
        "id": 80792,
        "kecamatan_id": 6895,
        "kelurahan": "Furir",
        "kd_pos": 98652
      },
      {
        "id": 80793,
        "kecamatan_id": 6895,
        "kelurahan": "Taver",
        "kd_pos": 98652
      },
      {
        "id": 80794,
        "kecamatan_id": 6896,
        "kelurahan": "Bumi Moroh Indah",
        "kd_pos": 98662
      },
      {
        "id": 80795,
        "kecamatan_id": 6896,
        "kelurahan": "Mekarsari",
        "kd_pos": 98662
      },
      {
        "id": 80796,
        "kecamatan_id": 6896,
        "kelurahan": "Onim Jaya",
        "kd_pos": 98662
      },
      {
        "id": 80797,
        "kecamatan_id": 6896,
        "kelurahan": "Onimsari",
        "kd_pos": 98662
      },
      {
        "id": 80798,
        "kecamatan_id": 6896,
        "kelurahan": "Pinang Agung",
        "kd_pos": 98662
      },
      {
        "id": 80799,
        "kecamatan_id": 6896,
        "kelurahan": "Tesha Perda",
        "kd_pos": 98662
      },
      {
        "id": 80800,
        "kecamatan_id": 6896,
        "kelurahan": "Wono Rejo",
        "kd_pos": 98662
      },
      {
        "id": 80801,
        "kecamatan_id": 6897,
        "kelurahan": "Fak Fak Selatan",
        "kd_pos": 98611
      },
      {
        "id": 80802,
        "kecamatan_id": 6897,
        "kelurahan": "Fak Fak Utara",
        "kd_pos": 98611
      },
      {
        "id": 80803,
        "kecamatan_id": 6897,
        "kelurahan": "Gewerpe",
        "kd_pos": 98611
      },
      {
        "id": 80804,
        "kecamatan_id": 6897,
        "kelurahan": "Lusi Peri",
        "kd_pos": 98611
      },
      {
        "id": 80805,
        "kecamatan_id": 6897,
        "kelurahan": "Wrikapal",
        "kd_pos": 98611
      },
      {
        "id": 80806,
        "kecamatan_id": 6898,
        "kelurahan": "Kiat",
        "kd_pos": 98661
      },
      {
        "id": 80807,
        "kecamatan_id": 6898,
        "kelurahan": "Kwuhkendak",
        "kd_pos": 98661
      },
      {
        "id": 80808,
        "kecamatan_id": 6898,
        "kelurahan": "Pahger Nkindik",
        "kd_pos": 98661
      },
      {
        "id": 80809,
        "kecamatan_id": 6898,
        "kelurahan": "Porum",
        "kd_pos": 98661
      },
      {
        "id": 80810,
        "kecamatan_id": 6898,
        "kelurahan": "Purwahab Tonggo",
        "kd_pos": 98661
      },
      {
        "id": 80811,
        "kecamatan_id": 6898,
        "kelurahan": "Purwasak",
        "kd_pos": 98661
      },
      {
        "id": 80812,
        "kecamatan_id": 6898,
        "kelurahan": "Werba",
        "kd_pos": 98661
      },
      {
        "id": 80813,
        "kecamatan_id": 6898,
        "kelurahan": "Werba Utara",
        "kd_pos": 98661
      },
      {
        "id": 80814,
        "kecamatan_id": 6898,
        "kelurahan": "Wurkendik",
        "kd_pos": 98661
      },
      {
        "id": 80815,
        "kecamatan_id": 6899,
        "kelurahan": "Air Besar",
        "kd_pos": 98611
      },
      {
        "id": 80816,
        "kecamatan_id": 6899,
        "kelurahan": "Brongkendik",
        "kd_pos": 98611
      },
      {
        "id": 80817,
        "kecamatan_id": 6899,
        "kelurahan": "Danaweria",
        "kd_pos": 98611
      },
      {
        "id": 80818,
        "kecamatan_id": 6899,
        "kelurahan": "Hambrangkendik",
        "kd_pos": 98611
      },
      {
        "id": 80819,
        "kecamatan_id": 6899,
        "kelurahan": "Kanantare",
        "kd_pos": 98611
      },
      {
        "id": 80820,
        "kecamatan_id": 6899,
        "kelurahan": "Katemba",
        "kd_pos": 98611
      },
      {
        "id": 80821,
        "kecamatan_id": 6899,
        "kelurahan": "Kayu Merah",
        "kd_pos": 98611
      },
      {
        "id": 80822,
        "kecamatan_id": 6899,
        "kelurahan": "Mandopma",
        "kd_pos": 98611
      },
      {
        "id": 80823,
        "kecamatan_id": 6899,
        "kelurahan": "Nemewikarya",
        "kd_pos": 98611
      },
      {
        "id": 80824,
        "kecamatan_id": 6899,
        "kelurahan": "Pasir Putih",
        "kd_pos": 98611
      },
      {
        "id": 80825,
        "kecamatan_id": 6899,
        "kelurahan": "Pirma",
        "kd_pos": 98611
      },
      {
        "id": 80826,
        "kecamatan_id": 6899,
        "kelurahan": "Raduria",
        "kd_pos": 98611
      },
      {
        "id": 80827,
        "kecamatan_id": 6899,
        "kelurahan": "Sakartemin",
        "kd_pos": 98611
      },
      {
        "id": 80828,
        "kecamatan_id": 6899,
        "kelurahan": "Unipokpok",
        "kd_pos": 98611
      },
      {
        "id": 80829,
        "kecamatan_id": 6900,
        "kelurahan": "Kiria Bisa",
        "kd_pos": 98662
      },
      {
        "id": 80830,
        "kecamatan_id": 6900,
        "kelurahan": "Saharei",
        "kd_pos": 98662
      },
      {
        "id": 80831,
        "kecamatan_id": 6900,
        "kelurahan": "Sanggram",
        "kd_pos": 98662
      },
      {
        "id": 80832,
        "kecamatan_id": 6900,
        "kelurahan": "Tunas Gain",
        "kd_pos": 98662
      },
      {
        "id": 80833,
        "kecamatan_id": 6900,
        "kelurahan": "Urat",
        "kd_pos": 98662
      },
      {
        "id": 80834,
        "kecamatan_id": 6900,
        "kelurahan": "Weri",
        "kd_pos": 98662
      },
      {
        "id": 80835,
        "kecamatan_id": 6901,
        "kelurahan": "Kalamanuk",
        "kd_pos": 98662
      },
      {
        "id": 80836,
        "kecamatan_id": 6901,
        "kelurahan": "Kotam",
        "kd_pos": 98662
      },
      {
        "id": 80837,
        "kecamatan_id": 6901,
        "kelurahan": "Krabelang",
        "kd_pos": 98662
      },
      {
        "id": 80838,
        "kecamatan_id": 6901,
        "kelurahan": "Kwama",
        "kd_pos": 98662
      },
      {
        "id": 80839,
        "kecamatan_id": 6901,
        "kelurahan": "Wambar",
        "kd_pos": 98662
      },
      {
        "id": 80840,
        "kecamatan_id": 6901,
        "kelurahan": "Wambar Timur",
        "kd_pos": 98662
      },
      {
        "id": 80841,
        "kecamatan_id": 6901,
        "kelurahan": "Waserat",
        "kd_pos": 98662
      },
      {
        "id": 80842,
        "kecamatan_id": 6901,
        "kelurahan": "Wayati",
        "kd_pos": 98662
      },
      {
        "id": 80843,
        "kecamatan_id": 6901,
        "kelurahan": "Wayati Barat",
        "kd_pos": 98662
      },
      {
        "id": 80844,
        "kecamatan_id": 6901,
        "kelurahan": "Wayati Timur",
        "kd_pos": 98662
      },
      {
        "id": 80845,
        "kecamatan_id": 6902,
        "kelurahan": "Gar",
        "kd_pos": 98661
      },
      {
        "id": 80846,
        "kecamatan_id": 6902,
        "kelurahan": "Rumbati",
        "kd_pos": 98661
      },
      {
        "id": 80847,
        "kecamatan_id": 6902,
        "kelurahan": "Salakiti",
        "kd_pos": 98661
      },
      {
        "id": 80848,
        "kecamatan_id": 6902,
        "kelurahan": "Sengkiti",
        "kd_pos": 98661
      },
      {
        "id": 80849,
        "kecamatan_id": 6902,
        "kelurahan": "Tanehamur",
        "kd_pos": 98661
      },
      {
        "id": 80850,
        "kecamatan_id": 6902,
        "kelurahan": "Tawar",
        "kd_pos": 98661
      },
      {
        "id": 80851,
        "kecamatan_id": 6902,
        "kelurahan": "Twootkindik",
        "kd_pos": 98661
      },
      {
        "id": 80852,
        "kecamatan_id": 6902,
        "kelurahan": "Werfra",
        "kd_pos": 98661
      },
      {
        "id": 80853,
        "kecamatan_id": 6903,
        "kelurahan": "Antalisa",
        "kd_pos": 98662
      },
      {
        "id": 80854,
        "kecamatan_id": 6903,
        "kelurahan": "Faur",
        "kd_pos": 98662
      },
      {
        "id": 80855,
        "kecamatan_id": 6903,
        "kelurahan": "Kiaba",
        "kd_pos": 98662
      },
      {
        "id": 80856,
        "kecamatan_id": 6903,
        "kelurahan": "Malakuli",
        "kd_pos": 98662
      },
      {
        "id": 80857,
        "kecamatan_id": 6903,
        "kelurahan": "Mas",
        "kd_pos": 98662
      },
      {
        "id": 80858,
        "kecamatan_id": 6903,
        "kelurahan": "Tarak",
        "kd_pos": 98662
      },
      {
        "id": 80859,
        "kecamatan_id": 6903,
        "kelurahan": "Tuberwasak",
        "kd_pos": 98662
      },
      {
        "id": 80860,
        "kecamatan_id": 6904,
        "kelurahan": "Homorkokma",
        "kd_pos": 98652
      },
      {
        "id": 80861,
        "kecamatan_id": 6904,
        "kelurahan": "Kaburbur",
        "kd_pos": 98652
      },
      {
        "id": 80862,
        "kecamatan_id": 6904,
        "kelurahan": "Kayuni",
        "kd_pos": 98652
      },
      {
        "id": 80863,
        "kecamatan_id": 6904,
        "kelurahan": "Kuagas",
        "kd_pos": 98652
      },
      {
        "id": 80864,
        "kecamatan_id": 6904,
        "kelurahan": "Mananmur",
        "kd_pos": 98652
      },
      {
        "id": 80865,
        "kecamatan_id": 6904,
        "kelurahan": "Pattukar",
        "kd_pos": 98652
      },
      {
        "id": 80866,
        "kecamatan_id": 6904,
        "kelurahan": "Rangkendak",
        "kd_pos": 98652
      },
      {
        "id": 80867,
        "kecamatan_id": 6904,
        "kelurahan": "Ubadari",
        "kd_pos": 98652
      },
      {
        "id": 80868,
        "kecamatan_id": 6904,
        "kelurahan": "Warpa",
        "kd_pos": 98652
      },
      {
        "id": 80869,
        "kecamatan_id": 6905,
        "kelurahan": "Batufiafas",
        "kd_pos": 98652
      },
      {
        "id": 80870,
        "kecamatan_id": 6905,
        "kelurahan": "Kampung Baru",
        "kd_pos": 98652
      },
      {
        "id": 80871,
        "kecamatan_id": 6905,
        "kelurahan": "Kimina Kra",
        "kd_pos": 98652
      },
      {
        "id": 80872,
        "kecamatan_id": 6905,
        "kelurahan": "Kinam",
        "kd_pos": 98652
      },
      {
        "id": 80873,
        "kecamatan_id": 6905,
        "kelurahan": "Kokas Kota",
        "kd_pos": 98652
      },
      {
        "id": 80874,
        "kecamatan_id": 6905,
        "kelurahan": "Kriawaswas",
        "kd_pos": 98652
      },
      {
        "id": 80875,
        "kecamatan_id": 6905,
        "kelurahan": "Mambunibuni",
        "kd_pos": 98652
      },
      {
        "id": 80876,
        "kecamatan_id": 6905,
        "kelurahan": "Mandoni",
        "kd_pos": 98652
      },
      {
        "id": 80877,
        "kecamatan_id": 6905,
        "kelurahan": "Masina",
        "kd_pos": 98652
      },
      {
        "id": 80878,
        "kecamatan_id": 6905,
        "kelurahan": "Pang Wadar",
        "kd_pos": 98652
      },
      {
        "id": 80879,
        "kecamatan_id": 6905,
        "kelurahan": "Patimburak",
        "kd_pos": 98652
      },
      {
        "id": 80880,
        "kecamatan_id": 6905,
        "kelurahan": "Sekar",
        "kd_pos": 98652
      },
      {
        "id": 80881,
        "kecamatan_id": 6905,
        "kelurahan": "Sisir",
        "kd_pos": 98652
      },
      {
        "id": 80882,
        "kecamatan_id": 6905,
        "kelurahan": "Sosar",
        "kd_pos": 98652
      },
      {
        "id": 80883,
        "kecamatan_id": 6905,
        "kelurahan": "Ugar",
        "kd_pos": 98652
      },
      {
        "id": 80884,
        "kecamatan_id": 6906,
        "kelurahan": "Bahbadan",
        "kd_pos": 98652
      },
      {
        "id": 80885,
        "kecamatan_id": 6906,
        "kelurahan": "Gewab",
        "kd_pos": 98652
      },
      {
        "id": 80886,
        "kecamatan_id": 6906,
        "kelurahan": "Kramongmongga",
        "kd_pos": 98652
      },
      {
        "id": 80887,
        "kecamatan_id": 6906,
        "kelurahan": "Kwamkwamur",
        "kd_pos": 98652
      },
      {
        "id": 80888,
        "kecamatan_id": 6906,
        "kelurahan": "Mamur",
        "kd_pos": 98652
      },
      {
        "id": 80889,
        "kecamatan_id": 6906,
        "kelurahan": "Mbaham Ma Youn",
        "kd_pos": 98652
      },
      {
        "id": 80890,
        "kecamatan_id": 6906,
        "kelurahan": "Nembukteb",
        "kd_pos": 98652
      },
      {
        "id": 80891,
        "kecamatan_id": 6906,
        "kelurahan": "Pikpik",
        "kd_pos": 98652
      },
      {
        "id": 80892,
        "kecamatan_id": 6906,
        "kelurahan": "Tentreda",
        "kd_pos": 98652
      },
      {
        "id": 80893,
        "kecamatan_id": 6906,
        "kelurahan": "Wargep",
        "kd_pos": 98652
      },
      {
        "id": 80894,
        "kecamatan_id": 6907,
        "kelurahan": "Darembang",
        "kd_pos": 98652
      },
      {
        "id": 80895,
        "kecamatan_id": 6907,
        "kelurahan": "Goras",
        "kd_pos": 98652
      },
      {
        "id": 80896,
        "kecamatan_id": 6907,
        "kelurahan": "Goras Selatan",
        "kd_pos": 98652
      },
      {
        "id": 80897,
        "kecamatan_id": 6907,
        "kelurahan": "Mbahamdandra",
        "kd_pos": 98652
      },
      {
        "id": 80898,
        "kecamatan_id": 6907,
        "kelurahan": "Mitimber",
        "kd_pos": 98652
      },
      {
        "id": 80899,
        "kecamatan_id": 6907,
        "kelurahan": "Waremu",
        "kd_pos": 98652
      },
      {
        "id": 80900,
        "kecamatan_id": 6907,
        "kelurahan": "Wos",
        "kd_pos": 98652
      },
      {
        "id": 80901,
        "kecamatan_id": 6908,
        "kelurahan": "Dulanpokpok",
        "kd_pos": 98611
      },
      {
        "id": 80902,
        "kecamatan_id": 6908,
        "kelurahan": "Kapaurtutin",
        "kd_pos": 98611
      },
      {
        "id": 80903,
        "kecamatan_id": 6908,
        "kelurahan": "Sekban",
        "kd_pos": 98611
      },
      {
        "id": 80904,
        "kecamatan_id": 6908,
        "kelurahan": "Sekru",
        "kd_pos": 98611
      },
      {
        "id": 80905,
        "kecamatan_id": 6908,
        "kelurahan": "Sukuru Tuare",
        "kd_pos": 98611
      },
      {
        "id": 80906,
        "kecamatan_id": 6908,
        "kelurahan": "Tanama",
        "kd_pos": 98611
      },
      {
        "id": 80907,
        "kecamatan_id": 6908,
        "kelurahan": "Torea",
        "kd_pos": 98611
      },
      {
        "id": 80908,
        "kecamatan_id": 6908,
        "kelurahan": "Wagom",
        "kd_pos": 98611
      },
      {
        "id": 80909,
        "kecamatan_id": 6908,
        "kelurahan": "Wagom Utara",
        "kd_pos": 98611
      },
      {
        "id": 80910,
        "kecamatan_id": 6909,
        "kelurahan": "Adora",
        "kd_pos": 98661
      },
      {
        "id": 80911,
        "kecamatan_id": 6909,
        "kelurahan": "Bisa",
        "kd_pos": 98661
      },
      {
        "id": 80912,
        "kecamatan_id": 6909,
        "kelurahan": "Degen",
        "kd_pos": 98661
      },
      {
        "id": 80913,
        "kecamatan_id": 6909,
        "kelurahan": "Mawar",
        "kd_pos": 98661
      },
      {
        "id": 80914,
        "kecamatan_id": 6909,
        "kelurahan": "Muhri",
        "kd_pos": 98661
      },
      {
        "id": 80915,
        "kecamatan_id": 6909,
        "kelurahan": "Offie",
        "kd_pos": 98661
      },
      {
        "id": 80916,
        "kecamatan_id": 6909,
        "kelurahan": "Patipi Pasir",
        "kd_pos": 98661
      },
      {
        "id": 80917,
        "kecamatan_id": 6909,
        "kelurahan": "Patipi Pulau",
        "kd_pos": 98661
      },
      {
        "id": 80918,
        "kecamatan_id": 6909,
        "kelurahan": "Puar",
        "kd_pos": 98661
      },
      {
        "id": 80919,
        "kecamatan_id": 6909,
        "kelurahan": "Sum",
        "kd_pos": 98661
      },
      {
        "id": 80920,
        "kecamatan_id": 6909,
        "kelurahan": "Tetar",
        "kd_pos": 98661
      },
      {
        "id": 80921,
        "kecamatan_id": 6909,
        "kelurahan": "Tibatibananam",
        "kd_pos": 98661
      },
      {
        "id": 80922,
        "kecamatan_id": 6909,
        "kelurahan": "Us",
        "kd_pos": 98661
      },
      {
        "id": 80923,
        "kecamatan_id": 6910,
        "kelurahan": "Mbima Jaya",
        "kd_pos": 98662
      },
      {
        "id": 80924,
        "kecamatan_id": 6910,
        "kelurahan": "Otoweri",
        "kd_pos": 98662
      },
      {
        "id": 80925,
        "kecamatan_id": 6910,
        "kelurahan": "Salawier",
        "kd_pos": 98662
      },
      {
        "id": 80926,
        "kecamatan_id": 6910,
        "kelurahan": "Tomage",
        "kd_pos": 98662
      },
      {
        "id": 80927,
        "kecamatan_id": 6910,
        "kelurahan": "Wammar",
        "kd_pos": 98662
      },
      {
        "id": 80928,
        "kecamatan_id": 6910,
        "kelurahan": "Wamosan",
        "kd_pos": 98662
      },
      {
        "id": 80929,
        "kecamatan_id": 6910,
        "kelurahan": "Warisa Mulya",
        "kd_pos": 98662
      },
      {
        "id": 80930,
        "kecamatan_id": 6910,
        "kelurahan": "Wasa Mulya",
        "kd_pos": 98662
      },
      {
        "id": 80931,
        "kecamatan_id": 6910,
        "kelurahan": "Wonodadi Mulya",
        "kd_pos": 98662
      },
      {
        "id": 80932,
        "kecamatan_id": 6911,
        "kelurahan": "Kamandur Tetar",
        "kd_pos": 98661
      },
      {
        "id": 80933,
        "kecamatan_id": 6911,
        "kelurahan": "Siboru",
        "kd_pos": 98661
      },
      {
        "id": 80934,
        "kecamatan_id": 6911,
        "kelurahan": "Sipatnanam",
        "kd_pos": 98661
      },
      {
        "id": 80935,
        "kecamatan_id": 6911,
        "kelurahan": "Wartutin",
        "kd_pos": 98661
      },
      {
        "id": 80936,
        "kecamatan_id": 6911,
        "kelurahan": "Werabuan",
        "kd_pos": 98661
      },
      {
        "id": 80937,
        "kecamatan_id": 6911,
        "kelurahan": "Werpigan",
        "kd_pos": 98661
      },
      {
        "id": 80938,
        "kecamatan_id": 6912,
        "kelurahan": "Adijaya",
        "kd_pos": 98656
      },
      {
        "id": 80939,
        "kecamatan_id": 6912,
        "kelurahan": "Edor",
        "kd_pos": 98656
      },
      {
        "id": 80940,
        "kecamatan_id": 6912,
        "kelurahan": "Esania",
        "kd_pos": 98656
      },
      {
        "id": 80941,
        "kecamatan_id": 6912,
        "kelurahan": "Gaka",
        "kd_pos": 98656
      },
      {
        "id": 80942,
        "kecamatan_id": 6912,
        "kelurahan": "Guriasa",
        "kd_pos": 98656
      },
      {
        "id": 80943,
        "kecamatan_id": 6912,
        "kelurahan": "Hia",
        "kd_pos": 98656
      },
      {
        "id": 80944,
        "kecamatan_id": 6912,
        "kelurahan": "Kambala",
        "kd_pos": 98656
      },
      {
        "id": 80945,
        "kecamatan_id": 6912,
        "kelurahan": "Nusaulan Jaya",
        "kd_pos": 98656
      },
      {
        "id": 80946,
        "kecamatan_id": 6912,
        "kelurahan": "Tairi",
        "kd_pos": 98656
      },
      {
        "id": 80947,
        "kecamatan_id": 6912,
        "kelurahan": "Yarona",
        "kd_pos": 98656
      },
      {
        "id": 80948,
        "kecamatan_id": 6913,
        "kelurahan": "Coa",
        "kd_pos": 98654
      },
      {
        "id": 80949,
        "kecamatan_id": 6913,
        "kelurahan": "Foroma Jaya",
        "kd_pos": 98654
      },
      {
        "id": 80950,
        "kecamatan_id": 6913,
        "kelurahan": "Jarati",
        "kd_pos": 98654
      },
      {
        "id": 80951,
        "kecamatan_id": 6913,
        "kelurahan": "Kaimana Kota",
        "kd_pos": 98654
      },
      {
        "id": 80952,
        "kecamatan_id": 6913,
        "kelurahan": "Kamaka",
        "kd_pos": 98654
      },
      {
        "id": 80953,
        "kecamatan_id": 6913,
        "kelurahan": "Krooy",
        "kd_pos": 98654
      },
      {
        "id": 80954,
        "kecamatan_id": 6913,
        "kelurahan": "Lobo",
        "kd_pos": 98654
      },
      {
        "id": 80955,
        "kecamatan_id": 6913,
        "kelurahan": "Lumira",
        "kd_pos": 98654
      },
      {
        "id": 80956,
        "kecamatan_id": 6913,
        "kelurahan": "Mai Mai",
        "kd_pos": 98654
      },
      {
        "id": 80957,
        "kecamatan_id": 6913,
        "kelurahan": "Marsi",
        "kd_pos": 98654
      },
      {
        "id": 80958,
        "kecamatan_id": 6913,
        "kelurahan": "Murano",
        "kd_pos": 98654
      },
      {
        "id": 80959,
        "kecamatan_id": 6913,
        "kelurahan": "Namatota",
        "kd_pos": 98654
      },
      {
        "id": 80960,
        "kecamatan_id": 6913,
        "kelurahan": "Oray",
        "kd_pos": 98654
      },
      {
        "id": 80961,
        "kecamatan_id": 6913,
        "kelurahan": "Sara",
        "kd_pos": 98654
      },
      {
        "id": 80962,
        "kecamatan_id": 6913,
        "kelurahan": "Saria",
        "kd_pos": 98654
      },
      {
        "id": 80963,
        "kecamatan_id": 6913,
        "kelurahan": "Sisir",
        "kd_pos": 98654
      },
      {
        "id": 80964,
        "kecamatan_id": 6913,
        "kelurahan": "Tanggaromi",
        "kd_pos": 98654
      },
      {
        "id": 80965,
        "kecamatan_id": 6913,
        "kelurahan": "Trikora",
        "kd_pos": 98654
      },
      {
        "id": 80966,
        "kecamatan_id": 6913,
        "kelurahan": "Werua",
        "kd_pos": 98654
      },
      {
        "id": 80967,
        "kecamatan_id": 6914,
        "kelurahan": "Bahumia",
        "kd_pos": 98654
      },
      {
        "id": 80968,
        "kecamatan_id": 6914,
        "kelurahan": "Kooy",
        "kd_pos": 98654
      },
      {
        "id": 80969,
        "kecamatan_id": 6914,
        "kelurahan": "Rauna",
        "kd_pos": 98654
      },
      {
        "id": 80970,
        "kecamatan_id": 6914,
        "kelurahan": "Sermuku (Ubia Sermuku)",
        "kd_pos": 98654
      },
      {
        "id": 80971,
        "kecamatan_id": 6914,
        "kelurahan": "Waho",
        "kd_pos": 98654
      },
      {
        "id": 80972,
        "kecamatan_id": 6914,
        "kelurahan": "Wamesa",
        "kd_pos": 98654
      },
      {
        "id": 80973,
        "kecamatan_id": 6914,
        "kelurahan": "Werafuta",
        "kd_pos": 98654
      },
      {
        "id": 80974,
        "kecamatan_id": 6915,
        "kelurahan": "Afuafu",
        "kd_pos": 98653
      },
      {
        "id": 80975,
        "kecamatan_id": 6915,
        "kelurahan": "Bayeda",
        "kd_pos": 98653
      },
      {
        "id": 80976,
        "kecamatan_id": 6915,
        "kelurahan": "Bofuwer",
        "kd_pos": 98653
      },
      {
        "id": 80977,
        "kecamatan_id": 6915,
        "kelurahan": "Borogerba",
        "kd_pos": 98653
      },
      {
        "id": 80978,
        "kecamatan_id": 6915,
        "kelurahan": "Erigara",
        "kd_pos": 98653
      },
      {
        "id": 80979,
        "kecamatan_id": 6915,
        "kelurahan": "Feternu (Fetermu)",
        "kd_pos": 98653
      },
      {
        "id": 80980,
        "kecamatan_id": 6915,
        "kelurahan": "Fudima",
        "kd_pos": 98653
      },
      {
        "id": 80981,
        "kecamatan_id": 6915,
        "kelurahan": "Furnusu (Fumusu)",
        "kd_pos": 98653
      },
      {
        "id": 80982,
        "kecamatan_id": 6915,
        "kelurahan": "Gusi",
        "kd_pos": 98653
      },
      {
        "id": 80983,
        "kecamatan_id": 6915,
        "kelurahan": "Kensi (Kasira)",
        "kd_pos": 98653
      },
      {
        "id": 80984,
        "kecamatan_id": 6915,
        "kelurahan": "Kokoroba",
        "kd_pos": 98653
      },
      {
        "id": 80985,
        "kecamatan_id": 6915,
        "kelurahan": "Maskur",
        "kd_pos": 98653
      },
      {
        "id": 80986,
        "kecamatan_id": 6915,
        "kelurahan": "Moyana",
        "kd_pos": 98653
      },
      {
        "id": 80987,
        "kecamatan_id": 6915,
        "kelurahan": "Pigo",
        "kd_pos": 98653
      },
      {
        "id": 80988,
        "kecamatan_id": 6915,
        "kelurahan": "Sawatewera (Sawatawera)",
        "kd_pos": 98653
      },
      {
        "id": 80989,
        "kecamatan_id": 6915,
        "kelurahan": "Sawi (Sawia)",
        "kd_pos": 98653
      },
      {
        "id": 80990,
        "kecamatan_id": 6915,
        "kelurahan": "Tiwara",
        "kd_pos": 98653
      },
      {
        "id": 80991,
        "kecamatan_id": 6915,
        "kelurahan": "Tuguwara",
        "kd_pos": 98653
      },
      {
        "id": 80992,
        "kecamatan_id": 6915,
        "kelurahan": "Turgani (Tugarni)",
        "kd_pos": 98653
      },
      {
        "id": 80993,
        "kecamatan_id": 6915,
        "kelurahan": "Wainaga",
        "kd_pos": 98653
      },
      {
        "id": 80994,
        "kecamatan_id": 6915,
        "kelurahan": "Wanggita",
        "kd_pos": 98653
      },
      {
        "id": 80995,
        "kecamatan_id": 6915,
        "kelurahan": "Warua",
        "kd_pos": 98653
      },
      {
        "id": 80996,
        "kecamatan_id": 6915,
        "kelurahan": "Warwasi",
        "kd_pos": 98653
      },
      {
        "id": 80997,
        "kecamatan_id": 6915,
        "kelurahan": "Weswasa",
        "kd_pos": 98653
      },
      {
        "id": 80998,
        "kecamatan_id": 6916,
        "kelurahan": "Egerwara",
        "kd_pos": 98653
      },
      {
        "id": 80999,
        "kecamatan_id": 6916,
        "kelurahan": "Inari",
        "kd_pos": 98653
      },
      {
        "id": 81000,
        "kecamatan_id": 6916,
        "kelurahan": "Jawera",
        "kd_pos": 98653
      },
      {
        "id": 81001,
        "kecamatan_id": 6916,
        "kelurahan": "Kufuriyai",
        "kd_pos": 98653
      },
      {
        "id": 81002,
        "kecamatan_id": 6916,
        "kelurahan": "Manggera",
        "kd_pos": 98653
      },
      {
        "id": 81003,
        "kecamatan_id": 6916,
        "kelurahan": "Nagura",
        "kd_pos": 98653
      },
      {
        "id": 81004,
        "kecamatan_id": 6916,
        "kelurahan": "Ruwara",
        "kd_pos": 98653
      },
      {
        "id": 81005,
        "kecamatan_id": 6916,
        "kelurahan": "Seraran",
        "kd_pos": 98653
      },
      {
        "id": 81006,
        "kecamatan_id": 6916,
        "kelurahan": "Sumun",
        "kd_pos": 98653
      },
      {
        "id": 81007,
        "kecamatan_id": 6916,
        "kelurahan": "Tanusan",
        "kd_pos": 98653
      },
      {
        "id": 81008,
        "kecamatan_id": 6916,
        "kelurahan": "Ukiara",
        "kd_pos": 98653
      },
      {
        "id": 81009,
        "kecamatan_id": 6916,
        "kelurahan": "Urisa",
        "kd_pos": 98653
      },
      {
        "id": 81010,
        "kecamatan_id": 6916,
        "kelurahan": "Wanoma",
        "kd_pos": 98653
      },
      {
        "id": 81011,
        "kecamatan_id": 6916,
        "kelurahan": "Waromi",
        "kd_pos": 98653
      },
      {
        "id": 81012,
        "kecamatan_id": 6916,
        "kelurahan": "Wermenu",
        "kd_pos": 98653
      },
      {
        "id": 81013,
        "kecamatan_id": 6917,
        "kelurahan": "Bamana",
        "kd_pos": 98655
      },
      {
        "id": 81014,
        "kecamatan_id": 6917,
        "kelurahan": "Boiya",
        "kd_pos": 98655
      },
      {
        "id": 81015,
        "kecamatan_id": 6917,
        "kelurahan": "Nariki",
        "kd_pos": 98655
      },
      {
        "id": 81016,
        "kecamatan_id": 6917,
        "kelurahan": "Rurumo",
        "kd_pos": 98655
      },
      {
        "id": 81017,
        "kecamatan_id": 6917,
        "kelurahan": "Siawatan",
        "kd_pos": 98655
      },
      {
        "id": 81018,
        "kecamatan_id": 6918,
        "kelurahan": "Hairapara",
        "kd_pos": 98655
      },
      {
        "id": 81019,
        "kecamatan_id": 6918,
        "kelurahan": "Omba Pamuku",
        "kd_pos": 98655
      },
      {
        "id": 81020,
        "kecamatan_id": 6918,
        "kelurahan": "Ure (Mury/Uray)",
        "kd_pos": 98655
      },
      {
        "id": 81021,
        "kecamatan_id": 6918,
        "kelurahan": "Urubika",
        "kd_pos": 98655
      },
      {
        "id": 81022,
        "kecamatan_id": 6918,
        "kelurahan": "Wagoha (Wagioha)",
        "kd_pos": 98655
      },
      {
        "id": 81023,
        "kecamatan_id": 6918,
        "kelurahan": "Wosokuno",
        "kd_pos": 98655
      },
      {
        "id": 81024,
        "kecamatan_id": 6919,
        "kelurahan": "Amban",
        "kd_pos": 98314
      },
      {
        "id": 81025,
        "kecamatan_id": 6919,
        "kelurahan": "Binirauw (Biniraw)",
        "kd_pos": 98312
      },
      {
        "id": 81026,
        "kecamatan_id": 6919,
        "kelurahan": "Inggramui",
        "kd_pos": 98312
      },
      {
        "id": 81027,
        "kecamatan_id": 6919,
        "kelurahan": "Manokwari Barat",
        "kd_pos": 98312
      },
      {
        "id": 81028,
        "kecamatan_id": 6919,
        "kelurahan": "Manokwari Timur",
        "kd_pos": 98311
      },
      {
        "id": 81029,
        "kecamatan_id": 6919,
        "kelurahan": "Padarni",
        "kd_pos": 98312
      },
      {
        "id": 81030,
        "kecamatan_id": 6919,
        "kelurahan": "Sanggeng",
        "kd_pos": 98312
      },
      {
        "id": 81031,
        "kecamatan_id": 6919,
        "kelurahan": "Soribo",
        "kd_pos": 98312
      },
      {
        "id": 81032,
        "kecamatan_id": 6919,
        "kelurahan": "Udopi",
        "kd_pos": 98312
      },
      {
        "id": 81033,
        "kecamatan_id": 6919,
        "kelurahan": "Wosi",
        "kd_pos": 98312
      },
      {
        "id": 81034,
        "kecamatan_id": 6920,
        "kelurahan": "Acemo",
        "kd_pos": 98315
      },
      {
        "id": 81035,
        "kecamatan_id": 6920,
        "kelurahan": "Anday",
        "kd_pos": 98315
      },
      {
        "id": 81036,
        "kecamatan_id": 6920,
        "kelurahan": "Angrisi (Anggresi)",
        "kd_pos": 98315
      },
      {
        "id": 81037,
        "kecamatan_id": 6920,
        "kelurahan": "Dihara",
        "kd_pos": 98315
      },
      {
        "id": 81038,
        "kecamatan_id": 6920,
        "kelurahan": "Dobut (Doopud/Doput)",
        "kd_pos": 98315
      },
      {
        "id": 81039,
        "kecamatan_id": 6920,
        "kelurahan": "Katebu",
        "kd_pos": 98315
      },
      {
        "id": 81040,
        "kecamatan_id": 6920,
        "kelurahan": "Maruni",
        "kd_pos": 98315
      },
      {
        "id": 81041,
        "kecamatan_id": 6920,
        "kelurahan": "Masiepi (Masyepi)",
        "kd_pos": 98315
      },
      {
        "id": 81042,
        "kecamatan_id": 6920,
        "kelurahan": "Misapmeysi",
        "kd_pos": 98315
      },
      {
        "id": 81043,
        "kecamatan_id": 6920,
        "kelurahan": "Mupi",
        "kd_pos": 98315
      },
      {
        "id": 81044,
        "kecamatan_id": 6920,
        "kelurahan": "Ngunibouw (Nginibouw/Nginybou)",
        "kd_pos": 98315
      },
      {
        "id": 81045,
        "kecamatan_id": 6920,
        "kelurahan": "Nimbiauw (Nimbauw)",
        "kd_pos": 98315
      },
      {
        "id": 81046,
        "kecamatan_id": 6920,
        "kelurahan": "Sowi",
        "kd_pos": 98315
      },
      {
        "id": 81047,
        "kecamatan_id": 6920,
        "kelurahan": "Warkomi",
        "kd_pos": 98315
      },
      {
        "id": 81048,
        "kecamatan_id": 6920,
        "kelurahan": "Warmumi (Warmomi)",
        "kd_pos": 98315
      },
      {
        "id": 81049,
        "kecamatan_id": 6920,
        "kelurahan": "Warsuami (Waswami)",
        "kd_pos": 98315
      },
      {
        "id": 81050,
        "kecamatan_id": 6920,
        "kelurahan": "Waruri (Weluri)",
        "kd_pos": 98315
      },
      {
        "id": 81051,
        "kecamatan_id": 6920,
        "kelurahan": "Wasay (Wasai)",
        "kd_pos": 98315
      },
      {
        "id": 81052,
        "kecamatan_id": 6921,
        "kelurahan": "Aipiri",
        "kd_pos": 98311
      },
      {
        "id": 81053,
        "kecamatan_id": 6921,
        "kelurahan": "Arowi",
        "kd_pos": 98313
      },
      {
        "id": 81054,
        "kecamatan_id": 6921,
        "kelurahan": "Ayambori",
        "kd_pos": 98311
      },
      {
        "id": 81055,
        "kecamatan_id": 6921,
        "kelurahan": "Bakaro",
        "kd_pos": 98311
      },
      {
        "id": 81056,
        "kecamatan_id": 6921,
        "kelurahan": "Mansinam",
        "kd_pos": 98311
      },
      {
        "id": 81057,
        "kecamatan_id": 6921,
        "kelurahan": "Pasir Putih",
        "kd_pos": 98313
      },
      {
        "id": 81058,
        "kecamatan_id": 6921,
        "kelurahan": "Susweni",
        "kd_pos": 98311
      },
      {
        "id": 81059,
        "kecamatan_id": 6922,
        "kelurahan": "Asai",
        "kd_pos": 98315
      },
      {
        "id": 81060,
        "kecamatan_id": 6922,
        "kelurahan": "Bremi",
        "kd_pos": 98315
      },
      {
        "id": 81061,
        "kecamatan_id": 6922,
        "kelurahan": "Caban Dua",
        "kd_pos": 98315
      },
      {
        "id": 81062,
        "kecamatan_id": 6922,
        "kelurahan": "Indo Oufa",
        "kd_pos": 98315
      },
      {
        "id": 81063,
        "kecamatan_id": 6922,
        "kelurahan": "Inya",
        "kd_pos": 98315
      },
      {
        "id": 81064,
        "kecamatan_id": 6922,
        "kelurahan": "Iroduas",
        "kd_pos": 98315
      },
      {
        "id": 81065,
        "kecamatan_id": 6922,
        "kelurahan": "Lebau",
        "kd_pos": 98315
      },
      {
        "id": 81066,
        "kecamatan_id": 6922,
        "kelurahan": "Mandopi",
        "kd_pos": 98315
      },
      {
        "id": 81067,
        "kecamatan_id": 6922,
        "kelurahan": "Mebji",
        "kd_pos": 98315
      },
      {
        "id": 81068,
        "kecamatan_id": 6922,
        "kelurahan": "Meyes",
        "kd_pos": 98315
      },
      {
        "id": 81069,
        "kecamatan_id": 6922,
        "kelurahan": "Meyunfoka",
        "kd_pos": 98315
      },
      {
        "id": 81070,
        "kecamatan_id": 6922,
        "kelurahan": "Mubraidiba",
        "kd_pos": 98315
      },
      {
        "id": 81071,
        "kecamatan_id": 6922,
        "kelurahan": "Mubri",
        "kd_pos": 98315
      },
      {
        "id": 81072,
        "kecamatan_id": 6922,
        "kelurahan": "Pami",
        "kd_pos": 98315
      },
      {
        "id": 81073,
        "kecamatan_id": 6922,
        "kelurahan": "Saubeba",
        "kd_pos": 98315
      },
      {
        "id": 81074,
        "kecamatan_id": 6922,
        "kelurahan": "Sayro",
        "kd_pos": 98315
      },
      {
        "id": 81075,
        "kecamatan_id": 6922,
        "kelurahan": "Singgimeba",
        "kd_pos": 98315
      },
      {
        "id": 81076,
        "kecamatan_id": 6922,
        "kelurahan": "Tanah Rubu",
        "kd_pos": 98315
      },
      {
        "id": 81077,
        "kecamatan_id": 6922,
        "kelurahan": "Teluk Mubri",
        "kd_pos": 98315
      },
      {
        "id": 81078,
        "kecamatan_id": 6922,
        "kelurahan": "Warbefor",
        "kd_pos": 98315
      },
      {
        "id": 81079,
        "kecamatan_id": 6922,
        "kelurahan": "Yonggam",
        "kd_pos": 98315
      },
      {
        "id": 81080,
        "kecamatan_id": 6922,
        "kelurahan": "Yoom I",
        "kd_pos": 98315
      },
      {
        "id": 81081,
        "kecamatan_id": 6922,
        "kelurahan": "Yoom II",
        "kd_pos": 98315
      },
      {
        "id": 81082,
        "kecamatan_id": 6923,
        "kelurahan": "Aska",
        "kd_pos": 98357
      },
      {
        "id": 81083,
        "kecamatan_id": 6923,
        "kelurahan": "Aurmios",
        "kd_pos": 98357
      },
      {
        "id": 81084,
        "kecamatan_id": 6923,
        "kelurahan": "Bowi Subur",
        "kd_pos": 98357
      },
      {
        "id": 81085,
        "kecamatan_id": 6923,
        "kelurahan": "Igor",
        "kd_pos": 98357
      },
      {
        "id": 81086,
        "kecamatan_id": 6923,
        "kelurahan": "Inyei",
        "kd_pos": 98357
      },
      {
        "id": 81087,
        "kecamatan_id": 6923,
        "kelurahan": "Jowen",
        "kd_pos": 98357
      },
      {
        "id": 81088,
        "kecamatan_id": 6923,
        "kelurahan": "Kali Merah",
        "kd_pos": 98357
      },
      {
        "id": 81089,
        "kecamatan_id": 6923,
        "kelurahan": "Koyami",
        "kd_pos": 98357
      },
      {
        "id": 81090,
        "kecamatan_id": 6923,
        "kelurahan": "Macuan",
        "kd_pos": 98357
      },
      {
        "id": 81091,
        "kecamatan_id": 6923,
        "kelurahan": "Makwan",
        "kd_pos": 98357
      },
      {
        "id": 81092,
        "kecamatan_id": 6923,
        "kelurahan": "Mansaburi",
        "kd_pos": 98357
      },
      {
        "id": 81093,
        "kecamatan_id": 6923,
        "kelurahan": "Mantedi",
        "kd_pos": 98357
      },
      {
        "id": 81094,
        "kecamatan_id": 6923,
        "kelurahan": "Masni",
        "kd_pos": 98357
      },
      {
        "id": 81095,
        "kecamatan_id": 6923,
        "kelurahan": "Meiforga",
        "kd_pos": 98357
      },
      {
        "id": 81096,
        "kecamatan_id": 6923,
        "kelurahan": "Membowi",
        "kd_pos": 98357
      },
      {
        "id": 81097,
        "kecamatan_id": 6923,
        "kelurahan": "Merejemeg",
        "kd_pos": 98357
      },
      {
        "id": 81098,
        "kecamatan_id": 6923,
        "kelurahan": "Mereyuk",
        "kd_pos": 98357
      },
      {
        "id": 81099,
        "kecamatan_id": 6923,
        "kelurahan": "Meyof II",
        "kd_pos": 98357
      },
      {
        "id": 81100,
        "kecamatan_id": 6923,
        "kelurahan": "Moubja",
        "kd_pos": 98357
      },
      {
        "id": 81101,
        "kecamatan_id": 6923,
        "kelurahan": "Muara Prafi",
        "kd_pos": 98357
      },
      {
        "id": 81102,
        "kecamatan_id": 6923,
        "kelurahan": "Muara Wariori",
        "kd_pos": 98357
      },
      {
        "id": 81103,
        "kecamatan_id": 6923,
        "kelurahan": "Prafi Barat",
        "kd_pos": 98357
      },
      {
        "id": 81104,
        "kecamatan_id": 6923,
        "kelurahan": "Ririnfos",
        "kd_pos": 98357
      },
      {
        "id": 81105,
        "kecamatan_id": 6923,
        "kelurahan": "Sembab",
        "kd_pos": 98357
      },
      {
        "id": 81106,
        "kecamatan_id": 6923,
        "kelurahan": "Sibuni",
        "kd_pos": 98357
      },
      {
        "id": 81107,
        "kecamatan_id": 6923,
        "kelurahan": "Sumber Boga",
        "kd_pos": 98357
      },
      {
        "id": 81108,
        "kecamatan_id": 6923,
        "kelurahan": "Undi",
        "kd_pos": 98357
      },
      {
        "id": 81109,
        "kecamatan_id": 6923,
        "kelurahan": "Urey",
        "kd_pos": 98357
      },
      {
        "id": 81110,
        "kecamatan_id": 6923,
        "kelurahan": "Wam Bola",
        "kd_pos": 98357
      },
      {
        "id": 81111,
        "kecamatan_id": 6923,
        "kelurahan": "Wariori",
        "kd_pos": 98357
      },
      {
        "id": 81112,
        "kecamatan_id": 6923,
        "kelurahan": "Wariori Indah",
        "kd_pos": 98357
      },
      {
        "id": 81113,
        "kecamatan_id": 6923,
        "kelurahan": "Yensum",
        "kd_pos": 98357
      },
      {
        "id": 81114,
        "kecamatan_id": 6923,
        "kelurahan": "Yonsoribo",
        "kd_pos": 98357
      },
      {
        "id": 81115,
        "kecamatan_id": 6924,
        "kelurahan": "Aimasi",
        "kd_pos": 98356
      },
      {
        "id": 81116,
        "kecamatan_id": 6924,
        "kelurahan": "Bogor",
        "kd_pos": 98356
      },
      {
        "id": 81117,
        "kecamatan_id": 6924,
        "kelurahan": "Debit Motoa",
        "kd_pos": 98356
      },
      {
        "id": 81118,
        "kecamatan_id": 6924,
        "kelurahan": "Desay",
        "kd_pos": 98356
      },
      {
        "id": 81119,
        "kecamatan_id": 6924,
        "kelurahan": "Inguisi",
        "kd_pos": 98356
      },
      {
        "id": 81120,
        "kecamatan_id": 6924,
        "kelurahan": "Kali Amin",
        "kd_pos": 98356
      },
      {
        "id": 81121,
        "kecamatan_id": 6924,
        "kelurahan": "Kerenu",
        "kd_pos": 98356
      },
      {
        "id": 81122,
        "kecamatan_id": 6924,
        "kelurahan": "Lismanggu",
        "kd_pos": 98356
      },
      {
        "id": 81123,
        "kecamatan_id": 6924,
        "kelurahan": "Mebiji",
        "kd_pos": 98315
      },
      {
        "id": 81124,
        "kecamatan_id": 6924,
        "kelurahan": "Ogyehek",
        "kd_pos": 98356
      },
      {
        "id": 81125,
        "kecamatan_id": 6924,
        "kelurahan": "Prafi Mulya",
        "kd_pos": 98356
      },
      {
        "id": 81126,
        "kecamatan_id": 6924,
        "kelurahan": "Semi",
        "kd_pos": 98356
      },
      {
        "id": 81127,
        "kecamatan_id": 6924,
        "kelurahan": "Udap Hilir",
        "kd_pos": 98356
      },
      {
        "id": 81128,
        "kecamatan_id": 6924,
        "kelurahan": "Umbuy",
        "kd_pos": 98356
      },
      {
        "id": 81129,
        "kecamatan_id": 6924,
        "kelurahan": "Wasegi Indah",
        "kd_pos": 98356
      },
      {
        "id": 81130,
        "kecamatan_id": 6924,
        "kelurahan": "Wasegi Pop",
        "kd_pos": 98356
      },
      {
        "id": 81131,
        "kecamatan_id": 6925,
        "kelurahan": "Kaironi",
        "kd_pos": 98357
      },
      {
        "id": 81132,
        "kecamatan_id": 6925,
        "kelurahan": "Kasi (Kassi)",
        "kd_pos": 98357
      },
      {
        "id": 81133,
        "kecamatan_id": 6925,
        "kelurahan": "Manggupi",
        "kd_pos": 98357
      },
      {
        "id": 81134,
        "kecamatan_id": 6925,
        "kelurahan": "Meyof I",
        "kd_pos": 98357
      },
      {
        "id": 81135,
        "kecamatan_id": 6925,
        "kelurahan": "Saray",
        "kd_pos": 98357
      },
      {
        "id": 81136,
        "kecamatan_id": 6925,
        "kelurahan": "Sidey",
        "kd_pos": 98357
      },
      {
        "id": 81137,
        "kecamatan_id": 6925,
        "kelurahan": "Sidey Baru",
        "kd_pos": 98357
      },
      {
        "id": 81138,
        "kecamatan_id": 6925,
        "kelurahan": "Sidey Jaya",
        "kd_pos": 98357
      },
      {
        "id": 81139,
        "kecamatan_id": 6925,
        "kelurahan": "Sidey Makmur",
        "kd_pos": 98357
      },
      {
        "id": 81140,
        "kecamatan_id": 6925,
        "kelurahan": "Wamnowi (Womnowi)",
        "kd_pos": 98357
      },
      {
        "id": 81141,
        "kecamatan_id": 6925,
        "kelurahan": "Waramui (Waramoi)",
        "kd_pos": 98357
      },
      {
        "id": 81142,
        "kecamatan_id": 6925,
        "kelurahan": "Wariki",
        "kd_pos": 98357
      },
      {
        "id": 81143,
        "kecamatan_id": 6926,
        "kelurahan": "Ayawi",
        "kd_pos": 98315
      },
      {
        "id": 81144,
        "kecamatan_id": 6926,
        "kelurahan": "Cuyehep",
        "kd_pos": 98315
      },
      {
        "id": 81145,
        "kecamatan_id": 6926,
        "kelurahan": "Hanghouw",
        "kd_pos": 98315
      },
      {
        "id": 81146,
        "kecamatan_id": 6926,
        "kelurahan": "Imbeisika",
        "kd_pos": 98315
      },
      {
        "id": 81147,
        "kecamatan_id": 6926,
        "kelurahan": "Imboisika",
        "kd_pos": 98315
      },
      {
        "id": 81148,
        "kecamatan_id": 6926,
        "kelurahan": "Imboiti",
        "kd_pos": 98315
      },
      {
        "id": 81149,
        "kecamatan_id": 6926,
        "kelurahan": "Imhasuma",
        "kd_pos": 98315
      },
      {
        "id": 81150,
        "kecamatan_id": 6926,
        "kelurahan": "Indibo",
        "kd_pos": 98315
      },
      {
        "id": 81151,
        "kecamatan_id": 6926,
        "kelurahan": "Mbatma",
        "kd_pos": 98315
      },
      {
        "id": 81152,
        "kecamatan_id": 6926,
        "kelurahan": "Menyumfoku",
        "kd_pos": 98315
      },
      {
        "id": 81153,
        "kecamatan_id": 6926,
        "kelurahan": "Mironi",
        "kd_pos": 98315
      },
      {
        "id": 81154,
        "kecamatan_id": 6926,
        "kelurahan": "Misabugoid",
        "kd_pos": 98315
      },
      {
        "id": 81155,
        "kecamatan_id": 6926,
        "kelurahan": "Ningdip",
        "kd_pos": 98315
      },
      {
        "id": 81156,
        "kecamatan_id": 6926,
        "kelurahan": "Rembuy",
        "kd_pos": 98315
      },
      {
        "id": 81157,
        "kecamatan_id": 6926,
        "kelurahan": "Ukemboisi",
        "kd_pos": 98315
      },
      {
        "id": 81158,
        "kecamatan_id": 6926,
        "kelurahan": "Ukopti",
        "kd_pos": 98315
      },
      {
        "id": 81159,
        "kecamatan_id": 6926,
        "kelurahan": "Umnum",
        "kd_pos": 98315
      },
      {
        "id": 81160,
        "kecamatan_id": 6926,
        "kelurahan": "Urwambei",
        "kd_pos": 98354
      },
      {
        "id": 81161,
        "kecamatan_id": 6926,
        "kelurahan": "Warami",
        "kd_pos": 98315
      },
      {
        "id": 81162,
        "kecamatan_id": 6926,
        "kelurahan": "Wariari",
        "kd_pos": 98315
      },
      {
        "id": 81163,
        "kecamatan_id": 6926,
        "kelurahan": "Warkapi",
        "kd_pos": 98315
      },
      {
        "id": 81164,
        "kecamatan_id": 6926,
        "kelurahan": "Warmawai",
        "kd_pos": 98315
      },
      {
        "id": 81165,
        "kecamatan_id": 6926,
        "kelurahan": "Warnyeti",
        "kd_pos": 98315
      },
      {
        "id": 81166,
        "kecamatan_id": 6926,
        "kelurahan": "Wedoni",
        "kd_pos": 98315
      },
      {
        "id": 81167,
        "kecamatan_id": 6927,
        "kelurahan": "Amber",
        "kd_pos": 98352
      },
      {
        "id": 81168,
        "kecamatan_id": 6927,
        "kelurahan": "Asarbei",
        "kd_pos": 98352
      },
      {
        "id": 81169,
        "kecamatan_id": 6927,
        "kelurahan": "Aywou",
        "kd_pos": 98352
      },
      {
        "id": 81170,
        "kecamatan_id": 6927,
        "kelurahan": "Bahamyenti",
        "kd_pos": 98352
      },
      {
        "id": 81171,
        "kecamatan_id": 6927,
        "kelurahan": "Dindey",
        "kd_pos": 98352
      },
      {
        "id": 81172,
        "kecamatan_id": 6927,
        "kelurahan": "Dueibei",
        "kd_pos": 98352
      },
      {
        "id": 81173,
        "kecamatan_id": 6927,
        "kelurahan": "Duwin",
        "kd_pos": 98352
      },
      {
        "id": 81174,
        "kecamatan_id": 6927,
        "kelurahan": "Figoud",
        "kd_pos": 98352
      },
      {
        "id": 81175,
        "kecamatan_id": 6927,
        "kelurahan": "Guentuy",
        "kd_pos": 98352
      },
      {
        "id": 81176,
        "kecamatan_id": 6927,
        "kelurahan": "Hingk",
        "kd_pos": 98352
      },
      {
        "id": 81177,
        "kecamatan_id": 6927,
        "kelurahan": "Iboisrati",
        "kd_pos": 98352
      },
      {
        "id": 81178,
        "kecamatan_id": 6927,
        "kelurahan": "Ibuwau",
        "kd_pos": 98352
      },
      {
        "id": 81179,
        "kecamatan_id": 6927,
        "kelurahan": "Indisey",
        "kd_pos": 98352
      },
      {
        "id": 81180,
        "kecamatan_id": 6927,
        "kelurahan": "Indondey",
        "kd_pos": 98352
      },
      {
        "id": 81181,
        "kecamatan_id": 6927,
        "kelurahan": "Kibauw",
        "kd_pos": 98352
      },
      {
        "id": 81182,
        "kecamatan_id": 6927,
        "kelurahan": "Kwau",
        "kd_pos": 98352
      },
      {
        "id": 81183,
        "kecamatan_id": 6927,
        "kelurahan": "Madrat",
        "kd_pos": 98352
      },
      {
        "id": 81184,
        "kecamatan_id": 6927,
        "kelurahan": "Meny",
        "kd_pos": 98352
      },
      {
        "id": 81185,
        "kecamatan_id": 6927,
        "kelurahan": "Mingre",
        "kd_pos": 98352
      },
      {
        "id": 81186,
        "kecamatan_id": 6927,
        "kelurahan": "Minogbei",
        "kd_pos": 98352
      },
      {
        "id": 81187,
        "kecamatan_id": 6927,
        "kelurahan": "Mokwam",
        "kd_pos": 98352
      },
      {
        "id": 81188,
        "kecamatan_id": 6927,
        "kelurahan": "Ngungguen",
        "kd_pos": 98352
      },
      {
        "id": 81189,
        "kecamatan_id": 6927,
        "kelurahan": "Nimbay",
        "kd_pos": 98352
      },
      {
        "id": 81190,
        "kecamatan_id": 6927,
        "kelurahan": "Siyau",
        "kd_pos": 98352
      },
      {
        "id": 81191,
        "kecamatan_id": 6927,
        "kelurahan": "Snaimboy",
        "kd_pos": 98352
      },
      {
        "id": 81192,
        "kecamatan_id": 6927,
        "kelurahan": "Sotea",
        "kd_pos": 98352
      },
      {
        "id": 81193,
        "kecamatan_id": 6927,
        "kelurahan": "Sraindabey",
        "kd_pos": 98352
      },
      {
        "id": 81194,
        "kecamatan_id": 6927,
        "kelurahan": "Subsay",
        "kd_pos": 98352
      },
      {
        "id": 81195,
        "kecamatan_id": 6927,
        "kelurahan": "Tanah Merah",
        "kd_pos": 98352
      },
      {
        "id": 81196,
        "kecamatan_id": 6927,
        "kelurahan": "Umcem",
        "kd_pos": 98352
      },
      {
        "id": 81197,
        "kecamatan_id": 6927,
        "kelurahan": "Warmare",
        "kd_pos": 98352
      },
      {
        "id": 81198,
        "kecamatan_id": 6928,
        "kelurahan": "Dibera",
        "kd_pos": 98359
      },
      {
        "id": 81199,
        "kecamatan_id": 6928,
        "kelurahan": "Disihu (Dihisu)",
        "kd_pos": 98359
      },
      {
        "id": 81200,
        "kecamatan_id": 6928,
        "kelurahan": "Disra (Desra)",
        "kd_pos": 98359
      },
      {
        "id": 81201,
        "kecamatan_id": 6928,
        "kelurahan": "Duhugesa",
        "kd_pos": 98359
      },
      {
        "id": 81202,
        "kecamatan_id": 6928,
        "kelurahan": "Hugamod (Hugomot)",
        "kd_pos": 98359
      },
      {
        "id": 81203,
        "kecamatan_id": 6928,
        "kelurahan": "Inyuara",
        "kd_pos": 98359
      },
      {
        "id": 81204,
        "kecamatan_id": 6928,
        "kelurahan": "Isim",
        "kd_pos": 98359
      },
      {
        "id": 81205,
        "kecamatan_id": 6928,
        "kelurahan": "Mindermes",
        "kd_pos": 98359
      },
      {
        "id": 81206,
        "kecamatan_id": 6928,
        "kelurahan": "Sibjo",
        "kd_pos": 98359
      },
      {
        "id": 81207,
        "kecamatan_id": 6928,
        "kelurahan": "Tahosta (Tohosta)",
        "kd_pos": 98359
      },
      {
        "id": 81208,
        "kecamatan_id": 6928,
        "kelurahan": "Tubes",
        "kd_pos": 98359
      },
      {
        "id": 81209,
        "kecamatan_id": 6928,
        "kelurahan": "Umuhousi (Umousi)",
        "kd_pos": 98359
      },
      {
        "id": 81210,
        "kecamatan_id": 6929,
        "kelurahan": "Dembek",
        "kd_pos": 98355
      },
      {
        "id": 81211,
        "kecamatan_id": 6929,
        "kelurahan": "Demini",
        "kd_pos": 98355
      },
      {
        "id": 81212,
        "kecamatan_id": 6929,
        "kelurahan": "Gaya Baru",
        "kd_pos": 98355
      },
      {
        "id": 81213,
        "kecamatan_id": 6929,
        "kelurahan": "Neny Pantai (Nenei Pantai/Nij)",
        "kd_pos": 98355
      },
      {
        "id": 81214,
        "kecamatan_id": 6929,
        "kelurahan": "Siwi",
        "kd_pos": 98355
      },
      {
        "id": 81215,
        "kecamatan_id": 6929,
        "kelurahan": "Waren",
        "kd_pos": 98355
      },
      {
        "id": 81216,
        "kecamatan_id": 6929,
        "kelurahan": "Yekwandi",
        "kd_pos": 98355
      },
      {
        "id": 81217,
        "kecamatan_id": 6930,
        "kelurahan": "Aryawenmoho",
        "kd_pos": 98355
      },
      {
        "id": 81218,
        "kecamatan_id": 6930,
        "kelurahan": "Benyas",
        "kd_pos": 98355
      },
      {
        "id": 81219,
        "kecamatan_id": 6930,
        "kelurahan": "Disi",
        "kd_pos": 98355
      },
      {
        "id": 81220,
        "kecamatan_id": 6930,
        "kelurahan": "Hiyou",
        "kd_pos": 98355
      },
      {
        "id": 81221,
        "kecamatan_id": 6930,
        "kelurahan": "Neney",
        "kd_pos": 98355
      },
      {
        "id": 81222,
        "kecamatan_id": 6930,
        "kelurahan": "Sesum",
        "kd_pos": 98355
      },
      {
        "id": 81223,
        "kecamatan_id": 6930,
        "kelurahan": "Wama",
        "kd_pos": 98355
      },
      {
        "id": 81224,
        "kecamatan_id": 6931,
        "kelurahan": "Akeju",
        "kd_pos": 98353
      },
      {
        "id": 81225,
        "kecamatan_id": 6931,
        "kelurahan": "Margomulyo",
        "kd_pos": 98353
      },
      {
        "id": 81226,
        "kecamatan_id": 6931,
        "kelurahan": "Margorukun",
        "kd_pos": 98353
      },
      {
        "id": 81227,
        "kecamatan_id": 6931,
        "kelurahan": "Masabui",
        "kd_pos": 98353
      },
      {
        "id": 81228,
        "kecamatan_id": 6931,
        "kelurahan": "Masabui II",
        "kd_pos": 98353
      },
      {
        "id": 81229,
        "kecamatan_id": 6931,
        "kelurahan": "Muari",
        "kd_pos": 98353
      },
      {
        "id": 81230,
        "kecamatan_id": 6931,
        "kelurahan": "Oransbari",
        "kd_pos": 98353
      },
      {
        "id": 81231,
        "kecamatan_id": 6931,
        "kelurahan": "Sidomulyo",
        "kd_pos": 98353
      },
      {
        "id": 81232,
        "kecamatan_id": 6931,
        "kelurahan": "Sindang Jaya",
        "kd_pos": 98353
      },
      {
        "id": 81233,
        "kecamatan_id": 6931,
        "kelurahan": "Wandoki",
        "kd_pos": 98353
      },
      {
        "id": 81234,
        "kecamatan_id": 6931,
        "kelurahan": "Warbiadi",
        "kd_pos": 98353
      },
      {
        "id": 81235,
        "kecamatan_id": 6931,
        "kelurahan": "Warkwandi",
        "kd_pos": 98353
      },
      {
        "id": 81236,
        "kecamatan_id": 6931,
        "kelurahan": "Waroser",
        "kd_pos": 98353
      },
      {
        "id": 81237,
        "kecamatan_id": 6931,
        "kelurahan": "Watariri",
        "kd_pos": 98353
      },
      {
        "id": 81238,
        "kecamatan_id": 6932,
        "kelurahan": "Abreso",
        "kd_pos": 98355
      },
      {
        "id": 81239,
        "kecamatan_id": 6932,
        "kelurahan": "Bamaha",
        "kd_pos": 98355
      },
      {
        "id": 81240,
        "kecamatan_id": 6932,
        "kelurahan": "Hamawi",
        "kd_pos": 98355
      },
      {
        "id": 81241,
        "kecamatan_id": 6932,
        "kelurahan": "Hamor",
        "kd_pos": 98355
      },
      {
        "id": 81242,
        "kecamatan_id": 6932,
        "kelurahan": "Kobrey",
        "kd_pos": 98355
      },
      {
        "id": 81243,
        "kecamatan_id": 6932,
        "kelurahan": "Mambrema",
        "kd_pos": 98355
      },
      {
        "id": 81244,
        "kecamatan_id": 6932,
        "kelurahan": "Nuhuwei",
        "kd_pos": 98355
      },
      {
        "id": 81245,
        "kecamatan_id": 6932,
        "kelurahan": "Ransiki",
        "kd_pos": 98355
      },
      {
        "id": 81246,
        "kecamatan_id": 6932,
        "kelurahan": "Sabri",
        "kd_pos": 98355
      },
      {
        "id": 81247,
        "kecamatan_id": 6932,
        "kelurahan": "Susmorof",
        "kd_pos": 98355
      },
      {
        "id": 81248,
        "kecamatan_id": 6932,
        "kelurahan": "Tobou",
        "kd_pos": 98355
      },
      {
        "id": 81249,
        "kecamatan_id": 6932,
        "kelurahan": "Wamcei",
        "kd_pos": 98355
      },
      {
        "id": 81250,
        "kecamatan_id": 6932,
        "kelurahan": "Yamboi",
        "kd_pos": 98355
      },
      {
        "id": 81251,
        "kecamatan_id": 6933,
        "kelurahan": "Kaprus",
        "kd_pos": 98355
      },
      {
        "id": 81252,
        "kecamatan_id": 6933,
        "kelurahan": "Reyob",
        "kd_pos": 98355
      },
      {
        "id": 81253,
        "kecamatan_id": 6933,
        "kelurahan": "Seimeba",
        "kd_pos": 98355
      },
      {
        "id": 81254,
        "kecamatan_id": 6933,
        "kelurahan": "Yermatum",
        "kd_pos": 98355
      },
      {
        "id": 81255,
        "kecamatan_id": 6934,
        "kelurahan": "Ainod",
        "kd_pos": 98463
      },
      {
        "id": 81256,
        "kecamatan_id": 6934,
        "kelurahan": "Aisyo",
        "kd_pos": 98463
      },
      {
        "id": 81257,
        "kecamatan_id": 6934,
        "kelurahan": "Bori",
        "kd_pos": 98463
      },
      {
        "id": 81258,
        "kecamatan_id": 6934,
        "kelurahan": "Bori Timur",
        "kd_pos": 98463
      },
      {
        "id": 81259,
        "kecamatan_id": 6934,
        "kelurahan": "Faitmayaf",
        "kd_pos": 98463
      },
      {
        "id": 81260,
        "kecamatan_id": 6934,
        "kelurahan": "Faitmayat Barat",
        "kd_pos": 98463
      },
      {
        "id": 81261,
        "kecamatan_id": 6934,
        "kelurahan": "Faitsawe",
        "kd_pos": 98652
      },
      {
        "id": 81262,
        "kecamatan_id": 6934,
        "kelurahan": "Frawebo",
        "kd_pos": 98463
      },
      {
        "id": 81263,
        "kecamatan_id": 6934,
        "kelurahan": "Futon",
        "kd_pos": 98463
      },
      {
        "id": 81264,
        "kecamatan_id": 6934,
        "kelurahan": "Kocuas Utara",
        "kd_pos": 98463
      },
      {
        "id": 81265,
        "kecamatan_id": 6934,
        "kelurahan": "Kocuwer",
        "kd_pos": 98463
      },
      {
        "id": 81266,
        "kecamatan_id": 6934,
        "kelurahan": "Kocuwer Selatan",
        "kd_pos": 98463
      },
      {
        "id": 81267,
        "kecamatan_id": 6934,
        "kelurahan": "Kokas",
        "kd_pos": 98652
      },
      {
        "id": 81268,
        "kecamatan_id": 6934,
        "kelurahan": "Konja",
        "kd_pos": 98463
      },
      {
        "id": 81269,
        "kecamatan_id": 6934,
        "kelurahan": "Kumurkek",
        "kd_pos": 98463
      },
      {
        "id": 81270,
        "kecamatan_id": 6934,
        "kelurahan": "Kumurkek Barat",
        "kd_pos": 98463
      },
      {
        "id": 81271,
        "kecamatan_id": 6934,
        "kelurahan": "Martaim",
        "kd_pos": 98652
      },
      {
        "id": 81272,
        "kecamatan_id": 6934,
        "kelurahan": "Sampika",
        "kd_pos": 98463
      },
      {
        "id": 81273,
        "kecamatan_id": 6934,
        "kelurahan": "Sikof",
        "kd_pos": 98463
      },
      {
        "id": 81274,
        "kecamatan_id": 6934,
        "kelurahan": "Sunei",
        "kd_pos": 98463
      },
      {
        "id": 81275,
        "kecamatan_id": 6934,
        "kelurahan": "Susumuk",
        "kd_pos": 98463
      },
      {
        "id": 81276,
        "kecamatan_id": 6934,
        "kelurahan": "Tahahite",
        "kd_pos": 98463
      },
      {
        "id": 81277,
        "kecamatan_id": 6934,
        "kelurahan": "Werjaya",
        "kd_pos": 98463
      },
      {
        "id": 81278,
        "kecamatan_id": 6935,
        "kelurahan": "Asiaf Zaman",
        "kd_pos": 98463
      },
      {
        "id": 81279,
        "kecamatan_id": 6935,
        "kelurahan": "Awet Main",
        "kd_pos": 98463
      },
      {
        "id": 81280,
        "kecamatan_id": 6935,
        "kelurahan": "Fuog",
        "kd_pos": 98463
      },
      {
        "id": 81281,
        "kecamatan_id": 6935,
        "kelurahan": "Fuog Selatan",
        "kd_pos": 98463
      },
      {
        "id": 81282,
        "kecamatan_id": 6935,
        "kelurahan": "Hora Iek",
        "kd_pos": 98463
      },
      {
        "id": 81283,
        "kecamatan_id": 6935,
        "kelurahan": "Imsun",
        "kd_pos": 98463
      },
      {
        "id": 81284,
        "kecamatan_id": 6935,
        "kelurahan": "Kaitana",
        "kd_pos": 98463
      },
      {
        "id": 81285,
        "kecamatan_id": 6935,
        "kelurahan": "Kisor",
        "kd_pos": 98463
      },
      {
        "id": 81286,
        "kecamatan_id": 6935,
        "kelurahan": "Krus",
        "kd_pos": 98463
      },
      {
        "id": 81287,
        "kecamatan_id": 6935,
        "kelurahan": "Roma",
        "kd_pos": 98463
      },
      {
        "id": 81288,
        "kecamatan_id": 6935,
        "kelurahan": "Sabah",
        "kd_pos": 98463
      },
      {
        "id": 81289,
        "kecamatan_id": 6935,
        "kelurahan": "Same Rakator",
        "kd_pos": 98463
      },
      {
        "id": 81290,
        "kecamatan_id": 6935,
        "kelurahan": "Sorry",
        "kd_pos": 98463
      },
      {
        "id": 81291,
        "kecamatan_id": 6935,
        "kelurahan": "Tahsimara",
        "kd_pos": 98463
      },
      {
        "id": 81292,
        "kecamatan_id": 6935,
        "kelurahan": "Tolak",
        "kd_pos": 98463
      },
      {
        "id": 81293,
        "kecamatan_id": 6935,
        "kelurahan": "Yeek",
        "kd_pos": 98463
      },
      {
        "id": 81294,
        "kecamatan_id": 6936,
        "kelurahan": "Aikrer",
        "kd_pos": 98463
      },
      {
        "id": 81295,
        "kecamatan_id": 6936,
        "kelurahan": "Aisa",
        "kd_pos": 98463
      },
      {
        "id": 81296,
        "kecamatan_id": 6936,
        "kelurahan": "Aitrem",
        "kd_pos": 98463
      },
      {
        "id": 81297,
        "kecamatan_id": 6936,
        "kelurahan": "Buoh Sa",
        "kd_pos": 98463
      },
      {
        "id": 81298,
        "kecamatan_id": 6936,
        "kelurahan": "Fuog",
        "kd_pos": 98463
      },
      {
        "id": 81299,
        "kecamatan_id": 6936,
        "kelurahan": "Sabah",
        "kd_pos": 98463
      },
      {
        "id": 81300,
        "kecamatan_id": 6936,
        "kelurahan": "Sanem",
        "kd_pos": 98463
      },
      {
        "id": 81301,
        "kecamatan_id": 6936,
        "kelurahan": "Sawin",
        "kd_pos": 98463
      },
      {
        "id": 81302,
        "kecamatan_id": 6936,
        "kelurahan": "Wakom",
        "kd_pos": 98463
      },
      {
        "id": 81303,
        "kecamatan_id": 6937,
        "kelurahan": "Aimau",
        "kd_pos": 98463
      },
      {
        "id": 81304,
        "kecamatan_id": 6937,
        "kelurahan": "Ainesra",
        "kd_pos": 98463
      },
      {
        "id": 81305,
        "kecamatan_id": 6937,
        "kelurahan": "Akingging",
        "kd_pos": 98463
      },
      {
        "id": 81306,
        "kecamatan_id": 6937,
        "kelurahan": "Framneway",
        "kd_pos": 98463
      },
      {
        "id": 81307,
        "kecamatan_id": 6937,
        "kelurahan": "Mesyam",
        "kd_pos": 98463
      },
      {
        "id": 81308,
        "kecamatan_id": 6937,
        "kelurahan": "Sasior Nafe",
        "kd_pos": 98463
      },
      {
        "id": 81309,
        "kecamatan_id": 6937,
        "kelurahan": "Tiefromen",
        "kd_pos": 98463
      },
      {
        "id": 81310,
        "kecamatan_id": 6938,
        "kelurahan": "Makiri",
        "kd_pos": 98463
      },
      {
        "id": 81311,
        "kecamatan_id": 6938,
        "kelurahan": "Srumate",
        "kd_pos": 98463
      },
      {
        "id": 81312,
        "kecamatan_id": 6938,
        "kelurahan": "Warba",
        "kd_pos": 98463
      },
      {
        "id": 81313,
        "kecamatan_id": 6938,
        "kelurahan": "Winuni",
        "kd_pos": 98463
      },
      {
        "id": 81314,
        "kecamatan_id": 6938,
        "kelurahan": "Womba",
        "kd_pos": 98463
      },
      {
        "id": 81315,
        "kecamatan_id": 6938,
        "kelurahan": "Wormu",
        "kd_pos": 98463
      },
      {
        "id": 81316,
        "kecamatan_id": 6939,
        "kelurahan": "Aifam",
        "kd_pos": 98463
      },
      {
        "id": 81317,
        "kecamatan_id": 6939,
        "kelurahan": "Aikus",
        "kd_pos": 98463
      },
      {
        "id": 81318,
        "kecamatan_id": 6939,
        "kelurahan": "Aiwesa",
        "kd_pos": 98463
      },
      {
        "id": 81319,
        "kecamatan_id": 6939,
        "kelurahan": "Assem",
        "kd_pos": 98463
      },
      {
        "id": 81320,
        "kecamatan_id": 6939,
        "kelurahan": "Ayata",
        "kd_pos": 98463
      },
      {
        "id": 81321,
        "kecamatan_id": 6939,
        "kelurahan": "Faan",
        "kd_pos": 98463
      },
      {
        "id": 81322,
        "kecamatan_id": 6939,
        "kelurahan": "Frambu",
        "kd_pos": 98463
      },
      {
        "id": 81323,
        "kecamatan_id": 6939,
        "kelurahan": "Kamat",
        "kd_pos": 98463
      },
      {
        "id": 81324,
        "kecamatan_id": 6939,
        "kelurahan": "Mupas",
        "kd_pos": 98463
      },
      {
        "id": 81325,
        "kecamatan_id": 6939,
        "kelurahan": "Pitor",
        "kd_pos": 98463
      },
      {
        "id": 81326,
        "kecamatan_id": 6939,
        "kelurahan": "Saud",
        "kd_pos": 98463
      },
      {
        "id": 81327,
        "kecamatan_id": 6939,
        "kelurahan": "Tiam",
        "kd_pos": 98463
      },
      {
        "id": 81328,
        "kecamatan_id": 6940,
        "kelurahan": "Ayawasi",
        "kd_pos": 98463
      },
      {
        "id": 81329,
        "kecamatan_id": 6940,
        "kelurahan": "Ayawasi Selatan",
        "kd_pos": 98463
      },
      {
        "id": 81330,
        "kecamatan_id": 6940,
        "kelurahan": "Ayawasi Timur",
        "kd_pos": 98463
      },
      {
        "id": 81331,
        "kecamatan_id": 6940,
        "kelurahan": "Fonatu",
        "kd_pos": 98463
      },
      {
        "id": 81332,
        "kecamatan_id": 6940,
        "kelurahan": "Haenkanes",
        "kd_pos": 98463
      },
      {
        "id": 81333,
        "kecamatan_id": 6940,
        "kelurahan": "Howait",
        "kd_pos": 98463
      },
      {
        "id": 81334,
        "kecamatan_id": 6940,
        "kelurahan": "Irata",
        "kd_pos": 98463
      },
      {
        "id": 81335,
        "kecamatan_id": 6940,
        "kelurahan": "Konja",
        "kd_pos": 98463
      },
      {
        "id": 81336,
        "kecamatan_id": 6940,
        "kelurahan": "Konja Barat",
        "kd_pos": 98463
      },
      {
        "id": 81337,
        "kecamatan_id": 6940,
        "kelurahan": "Man",
        "kd_pos": 98463
      },
      {
        "id": 81338,
        "kecamatan_id": 6940,
        "kelurahan": "Mosun",
        "kd_pos": 98463
      },
      {
        "id": 81339,
        "kecamatan_id": 6940,
        "kelurahan": "Mosun Timur",
        "kd_pos": 98463
      },
      {
        "id": 81340,
        "kecamatan_id": 6940,
        "kelurahan": "Mosun Utara",
        "kd_pos": 98463
      },
      {
        "id": 81341,
        "kecamatan_id": 6940,
        "kelurahan": "Mowes",
        "kd_pos": 98463
      },
      {
        "id": 81342,
        "kecamatan_id": 6940,
        "kelurahan": "Neset",
        "kd_pos": 98463
      },
      {
        "id": 81343,
        "kecamatan_id": 6940,
        "kelurahan": "Raha",
        "kd_pos": 98463
      },
      {
        "id": 81344,
        "kecamatan_id": 6940,
        "kelurahan": "Susai",
        "kd_pos": 98463
      },
      {
        "id": 81345,
        "kecamatan_id": 6940,
        "kelurahan": "Wayane",
        "kd_pos": 98463
      },
      {
        "id": 81346,
        "kecamatan_id": 6940,
        "kelurahan": "Yarat",
        "kd_pos": 98463
      },
      {
        "id": 81347,
        "kecamatan_id": 6940,
        "kelurahan": "Yarat Timur",
        "kd_pos": 98463
      },
      {
        "id": 81348,
        "kecamatan_id": 6941,
        "kelurahan": "Afkrem",
        "kd_pos": 98462
      },
      {
        "id": 81349,
        "kecamatan_id": 6941,
        "kelurahan": "Aitinyo",
        "kd_pos": 98462
      },
      {
        "id": 81350,
        "kecamatan_id": 6941,
        "kelurahan": "Bofait",
        "kd_pos": 98462
      },
      {
        "id": 81351,
        "kecamatan_id": 6941,
        "kelurahan": "Ibasuf",
        "kd_pos": 98462
      },
      {
        "id": 81352,
        "kecamatan_id": 6941,
        "kelurahan": "Ihore",
        "kd_pos": 98462
      },
      {
        "id": 81353,
        "kecamatan_id": 6941,
        "kelurahan": "Irohmrar",
        "kd_pos": 98462
      },
      {
        "id": 81354,
        "kecamatan_id": 6941,
        "kelurahan": "Kamro",
        "kd_pos": 98462
      },
      {
        "id": 81355,
        "kecamatan_id": 6941,
        "kelurahan": "Kamro Selatan",
        "kd_pos": 98462
      },
      {
        "id": 81356,
        "kecamatan_id": 6941,
        "kelurahan": "Karsu",
        "kd_pos": 98462
      },
      {
        "id": 81357,
        "kecamatan_id": 6941,
        "kelurahan": "Korom",
        "kd_pos": 98462
      },
      {
        "id": 81358,
        "kecamatan_id": 6941,
        "kelurahan": "Sira Aya",
        "kd_pos": 98462
      },
      {
        "id": 81359,
        "kecamatan_id": 6941,
        "kelurahan": "Sowai Sau",
        "kd_pos": 98462
      },
      {
        "id": 81360,
        "kecamatan_id": 6941,
        "kelurahan": "Sris",
        "kd_pos": 98462
      },
      {
        "id": 81361,
        "kecamatan_id": 6941,
        "kelurahan": "Subin",
        "kd_pos": 98462
      },
      {
        "id": 81362,
        "kecamatan_id": 6941,
        "kelurahan": "Sumanis",
        "kd_pos": 98462
      },
      {
        "id": 81363,
        "kecamatan_id": 6941,
        "kelurahan": "Tehak Kecil",
        "kd_pos": 98462
      },
      {
        "id": 81364,
        "kecamatan_id": 6941,
        "kelurahan": "Wiho",
        "kd_pos": 98462
      },
      {
        "id": 81365,
        "kecamatan_id": 6942,
        "kelurahan": "Fatase",
        "kd_pos": 98462
      },
      {
        "id": 81366,
        "kecamatan_id": 6942,
        "kelurahan": "Fatem",
        "kd_pos": 98462
      },
      {
        "id": 81367,
        "kecamatan_id": 6942,
        "kelurahan": "Hasweh",
        "kd_pos": 98462
      },
      {
        "id": 81368,
        "kecamatan_id": 6942,
        "kelurahan": "Hosiobanah",
        "kd_pos": 98462
      },
      {
        "id": 81369,
        "kecamatan_id": 6942,
        "kelurahan": "Hosyo Ata",
        "kd_pos": 98462
      },
      {
        "id": 81370,
        "kecamatan_id": 6942,
        "kelurahan": "Kambufatem",
        "kd_pos": 98462
      },
      {
        "id": 81371,
        "kecamatan_id": 6942,
        "kelurahan": "Kambufatem Utara",
        "kd_pos": 98462
      },
      {
        "id": 81372,
        "kecamatan_id": 6942,
        "kelurahan": "Siyo",
        "kd_pos": 98462
      },
      {
        "id": 81373,
        "kecamatan_id": 6942,
        "kelurahan": "Waybomatah",
        "kd_pos": 98462
      },
      {
        "id": 81374,
        "kecamatan_id": 6943,
        "kelurahan": "Faithowes",
        "kd_pos": 98462
      },
      {
        "id": 81375,
        "kecamatan_id": 6943,
        "kelurahan": "Ikuf",
        "kd_pos": 98462
      },
      {
        "id": 81376,
        "kecamatan_id": 6943,
        "kelurahan": "Ikuf Utara",
        "kd_pos": 98462
      },
      {
        "id": 81377,
        "kecamatan_id": 6943,
        "kelurahan": "Isir",
        "kd_pos": 98462
      },
      {
        "id": 81378,
        "kecamatan_id": 6943,
        "kelurahan": "Jitmau",
        "kd_pos": 98462
      },
      {
        "id": 81379,
        "kecamatan_id": 6943,
        "kelurahan": "Jitmau Timur",
        "kd_pos": 98462
      },
      {
        "id": 81380,
        "kecamatan_id": 6943,
        "kelurahan": "Kambusabo",
        "kd_pos": 98462
      },
      {
        "id": 81381,
        "kecamatan_id": 6943,
        "kelurahan": "Sarimo",
        "kd_pos": 98462
      },
      {
        "id": 81382,
        "kecamatan_id": 6943,
        "kelurahan": "Srirtabam",
        "kd_pos": 98462
      },
      {
        "id": 81383,
        "kecamatan_id": 6943,
        "kelurahan": "Yumame",
        "kd_pos": 98462
      },
      {
        "id": 81384,
        "kecamatan_id": 6944,
        "kelurahan": "Asnaif",
        "kd_pos": 98462
      },
      {
        "id": 81385,
        "kecamatan_id": 6944,
        "kelurahan": "Awit",
        "kd_pos": 98462
      },
      {
        "id": 81386,
        "kecamatan_id": 6944,
        "kelurahan": "Erokwero",
        "kd_pos": 98462
      },
      {
        "id": 81387,
        "kecamatan_id": 6944,
        "kelurahan": "Eway",
        "kd_pos": 98462
      },
      {
        "id": 81388,
        "kecamatan_id": 6944,
        "kelurahan": "Framboh",
        "kd_pos": 98462
      },
      {
        "id": 81389,
        "kecamatan_id": 6944,
        "kelurahan": "Iroh Sohser",
        "kd_pos": 98462
      },
      {
        "id": 81390,
        "kecamatan_id": 6944,
        "kelurahan": "Itigah",
        "kd_pos": 98462
      },
      {
        "id": 81391,
        "kecamatan_id": 6944,
        "kelurahan": "Sabun",
        "kd_pos": 98462
      },
      {
        "id": 81392,
        "kecamatan_id": 6944,
        "kelurahan": "Sira",
        "kd_pos": 98462
      },
      {
        "id": 81393,
        "kecamatan_id": 6944,
        "kelurahan": "Sira Tee",
        "kd_pos": 98462
      },
      {
        "id": 81394,
        "kecamatan_id": 6944,
        "kelurahan": "Tohmri",
        "kd_pos": 98462
      },
      {
        "id": 81395,
        "kecamatan_id": 6944,
        "kelurahan": "Way U",
        "kd_pos": 98462
      },
      {
        "id": 81396,
        "kecamatan_id": 6944,
        "kelurahan": "Wrait U",
        "kd_pos": 98462
      },
      {
        "id": 81397,
        "kecamatan_id": 6944,
        "kelurahan": "Yaksoro",
        "kd_pos": 98462
      },
      {
        "id": 81398,
        "kecamatan_id": 6945,
        "kelurahan": "Asmuruf Tee",
        "kd_pos": 98462
      },
      {
        "id": 81399,
        "kecamatan_id": 6945,
        "kelurahan": "Asmuruf U",
        "kd_pos": 98462
      },
      {
        "id": 81400,
        "kecamatan_id": 6945,
        "kelurahan": "Bohwat",
        "kd_pos": 98462
      },
      {
        "id": 81401,
        "kecamatan_id": 6945,
        "kelurahan": "Fan",
        "kd_pos": 98462
      },
      {
        "id": 81402,
        "kecamatan_id": 6945,
        "kelurahan": "Fategomi",
        "kd_pos": 98462
      },
      {
        "id": 81403,
        "kecamatan_id": 6945,
        "kelurahan": "Framafir",
        "kd_pos": 98462
      },
      {
        "id": 81404,
        "kecamatan_id": 6945,
        "kelurahan": "Gohsames",
        "kd_pos": 98462
      },
      {
        "id": 81405,
        "kecamatan_id": 6945,
        "kelurahan": "Inta",
        "kd_pos": 98462
      },
      {
        "id": 81406,
        "kecamatan_id": 6945,
        "kelurahan": "Mirafan",
        "kd_pos": 98462
      },
      {
        "id": 81407,
        "kecamatan_id": 6945,
        "kelurahan": "Subrit",
        "kd_pos": 98462
      },
      {
        "id": 81408,
        "kecamatan_id": 6945,
        "kelurahan": "Tehak Besar",
        "kd_pos": 98462
      },
      {
        "id": 81409,
        "kecamatan_id": 6945,
        "kelurahan": "Tehak Tee",
        "kd_pos": 98462
      },
      {
        "id": 81410,
        "kecamatan_id": 6946,
        "kelurahan": "Afes",
        "kd_pos": 98461
      },
      {
        "id": 81411,
        "kecamatan_id": 6946,
        "kelurahan": "Ayamaru",
        "kd_pos": 98461
      },
      {
        "id": 81412,
        "kecamatan_id": 6946,
        "kelurahan": "Fraharo",
        "kd_pos": 98461
      },
      {
        "id": 81413,
        "kecamatan_id": 6946,
        "kelurahan": "Framu",
        "kd_pos": 98461
      },
      {
        "id": 81414,
        "kecamatan_id": 6946,
        "kelurahan": "Mefkajim II",
        "kd_pos": 98461
      },
      {
        "id": 81415,
        "kecamatan_id": 6946,
        "kelurahan": "Smusuwioh",
        "kd_pos": 98461
      },
      {
        "id": 81416,
        "kecamatan_id": 6946,
        "kelurahan": "Tuso",
        "kd_pos": 98461
      },
      {
        "id": 81417,
        "kecamatan_id": 6946,
        "kelurahan": "Twer",
        "kd_pos": 98461
      },
      {
        "id": 81418,
        "kecamatan_id": 6947,
        "kelurahan": "Chaliat",
        "kd_pos": 98461
      },
      {
        "id": 81419,
        "kecamatan_id": 6947,
        "kelurahan": "Fanse",
        "kd_pos": 98461
      },
      {
        "id": 81420,
        "kecamatan_id": 6947,
        "kelurahan": "Sehu",
        "kd_pos": 98461
      },
      {
        "id": 81421,
        "kecamatan_id": 6947,
        "kelurahan": "Sfacko",
        "kd_pos": 98461
      },
      {
        "id": 81422,
        "kecamatan_id": 6947,
        "kelurahan": "Sfakraka",
        "kd_pos": 98461
      },
      {
        "id": 81423,
        "kecamatan_id": 6947,
        "kelurahan": "Sien",
        "kd_pos": 98461
      },
      {
        "id": 81424,
        "kecamatan_id": 6947,
        "kelurahan": "Sorowan",
        "kd_pos": 98461
      },
      {
        "id": 81425,
        "kecamatan_id": 6947,
        "kelurahan": "Tbo",
        "kd_pos": 98461
      },
      {
        "id": 81426,
        "kecamatan_id": 6948,
        "kelurahan": "Adoh",
        "kd_pos": 98461
      },
      {
        "id": 81427,
        "kecamatan_id": 6948,
        "kelurahan": "Orain",
        "kd_pos": 98461
      },
      {
        "id": 81428,
        "kecamatan_id": 6948,
        "kelurahan": "Orsu",
        "kd_pos": 98461
      },
      {
        "id": 81429,
        "kecamatan_id": 6948,
        "kelurahan": "Rawas",
        "kd_pos": 98461
      },
      {
        "id": 81430,
        "kecamatan_id": 6948,
        "kelurahan": "Segior",
        "kd_pos": 98461
      },
      {
        "id": 81431,
        "kecamatan_id": 6948,
        "kelurahan": "Soan",
        "kd_pos": 98461
      },
      {
        "id": 81432,
        "kecamatan_id": 6948,
        "kelurahan": "Sosian",
        "kd_pos": 98461
      },
      {
        "id": 81433,
        "kecamatan_id": 6948,
        "kelurahan": "Temel",
        "kd_pos": 98461
      },
      {
        "id": 81434,
        "kecamatan_id": 6948,
        "kelurahan": "Warbo",
        "kd_pos": 98461
      },
      {
        "id": 81435,
        "kecamatan_id": 6948,
        "kelurahan": "Woman",
        "kd_pos": 98461
      },
      {
        "id": 81436,
        "kecamatan_id": 6949,
        "kelurahan": "Hawioh",
        "kd_pos": 98461
      },
      {
        "id": 81437,
        "kecamatan_id": 6949,
        "kelurahan": "Kanisabar",
        "kd_pos": 98461
      },
      {
        "id": 81438,
        "kecamatan_id": 6949,
        "kelurahan": "Koma Koma",
        "kd_pos": 98461
      },
      {
        "id": 81439,
        "kecamatan_id": 6949,
        "kelurahan": "Lemauk Klit",
        "kd_pos": 98461
      },
      {
        "id": 81440,
        "kecamatan_id": 6949,
        "kelurahan": "Sagrim",
        "kd_pos": 98461
      },
      {
        "id": 81441,
        "kecamatan_id": 6949,
        "kelurahan": "Sauf",
        "kd_pos": 98461
      },
      {
        "id": 81442,
        "kecamatan_id": 6949,
        "kelurahan": "Sembaro",
        "kd_pos": 98461
      },
      {
        "id": 81443,
        "kecamatan_id": 6949,
        "kelurahan": "Seneh",
        "kd_pos": 98461
      },
      {
        "id": 81444,
        "kecamatan_id": 6949,
        "kelurahan": "Sfarare",
        "kd_pos": 98461
      },
      {
        "id": 81445,
        "kecamatan_id": 6949,
        "kelurahan": "Simiyah",
        "kd_pos": 98461
      },
      {
        "id": 81446,
        "kecamatan_id": 6950,
        "kelurahan": "Arus",
        "kd_pos": 98461
      },
      {
        "id": 81447,
        "kecamatan_id": 6950,
        "kelurahan": "Asses",
        "kd_pos": 98461
      },
      {
        "id": 81448,
        "kecamatan_id": 6950,
        "kelurahan": "Fait Nggre",
        "kd_pos": 98461
      },
      {
        "id": 81449,
        "kecamatan_id": 6950,
        "kelurahan": "Faitsimar",
        "kd_pos": 98461
      },
      {
        "id": 81450,
        "kecamatan_id": 6950,
        "kelurahan": "Isnum",
        "kd_pos": 98461
      },
      {
        "id": 81451,
        "kecamatan_id": 6950,
        "kelurahan": "Kofait",
        "kd_pos": 98461
      },
      {
        "id": 81452,
        "kecamatan_id": 6950,
        "kelurahan": "Sufu",
        "kd_pos": 98461
      },
      {
        "id": 81453,
        "kecamatan_id": 6951,
        "kelurahan": "Bawy",
        "kd_pos": 98461
      },
      {
        "id": 81454,
        "kecamatan_id": 6951,
        "kelurahan": "Fiane",
        "kd_pos": 98461
      },
      {
        "id": 81455,
        "kecamatan_id": 6951,
        "kelurahan": "Hufioh",
        "kd_pos": 98461
      },
      {
        "id": 81456,
        "kecamatan_id": 6951,
        "kelurahan": "Isme",
        "kd_pos": 98461
      },
      {
        "id": 81457,
        "kecamatan_id": 6951,
        "kelurahan": "Kartapura",
        "kd_pos": 98461
      },
      {
        "id": 81458,
        "kecamatan_id": 6951,
        "kelurahan": "Men",
        "kd_pos": 98461
      },
      {
        "id": 81459,
        "kecamatan_id": 6951,
        "kelurahan": "Rindu",
        "kd_pos": 98461
      },
      {
        "id": 81460,
        "kecamatan_id": 6951,
        "kelurahan": "Semu",
        "kd_pos": 98461
      },
      {
        "id": 81461,
        "kecamatan_id": 6951,
        "kelurahan": "Tut",
        "kd_pos": 98461
      },
      {
        "id": 81462,
        "kecamatan_id": 6951,
        "kelurahan": "Yohwer",
        "kd_pos": 98461
      },
      {
        "id": 81463,
        "kecamatan_id": 6952,
        "kelurahan": "Faitmajin",
        "kd_pos": 98461
      },
      {
        "id": 81464,
        "kecamatan_id": 6952,
        "kelurahan": "Faitsiur",
        "kd_pos": 98461
      },
      {
        "id": 81465,
        "kecamatan_id": 6952,
        "kelurahan": "Huberita",
        "kd_pos": 98461
      },
      {
        "id": 81466,
        "kecamatan_id": 6952,
        "kelurahan": "Insas",
        "kd_pos": 98461
      },
      {
        "id": 81467,
        "kecamatan_id": 6952,
        "kelurahan": "Ismayu",
        "kd_pos": 98461
      },
      {
        "id": 81468,
        "kecamatan_id": 6952,
        "kelurahan": "Kambuaya",
        "kd_pos": 98461
      },
      {
        "id": 81469,
        "kecamatan_id": 6952,
        "kelurahan": "Keyum",
        "kd_pos": 98461
      },
      {
        "id": 81470,
        "kecamatan_id": 6952,
        "kelurahan": "Sefayit",
        "kd_pos": 98461
      },
      {
        "id": 81471,
        "kecamatan_id": 6953,
        "kelurahan": "Faitwosur",
        "kd_pos": 98461
      },
      {
        "id": 81472,
        "kecamatan_id": 6953,
        "kelurahan": "Isusu",
        "kd_pos": 98461
      },
      {
        "id": 81473,
        "kecamatan_id": 6953,
        "kelurahan": "Kambuifa",
        "kd_pos": 98461
      },
      {
        "id": 81474,
        "kecamatan_id": 6953,
        "kelurahan": "Kambuskato",
        "kd_pos": 98461
      },
      {
        "id": 81475,
        "kecamatan_id": 6953,
        "kelurahan": "Kambuskato Utara",
        "kd_pos": 98461
      },
      {
        "id": 81476,
        "kecamatan_id": 6953,
        "kelurahan": "Mano",
        "kd_pos": 98461
      },
      {
        "id": 81477,
        "kecamatan_id": 6953,
        "kelurahan": "Sipat",
        "kd_pos": 98461
      },
      {
        "id": 81478,
        "kecamatan_id": 6954,
        "kelurahan": "Asmuruf Tee",
        "kd_pos": 98461
      },
      {
        "id": 81479,
        "kecamatan_id": 6954,
        "kelurahan": "Asmuruf U",
        "kd_pos": 98461
      },
      {
        "id": 81480,
        "kecamatan_id": 6954,
        "kelurahan": "Bohwat",
        "kd_pos": 98461
      },
      {
        "id": 81481,
        "kecamatan_id": 6954,
        "kelurahan": "Fan",
        "kd_pos": 98461
      },
      {
        "id": 81482,
        "kecamatan_id": 6954,
        "kelurahan": "Fategomi",
        "kd_pos": 98461
      },
      {
        "id": 81483,
        "kecamatan_id": 6954,
        "kelurahan": "Framafir",
        "kd_pos": 98461
      },
      {
        "id": 81484,
        "kecamatan_id": 6954,
        "kelurahan": "Gohsames",
        "kd_pos": 98461
      },
      {
        "id": 81485,
        "kecamatan_id": 6954,
        "kelurahan": "Inta",
        "kd_pos": 98461
      },
      {
        "id": 81486,
        "kecamatan_id": 6954,
        "kelurahan": "Mirafan",
        "kd_pos": 98461
      },
      {
        "id": 81487,
        "kecamatan_id": 6954,
        "kelurahan": "Subrit",
        "kd_pos": 98461
      },
      {
        "id": 81488,
        "kecamatan_id": 6954,
        "kelurahan": "Tehak Besar",
        "kd_pos": 98461
      },
      {
        "id": 81489,
        "kecamatan_id": 6954,
        "kelurahan": "Tehak Tee",
        "kd_pos": 98461
      },
      {
        "id": 81490,
        "kecamatan_id": 6955,
        "kelurahan": "Frabo",
        "kd_pos": 98461
      },
      {
        "id": 81491,
        "kecamatan_id": 6955,
        "kelurahan": "Karfa",
        "kd_pos": 98461
      },
      {
        "id": 81492,
        "kecamatan_id": 6955,
        "kelurahan": "Kona",
        "kd_pos": 98461
      },
      {
        "id": 81493,
        "kecamatan_id": 6955,
        "kelurahan": "Kosah",
        "kd_pos": 98461
      },
      {
        "id": 81494,
        "kecamatan_id": 6955,
        "kelurahan": "Mapura",
        "kd_pos": 98461
      },
      {
        "id": 81495,
        "kecamatan_id": 6955,
        "kelurahan": "Suwiam",
        "kd_pos": 98461
      },
      {
        "id": 81496,
        "kecamatan_id": 6955,
        "kelurahan": "Tomase",
        "kd_pos": 98461
      },
      {
        "id": 81497,
        "kecamatan_id": 6956,
        "kelurahan": "Bakrabi",
        "kd_pos": 98461
      },
      {
        "id": 81498,
        "kecamatan_id": 6956,
        "kelurahan": "Kombif",
        "kd_pos": 98461
      },
      {
        "id": 81499,
        "kecamatan_id": 6956,
        "kelurahan": "Mahos",
        "kd_pos": 98461
      },
      {
        "id": 81500,
        "kecamatan_id": 6956,
        "kelurahan": "Nafasi",
        "kd_pos": 98461
      },
      {
        "id": 81501,
        "kecamatan_id": 6956,
        "kelurahan": "Rufases",
        "kd_pos": 98461
      },
      {
        "id": 81502,
        "kecamatan_id": 6956,
        "kelurahan": "Sawo",
        "kd_pos": 98461
      },
      {
        "id": 81503,
        "kecamatan_id": 6956,
        "kelurahan": "Seya",
        "kd_pos": 98461
      },
      {
        "id": 81504,
        "kecamatan_id": 6956,
        "kelurahan": "Suswa",
        "kd_pos": 98461
      },
      {
        "id": 81505,
        "kecamatan_id": 6956,
        "kelurahan": "Wabam",
        "kd_pos": 98461
      },
      {
        "id": 81506,
        "kecamatan_id": 6957,
        "kelurahan": "Batu Zaman",
        "kd_pos": 98461
      },
      {
        "id": 81507,
        "kecamatan_id": 6957,
        "kelurahan": "Kanggilo",
        "kd_pos": 98461
      },
      {
        "id": 81508,
        "kecamatan_id": 6957,
        "kelurahan": "Mopi",
        "kd_pos": 98461
      },
      {
        "id": 81509,
        "kecamatan_id": 6957,
        "kelurahan": "Nonomi",
        "kd_pos": 98461
      },
      {
        "id": 81510,
        "kecamatan_id": 6957,
        "kelurahan": "Sarafambai",
        "kd_pos": 98461
      },
      {
        "id": 81511,
        "kecamatan_id": 6957,
        "kelurahan": "Sawara Jaya",
        "kd_pos": 98461
      },
      {
        "id": 81512,
        "kecamatan_id": 6957,
        "kelurahan": "Uri",
        "kd_pos": 98461
      },
      {
        "id": 81513,
        "kecamatan_id": 6957,
        "kelurahan": "Waren I",
        "kd_pos": 98461
      },
      {
        "id": 81514,
        "kecamatan_id": 6957,
        "kelurahan": "Waren II",
        "kd_pos": 98461
      },
      {
        "id": 81515,
        "kecamatan_id": 6958,
        "kelurahan": "Ayaubey",
        "kd_pos": 98354
      },
      {
        "id": 81516,
        "kecamatan_id": 6958,
        "kelurahan": "Hungku",
        "kd_pos": 98354
      },
      {
        "id": 81517,
        "kecamatan_id": 6958,
        "kelurahan": "Igembai",
        "kd_pos": 98354
      },
      {
        "id": 81518,
        "kecamatan_id": 6958,
        "kelurahan": "Imbai",
        "kd_pos": 98354
      },
      {
        "id": 81519,
        "kecamatan_id": 6958,
        "kelurahan": "Iraiweri",
        "kd_pos": 98354
      },
      {
        "id": 81520,
        "kecamatan_id": 6958,
        "kelurahan": "Mentubey",
        "kd_pos": 98354
      },
      {
        "id": 81521,
        "kecamatan_id": 6958,
        "kelurahan": "Pamaha",
        "kd_pos": 98354
      },
      {
        "id": 81522,
        "kecamatan_id": 6958,
        "kelurahan": "Srubey",
        "kd_pos": 98354
      },
      {
        "id": 81523,
        "kecamatan_id": 6958,
        "kelurahan": "Susi",
        "kd_pos": 98354
      },
      {
        "id": 81524,
        "kecamatan_id": 6958,
        "kelurahan": "Suteibey",
        "kd_pos": 98354
      },
      {
        "id": 81525,
        "kecamatan_id": 6958,
        "kelurahan": "Testega Pamaha",
        "kd_pos": 98354
      },
      {
        "id": 81526,
        "kecamatan_id": 6958,
        "kelurahan": "Ullong",
        "kd_pos": 98354
      },
      {
        "id": 81527,
        "kecamatan_id": 6958,
        "kelurahan": "Uper",
        "kd_pos": 98354
      },
      {
        "id": 81528,
        "kecamatan_id": 6959,
        "kelurahan": "Itkau",
        "kd_pos": 98354
      },
      {
        "id": 81529,
        "kecamatan_id": 6959,
        "kelurahan": "Krobut",
        "kd_pos": 98354
      },
      {
        "id": 81530,
        "kecamatan_id": 6959,
        "kelurahan": "Ngisrow",
        "kd_pos": 98354
      },
      {
        "id": 81531,
        "kecamatan_id": 6959,
        "kelurahan": "Sakumi",
        "kd_pos": 98354
      },
      {
        "id": 81532,
        "kecamatan_id": 6959,
        "kelurahan": "Sibiogud",
        "kd_pos": 98354
      },
      {
        "id": 81533,
        "kecamatan_id": 6959,
        "kelurahan": "Sisrang",
        "kd_pos": 98354
      },
      {
        "id": 81534,
        "kecamatan_id": 6959,
        "kelurahan": "Tombrok",
        "kd_pos": 98354
      },
      {
        "id": 81535,
        "kecamatan_id": 6959,
        "kelurahan": "Tubyam",
        "kd_pos": 98354
      },
      {
        "id": 81536,
        "kecamatan_id": 6960,
        "kelurahan": "Aiga",
        "kd_pos": 98358
      },
      {
        "id": 81537,
        "kecamatan_id": 6960,
        "kelurahan": "Bigwaimud",
        "kd_pos": 98358
      },
      {
        "id": 81538,
        "kecamatan_id": 6960,
        "kelurahan": "Binggrayud",
        "kd_pos": 98358
      },
      {
        "id": 81539,
        "kecamatan_id": 6960,
        "kelurahan": "Catubouw",
        "kd_pos": 98358
      },
      {
        "id": 81540,
        "kecamatan_id": 6960,
        "kelurahan": "Coijut",
        "kd_pos": 98358
      },
      {
        "id": 81541,
        "kecamatan_id": 6960,
        "kelurahan": "Idemai",
        "kd_pos": 98358
      },
      {
        "id": 81542,
        "kecamatan_id": 6960,
        "kelurahan": "Ijigreg",
        "kd_pos": 98358
      },
      {
        "id": 81543,
        "kecamatan_id": 6960,
        "kelurahan": "Imandrigo",
        "kd_pos": 98358
      },
      {
        "id": 81544,
        "kecamatan_id": 6960,
        "kelurahan": "Jim",
        "kd_pos": 98358
      },
      {
        "id": 81545,
        "kecamatan_id": 6960,
        "kelurahan": "Kaungwam",
        "kd_pos": 98358
      },
      {
        "id": 81546,
        "kecamatan_id": 6960,
        "kelurahan": "Manggesuk",
        "kd_pos": 98358
      },
      {
        "id": 81547,
        "kecamatan_id": 6960,
        "kelurahan": "Mieycomti",
        "kd_pos": 98358
      },
      {
        "id": 81548,
        "kecamatan_id": 6960,
        "kelurahan": "Mihij",
        "kd_pos": 98358
      },
      {
        "id": 81549,
        "kecamatan_id": 6960,
        "kelurahan": "Mihou",
        "kd_pos": 98358
      },
      {
        "id": 81550,
        "kecamatan_id": 6960,
        "kelurahan": "Minmo",
        "kd_pos": 98358
      },
      {
        "id": 81551,
        "kecamatan_id": 6960,
        "kelurahan": "Ndabouw",
        "kd_pos": 98358
      },
      {
        "id": 81552,
        "kecamatan_id": 6960,
        "kelurahan": "Slomiou",
        "kd_pos": 98358
      },
      {
        "id": 81553,
        "kecamatan_id": 6960,
        "kelurahan": "Soudin",
        "kd_pos": 98358
      },
      {
        "id": 81554,
        "kecamatan_id": 6960,
        "kelurahan": "Sugemeh",
        "kd_pos": 98358
      },
      {
        "id": 81555,
        "kecamatan_id": 6960,
        "kelurahan": "Timtouw",
        "kd_pos": 98358
      },
      {
        "id": 81556,
        "kecamatan_id": 6960,
        "kelurahan": "Unti",
        "kd_pos": 98358
      },
      {
        "id": 81557,
        "kecamatan_id": 6961,
        "kelurahan": "Cigera",
        "kd_pos": 98359
      },
      {
        "id": 81558,
        "kecamatan_id": 6961,
        "kelurahan": "Cirnohu",
        "kd_pos": 98359
      },
      {
        "id": 81559,
        "kecamatan_id": 6961,
        "kelurahan": "Danmou",
        "kd_pos": 98359
      },
      {
        "id": 81560,
        "kecamatan_id": 6961,
        "kelurahan": "Demdamei",
        "kd_pos": 98359
      },
      {
        "id": 81561,
        "kecamatan_id": 6961,
        "kelurahan": "Dibetik",
        "kd_pos": 98359
      },
      {
        "id": 81562,
        "kecamatan_id": 6961,
        "kelurahan": "Disra",
        "kd_pos": 98359
      },
      {
        "id": 81563,
        "kecamatan_id": 6961,
        "kelurahan": "Dugrimog",
        "kd_pos": 98359
      },
      {
        "id": 81564,
        "kecamatan_id": 6961,
        "kelurahan": "Gedeira",
        "kd_pos": 98359
      },
      {
        "id": 81565,
        "kecamatan_id": 6961,
        "kelurahan": "Iranmeba",
        "kd_pos": 98359
      },
      {
        "id": 81566,
        "kecamatan_id": 6961,
        "kelurahan": "Kusmenau",
        "kd_pos": 98359
      },
      {
        "id": 81567,
        "kecamatan_id": 6961,
        "kelurahan": "Miseda",
        "kd_pos": 98359
      },
      {
        "id": 81568,
        "kecamatan_id": 6961,
        "kelurahan": "Sirgemeh",
        "kd_pos": 98359
      },
      {
        "id": 81569,
        "kecamatan_id": 6961,
        "kelurahan": "Sneremer",
        "kd_pos": 98359
      },
      {
        "id": 81570,
        "kecamatan_id": 6961,
        "kelurahan": "Tomstir",
        "kd_pos": 98359
      },
      {
        "id": 81571,
        "kecamatan_id": 6962,
        "kelurahan": "Aryon",
        "kd_pos": 98357
      },
      {
        "id": 81572,
        "kecamatan_id": 6962,
        "kelurahan": "Cangoisi",
        "kd_pos": 98357
      },
      {
        "id": 81573,
        "kecamatan_id": 6962,
        "kelurahan": "Demunti",
        "kd_pos": 98357
      },
      {
        "id": 81574,
        "kecamatan_id": 6962,
        "kelurahan": "Gueipimbai",
        "kd_pos": 98357
      },
      {
        "id": 81575,
        "kecamatan_id": 6962,
        "kelurahan": "Guwei Uti",
        "kd_pos": 98357
      },
      {
        "id": 81576,
        "kecamatan_id": 6962,
        "kelurahan": "Haktiebou",
        "kd_pos": 98357
      },
      {
        "id": 81577,
        "kecamatan_id": 6962,
        "kelurahan": "Humeisi",
        "kd_pos": 98357
      },
      {
        "id": 81578,
        "kecamatan_id": 6962,
        "kelurahan": "Ikimabou",
        "kd_pos": 98357
      },
      {
        "id": 81579,
        "kecamatan_id": 6962,
        "kelurahan": "Kisap",
        "kd_pos": 98357
      },
      {
        "id": 81580,
        "kecamatan_id": 6962,
        "kelurahan": "Kwaiyehep",
        "kd_pos": 98357
      },
      {
        "id": 81581,
        "kecamatan_id": 6962,
        "kelurahan": "Kwok Dua",
        "kd_pos": 98357
      },
      {
        "id": 81582,
        "kecamatan_id": 6962,
        "kelurahan": "Kwok Satu",
        "kd_pos": 98357
      },
      {
        "id": 81583,
        "kecamatan_id": 6962,
        "kelurahan": "Liehak",
        "kd_pos": 98357
      },
      {
        "id": 81584,
        "kecamatan_id": 6962,
        "kelurahan": "Manggot",
        "kd_pos": 98357
      },
      {
        "id": 81585,
        "kecamatan_id": 6962,
        "kelurahan": "Mbegau",
        "kd_pos": 98357
      },
      {
        "id": 81586,
        "kecamatan_id": 6962,
        "kelurahan": "Mbrande",
        "kd_pos": 98357
      },
      {
        "id": 81587,
        "kecamatan_id": 6962,
        "kelurahan": "Minyeimemud",
        "kd_pos": 98357
      },
      {
        "id": 81588,
        "kecamatan_id": 6962,
        "kelurahan": "Monut",
        "kd_pos": 98357
      },
      {
        "id": 81589,
        "kecamatan_id": 6962,
        "kelurahan": "Ngimoubri",
        "kd_pos": 98357
      },
      {
        "id": 81590,
        "kecamatan_id": 6962,
        "kelurahan": "Ntap",
        "kd_pos": 98357
      },
      {
        "id": 81591,
        "kecamatan_id": 6962,
        "kelurahan": "Nungkimor",
        "kd_pos": 98357
      },
      {
        "id": 81592,
        "kecamatan_id": 6962,
        "kelurahan": "Penibut",
        "kd_pos": 98357
      },
      {
        "id": 81593,
        "kecamatan_id": 6962,
        "kelurahan": "Punggung",
        "kd_pos": 98357
      },
      {
        "id": 81594,
        "kecamatan_id": 6962,
        "kelurahan": "Sopnyai",
        "kd_pos": 98357
      },
      {
        "id": 81595,
        "kecamatan_id": 6962,
        "kelurahan": "Tigaucomti",
        "kd_pos": 98357
      },
      {
        "id": 81596,
        "kecamatan_id": 6962,
        "kelurahan": "Tingwoikiou",
        "kd_pos": 98357
      },
      {
        "id": 81597,
        "kecamatan_id": 6962,
        "kelurahan": "Tumbeibehei",
        "kd_pos": 98357
      },
      {
        "id": 81598,
        "kecamatan_id": 6962,
        "kelurahan": "Umcep",
        "kd_pos": 98357
      },
      {
        "id": 81599,
        "kecamatan_id": 6962,
        "kelurahan": "Urwong",
        "kd_pos": 98357
      },
      {
        "id": 81600,
        "kecamatan_id": 6963,
        "kelurahan": "Imbeisba",
        "kd_pos": 98354
      },
      {
        "id": 81601,
        "kecamatan_id": 6963,
        "kelurahan": "Inyebuow",
        "kd_pos": 98354
      },
      {
        "id": 81602,
        "kecamatan_id": 6963,
        "kelurahan": "Koney",
        "kd_pos": 98354
      },
      {
        "id": 81603,
        "kecamatan_id": 6963,
        "kelurahan": "Membey",
        "kd_pos": 98354
      },
      {
        "id": 81604,
        "kecamatan_id": 6963,
        "kelurahan": "Memti",
        "kd_pos": 98354
      },
      {
        "id": 81605,
        "kecamatan_id": 6963,
        "kelurahan": "Usti",
        "kd_pos": 98354
      },
      {
        "id": 81606,
        "kecamatan_id": 6964,
        "kelurahan": "Aduer",
        "kd_pos": 98358
      },
      {
        "id": 81607,
        "kecamatan_id": 6964,
        "kelurahan": "Andang",
        "kd_pos": 98358
      },
      {
        "id": 81608,
        "kecamatan_id": 6964,
        "kelurahan": "Anggra",
        "kd_pos": 98358
      },
      {
        "id": 81609,
        "kecamatan_id": 6964,
        "kelurahan": "Apul",
        "kd_pos": 98358
      },
      {
        "id": 81610,
        "kecamatan_id": 6964,
        "kelurahan": "Awaibehel",
        "kd_pos": 98358
      },
      {
        "id": 81611,
        "kecamatan_id": 6964,
        "kelurahan": "Ayau",
        "kd_pos": 98358
      },
      {
        "id": 81612,
        "kecamatan_id": 6964,
        "kelurahan": "Bingwoyut",
        "kd_pos": 98358
      },
      {
        "id": 81613,
        "kecamatan_id": 6964,
        "kelurahan": "Coisi",
        "kd_pos": 98358
      },
      {
        "id": 81614,
        "kecamatan_id": 6964,
        "kelurahan": "Demaisi",
        "kd_pos": 98358
      },
      {
        "id": 81615,
        "kecamatan_id": 6964,
        "kelurahan": "Driye",
        "kd_pos": 98358
      },
      {
        "id": 81616,
        "kecamatan_id": 6964,
        "kelurahan": "Handuk",
        "kd_pos": 98358
      },
      {
        "id": 81617,
        "kecamatan_id": 6964,
        "kelurahan": "Imbenti",
        "kd_pos": 98358
      },
      {
        "id": 81618,
        "kecamatan_id": 6964,
        "kelurahan": "Imbonggun",
        "kd_pos": 98358
      },
      {
        "id": 81619,
        "kecamatan_id": 6964,
        "kelurahan": "Imbrekti",
        "kd_pos": 98358
      },
      {
        "id": 81620,
        "kecamatan_id": 6964,
        "kelurahan": "Indabri",
        "kd_pos": 98358
      },
      {
        "id": 81621,
        "kecamatan_id": 6964,
        "kelurahan": "Inggramhim",
        "kd_pos": 98358
      },
      {
        "id": 81622,
        "kecamatan_id": 6964,
        "kelurahan": "Injuar",
        "kd_pos": 98358
      },
      {
        "id": 81623,
        "kecamatan_id": 6964,
        "kelurahan": "Ipingosi",
        "kd_pos": 98358
      },
      {
        "id": 81624,
        "kecamatan_id": 6964,
        "kelurahan": "Mainda",
        "kd_pos": 98358
      },
      {
        "id": 81625,
        "kecamatan_id": 6964,
        "kelurahan": "Mbingma",
        "kd_pos": 98358
      },
      {
        "id": 81626,
        "kecamatan_id": 6964,
        "kelurahan": "Memangker",
        "kd_pos": 98358
      },
      {
        "id": 81627,
        "kecamatan_id": 6964,
        "kelurahan": "Micadiwor",
        "kd_pos": 98358
      },
      {
        "id": 81628,
        "kecamatan_id": 6964,
        "kelurahan": "Miconti",
        "kd_pos": 98358
      },
      {
        "id": 81629,
        "kecamatan_id": 6964,
        "kelurahan": "Minyambouw",
        "kd_pos": 98358
      },
      {
        "id": 81630,
        "kecamatan_id": 6964,
        "kelurahan": "Misangoisi",
        "kd_pos": 98358
      },
      {
        "id": 81631,
        "kecamatan_id": 6964,
        "kelurahan": "Mitiede",
        "kd_pos": 98358
      },
      {
        "id": 81632,
        "kecamatan_id": 6964,
        "kelurahan": "Nimbiau",
        "kd_pos": 98358
      },
      {
        "id": 81633,
        "kecamatan_id": 6964,
        "kelurahan": "Ninsimoi",
        "kd_pos": 98358
      },
      {
        "id": 81634,
        "kecamatan_id": 6964,
        "kelurahan": "Pinyausi",
        "kd_pos": 98358
      },
      {
        "id": 81635,
        "kecamatan_id": 6964,
        "kelurahan": "Sigim",
        "kd_pos": 98358
      },
      {
        "id": 81636,
        "kecamatan_id": 6964,
        "kelurahan": "Simerbei",
        "kd_pos": 98358
      },
      {
        "id": 81637,
        "kecamatan_id": 6964,
        "kelurahan": "Sinaltousi",
        "kd_pos": 98358
      },
      {
        "id": 81638,
        "kecamatan_id": 6964,
        "kelurahan": "Smanggei",
        "kd_pos": 98358
      },
      {
        "id": 81639,
        "kecamatan_id": 6964,
        "kelurahan": "Ugjeheg",
        "kd_pos": 98358
      },
      {
        "id": 81640,
        "kecamatan_id": 6964,
        "kelurahan": "Umpug",
        "kd_pos": 98358
      },
      {
        "id": 81641,
        "kecamatan_id": 6964,
        "kelurahan": "Ungga",
        "kd_pos": 98358
      },
      {
        "id": 81642,
        "kecamatan_id": 6964,
        "kelurahan": "Wamminda",
        "kd_pos": 98358
      },
      {
        "id": 81643,
        "kecamatan_id": 6965,
        "kelurahan": "Anuk",
        "kd_pos": 98359
      },
      {
        "id": 81644,
        "kecamatan_id": 6965,
        "kelurahan": "Dugahani",
        "kd_pos": 98359
      },
      {
        "id": 81645,
        "kecamatan_id": 6965,
        "kelurahan": "Inyaub",
        "kd_pos": 98359
      },
      {
        "id": 81646,
        "kecamatan_id": 6965,
        "kelurahan": "Kobrey",
        "kd_pos": 98359
      },
      {
        "id": 81647,
        "kecamatan_id": 6965,
        "kelurahan": "Kopo",
        "kd_pos": 98359
      },
      {
        "id": 81648,
        "kecamatan_id": 6965,
        "kelurahan": "Kostera",
        "kd_pos": 98359
      },
      {
        "id": 81649,
        "kecamatan_id": 6965,
        "kelurahan": "Menesrij",
        "kd_pos": 98359
      },
      {
        "id": 81650,
        "kecamatan_id": 6965,
        "kelurahan": "Saugemeba",
        "kd_pos": 98359
      },
      {
        "id": 81651,
        "kecamatan_id": 6965,
        "kelurahan": "Sungedes",
        "kd_pos": 98359
      },
      {
        "id": 81652,
        "kecamatan_id": 6965,
        "kelurahan": "Sururey",
        "kd_pos": 98359
      },
      {
        "id": 81653,
        "kecamatan_id": 6965,
        "kelurahan": "Tomstera",
        "kd_pos": 98359
      },
      {
        "id": 81654,
        "kecamatan_id": 6965,
        "kelurahan": "Tuhubea",
        "kd_pos": 98359
      },
      {
        "id": 81655,
        "kecamatan_id": 6966,
        "kelurahan": "Ansum",
        "kd_pos": 98354
      },
      {
        "id": 81656,
        "kecamatan_id": 6966,
        "kelurahan": "Awigau",
        "kd_pos": 98354
      },
      {
        "id": 81657,
        "kecamatan_id": 6966,
        "kelurahan": "Deurohu",
        "kd_pos": 98354
      },
      {
        "id": 81658,
        "kecamatan_id": 6966,
        "kelurahan": "Disura",
        "kd_pos": 98354
      },
      {
        "id": 81659,
        "kecamatan_id": 6966,
        "kelurahan": "Genyu",
        "kd_pos": 98354
      },
      {
        "id": 81660,
        "kecamatan_id": 6966,
        "kelurahan": "Horeta",
        "kd_pos": 98354
      },
      {
        "id": 81661,
        "kecamatan_id": 6966,
        "kelurahan": "Irbos",
        "kd_pos": 98354
      },
      {
        "id": 81662,
        "kecamatan_id": 6966,
        "kelurahan": "Siskedowo",
        "kd_pos": 98354
      },
      {
        "id": 81663,
        "kecamatan_id": 6966,
        "kelurahan": "Taige",
        "kd_pos": 98354
      },
      {
        "id": 81664,
        "kecamatan_id": 6966,
        "kelurahan": "Tridaga",
        "kd_pos": 98354
      },
      {
        "id": 81665,
        "kecamatan_id": 6966,
        "kelurahan": "Ubeisa",
        "kd_pos": 98354
      },
      {
        "id": 81666,
        "kecamatan_id": 6967,
        "kelurahan": "Asai Dua",
        "kd_pos": 98315
      },
      {
        "id": 81667,
        "kecamatan_id": 6967,
        "kelurahan": "Demuora",
        "kd_pos": 98315
      },
      {
        "id": 81668,
        "kecamatan_id": 6967,
        "kelurahan": "Dumbrey",
        "kd_pos": 98315
      },
      {
        "id": 81669,
        "kecamatan_id": 6967,
        "kelurahan": "Iba",
        "kd_pos": 98315
      },
      {
        "id": 81670,
        "kecamatan_id": 6967,
        "kelurahan": "Jigja",
        "kd_pos": 98315
      },
      {
        "id": 81671,
        "kecamatan_id": 6967,
        "kelurahan": "Meidogda",
        "kd_pos": 98315
      },
      {
        "id": 81672,
        "kecamatan_id": 6967,
        "kelurahan": "Meifekeni",
        "kd_pos": 98315
      },
      {
        "id": 81673,
        "kecamatan_id": 6967,
        "kelurahan": "Meifokeda",
        "kd_pos": 98315
      },
      {
        "id": 81674,
        "kecamatan_id": 6967,
        "kelurahan": "Meifowoska",
        "kd_pos": 98315
      },
      {
        "id": 81675,
        "kecamatan_id": 6967,
        "kelurahan": "Meigehenawu",
        "kd_pos": 98315
      },
      {
        "id": 81676,
        "kecamatan_id": 6967,
        "kelurahan": "Meijugjijigja",
        "kd_pos": 98315
      },
      {
        "id": 81677,
        "kecamatan_id": 6967,
        "kelurahan": "Meimersa",
        "kd_pos": 98315
      },
      {
        "id": 81678,
        "kecamatan_id": 6967,
        "kelurahan": "Meksi",
        "kd_pos": 98315
      },
      {
        "id": 81679,
        "kecamatan_id": 6967,
        "kelurahan": "Morumfeyi",
        "kd_pos": 98315
      },
      {
        "id": 81680,
        "kecamatan_id": 6967,
        "kelurahan": "Testega",
        "kd_pos": 98315
      },
      {
        "id": 81681,
        "kecamatan_id": 6968,
        "kelurahan": "Abidon",
        "kd_pos": 98481
      },
      {
        "id": 81682,
        "kecamatan_id": 6968,
        "kelurahan": "Meosbekwan",
        "kd_pos": 98481
      },
      {
        "id": 81683,
        "kecamatan_id": 6968,
        "kelurahan": "Reni",
        "kd_pos": 98481
      },
      {
        "id": 81684,
        "kecamatan_id": 6968,
        "kelurahan": "Rutum",
        "kd_pos": 98481
      },
      {
        "id": 81685,
        "kecamatan_id": 6969,
        "kelurahan": "Amdui",
        "kd_pos": 98484
      },
      {
        "id": 81686,
        "kecamatan_id": 6969,
        "kelurahan": "Wailebet",
        "kd_pos": 98484
      },
      {
        "id": 81687,
        "kecamatan_id": 6969,
        "kelurahan": "Waiman",
        "kd_pos": 98484
      },
      {
        "id": 81688,
        "kecamatan_id": 6969,
        "kelurahan": "Yenanas",
        "kd_pos": 98484
      },
      {
        "id": 81689,
        "kecamatan_id": 6970,
        "kelurahan": "Arefi Selatan",
        "kd_pos": 98484
      },
      {
        "id": 81690,
        "kecamatan_id": 6970,
        "kelurahan": "Arefi Timur",
        "kd_pos": 98484
      },
      {
        "id": 81691,
        "kecamatan_id": 6970,
        "kelurahan": "Yensawai Barat",
        "kd_pos": 98484
      },
      {
        "id": 81692,
        "kecamatan_id": 6970,
        "kelurahan": "Yensawai Timur",
        "kd_pos": 98484
      },
      {
        "id": 81693,
        "kecamatan_id": 6971,
        "kelurahan": "Doreker (Dorekar)",
        "kd_pos": 98481
      },
      {
        "id": 81694,
        "kecamatan_id": 6971,
        "kelurahan": "Meosbekwan",
        "kd_pos": 98481
      },
      {
        "id": 81695,
        "kecamatan_id": 6971,
        "kelurahan": "Reni",
        "kd_pos": 98481
      },
      {
        "id": 81696,
        "kecamatan_id": 6971,
        "kelurahan": "Rutum",
        "kd_pos": 98481
      },
      {
        "id": 81697,
        "kecamatan_id": 6971,
        "kelurahan": "Yenkawir",
        "kd_pos": 98481
      },
      {
        "id": 81698,
        "kecamatan_id": 6972,
        "kelurahan": "Pulau Tikus",
        "kd_pos": 98483
      },
      {
        "id": 81699,
        "kecamatan_id": 6972,
        "kelurahan": "Satukurano",
        "kd_pos": 98483
      },
      {
        "id": 81700,
        "kecamatan_id": 6972,
        "kelurahan": "Wejim Barat",
        "kd_pos": 98483
      },
      {
        "id": 81701,
        "kecamatan_id": 6972,
        "kelurahan": "Wejim Timur",
        "kd_pos": 98483
      },
      {
        "id": 81702,
        "kecamatan_id": 6973,
        "kelurahan": "Awat",
        "kd_pos": 98483
      },
      {
        "id": 81703,
        "kecamatan_id": 6973,
        "kelurahan": "Deer",
        "kd_pos": 98483
      },
      {
        "id": 81704,
        "kecamatan_id": 6973,
        "kelurahan": "Dibalal",
        "kd_pos": 98483
      },
      {
        "id": 81705,
        "kecamatan_id": 6973,
        "kelurahan": "Mikiran",
        "kd_pos": 98483
      },
      {
        "id": 81706,
        "kecamatan_id": 6973,
        "kelurahan": "Tolabi (Tolobi)",
        "kd_pos": 98483
      },
      {
        "id": 81707,
        "kecamatan_id": 6974,
        "kelurahan": "Bonwakir",
        "kd_pos": 98482
      },
      {
        "id": 81708,
        "kecamatan_id": 6974,
        "kelurahan": "Sapordanco",
        "kd_pos": 98482
      },
      {
        "id": 81709,
        "kecamatan_id": 6974,
        "kelurahan": "Waisai",
        "kd_pos": 98482
      },
      {
        "id": 81710,
        "kecamatan_id": 6974,
        "kelurahan": "Warmasen",
        "kd_pos": 98482
      },
      {
        "id": 81711,
        "kecamatan_id": 6975,
        "kelurahan": "Arborek",
        "kd_pos": 98482
      },
      {
        "id": 81712,
        "kecamatan_id": 6975,
        "kelurahan": "Kabuy (Kabui)",
        "kd_pos": 98482
      },
      {
        "id": 81713,
        "kecamatan_id": 6975,
        "kelurahan": "Kapisawar",
        "kd_pos": 98482
      },
      {
        "id": 81714,
        "kecamatan_id": 6975,
        "kelurahan": "Kurkapa",
        "kd_pos": 98482
      },
      {
        "id": 81715,
        "kecamatan_id": 6975,
        "kelurahan": "Sawandarek",
        "kd_pos": 98482
      },
      {
        "id": 81716,
        "kecamatan_id": 6975,
        "kelurahan": "Sawinggrai",
        "kd_pos": 98482
      },
      {
        "id": 81717,
        "kecamatan_id": 6975,
        "kelurahan": "Yembekwan",
        "kd_pos": 98482
      },
      {
        "id": 81718,
        "kecamatan_id": 6975,
        "kelurahan": "Yenbuba",
        "kd_pos": 98482
      },
      {
        "id": 81719,
        "kecamatan_id": 6975,
        "kelurahan": "Yenwaupnoor (Yenwaupnor)",
        "kd_pos": 98482
      },
      {
        "id": 81720,
        "kecamatan_id": 6976,
        "kelurahan": "Folley",
        "kd_pos": 98483
      },
      {
        "id": 81721,
        "kecamatan_id": 6976,
        "kelurahan": "Lenmalas",
        "kd_pos": 98483
      },
      {
        "id": 81722,
        "kecamatan_id": 6976,
        "kelurahan": "Satukorano (Sato Kurana)",
        "kd_pos": 98483
      },
      {
        "id": 81723,
        "kecamatan_id": 6976,
        "kelurahan": "Tomolol",
        "kd_pos": 98483
      },
      {
        "id": 81724,
        "kecamatan_id": 6976,
        "kelurahan": "Wejim",
        "kd_pos": 98483
      },
      {
        "id": 81725,
        "kecamatan_id": 6977,
        "kelurahan": "Biga",
        "kd_pos": 98483
      },
      {
        "id": 81726,
        "kecamatan_id": 6977,
        "kelurahan": "Gamta",
        "kd_pos": 98483
      },
      {
        "id": 81727,
        "kecamatan_id": 6977,
        "kelurahan": "Kapatcol",
        "kd_pos": 98483
      },
      {
        "id": 81728,
        "kecamatan_id": 6977,
        "kelurahan": "Lilinta",
        "kd_pos": 98483
      },
      {
        "id": 81729,
        "kecamatan_id": 6977,
        "kelurahan": "Magey",
        "kd_pos": 98483
      },
      {
        "id": 81730,
        "kecamatan_id": 6978,
        "kelurahan": "Dabatan",
        "kd_pos": 98483
      },
      {
        "id": 81731,
        "kecamatan_id": 6978,
        "kelurahan": "Fafanlap",
        "kd_pos": 98483
      },
      {
        "id": 81732,
        "kecamatan_id": 6978,
        "kelurahan": "Harapan Jaya",
        "kd_pos": 98483
      },
      {
        "id": 81733,
        "kecamatan_id": 6978,
        "kelurahan": "Usaha Jaya",
        "kd_pos": 98483
      },
      {
        "id": 81734,
        "kecamatan_id": 6978,
        "kelurahan": "Yellu",
        "kd_pos": 98483
      },
      {
        "id": 81735,
        "kecamatan_id": 6979,
        "kelurahan": "Audam",
        "kd_pos": 98483
      },
      {
        "id": 81736,
        "kecamatan_id": 6979,
        "kelurahan": "Folley",
        "kd_pos": 98483
      },
      {
        "id": 81737,
        "kecamatan_id": 6979,
        "kelurahan": "Limalas Barat",
        "kd_pos": 98483
      },
      {
        "id": 81738,
        "kecamatan_id": 6979,
        "kelurahan": "Limalas Timur",
        "kd_pos": 98483
      },
      {
        "id": 81739,
        "kecamatan_id": 6979,
        "kelurahan": "Tomolol",
        "kd_pos": 98483
      },
      {
        "id": 81740,
        "kecamatan_id": 6979,
        "kelurahan": "Usaha Jaya",
        "kd_pos": 98483
      },
      {
        "id": 81741,
        "kecamatan_id": 6980,
        "kelurahan": "Kaliam",
        "kd_pos": 98484
      },
      {
        "id": 81742,
        "kecamatan_id": 6980,
        "kelurahan": "Kalwal",
        "kd_pos": 98484
      },
      {
        "id": 81743,
        "kecamatan_id": 6980,
        "kelurahan": "Solol",
        "kd_pos": 98484
      },
      {
        "id": 81744,
        "kecamatan_id": 6980,
        "kelurahan": "Waibon",
        "kd_pos": 98484
      },
      {
        "id": 81745,
        "kecamatan_id": 6981,
        "kelurahan": "Kalobo",
        "kd_pos": 98484
      },
      {
        "id": 81746,
        "kecamatan_id": 6981,
        "kelurahan": "Sakabu",
        "kd_pos": 98484
      },
      {
        "id": 81747,
        "kecamatan_id": 6981,
        "kelurahan": "Waibu",
        "kd_pos": 98484
      },
      {
        "id": 81748,
        "kecamatan_id": 6981,
        "kelurahan": "Waijan",
        "kd_pos": 98484
      },
      {
        "id": 81749,
        "kecamatan_id": 6981,
        "kelurahan": "Wailabu",
        "kd_pos": 98484
      },
      {
        "id": 81750,
        "kecamatan_id": 6981,
        "kelurahan": "Wailen",
        "kd_pos": 98484
      },
      {
        "id": 81751,
        "kecamatan_id": 6981,
        "kelurahan": "Waimeci",
        "kd_pos": 98484
      },
      {
        "id": 81752,
        "kecamatan_id": 6982,
        "kelurahan": "Jefman Barat",
        "kd_pos": 98484
      },
      {
        "id": 81753,
        "kecamatan_id": 6982,
        "kelurahan": "Jefman Timur",
        "kd_pos": 98484
      },
      {
        "id": 81754,
        "kecamatan_id": 6982,
        "kelurahan": "Kapatlap",
        "kd_pos": 98484
      },
      {
        "id": 81755,
        "kecamatan_id": 6982,
        "kelurahan": "Samate",
        "kd_pos": 98484
      },
      {
        "id": 81756,
        "kecamatan_id": 6982,
        "kelurahan": "Waidim",
        "kd_pos": 98484
      },
      {
        "id": 81757,
        "kecamatan_id": 6982,
        "kelurahan": "Wamega",
        "kd_pos": 98484
      },
      {
        "id": 81758,
        "kecamatan_id": 6983,
        "kelurahan": "Duber",
        "kd_pos": 98481
      },
      {
        "id": 81759,
        "kecamatan_id": 6983,
        "kelurahan": "Kapadiri",
        "kd_pos": 98481
      },
      {
        "id": 81760,
        "kecamatan_id": 6983,
        "kelurahan": "Rauki",
        "kd_pos": 98481
      },
      {
        "id": 81761,
        "kecamatan_id": 6983,
        "kelurahan": "Urai",
        "kd_pos": 98481
      },
      {
        "id": 81762,
        "kecamatan_id": 6984,
        "kelurahan": "Kalitoko",
        "kd_pos": 98482
      },
      {
        "id": 81763,
        "kecamatan_id": 6984,
        "kelurahan": "Lopintol",
        "kd_pos": 98482
      },
      {
        "id": 81764,
        "kecamatan_id": 6984,
        "kelurahan": "Mumes",
        "kd_pos": 98482
      },
      {
        "id": 81765,
        "kecamatan_id": 6984,
        "kelurahan": "Warsamdin",
        "kd_pos": 98482
      },
      {
        "id": 81766,
        "kecamatan_id": 6985,
        "kelurahan": "Arway",
        "kd_pos": 98482
      },
      {
        "id": 81767,
        "kecamatan_id": 6985,
        "kelurahan": "Beo",
        "kd_pos": 98482
      },
      {
        "id": 81768,
        "kecamatan_id": 6985,
        "kelurahan": "Go",
        "kd_pos": 98482
      },
      {
        "id": 81769,
        "kecamatan_id": 6985,
        "kelurahan": "Kabilol",
        "kd_pos": 98482
      },
      {
        "id": 81770,
        "kecamatan_id": 6985,
        "kelurahan": "Waifoi",
        "kd_pos": 98482
      },
      {
        "id": 81771,
        "kecamatan_id": 6985,
        "kelurahan": "Warimak",
        "kd_pos": 98482
      },
      {
        "id": 81772,
        "kecamatan_id": 6986,
        "kelurahan": "Bianci",
        "kd_pos": 98481
      },
      {
        "id": 81773,
        "kecamatan_id": 6986,
        "kelurahan": "Mutus",
        "kd_pos": 98481
      },
      {
        "id": 81774,
        "kecamatan_id": 6986,
        "kelurahan": "Saleo",
        "kd_pos": 98481
      },
      {
        "id": 81775,
        "kecamatan_id": 6986,
        "kelurahan": "Selpele",
        "kd_pos": 98481
      },
      {
        "id": 81776,
        "kecamatan_id": 6986,
        "kelurahan": "Waisilip",
        "kd_pos": 98481
      },
      {
        "id": 81777,
        "kecamatan_id": 6987,
        "kelurahan": "Gag",
        "kd_pos": 98481
      },
      {
        "id": 81778,
        "kecamatan_id": 6987,
        "kelurahan": "Manyaifun",
        "kd_pos": 98481
      },
      {
        "id": 81779,
        "kecamatan_id": 6987,
        "kelurahan": "Meosmanggara",
        "kd_pos": 98481
      },
      {
        "id": 81780,
        "kecamatan_id": 6987,
        "kelurahan": "Pam",
        "kd_pos": 98481
      },
      {
        "id": 81781,
        "kecamatan_id": 6987,
        "kelurahan": "Saukabu",
        "kd_pos": 98481
      },
      {
        "id": 81782,
        "kecamatan_id": 6987,
        "kelurahan": "Saupapir",
        "kd_pos": 98481
      },
      {
        "id": 81783,
        "kecamatan_id": 6988,
        "kelurahan": "Friwen",
        "kd_pos": 98482
      },
      {
        "id": 81784,
        "kecamatan_id": 6988,
        "kelurahan": "Saonek",
        "kd_pos": 98482
      },
      {
        "id": 81785,
        "kecamatan_id": 6988,
        "kelurahan": "Saporkren",
        "kd_pos": 98482
      },
      {
        "id": 81786,
        "kecamatan_id": 6988,
        "kelurahan": "Wawiyai",
        "kd_pos": 98482
      },
      {
        "id": 81787,
        "kecamatan_id": 6988,
        "kelurahan": "Yenbeser",
        "kd_pos": 98482
      },
      {
        "id": 81788,
        "kecamatan_id": 6989,
        "kelurahan": "Puper",
        "kd_pos": 98482
      },
      {
        "id": 81789,
        "kecamatan_id": 6989,
        "kelurahan": "Urbinasopen",
        "kd_pos": 98482
      },
      {
        "id": 81790,
        "kecamatan_id": 6989,
        "kelurahan": "Yembekaki",
        "kd_pos": 98482
      },
      {
        "id": 81791,
        "kecamatan_id": 6989,
        "kelurahan": "Yensener (Yesner)",
        "kd_pos": 98482
      },
      {
        "id": 81792,
        "kecamatan_id": 6990,
        "kelurahan": "Andey",
        "kd_pos": 98481
      },
      {
        "id": 81793,
        "kecamatan_id": 6990,
        "kelurahan": "Asukweri",
        "kd_pos": 98481
      },
      {
        "id": 81794,
        "kecamatan_id": 6990,
        "kelurahan": "Bonsayor",
        "kd_pos": 98481
      },
      {
        "id": 81795,
        "kecamatan_id": 6990,
        "kelurahan": "Darumbab",
        "kd_pos": 98481
      },
      {
        "id": 81796,
        "kecamatan_id": 6990,
        "kelurahan": "Kabare",
        "kd_pos": 98481
      },
      {
        "id": 81797,
        "kecamatan_id": 6990,
        "kelurahan": "Kalisade",
        "kd_pos": 98481
      },
      {
        "id": 81798,
        "kecamatan_id": 6991,
        "kelurahan": "Boni",
        "kd_pos": 98481
      },
      {
        "id": 81799,
        "kecamatan_id": 6991,
        "kelurahan": "Mnier",
        "kd_pos": 98481
      },
      {
        "id": 81800,
        "kecamatan_id": 6991,
        "kelurahan": "Warkori",
        "kd_pos": 98481
      },
      {
        "id": 81801,
        "kecamatan_id": 6991,
        "kelurahan": "Warmanai",
        "kd_pos": 98481
      },
      {
        "id": 81802,
        "kecamatan_id": 6992,
        "kelurahan": "Aimas",
        "kd_pos": 98457
      },
      {
        "id": 81803,
        "kecamatan_id": 6992,
        "kelurahan": "Klabinain",
        "kd_pos": 98457
      },
      {
        "id": 81804,
        "kecamatan_id": 6992,
        "kelurahan": "Klaigit",
        "kd_pos": 98457
      },
      {
        "id": 81805,
        "kecamatan_id": 6992,
        "kelurahan": "Maibo",
        "kd_pos": 98457
      },
      {
        "id": 81806,
        "kecamatan_id": 6992,
        "kelurahan": "Malasom",
        "kd_pos": 98457
      },
      {
        "id": 81807,
        "kecamatan_id": 6992,
        "kelurahan": "Malawele",
        "kd_pos": 98457
      },
      {
        "id": 81808,
        "kecamatan_id": 6992,
        "kelurahan": "Malawili",
        "kd_pos": 98457
      },
      {
        "id": 81809,
        "kecamatan_id": 6992,
        "kelurahan": "Mariat Gunung",
        "kd_pos": 98457
      },
      {
        "id": 81810,
        "kecamatan_id": 6992,
        "kelurahan": "Mariat Pantai",
        "kd_pos": 98457
      },
      {
        "id": 81811,
        "kecamatan_id": 6992,
        "kelurahan": "Warmon",
        "kd_pos": 98457
      },
      {
        "id": 81812,
        "kecamatan_id": 6993,
        "kelurahan": "Bagung",
        "kd_pos": 98453
      },
      {
        "id": 81813,
        "kecamatan_id": 6993,
        "kelurahan": "Disfra",
        "kd_pos": 98453
      },
      {
        "id": 81814,
        "kecamatan_id": 6993,
        "kelurahan": "Kaas",
        "kd_pos": 98453
      },
      {
        "id": 81815,
        "kecamatan_id": 6993,
        "kelurahan": "Klabra",
        "kd_pos": 98453
      },
      {
        "id": 81816,
        "kecamatan_id": 6993,
        "kelurahan": "Klarion",
        "kd_pos": 98453
      },
      {
        "id": 81817,
        "kecamatan_id": 6993,
        "kelurahan": "Mumpi",
        "kd_pos": 98453
      },
      {
        "id": 81818,
        "kecamatan_id": 6993,
        "kelurahan": "Wanurian",
        "kd_pos": 98453
      },
      {
        "id": 81819,
        "kecamatan_id": 6993,
        "kelurahan": "Wensi",
        "kd_pos": 98453
      },
      {
        "id": 81820,
        "kecamatan_id": 6993,
        "kelurahan": "Wisbiak",
        "kd_pos": 98453
      },
      {
        "id": 81821,
        "kecamatan_id": 6994,
        "kelurahan": "Buk",
        "kd_pos": 98453
      },
      {
        "id": 81822,
        "kecamatan_id": 6994,
        "kelurahan": "Indiwi",
        "kd_pos": 98453
      },
      {
        "id": 81823,
        "kecamatan_id": 6994,
        "kelurahan": "Klabot",
        "kd_pos": 98453
      },
      {
        "id": 81824,
        "kecamatan_id": 6994,
        "kelurahan": "Klais",
        "kd_pos": 98453
      },
      {
        "id": 81825,
        "kecamatan_id": 6994,
        "kelurahan": "Mimpe",
        "kd_pos": 98453
      },
      {
        "id": 81826,
        "kecamatan_id": 6994,
        "kelurahan": "Mlakhan",
        "kd_pos": 98453
      },
      {
        "id": 81827,
        "kecamatan_id": 6994,
        "kelurahan": "Mlat",
        "kd_pos": 98453
      },
      {
        "id": 81828,
        "kecamatan_id": 6994,
        "kelurahan": "Mlawes",
        "kd_pos": 98453
      },
      {
        "id": 81829,
        "kecamatan_id": 6995,
        "kelurahan": "Gisim Darat",
        "kd_pos": 98456
      },
      {
        "id": 81830,
        "kecamatan_id": 6995,
        "kelurahan": "Keladum",
        "kd_pos": 98456
      },
      {
        "id": 81831,
        "kecamatan_id": 6995,
        "kelurahan": "Klagulu",
        "kd_pos": 98456
      },
      {
        "id": 81832,
        "kecamatan_id": 6995,
        "kelurahan": "Klalomon",
        "kd_pos": 98456
      },
      {
        "id": 81833,
        "kecamatan_id": 6995,
        "kelurahan": "Klamano",
        "kd_pos": 98456
      },
      {
        "id": 81834,
        "kecamatan_id": 6995,
        "kelurahan": "Klamugun",
        "kd_pos": 98456
      },
      {
        "id": 81835,
        "kecamatan_id": 6995,
        "kelurahan": "Klasman",
        "kd_pos": 98456
      },
      {
        "id": 81836,
        "kecamatan_id": 6995,
        "kelurahan": "Klawana",
        "kd_pos": 98456
      },
      {
        "id": 81837,
        "kecamatan_id": 6995,
        "kelurahan": "Malajapa",
        "kd_pos": 98456
      },
      {
        "id": 81838,
        "kecamatan_id": 6995,
        "kelurahan": "Malasigit",
        "kd_pos": 98456
      },
      {
        "id": 81839,
        "kecamatan_id": 6995,
        "kelurahan": "Mlais",
        "kd_pos": 98456
      },
      {
        "id": 81840,
        "kecamatan_id": 6995,
        "kelurahan": "Wariayau",
        "kd_pos": 98456
      },
      {
        "id": 81841,
        "kecamatan_id": 6995,
        "kelurahan": "Wonosari",
        "kd_pos": 98456
      },
      {
        "id": 81842,
        "kecamatan_id": 6996,
        "kelurahan": "Klamugun",
        "kd_pos": 98472
      },
      {
        "id": 81843,
        "kecamatan_id": 6996,
        "kelurahan": "Miskum",
        "kd_pos": 98472
      },
      {
        "id": 81844,
        "kecamatan_id": 6996,
        "kelurahan": "Saengkeduk",
        "kd_pos": 98472
      },
      {
        "id": 81845,
        "kecamatan_id": 6996,
        "kelurahan": "Selekobo",
        "kd_pos": 98472
      },
      {
        "id": 81846,
        "kecamatan_id": 6996,
        "kelurahan": "Siwis",
        "kd_pos": 98472
      },
      {
        "id": 81847,
        "kecamatan_id": 6997,
        "kelurahan": "Ayolokle",
        "kd_pos": 98453
      },
      {
        "id": 81848,
        "kecamatan_id": 6997,
        "kelurahan": "Brianlo",
        "kd_pos": 98453
      },
      {
        "id": 81849,
        "kecamatan_id": 6997,
        "kelurahan": "Hobard",
        "kd_pos": 98453
      },
      {
        "id": 81850,
        "kecamatan_id": 6997,
        "kelurahan": "Klamne",
        "kd_pos": 98453
      },
      {
        "id": 81851,
        "kecamatan_id": 6997,
        "kelurahan": "Mlawen",
        "kd_pos": 98453
      },
      {
        "id": 81852,
        "kecamatan_id": 6997,
        "kelurahan": "Sas",
        "kd_pos": 98453
      },
      {
        "id": 81853,
        "kecamatan_id": 6997,
        "kelurahan": "Tarsa",
        "kd_pos": 98453
      },
      {
        "id": 81854,
        "kecamatan_id": 6997,
        "kelurahan": "Totjin",
        "kd_pos": 98453
      },
      {
        "id": 81855,
        "kecamatan_id": 6997,
        "kelurahan": "Wilty",
        "kd_pos": 98453
      },
      {
        "id": 81856,
        "kecamatan_id": 6998,
        "kelurahan": "Klasowoh",
        "kd_pos": 98471
      },
      {
        "id": 81857,
        "kecamatan_id": 6998,
        "kelurahan": "Klawuluh",
        "kd_pos": 98471
      },
      {
        "id": 81858,
        "kecamatan_id": 6998,
        "kelurahan": "Klayali",
        "kd_pos": 98471
      },
      {
        "id": 81859,
        "kecamatan_id": 6998,
        "kelurahan": "Kwakeik",
        "kd_pos": 98471
      },
      {
        "id": 81860,
        "kecamatan_id": 6998,
        "kelurahan": "Malakobutu",
        "kd_pos": 98471
      },
      {
        "id": 81861,
        "kecamatan_id": 6998,
        "kelurahan": "Malalilis",
        "kd_pos": 98471
      },
      {
        "id": 81862,
        "kecamatan_id": 6999,
        "kelurahan": "Asbaken",
        "kd_pos": 98471
      },
      {
        "id": 81863,
        "kecamatan_id": 6999,
        "kelurahan": "Bainkete",
        "kd_pos": 98471
      },
      {
        "id": 81864,
        "kecamatan_id": 6999,
        "kelurahan": "Batu Lubang/Lobang",
        "kd_pos": 98471
      },
      {
        "id": 81865,
        "kecamatan_id": 6999,
        "kelurahan": "Batu Lubang/Lobang Pantai",
        "kd_pos": 98471
      },
      {
        "id": 81866,
        "kecamatan_id": 6999,
        "kelurahan": "Kuadas (Kwadas)",
        "kd_pos": 98471
      },
      {
        "id": 81867,
        "kecamatan_id": 6999,
        "kelurahan": "Makbon",
        "kd_pos": 98471
      },
      {
        "id": 81868,
        "kecamatan_id": 6999,
        "kelurahan": "Malaumkarta",
        "kd_pos": 98471
      },
      {
        "id": 81869,
        "kecamatan_id": 6999,
        "kelurahan": "Sawatuk",
        "kd_pos": 98471
      },
      {
        "id": 81870,
        "kecamatan_id": 6999,
        "kelurahan": "Teluk Dore",
        "kd_pos": 98471
      },
      {
        "id": 81871,
        "kecamatan_id": 7000,
        "kelurahan": "Klaben",
        "kd_pos": 98457
      },
      {
        "id": 81872,
        "kecamatan_id": 7000,
        "kelurahan": "Klamalu",
        "kd_pos": 98457
      },
      {
        "id": 81873,
        "kecamatan_id": 7000,
        "kelurahan": "Klamasen",
        "kd_pos": 98457
      },
      {
        "id": 81874,
        "kecamatan_id": 7000,
        "kelurahan": "Klasukuk",
        "kd_pos": 98457
      },
      {
        "id": 81875,
        "kecamatan_id": 7000,
        "kelurahan": "Mariyai",
        "kd_pos": 98457
      },
      {
        "id": 81876,
        "kecamatan_id": 7001,
        "kelurahan": "Dasri",
        "kd_pos": 98472
      },
      {
        "id": 81877,
        "kecamatan_id": 7001,
        "kelurahan": "Ketawas",
        "kd_pos": 98472
      },
      {
        "id": 81878,
        "kecamatan_id": 7001,
        "kelurahan": "Klaos",
        "kd_pos": 98472
      },
      {
        "id": 81879,
        "kecamatan_id": 7001,
        "kelurahan": "Klatim",
        "kd_pos": 98472
      },
      {
        "id": 81880,
        "kecamatan_id": 7001,
        "kelurahan": "Luwelala",
        "kd_pos": 98472
      },
      {
        "id": 81881,
        "kecamatan_id": 7001,
        "kelurahan": "Masos",
        "kd_pos": 98472
      },
      {
        "id": 81882,
        "kecamatan_id": 7001,
        "kelurahan": "Suluh",
        "kd_pos": 98472
      },
      {
        "id": 81883,
        "kecamatan_id": 7001,
        "kelurahan": "Warbo",
        "kd_pos": 98472
      },
      {
        "id": 81884,
        "kecamatan_id": 7002,
        "kelurahan": "Arar",
        "kd_pos": 98451
      },
      {
        "id": 81885,
        "kecamatan_id": 7002,
        "kelurahan": "Jeflio (Yeflio/Yefilio)",
        "kd_pos": 98451
      },
      {
        "id": 81886,
        "kecamatan_id": 7002,
        "kelurahan": "Klalin (Klain)",
        "kd_pos": 98451
      },
      {
        "id": 81887,
        "kecamatan_id": 7002,
        "kelurahan": "Klasmelek",
        "kd_pos": 98451
      },
      {
        "id": 81888,
        "kecamatan_id": 7002,
        "kelurahan": "Makbalim",
        "kd_pos": 98451
      },
      {
        "id": 81889,
        "kecamatan_id": 7002,
        "kelurahan": "Makbusun (Makbusum)",
        "kd_pos": 98451
      },
      {
        "id": 81890,
        "kecamatan_id": 7002,
        "kelurahan": "Makotyamsa",
        "kd_pos": 98451
      },
      {
        "id": 81891,
        "kecamatan_id": 7002,
        "kelurahan": "Wen",
        "kd_pos": 98451
      },
      {
        "id": 81892,
        "kecamatan_id": 7003,
        "kelurahan": "Klafdalim",
        "kd_pos": 98451
      },
      {
        "id": 81893,
        "kecamatan_id": 7003,
        "kelurahan": "Klaforo",
        "kd_pos": 98451
      },
      {
        "id": 81894,
        "kecamatan_id": 7003,
        "kelurahan": "Klasarin",
        "kd_pos": 98451
      },
      {
        "id": 81895,
        "kecamatan_id": 7003,
        "kelurahan": "Klasof",
        "kd_pos": 98451
      },
      {
        "id": 81896,
        "kecamatan_id": 7003,
        "kelurahan": "Klawoton",
        "kd_pos": 98451
      },
      {
        "id": 81897,
        "kecamatan_id": 7003,
        "kelurahan": "Ninjemur",
        "kd_pos": 98451
      },
      {
        "id": 81898,
        "kecamatan_id": 7003,
        "kelurahan": "Wonosobo",
        "kd_pos": 98451
      },
      {
        "id": 81899,
        "kecamatan_id": 7004,
        "kelurahan": "Katinim",
        "kd_pos": 98451
      },
      {
        "id": 81900,
        "kecamatan_id": 7004,
        "kelurahan": "Majaran",
        "kd_pos": 98451
      },
      {
        "id": 81901,
        "kecamatan_id": 7004,
        "kelurahan": "Majener",
        "kd_pos": 98451
      },
      {
        "id": 81902,
        "kecamatan_id": 7004,
        "kelurahan": "Malaus",
        "kd_pos": 98451
      },
      {
        "id": 81903,
        "kecamatan_id": 7004,
        "kelurahan": "Matawolot",
        "kd_pos": 98451
      },
      {
        "id": 81904,
        "kecamatan_id": 7004,
        "kelurahan": "Rawa Sugi",
        "kd_pos": 98451
      },
      {
        "id": 81905,
        "kecamatan_id": 7004,
        "kelurahan": "Walal",
        "kd_pos": 98451
      },
      {
        "id": 81906,
        "kecamatan_id": 7005,
        "kelurahan": "Dulbatan",
        "kd_pos": 98452
      },
      {
        "id": 81907,
        "kecamatan_id": 7005,
        "kelurahan": "Duriankari",
        "kd_pos": 98452
      },
      {
        "id": 81908,
        "kecamatan_id": 7005,
        "kelurahan": "Katlol (Klotlof/Katlof)",
        "kd_pos": 98452
      },
      {
        "id": 81909,
        "kecamatan_id": 7005,
        "kelurahan": "Manoket",
        "kd_pos": 98452
      },
      {
        "id": 81910,
        "kecamatan_id": 7005,
        "kelurahan": "Maralol",
        "kd_pos": 98452
      },
      {
        "id": 81911,
        "kecamatan_id": 7005,
        "kelurahan": "Sailolof",
        "kd_pos": 98452
      },
      {
        "id": 81912,
        "kecamatan_id": 7005,
        "kelurahan": "Sakapul",
        "kd_pos": 98452
      },
      {
        "id": 81913,
        "kecamatan_id": 7005,
        "kelurahan": "Waliam",
        "kd_pos": 98452
      },
      {
        "id": 81914,
        "kecamatan_id": 7006,
        "kelurahan": "Batu Payung",
        "kd_pos": 98471
      },
      {
        "id": 81915,
        "kecamatan_id": 7006,
        "kelurahan": "Dasri",
        "kd_pos": 98471
      },
      {
        "id": 81916,
        "kecamatan_id": 7006,
        "kelurahan": "Klatin (Klatim)",
        "kd_pos": 98471
      },
      {
        "id": 81917,
        "kecamatan_id": 7006,
        "kelurahan": "Luwelala (Suwelala)",
        "kd_pos": 98471
      },
      {
        "id": 81918,
        "kecamatan_id": 7006,
        "kelurahan": "Maladofok",
        "kd_pos": 98471
      },
      {
        "id": 81919,
        "kecamatan_id": 7006,
        "kelurahan": "Sailala",
        "kd_pos": 98471
      },
      {
        "id": 81920,
        "kecamatan_id": 7006,
        "kelurahan": "Saluk",
        "kd_pos": 98471
      },
      {
        "id": 81921,
        "kecamatan_id": 7007,
        "kelurahan": "Kasim",
        "kd_pos": 98452
      },
      {
        "id": 81922,
        "kecamatan_id": 7007,
        "kelurahan": "Kasimle",
        "kd_pos": 98452
      },
      {
        "id": 81923,
        "kecamatan_id": 7007,
        "kelurahan": "Klayas",
        "kd_pos": 98452
      },
      {
        "id": 81924,
        "kecamatan_id": 7007,
        "kelurahan": "Malabam (Malaban)",
        "kd_pos": 98452
      },
      {
        "id": 81925,
        "kecamatan_id": 7007,
        "kelurahan": "Seget",
        "kd_pos": 98452
      },
      {
        "id": 81926,
        "kecamatan_id": 7007,
        "kelurahan": "Wajin",
        "kd_pos": 98452
      },
      {
        "id": 81927,
        "kecamatan_id": 7007,
        "kelurahan": "Wasingsan",
        "kd_pos": 98452
      },
      {
        "id": 81928,
        "kecamatan_id": 7007,
        "kelurahan": "Wayenkede",
        "kd_pos": 98452
      },
      {
        "id": 81929,
        "kecamatan_id": 7008,
        "kelurahan": "Gisim",
        "kd_pos": 98452
      },
      {
        "id": 81930,
        "kecamatan_id": 7008,
        "kelurahan": "Klasigon (Klasegun)",
        "kd_pos": 98452
      },
      {
        "id": 81931,
        "kecamatan_id": 7008,
        "kelurahan": "Majemau",
        "kd_pos": 98452
      },
      {
        "id": 81932,
        "kecamatan_id": 7008,
        "kelurahan": "Segun",
        "kd_pos": 98452
      },
      {
        "id": 81933,
        "kecamatan_id": 7008,
        "kelurahan": "Waimon",
        "kd_pos": 98452
      },
      {
        "id": 81934,
        "kecamatan_id": 7008,
        "kelurahan": "Wainlabat",
        "kd_pos": 98452
      },
      {
        "id": 81935,
        "kecamatan_id": 7009,
        "kelurahan": "Bemus",
        "kd_pos": 98456
      },
      {
        "id": 81936,
        "kecamatan_id": 7009,
        "kelurahan": "Pasir Putih",
        "kd_pos": 98456
      },
      {
        "id": 81937,
        "kecamatan_id": 7009,
        "kelurahan": "Wandum",
        "kd_pos": 98456
      },
      {
        "id": 81938,
        "kecamatan_id": 7009,
        "kelurahan": "Welek",
        "kd_pos": 98456
      },
      {
        "id": 81939,
        "kecamatan_id": 7010,
        "kelurahan": "Isogo",
        "kd_pos": 98455
      },
      {
        "id": 81940,
        "kecamatan_id": 7010,
        "kelurahan": "Mate",
        "kd_pos": 98455
      },
      {
        "id": 81941,
        "kecamatan_id": 7010,
        "kelurahan": "Mogibi",
        "kd_pos": 98455
      },
      {
        "id": 81942,
        "kecamatan_id": 7010,
        "kelurahan": "Odeare",
        "kd_pos": 98455
      },
      {
        "id": 81943,
        "kecamatan_id": 7010,
        "kelurahan": "Serkos",
        "kd_pos": 98455
      },
      {
        "id": 81944,
        "kecamatan_id": 7010,
        "kelurahan": "Sibae",
        "kd_pos": 98455
      },
      {
        "id": 81945,
        "kecamatan_id": 7010,
        "kelurahan": "Siri-siri",
        "kd_pos": 98455
      },
      {
        "id": 81946,
        "kecamatan_id": 7010,
        "kelurahan": "Solta Baru",
        "kd_pos": 98455
      },
      {
        "id": 81947,
        "kecamatan_id": 7010,
        "kelurahan": "Wadoi",
        "kd_pos": 98455
      },
      {
        "id": 81948,
        "kecamatan_id": 7011,
        "kelurahan": "Benawa I",
        "kd_pos": 98455
      },
      {
        "id": 81949,
        "kecamatan_id": 7011,
        "kelurahan": "Haemaran (Kurana)",
        "kd_pos": 98455
      },
      {
        "id": 81950,
        "kecamatan_id": 7011,
        "kelurahan": "Ikana",
        "kd_pos": 98455
      },
      {
        "id": 81951,
        "kecamatan_id": 7011,
        "kelurahan": "Kais",
        "kd_pos": 98455
      },
      {
        "id": 81952,
        "kecamatan_id": 7011,
        "kelurahan": "Makaroro",
        "kd_pos": 98455
      },
      {
        "id": 81953,
        "kecamatan_id": 7011,
        "kelurahan": "Mogotemin (Mogatemin)",
        "kd_pos": 98455
      },
      {
        "id": 81954,
        "kecamatan_id": 7011,
        "kelurahan": "Mukamat",
        "kd_pos": 98455
      },
      {
        "id": 81955,
        "kecamatan_id": 7011,
        "kelurahan": "Onimsefa",
        "kd_pos": 98455
      },
      {
        "id": 81956,
        "kecamatan_id": 7011,
        "kelurahan": "Siranggo",
        "kd_pos": 98455
      },
      {
        "id": 81957,
        "kecamatan_id": 7011,
        "kelurahan": "Sumano",
        "kd_pos": 98455
      },
      {
        "id": 81958,
        "kecamatan_id": 7011,
        "kelurahan": "Tapuri",
        "kd_pos": 98455
      },
      {
        "id": 81959,
        "kecamatan_id": 7011,
        "kelurahan": "Yahadian",
        "kd_pos": 98455
      },
      {
        "id": 81960,
        "kecamatan_id": 7012,
        "kelurahan": "Arbasina",
        "kd_pos": 98455
      },
      {
        "id": 81961,
        "kecamatan_id": 7012,
        "kelurahan": "Birawaku",
        "kd_pos": 98455
      },
      {
        "id": 81962,
        "kecamatan_id": 7012,
        "kelurahan": "Daimar",
        "kd_pos": 98455
      },
      {
        "id": 81963,
        "kecamatan_id": 7012,
        "kelurahan": "Daubak",
        "kd_pos": 98455
      },
      {
        "id": 81964,
        "kecamatan_id": 7012,
        "kelurahan": "Kasuweri",
        "kd_pos": 98455
      },
      {
        "id": 81965,
        "kecamatan_id": 7012,
        "kelurahan": "Korewatara",
        "kd_pos": 98455
      },
      {
        "id": 81966,
        "kecamatan_id": 7012,
        "kelurahan": "Migori",
        "kd_pos": 98455
      },
      {
        "id": 81967,
        "kecamatan_id": 7012,
        "kelurahan": "Migrito",
        "kd_pos": 98455
      },
      {
        "id": 81968,
        "kecamatan_id": 7012,
        "kelurahan": "Nayakore",
        "kd_pos": 98455
      },
      {
        "id": 81969,
        "kecamatan_id": 7012,
        "kelurahan": "Negeri Besar",
        "kd_pos": 98455
      },
      {
        "id": 81970,
        "kecamatan_id": 7012,
        "kelurahan": "Siwatori",
        "kd_pos": 98455
      },
      {
        "id": 81971,
        "kecamatan_id": 7012,
        "kelurahan": "Tambani",
        "kd_pos": 98455
      },
      {
        "id": 81972,
        "kecamatan_id": 7012,
        "kelurahan": "Tapas",
        "kd_pos": 98455
      },
      {
        "id": 81973,
        "kecamatan_id": 7012,
        "kelurahan": "Tarof",
        "kd_pos": 98455
      },
      {
        "id": 81974,
        "kecamatan_id": 7012,
        "kelurahan": "Topdan",
        "kd_pos": 98455
      },
      {
        "id": 81975,
        "kecamatan_id": 7012,
        "kelurahan": "Totona",
        "kd_pos": 98455
      },
      {
        "id": 81976,
        "kecamatan_id": 7013,
        "kelurahan": "Adona",
        "kd_pos": 98455
      },
      {
        "id": 81977,
        "kecamatan_id": 7013,
        "kelurahan": "Atori",
        "kd_pos": 98455
      },
      {
        "id": 81978,
        "kecamatan_id": 7013,
        "kelurahan": "Benawa II",
        "kd_pos": 98455
      },
      {
        "id": 81979,
        "kecamatan_id": 7013,
        "kelurahan": "Bubuko",
        "kd_pos": 98455
      },
      {
        "id": 81980,
        "kecamatan_id": 7013,
        "kelurahan": "Kamundan Dua",
        "kd_pos": 98455
      },
      {
        "id": 81981,
        "kecamatan_id": 7013,
        "kelurahan": "Kamundan Satu",
        "kd_pos": 98455
      },
      {
        "id": 81982,
        "kecamatan_id": 7013,
        "kelurahan": "Karirif",
        "kd_pos": 98455
      },
      {
        "id": 81983,
        "kecamatan_id": 7013,
        "kelurahan": "Kayubiro",
        "kd_pos": 98455
      },
      {
        "id": 81984,
        "kecamatan_id": 7013,
        "kelurahan": "Udagaga",
        "kd_pos": 98455
      },
      {
        "id": 81985,
        "kecamatan_id": 7014,
        "kelurahan": "Bariat",
        "kd_pos": 98454
      },
      {
        "id": 81986,
        "kecamatan_id": 7014,
        "kelurahan": "Konda",
        "kd_pos": 98454
      },
      {
        "id": 81987,
        "kecamatan_id": 7014,
        "kelurahan": "Manelek",
        "kd_pos": 98454
      },
      {
        "id": 81988,
        "kecamatan_id": 7014,
        "kelurahan": "Nagna",
        "kd_pos": 98454
      },
      {
        "id": 81989,
        "kecamatan_id": 7014,
        "kelurahan": "Wamargege",
        "kd_pos": 98454
      },
      {
        "id": 81990,
        "kecamatan_id": 7015,
        "kelurahan": "Bedare",
        "kd_pos": 98455
      },
      {
        "id": 81991,
        "kecamatan_id": 7015,
        "kelurahan": "Mugim",
        "kd_pos": 98455
      },
      {
        "id": 81992,
        "kecamatan_id": 7015,
        "kelurahan": "Nusa",
        "kd_pos": 98455
      },
      {
        "id": 81993,
        "kecamatan_id": 7015,
        "kelurahan": "Puragi",
        "kd_pos": 98455
      },
      {
        "id": 81994,
        "kecamatan_id": 7015,
        "kelurahan": "Saga",
        "kd_pos": 98455
      },
      {
        "id": 81995,
        "kecamatan_id": 7015,
        "kelurahan": "Tawanggire",
        "kd_pos": 98455
      },
      {
        "id": 81996,
        "kecamatan_id": 7016,
        "kelurahan": "Bumi Ajo",
        "kd_pos": 98454
      },
      {
        "id": 81997,
        "kecamatan_id": 7016,
        "kelurahan": "Hararo",
        "kd_pos": 98454
      },
      {
        "id": 81998,
        "kecamatan_id": 7016,
        "kelurahan": "Hasik Jaya",
        "kd_pos": 98454
      },
      {
        "id": 81999,
        "kecamatan_id": 7016,
        "kelurahan": "Joshiro",
        "kd_pos": 98454
      },
      {
        "id": 82000,
        "kecamatan_id": 7016,
        "kelurahan": "Kamisabe",
        "kd_pos": 98454
      },
      {
        "id": 82001,
        "kecamatan_id": 7016,
        "kelurahan": "Moswaren",
        "kd_pos": 98454
      },
      {
        "id": 82002,
        "kecamatan_id": 7016,
        "kelurahan": "Tokass",
        "kd_pos": 98454
      },
      {
        "id": 82003,
        "kecamatan_id": 7017,
        "kelurahan": "Botain",
        "kd_pos": 98454
      },
      {
        "id": 82004,
        "kecamatan_id": 7017,
        "kelurahan": "Kayabo",
        "kd_pos": 98454
      },
      {
        "id": 82005,
        "kecamatan_id": 7017,
        "kelurahan": "Kenaya",
        "kd_pos": 98454
      },
      {
        "id": 82006,
        "kecamatan_id": 7017,
        "kelurahan": "Komanggaret",
        "kd_pos": 98454
      },
      {
        "id": 82007,
        "kecamatan_id": 7017,
        "kelurahan": "Kwowok",
        "kd_pos": 98454
      },
      {
        "id": 82008,
        "kecamatan_id": 7017,
        "kelurahan": "Manggroholo",
        "kd_pos": 98454
      },
      {
        "id": 82009,
        "kecamatan_id": 7017,
        "kelurahan": "Mlaswat",
        "kd_pos": 98454
      },
      {
        "id": 82010,
        "kecamatan_id": 7017,
        "kelurahan": "Sayal",
        "kd_pos": 98454
      },
      {
        "id": 82011,
        "kecamatan_id": 7017,
        "kelurahan": "Sira",
        "kd_pos": 98454
      },
      {
        "id": 82012,
        "kecamatan_id": 7017,
        "kelurahan": "Sisir",
        "kd_pos": 98454
      },
      {
        "id": 82013,
        "kecamatan_id": 7018,
        "kelurahan": "Alma",
        "kd_pos": 98456
      },
      {
        "id": 82014,
        "kecamatan_id": 7018,
        "kelurahan": "Elles",
        "kd_pos": 98456
      },
      {
        "id": 82015,
        "kecamatan_id": 7018,
        "kelurahan": "Klamit",
        "kd_pos": 98456
      },
      {
        "id": 82016,
        "kecamatan_id": 7018,
        "kelurahan": "Kofalit",
        "kd_pos": 98456
      },
      {
        "id": 82017,
        "kecamatan_id": 7018,
        "kelurahan": "Mlabolo",
        "kd_pos": 98456
      },
      {
        "id": 82018,
        "kecamatan_id": 7018,
        "kelurahan": "Sasnek",
        "kd_pos": 98456
      },
      {
        "id": 82019,
        "kecamatan_id": 7018,
        "kelurahan": "Sawiat",
        "kd_pos": 98456
      },
      {
        "id": 82020,
        "kecamatan_id": 7018,
        "kelurahan": "Sfakyo",
        "kd_pos": 98456
      },
      {
        "id": 82021,
        "kecamatan_id": 7018,
        "kelurahan": "Sodrofoyo",
        "kd_pos": 98456
      },
      {
        "id": 82022,
        "kecamatan_id": 7018,
        "kelurahan": "Ween",
        "kd_pos": 98456
      },
      {
        "id": 82023,
        "kecamatan_id": 7018,
        "kelurahan": "Wendi",
        "kd_pos": 98456
      },
      {
        "id": 82024,
        "kecamatan_id": 7018,
        "kelurahan": "Wenslolo",
        "kd_pos": 98456
      },
      {
        "id": 82025,
        "kecamatan_id": 7018,
        "kelurahan": "Wensough",
        "kd_pos": 98456
      },
      {
        "id": 82026,
        "kecamatan_id": 7019,
        "kelurahan": "Haha",
        "kd_pos": 98454
      },
      {
        "id": 82027,
        "kecamatan_id": 7019,
        "kelurahan": "Kakas",
        "kd_pos": 98454
      },
      {
        "id": 82028,
        "kecamatan_id": 7019,
        "kelurahan": "Kamaro",
        "kd_pos": 98454
      },
      {
        "id": 82029,
        "kecamatan_id": 7019,
        "kelurahan": "Klaogin",
        "kd_pos": 98454
      },
      {
        "id": 82030,
        "kecamatan_id": 7019,
        "kelurahan": "Sbir",
        "kd_pos": 98454
      },
      {
        "id": 82031,
        "kecamatan_id": 7019,
        "kelurahan": "Srer",
        "kd_pos": 98454
      },
      {
        "id": 82032,
        "kecamatan_id": 7019,
        "kelurahan": "Tofot",
        "kd_pos": 98454
      },
      {
        "id": 82033,
        "kecamatan_id": 7019,
        "kelurahan": "Woloin",
        "kd_pos": 98454
      },
      {
        "id": 82034,
        "kecamatan_id": 7020,
        "kelurahan": "Aibobor",
        "kd_pos": 98454
      },
      {
        "id": 82035,
        "kecamatan_id": 7020,
        "kelurahan": "Ani Sesna",
        "kd_pos": 98454
      },
      {
        "id": 82036,
        "kecamatan_id": 7020,
        "kelurahan": "Gorolo",
        "kd_pos": 98454
      },
      {
        "id": 82037,
        "kecamatan_id": 7020,
        "kelurahan": "Kaibus",
        "kd_pos": 98454
      },
      {
        "id": 82038,
        "kecamatan_id": 7020,
        "kelurahan": "Keyen",
        "kd_pos": 98454
      },
      {
        "id": 82039,
        "kecamatan_id": 7020,
        "kelurahan": "Kohoin",
        "kd_pos": 98454
      },
      {
        "id": 82040,
        "kecamatan_id": 7020,
        "kelurahan": "Magis",
        "kd_pos": 98454
      },
      {
        "id": 82041,
        "kecamatan_id": 7020,
        "kelurahan": "Nambro",
        "kd_pos": 98454
      },
      {
        "id": 82042,
        "kecamatan_id": 7020,
        "kelurahan": "Seyolo",
        "kd_pos": 98454
      },
      {
        "id": 82043,
        "kecamatan_id": 7020,
        "kelurahan": "Siribau",
        "kd_pos": 98454
      },
      {
        "id": 82044,
        "kecamatan_id": 7020,
        "kelurahan": "Tapiri",
        "kd_pos": 98454
      },
      {
        "id": 82045,
        "kecamatan_id": 7020,
        "kelurahan": "Tegirolo",
        "kd_pos": 98454
      },
      {
        "id": 82046,
        "kecamatan_id": 7020,
        "kelurahan": "Wehali",
        "kd_pos": 98454
      },
      {
        "id": 82047,
        "kecamatan_id": 7020,
        "kelurahan": "Wermit",
        "kd_pos": 98454
      },
      {
        "id": 82048,
        "kecamatan_id": 7020,
        "kelurahan": "Wernas",
        "kd_pos": 98454
      },
      {
        "id": 82049,
        "kecamatan_id": 7020,
        "kelurahan": "Wersar",
        "kd_pos": 98454
      },
      {
        "id": 82050,
        "kecamatan_id": 7021,
        "kelurahan": "Bagraga (Bagaraga)",
        "kd_pos": 98454
      },
      {
        "id": 82051,
        "kecamatan_id": 7021,
        "kelurahan": "Baldon (Boldon)",
        "kd_pos": 98454
      },
      {
        "id": 82052,
        "kecamatan_id": 7021,
        "kelurahan": "Sesor",
        "kd_pos": 98454
      },
      {
        "id": 82053,
        "kecamatan_id": 7021,
        "kelurahan": "Sungguer",
        "kd_pos": 98454
      },
      {
        "id": 82054,
        "kecamatan_id": 7021,
        "kelurahan": "Ungi (unggi)",
        "kd_pos": 98454
      },
      {
        "id": 82055,
        "kecamatan_id": 7021,
        "kelurahan": "Waigo",
        "kd_pos": 98454
      },
      {
        "id": 82056,
        "kecamatan_id": 7021,
        "kelurahan": "Wardik",
        "kd_pos": 98454
      },
      {
        "id": 82057,
        "kecamatan_id": 7021,
        "kelurahan": "Wayer",
        "kd_pos": 98454
      },
      {
        "id": 82058,
        "kecamatan_id": 7022,
        "kelurahan": "Saubeba",
        "kd_pos": 98473
      },
      {
        "id": 82059,
        "kecamatan_id": 7022,
        "kelurahan": "Waibem",
        "kd_pos": 98473
      },
      {
        "id": 82060,
        "kecamatan_id": 7022,
        "kelurahan": "Warmandi",
        "kd_pos": 98473
      },
      {
        "id": 82061,
        "kecamatan_id": 7022,
        "kelurahan": "Wau",
        "kd_pos": 98473
      },
      {
        "id": 82062,
        "kecamatan_id": 7022,
        "kelurahan": "Weprari",
        "kd_pos": 98473
      },
      {
        "id": 82063,
        "kecamatan_id": 7022,
        "kelurahan": "Weyaf",
        "kd_pos": 98473
      },
      {
        "id": 82064,
        "kecamatan_id": 7023,
        "kelurahan": "Binasi",
        "kd_pos": 98371
      },
      {
        "id": 82065,
        "kecamatan_id": 7023,
        "kelurahan": "Binmaks",
        "kd_pos": 98371
      },
      {
        "id": 82066,
        "kecamatan_id": 7023,
        "kelurahan": "Kabibwan",
        "kd_pos": 98371
      },
      {
        "id": 82067,
        "kecamatan_id": 7023,
        "kelurahan": "Manggapnut",
        "kd_pos": 98371
      },
      {
        "id": 82068,
        "kecamatan_id": 7023,
        "kelurahan": "Saukorem",
        "kd_pos": 98371
      },
      {
        "id": 82069,
        "kecamatan_id": 7023,
        "kelurahan": "Serayo",
        "kd_pos": 98371
      },
      {
        "id": 82070,
        "kecamatan_id": 7023,
        "kelurahan": "Waramui",
        "kd_pos": 98371
      },
      {
        "id": 82071,
        "kecamatan_id": 7023,
        "kelurahan": "Wasarak",
        "kd_pos": 98371
      },
      {
        "id": 82072,
        "kecamatan_id": 7023,
        "kelurahan": "Wefani",
        "kd_pos": 98371
      },
      {
        "id": 82073,
        "kecamatan_id": 7023,
        "kelurahan": "Wekari",
        "kd_pos": 98371
      },
      {
        "id": 82074,
        "kecamatan_id": 7024,
        "kelurahan": "Bondopi",
        "kd_pos": 98371
      },
      {
        "id": 82075,
        "kecamatan_id": 7024,
        "kelurahan": "Manggaew",
        "kd_pos": 98371
      },
      {
        "id": 82076,
        "kecamatan_id": 7024,
        "kelurahan": "Sasui",
        "kd_pos": 98371
      },
      {
        "id": 82077,
        "kecamatan_id": 7024,
        "kelurahan": "Saurabon",
        "kd_pos": 98371
      },
      {
        "id": 82078,
        "kecamatan_id": 7024,
        "kelurahan": "Wasawmontem",
        "kd_pos": 98371
      },
      {
        "id": 82079,
        "kecamatan_id": 7025,
        "kelurahan": "Ases",
        "kd_pos": 98473
      },
      {
        "id": 82080,
        "kecamatan_id": 7025,
        "kelurahan": "Asuon",
        "kd_pos": 98473
      },
      {
        "id": 82081,
        "kecamatan_id": 7025,
        "kelurahan": "Frasayoah",
        "kd_pos": 98473
      },
      {
        "id": 82082,
        "kecamatan_id": 7025,
        "kelurahan": "Safoetiek",
        "kd_pos": 98473
      },
      {
        "id": 82083,
        "kecamatan_id": 7026,
        "kelurahan": "Babak",
        "kd_pos": 98474
      },
      {
        "id": 82084,
        "kecamatan_id": 7026,
        "kelurahan": "Bamusbama",
        "kd_pos": 98474
      },
      {
        "id": 82085,
        "kecamatan_id": 7026,
        "kelurahan": "Bamuswaiman",
        "kd_pos": 98474
      },
      {
        "id": 82086,
        "kecamatan_id": 7026,
        "kelurahan": "Bano",
        "kd_pos": 98474
      },
      {
        "id": 82087,
        "kecamatan_id": 7026,
        "kelurahan": "Metbesa",
        "kd_pos": 98474
      },
      {
        "id": 82088,
        "kecamatan_id": 7026,
        "kelurahan": "Syarwom",
        "kd_pos": 98474
      },
      {
        "id": 82089,
        "kecamatan_id": 7027,
        "kelurahan": "Bikar",
        "kd_pos": 98473
      },
      {
        "id": 82090,
        "kecamatan_id": 7027,
        "kelurahan": "Bukit",
        "kd_pos": 98473
      },
      {
        "id": 82091,
        "kecamatan_id": 7027,
        "kelurahan": "Nombrak",
        "kd_pos": 98473
      },
      {
        "id": 82092,
        "kecamatan_id": 7027,
        "kelurahan": "Suyam",
        "kd_pos": 98473
      },
      {
        "id": 82093,
        "kecamatan_id": 7027,
        "kelurahan": "Syunai",
        "kd_pos": 98473
      },
      {
        "id": 82094,
        "kecamatan_id": 7027,
        "kelurahan": "Werbes",
        "kd_pos": 98473
      },
      {
        "id": 82095,
        "kecamatan_id": 7027,
        "kelurahan": "Wertam",
        "kd_pos": 98473
      },
      {
        "id": 82096,
        "kecamatan_id": 7027,
        "kelurahan": "Werur",
        "kd_pos": 98473
      },
      {
        "id": 82097,
        "kecamatan_id": 7027,
        "kelurahan": "Werwaf",
        "kd_pos": 98473
      },
      {
        "id": 82098,
        "kecamatan_id": 7028,
        "kelurahan": "Banfot",
        "kd_pos": 98473
      },
      {
        "id": 82099,
        "kecamatan_id": 7028,
        "kelurahan": "Esyum",
        "kd_pos": 98473
      },
      {
        "id": 82100,
        "kecamatan_id": 7028,
        "kelurahan": "Fef",
        "kd_pos": 98473
      },
      {
        "id": 82101,
        "kecamatan_id": 7028,
        "kelurahan": "Ibe",
        "kd_pos": 98473
      },
      {
        "id": 82102,
        "kecamatan_id": 7028,
        "kelurahan": "Imor",
        "kd_pos": 98473
      },
      {
        "id": 82103,
        "kecamatan_id": 7028,
        "kelurahan": "Iwin",
        "kd_pos": 98473
      },
      {
        "id": 82104,
        "kecamatan_id": 7028,
        "kelurahan": "Sikor",
        "kd_pos": 98473
      },
      {
        "id": 82105,
        "kecamatan_id": 7028,
        "kelurahan": "Syubun",
        "kd_pos": 98473
      },
      {
        "id": 82106,
        "kecamatan_id": 7028,
        "kelurahan": "Syunam",
        "kd_pos": 98473
      },
      {
        "id": 82107,
        "kecamatan_id": 7028,
        "kelurahan": "Wayo",
        "kd_pos": 98473
      },
      {
        "id": 82108,
        "kecamatan_id": 7029,
        "kelurahan": "Aifamas",
        "kd_pos": 98473
      },
      {
        "id": 82109,
        "kecamatan_id": 7029,
        "kelurahan": "Atafrumek",
        "kd_pos": 98473
      },
      {
        "id": 82110,
        "kecamatan_id": 7029,
        "kelurahan": "Ifiam",
        "kd_pos": 98473
      },
      {
        "id": 82111,
        "kecamatan_id": 7029,
        "kelurahan": "Meinad",
        "kd_pos": 98473
      },
      {
        "id": 82112,
        "kecamatan_id": 7029,
        "kelurahan": "Meis",
        "kd_pos": 98473
      },
      {
        "id": 82113,
        "kecamatan_id": 7029,
        "kelurahan": "Miri",
        "kd_pos": 98473
      },
      {
        "id": 82114,
        "kecamatan_id": 7030,
        "kelurahan": "Irumfei",
        "kd_pos": 98371
      },
      {
        "id": 82115,
        "kecamatan_id": 7030,
        "kelurahan": "Kasi Baru",
        "kd_pos": 98371
      },
      {
        "id": 82116,
        "kecamatan_id": 7030,
        "kelurahan": "Kasi Indah",
        "kd_pos": 98371
      },
      {
        "id": 82117,
        "kecamatan_id": 7030,
        "kelurahan": "Kasi Jaya",
        "kd_pos": 98371
      },
      {
        "id": 82118,
        "kecamatan_id": 7030,
        "kelurahan": "Meimorufof",
        "kd_pos": 98371
      },
      {
        "id": 82119,
        "kecamatan_id": 7030,
        "kelurahan": "Meserikweda",
        "kd_pos": 98371
      },
      {
        "id": 82120,
        "kecamatan_id": 7030,
        "kelurahan": "Wacam",
        "kd_pos": 98371
      },
      {
        "id": 82121,
        "kecamatan_id": 7031,
        "kelurahan": "Anarum",
        "kd_pos": 98372
      },
      {
        "id": 82122,
        "kecamatan_id": 7031,
        "kelurahan": "Apoki",
        "kd_pos": 98372
      },
      {
        "id": 82123,
        "kecamatan_id": 7031,
        "kelurahan": "Injai",
        "kd_pos": 98372
      },
      {
        "id": 82124,
        "kecamatan_id": 7031,
        "kelurahan": "Jafai",
        "kd_pos": 98372
      },
      {
        "id": 82125,
        "kecamatan_id": 7031,
        "kelurahan": "Jambuani",
        "kd_pos": 98372
      },
      {
        "id": 82126,
        "kecamatan_id": 7031,
        "kelurahan": "Manaria",
        "kd_pos": 98372
      },
      {
        "id": 82127,
        "kecamatan_id": 7031,
        "kelurahan": "Matatun",
        "kd_pos": 98372
      },
      {
        "id": 82128,
        "kecamatan_id": 7031,
        "kelurahan": "Meiwar",
        "kd_pos": 98372
      },
      {
        "id": 82129,
        "kecamatan_id": 7031,
        "kelurahan": "Pubuan",
        "kd_pos": 98372
      },
      {
        "id": 82130,
        "kecamatan_id": 7031,
        "kelurahan": "Wabanek",
        "kd_pos": 98372
      },
      {
        "id": 82131,
        "kecamatan_id": 7031,
        "kelurahan": "Wasanggon",
        "kd_pos": 98372
      },
      {
        "id": 82132,
        "kecamatan_id": 7032,
        "kelurahan": "Ajami",
        "kd_pos": 98372
      },
      {
        "id": 82133,
        "kecamatan_id": 7032,
        "kelurahan": "Akari",
        "kd_pos": 98372
      },
      {
        "id": 82134,
        "kecamatan_id": 7032,
        "kelurahan": "Amnan",
        "kd_pos": 98372
      },
      {
        "id": 82135,
        "kecamatan_id": 7032,
        "kelurahan": "Aniti",
        "kd_pos": 98372
      },
      {
        "id": 82136,
        "kecamatan_id": 7032,
        "kelurahan": "Aritowi",
        "kd_pos": 98372
      },
      {
        "id": 82137,
        "kecamatan_id": 7032,
        "kelurahan": "Arwani",
        "kd_pos": 98372
      },
      {
        "id": 82138,
        "kecamatan_id": 7032,
        "kelurahan": "Atiki",
        "kd_pos": 98372
      },
      {
        "id": 82139,
        "kecamatan_id": 7032,
        "kelurahan": "Nekori",
        "kd_pos": 98372
      },
      {
        "id": 82140,
        "kecamatan_id": 7032,
        "kelurahan": "Umpay",
        "kd_pos": 98372
      },
      {
        "id": 82141,
        "kecamatan_id": 7033,
        "kelurahan": "Arampak",
        "kd_pos": 98372
      },
      {
        "id": 82142,
        "kecamatan_id": 7033,
        "kelurahan": "Arumi",
        "kd_pos": 98372
      },
      {
        "id": 82143,
        "kecamatan_id": 7033,
        "kelurahan": "Inam",
        "kd_pos": 98372
      },
      {
        "id": 82144,
        "kecamatan_id": 7033,
        "kelurahan": "Inambuari",
        "kd_pos": 98372
      },
      {
        "id": 82145,
        "kecamatan_id": 7033,
        "kelurahan": "Ireji",
        "kd_pos": 98372
      },
      {
        "id": 82146,
        "kecamatan_id": 7033,
        "kelurahan": "Jandurauw",
        "kd_pos": 98372
      },
      {
        "id": 82147,
        "kecamatan_id": 7033,
        "kelurahan": "Karawi",
        "kd_pos": 98372
      },
      {
        "id": 82148,
        "kecamatan_id": 7033,
        "kelurahan": "Kasi Inom",
        "kd_pos": 98372
      },
      {
        "id": 82149,
        "kecamatan_id": 7033,
        "kelurahan": "Meycocforga",
        "kd_pos": 98372
      },
      {
        "id": 82150,
        "kecamatan_id": 7033,
        "kelurahan": "Nabisai",
        "kd_pos": 98372
      },
      {
        "id": 82151,
        "kecamatan_id": 7033,
        "kelurahan": "Sitori",
        "kd_pos": 98372
      },
      {
        "id": 82152,
        "kecamatan_id": 7033,
        "kelurahan": "Untorey",
        "kd_pos": 98372
      },
      {
        "id": 82153,
        "kecamatan_id": 7033,
        "kelurahan": "Wasabiti",
        "kd_pos": 98372
      },
      {
        "id": 82154,
        "kecamatan_id": 7034,
        "kelurahan": "Bao",
        "kd_pos": 98473
      },
      {
        "id": 82155,
        "kecamatan_id": 7034,
        "kelurahan": "Batdey",
        "kd_pos": 98473
      },
      {
        "id": 82156,
        "kecamatan_id": 7034,
        "kelurahan": "Jokbujoker",
        "kd_pos": 98473
      },
      {
        "id": 82157,
        "kecamatan_id": 7034,
        "kelurahan": "Kranfotsu",
        "kd_pos": 98473
      },
      {
        "id": 82158,
        "kecamatan_id": 7034,
        "kelurahan": "Kwesefo",
        "kd_pos": 98473
      },
      {
        "id": 82159,
        "kecamatan_id": 7034,
        "kelurahan": "Syuau",
        "kd_pos": 98473
      },
      {
        "id": 82160,
        "kecamatan_id": 7034,
        "kelurahan": "Syumbi",
        "kd_pos": 98473
      },
      {
        "id": 82161,
        "kecamatan_id": 7035,
        "kelurahan": "Barar",
        "kd_pos": 98473
      },
      {
        "id": 82162,
        "kecamatan_id": 7035,
        "kelurahan": "Esmambo",
        "kd_pos": 98473
      },
      {
        "id": 82163,
        "kecamatan_id": 7035,
        "kelurahan": "Hopmare",
        "kd_pos": 98473
      },
      {
        "id": 82164,
        "kecamatan_id": 7035,
        "kelurahan": "Kwoor",
        "kd_pos": 98473
      },
      {
        "id": 82165,
        "kecamatan_id": 7035,
        "kelurahan": "Orwen",
        "kd_pos": 98473
      },
      {
        "id": 82166,
        "kecamatan_id": 7035,
        "kelurahan": "Sunggak",
        "kd_pos": 98473
      },
      {
        "id": 82167,
        "kecamatan_id": 7036,
        "kelurahan": "Ajami Waripi",
        "kd_pos": 98372
      },
      {
        "id": 82168,
        "kecamatan_id": 7036,
        "kelurahan": "Akmuri",
        "kd_pos": 98372
      },
      {
        "id": 82169,
        "kecamatan_id": 7036,
        "kelurahan": "Aneti",
        "kd_pos": 98372
      },
      {
        "id": 82170,
        "kecamatan_id": 7036,
        "kelurahan": "Aranari",
        "kd_pos": 98372
      },
      {
        "id": 82171,
        "kecamatan_id": 7036,
        "kelurahan": "Ata",
        "kd_pos": 98372
      },
      {
        "id": 82172,
        "kecamatan_id": 7036,
        "kelurahan": "Atunari",
        "kd_pos": 98372
      },
      {
        "id": 82173,
        "kecamatan_id": 7036,
        "kelurahan": "Awori",
        "kd_pos": 98372
      },
      {
        "id": 82174,
        "kecamatan_id": 7036,
        "kelurahan": "Itafiti",
        "kd_pos": 98372
      },
      {
        "id": 82175,
        "kecamatan_id": 7036,
        "kelurahan": "Narai",
        "kd_pos": 98372
      },
      {
        "id": 82176,
        "kecamatan_id": 7036,
        "kelurahan": "Waumi",
        "kd_pos": 98372
      },
      {
        "id": 82177,
        "kecamatan_id": 7037,
        "kelurahan": "Afrawi",
        "kd_pos": 98372
      },
      {
        "id": 82178,
        "kecamatan_id": 7037,
        "kelurahan": "Ajokwapi",
        "kd_pos": 98372
      },
      {
        "id": 82179,
        "kecamatan_id": 7037,
        "kelurahan": "Asiti",
        "kd_pos": 98372
      },
      {
        "id": 82180,
        "kecamatan_id": 7037,
        "kelurahan": "Bisaud",
        "kd_pos": 98372
      },
      {
        "id": 82181,
        "kecamatan_id": 7037,
        "kelurahan": "Nisandauw",
        "kd_pos": 98372
      },
      {
        "id": 82182,
        "kecamatan_id": 7037,
        "kelurahan": "Wausin",
        "kd_pos": 98372
      },
      {
        "id": 82183,
        "kecamatan_id": 7037,
        "kelurahan": "Wufmana",
        "kd_pos": 98372
      },
      {
        "id": 82184,
        "kecamatan_id": 7038,
        "kelurahan": "Aibogia",
        "kd_pos": 98473
      },
      {
        "id": 82185,
        "kecamatan_id": 7038,
        "kelurahan": "Aifair",
        "kd_pos": 98473
      },
      {
        "id": 82186,
        "kecamatan_id": 7038,
        "kelurahan": "Ayae",
        "kd_pos": 98473
      },
      {
        "id": 82187,
        "kecamatan_id": 7038,
        "kelurahan": "Ayawit",
        "kd_pos": 98473
      },
      {
        "id": 82188,
        "kecamatan_id": 7038,
        "kelurahan": "Hobiah",
        "kd_pos": 98473
      },
      {
        "id": 82189,
        "kecamatan_id": 7038,
        "kelurahan": "Ruvewes",
        "kd_pos": 98473
      },
      {
        "id": 82190,
        "kecamatan_id": 7038,
        "kelurahan": "Siakwa",
        "kd_pos": 98473
      },
      {
        "id": 82191,
        "kecamatan_id": 7038,
        "kelurahan": "Yabuow",
        "kd_pos": 98473
      },
      {
        "id": 82192,
        "kecamatan_id": 7039,
        "kelurahan": "Ayamane",
        "kd_pos": 98473
      },
      {
        "id": 82193,
        "kecamatan_id": 7039,
        "kelurahan": "Hewi",
        "kd_pos": 98473
      },
      {
        "id": 82194,
        "kecamatan_id": 7039,
        "kelurahan": "Mawor",
        "kd_pos": 98473
      },
      {
        "id": 82195,
        "kecamatan_id": 7039,
        "kelurahan": "Ruf",
        "kd_pos": 98473
      },
      {
        "id": 82196,
        "kecamatan_id": 7039,
        "kelurahan": "Sahae",
        "kd_pos": 98473
      },
      {
        "id": 82197,
        "kecamatan_id": 7039,
        "kelurahan": "Whismer",
        "kd_pos": 98473
      },
      {
        "id": 82198,
        "kecamatan_id": 7040,
        "kelurahan": "Bonem",
        "kd_pos": 98472
      },
      {
        "id": 82199,
        "kecamatan_id": 7040,
        "kelurahan": "Kwade",
        "kd_pos": 98472
      },
      {
        "id": 82200,
        "kecamatan_id": 7040,
        "kelurahan": "Malaworsai",
        "kd_pos": 98472
      },
      {
        "id": 82201,
        "kecamatan_id": 7040,
        "kelurahan": "Mega",
        "kd_pos": 98472
      },
      {
        "id": 82202,
        "kecamatan_id": 7040,
        "kelurahan": "Namuas",
        "kd_pos": 98472
      },
      {
        "id": 82203,
        "kecamatan_id": 7040,
        "kelurahan": "Selewok",
        "kd_pos": 98472
      },
      {
        "id": 82204,
        "kecamatan_id": 7040,
        "kelurahan": "Warafor",
        "kd_pos": 98472
      },
      {
        "id": 82205,
        "kecamatan_id": 7040,
        "kelurahan": "Warmanen",
        "kd_pos": 98472
      },
      {
        "id": 82206,
        "kecamatan_id": 7040,
        "kelurahan": "Warmasi",
        "kd_pos": 98472
      },
      {
        "id": 82207,
        "kecamatan_id": 7041,
        "kelurahan": "Arupi",
        "kd_pos": 98371
      },
      {
        "id": 82208,
        "kecamatan_id": 7041,
        "kelurahan": "Kali An",
        "kd_pos": 98371
      },
      {
        "id": 82209,
        "kecamatan_id": 7041,
        "kelurahan": "Mangganek",
        "kd_pos": 98371
      },
      {
        "id": 82210,
        "kecamatan_id": 7041,
        "kelurahan": "Wajarek",
        "kd_pos": 98371
      },
      {
        "id": 82211,
        "kecamatan_id": 7041,
        "kelurahan": "Warpaperi",
        "kd_pos": 98371
      },
      {
        "id": 82212,
        "kecamatan_id": 7042,
        "kelurahan": "Arekon",
        "kd_pos": 98371
      },
      {
        "id": 82213,
        "kecamatan_id": 7042,
        "kelurahan": "Arfu",
        "kd_pos": 98371
      },
      {
        "id": 82214,
        "kecamatan_id": 7042,
        "kelurahan": "Atori",
        "kd_pos": 98371
      },
      {
        "id": 82215,
        "kecamatan_id": 7042,
        "kelurahan": "Bawey",
        "kd_pos": 98371
      },
      {
        "id": 82216,
        "kecamatan_id": 7042,
        "kelurahan": "Bijamfou",
        "kd_pos": 98371
      },
      {
        "id": 82217,
        "kecamatan_id": 7042,
        "kelurahan": "Bonpaya",
        "kd_pos": 98371
      },
      {
        "id": 82218,
        "kecamatan_id": 7042,
        "kelurahan": "Marbuan",
        "kd_pos": 98371
      },
      {
        "id": 82219,
        "kecamatan_id": 7042,
        "kelurahan": "Meriambeker",
        "kd_pos": 98371
      },
      {
        "id": 82220,
        "kecamatan_id": 7042,
        "kelurahan": "Warokon",
        "kd_pos": 98371
      },
      {
        "id": 82221,
        "kecamatan_id": 7042,
        "kelurahan": "Waru",
        "kd_pos": 98371
      },
      {
        "id": 82222,
        "kecamatan_id": 7042,
        "kelurahan": "Wasnembri",
        "kd_pos": 98371
      },
      {
        "id": 82223,
        "kecamatan_id": 7043,
        "kelurahan": "Bondek",
        "kd_pos": 98473
      },
      {
        "id": 82224,
        "kecamatan_id": 7043,
        "kelurahan": "Bondonggwan",
        "kd_pos": 98473
      },
      {
        "id": 82225,
        "kecamatan_id": 7043,
        "kelurahan": "Emaos",
        "kd_pos": 98473
      },
      {
        "id": 82226,
        "kecamatan_id": 7043,
        "kelurahan": "Jokte",
        "kd_pos": 98473
      },
      {
        "id": 82227,
        "kecamatan_id": 7043,
        "kelurahan": "Nanggou",
        "kd_pos": 98473
      },
      {
        "id": 82228,
        "kecamatan_id": 7043,
        "kelurahan": "Sau Uram",
        "kd_pos": 98473
      },
      {
        "id": 82229,
        "kecamatan_id": 7043,
        "kelurahan": "Sausapor",
        "kd_pos": 98473
      },
      {
        "id": 82230,
        "kecamatan_id": 7043,
        "kelurahan": "Sungguwan",
        "kd_pos": 98473
      },
      {
        "id": 82231,
        "kecamatan_id": 7043,
        "kelurahan": "Syurauw",
        "kd_pos": 98473
      },
      {
        "id": 82232,
        "kecamatan_id": 7043,
        "kelurahan": "Uigwem",
        "kd_pos": 98473
      },
      {
        "id": 82233,
        "kecamatan_id": 7044,
        "kelurahan": "Dela",
        "kd_pos": 98472
      },
      {
        "id": 82234,
        "kecamatan_id": 7044,
        "kelurahan": "Kaladum",
        "kd_pos": 98472
      },
      {
        "id": 82235,
        "kecamatan_id": 7044,
        "kelurahan": "Klabili",
        "kd_pos": 98472
      },
      {
        "id": 82236,
        "kecamatan_id": 7044,
        "kelurahan": "Klasei",
        "kd_pos": 98472
      },
      {
        "id": 82237,
        "kecamatan_id": 7044,
        "kelurahan": "Megame",
        "kd_pos": 98472
      },
      {
        "id": 82238,
        "kecamatan_id": 7045,
        "kelurahan": "Arapi",
        "kd_pos": 98372
      },
      {
        "id": 82239,
        "kecamatan_id": 7045,
        "kelurahan": "Ifat Mitu",
        "kd_pos": 98372
      },
      {
        "id": 82240,
        "kecamatan_id": 7045,
        "kelurahan": "Povokek Ania",
        "kd_pos": 98372
      },
      {
        "id": 82241,
        "kecamatan_id": 7045,
        "kelurahan": "Senopi",
        "kd_pos": 98372
      },
      {
        "id": 82242,
        "kecamatan_id": 7045,
        "kelurahan": "Srurem",
        "kd_pos": 98372
      },
      {
        "id": 82243,
        "kecamatan_id": 7045,
        "kelurahan": "Sumo",
        "kd_pos": 98372
      },
      {
        "id": 82244,
        "kecamatan_id": 7045,
        "kelurahan": "Thomas",
        "kd_pos": 98372
      },
      {
        "id": 82245,
        "kecamatan_id": 7046,
        "kelurahan": "Banso",
        "kd_pos": 98473
      },
      {
        "id": 82246,
        "kecamatan_id": 7046,
        "kelurahan": "Frafane",
        "kd_pos": 98473
      },
      {
        "id": 82247,
        "kecamatan_id": 7046,
        "kelurahan": "Iof",
        "kd_pos": 98473
      },
      {
        "id": 82248,
        "kecamatan_id": 7046,
        "kelurahan": "Syujak",
        "kd_pos": 98473
      },
      {
        "id": 82249,
        "kecamatan_id": 7046,
        "kelurahan": "Womon",
        "kd_pos": 98473
      },
      {
        "id": 82250,
        "kecamatan_id": 7047,
        "kelurahan": "Hohair",
        "kd_pos": 98473
      },
      {
        "id": 82251,
        "kecamatan_id": 7047,
        "kelurahan": "Ruriai",
        "kd_pos": 98473
      },
      {
        "id": 82252,
        "kecamatan_id": 7047,
        "kelurahan": "Soon",
        "kd_pos": 98473
      },
      {
        "id": 82253,
        "kecamatan_id": 7047,
        "kelurahan": "Tinggouw",
        "kd_pos": 98473
      },
      {
        "id": 82254,
        "kecamatan_id": 7048,
        "kelurahan": "Dombron",
        "kd_pos": 98473
      },
      {
        "id": 82255,
        "kecamatan_id": 7048,
        "kelurahan": "Donan",
        "kd_pos": 98473
      },
      {
        "id": 82256,
        "kecamatan_id": 7048,
        "kelurahan": "Krisnos",
        "kd_pos": 98473
      },
      {
        "id": 82257,
        "kecamatan_id": 7048,
        "kelurahan": "Syukwes",
        "kd_pos": 98473
      },
      {
        "id": 82258,
        "kecamatan_id": 7048,
        "kelurahan": "Syumbab",
        "kd_pos": 98473
      },
      {
        "id": 82259,
        "kecamatan_id": 7049,
        "kelurahan": "Araf Mafat",
        "kd_pos": 98473
      },
      {
        "id": 82260,
        "kecamatan_id": 7049,
        "kelurahan": "Esyuom",
        "kd_pos": 98473
      },
      {
        "id": 82261,
        "kecamatan_id": 7049,
        "kelurahan": "Sayam",
        "kd_pos": 98473
      },
      {
        "id": 82262,
        "kecamatan_id": 7049,
        "kelurahan": "Tabamsere",
        "kd_pos": 98473
      },
      {
        "id": 82263,
        "kecamatan_id": 7050,
        "kelurahan": "Baun",
        "kd_pos": 98474
      },
      {
        "id": 82264,
        "kecamatan_id": 7050,
        "kelurahan": "Metbelum",
        "kd_pos": 98474
      },
      {
        "id": 82265,
        "kecamatan_id": 7050,
        "kelurahan": "Metnayam",
        "kd_pos": 98474
      },
      {
        "id": 82266,
        "kecamatan_id": 7050,
        "kelurahan": "Salem",
        "kd_pos": 98474
      },
      {
        "id": 82267,
        "kecamatan_id": 7050,
        "kelurahan": "Sumbekas",
        "kd_pos": 98474
      },
      {
        "id": 82268,
        "kecamatan_id": 7050,
        "kelurahan": "Wormon",
        "kd_pos": 98474
      },
      {
        "id": 82269,
        "kecamatan_id": 7051,
        "kelurahan": "Aranday (Arandai)",
        "kd_pos": 98365
      },
      {
        "id": 82270,
        "kecamatan_id": 7051,
        "kelurahan": "Baru (Kampung Baru)",
        "kd_pos": 98365
      },
      {
        "id": 82271,
        "kecamatan_id": 7051,
        "kelurahan": "Kecap",
        "kd_pos": 98365
      },
      {
        "id": 82272,
        "kecamatan_id": 7051,
        "kelurahan": "Manunggal Karya/Jaya",
        "kd_pos": 98365
      },
      {
        "id": 82273,
        "kecamatan_id": 7052,
        "kelurahan": "Aroba",
        "kd_pos": 98363
      },
      {
        "id": 82274,
        "kecamatan_id": 7052,
        "kelurahan": "Sangguar",
        "kd_pos": 98363
      },
      {
        "id": 82275,
        "kecamatan_id": 7052,
        "kelurahan": "Sido Makmur",
        "kd_pos": 98363
      },
      {
        "id": 82276,
        "kecamatan_id": 7052,
        "kelurahan": "Wimbro (Nelayan Wimbro)",
        "kd_pos": 98363
      },
      {
        "id": 82277,
        "kecamatan_id": 7052,
        "kelurahan": "Yaru",
        "kd_pos": 98363
      },
      {
        "id": 82278,
        "kecamatan_id": 7053,
        "kelurahan": "Amutu",
        "kd_pos": 98363
      },
      {
        "id": 82279,
        "kecamatan_id": 7053,
        "kelurahan": "Irarutu III",
        "kd_pos": 98363
      },
      {
        "id": 82280,
        "kecamatan_id": 7053,
        "kelurahan": "Kasira",
        "kd_pos": 98363
      },
      {
        "id": 82281,
        "kecamatan_id": 7053,
        "kelurahan": "Nusei",
        "kd_pos": 98363
      },
      {
        "id": 82282,
        "kecamatan_id": 7054,
        "kelurahan": "Argosigemerai",
        "kd_pos": 98364
      },
      {
        "id": 82283,
        "kecamatan_id": 7054,
        "kelurahan": "Beimes",
        "kd_pos": 98364
      },
      {
        "id": 82284,
        "kecamatan_id": 7054,
        "kelurahan": "Bintuni Barat",
        "kd_pos": 98364
      },
      {
        "id": 82285,
        "kecamatan_id": 7054,
        "kelurahan": "Bintuni Timur",
        "kd_pos": 98364
      },
      {
        "id": 82286,
        "kecamatan_id": 7054,
        "kelurahan": "Iguriji",
        "kd_pos": 98364
      },
      {
        "id": 82287,
        "kecamatan_id": 7054,
        "kelurahan": "Masina",
        "kd_pos": 98364
      },
      {
        "id": 82288,
        "kecamatan_id": 7054,
        "kelurahan": "Tuasai",
        "kd_pos": 98364
      },
      {
        "id": 82289,
        "kecamatan_id": 7054,
        "kelurahan": "Wesiri",
        "kd_pos": 98364
      },
      {
        "id": 82290,
        "kecamatan_id": 7055,
        "kelurahan": "Eniba",
        "kd_pos": 98373
      },
      {
        "id": 82291,
        "kecamatan_id": 7055,
        "kelurahan": "Ibori",
        "kd_pos": 98373
      },
      {
        "id": 82292,
        "kecamatan_id": 7055,
        "kelurahan": "Jahabra",
        "kd_pos": 98373
      },
      {
        "id": 82293,
        "kecamatan_id": 7055,
        "kelurahan": "Laudoho",
        "kd_pos": 98373
      },
      {
        "id": 82294,
        "kecamatan_id": 7055,
        "kelurahan": "Menyembrui (Menyembru)",
        "kd_pos": 98373
      },
      {
        "id": 82295,
        "kecamatan_id": 7055,
        "kelurahan": "Meyorga",
        "kd_pos": 98373
      },
      {
        "id": 82296,
        "kecamatan_id": 7055,
        "kelurahan": "Mowitka",
        "kd_pos": 98373
      },
      {
        "id": 82297,
        "kecamatan_id": 7056,
        "kelurahan": "Cumnaji",
        "kd_pos": 98364
      },
      {
        "id": 82298,
        "kecamatan_id": 7056,
        "kelurahan": "Horna (Homa)",
        "kd_pos": 98364
      },
      {
        "id": 82299,
        "kecamatan_id": 7056,
        "kelurahan": "Huss",
        "kd_pos": 98364
      },
      {
        "id": 82300,
        "kecamatan_id": 7056,
        "kelurahan": "Menci",
        "kd_pos": 98364
      },
      {
        "id": 82301,
        "kecamatan_id": 7056,
        "kelurahan": "Sir",
        "kd_pos": 98364
      },
      {
        "id": 82302,
        "kecamatan_id": 7056,
        "kelurahan": "Ugdohop",
        "kd_pos": 98364
      },
      {
        "id": 82303,
        "kecamatan_id": 7057,
        "kelurahan": "Fruata (Fuata/Irorutu II)",
        "kd_pos": 98363
      },
      {
        "id": 82304,
        "kecamatan_id": 7057,
        "kelurahan": "Meryedi (Maryedi)",
        "kd_pos": 98363
      },
      {
        "id": 82305,
        "kecamatan_id": 7057,
        "kelurahan": "Riendo",
        "kd_pos": 98363
      },
      {
        "id": 82306,
        "kecamatan_id": 7058,
        "kelurahan": "Sara",
        "kd_pos": 98363
      },
      {
        "id": 82307,
        "kecamatan_id": 7058,
        "kelurahan": "Suga",
        "kd_pos": 98363
      },
      {
        "id": 82308,
        "kecamatan_id": 7058,
        "kelurahan": "Tugarama (Tugerama)",
        "kd_pos": 98363
      },
      {
        "id": 82309,
        "kecamatan_id": 7058,
        "kelurahan": "Warga Nusa II",
        "kd_pos": 98363
      },
      {
        "id": 82310,
        "kecamatan_id": 7058,
        "kelurahan": "Warganusa I (Warbanusa I)",
        "kd_pos": 98363
      },
      {
        "id": 82311,
        "kecamatan_id": 7059,
        "kelurahan": "Bibiram",
        "kd_pos": 98365
      },
      {
        "id": 82312,
        "kecamatan_id": 7059,
        "kelurahan": "Kalitama I (Kalitami I)",
        "kd_pos": 98365
      },
      {
        "id": 82313,
        "kecamatan_id": 7059,
        "kelurahan": "Kalitama II (Kalitami II)",
        "kd_pos": 98365
      },
      {
        "id": 82314,
        "kecamatan_id": 7059,
        "kelurahan": "Kenara",
        "kd_pos": 98365
      },
      {
        "id": 82315,
        "kecamatan_id": 7060,
        "kelurahan": "Naramasa",
        "kd_pos": 98363
      },
      {
        "id": 82316,
        "kecamatan_id": 7060,
        "kelurahan": "Obo",
        "kd_pos": 98363
      },
      {
        "id": 82317,
        "kecamatan_id": 7060,
        "kelurahan": "Refideso",
        "kd_pos": 98363
      },
      {
        "id": 82318,
        "kecamatan_id": 7060,
        "kelurahan": "Sarbe",
        "kd_pos": 98363
      },
      {
        "id": 82319,
        "kecamatan_id": 7060,
        "kelurahan": "Wagura",
        "kd_pos": 98363
      },
      {
        "id": 82320,
        "kecamatan_id": 7061,
        "kelurahan": "Atibo Manimeri",
        "kd_pos": 98364
      },
      {
        "id": 82321,
        "kecamatan_id": 7061,
        "kelurahan": "Banjar Ausoy",
        "kd_pos": 98364
      },
      {
        "id": 82322,
        "kecamatan_id": 7061,
        "kelurahan": "Bumi Saniari",
        "kd_pos": 98364
      },
      {
        "id": 82323,
        "kecamatan_id": 7061,
        "kelurahan": "Korano Jaya",
        "kd_pos": 98364
      },
      {
        "id": 82324,
        "kecamatan_id": 7061,
        "kelurahan": "Pasamai",
        "kd_pos": 98364
      },
      {
        "id": 82325,
        "kecamatan_id": 7061,
        "kelurahan": "Waraitama",
        "kd_pos": 98364
      },
      {
        "id": 82326,
        "kecamatan_id": 7062,
        "kelurahan": "Kalibiru",
        "kd_pos": 98373
      },
      {
        "id": 82327,
        "kecamatan_id": 7062,
        "kelurahan": "Maestofu (Mestofu)",
        "kd_pos": 98373
      },
      {
        "id": 82328,
        "kecamatan_id": 7062,
        "kelurahan": "Masyeta",
        "kd_pos": 98373
      },
      {
        "id": 82329,
        "kecamatan_id": 7062,
        "kelurahan": "Mesomda",
        "kd_pos": 98373
      },
      {
        "id": 82330,
        "kecamatan_id": 7063,
        "kelurahan": "Barma",
        "kd_pos": 98365
      },
      {
        "id": 82331,
        "kecamatan_id": 7063,
        "kelurahan": "Barma Baru (Stencool)",
        "kd_pos": 98365
      },
      {
        "id": 82332,
        "kecamatan_id": 7063,
        "kelurahan": "Meyado (Mayado/Meyabo)",
        "kd_pos": 98365
      },
      {
        "id": 82333,
        "kecamatan_id": 7063,
        "kelurahan": "Vasco Damneen (Vesco Damnem/Sten)",
        "kd_pos": 98365
      },
      {
        "id": 82334,
        "kecamatan_id": 7064,
        "kelurahan": "Anajero",
        "kd_pos": 98373
      },
      {
        "id": 82335,
        "kecamatan_id": 7064,
        "kelurahan": "Mekiesefeb",
        "kd_pos": 98373
      },
      {
        "id": 82336,
        "kecamatan_id": 7064,
        "kelurahan": "Menggerba",
        "kd_pos": 98373
      },
      {
        "id": 82337,
        "kecamatan_id": 7064,
        "kelurahan": "Merdey",
        "kd_pos": 98373
      },
      {
        "id": 82338,
        "kecamatan_id": 7064,
        "kelurahan": "Meryeb",
        "kd_pos": 98373
      },
      {
        "id": 82339,
        "kecamatan_id": 7064,
        "kelurahan": "Meyetga",
        "kd_pos": 98373
      },
      {
        "id": 82340,
        "kecamatan_id": 7064,
        "kelurahan": "Meyom",
        "kd_pos": 98373
      },
      {
        "id": 82341,
        "kecamatan_id": 7064,
        "kelurahan": "Mogromus",
        "kd_pos": 98373
      },
      {
        "id": 82342,
        "kecamatan_id": 7064,
        "kelurahan": "Morombuy",
        "kd_pos": 98373
      },
      {
        "id": 82343,
        "kecamatan_id": 7065,
        "kelurahan": "Istiwkem (Istikem)",
        "kd_pos": 98365
      },
      {
        "id": 82344,
        "kecamatan_id": 7065,
        "kelurahan": "Macok",
        "kd_pos": 98365
      },
      {
        "id": 82345,
        "kecamatan_id": 7065,
        "kelurahan": "Mejnic (Majnic/Majnik)",
        "kd_pos": 98365
      },
      {
        "id": 82346,
        "kecamatan_id": 7065,
        "kelurahan": "Meyerga (Mayerga)",
        "kd_pos": 98365
      },
      {
        "id": 82347,
        "kecamatan_id": 7066,
        "kelurahan": "Barma Barat",
        "kd_pos": 98365
      },
      {
        "id": 82348,
        "kecamatan_id": 7066,
        "kelurahan": "Inggof",
        "kd_pos": 98365
      },
      {
        "id": 82349,
        "kecamatan_id": 7066,
        "kelurahan": "Jagiro",
        "kd_pos": 98365
      },
      {
        "id": 82350,
        "kecamatan_id": 7066,
        "kelurahan": "Meyenda",
        "kd_pos": 98365
      },
      {
        "id": 82351,
        "kecamatan_id": 7066,
        "kelurahan": "Rawara",
        "kd_pos": 98365
      },
      {
        "id": 82352,
        "kecamatan_id": 7067,
        "kelurahan": "Igomu",
        "kd_pos": 98373
      },
      {
        "id": 82353,
        "kecamatan_id": 7067,
        "kelurahan": "Mesna",
        "kd_pos": 98373
      },
      {
        "id": 82354,
        "kecamatan_id": 7067,
        "kelurahan": "Sumuy (Sumui)",
        "kd_pos": 98373
      },
      {
        "id": 82355,
        "kecamatan_id": 7068,
        "kelurahan": "Inofina",
        "kd_pos": 98373
      },
      {
        "id": 82356,
        "kecamatan_id": 7068,
        "kelurahan": "Merestim (Maristim)",
        "kd_pos": 98373
      },
      {
        "id": 82357,
        "kecamatan_id": 7068,
        "kelurahan": "Mosum",
        "kd_pos": 98373
      },
      {
        "id": 82358,
        "kecamatan_id": 7068,
        "kelurahan": "Moyeba",
        "kd_pos": 98373
      },
      {
        "id": 82359,
        "kecamatan_id": 7069,
        "kelurahan": "Forada",
        "kd_pos": 98363
      },
      {
        "id": 82360,
        "kecamatan_id": 7069,
        "kelurahan": "Materabu Jaya",
        "kd_pos": 98363
      },
      {
        "id": 82361,
        "kecamatan_id": 7069,
        "kelurahan": "Saengga",
        "kd_pos": 98363
      },
      {
        "id": 82362,
        "kecamatan_id": 7069,
        "kelurahan": "Tanah Merah",
        "kd_pos": 98363
      },
      {
        "id": 82363,
        "kecamatan_id": 7069,
        "kelurahan": "Tofoi",
        "kd_pos": 98363
      },
      {
        "id": 82364,
        "kecamatan_id": 7070,
        "kelurahan": "Araisum",
        "kd_pos": 98364
      },
      {
        "id": 82365,
        "kecamatan_id": 7070,
        "kelurahan": "Bangun Mulyo/Mulia",
        "kd_pos": 98364
      },
      {
        "id": 82366,
        "kecamatan_id": 7070,
        "kelurahan": "Mogoi Baru",
        "kd_pos": 98364
      },
      {
        "id": 82367,
        "kecamatan_id": 7070,
        "kelurahan": "Tembuni",
        "kd_pos": 98364
      },
      {
        "id": 82368,
        "kecamatan_id": 7071,
        "kelurahan": "Ekam",
        "kd_pos": 98365
      },
      {
        "id": 82369,
        "kecamatan_id": 7071,
        "kelurahan": "Sebyar Rejosasi/Rejosari",
        "kd_pos": 98365
      },
      {
        "id": 82370,
        "kecamatan_id": 7071,
        "kelurahan": "Taroy (Toray/Taroi)",
        "kd_pos": 98365
      },
      {
        "id": 82371,
        "kecamatan_id": 7071,
        "kelurahan": "Tomu",
        "kd_pos": 98365
      },
      {
        "id": 82372,
        "kecamatan_id": 7072,
        "kelurahan": "Kucir",
        "kd_pos": 98364
      },
      {
        "id": 82373,
        "kecamatan_id": 7072,
        "kelurahan": "Sibena Permai (II)",
        "kd_pos": 98364
      },
      {
        "id": 82374,
        "kecamatan_id": 7072,
        "kelurahan": "Sibena Raya (I)",
        "kd_pos": 98364
      },
      {
        "id": 82375,
        "kecamatan_id": 7072,
        "kelurahan": "Tisaida",
        "kd_pos": 98364
      },
      {
        "id": 82376,
        "kecamatan_id": 7072,
        "kelurahan": "Tuhiba",
        "kd_pos": 98364
      },
      {
        "id": 82377,
        "kecamatan_id": 7073,
        "kelurahan": "Mamuranu",
        "kd_pos": 98364
      },
      {
        "id": 82378,
        "kecamatan_id": 7073,
        "kelurahan": "Wamesa I - Idoor",
        "kd_pos": 98364
      },
      {
        "id": 82379,
        "kecamatan_id": 7073,
        "kelurahan": "Wamesa II - Yakati",
        "kd_pos": 98364
      },
      {
        "id": 82380,
        "kecamatan_id": 7073,
        "kelurahan": "Yansei (Yansey/Ensei/Yensei)",
        "kd_pos": 98364
      },
      {
        "id": 82381,
        "kecamatan_id": 7074,
        "kelurahan": "Mogotira (Mogmesa)",
        "kd_pos": 98365
      },
      {
        "id": 82382,
        "kecamatan_id": 7074,
        "kelurahan": "Tuanaikin",
        "kd_pos": 98365
      },
      {
        "id": 82383,
        "kecamatan_id": 7074,
        "kelurahan": "Weriagar",
        "kd_pos": 98365
      },
      {
        "id": 82384,
        "kecamatan_id": 7074,
        "kelurahan": "Weriagar Baru",
        "kd_pos": 98365
      },
      {
        "id": 82385,
        "kecamatan_id": 7074,
        "kelurahan": "Weriagar Utara",
        "kd_pos": 98365
      },
      {
        "id": 82386,
        "kecamatan_id": 7075,
        "kelurahan": "Ambumi",
        "kd_pos": 98362
      },
      {
        "id": 82387,
        "kecamatan_id": 7075,
        "kelurahan": "Dusner",
        "kd_pos": 98362
      },
      {
        "id": 82388,
        "kecamatan_id": 7075,
        "kelurahan": "Nanimori",
        "kd_pos": 98362
      },
      {
        "id": 82389,
        "kecamatan_id": 7075,
        "kelurahan": "Simei (Simiei)",
        "kd_pos": 98362
      },
      {
        "id": 82390,
        "kecamatan_id": 7075,
        "kelurahan": "Sobiar",
        "kd_pos": 98362
      },
      {
        "id": 82391,
        "kecamatan_id": 7075,
        "kelurahan": "Yerenusi",
        "kd_pos": 98362
      },
      {
        "id": 82392,
        "kecamatan_id": 7076,
        "kelurahan": "Inyora",
        "kd_pos": 98362
      },
      {
        "id": 82393,
        "kecamatan_id": 7076,
        "kelurahan": "Oya (Oyaa)",
        "kd_pos": 98362
      },
      {
        "id": 82394,
        "kecamatan_id": 7076,
        "kelurahan": "Sararti",
        "kd_pos": 98362
      },
      {
        "id": 82395,
        "kecamatan_id": 7076,
        "kelurahan": "Undurara",
        "kd_pos": 98362
      },
      {
        "id": 82396,
        "kecamatan_id": 7076,
        "kelurahan": "Wosimi (Wosimo)",
        "kd_pos": 98362
      },
      {
        "id": 82397,
        "kecamatan_id": 7076,
        "kelurahan": "Yabore",
        "kd_pos": 98362
      },
      {
        "id": 82398,
        "kecamatan_id": 7077,
        "kelurahan": "Kurei",
        "kd_pos": 98361
      },
      {
        "id": 82399,
        "kecamatan_id": 7077,
        "kelurahan": "Mamisi",
        "kd_pos": 98361
      },
      {
        "id": 82400,
        "kecamatan_id": 7077,
        "kelurahan": "Tamoge",
        "kd_pos": 98361
      },
      {
        "id": 82401,
        "kecamatan_id": 7077,
        "kelurahan": "Werabur",
        "kd_pos": 98361
      },
      {
        "id": 82402,
        "kecamatan_id": 7077,
        "kelurahan": "Werianggi",
        "kd_pos": 98361
      },
      {
        "id": 82403,
        "kecamatan_id": 7078,
        "kelurahan": "Isey (Isei)",
        "kd_pos": 98362
      },
      {
        "id": 82404,
        "kecamatan_id": 7078,
        "kelurahan": "Nggatum",
        "kd_pos": 98362
      },
      {
        "id": 82405,
        "kecamatan_id": 7078,
        "kelurahan": "Rasiey (Rasiei)",
        "kd_pos": 98362
      },
      {
        "id": 82406,
        "kecamatan_id": 7078,
        "kelurahan": "Sasirey (Sasirei)",
        "kd_pos": 98362
      },
      {
        "id": 82407,
        "kecamatan_id": 7078,
        "kelurahan": "Senderawoy / Senderawoi (Sindrawoi)",
        "kd_pos": 98362
      },
      {
        "id": 82408,
        "kecamatan_id": 7078,
        "kelurahan": "Tandia",
        "kd_pos": 98362
      },
      {
        "id": 82409,
        "kecamatan_id": 7078,
        "kelurahan": "Torey",
        "kd_pos": 98362
      },
      {
        "id": 82410,
        "kecamatan_id": 7078,
        "kelurahan": "Uryemi (Uriyem/Uriemi)",
        "kd_pos": 98362
      },
      {
        "id": 82411,
        "kecamatan_id": 7078,
        "kelurahan": "Webi",
        "kd_pos": 98362
      },
      {
        "id": 82412,
        "kecamatan_id": 7079,
        "kelurahan": "Inday",
        "kd_pos": 98362
      },
      {
        "id": 82413,
        "kecamatan_id": 7079,
        "kelurahan": "Mena",
        "kd_pos": 98362
      },
      {
        "id": 82414,
        "kecamatan_id": 7079,
        "kelurahan": "Menarbu",
        "kd_pos": 98362
      },
      {
        "id": 82415,
        "kecamatan_id": 7079,
        "kelurahan": "Niab",
        "kd_pos": 98362
      },
      {
        "id": 82416,
        "kecamatan_id": 7079,
        "kelurahan": "Sariay",
        "kd_pos": 98362
      },
      {
        "id": 82417,
        "kecamatan_id": 7079,
        "kelurahan": "Syabes",
        "kd_pos": 98362
      },
      {
        "id": 82418,
        "kecamatan_id": 7079,
        "kelurahan": "Yende",
        "kd_pos": 98362
      },
      {
        "id": 82419,
        "kecamatan_id": 7080,
        "kelurahan": "Syeiwar",
        "kd_pos": 98361
      },
      {
        "id": 82420,
        "kecamatan_id": 7080,
        "kelurahan": "Waprak",
        "kd_pos": 98361
      },
      {
        "id": 82421,
        "kecamatan_id": 7080,
        "kelurahan": "Yomber",
        "kd_pos": 98361
      },
      {
        "id": 82422,
        "kecamatan_id": 7081,
        "kelurahan": "Isenebuai (Senebuay/Senebuai)",
        "kd_pos": 98361
      },
      {
        "id": 82423,
        "kecamatan_id": 7081,
        "kelurahan": "Iseren (Isren)",
        "kd_pos": 98361
      },
      {
        "id": 82424,
        "kecamatan_id": 7081,
        "kelurahan": "Wetitindau",
        "kd_pos": 98361
      },
      {
        "id": 82425,
        "kecamatan_id": 7081,
        "kelurahan": "Yariari",
        "kd_pos": 98361
      },
      {
        "id": 82426,
        "kecamatan_id": 7081,
        "kelurahan": "Yembekiri II",
        "kd_pos": 98361
      },
      {
        "id": 82427,
        "kecamatan_id": 7081,
        "kelurahan": "Yomakan",
        "kd_pos": 98361
      },
      {
        "id": 82428,
        "kecamatan_id": 7081,
        "kelurahan": "Yombekiri I (Yembe Kiri)",
        "kd_pos": 98361
      },
      {
        "id": 82429,
        "kecamatan_id": 7082,
        "kelurahan": "Kaprus",
        "kd_pos": 98361
      },
      {
        "id": 82430,
        "kecamatan_id": 7082,
        "kelurahan": "Nuspairo",
        "kd_pos": 98361
      },
      {
        "id": 82431,
        "kecamatan_id": 7082,
        "kelurahan": "Reyob (Rayob)",
        "kd_pos": 98361
      },
      {
        "id": 82432,
        "kecamatan_id": 7082,
        "kelurahan": "Siresi",
        "kd_pos": 98361
      },
      {
        "id": 82433,
        "kecamatan_id": 7082,
        "kelurahan": "Yarmatum (Yermatum)",
        "kd_pos": 98361
      },
      {
        "id": 82434,
        "kecamatan_id": 7083,
        "kelurahan": "Aisandami",
        "kd_pos": 98362
      },
      {
        "id": 82435,
        "kecamatan_id": 7083,
        "kelurahan": "Sobei (Sobey)",
        "kd_pos": 98362
      },
      {
        "id": 82436,
        "kecamatan_id": 7083,
        "kelurahan": "Sobey Indah",
        "kd_pos": 98362
      },
      {
        "id": 82437,
        "kecamatan_id": 7083,
        "kelurahan": "Yopanggar (Yopengar)",
        "kd_pos": 98362
      },
      {
        "id": 82438,
        "kecamatan_id": 7084,
        "kelurahan": "Ambuar",
        "kd_pos": 98361
      },
      {
        "id": 82439,
        "kecamatan_id": 7084,
        "kelurahan": "Karuan",
        "kd_pos": 98361
      },
      {
        "id": 82440,
        "kecamatan_id": 7084,
        "kelurahan": "Nordiwar",
        "kd_pos": 98361
      },
      {
        "id": 82441,
        "kecamatan_id": 7084,
        "kelurahan": "Sabubar",
        "kd_pos": 98361
      },
      {
        "id": 82442,
        "kecamatan_id": 7084,
        "kelurahan": "Yarpate",
        "kd_pos": 98361
      },
      {
        "id": 82443,
        "kecamatan_id": 7085,
        "kelurahan": "Dotir",
        "kd_pos": 98362
      },
      {
        "id": 82444,
        "kecamatan_id": 7085,
        "kelurahan": "Iriati",
        "kd_pos": 98362
      },
      {
        "id": 82445,
        "kecamatan_id": 7085,
        "kelurahan": "Maimare (Maimari)",
        "kd_pos": 98362
      },
      {
        "id": 82446,
        "kecamatan_id": 7085,
        "kelurahan": "Maniwak",
        "kd_pos": 98362
      },
      {
        "id": 82447,
        "kecamatan_id": 7085,
        "kelurahan": "Moru (Gayabaru)",
        "kd_pos": 98362
      },
      {
        "id": 82448,
        "kecamatan_id": 7085,
        "kelurahan": "Rado",
        "kd_pos": 98362
      },
      {
        "id": 82449,
        "kecamatan_id": 7085,
        "kelurahan": "Ramiki",
        "kd_pos": 98362
      },
      {
        "id": 82450,
        "kecamatan_id": 7085,
        "kelurahan": "Wasior I",
        "kd_pos": 98362
      },
      {
        "id": 82451,
        "kecamatan_id": 7085,
        "kelurahan": "Wasior II",
        "kd_pos": 98362
      },
      {
        "id": 82452,
        "kecamatan_id": 7085,
        "kelurahan": "Wondamawi",
        "kd_pos": 98362
      },
      {
        "id": 82453,
        "kecamatan_id": 7086,
        "kelurahan": "Sandey",
        "kd_pos": 98361
      },
      {
        "id": 82454,
        "kecamatan_id": 7086,
        "kelurahan": "Sombokoro",
        "kd_pos": 98361
      },
      {
        "id": 82455,
        "kecamatan_id": 7086,
        "kelurahan": "Wamesa Tengah",
        "kd_pos": 98361
      },
      {
        "id": 82456,
        "kecamatan_id": 7086,
        "kelurahan": "Windesi",
        "kd_pos": 98361
      },
      {
        "id": 82457,
        "kecamatan_id": 7086,
        "kelurahan": "Yopmios",
        "kd_pos": 98361
      },
      {
        "id": 82458,
        "kecamatan_id": 7087,
        "kelurahan": "Isuy (Issui)",
        "kd_pos": 98362
      },
      {
        "id": 82459,
        "kecamatan_id": 7087,
        "kelurahan": "Kabouw (Kabuow)",
        "kd_pos": 98362
      },
      {
        "id": 82460,
        "kecamatan_id": 7087,
        "kelurahan": "Kaibi",
        "kd_pos": 98362
      },
      {
        "id": 82461,
        "kecamatan_id": 7087,
        "kelurahan": "Manopi",
        "kd_pos": 98362
      },
      {
        "id": 82462,
        "kecamatan_id": 7087,
        "kelurahan": "Wondiboi (Wondiboy)",
        "kd_pos": 98362
      },
      {
        "id": 82463,
        "kecamatan_id": 7088,
        "kelurahan": "Giwu",
        "kd_pos": 98417
      },
      {
        "id": 82464,
        "kecamatan_id": 7088,
        "kelurahan": "Klablim",
        "kd_pos": 98417
      },
      {
        "id": 82465,
        "kecamatan_id": 7088,
        "kelurahan": "Klasaman",
        "kd_pos": 98417
      },
      {
        "id": 82466,
        "kecamatan_id": 7088,
        "kelurahan": "Klasuat",
        "kd_pos": 98417
      },
      {
        "id": 82467,
        "kecamatan_id": 7089,
        "kelurahan": "Saoka",
        "kd_pos": 98411
      },
      {
        "id": 82468,
        "kecamatan_id": 7089,
        "kelurahan": "Suprau",
        "kd_pos": 98411
      },
      {
        "id": 82469,
        "kecamatan_id": 7089,
        "kelurahan": "Tampa Garam",
        "kd_pos": 98411
      },
      {
        "id": 82470,
        "kecamatan_id": 7089,
        "kelurahan": "Tanjung Kasuari",
        "kd_pos": 98411
      },
      {
        "id": 82471,
        "kecamatan_id": 7090,
        "kelurahan": "Klagete",
        "kd_pos": 98419
      },
      {
        "id": 82472,
        "kecamatan_id": 7090,
        "kelurahan": "Malaingkedi",
        "kd_pos": 98419
      },
      {
        "id": 82473,
        "kecamatan_id": 7090,
        "kelurahan": "Matalamagi",
        "kd_pos": 98419
      },
      {
        "id": 82474,
        "kecamatan_id": 7090,
        "kelurahan": "Sawagumu",
        "kd_pos": 98419
      },
      {
        "id": 82475,
        "kecamatan_id": 7091,
        "kelurahan": "Klademak",
        "kd_pos": 98416
      },
      {
        "id": 82476,
        "kecamatan_id": 7091,
        "kelurahan": "Kofkerbu",
        "kd_pos": 98416
      },
      {
        "id": 82477,
        "kecamatan_id": 7091,
        "kelurahan": "Remu",
        "kd_pos": 98416
      },
      {
        "id": 82478,
        "kecamatan_id": 7091,
        "kelurahan": "Remu Utara",
        "kd_pos": 98416
      },
      {
        "id": 82479,
        "kecamatan_id": 7092,
        "kelurahan": "Klawasi",
        "kd_pos": 98412
      },
      {
        "id": 82480,
        "kecamatan_id": 7092,
        "kelurahan": "Pal Putih",
        "kd_pos": 98412
      },
      {
        "id": 82481,
        "kecamatan_id": 7092,
        "kelurahan": "Puncak Cendrawasih",
        "kd_pos": 98412
      },
      {
        "id": 82482,
        "kecamatan_id": 7092,
        "kelurahan": "Rufei",
        "kd_pos": 98412
      },
      {
        "id": 82483,
        "kecamatan_id": 7093,
        "kelurahan": "Dum Barat",
        "kd_pos": 98413
      },
      {
        "id": 82484,
        "kecamatan_id": 7093,
        "kelurahan": "Dum Timur",
        "kd_pos": 98413
      },
      {
        "id": 82485,
        "kecamatan_id": 7093,
        "kelurahan": "Raam",
        "kd_pos": 98413
      },
      {
        "id": 82486,
        "kecamatan_id": 7093,
        "kelurahan": "Soop",
        "kd_pos": 98413
      },
      {
        "id": 82487,
        "kecamatan_id": 7094,
        "kelurahan": "Kampung Baru",
        "kd_pos": 98414
      },
      {
        "id": 82488,
        "kecamatan_id": 7094,
        "kelurahan": "Klabala",
        "kd_pos": 98414
      },
      {
        "id": 82489,
        "kecamatan_id": 7094,
        "kelurahan": "Klakublik",
        "kd_pos": 98414
      },
      {
        "id": 82490,
        "kecamatan_id": 7094,
        "kelurahan": "Klasuur",
        "kd_pos": 98414
      },
      {
        "id": 82491,
        "kecamatan_id": 7095,
        "kelurahan": "Klaligi",
        "kd_pos": 98415
      },
      {
        "id": 82492,
        "kecamatan_id": 7095,
        "kelurahan": "Klasabi",
        "kd_pos": 98415
      },
      {
        "id": 82493,
        "kecamatan_id": 7095,
        "kelurahan": "Malabutor",
        "kd_pos": 98415
      },
      {
        "id": 82494,
        "kecamatan_id": 7095,
        "kelurahan": "Malawei",
        "kd_pos": 98415
      },
      {
        "id": 82495,
        "kecamatan_id": 7095,
        "kelurahan": "Remu Selatan",
        "kd_pos": 98415
      },
      {
        "id": 82496,
        "kecamatan_id": 7096,
        "kelurahan": "Kladufu",
        "kd_pos": 98418
      },
      {
        "id": 82497,
        "kecamatan_id": 7096,
        "kelurahan": "Klamana",
        "kd_pos": 98418
      },
      {
        "id": 82498,
        "kecamatan_id": 7096,
        "kelurahan": "Klawalu",
        "kd_pos": 98418
      },
      {
        "id": 82499,
        "kecamatan_id": 7096,
        "kelurahan": "Klawuyuk",
        "kd_pos": 98418
      },
      {
        "id": 82500,
        "kecamatan_id": 7097,
        "kelurahan": "Klabulu",
        "kd_pos": 98419
      },
      {
        "id": 82501,
        "kecamatan_id": 7097,
        "kelurahan": "Malamso",
        "kd_pos": 98419
      },
      {
        "id": 82502,
        "kecamatan_id": 7097,
        "kelurahan": "Malanu",
        "kd_pos": 98419
      },
      {
        "id": 82503,
        "kecamatan_id": 7097,
        "kelurahan": "Malasilen",
        "kd_pos": 98419
      }
    ]

    let result = []

    for(let key in list) {
      list[key].createdAt = new Date()
      list[key].updatedAt = new Date()
      result.push(list[key])
    }

    await queryInterface.bulkInsert('Subdistricts', result, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subdistricts', null, {});
  }
};
