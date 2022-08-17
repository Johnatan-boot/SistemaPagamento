const customers = require('../../models/customers');
const orders = require('../../models/orders');
const users = require('../../models/users');

//TODO: Buscamos en la base de datos si existe una orden con el localizador

const getItem = async (req, res) => {
    const { id } = req.params;
    const order = await orders.findOne({ localizator: id });
    const user = await users.findOne({ _id: order.userId });
    const customer = await customers.findOne({ customerId: user.customerId });

    res.send({ data: { order, user, customer } });
}

module.exports = { getItem }