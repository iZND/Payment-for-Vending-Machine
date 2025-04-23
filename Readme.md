# Webhook Handler for Stripe Payments

This project implements a webhook handler using Node.js to process Stripe payment events. It listens for Stripe webhook events, validates them, and processes successful payment events to send signals to a PLC (Programmable Logic Controller).

## Features
- Listens for Stripe webhook events on a specified endpoint.
- Validates incoming webhook events using Stripe's signature.
- Processes `checkout.session.completed` events to handle successful payments.
- Sends a signal to a PLC with the payment amount.

## Prerequisites
1. **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).
2. **Stripe Account**: You need a Stripe account to obtain your API keys and webhook secret.

## Setup Instructions
1. Clone or download this repository.
2. Navigate to the project directory:
3. Install the required dependencies:
4. Replace the placeholders in the script with your actual Stripe keys:
   - `your_stripe_secret_key`: Your Stripe secret key.
   - `your_webhook_secret`: Your Stripe webhook secret.

## Running the Script
1. Start the server:
2. The server will start listening on port `4242`.

## Testing the Webhook
1. Use the [Stripe CLI](https://stripe.com/docs/stripe-cli) to forward events to your local server:
2. The server will start listening on port `4242`.

## Testing the Webhook
1. Use the [Stripe CLI](https://stripe.com/docs/stripe-cli) to forward events to your local server:
2. Trigger a test event using the Stripe CLI:
## How It Works
1. The script listens for POST requests on the `/webhook` endpoint.
2. It validates the incoming request using the `stripe-signature` header and the webhook secret.
3. If the event type is `checkout.session.completed`, it extracts the payment amount and sends a signal to the PLC using the `sendSignalToPLC` function.

## Code Overview
- **Dependencies**:
  - `express`: For creating the server and handling HTTP requests.
  - `body-parser`: For parsing raw JSON payloads.
  - `stripe`: For validating and processing Stripe webhook events.
- **Key Functions**:
  - `sendSignalToPLC(tokens)`: Sends a signal to the PLC with the payment amount.

## Notes
- Ensure your firewall or antivirus software does not block port `4242`.
- This script assumes the payment amount is in cents and converts it to dollars before sending it to the PLC.

## License
This project is licensed under the MIT License.
