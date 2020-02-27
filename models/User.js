const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    
    resetPasswordToken: {
        type: String,
        default: null
    },

    resetPasswordTokenExpires: {
        type: Date,
        required: true,
        default: Date.now
    },

    stripeId: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model("User", schema)
