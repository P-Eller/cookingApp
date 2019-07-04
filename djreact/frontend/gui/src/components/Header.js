import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="btn btn-primary" to={''}>Home</Link>
                </li>
            </ul>
        </div>
    )

}

export default Header;