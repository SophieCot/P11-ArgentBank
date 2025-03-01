import React from "react";
import { Link } from "react-router-dom"; // Utilisation de Link pour la navigation
import "../sass/Nav.scss";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/userSlice";

function Nav() {
  const dispatch=useDispatch()
  const { token,user} = useSelector((state) => state.user);
  return (
    <nav className="main-nav">
    {/* <a className="main-nav-logo" href="/">
        <h1 className="sr-only">Argent Bank</h1>
  </a> */}
      <div>
        {token ? (
          <div className="authNav">
            <Link className="main-nav-item" to="/profile"> <i className="fa fa-user-circle"></i>{user.userName}</Link>
          <div onClick={()=> dispatch(userLogout())}> <i class="fa-solid fa-right-from-bracket"></i>Sign out</div>
          </div>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
