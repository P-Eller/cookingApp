import React from 'react';

const Recipe = ({ name, author, tags }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <p>{"Author: " + author}</p>
        <p>{"Tags: "+ tags}</p>
      </div>
    </div>
  );
}

export default Recipe;
