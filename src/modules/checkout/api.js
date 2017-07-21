import apiMock from '../../../mock/api';
import Storage from '../../utils/storage';

export const saveIdentification = (identification, cartId) => new Promise((resolve) => {
  apiMock.saveIdentification(identification, cartId)
    .then((summary) => {
      const storage = new Storage(cartId);
      storage.save(summary);
      resolve(summary);
    });
});

export default {
  saveIdentification,
};
