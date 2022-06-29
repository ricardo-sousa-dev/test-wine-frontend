import React, { useEffect, useContext, useMemo } from 'react';
const axios = require('axios').default;
import api from '../api';
import Context from '../context/Context';
import './css/Home.css';

import {
  Header,
  CardsHome,
  Footer,
  CartOffCanvas
} from '../components';

function Home() {
  const { showModalCart, setShowModalCart, database, setDatabase, } = useContext(Context);

  const fetchProducts = async () => {
    const response = await axios.get('https://wine-back-test.herokuapp.com/products?page=1&limit=100')

    return response;
  }

  const localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')));

  useEffect(() => {
    setShowModalCart(false);
    async function fetch() {
      const res = await api();
      setDatabase(res);
    }
    fetch();
    console.log('DATABASE: ', database)
  }, []);

  return (
    <>
      {showModalCart && (localStorageCart && localStorageCart.length > 0) && <CartOffCanvas />}
      <Header />
      <CardsHome />
      <Footer />
    </>
  );
}

export default Home;
