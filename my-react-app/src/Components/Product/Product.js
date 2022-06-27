import React from 'react';
import Products from '../Products/Products';

function Product(props) {

  return (
    <>
    <Products cardSrc={props.cardSrc}/>
    </>
  )
}

export default Product;