import { v4 } from 'node-uuid';

const createBaseItemMock = () => ({
  id: v4(),
  name: '',
  price: 0.0,
  category: '',
  shortDescription: '',
  thumbnail: '',
});

const createFullItemMock = baseItem => Object.assign({}, baseItem, {
  description: '',
  images: [],
  quantity: 0,
  seller: '',
});

const mockItems = [5].map(createBaseItemMock);

const items = filter => new Promise((resolve) => {
  setTimeout(() => {
    if (filter) {
      resolve(mockItems.filter);
    }
    resolve(mockItems);
  }, 500);
});

const item = itemId => new Promise((resolve) => {
  setTimeout(() => {
    if (itemId) {
      const baseItem = mockItems.filter(i => i.id === itemId);
      resolve(createFullItemMock(baseItem));
    }
    resolve();
  }, 500);
});

export default {
  items,
  item,
};
