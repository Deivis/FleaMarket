import Storage from '../../utils/storage';

const savePayment = summary => new Promise((resolve) => {
  setTimeout(() => {
    resolve(summary);
  }, 300);
});

const getSummary = summaryId => new Promise((resolve) => {
  setTimeout(() => {
    let storage = new Storage(summaryId);
    const summary = storage.load();
    storage = new Storage('cart');
    const cart = storage.load();
    resolve({
      ...summary,
      items: cart.items,
    });
  }, 300);
});

const createPayment = () => new Promise((resolve) => {
  debugger;
  // TODO: Continue here do your best !!!
  // don't forget the pagar.me api connection !!!
  resolve({
    paymentReceipt: {
      status: 'OK',
    },
  });
});

const api = {
  savePayment,
  getSummary,
  createPayment,
};

export default api;
