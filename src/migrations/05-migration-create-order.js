'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
        order_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'user_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE', 
        },
        product_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Products',
                key: 'product_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE', 
        },
        items_price: {
            type: Sequelize.DECIMAL
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.STRING
        },
        note: {
            type: Sequelize.TEXT
        },
        shipping_address: {
            type: Sequelize.STRING
        },
        payment_method: {
            type: Sequelize.STRING
        },
        shipping_price: {
            type: Sequelize.DECIMAL
        },
        tax_price: {
            type: Sequelize.DECIMAL
        },
        total_price: {
            type: Sequelize.DECIMAL
        },
        is_paid: {
            type: Sequelize.BOOLEAN
        },
        paid_at: {
            allowNull: false,
            type: Sequelize.DATE
        },
        is_delivered: {
            type: Sequelize.BOOLEAN
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE
        },
        deleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: 1
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};