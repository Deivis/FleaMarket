import { v4 } from 'node-uuid';

const baseItem = {
  id: v4(),
  name: '',
  price: 0.0,
  category: '',
  quantity: 0,
  seller: '',
  description: '',
  image: '',
  thumbnail: '',
};

const getItems = filter => new Promise((resolve) => {
  if (filter) {
    resolve([
      baseItem,
    ]);
  }
  resolve([baseItem, baseItem]);
});

const getItem = itemId => new Promise((resolve) => {
  if (itemId) {
    resolve(baseItem);
  }
  resolve();
});

export default {
  getItems,
  getItem,
};
