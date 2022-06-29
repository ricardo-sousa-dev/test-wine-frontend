import React, { useState, useEffect, useContext, useMemo } from 'react';
import './css/CardSelectQuantityProduct.css';
import Context from '../../context/Context';
import formatCoin from '../../utils/formatCoin';

function SelectQuantityProduct(props) {
  const { product } = props;
  const { setShowModalCart, totalCart, setTotalCart} = useContext(Context);
  
  const [ sumPriceProduct, setSumPriceProduct ] = useState();
  const [ quantityInCart, setQuantityInCart ] = useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')));

  const findProduct = localStorageCart? localStorageCart.find(
    (productFind) => productFind.name === product.name,
  ):null;

  useEffect(() => { //update total price
    const arrayPricesCart = [];
    if(localStorageCart) {
      for (let index = 0; index < localStorageCart.length; index++) {
        const element = localStorageCart[ index ];
        arrayPricesCart.push(element.price * element.quantity);
      }
    }
    const totalPriceCart = (formatCoin((arrayPricesCart.reduce((a, b) => a + b, 0)) + 20))
    localStorage.setItem('totalPriceCart', JSON.stringify(totalPriceCart));
    setTotalCart(totalPriceCart);
  }, [ localStorageCart, totalCart, setTotalCart ]);

  useEffect(() => { //update quantity in cart
    const productInCart = localStorageCart ? localStorageCart.find((productCart) => productCart.name === product.name):null;
    setQuantityInCart(productInCart ? productInCart.quantity : 0);
    setSumPriceProduct(
      productInCart ? formatCoin(productInCart.quantity * product.price) : 0);
  }, [ quantityInCart, sumPriceProduct, localStorageCart, product ]);

  const decrementCart = () => {

    if (findProduct) {
      if (findProduct.quantity === 1) {
        findProduct.quantity = 0;
        localStorageCart.splice(localStorageCart.indexOf(findProduct), 1, findProduct);
        localStorage.setItem('cartProducts', JSON.stringify(localStorageCart));
        setQuantityInCart(findProduct.quantity);
        setSumPriceProduct(0);
      } else if (findProduct.quantity > 0) {
        findProduct.quantity -= 1;
        localStorageCart.splice(localStorageCart.indexOf(findProduct), 1, findProduct);
        localStorage.setItem('cartProducts', JSON.stringify(localStorageCart));
        setQuantityInCart(findProduct.quantity);
      }
    }

  !localStorageCart || localStorageCart.length === 0 ? setShowModalCart(false) : setShowModalCart(true);
  };

  const incrementCart = () => {
    setShowModalCart(true);

    if (!JSON.parse(localStorage.getItem('cartProducts'))) {
      const setProduct = product;
      setProduct.quantity = 1;
      localStorage.setItem('cartProducts', JSON.stringify([ setProduct ]));
      setQuantityInCart(1);
    } else {
      if (!findProduct) {
        const setProduct = product;
        setProduct.quantity = 1;
        localStorageCart.push(setProduct);
        localStorage.setItem('cartProducts', JSON.stringify(localStorageCart));
        setQuantityInCart(1);
      } else {
        findProduct.quantity += 1;
        localStorageCart.splice(localStorageCart.indexOf(findProduct), 1, findProduct);
        localStorage.setItem('cartProducts', JSON.stringify(localStorageCart));
        setQuantityInCart(findProduct.quantity);
      }
    }
  };

  return (
    <div className="select-quantity-product">
      <div className="quantity-product">
        <button
          className="subtract"
          value="subtract-cart"
          type="button"
          onClick={decrementCart}
        >
          -
        </button>
        <div className="description quantity">
          <span className="description">{quantityInCart}</span>
        </div>
        <button
          className="add"
          value="add-cart"
          type="button"
          onClick={incrementCart}
        >
          +
        </button>
      </div>
      <div className="total-product">
        {quantityInCart !== 0 ? <span>{sumPriceProduct}</span> : null}
      </div>
    </div>
  );
}

export default SelectQuantityProduct;
