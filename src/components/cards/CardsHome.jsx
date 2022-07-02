import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import './css/CardsHome.css';
import CardProduct from './CardProduct';
import Loading from '../home/Loading';

function CardsHome() {
  const { products } = useContext(Context);
  const [ loading, setLoading ] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  // useEffect(cardsHome)

  return (
      <div className="cards-home">
        <div className="quantity-searched">
          <span className="quantity">X</span> produtos encontrados
        </div>
        {products.length > 0 ? products.map((product) =>
          <CardProduct key={product.sku} product={product} />
        ) : <Loading />}
        <div className="pagination">
     
      </div>
      </div>
  );
}

export default CardsHome;
