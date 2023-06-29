import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Link } from "./SharedLayout.styled";
import { Container, Flex, VStack, Button } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { selectUserName} from '../components/redux/selectors'
import { selectToken } from "../components/redux/selectors";
import { logout } from "./redux/auth/auth-thunk";
import { dellToken, setToken } from "services/auth";
import {getCurrentProfile} from "../components/redux/auth/auth-thunk"


export const SharedLayout = () => {
    const isAuth = useSelector(selectToken)
    const dispatch = useDispatch();
    const name = useSelector(selectUserName)


    useEffect(() => {
        if (isAuth) {
            setToken(isAuth)
            dispatch(getCurrentProfile())
                .unwrap()
                .catch(() => dispatch(logout()))
        }
    }, [dispatch, isAuth])

    const handleLogout = () => {
        dispatch(logout())
        dellToken()
    }

    return (
        <Container maxW="80vw">
            <Header justifyContent="center" >
                    <Flex gap={120} alignItems="center">
                        {!isAuth ?
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                            : <> <Link to="/contacts">Contacts</Link>
                                 <p>Welcome {name}</p>
                                 <Button onClick={() => { handleLogout() }}>Logout</Button>
                            </>
                        }
                    </Flex>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Container maxW="container.lg" p={10}>
                    <Flex>
                        <VStack
                            w="full"
                            h="full" p={10}
                            spacing={10}
                            bg="blue.50"
                            alignItems="center"
                        >
                            <Outlet />
                        </VStack>
                    </Flex>
                </Container>
            </Suspense>
        </Container>
    )
};