const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const Product = new Schema({
    category: {
        type: String
    },
    name: {
        type: String
    },
    size: {
        type: String
    },
    quantity: {
        type: String,
        unique: true,
        sparse: true
    },
    address: {
        type: String
    },
    image_url: {
        type: String
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});

Product.plugin(mongoosePaginate);

module.exports = mongoose.model("Product", Product);