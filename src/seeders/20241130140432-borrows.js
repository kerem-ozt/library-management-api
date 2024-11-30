'use strict';

const moment = require('moment');

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
    const borrowsData = [
      {
        user_id: 1,
        book_id: 1,
        borrow_date: moment('2023-01-01').toDate(),
        return_date: moment('2023-01-10').toDate(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Kullanıcı 2, Kitap 2'yi ödünç almış ve iade etmiş
      {
        user_id: 2,
        book_id: 2,
        borrow_date: moment('2023-01-05').toDate(),
        return_date: moment('2023-01-15').toDate(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Kullanıcı 3, Kitap 3'ü ödünç almış ve iade etmiş
      {
        user_id: 3,
        book_id: 3,
        borrow_date: moment('2023-01-07').toDate(),
        return_date: moment('2023-01-17').toDate(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Kullanıcı 1, Kitap 2'yi ödünç almış ve henüz iade etmemiş
      {
        user_id: 1,
        book_id: 2,
        borrow_date: moment().toDate(),
        return_date: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Kullanıcı 2, Kitap 3'ü ödünç almış ve henüz iade etmemiş
      {
        user_id: 2,
        book_id: 3,
        borrow_date: moment().toDate(),
        return_date: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Kullanıcı 3, Kitap 1'i ödünç almış ve henüz iade etmemiş
      {
        user_id: 3,
        book_id: 1,
        borrow_date: moment().toDate(),
        return_date: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Borrows', borrowsData, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
