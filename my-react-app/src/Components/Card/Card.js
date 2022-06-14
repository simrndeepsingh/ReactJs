import React from 'react';

function Card(props) {
    const isBgCard  = props.bgCard ? true :false;
  return (
    <>
    {!isBgCard ? (
    <div className={`card ${props.cardClass}`}>
    <div className="card-body">
      <h5 className="card-title">Card Component</h5>
      <h6 className="card-subtitle mb-2 text-muted">Card Title</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
    ) :
  <div className={`card text-white ${props.bgColor} mb-3 ${props.cardClass}`}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
}
</>
  )
}

export default Card;