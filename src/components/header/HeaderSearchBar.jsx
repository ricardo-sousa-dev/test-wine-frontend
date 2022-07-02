import React, { useState, useContext } from 'react';
import Context from '../../context/Context';
import './css/HeaderSearchBar.css';

function SearchBar() {

  const {
    setResultSearchBar,
    products,
    searchBar,
    setSearchBar,
    setQuantityResult,
    setEmptyResult } = useContext(Context);

  const handleSearchBar = ({ target: { value } }) => {
    setSearchBar(value);
    if (value || value.length > 0) { // case search bar is not empty

      const productsFiltered = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase()) &&
        value !== '',
      )
      if (productsFiltered && productsFiltered.length > 0) { // case products exists and contains the search
        setEmptyResult(false);
        setResultSearchBar(productsFiltered);
        setQuantityResult(productsFiltered.length);

      } else { // case products doesn't exist
        setEmptyResult(true);
        setResultSearchBar(products)
        setQuantityResult(0);
      }

    } else {
      setEmptyResult(false);
      setResultSearchBar(products);
      setQuantityResult(products.length);
    }
  }

  const clearSearch = () => {
    setResultSearchBar(products);
    setSearchBar('');
    setEmptyResult(false);
  }

  return (
    <div className="searchBar">
      <div className="div-input">
        <input
          type="text"
          className="search-input"
          value={searchBar}
          onChange={handleSearchBar}
          placeholder='Buscar produto...'
        />
        <div className='div-button-clear-search'>
          {searchBar.length > 0
            ? <button
              className="button-clear-search"
              onClick={() => clearSearch()}>
              x
            </button>
            : null}
        </div>
      </div>
    </div >
  );
}

export default SearchBar;
