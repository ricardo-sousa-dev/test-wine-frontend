import React, { useContext, useMemo } from 'react';
import Context from '../../context/Context';
import { useNavigate, useLocation } from 'react-router';
import { HeaderSearchBar, CartButton, CardProduct } from '../';
import Logo from '../../images/logo-wine.png';
import { FaArrowLeft } from 'react-icons/fa';
import LoginButton from '../../images/login-wine.png';
import SearchButton from '../../images/search-wine.png';
import Nav from 'react-bootstrap/Nav';
import './css/Header.css';

function Header() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const {
    resultSearchBar,
    setResultSearchBar,
    setSelectedFavorite,
    setSearchBar,
    setShowSearchBar,
    showSearchBar,
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
          : <FaArrowLeft className="arrow-left" onClick={() => navigate(-1)} />}
        <Nav className="me-auto" activeKey={location}>
          <Nav.Item>
            <Nav.Link href="#">Clube</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Loja</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Produtores</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Ofertas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Eventos</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="header-buttons">
          <button className="search-button">
            <img src={SearchButton} className="search-icon" alt="Buscar" />
          </button>
          <button className="login-button">
            <img className="login-icon" src={LoginButton} alt="Login" />
          </button>
          <CartButton />
        </div>
      </div>
      {showSearchBar ? <HeaderSearchBar /> : null}
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
