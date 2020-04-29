import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#!" className="navbar-brand">React & Redux</a>
            <form className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Agregar producto</button>
            </form>
        </nav>
    );
}

export default Header;