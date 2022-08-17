const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    customerId: { type: String, unique: true }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('users', UsersSchema);