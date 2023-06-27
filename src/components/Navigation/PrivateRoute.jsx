import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {selectToken} from '../redux/selectors'

export default function PrivateRoute({ children }) {
    const isAuth = useSelector(selectToken)
    // const navigate = useNavigate();
    return isAuth ? children : <Navigate to="/login"/> 
}