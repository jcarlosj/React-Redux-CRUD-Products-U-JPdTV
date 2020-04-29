import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand">React & Redux</Link>
            <form className="form-inline">
                <Link to="/product/new" className="btn btn-outline-success my-2 my-sm-0">
                    Agregar producto
                </Link>
            </form>
        </nav>
    );
}

export default Header;