import React from 'react';
import './CheckBoxBlock.css';

const CheckBox = ({name , id}) => {

  return (
    <div className="list-group">
      
        <input type="checkbox" name="CheckBoxInputName" value="Value1" id={id} />
        <label className="list-group-item" htmlFor={id}>{name}</label>

    </div>
  );
  
}

export default CheckBox;