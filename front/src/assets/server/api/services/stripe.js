const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SK)

/**
 * Generar intencion de PAGO
 */

const generatePaymentIntent = async ({ amount, user, payment_method, customer_id }) => {
    const resPaymentIntent = await stripe.paymentIntents.create({
        amount: parseFloat(amount) * 100,
        currency: process.env.STRIPE_CURRENCY,
        payment_method_types: ['card'],
        payment_method,
        customer: customer_id,
        description: `Pago para la gente de Youtue -> ${user}: Pago`
    });


    return resPaymentIntent;

}

/**
 * Confirmar pago
 */

const confirmPaymentIntent = async (id, token) => {
    const paymentIntent = await stripe.paymentIntents.confirm(
        id,
        { payment_method: token }
    );

    console.log(paymentIntent);

    return paymentIntent;
}

/**
 * Crear fuente
 */

const generatePaymentMethod = async (token) => {
    let paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: { token }
    });

    return paymentMethod;
};


// ---
const createCustomer = async (email) => {
    const customer = await stripe.customers.create({
        email
    });

    return customer;
};

const updateCustomerPaymentMethod = async (paymentMethod_id, customer_id) => {
    paymentMethod = await stripe.paymentMethods.attach(paymentMethod_id, {
        customer: customer_id
    });

    return paymentMethod;
};

const getCustomerById = async (id) => {
    return await stripe.customers.retrieve(id);
};

const createPaymentSource = async (customer_id, card_token) => {
    const card = await stripe.customers.createSource(customer_id, { source: card_token });

    return card;
};

const createPaymentIntentSavedCard = async ({ amount, user, payment_method, customer_id }) => {
    const resPaymentIntent = await stripe.paymentIntents.create({
        amount: parseFloat(amount) * 100,
        currency: process.env.STRIPE_CURRENCY,
        payment_method_types: ['card'],
        payment_method,
        customer: customer_id,
        description: `Pago com cartão salvo no Customer (id: ${customer_id}) -> ${user}: Pago`
    });


    return resPaymentIntent;

}

// ---
/**
 * Consultar detalle de ordne
 */

const getPaymentDetail = async (id) => {
    const detailOrder = await stripe.paymentIntents.retrieve(id)
    return detailOrder
}

module.exports = {
    generatePaymentIntent,
    getPaymentDetail,
    confirmPaymentIntent,
    generatePaymentMethod,
    updateCustomerPaymentMethod,
    createPaymentIntentSavedCard,
    getCustomerById,
    createPaymentSource,
    createCustomer,
};
