import {useNavigate} from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from '../../../store/slices/userSlice';
import {useAppDispatch} from "../../../hooks/redux";

const Index = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <></>
    )
}

export {Index}
