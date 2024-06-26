import React, { useState } from 'react';
import logo from "./../../assets/images/freshcart-logo.svg";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const Header = () => {
    let token = localStorage.getItem("token")
    const navigate = useNavigate();

    let handelSignOut = () => {
        localStorage.removeItem("token")
        navigate("login");
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={"/"} className="navbar-brand">
                    <img src={logo} alt="" width="110" height="30" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        token ?
                            <>
                                <Nav className="me-auto">
                                    <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
                                    <Link to={"cart"} className="nav-link">Cart</Link>
                                    <Link to={"categories"} className="nav-link">Categories</Link>
                                    <Link to={"products"} className="nav-link">Products</Link>
                                </Nav>
                                <div className='mr-auto pointer' onClick={handelSignOut}>
                                    SignOut
                                </div>
                            </>
                            :
                            <div className="d-flex ml-auto">
                                <div className='mr-10'>
                                    <Link to={"Register"} className="nav-link">Register</Link>
                                </div>
                                <div>
                                    <Link to={"Login"} className="nav-link">Login</Link>
                                </div>
                            </div>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Header;
