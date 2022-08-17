const orders = require("../../models/orders");
const users = require("../../models/users");
const customers = require("../../models/customers");
const {
    generatePaymentIntent,
    generatePaymentMethod,
    updateCustomerPaymentMethod,
    getCustomerById,
    createCustomer
} = require('../../services/stripe')

//TODO: Generamos nueva orden y guardamos en base de datos

const postItem = async (req, res) => {
    try {
        const { amount, name, email } = req.body;
        
        let userRes = await users.findOne({ email });
        // No user for this email
        if (!userRes) {
            // Create a new Customer for the Payment Provider
            const newCustomer = await createCustomer(email);
            // Create a new Customer for the Database
            const customerRes = await customers.create(
                {
                    customerId: newCustomer.id,
                    defaultSource: newCustomer.default_source,
                    email
                }
            );
            // Create a new user for the Database
            userRes = await users.create(
                {
                    name,
                    email,
                    customerId: newCustomer.id
                }
            );
        }

        const orderRes = await orders.create(
            {
                name,
                amount,
                userId: userRes._id.toString()
            }
        );

        res.send({ data: orderRes });
    } catch (e) {
        res.status(500);
        res.send({ error: "Algo ocurrio" });
        console.log(e);
    }
};

module.exports = { postItem };