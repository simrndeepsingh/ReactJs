import React from 'react';
function FullContainer(props) {
  return (
    <section className={`container-fluid ${props.fullContainerClass}`}>{props.children}</section>
  )
}

export default FullContainer;