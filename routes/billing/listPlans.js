const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.get('/plans', async (request, response) => {
  let plans = await stripe.plans.list({
    product: 'prod_Gl8EVfHftxpU0T',
    currency: 'eur'
  });

  response.json(plans);
});

module.exports = router;
