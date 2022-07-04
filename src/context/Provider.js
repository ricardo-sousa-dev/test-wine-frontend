import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [ resultSearchBar, setResultSearchBar ] = useState('');
  const [ viewProductDetails, setViewProductDetails ] = useState('');
  const [ totalCart, setTotalCart ] = useState(0);
  const [ products, setProducts ] = useState(null);
  const [ productsCart, setProductsCart ] = useState([]);
  const [ quantityCart, setQuantityCart ] = useState(0);
  const [ selectedFavorite, setSelectedFavorite ] = useState(true);
  const [ showModalCart, setShowModalCart ] = useState(false);
  const [ searchBar, setSearchBar ] = useState('');
  const [ showSearchBar, setShowSearchBar ] = useState(false);
  const [ filterPrice, setFilterPrice ] = useState(0);
  const [ quantityResult, setQuantityResult ] = useState(0);
  const [ emptyResult, setEmptyResult ] = useState(false);
  const [ cardsHome, setCardsHome ] = useState([]);
  const [ searchRadio, setSearchRadio ] = useState(0);

  const providerValue = {
    cardsHome, setCardsHome,
    searchRadio, setSearchRadio,
    emptyResult, setEmptyResult,
    quantityResult, setQuantityResult,
    filterPrice, setFilterPrice,
    resultSearchBar, setResultSearchBar,
    viewProductDetails, setViewProductDetails,
    totalCart, setTotalCart,
    products, setProducts,
    searchBar, setSearchBar,
    productsCart, setProductsCart,
    quantityCart, setQuantityCart,
    selectedFavorite, setSelectedFavorite,
    showModalCart, setShowModalCart,
    showSearchBar, setShowSearchBar,
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
