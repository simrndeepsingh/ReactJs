import React from 'react';
import Icons from '../Icons/Icons';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import './IconCard.scss';
function IconCard(props) {
    
  return (
    <>
      <div className="col-md-3 icon__card--container">
        <div className="d-flex align-items-center gap-2 my-4 border-end">
          {props.iconType.length > 0 &&
            <Icons iconType={`bi ${props.iconType} ${props.iconClass}`}></Icons>
          }
        <div className="icon__card--desc">
          <h2 className="text-black icon__card--title">
            {props.iconTitle}
          </h2>
          <p className="text-muted icon__card--sub-title mb-0">
            {props.iconSubTitle}
          </p>
        </div>
        </div>
      </div>
    </>
  )
}

IconCard.defaultProps = {
  iconType:'',
  iconTitle:'Please Set Title',
  iconSubTitle:'Please Set Subtitle'
};

export default IconCard;