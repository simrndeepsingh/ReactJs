import React from 'react';
import './Carousels.scss';
function Carousels(props) {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active bg-dark">
      <div className="carousel-caption d-none d-md-block">
        <img src={props.carouselImgSrc} className="w-75" alt={props.carouselImgAlt} title={props.carouselImgAlt} />
        <h1>React App</h1>
        <p>Hero Component</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Carousels;