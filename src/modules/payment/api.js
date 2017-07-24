import pagarme from 'pagarme';
import Storage from '../../utils/storage';
import onlyNumbers from '../../utils/onlyNumbers';

const savePayment = (paymentMetadata) => {
  debugger;
  const storage = new Storage('payments');
  let payments = storage.load();
  if (!payments || !(payments instanceof Array)) {
    payments = [paymentMetadata];
  } else {
    payments.push(paymentMetadata);
  }
  storage.save(payments);
  debugger;
  return paymentMetadata;
};

const getSummary = summaryId => new Promise((resolve) => {
  setTimeout(() => {
    let storage = new Storage(summaryId);
    const summary = storage.load();
    storage = new Storage('cart');
    const cart = storage.load();
    const { items } = cart;
    resolve({
      ...summary,
      items,
      total: items.reduce((prev, next) => prev + (next.price * next.quantity), 0),
    });
  }, 300);
});

const getSplitRules = sellerId => new Promise((resolve) => {
  setTimeout(() => resolve([
    { // My split rule
      recipient_id: 're_cj5h82l0v028nix6etayc4lng',
      percentage: 25,
      liable: true,
      charge_processing_fee: true,
    },
    { // My friend split rule
      recipient_id: 're_cj5h7iwql01tnfw6dqpyym0gc',
      percentage: 15,
      liable: true,
      charge_processing_fee: true,
    },
    { // Seller split rule ( Default test seller id is used if the seller id isn't received )
      recipient_id: sellerId || 're_cj5h62ex001s4fw6d4knj4kpf',
      percentage: 60,
      liable: true,
      charge_processing_fee: true,
    },
  ]), 300);
});

const createPayment = (formData) => {
  const { summary, data } = formData;
  return getSplitRules(summary.sellerId)
    .then(splitRules =>
      pagarme.client.connect({ api_key: process.env.API_KEY })
        .then(client => client.transactions.create({
          amount: (+summary.total * 100),
          card_number: onlyNumbers(data.cardNumber),
          card_holder_name: data.cardName,
          card_expiration_date: onlyNumbers(data.cardExpire),
          card_cvv: data.cardCvc,
          split_rules: splitRules,
        }))
        .then(metada => savePayment(metada)));
};
const api = {
  getSummary,
  createPayment,
};

export default api;
