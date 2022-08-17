const customers = require('../../models/customers');
const orders = require('../../models/orders');
const users = require('../../models/users');
const { generatePaymentIntent, generatePaymentMethod } = require('../../services/stripe');

//TODO: Buscamos orden y genramos intencion de pago

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { token, useSavedCard } = req.body
        console.log(useSavedCard);
        //TODO: Buscamos orden en nuestra base de datos

        const resOrder = await orders.findOne({ localizator: id });

        const resUser = await users.findOne({ _id: resOrder.userId });

        const resCustomer = await customers.findOne({ email: resUser.email });

        let payment_method = resCustomer.defaultSource;
        if ((!useSavedCard && token) || (!payment_method && token)) {
            const resPaymentMethod = await generatePaymentMethod(token);  //TODO: 🔴 Token magico!
            payment_method = resPaymentMethod.id;
        }

        if (!token && !payment_method) throw new Error("Nenhum cartão salvo, envie um token de cartão");

        //TODO: Generamos metodo de pago en Stripe

        // let responseMethod = await generatePaymentMethod(token) 

        //TODO: Generamos intencion de pago

        const resPaymentIntent = await generatePaymentIntent(
            {
                amount: resOrder.amount,
                user: resOrder.name,
                payment_method,
                customer_id: resCustomer.customerId
            }
        );

        //TODO: Actualizamos  orden con id de intencion de pago
        await orders.findOneAndUpdate({ localizator: id }, {
            stripeId: resPaymentIntent.id
        });

        res.send({ data: resPaymentIntent });

    } catch (e) {
        console.log(e.message);
        res.status(500);
        res.send({ error: 'Algo ocurrio' });
    }
}

module.exports = { updateItem }