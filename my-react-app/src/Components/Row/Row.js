import React from 'react'

function Row(props) {
  return (
    <div className={`row ${props.rowClass}`}>{props.children}</div>
  )
}

Row.defaultProps = {
  rowClass:''
};

export default Row;