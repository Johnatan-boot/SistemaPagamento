const cards = require('../../models/cards');
const customers = require('../../models/customers');
const orders = require('../../models/orders');
const users = require('../../models/users');
const { createPaymentSource, updateCustomerPaymentMethod } = require('../../services/stripe');

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { token } = req.body;

        const order = await orders.findOne({ localizator: id });

        const user = await users.findOne({ _id: order.userId });

        const customer_id = user.customerId;

        const card = await createPaymentSource(customer_id, token);

        // To update the Payment Provider
        await updateCustomerPaymentMethod(card.id, customer_id);

        // To update Database
        await customers.findOneAndUpdate({ customerId: customer_id }, {
            defaultSource: card.id
        });
        
        const cardRes = await cards.create(
            {
                cardId: card.id,
                brand: card.brand,
                country: card.country,
                customerId: card.customer,
                funding: card.funding,
                last4digits: card.last4
            }
        );
        console.log("SALVANDO CARTÃO:", cardRes);
        res.send({ cardRes });
    } catch (e) {
        res.status(500);
        res.send({ error: "Um erro ocorreu" });
        console.log(e);
    }
};

module.exports = { updateUser };