import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import './css/CardsHome.css';
import CardProduct from './CardProduct';
import Loading from '../home/Loading';

function CardsHome() {
  const { database } = useContext(Context);

  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(database));
    }
    setLoading(false);
  }, []);

  return (
      <div className="cards-home">
        <div className="quantity-searched">
          <span className="quantity">X</span> produtos encontrados
        </div>
        {database.length > 0 ? database.map((product) =>
          <CardProduct key={product.sku} product={product} />
        ) : <Loading />}
      </div>
  );
}

export default CardsHome;
