import React from 'react';
import CheckBoxBlock from './CheckBoxBlock';
import {recipeFilters} from '../recipeFilters';

const FilterBar = ({toggleCheckbox}) => {
    return (
        <div>
        {
          recipeFilters.map((recipeFilter, i) => {
            return (
                
                <CheckBoxBlock
                  key={i}
                  id={recipeFilter.id}
                  name={recipeFilter.name}
                  options={recipeFilter.options}
                  toggleCheckbox={toggleCheckbox}

                  />
              );

          })
        }
        </div>
    );
  }
  
export default FilterBar;