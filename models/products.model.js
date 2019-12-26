const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const Product = new Schema({
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
    category: {
        type: String
    },
    address: {
        type: String
    },
    image: {
        data: Buffer, 
        contentType: String
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});

Product.plugin(mongoosePaginate);

module.exports = mongoose.model("Product", Product);