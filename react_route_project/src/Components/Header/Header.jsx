import React, { useState } from 'react';
import logo from "./../../assets/images/freshcart-logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to={"/"} className="navbar-brand">
                    <img src={logo} alt="" width="110" height="30" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"cart"} className="nav-link">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"categories"} className="nav-link">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"products"} className="nav-link">Products</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className='mr-10'>
                            <Link to={"Register"} className="nav-link">Register</Link>
                        </div>
                        <div>
                            <Link to={"Login"} className="nav-link">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
