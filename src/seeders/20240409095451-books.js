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
    await queryInterface.bulkInsert('Books', [
      {
        name: 'Crime and Punishment',
        average_rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'White Fang',
        average_rating: 4.4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '1984',
        average_rating: 4.2,
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
    await queryInterface.bulkDelete('Books', null, {});
  }
};
