const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const User = new Schema({
    id: {
        type: Number,
        unique: true,
        sparse: true
    },
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
    address: {
        type: String
    },
    shop_name: {
        type: String
    },
    city: {
        type: String
    },
    avatar: {
        type: String
    },
    avatar_ext: {
        type: String
    },

    is_deleted: {
        type: Number,
        default: 0
    }
});

User.plugin(mongoosePaginate);

User.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;


    //     git remote add origin https://github.com/mudassiriqball/mysouqapi.git
    // git push -u origin master
}
// User.index({'$**': 'text'});

module.exports = mongoose.model("User", User);