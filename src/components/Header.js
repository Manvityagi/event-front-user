import React from 'react';

const Header = () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className=" App-logo" >Logo</a>
                <ul className="right">
                    <li><a href="/">Coupons</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;