const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('your_stripe_secret_key');

const app = express();
const endpointSecret = 'your_webhook_secret';

app.use(bodyParser.raw({ type: 'application/json' }));

app.post('/webhook', (request, response) => {
    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        // Handle successful payment here
        // Send signal to PLC
        sendSignalToPLC(session.amount_total / 100); // Assuming amount is in cents
    }

    response.json({ received: true });
});

function sendSignalToPLC(tokens) {
    // Logic to send signal to PLC
}

app.listen(4242, () => console.log('Running on port 4242'));
// JavaScript source code
