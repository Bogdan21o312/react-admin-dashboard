import React, {useContext, useEffect} from 'react';
import Layout from "../../components/Layout/Layout";
import {useAppDispatch} from "../../hooks/redux";
import {useAuth} from "../../hooks/useAuth";
import {removeUser} from "../../store/slices/userSlice";
import {Link, redirect, useNavigate} from "react-router-dom";
import {LOGIN_URL} from "../../router/config";
import {useNavigation} from "react-router-dom";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Index = () => {
    return (
        <Layout>
            Home Page
        </Layout>
    )
};

export default Index;
