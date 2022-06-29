import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import { CardSelectQuantityProduct, DeleteProductCartButton, ClearCartButton} from '../../components';
import './css/CartListProducts.css';
import { useNavigate } from 'react-router-dom';

function CartListProducts() {

  const navigate = useNavigate();
  const { setViewProductDetails, replaceSpecialChars, setResultSearchBar} = useContext(Context);

  let localStorageCart = JSON.parse(localStorage.getItem('cartProducts')) || [];
  const [ cartProducts ] = useState(localStorageCart);

  const redirectProductDetails = (product) => {
    setViewProductDetails(product);
    // localStorage.setItem('viewProductDetails', JSON.stringify(product));
    setResultSearchBar([]);
    navigate(`/product/${product.sku}`,{ state: {product:product}});
  };

  return (
    <div className="cart-list-products">
        <ClearCartButton />
      <div className="list-products">
        {localStorageCart && localStorageCart.length > 0 ? <ul>
          {localStorageCart.map((product) =>
          (
            <li className="li-product-cart" key={product.sku} >
              <div className="info-product">
                <button
                  className="product-detail-cart"
                  type="button"
                  onClick={() => redirectProductDetails(product)}>
                  <img
                    className="img-product-cart"
                    src={require(`../../images/products/1-${ replaceSpecialChars(
                      product.name,
                    ) }.jpeg`)}
                    alt={product.name}
                  />
                </button>
                <div className="detail-product">
                  <div className='product-delete-button'>
                    <DeleteProductCartButton product={product} />
                  </div>
                  <button
                    className="product-detail-cart"
                    type="button"
                    onClick={() => redirectProductDetails(product)}>
                    <div className="name-product-cart">
                      <h3>{product.name}</h3>
                    </div>
                    <p className="price-product-cart">
                      Preço: {product.price}
                    </p>
                  </button>
                  <div className="sum-product-quantity-value">
                    <CardSelectQuantityProduct key={product.name} product={product} />
                  </div>
                </div>
              </div>
              {cartProducts.length > 1 ? <hr className="divisor-item" /> : null}
            </li>
          ))}
        </ul> : null}
      </div>

    </div>
  );
}

export default CartListProducts;
