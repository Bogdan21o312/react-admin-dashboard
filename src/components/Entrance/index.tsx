import React, {useState} from 'react';
import classes from "./Entrance.module.scss"
import Text from "../@UI/Text";
import Button from "../@UI/Button";
import Input from "../@UI/Input";
import {useAppDispatch} from "../../hooks/redux";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../store/slices/userSlice";
import EntranceAnimated from "./EntranceAnimated";


const Index = () => {
    const [formVariant, setFormVariant] = useState(true);

    const dispatch = useAppDispatch();

    let switchTitle = 'Welcome Back !'
    let switchText = 'To keep connected with us please login with your personal info'
    let switchButton = 'SIGN IN'

    let mainTitle = 'Create Account'
    let mainText = 'or use email for registration'
    let mainButton = 'SIGN UP'

    let mainForgotPassword = 'Forgot password'

    if (!formVariant) {
        switchTitle = 'Hello Friend !'
        switchText = 'Enter your personal details and start journey with us'
        switchButton = 'SIGN UP'

        mainTitle = 'Sign in to Website'
        mainText = 'or use your email account'
        mainButton = 'SIGN IN'

        mainForgotPassword = ''
    }

    const addClasses = formVariant? '' : classes.sw
    const addClassess = formVariant? '' : classes.sws

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
            })
            .catch(console.error)
    }
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
            })
    }

    const toggleForm = () => {
        setFormVariant(!formVariant)
    }

    let main = classes.main


    return (
        <div className={classes.body}>
            <EntranceAnimated state={formVariant} functiaaon={main}>
                <div className={`${classes.main} ${addClasses}`}>
                    <div className={classes.mainContent}>
                        <div className={classes.mainBlockText}>
                            <Text as={'h1'} title center>
                                {mainTitle}
                            </Text>
                            <Text as={'p'} text center>
                                {mainText}
                            </Text>
                        </div>
                        <div className={classes.mainForm}>
                            <Input/>
                            <Input/>
                            <Input/>
                        </div>
                        <div className={classes.btn}>
                            <div className={classes.mainForgotPassword}>
                                <Text href={'#'} as={'a'} link center>
                                    {mainForgotPassword}
                                </Text>
                            </div>
                        </div>
                        <div className={classes.btn}>
                            <Button onClick={toggleForm} secondary>
                                {mainButton}
                            </Button>
                        </div>
                    </div>
                </div>
            </EntranceAnimated>
            <div className={`${classes.switch} ${addClassess}`}>
                <div className={classes.switchContent}>
                    <Text as={'h2'} title center>
                        {switchTitle}
                    </Text>
                        лорем
                    <Text as={'p'} text center>
                        {switchText}
                    </Text>
                    <div className={classes.btn}>
                        <Button onClick={toggleForm} secondary>
                            {switchButton}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Index;
