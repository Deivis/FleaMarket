import { v4 } from 'node-uuid';

const getItems = () => new Promise((resolve) =>
([
  {
    id: v4(),
    name: '',
    price: 0.0,
    category: '',
    quantity: 0,
    seller: '',
    description: '',
    image: '',
    thumbnail: ''
  }
])
);