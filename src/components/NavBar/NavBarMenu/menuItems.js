import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home page',
    private: false,
  },
  {
    id: nanoid(),
    to: '/contacts',
    text: 'Phonebook',
    private: true,
  },
];

export default menuItems;
