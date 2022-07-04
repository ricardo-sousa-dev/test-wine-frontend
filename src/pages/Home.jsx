import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import Context from '../context/Context';
import Loading from '../components/home/Loading';
import './css/Home.css';

import {
  Header,
  CardsHome,
  Footer,
  CartOffCanvas,
  FilterAside
} from '../components';

function Home() {
  const localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')));

  const [ loading, setLoading ] = useState(true);

  const {
    showModalCart,
    setShowModalCart,
    products,
    setProducts,
    setQuantityResult,
    setCardsHome,
    cardsHome
  } = useContext(Context);

  useEffect(() => {
    setShowModalCart(false);

    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get('https://wine-back-test.herokuapp.com/products');
      setProducts(res.data.items);
      setCardsHome(res.data.items);
      setQuantityResult(res.data.items.length);
      setLoading(false);
    }
    fetchProducts();
  }, []);


  return (<>
    {showModalCart && (localStorageCart && localStorageCart.length > 0) && <CartOffCanvas />}
    <Header />
    <div className="home-page">
      <div className="home-body">
        {products && products.length > 0
          ? <div className="home-cards">
            <FilterAside />
            <CardsHome products={cardsHome} loading={loading} />
          </div>
          : <Loading />}
      </div>
      <Footer />
    </div>
  </>
  );
}

export default Home;
