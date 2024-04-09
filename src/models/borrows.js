'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Borrows.belongsTo(models.Users, {
        foreignKey: 'user_id'
      });
      Borrows.belongsTo(models.Books, {
        foreignKey: 'book_id'
      });
    }
  }
  Borrows.init({
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    borrow_date: DataTypes.DATE,
    return_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Borrows',
  });
  return Borrows;
};