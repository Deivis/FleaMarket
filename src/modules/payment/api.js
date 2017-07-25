import pagarme from 'pagarme';
import Storage from '../../utils/storage';
import onlyNumbers from '../../utils/onlyNumbers';

const savePayment = (summayId, paymentMetadata) => {
  const storage = new Storage('payments');
  const payments = storage.load() || {};
  payments[summayId] = paymentMetadata;
  storage.save(payments);
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
      id: summaryId,
      ...summary,
      items,
      total: items.reduce((prev, next) => prev + (next.price * next.quantity), 0),
    });
  }, 300);
});

const getSplitRules = seller => new Promise((resolve) => {
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
      recipient_id: seller && seller.id ? seller.id : 're_cj5h62ex001s4fw6d4knj4kpf',
      percentage: seller && seller.percentage ? seller.percentage : 60,
      liable: true,
      charge_processing_fee: true,
    },
  ]), 300);
});

const createMetadata = (summary) => {
  const { items } = summary;
  const recipients = [
    {
      name: 'Test me',
      id: 're_cj5h82l0v028nix6etayc4lng',
      percentage: 25,
    },
    {
      name: 'My friend',
      id: 're_cj5h7iwql01tnfw6dqpyym0gc',
      percentage: 15,
    },
  ].concat(items.map(i => i.seller))
  .reduce((array, item) => (!array.some(i => i.id === item.id) ? array.concat([item]) : array), []);
  return {
    recipients,
    items: items.map(i => ({
      id: i.id,
      name: i.name,
      quantity: i.quantity,
      price: i.price,
      seller: i.seller,
    })),
  };
};

const createPayment = (formData) => {
  const { summary, data } = formData;
  return getSplitRules(summary.seller)
    .then(splitRules =>
      pagarme.client.connect({ api_key: process.env.API_KEY })
        .then(client => client.transactions.create({
          amount: (+summary.total * 100),
          card_number: onlyNumbers(data.cardNumber),
          card_holder_name: data.cardName,
          card_expiration_date: onlyNumbers(data.cardExpire),
          card_cvv: data.cardCvc,
          split_rules: splitRules,
          metadata: createMetadata(summary),
        }))
        .then(metada => savePayment(summary.id, metada)));
};

const api = {
  getSummary,
  createPayment,
};

export default api;
