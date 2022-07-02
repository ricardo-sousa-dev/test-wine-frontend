import React, { useEffect, useContext, useMemo } from 'react';
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
  const { showModalCart, setShowModalCart } = useContext(Context);

  const localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')));

  useEffect(() => {
    setShowModalCart(false);
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
