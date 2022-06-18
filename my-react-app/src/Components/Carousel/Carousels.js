import React from 'react';
import './Carousels.scss';
import Cta from '../CTA/Cta';
function Carousels(props) {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active bg-default-blue">
      <div className="position-absolute carousel__img--container container mx-auto">
      <img src={props.carouselImgSrc} className="carousel__img" alt={props.carouselImgAlt} title={props.carouselImgAlt} />
      </div>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="display-1 hero__title">New Arrival</h1>
        <Cta ctaType='link' ctaHref="/" ctaStyle="cta__link cta__pill text-decoration-none bg-default-blue text-white text-uppercase py-3 px-5"  ctaLabel="Buy Now" ctaTarget="_blank"/>
      </div>
    </div>
  </div>
</div>
  )
}

export default Carousels;