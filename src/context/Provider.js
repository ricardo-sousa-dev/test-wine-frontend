import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Database from '../services/database';

function Provider({ children }) {
  const [ database, setDatabase ] = useState(Database);
  const [ resultSearchBar, setResultSearchBar ] = useState('');
  const [ viewProductDetails, setViewProductDetails ] = useState('');
  const [ totalCart, setTotalCart ] = useState(0);

  const [ products, setProducts ] = useState([]);
  const [ productsCart, setProductsCart ] = useState([]);
  const [ quantityCart, setQuantityCart ] = useState(0);
  const [ selectedFavorite, setSelectedFavorite ] = useState(true);
  const [showModalCart, setShowModalCart] = useState(false);
  const [searchBar, setSearchBar] = useState('');

  const providerValue = {
    database, setDatabase,
    resultSearchBar, setResultSearchBar,
    viewProductDetails, setViewProductDetails,
    totalCart, setTotalCart,
    products, setProducts,
    searchBar, setSearchBar,
    productsCart, setProductsCart,
    quantityCart, setQuantityCart,
    selectedFavorite, setSelectedFavorite,
    showModalCart, setShowModalCart
  };

  return (
    <Context.Provider value={ providerValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
