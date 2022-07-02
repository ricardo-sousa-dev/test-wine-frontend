import React, { useContext, useMemo, useEffect} from 'react';
import Context from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import CartWine from '../../images/cart-wine.png'; 
import './css/GoToButton.css';

function GoToButton() {
  const navigate = useNavigate();

  let localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')));

  const { quantityCart, setQuantityCart, setResultSearchBar, setSelectedFavorite, setSearchBar} = useContext(Context);

  useEffect(() => {
    if (localStorageCart) {
      setQuantityCart(localStorageCart.length);
    }
  }, [ localStorageCart, setQuantityCart ]);

  const clearSearch = (page) => {
    setResultSearchBar([]);
    navigate(page);
    setSelectedFavorite(true)
    setSearchBar('');
  }

  return (
    <button onClick={() => clearSearch('/cart')} type='button' className="button-cart">
      <div className="container-quantity-cart">
        {localStorageCart && localStorageCart.length !== 0 ? <div className="quantity-products-cart">
          {quantityCart}
        </div> : null}
      </div>
      <img src={CartWine} alt="Carrinho"  className="fa-shopping-cart"/>
    </button>
  );

};


export default GoToButton;
