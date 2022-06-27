import React from 'react';
import Products from '../Components/Products/Products';
import {Outlet} from 'react-router-dom';

function ProductCategories(props) {
  return (
    <>
      <Products cardSrc={props.cardSrc} productId="home-appliance" productTitle="Television" productDesc="This is the television product"/>
      <Products cardSrc={props.cardSrc} productId="electronics" productTitle="Mobile" productDesc="This is the Mobile Desc"/>
      <Products cardSrc={props.cardSrc} productId="kithcen" productTitle="Grocery" productDesc="This is the Grocery product"/>
      <Outlet />
    </>
  )
}

export default ProductCategories;