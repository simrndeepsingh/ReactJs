import React from 'react';
import {Link} from 'react-router-dom';

function Products(props) {
  return (
      <>
          <div className="card col-md-4" id={props.productId}>
              <img src={props.cardSrc} className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{props.productTitle}</h5>
                  <p className="card-text">{props.productDesc}</p>
                  <Link to="/product-categories/product" className="btn btn-primary stretched-link">Go somewhere</Link>
              </div>
          </div>
      </>
  )
}
Products.defaultProps={
    productId:''
}
export default Products;