import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Context from '../../context/Context';
import './css/CardsHome.css';
import CardProduct from './CardProduct';
import Loading from '../home/Loading';

function CardsHome() {
  const { database } = useContext(Context);
  
  const [ loading, setLoading ] = useState(false);
  
  useEffect(() => {
   
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(database.products));
    }
    setLoading(false);
  }, []);

  return (<>
    {loading ? <Loading /> : <div className="categories" id="categories">
      {database.categoryProducts.map((category) => (
        category !== 'Revenda' ?
          <div key={category}>
            <h2 className="mb-3 col-6 category">{category}</h2>
            <div className="cards">
              {database.products.map((product) =>
                product.categories.some((cat) => cat === category) ? (
                  <CardProduct key={product.sku} product={product} />
                ) : null,
              )}
            </div>
          </div> : null
      ))}
      <hr />
    </div>}
    </>
  );
}

// CardsHome.propTypes = {
//   database: PropTypes.shape({
//     categoryProducts: PropTypes.arrayOf(PropTypes.string),
//     products: PropTypes.arrayOf(PropTypes.object),
//   }).isRequired,
// };

export default CardsHome;
