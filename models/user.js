'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Children, {foreignKey: "user_id"});
      User.hasOne(models.Partner, {foreignKey: "user_id"});
      User.hasOne(models.Emergency, {foreignKey: "user_id"});
      User.hasMany(models.Parent, {foreignKey: "user_id"});
      User.hasMany(models.Child_Dedication, {foreignKey: "user_id"});
      User.hasMany(models.Sunday_Schedule_Children, {foreignKey: "user_id"});
      User.hasMany(models.Sunday_School_Schedule, {foreignKey: "user_id"});
      User.hasMany(models.User_Event, {foreignKey: "user_id"});
      User.hasMany(models.User_Service_Event, {foreignKey: "user_id"});
      User.hasMany(models.User_Commission_Role, {foreignKey: "user_id"});
      User.hasMany(models.User_Job_Event, {foreignKey: "user_id"});
      User.hasMany(models.Baptism, {foreignKey: 'user_id'});
      User.hasMany(models.Dedication, {foreignKey: 'user_id'});
      User.hasMany(models.PreMarriageGuidance, {foreignKey: 'user_id'});
      User.hasMany(models.User_Marriage, {foreignKey: 'user_id'});
      User.hasMany(models.User_Class, {foreignKey: 'user_id'});
    }
  };
  User.init({
    full_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nama tidak boleh kosong"
        }
      }
    },
    birth_place: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tempat lahir tidak boleh kosong"
        }
      }
    },
    birth_of_date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tanggal lahir tidak boleh kosong"
        }
      }
    },
    gender: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Jenis kelamin tidak boleh kosong"
        }
      }
    },
    occupation: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Pekerjaan tidak boleh kosong"
        }
      }
    },
    address: {
      type: DataTypes.TEXT,
    },
    phone_number: {
      type: DataTypes.BIGINT,
      unique: {
        args: true,
        msg: "Telepon sudah terdaftar"
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Email sudah terdaftar"
      },
      validate: {
        notEmpty: {
          args: true,
          msg: "Email tidak boleh kosong"
        },
        isEmail: {
          msg: "Format email tidak sesuai"
        }
      }
    },
    password: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password tidak boleh kosong"
        }
      }
    },
    identification_file: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          message: "Foto KTP harus dilampirkan"
        }
      }
    },
    family_certification_file: {
      type: DataTypes.TEXT,
    },
    birth_certification_file: {
      type: DataTypes.TEXT,
    },
    baptism_certification_file: {
      type: DataTypes.TEXT,
    },
    QRcode: {
      type: DataTypes.TEXT,
    },
    member_id: DataTypes.BIGINT,
    otp: DataTypes.INTEGER,
    isVerified: DataTypes.BOOLEAN,
    profile_pic: DataTypes.TEXT,
    token_user: DataTypes.TEXT,
    token_oneSignal: DataTypes.TEXT,
    token_firebase: DataTypes.TEXT,
    device_type: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        user.password = hashPassword(user.password);
      }
    }
  });
  return User;
};