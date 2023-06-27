import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {selectToken} from "../redux/selectors"
import { Navigate } from "react-router-dom";

 const PublicRoute = ({ children }) => {
    const isAuth = useSelector(selectToken);
    return !isAuth ? children : <Navigate to="/" /> ;
}
export default PublicRoute