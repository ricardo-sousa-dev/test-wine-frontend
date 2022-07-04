import React, { useContext } from 'react';
import Context from '../../context/Context';
import './css/FilterAside.css';

export default function FilterAside() {
  const { products, setCardsHome } = useContext(Context);

  const filterPrice = (event) => {
    let price = event.target.value;
    let result;

    switch (price) {
      case '1':
        result = products.filter((product) => product.priceMember <= 40);
        result.length > 0 ? setCardsHome(result) : setCardsHome([]);
        break;
      case '2':
        result = products.filter((product) => product.priceMember > 40 && product.priceMember <= 60);
        result.length > 0 ? setCardsHome(result) : setCardsHome([]);
        break;
      case '3':
        result = products.filter((product) => product.priceMember > 60 && product.priceMember <= 100);
        result.length > 0 ? setCardsHome(result) : setCardsHome([]);
        break;
      case '4':
        result = products.filter((product) => product.priceMember > 100 && product.priceMember <= 200);
        result.length > 0 ? setCardsHome(result) : setCardsHome([]);
        break;
      case '5':
        result = products.filter((product) => product.priceMember > 200 && product.priceMember <= 500);
        result.length > 0 ? setCardsHome(result) : setCardsHome([]);
        break;
      case '6':
        result = products.filter((product) => product.priceMember > 500);
        result.length > 0 ? setCardsHome(result) : setCardsHome([]);
        break;
      default:
        break;
    }
  }

  return (
    <div className="filter-aside">
      <h3>Refine sua busca</h3>
      <h4>Por preço</h4>
      <div className="radio-buttons" >
        <label>
          <input type="radio" id="price" name="price" value="1" onChange={filterPrice} />
          Até R$40
        </label>
        <label>
          <input type="radio" id="price" name="price" value="2" onChange={filterPrice} />
          R$40 A R$60
        </label>
        <label>
          <input type="radio" id="price" name="price" value="3" onChange={filterPrice} />
          R$60 A R$100
        </label>
        <label>
          <input type="radio" id="price" name="price" value="4" onChange={filterPrice} />
          R$100 A R$200
        </label>
        <label>
          <input type="radio" id="price" name="price" value="5" onChange={filterPrice} />
          R$200 A R$500
        </label>
        <label>
          <input type="radio" id="price" name="price" value="6" onChange={filterPrice} />
          Acima de R$500
        </label>
      </div>
    </div>
  )
}