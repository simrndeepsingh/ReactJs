import React from 'react';
import Cta from '../CTA/Cta';
import { useState } from 'react';

function Card(props) {
  const [quantity,setHandle] = useState(0);
  const quantityHandle = (btnElement)=>{
    setHandle(quantity+1);
     disabledBtn(btnElement);

  }
  const disabledBtn = (btnElement)=>{
    quantity >=1 ? btnElement.target.disabled = true : btnElement.target.disabled=false;
  }
  
  return (
    <>
      <div className={`col-md-${props.size}`}>
        <div className="card mb-3">
          <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} title={props.imgTitle} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text product__price">$100.00 USD</p>
            <small>Quantity {quantity}</small>
          </div>
        </div>
        <Cta ctaStyle="btn bg-default-blue border-0 text-white rounded-0 px-5 py-2 d-flex mx-auto text-uppercase" ctaLabel="Add to cart" btnEvent={quantityHandle}/>
      </div>
</>
  )
}

Card.defaultProps={
  imgAlt: 'Product Image',
  size:'3'
}

export default Card;