import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Link } from "./SharedLayout.styled";
import { Container, Flex, VStack, Button } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { selectUser, selectUserName} from '../components/redux/selectors'
import { selectToken } from "../components/redux/selectors";
import { logout } from "./redux/auth/auth-thunk";
import { dellToken, setToken } from "services/auth";
import {getCurrentProfile} from "../components/redux/auth/auth-thunk"


export const SharedLayout = () => {
    const isAuth = useSelector(selectToken)
    const user = useSelector(selectUser);
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector(selectUserName)


  useEffect(() => {
      if (isAuth && !user) {
          setToken(isAuth)
      dispatch(getCurrentProfile())
          .unwrap()
              .catch(() => dispatch(logout()))
      }
  }, [dispatch, isAuth, user ])

    const handleLogout = () => {
        dispatch(logout())
        dellToken()
        // navigate('/')
        console.log(name)
    }

    return (
        <Container maxW="80vw">
            <Header>
                <nav>
                    <Flex gap={100} alignItems="center" justifyContent="space-between">
                        {!isAuth ? 
                        <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        </>
                         : <Flex gap={100} alignItems="center" justifyContent="center"> <Link to="/contacts">Contacts</Link>
                            <div style={{
                                display: "flex",
                                    gap: '50px',    
                            }}>
                            <p>Welcome {name}</p>       
                            <Button onClick={() =>{handleLogout()}}>Logout</Button>
                    </div>
                        </Flex>
                    }                   
                        </Flex>
                </nav>
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
}