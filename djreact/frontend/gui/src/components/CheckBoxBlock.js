import React from 'react';
import CheckBox from './CheckBox';

const CheckBoxBlock = ({name, options, toggleCheckbox}) => {
  return(
    <div>
      <h1>{name}</h1>
      {
          options.map((option, i) => {
            return (<CheckBox key= {i} name={option} id={name+i} toggle={toggleCheckbox} />);
          })
      
      }
    </div>
  )
}
  
  export default CheckBoxBlock;