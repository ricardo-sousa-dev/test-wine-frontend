import React, { useContext, useMemo } from 'react';
import Context from '../../context/Context';
import { FaTrashAlt } from "react-icons/fa"; 
import './css/DeleteProductCartButton.css';

function DeleteProductCartButton(props) {
  const { product } = props;
  const { setTotalCart } = useContext(Context);

  const localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')));

  const deleteProduct = () => {
    const newArray = localStorageCart.filter(
      (productCart) => productCart.name !== product.name,
    );
    localStorage.setItem('cartProducts', JSON.stringify(newArray));
    setTotalCart(0);
  }

  return localStorageCart.length > 0 ?
    <button
      className="delete-product-cart-button"
      type="button"
      onClick={deleteProduct}
    >
      <FaTrashAlt className="delete-product-cart-button-icon" />
    </button> : null;
};


export default DeleteProductCartButton;
