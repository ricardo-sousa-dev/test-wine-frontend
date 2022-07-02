import React, { useContext } from 'react';
import Context from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import formatCoin from '../../utils/formatCoin';
import blackWine from '../../images/black-wine.png';
import './css/CardProduct.css';

function CardProduct(props) {
  const { product } = props
  const navigate = useNavigate();

  const {
    setShowModalCart,
    quantityCart,
    setQuantityCart,
    setViewProductDetails,
    setResultSearchBar,
  } = useContext(Context);

  const redirectProductDetails = () => {
    setViewProductDetails(product);
    // localStorage.setItem('viewProductDetails', JSON.stringify(product));
    setResultSearchBar([]);
    navigate(`/product/${ product.sku }`, { state: { product: product } });
  };

  const addToCart = () => {
    setShowModalCart(true);

    if (!JSON.parse(localStorage.getItem('cartProducts')) || JSON.parse(localStorage.getItem('cartProducts')).length === 0) {
      const setProduct = product;
      setProduct.quantity = 1;
      localStorage.setItem('cartProducts', JSON.stringify([ setProduct ]));
      setQuantityCart(quantityCart + 1);

    } else {
      const findProduct = JSON.parse(localStorage.getItem('cartProducts')).find(
        (productFind) => productFind.name === product.name,
      );

      if (!findProduct) {
        const setProduct = product;
        setProduct.quantity = 1;
        const newArray = JSON.parse(localStorage.getItem('cartProducts')).filter(
          (productFilter) => productFilter.name !== setProduct.name,
        );
        newArray.push(setProduct);
        localStorage.setItem('cartProducts', JSON.stringify(newArray));
        setQuantityCart(quantityCart + 1);
      }

      if (findProduct) {
        const setProduct = findProduct;
        setProduct.quantity += 1;
        const newArray = JSON.parse(localStorage.getItem('cartProducts')).filter(
          (productFilter) => productFilter.name !== setProduct.name,
        );
        newArray.push(setProduct);
        localStorage.setItem('cartProducts', JSON.stringify(newArray));
      }
    }
  };

  return (
    <div className="card-container">
      <div className="card-product">
        <div className="card-body">
          <div className="card-black-div">
            <img className="card-black" src={blackWine} alt="Black Wine" />
          </div>
          <button
            className="link-product-detail"
            type="button"
            onClick={redirectProductDetails}>
            <img
              src={product.image}
              alt={product.name}
              className="thumbnail"
            />
            <div className="card-infos">
              <div className="card-title">
                <h4>{product.name}</h4>
              </div>
              <div className="card-price">
                <div className="card-discount">
                  <h4 className="card-discount-value">{formatCoin(((product.discount * product.price) / 100).toFixed(2))}</h4>
                  <h4 className="card-discount-percent">{product.discount}% OFF</h4>
                </div>
                <div className="card-partner">
                  <p className="card-partner-title">SÓCIO WINE</p>
                  <div className="card-partner-destak">
                    <p className="card-partner-coin">R$</p>
                    <p className="card-partner-value"> {product.priceMember.toFixed()}</p>
                    <p className="card-partner-cents">,{product.priceMember.toFixed(2).toString().split(".", 2)[ 1 ]}</p>
                  </div>
                </div>
                <h4 className="card-partner-nopartner">NÃO SÓCIO {formatCoin(product.priceNonMember.toFixed(2))}</h4>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="card-cart">
        <button
          type="button"
          onClick={addToCart}
          className="add-to-cart"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default CardProduct;
