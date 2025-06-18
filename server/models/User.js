import { DataTypes } from 'sequelize';

export default (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM('PADRE', 'DOCENTE', 'ADMIN'),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    validated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      comment: 'Indica si el usuario confirmó su tipo para habilitar funciones',
    },
  });
};