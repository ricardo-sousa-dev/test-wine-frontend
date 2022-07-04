import React, { useState, useContext, useEffect } from 'react';
import Context from '../../context/Context';
import './css/CardsHome.css';
import CardProduct from './CardProduct';
import Loading from '../home/Loading';
import SweetPagination from "sweetpagination";
import SearchEmpty from '../header/SearchEmpty';

function CardsHome({ products, loading }) {

  const { searchBar, cardsHome } = useContext(Context);
  const [ currentPageData, setCurrentPageData ] = useState(new Array().fill());


  useEffect(() => {
    if (cardsHome && cardsHome.length > 0) {
      setCurrentPageData(cardsHome);
    }
    if (cardsHome && cardsHome.length === 0 && searchBar.length > 0) {
      setCurrentPageData([]);
    }
  }, [ cardsHome ]);

  if (loading) {
    return <Loading />
  }


  return (
    <div className="cards-home">
      <div className="quantity-searched">
        <span className="quantity">{
          cardsHome && cardsHome.length
        }</span> produtos encontrados
      </div>
      {cardsHome.length > 0 &&
          cardsHome.map((product, i) => <CardProduct key={i} product={product} />)}

      {cardsHome.length > 0 ? <SweetPagination
        currentPageData={setCurrentPageData}
        getData={cardsHome.length > 0 ? cardsHome : products}
        dataPerPage={12}
        navigation={true}
        getStyle={'pagination'}
      /> : null}
      {cardsHome.length === 0 ? <SearchEmpty /> : null}
    </div>
  );
}

export default CardsHome;
