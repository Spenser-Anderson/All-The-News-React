import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';

const navItems = [
  {
    label: 'arts',
    link: '#arts',
  },
  {
    label: 'books',
    link: '#books',
  },
  {
    label: 'fashion',
    link: '#fashion',
  },
  {
    label: 'food',
    link: '#food',
  },
  {
    label: 'movies',
    link: '#movies',
  },
  {
    label: 'travel',
    link: '#travel',
  },
];

function App() {
  return (
    <>
      <Header siteTitle="All the News That Fits We Print" />
      <Nav navItems={navItems} />
    </>
  );
}

export default App;
