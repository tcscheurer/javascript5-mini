import React from 'react';

export default function Movie(props) {
  return (
      <p>{props.movie}</p>
  )  
}

// again, should receive props and are referenced with props.movie
// also made the functional component a default export