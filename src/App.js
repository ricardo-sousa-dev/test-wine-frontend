import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home, ProductPage, Cart, Checkout } from './pages';
import { ScrollToTop } from './components';
import Provider from '../src/context/Provider';

function App() {
  return (
    <Provider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} title="Home" />
          <Route exact path="/cart" element={<Cart />} title="Carrinho de Compras" />
          <Route exact path="/product/:id" element={<ProductPage />} title="Detalhes do Produto" />
          <Route path="/checkout" element={<Checkout />} title="Checkout" />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
