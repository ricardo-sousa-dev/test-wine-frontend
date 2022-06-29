import React from 'react';
import './css/CartShipping.css';

function CartEmpt() {
  return (
    <div className="cart-shipping">
      <h2>Envio:</h2>
      <div className="cart-shipping-details">
        <div className="shipping-company">
          <p>Correios</p>
        </div>
        <div className="shipping-infos">
          <div className="shipping-timing">
            <p>Envio Padrão:</p>
            <p>5 dias úteis</p>
          </div>
          {/* <div className="shipping-price">
          </div> */}
          <div className="shipping-select">
            <span>R$ 20,00</span>
            <button>
              <i className="fas fa-check-square" />
            </button>
          </div>
        </div>
      <hr />
      </div>
    </div>
  );
}

export default CartEmpt;
