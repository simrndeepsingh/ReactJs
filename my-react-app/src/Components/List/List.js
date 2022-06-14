import React from 'react';

function List(props) {
  return (
    <li className={props.classStyle}>{props.children}</li>
  )
}

export default List;