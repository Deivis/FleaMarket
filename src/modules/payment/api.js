import Storage from '../../utils/storage';

const savePayment = summary => new Promise((resolve) => {
  setTimeout(() => {
    resolve(summary);
  }, 300);
});

const getSummary = summaryId => new Promise((resolve) => {
  setTimeout(() => {
    const storage = new Storage(summaryId);
    resolve(storage.load());
  }, 300);
});

const api = {
  savePayment,
  getSummary,
};

export default api;
