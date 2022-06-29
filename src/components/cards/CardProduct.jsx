import React, { useContext } from 'react';
import Context from '../../context/Context';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { FavoriteHeartButton } from '../../components'
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
    replaceSpecialChars
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
    <div className="card-product">
      <div className="card-body">
        <FavoriteHeartButton product={product} />
        <button
          className="link-product-detail"
          type="button"
          onClick={redirectProductDetails}>
          <img
            src={require(`../../images/products/1-${ replaceSpecialChars(
              product.name,
            ) }.jpeg`)}
            alt={product.name}
            className="thumbnail"
          />
          <div className="card-title">
            <h4>{product.name}</h4>
          </div>
          <div className="card-price">
            <h4>{product.price}</h4>
          </div>
        </button>
      </div>
      <div className="card-cart">
        <button
          type="button"
          onClick={addToCart}
          className="add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  ean: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default CardProduct;
