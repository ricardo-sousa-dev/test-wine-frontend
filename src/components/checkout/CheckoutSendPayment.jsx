import React from 'react';
import './css/CheckoutSendPayment.css';

function CheckoutSendPayment() {
  let totalPriceCart = JSON.parse(localStorage.getItem('totalPriceCart')) || 0;

  return (
    <div className="checkout-send-payment">
      <h2>Total da compra com frete: <span>R$ {totalPriceCart}</span></h2>
      <div className="button-send-payment">
        <button type="button">
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default CheckoutSendPayment;
