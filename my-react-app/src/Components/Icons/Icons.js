import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.scss';

function Icons(props) {
  return (
 <>
 <i className={`bi ${props.iconType} ${props.iconClass}`}></i>
 </>
  )
}


Icons.defaultProps={
    iconClass : 'icon__container',
}
export default Icons