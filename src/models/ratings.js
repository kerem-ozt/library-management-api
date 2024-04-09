'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ratings.belongsTo(models.Users, {
        foreignKey: 'user_id'
      });
      Ratings.belongsTo(models.Books, {
        foreignKey: 'book_id'
      });
    }
  }
  Ratings.init({
    book_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    rating: DataTypes.DECIMAL,
    rating_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Ratings',
  });
  return Ratings;
};