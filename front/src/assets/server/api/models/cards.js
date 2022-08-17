const mongoose = require('mongoose')

const CardsSchema = new mongoose.Schema({
    cardId: { type: String },
    brand: { type: String },
    country: { type: String },
    customerId: { type: String },
    funding: { type: String },
    last4digits: { type: String }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('cards', CardsSchema);