import React, { useContext, useRef, useEffect, useState, useMemo } from 'react';
import Context from '../../context/Context';
import './css/CartOffCanvas.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import CartListProducts from './CartListProducts';
import GoToButton from '../buttons/GoToButton';

function CartOffCanvas() {

  const ref = useRef()
  const { showModalCart, setShowModalCart } = useContext(Context);

  useOnClickOutside(ref, () => setShowModalCart(false));

  return (
    <div className="cart-offCanvas" show={showModalCart ? 1 : 0}>
      <div className="cart-offCanvas-container" >
        <div
          ref={ref}
          className="cart-offCanvas-content">
          <div className="cart-offCanvas-header">
            <button variant="secondary" onClick={() => setShowModalCart(false)} className="cart-offCanvas-content-clear">
              X
            </button>
            <h1>Carrinho de Compras</h1>
          </div>
          <hr />
          <CartListProducts />
          <GoToButton route="/cart" title="Finalizar Compra" icon="FaCreditCard" />
        </div>
      </div>
    </div>
  );
}

export default CartOffCanvas;