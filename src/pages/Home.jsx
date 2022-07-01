import React, { useEffect, useContext, useMemo } from 'react';
const axios = require('axios').default;
import api from '../api';
import Context from '../context/Context';
import './css/Home.css';

import {
  Header,
  CardsHome,
  Footer,
  CartOffCanvas,
  FilterAside
} from '../components';

function Home() {
  const { showModalCart, setShowModalCart, setDatabase, } = useContext(Context);

  const localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')));

  useEffect(() => {
    setShowModalCart(false);
    async function fetch() {
      const res = await api();
      setDatabase(res);
    }
    fetch();
  }, []);

  return (
    <div className="home-page">
      {showModalCart && (localStorageCart && localStorageCart.length > 0) && <CartOffCanvas />}
      <Header />
      <div className="home-container">
        <FilterAside />
        <CardsHome />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
