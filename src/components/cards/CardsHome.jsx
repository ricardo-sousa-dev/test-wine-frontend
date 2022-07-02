import React, { useState, useContext, useEffect } from 'react';
import Context from '../../context/Context';
import './css/CardsHome.css';
import CardProduct from './CardProduct';
import Loading from '../home/Loading';
import SweetPagination from "sweetpagination";
import SearchEmpty from '../header/SearchEmpty';

function CardsHome({ products, loading }) {

  const { resultSearchBar, searchBar, quantityResult } = useContext(Context);
  const [ currentPageData, setCurrentPageData ] = useState(new Array().fill());

  useEffect(() => {
    if (resultSearchBar.length > 0) {
      setCurrentPageData(resultSearchBar);
    }
    if (resultSearchBar.length === 0 && searchBar.length > 0) {
      setCurrentPageData([]);
    }
    console.log(currentPageData);
  }, [ resultSearchBar ]);

  if (loading) {
    return <Loading />
  }

  return (
    <div className="cards-home">
      <div className="quantity-searched">
        <span className="quantity">{searchBar.length > 0 ? resultSearchBar.length : products.length}</span> produtos encontrados
      </div>
      {(currentPageData.length > 0 && currentPageData.map((product, i) => <CardProduct key={i} product={product} />))
        || (resultSearchBar.length > 0 && resultSearchBar.map((product, i) => <CardProduct key={i} product={product} />))}

      <SweetPagination
        currentPageData={setCurrentPageData}
        getData={resultSearchBar.length > 0 ? resultSearchBar : products}
        dataPerPage={12}
        navigation={true}
        getStyle={'pagination'}
      />

    </div>
  );
}

export default CardsHome;
