import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { SharedLayout } from "../SharedLayout";
import { Home } from "../../pages/Home"
import PublicRoute from "./PublicRoute";
import PrivateRoute from './PrivateRoute'

const ContactsList = lazy(() => import("../../pages/Contacts"))
const Register = lazy(() => import("../../pages/Register"))
const Login = lazy(() => import("../../pages/Login"))


export const App = () => {


  return (
     
    <ChakraProvider>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>}></Route>
          <Route path="login" element={
            <PublicRoute>
            <Login />
            </PublicRoute>
            }></Route>
          <Route path="register" element={
           <PublicRoute>
            <Register />
            </PublicRoute>
          }></Route>        
          <Route path="contacts" element={
            <PrivateRoute>
              <ContactsList />
            </PrivateRoute>}>
            </Route>
        </Route>
        </Routes>

      </ChakraProvider>
  )
}


  