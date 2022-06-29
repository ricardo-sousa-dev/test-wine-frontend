import React, { useContext, useMemo } from 'react';
import Context from '../../context/Context';
import { useNavigate, useLocation } from 'react-router';
import {HeaderSearchBar, CartButton, CardProduct} from '../';
import Logo from '../../images/logo-singelee.svg';
import { FaArrowLeft } from 'react-icons/fa';
import './css/Header.css';

function Header() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const {
    resultSearchBar,
    setResultSearchBar,
    setSelectedFavorite,
    setSearchBar
  } = useContext(Context);

  const clearSearch = (page) => {
    setResultSearchBar([]);
    navigate(page);
    setSelectedFavorite(true)
    document.getElementById('favorites').checked = false;
    setSearchBar('');
  }

  return (
    <>
      <div className="header" id="header">
        {location === '/' 
        ? <button onClick={() => clearSearch('/')} type="button" className="button-logo">
          <img src={Logo} className="logo" />
        </button> 
        : <FaArrowLeft className="arrow-left" onClick={()=> navigate(-1)}/>}
        <HeaderSearchBar />
        <CartButton />
      </div>
      {resultSearchBar.length > 0 ? (
        <div className="result-searchBar">
          <div className="clear-search-button">
            <button type="button" onClick={clearSearch}>Limpar pesquisa</button>
          </div>
          {resultSearchBar.map((product, i) => (
            <CardProduct key={i} product={product} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Header;
