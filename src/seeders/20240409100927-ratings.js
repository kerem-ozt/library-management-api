'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Ratings', [
      {
        rating: 4.5,
        book_id: 1,
        user_id: 1,
        rating_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4.4,
        book_id: 2,
        user_id: 2,
        rating_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4.2,
        book_id: 3,
        user_id: 3,
        rating_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Ratings', null, {});
  }
};
