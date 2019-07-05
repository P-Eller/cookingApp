import React from 'react';
import { Link } from "react-router-dom";

const Recipe = ({ id,name, author, tags }) => {

    tags = tags=JSON.parse(tags.replace(/'/g,'"') );
    
  
  return (
    <div className="card" style={{width: 18 + 'rem'}}>
      <img src="https://img-corp.net/assets/img/IMG_logo_big_blue.png" className="card-img-top" alt="https://img-corp.net/assets/img/IMG_logo_big_blue.png"/>
      <div className="card-body">
      <Link className="btn btn-primary" to={'/recipes/'+id}>{name}</Link>
        <p className="card-text">{"Author: " + author}</p>

        <div>
          {
          tags.map((tag, i) => {
              return (<button key={i} type="button" className="btn btn-outline-success">{tag}</button>)
            })
          }
        </div>  
      </div>
    </div>
  );
}

export default Recipe;

/*
        {
          tags.map((tag, i) => {
            return (
              <button type="button" class="btn btn-outline-success">{tag}</button>
            );
          })
        }
*/

/*
const Recipe = ({ name, author, tags }) => {
  return (
    <div className="card" style="width: 18rem;">
      <img src="https://img-corp.net/assets/img/IMG_logo_big_blue.png" className="card-img-top" alt="https://img-corp.net/assets/img/IMG_logo_big_blue.png"/>
      <div className="card-body">
      <h5 className="card-title">{name}</h5>
        <p className="card-text">{"Author: " + author}</p>
        <p className="card-text">{"Tags: "+ tags}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}
*/
