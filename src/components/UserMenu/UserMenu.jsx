import { useDispatch } from "react-redux";
import { logOutThunk } from "redux/userReducer";

import css from '../Navigation/Navigation.module.css';


export const UserMenu = ({ email }) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(logOutThunk());
     }

    return (
        <div className={css.userMenu}>
            <p >Email: {email}</p>
            <button className={css.userLogout} onClick={handleOnClick} type="button">LogOut</button>
        </div>
    )
  
}

