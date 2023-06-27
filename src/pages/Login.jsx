import { Button, Container, FormLabel, Input} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import {FormWrapper} from '../components/styled'
import { useDispatch, useSelector } from "react-redux";
import { login } from "components/redux/auth/auth-thunk";
import {selectToken} from '../components/redux/selectors'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const isAuth = useSelector(selectToken)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default: return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        dispatch(login({ email, password }))
        setEmail('');
        setPassword('');
    }

    useEffect(() => {
        isAuth && navigate('/contacts')
    },[isAuth, navigate] )

    return (
        <Container p={10}>
            <FormWrapper action="" onSubmit={handleSubmit}>
                <FormLabel mt={10}>
                    Email
                </FormLabel>
                <Input
                    placeholder="Input your email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                ></Input>
                <FormLabel mt={10}>
                    Password
                </FormLabel>
                <Input
                    placeholder="Input your password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                ></Input>
            <Button type="submit" size='lg' w="full" mt={10}>Login</Button>
            </FormWrapper>
        </Container>
    )
};

export default Login 