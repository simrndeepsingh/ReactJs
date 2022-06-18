import React from 'react'
import './Cta.scss';
import {useRef} from 'react';

function Cta(props) {
    const ctaLink = props.ctaType === 'link' ? true : false;
    const btnElement = useRef(null);
  const handleBtn = (btnElement) => {
    props.btnEvent(btnElement);
  }
  return (
    <>
    {ctaLink ? (
        <a href={props.ctaHref} className={props.ctaStyle} title={props.ctaLabel} target={props.ctaTarget} rel={props.ctaTarget === '_blank'  ? "noopener noreferrer" : ''}>{props.ctaLabel}</a>
    ) : 
        <button type="button" className={props.ctaStyle} title={props.ctaLabel} onClick={handleBtn} ref={btnElement}>{props.ctaLabel}</button>
    }
    </>
  )
}
Cta.defaultProps = {
  ctaType:'button',
  ctaStyle:'btn bg-default-blue border-0 text-white rounded-0 px-5 py-2 d-flex mx-auto text-uppercase',
  ctaLabel:'Submit',
  ctaHref:'/',
  ctaTarget:"_blank",
  btnEvent:'',
};
export default Cta