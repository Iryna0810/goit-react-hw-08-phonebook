import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {selectToken} from '../redux/selectors'

export default function PrivateRoute({ children }) {
    const isAuth = useSelector(selectToken)
    const location = useLocation()
    return isAuth ? children : <Navigate to='/login' state={location} /> 
}