import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </>
    );
};

export default Layout;
