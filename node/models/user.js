const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    username: { 
        type: String,
        minlenght: [2, 'username min char error'],
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlenght: [8, 'password min char error'],
        required: true
    },
    firstName : {
        type: String,
        minlenght: [2, 'name min char error'],
        maxlenght: [30, 'name min char error'],
        required: true
    },
    lastName : {
        type: String,
        minlenght: [2, 'name min char error'],
        maxlenght: [30, 'name min char error'],
        required: true
    },
    gender:{
        type: Boolean,
        default: false
    }
});


const userModel = mongoose.model('user', user);

module.exports= userModel;