const mongoose = require('mongoose')
const { stringify } = require('qs')

const userScherma = mongoose.Schema ({
    name:{
        type: String,
        required: [true, 'Please add a aname']
    },
    email: {
        type:String, 
        required: [true, 'Please add an email']
    },
    password: {
        type: String,
        required: [true, 'Please, add a password']
    }
}, {
    timestamp: true
})