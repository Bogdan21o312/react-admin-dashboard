import {Form, useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from '../../../store/slices/userSlice';
import {useAppDispatch} from "../../../hooks/redux";

const Index = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <></>
    )
}

export {Index}
