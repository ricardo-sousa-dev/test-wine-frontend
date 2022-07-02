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

  const { products, setProducts, resultSearchBar, quantityResult, setQuantityResult } = useContext(Context);
  const [ loading, setLoading ] = useState(true);
  const [ showProducts, setShowProducts ] = useState([]);

  useEffect(() => {
    setShowModalCart(false);

    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get('https://wine-back-test.herokuapp.com/products');
      setProducts(res.data.items);
      setQuantityResult(res.data.items.length);
      setLoading(false);
    }
    fetchProducts();
  }, []);


  return (
    <div className="home-page">
      {showModalCart && (localStorageCart && localStorageCart.length > 0) && <CartOffCanvas />}
      <Header />
      {quantityResult > 0 ? <div className="home-container">
        <FilterAside />
        <CardsHome products={products} loading={loading} />
      </div>
        : null}
      <Footer />
    </div>
  );
}

export default Home;
