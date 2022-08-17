const mongoose = require('mongoose')

const CustomersSchema = new mongoose.Schema({
    customerId: { type: String },
    defaultSource: { type: String },
    email: { type: String },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('customers', CustomersSchema);