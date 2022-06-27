import React from 'react';
import Product from '../../Components/Product/Product';

function ProductPage(props) {
  return (
    <Product cardSrc={props.cardSrc} />

  )
}

export default ProductPage;