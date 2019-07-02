import React from 'react';

const Recipe = ({ name, author }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default Recipe;
