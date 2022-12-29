import React from 'react';
import {testAPI} from "../../sevices/test";
import classes from "./Home.module.scss"
import Layout from "../../components/Layout/Layout";
import {useTheme} from "../../hooks/useTheme";
import Button from "../../components/@UI/Button/Button";

const Index = () => {
    const [theme, toggleTheme] = useTheme();
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
            <Button as={"button"} secondary={true} onClick={() => toggleTheme}>
                {theme === 'light' ? (
                    <div>light</div>
                ) : (
                    <div>dark</div>
                )}{' '}
                <span>Theme</span>
            </Button>
        </Layout>
    );
};

export default Index;