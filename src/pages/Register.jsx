import { Button, Container, FormLabel, Input} from "@chakra-ui/react"
import { useState } from "react";
import {FormWrapper} from '../components/styled'
import { useDispatch } from "react-redux";
import { register } from "components/redux/auth/auth-thunk";

const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default: return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
        dispatch(register({ name, email, password }))
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <Container p={10}>
            <FormWrapper action="" onSubmit={handleSubmit}>
                 <FormLabel >
                    Name
                </FormLabel>
                <Input
                    placeholder="Input your name"
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    name="name"
                    value={name}
                    onChange={handleChange}
                ></Input>
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
            <Button type="submit" size='lg' w="full" mt={10}>Subscribe</Button>
            </FormWrapper>
        </Container>
    )
}

export default Register