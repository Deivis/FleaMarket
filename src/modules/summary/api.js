import Storage from '../../utils/storage';

const getPaymentSummary = summaryId => new Promise((resolve) => {
  setTimeout(() => {
    const storage = new Storage('payments');
    const payments = storage.load();
    const paymentSummary = payments[summaryId];
    resolve(paymentSummary);
  }, 300);
});

const api = {
  getPaymentSummary,
};

export default api;
