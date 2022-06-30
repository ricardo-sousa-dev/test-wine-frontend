import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import Carousel from 'react-bootstrap/Carousel';
import './css/CarouselProduct.css';

function CarrouselProductPage(props) {
  const {product} = props;

  const { replaceSpecialChars } = useContext(Context);

  return (
    <Carousel className="carousel" slide={false} >
      <Carousel.Item className="carousel-item">
        {/* <img
          className="image-product-detail"
          alt={product.name}
          src={require(`../../images/products/1-${ replaceSpecialChars(
            product.name,
          ) }.jpeg`)}
        /> */}
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        {/* <img
          className="image-product-detail"
          alt={product.name}
          src={require(`../../images/products/2-${ replaceSpecialChars(
            product.name,
          ) }.jpeg`)}
        /> */}
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        {/* <img
          className="image-product-detail"
          alt={product.name}
          src={require(`../../images/products/3-${ replaceSpecialChars(
            product.name,
          ) }.jpeg`)}
        /> */}
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        {/* <img
          className="image-product-detail"
          alt={product.name}
          src={require(`../../images/products/4-${ replaceSpecialChars(
            product.name,
          ) }.jpeg`)}
        /> */}
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        {/* <img
          className="image-product-detail"
          alt={product.name}
          src={require(`../../images/products/5-${ replaceSpecialChars(
            product.name,
          ) }.jpeg`)}
        /> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselProductPage;
