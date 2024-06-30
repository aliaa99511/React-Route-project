import React from "react";
import Products from "../../Components/Products/Products"
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HomePage</title>
            </Helmet>
            <Products />
        </div>
    )
};

export default Home;
