import React from 'react';
import Layout from "../../components/Layout/Layout";
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <Layout>
            <h1>Register</h1>
            <Index />
            <p>
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </Layout>
    );
};

export default Index;
