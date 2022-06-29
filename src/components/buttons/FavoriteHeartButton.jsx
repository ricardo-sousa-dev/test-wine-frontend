import React, { useState, useMemo, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import './css/FavoriteHeartButton.css'

function FavoriteHeartButton(props) {
  const { product } = props;

  const [ isFavorite, setIsFavorite ] = useState(false);

  const favorites = useMemo(() => JSON.parse(localStorage.getItem('favorites')) || [], []);

  useEffect(() => {
    if (favorites && favorites.length > 0) {
      const isFavorite = favorites.find((favorite) => favorite.sku === product.sku);
      setIsFavorite(!!isFavorite);
    }
  }, [ favorites, product ]);

  const addFavorite = () => {
    if (!JSON.parse(localStorage.getItem('favorites')) || JSON.parse(localStorage.getItem('favorites')).length === 0) {
      const setProduct = product;
      localStorage.setItem('favorites', JSON.stringify([ setProduct ]));
      setIsFavorite(true);
    } else {
      const findProduct = JSON.parse(localStorage.getItem('favorites')).find(
        (productFind) => productFind.name === product.name,
      );

      if (!findProduct) {
        const setProduct = product;
        const newArray = JSON.parse(localStorage.getItem('favorites')).filter(
          (productFilter) => productFilter.name !== setProduct.name,
        );
        newArray.push(setProduct);
        localStorage.setItem('favorites', JSON.stringify(newArray));
        setIsFavorite(true);
      } else {
        const newArray = JSON.parse(localStorage.getItem('favorites')).filter(
          (productFilter) => productFilter.name !== findProduct.name,
        );
        localStorage.setItem('favorites', JSON.stringify(newArray));
        setIsFavorite(false);
      }
    }
  };

  return (
    <div className="icon-heart">
      <button type="button" onClick={addFavorite} className="set-favorite">
        {
          isFavorite ?
            <FaHeart style={{ fill: 'red', cursor: 'pointer', fontSize: '20px' }} /> :
            <FaHeart style={{ fill: 'rgba(128, 128, 128, 0.55)', cursor: 'pointer', fontSize: '20px' }} />
        }
      </button>
    </div>
  )
}

export default FavoriteHeartButton;



