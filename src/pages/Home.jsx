import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
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

  const { products, setProducts } = useContext(Context);
  const [ loading, setLoading ] = useState(true);


  useEffect(() => {
    setShowModalCart(false);

    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get('https://wine-back-test.herokuapp.com/products?page=1&limit=100');
      setProducts(res.data.items);
      setLoading(false);
    }
    fetchProducts();
  }, []);
  

  return (
    <div className="home-page">
      {showModalCart && (localStorageCart && localStorageCart.length > 0) && <CartOffCanvas />}
      <Header />
      <div className="home-container">
        <FilterAside />
        {products && <CardsHome products={products} loading={loading} />}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
