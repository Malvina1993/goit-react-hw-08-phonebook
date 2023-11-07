import { useDispatch } from "react-redux";
import { logOutThunk } from "redux/userReducer";

export const UserMenu = ({ email }) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(logOutThunk());
     }

    return (
        <div>
            <p>Email: {email}</p>
            <button onClick={handleOnClick} type="button">LogOut</button>
        </div>
    )
  
}