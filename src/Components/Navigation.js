import React from "react";
import {Link} from 'react-router-dom';
import './Navigation.scss'

function Navigation() {
    return(
        <div className="nav">
            <div className="nav__container">
                <Link className="nav__link" to="/">Main page</Link>
                <Link className="nav__link" to={{
                    pathname: '/about',
                    state: {
                        fromLocation: true
                    }
                }}>About project</Link>
            </div>
        </div>
    )
}

export default Navigation;