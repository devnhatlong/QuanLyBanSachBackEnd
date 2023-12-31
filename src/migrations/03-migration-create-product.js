'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        product_name: {
            type: Sequelize.STRING
        },
        product_category_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'ProductCategories',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE', 
        },
        product_category_name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        price: {
            type: Sequelize.DECIMAL(10,2)
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.TEXT
        },
        rating: {
            type: Sequelize.DECIMAL(10,2)
        },
        discount: {
            type: Sequelize.DECIMAL(10,2)
        },
        sold_quantity: {
            type: Sequelize.INTEGER
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};