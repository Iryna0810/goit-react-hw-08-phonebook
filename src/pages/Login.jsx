import { Button, Container, FormLabel, Input} from "@chakra-ui/react"
import { useState } from "react";
import {FormWrapper} from '../components/styled'
import { useDispatch } from "react-redux";
import { login } from "components/redux/auth/auth-thunk";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()

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
        e.preventDefault()
        dispatch(login({ email, password }))
        navigate('/contacts')
        setEmail('');
        setPassword('');
    }


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