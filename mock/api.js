import { v4 } from 'node-uuid';

const createBaseItemMock = name => ({
  id: v4(),
  name,
  price: 10.0,
  category: 'Categoria de teste',
  shortDescription: 'Produto de teste. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  thumbnail: 'https://s3-sa-east-1.amazonaws.com/leroy-production//uploads/img/products/abajur_ceramica_tecido_24x11cm_bege_marrom__88474771_0001.jpg_600x600.jpg',
  available: 5,
  seller: {
    id: 're_cj5h62ex001s4fw6d4knj4kpf',
    name: 'Vendedor teste',
    percentage: 60,
  },
});

const createFullItemMock = baseItem => Object.assign({}, baseItem, {
  description:
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Etiam in efficitur ex, non porta tellus. Cras id pretium sem, quis blandit dui.
    Sed at vulputate risus, quis placerat massa. Duis venenatis nisi in ipsum bibendum, ut tempor sem tempus.
    Suspendisse pharetra purus vel lectus maximus rhoncus. Fusce felis dolor, lacinia quis nisl ut, pretium interdum nisi.
    Fusce id suscipit ipsum.`,
  images: ['https://s3-sa-east-1.amazonaws.com/leroy-production//uploads/img/products/abajur_ceramica_tecido_24x11cm_bege_marrom__88474771_0001.jpg_600x600.jpg'],
  aboutSeller: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Etiam in efficitur ex, non porta tellus. Cras id pretium sem, quis blandit dui.`,
});

let mockItems = sessionStorage.getItem('mockItems');

mockItems = mockItems ? JSON.parse(mockItems) : (Array(10).fill(1)).map((item, idx) => createBaseItemMock(`Produto teste ${idx + item}`));

sessionStorage.setItem('mockItems', JSON.stringify(mockItems));

const createFakeResponse = data => ({
  statusCode: 200,
  status: '200 OK',
  data,
});

const items = filter => new Promise((resolve) => {
  setTimeout(() => {
    let returnValue;
    if (filter) {
      returnValue = mockItems.filter(i => i.id === filter);
    }
    resolve(createFakeResponse(returnValue || mockItems));
  }, 500);
});

const item = itemId => new Promise((resolve) => {
  setTimeout(() => {
    if (itemId) {
      const baseItem = mockItems.find(i => i.id === itemId);
      resolve(createFakeResponse(createFullItemMock(baseItem || mockItems[0])));
    }
    resolve();
  }, 500);
});

const saveIdentification = (identification, cartId) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(Object.assign({}, identification, { cartId }));
  }, 300);
});

const savePayment = summary => new Promise((resolve) => {
  setTimeout(() => {
    resolve(summary);
  }, 300);
});

export default {
  items,
  item,
  saveIdentification,
  savePayment,
};
