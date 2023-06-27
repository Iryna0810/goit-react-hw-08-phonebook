import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {selectToken} from "../redux/selectors"
import { Navigate, useLocation } from "react-router-dom";

 const PublicRoute = ({ children }) => {
     const isAuth = useSelector(selectToken);
     const location = useLocation();
     return !isAuth ? children : <Navigate to={location.state ?? "/" }/> ;
}
export default PublicRoute