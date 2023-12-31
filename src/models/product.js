'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    Product.init({
        product_name: DataTypes.STRING,
        product_category_id: DataTypes.INTEGER,
        product_category_name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL,
        quantity: DataTypes.INTEGER,
        image: DataTypes.TEXT,
        rating: DataTypes.DECIMAL,
        discount: DataTypes.DECIMAL,
        sold_quantity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};