import React, { useState } from 'react';
import './css/CardsHome.css';
import CardProduct from './CardProduct';
import Loading from '../home/Loading';
import SweetPagination from "sweetpagination";

function CardsHome({ products, loading }) {

  const [ currentPageData, setCurrentPageData ] = useState(new Array().fill());

  // Example items, to simulate fetching from another resources.
  const items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];

  if (loading) {
    return <Loading />
  }

  console.log(products)
  return (
    <div className="cards-home">
      <div className="quantity-searched">
        <span className="quantity">X</span> produtos encontrados
      </div>
      {currentPageData && currentPageData.map((product, i) => <CardProduct key={i} product={product} />)}
        <SweetPagination
          currentPageData={setCurrentPageData}
          getData={products}
          dataPerPage={6}
          navigation={true}
          getStyle={'pagination'}
        />

    </div>
  );
}

export default CardsHome;
