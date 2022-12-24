import React from 'react';
import {testAPI} from "../../sevices/test";
import classes from "./Home.module.scss"
import Layout from "../../components/@UI/Layout";

const Index = () => {
    const {data: test, isLoading, error} = testAPI.useFetchAllTestQuery('')

    return (
        <Layout>
            {isLoading && <h1>Loading...</h1>}
            {error && <h2>Error...</h2>}
            {test && test.map(test =>
                <div key={test.id}>
                    {test.id}
                    {test.body}
                </div>
            )}

        </Layout>
    );
};

export default Index;