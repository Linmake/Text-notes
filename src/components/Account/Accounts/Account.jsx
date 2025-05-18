import { Link } from "react-router-dom";
import LogoAccount from "./LogoAccount";
import styled from "styled-components";
import axios from "axios";
import { UseData } from "../../../context/dataContext";

const AccountContainer = styled.li`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 30%;
  justify-content: center;
  align-items: center;
  height: 52%;
  box-sizing: border-box;
  margin-left: ${ (props) => props.marginLeft || '0' };
`;

const Dropdown = styled.li``;

const DropdownMenu = styled.ul`
`;

export default function Account({ nameAccount, mainRoute, marginLeft }) { 

  const {login, setLogin} = UseData()
  const handlerLogout = async() => {
    await axios.get("http://localhost:4000/account/logout", {withCredentials: true})
    setLogin(false)
  }

  return (
    
    (!login)
    ? (
      <AccountContainer marginLeft={marginLeft} >
        <Link className="nav-link" to={`${mainRoute}/Account/signup/email`}>Sign up</Link>
        <Link className="nav-link" to={`${mainRoute}/Account/signin/`}>Login</Link>
      </AccountContainer>
     )
     :(<AccountContainer marginLeft={marginLeft} >
      <Link to={`${mainRoute}/projects-menu`}>
        <LogoAccount />
      </Link>

      <Dropdown className="nav-item dropdown">
        <li
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {nameAccount}
        </li>
        <DropdownMenu className="dropdown-menu">
          <li>
            <button onClick={e => handlerLogout(e)} role="button" className="nav-item dropdown-item">
              Sign out
            </button>
          </li>
        </DropdownMenu>
      </Dropdown>
    </AccountContainer>
  ))
}
